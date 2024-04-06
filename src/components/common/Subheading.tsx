import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  className?: string;
};

export default function Subheading({ title, className }: Props) {
  return (
    <h2
      className={twMerge(
        "text-xl text-c-text font-bold mx-auto font-rubik",
        className
      )}
    >
      {title}
    </h2>
  );
}
