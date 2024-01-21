import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const todoList = [
    { id: 0, todo: "Tech Your DOg to walk and run" },
    { id: 1, todo: "Tech Your DOg to walk and run" },
    { id: 2, todo: "Tech Your DOg to walk and run" },
  ];

  return (
    <form className="bg-[#eee] rounded-[12px] w-[420px] p-[16px]">
      <TodoInput name="todo" type="text" />

      {/* TODO_LIST */}
      <ul className="py-[36px]">
        {todoList.map(({ id, todo }) => (
          <TodoList key={id} list={todo} />
        ))}
      </ul>
    </form>
  );
}
