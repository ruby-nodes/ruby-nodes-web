import Ruby from "@/assets/rubys/06.png";
import PetrPavel from "@/assets/petr-pavel.png";
import Image from "next/image";

export default function AboutUsBanner() {
  return (
    <figure className="relative min-h-[600px] min-w-[600px]">
      <Image
        src={Ruby}
        alt="Ruby"
        height={354}
        width={440}
        className="absolute top-0 left-1/3 z-10"
      />
      <Image
        src={PetrPavel}
        alt="Petr Pavel"
        height={354}
        width={440}
        className="absolute top-0 z-20"
      />
      <div
        style={{
          background:
            "radial-gradient(closest-side at 50% 50%, #B32D3C 0%, #060815 100%) 0% 0% no-repeat padding-box",
        }}
        className="absolute top-0 left-0 w-full h-full"
      />
    </figure>
  );
}
