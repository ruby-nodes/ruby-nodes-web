import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("container mx-auto", className)}>{children}</div>
  );
}
