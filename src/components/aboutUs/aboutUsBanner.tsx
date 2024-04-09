import AboutUsImage from "@/assets/about-us-fade.png";
import Image from "next/image";

export default function AboutUsBanner() {
  return (
    <figure className="relative w-[126%] -ml-[13%] lg:w-full lg:ml-0 lg:p-8">
      <Image src={AboutUsImage} alt="Ruby" className="w-full h-auto" />
    </figure>
  );
}
