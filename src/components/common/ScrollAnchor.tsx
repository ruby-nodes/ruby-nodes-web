type Props = {
  id: string;
};

export default function ScrollAnchor({ id }: Props) {
  return (
    <div
      id={id}
      className="absolute -top-[92px] left-0 min-h-1 min-w-1 invisible pointer-events-none"
    ></div>
  );
}
