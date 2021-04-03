import Todo from "../models/Todo";
import imagesView from "./images_view";

export default {
  render(todo: Todo) {
    return {
      id: todo.id,
      message: todo.message,
      images: imagesView.renderMany(todo.images),
    };
  },

  renderMany(todo: Todo[]) {
    return todo.map((td) => this.render(td));
  },
};
