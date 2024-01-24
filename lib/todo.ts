import { prisma } from "./prisma";

// Get all the TODOS
export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return todos;
  } catch (error) {
    return error;
  }
}

// Create A TODO
export async function createTodo(todo: string) {
  try {
    const inputTodo = await prisma.todo.create({ data: { todo } });
    return { inputTodo };
  } catch (error) {
    return error;
  }
}

// Delete A TODO
export async function deleteTodo(id: string) {
  // const deleteId = todo.get("deleteId");
  try {
    await prisma.todo.delete({ where: { id } });
  } catch (error) {
    return error;
  }
}

// Complete A TODO
export async function isCompletedTodo(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });

    if (!todo) return;

    const todoStatus = !todo.isCompleted;

    await prisma.todo.update({
      where: { id },
      data: { isCompleted: todoStatus },
    });

    return todoStatus;
  } catch (error) {
    return error;
  }
}
