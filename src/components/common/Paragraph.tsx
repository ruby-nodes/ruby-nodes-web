import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

export default function Paragraph({ text, className }: Props) {
  return (
    <p
      className={twMerge("text-sm text-c-text font-inter", className)}
      style={{
        // does not work with tailwind for some reason
        lineHeight: "1.563rem",
      }}
    >
      {text}
    </p>
  );
}
