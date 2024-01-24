import { getTodos } from "@/lib/todo";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Todo } from "@prisma/client";

export default async function Todo() {
  const todos = await getTodos();

  // Dummy Data
  const todoList = [
    { id: 0, todo: "Tech Your DOg to walk and run" },
    { id: 1, todo: "Tech Your DOg to walk and run" },
    { id: 2, todo: "Tech Your DOg to walk and run" },
  ];

  return (
    <div className="bg-[#eee] rounded-[12px] w-[420px] p-[16px]">
      <TodoInput name="todo" type="text" />

      {/* TODO_LIST */}
      <ul className="py-[36px]">
        {/* @ts-ignore */}
        {todos?.map((todo: Todo) => (
          <TodoList key={todo.id} list={todo} />
        ))}
      </ul>
    </div>
  );
}
