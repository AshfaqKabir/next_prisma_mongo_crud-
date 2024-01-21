import { Button, Input } from "@nextui-org/react";

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
  return (
    <div className="flex">
      <Input
        name={name}
        type={type}
        value={value}
        label="Add Todo"
        className="rounded-r-none"
        radius="none"
      />
      <Button className="rounded-l-none h-[56px]">ADD</Button>
    </div>
  );
}
