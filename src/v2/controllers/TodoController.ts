import { Request, Response } from "express";
import { getRepository } from "typeorm";
import todoView from "../views/todo_views";
import * as Yup from "yup";

import Todo from "../models/Todo";

export default {
  async index(request: Request, response: Response) {
    const todoRepository = getRepository(Todo);

    const todos = await todoRepository.find({
      relations: ["images"],
    });

    return response.json(todoView.renderMany(todos));
  },

  async show(request: Request, response: Response) {
    const { id } = request.query;

    if (!id) {
      const todos = await getRepository(Todo).find({
        relations: ["images"],
      });

      if (!todos) {
        return response.status(401).json({ message: "Cannot get todos" });
      }

      return response.status(200).json(todos);
    }

    const todosRepository = getRepository(Todo);

    const todo = await todosRepository.findOneOrFail(String(id), {
      relations: ["images"],
    });

    return response.json(todoView.render(todo));
  },

  async create(request: Request, response: Response) {
    const { message } = request.body;

    const todosRepository = getRepository(Todo);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      message,
      images,
    };

    const schema = Yup.object().shape({
      message: Yup.string().min(3).max(206).required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const todos = todosRepository.create(data);

    await todosRepository.save(todos);

    return response.status(201).json(todos);
  },

  async update(request: Request, response: Response) {
    const { id } = request.query;
    const { message } = request.body;

    const todoRepository = getRepository(Todo);

    if (!message) {
      return response
        .status(400)
        .json({ message: "Missing message in request" });
    }

    if (!id) {
      return response.status(400).json({ message: "Missing id in request" });
    }

    const todo = await todoRepository.findOne({ where: { id } });

    todoRepository
      .save({
        ...todo,
        message,
      })
      .then((res) => {
        return response.status(204).send(res);
      });
  },

  async delete(request: Request, response: Response) {
    const { id } = request.query;

    const todoRepository = getRepository(Todo);

    if (!id) {
      return response.status(400).json({ message: "Missing id in request" });
    }

    const todo = await todoRepository.findOne({ where: { id } });

    if (!todo) {
      return response.status(400).json({ message: "Already deleted" });
    }

    todoRepository.delete(todo);

    return response.status(204).json("Delete with success");
  },
};
