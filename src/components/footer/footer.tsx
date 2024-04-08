import Container from "../common/Container";
import Logo from "../menu/logo";
import Navigation from "../menu/nav";
import Socials from "../menu/socials";

export default function Footer() {
  return (
    <footer className=" bg-c-container">
      <Container>
        <div className="h-[27px]" />
        <div className="h-[1px] w-full bg-c-primary"></div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center py-7">
          <Logo className="mb-7 lg:mb-0" />
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-7 lg:gap-14">
            <Navigation
              className="text-start gap-7 lg:gap-12"
              items={[
                { title: "Home", href: "/" },
                { title: "About", href: "/about" },
                { title: "Contact", href: "/contact" },
                { title: "Staking", href: "/staking" },
              ]}
            />
            <Socials
              links={{
                x: "https://x.com",
                discord: "https://discord.com",
                telegram: "https://telegram.com",
              }}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
