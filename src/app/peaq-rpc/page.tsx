import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";
import PeaqLogo from "@/assets/logos/peaq.svg";

export const metadata: Metadata = {
  title: "Peaq RPC Infrastructure | Ruby Nodes",
  description:
    "High-performance Peaq RPC endpoints. Reliable infrastructure for DePIN applications on Peaq Network.",
};

export default function PeaqRPCPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <div className="flex items-center gap-4">
        <h1 className="~text-2xl-clamped/2xl font-bold text-c-text leading-[1.2]">
          Peaq RPC Offering
        </h1>
        <Image src={PeaqLogo} alt="Peaq" width={130} height={130} className="w-[130px] h-auto mt-2" />
      </div>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold text-c-text">
          Dedicated RPC infrastructure for peaq Network
        </p>
        
        <p className="text-c-text">
          Peaq Network is a layer-1 blockchain built to support decentralized physical infrastructure
          networks. Ruby Nodes provides dedicated access to peaq for production applications, data
          workloads and internal services.
        </p>

        <div className="flex items-start gap-0 mt-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">What We Offer</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>Dedicated RPC nodes with isolated capacity</li>
              <li>Availability targets defined for the deployment</li>
              <li>Deployment in agreed regions</li>
              <li>Latency and capacity validated during acceptance testing</li>
              <li>Archive node access for historical data queries</li>
              <li>WebSocket and HTTP endpoints</li>
              <li>Bare-metal deployment with a service-specific commercial model</li>
            </ul>
          </div>
          
          <div className="flex-shrink-0 hidden md:block -ml-8">
            <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Our Experience</h2>
        <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
          <li>Running multiple peaq validators since the bootstrap of the network</li>
          <li>Infrastructure experience across multiple Substrate-based networks</li>
          <li>Infrastructure Builders Programme provider</li>
          <li>Active participation in the Polkadot ecosystem</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Technical Specifications</h2>
        <p className="text-c-text">
          RPC nodes run on dedicated bare-metal servers sized for peaq workloads. We agree the deployment
          region, node mode, storage profile, capacity assumptions and monitoring scope before production,
          then validate the endpoint against agreed acceptance criteria.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get Started</h2>
        <p className="text-c-text">
          Contact us to discuss your peaq RPC requirements and get access to our infrastructure.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:peter@rubynodes.io" className="text-c-primary hover:underline">peter@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
