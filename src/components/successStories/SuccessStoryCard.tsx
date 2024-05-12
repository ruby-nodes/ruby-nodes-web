import Paragraph from "../common/Paragraph";
import Diamond from "../../assets/diamond.svg";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

export default function SuccessStoryCard({ title, description }: Props) {
  return (
    <article className="bg-c-container rounded-md p-8 flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div>
          <div className="p-3.5 bg-c-primary w-max rounded-[999px]">
            <Image
              className="translate-y-[1px]"
              src={Diamond}
              alt="Diamond"
              width={20}
              height={15}
            />
          </div>
        </div>
        <h3 className="text-c-text text-md font-bold font-rubik">{title}</h3>
      </div>
      <Paragraph text={description} />
    </article>
  );
}
