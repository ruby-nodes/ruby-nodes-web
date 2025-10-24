import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";

export const metadata: Metadata = {
  title: "Validator Services | Ruby Nodes",
  description:
    "Professional validator services with industry-leading SLAs. Run and maintain validators across multiple blockchain networks.",
};

export default function ValidatorServicesPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
        Validator Services
      </h1>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold text-c-text">
          Running validators across all the blockchain space
        </p>
        
        <p className="text-c-text">
          We currrently operate validators on more than 25 blockchain networks, from leading protocols like 
          Ethereum or Sui to emerging ones like 0G or Somnia. All of our validators run on high-end dedicated bare metal 
          machines with non-stop monitoring and alerting in place. We provide a worldwide coverage to bolster 
          decentralization and resilience of blockchain networks.
        </p>

        <div className="flex items-start gap-0 mt-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">What We Offer</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>99.99% uptime SLA</li>
              <li>24/7 monitoring and alerting</li>
              <li>Automated failover and redundancy where suitable</li>
              <li>Performance optimization for maximum rewards</li>
              <li>Multi-network support (Ethereum, Polkadot, Sui, and more)</li>
              <li>Dedicated support team in multiple time zones</li>
            </ul>
          </div>
          
          <div className="flex-shrink-0 hidden md:block -ml-8">
            <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Get Started</h2>
        <p className="text-c-text">
          Contact us to discuss your validator needs.
        </p>
        <p className="text-c-text">
          Email: <a href="mailto:hello@rubynodes.io" className="text-c-primary hover:underline">hello@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
