import Paragraph from "../common/Paragraph";
import Diamond from "../../assets/diamond.svg";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

export default function SuccessStoryCard({ title, description }: Props) {
  return (
    <article className="bg-c-container  flex flex-col gap-3.5 items-center max-w-[640px] pt-16 pb-10 ~px-0/8">
      <div className="p-3.5 bg-c-primary w-max rounded-[999px]">
        <Image
          className="translate-y-[1px]"
          src={Diamond}
          alt="Diamond"
          width={20}
          height={15}
        />
      </div>
      <h3 className="text-c-text text-md font-bold font-rubik mb-2.5">
        {title}
      </h3>
      <Paragraph text={description} className="text-center" />
    </article>
  );
}
