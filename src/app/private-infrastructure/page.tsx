import Container from "@/components/common/Container";
import RPCStaking from "@/components/staking/RPCStaking";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";

export const metadata: Metadata = {
  title: "Private Infrastructure | Ruby Nodes",
  description:
    "Dedicated servers and private networks. Custom infrastructure solutions tailored to your blockchain needs.",
};

export default function PrivateInfrastructurePage() {
  return (
    <div className="bg-c-bg">
      <Container className="flex flex-col items-start w-full pt-20">
        <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] leading-[1.2]">
          Private Infrastructure
        </h1>
        
        <div className="prose prose-invert max-w-none mt-8">
          <p className="text-lg font-semibold text-c-text">
            Dedicated servers & RPCs
          </p>
          
          <p className="text-c-text">
            Besides running a public good infrastructure, there&apos;s also a need for private infra dedicated to the needs of our clients. 
            Whether you are an arbitrage trader, dApp receiving heavy traffic or a data analytics project, 
            our deployment can serve any of your infrastructure needs.
          </p>

          <div className="flex items-start gap-0 mt-8 mb-8">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-4 text-c-text">Our solutions</h2>
              <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
                <li>High-performance RPCs for traders</li>
                <li>Latency in tens of milliseconds</li>
                <li>Load-balancing and failover for maximum uptime</li>
                <li>On-chain data storage services</li>
                <li>Deployment anywhere in the world</li>
              </ul>
            </div>
            
            <div className="flex-shrink-0 hidden md:block -ml-8">
              <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
            </div>
          </div>
        </div>
      </Container>
      
      <RPCStaking />
      
      <Container className="flex flex-col items-start w-full py-20">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Hardware Specifications</h2>
          <p className="text-c-text">
            We run on top-tier hardware including AMD EPYC processors, up to 512GB RAM, and NVMe SSD arrays.
            Our infrastructure is distributed across multiple continents for optimal latency and reliability.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Use Cases</h2>
          <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
            <li>Private RPC infrastructure for dApps</li>
            <li>High-performance RPCs for trading bots</li>
            <li>Archive nodes and indexers</li>
            <li>Data analytics</li>
            <li>Wallet integrations</li>
            <li>Bridge relayers and cross-chain infrastructure</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get a Quote</h2>
          <p className="text-c-text">
            Contact us to discuss your infrastructure requirements and receive a custom quote.
          </p>
          <p className="text-c-text">
            Email: <a href="mailto:hello@rubynodes.io" className="text-c-primary hover:underline">hello@rubynodes.io</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
