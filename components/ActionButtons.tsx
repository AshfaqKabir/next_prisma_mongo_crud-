import { Button } from "@nextui-org/react";

interface ButtonProps {
  id: string;
  icon: JSX.Element;
  className?: string;
  handleClick?: () => void;
  // action: (data: FormData) => Promise<void | boolean>;
  action?: ((formData: FormData) => Promise<void>) | undefined;
}

export default function ActionButtons({
  id,
  icon,
  className,
  handleClick,
  action,
}: ButtonProps) {
  return (
    <form action={action}>
      <input type="hidden" name="deleteId" value={id} />
      <Button
        className={`min-w-[40px] min-h-[40px] rounded-[8px] p-[8px] ${className}`}
        onClick={handleClick}
        type="submit"
      >
        {icon}
        {/* ADD */}
      </Button>
    </form>
  );
}
