import Image from "next/image";
import Container from "../common/Container";
import Logo from "../menu/logo";
import Navigation from "../menu/nav";
import Socials from "../menu/socials";
import Ruby from "@/assets/rubys/07.png";
import commonData from "@/data/common";

const {
  footer: { navigation },
  socials: { links },
} = commonData;

export default function Footer() {
  return (
    <>
      <div className="mt-12 lg:mt-40" />
      <footer className=" bg-c-container relative w-full ">
        <Image
          src={Ruby}
          alt="Ruby"
          className="absolute hidden lg:block bottom-14 -right-10 z-10"
        />
        <div className="bg-c-container z-10 relative">
          <Container>
            <div className="h-[27px]" />
            <div className="h-[1px] w-full bg-c-primary"></div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center py-7">
              <Logo className="mb-7 lg:mb-0" />
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-7 lg:gap-14">
                <Navigation
                  className="text-start gap-7 lg:gap-12"
                  items={navigation}
                />
                <Socials links={links} />
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
