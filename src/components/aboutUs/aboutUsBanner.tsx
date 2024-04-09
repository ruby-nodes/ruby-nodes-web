import AboutUsImage from "@/assets/about-us-fade.png";
import Image from "next/image";

export default function AboutUsBanner() {
  return (
    <figure className="relative w-full p-8">
      <Image
        src={AboutUsImage}
        alt="Ruby"
        style={{
          width: "100%",
          height: "auto",
        }}
        className=""
      />
    </figure>
  );
}
