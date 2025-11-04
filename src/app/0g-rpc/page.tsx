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
          High-performance RPC endpoints for 0G Network
        </p>
        
        <p className="text-c-text">
          0G is the largest AI L1 chain, an infinitely scalable, fully composable, and purpose-built modular 
          blockchain for decentralized AI applications. Our RPC infrastructure provides reliable, low-latency 
          access to the 0G Network and the Aristotle Mainnet, the world&apos;s first Decentralized AI Operating 
          System (dAIOS).
        </p>

        <div className="flex items-start gap-0 mt-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">What We Offer</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>Your own dedicated RPC node</li>
              <li>High-availability RPC endpoints with 99.99% uptime</li>
              <li>Deployment of your node world-wide</li>
              <li>Latency up to 50ms for your 0G requests</li>  
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
          <li>Running multiple 0G validators since the bootstrap of the first testnet</li>
          <li>One of the first mainnet validators</li>
          <li>Running a high-performance RPC infrastructure for trading and arbitrages</li>
          <li></li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Technical Specifications</h2>
        <p className="text-c-text">
          All our RPCs are running on bare metal servers with high-end CPUs optimized for a single-thread frequency
          which is crucial for Cosmos SDK-based chains like 0G. At the same time, we can deploy your RPC node anywhere
          across the world which ensures the lowest latency possible for your requests.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get Started</h2>
        <p className="text-c-text">
          Contact us to discuss your 0G RPC requirements and get access to our infrastructure.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:hello@rubynodes.io" className="text-c-primary hover:underline">hello@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
