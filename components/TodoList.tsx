import { Todo } from "@prisma/client";
import ActionButtons from "./ActionButtons";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import { Checkbox } from "@nextui-org/react";
import {
  deleteTodoAction,
  isCompletedTodoAction,
} from "@/app/actions/_actions";

interface TodoListProps {
  list: Todo;
}

async function deleteAction(data: FormData) {
  "use server";
  const deleteId = data.get("deleteId");
  await deleteTodoAction(deleteId as string);
}

async function completedAction(data: FormData) {
  "use server";
  const completedId = data.get("completedId");
  await isCompletedTodoAction(completedId as string);
}

export default function TodoList({ list }: TodoListProps) {
  return (
    <li className="text-[#000] my-[12px] flex justify-between items-center">
      <form action={completedAction}>
        <input type="hidden" name="completedId" value={list.id} />
        <button type="submit" className="text-left">
          <Checkbox defaultSelected={list.isCompleted} lineThrough>
            <p className={"text-[14px] leading-[20px] text-[#000]"}>
              {list.todo}
            </p>
          </Checkbox>
        </button>
      </form>
      <div className="flex items-center">
        {/* <ActionButtons
          action={() => ()}
          icon={<FiEdit size={16} />}
          className={"rounded-none border-r-1"}
        /> */}
        <ActionButtons
          id={list.id}
          action={deleteAction}
          icon={<FiTrash2 size={16} />}
          className={"rounded-l-none"}
        />
      </div>
    </li>
  );
}
