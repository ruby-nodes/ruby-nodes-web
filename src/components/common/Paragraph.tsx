import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

export default function Paragraph({ text, className }: Props) {
  return (
    <p className={twMerge("leading-6 text-sm text-c-text font-inter")}>
      {text}
    </p>
  );
}
