"use server";

import { revalidatePath } from "next/cache";
import { createTodo, deleteTodo, isCompletedTodo } from "../../lib/todo";

// Create Todo Action
export async function createTodoAction(todo: string) {
  await createTodo(todo);

  revalidatePath("/");
}

// Delete Todo Action
export async function deleteTodoAction(id: string) {
  await deleteTodo(id);

  revalidatePath("/");
}

// isCompleted Todo Action
export async function isCompletedTodoAction(id: string) {
  await isCompletedTodo(id)

  revalidatePath("/");

}
