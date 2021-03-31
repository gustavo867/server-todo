import { Request, Response } from "express";
import db from "../database/connection";

export default class TodoControllers {
  async show(req: Request, res: Response) {
    const { id } = req.query;
    if (!id) {
      const todos = await db("todos");

      return res.status(200).json(todos);
    }

    const todos = await db("todos").where("todos.id", "=", `${id}`);

    return res.status(200).json(todos);
  }

  async create(req: Request, res: Response) {
    const { message } = req.body;

    const trx = await db.transaction();

    try {
      await trx("todos").insert({
        message,
      });

      await trx.commit();

      return res.status(200).json({
        success: true,
        created: { message },
      });
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        success: false,
        error: "Unexpected error while creating a new todo.",
        parameters: { message },
        error_log: err,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.query;
    const trx = await db.transaction();

    if (!id) {
      return res.status(400).json({ message: "Missing id in request" });
    }

    const todo = await trx("todos").where("id", `${id}`).select("id").first();

    if (todo.id !== Number(id)) {
      return res.status(401).json({ error: "Operation not permited." });
    }

    await trx("todos").where("id", `${id}`).delete();

    await trx.commit();

    return res.status(204).json({ message: "Delete with success" });
  }
}
