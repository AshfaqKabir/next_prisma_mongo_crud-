"use client";

import { createTodoAction } from "@/app/actions/_actions";
import { Button, Input } from "@nextui-org/react";
import { useRef } from "react";

interface TodoInputType {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export default function TodoInput({
  name,
  type,
  placeholder,
  value,
}: TodoInputType) {
  const formElem = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const todo = data.get("todo");

    if (!todo || typeof todo !== "string") return;

    // Call a server action to create a todo
    await createTodoAction(todo);

    // RESET INPUT
    formElem.current?.reset();
  }
  return (
    <form ref={formElem} action={action} className="flex">
      <Input
        name={"todo"}
        type={"text"}
        label="Add Todo"
        className="rounded-r-none"
        radius="none"
      />
      <Button type="submit" className="rounded-l-none h-[56px]">
        ADD
      </Button>
    </form>
  );
}
