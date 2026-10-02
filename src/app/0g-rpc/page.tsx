import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";
import ZeroGLogo from "@/assets/logos/0g.svg";

export const metadata: Metadata = {
  title: "0G RPC Infrastructure | Ruby Nodes",
  description:
    "High-performance 0G RPC endpoints. Reliable infrastructure for decentralized AI applications on 0G Network.",
};

export default function ZeroGRPCPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <div className="flex items-center gap-4">
        <h1 className="~text-2xl-clamped/2xl font-bold text-c-text leading-[1.2]">
          0G RPC Offering
        </h1>
        <Image src={ZeroGLogo} alt="0G" width={100} height={100} className="w-[100px] h-auto" />
      </div>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold text-c-text">
          Dedicated RPC infrastructure for 0G Network
        </p>
        
        <p className="text-c-text">
          0G is modular blockchain infrastructure designed for decentralized AI applications. Ruby Nodes
          provides dedicated access to the 0G Network for production applications, data workloads and
          internal services.
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
          <li>Running multiple 0G validators since the bootstrap of the first testnet</li>
          <li>One of the first mainnet validators</li>
          <li>Operating RPC infrastructure for latency-sensitive applications</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Technical Specifications</h2>
        <p className="text-c-text">
          RPC nodes run on dedicated bare-metal servers sized for 0G workloads. We agree the deployment
          region, node mode, storage profile, capacity assumptions and monitoring scope before production,
          then validate the endpoint against agreed acceptance criteria.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get Started</h2>
        <p className="text-c-text">
          Contact us to discuss your 0G RPC requirements and get access to our infrastructure.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:peter@rubynodes.io" className="text-c-primary hover:underline">peter@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
