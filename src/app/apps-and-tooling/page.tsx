import Container from "@/components/common/Container";
import { Metadata } from "next";
import ShowcaseCards from "@/components/appsAndTooling/ShowcaseCards";

export const metadata: Metadata = {
  title: "Apps & Tooling | Ruby Nodes",
  description:
    "Developer tools, monitoring solutions and SDKs. Build better blockchain applications with our suite of tools.",
};

export default function AppsAndToolingPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
        Apps & Tooling
      </h1>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold text-c-text">
          Applications for the blockchain
        </p>
        
        <p className="text-c-text">
          Besides providing top-tier infrastructure services, we have also developed and maintaned variety of tools as
          a part of collaboration with partners.
        </p>

        <h2 className="text-xl font-bold mb-4 text-c-text mt-8">Examples</h2>
      </div>

      <ShowcaseCards />

      <div className="prose prose-invert max-w-none mt-8">
        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Monitoring Solutions</h2>
        <p className="text-c-text">
          Our comprehensive monitoring setup uses industry-standard tools like Prometheus and Grafana,
          customized for blockchain infrastructure. Get real-time insights into your nodes&apos; performance,
          uptime, and potential issues before they become critical.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Custom Development</h2>

        <p className="text-c-text">
          Need a specific tool or integration? We provide custom development services for blockchain applications,
          scripts, and automation tools tailored to your exact requirements.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Open Source</h2>
        <p className="text-c-text">
          Many of our tools are open source and available to the community. We believe in contributing back
          to the blockchain ecosystem and helping developers build better applications.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Contact Us</h2>
        <p className="text-c-text">
          Interested in our tools or need custom development? Get in touch.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:peter@rubynodes.io" className="text-c-primary hover:underline">peter@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
