import ActionButtons from "./ActionButtons";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function TodoList({ list }: { list: string }) {
  return (
    <li className="text-[#000] my-[12px] flex justify-between items-center">
      <p className="14px">{list}</p>
      <div className="flex items-center">
        <ActionButtons
          icon={<FiEdit size={16} />}
          className={"rounded-none border-r-1"}
        />
        <ActionButtons
          icon={<FiEdit size={16} />}
          className={"rounded-none border-r-1"}
        />
        <ActionButtons
          icon={<FiTrash2 size={16} />}
          className={"rounded-l-none"}
        />
      </div>
    </li>
  );
}
