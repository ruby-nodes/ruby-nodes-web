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
          High-performance RPC endpoints for the peaq Network
        </p>
        
        <p className="text-c-text">
          Peaq Network is a layer-1 blockchain specifically built to support Decentralized Physical Infrastructure 
          Networks (DePINs) and the broader Economy of Things (EoT). Our RPC infrastructure provides reliable, 
          low-latency access to the Peaq Network for your applications.
        </p>

        <div className="flex items-start gap-0 mt-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">What We Offer</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>Your own dedicated RPC node</li>
              <li>High-availability RPC endpoints with 99.99% uptime</li>
              <li>Deployment of your node world-wide</li>
              <li>Latency up to 50ms for your DePIN requests</li>  
              <li>Archive node access for historical data queries</li>
              <li>WebSocket and HTTP endpoints</li>
              <li>Best prices since we avoid expensive cloud deployments!</li>
            </ul>
          </div>
          
          <div className="flex-shrink-0 hidden md:block -ml-8">
            <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Our Experience</h2>
        <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
          <li>Running multiple peaq validators since the bootstrap of the network</li>
          <li>Operating more than 20 Substrate-based chains</li>
          <li>Part of the IBP providers - the fastest Substrate-based RPC network out there</li>
          <li>Firm members of Polkadot community and various DAOs</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Technical Specifications</h2>
        <p className="text-c-text">
          All our RPCs are running on bare metal servers with high-end CPUs optimized for a single-thread frequency
          which is crucial for Substrate-based chains like Peaq. At the same time, we can deploy your RPC node anywhere
          across the world which ensures the lowest latency possible for your requests.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get Started</h2>
        <p className="text-c-text">
          Contact us to discuss your peaq RPC requirements and get access to our infrastructure.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:hello@rubynodes.io" className="text-c-primary hover:underline">hello@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
