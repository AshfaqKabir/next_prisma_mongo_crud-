import { Button } from "@nextui-org/react";

interface ButtonProps {
  icon: JSX.Element;
  className?: string;
  handleClick?: () => void;
}

export default function ActionButtons({
  icon,
  className,
  handleClick,
}: ButtonProps) {
  return (
    <Button
      className={`min-w-[40px] min-h-[40px] rounded-[8px] p-[8px] ${className}`}
      onClick={handleClick}
    >
      {icon}
      {/* ADD */}
    </Button>
  );
}
