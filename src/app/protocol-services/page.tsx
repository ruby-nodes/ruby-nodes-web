import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";

export const metadata: Metadata = {
  title: "Protocol Services | Ruby Nodes",
  description:
    "Integration, staking and protocol operations. Partner with us for comprehensive blockchain protocol support.",
};

export default function ProtocolServicesPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
        Protocol Services
      </h1>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold text-c-text">
          How we support blockchain protocols
        </p>
        
        <p className="text-c-text">
          Operating a blockchain doesn&apos;t mean only spinning a handful of validators and RPC nodes. It also require teams
          to operate indexers, bootnodes, testnet RPCs or validators or devnet network. This is why we relieve teams
          from this infrastructure burden by offering the following.
        </p>

        <div className="flex items-start gap-0 mt-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">Our Services</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>Operating both public & private RPCs</li>
              <li>Running indexer nodes</li>
              <li>Operating testnet or devnet validators</li>
              <li>Integration of our monitoring and logging systems</li>
              <li>Performance monitoring and optimization</li>
              <li>Supporting more unique locations like Southeast Asia or LATAM with our RPCs</li>
              <li>Running bootnodes to bolster networks`s resiliency</li>
              <li>Community support and education</li>
            </ul>
          </div>
          
          <div className="flex-shrink-0 hidden md:block -ml-8">
            <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Our Experience</h2>
        <p className="text-c-text">
          There are several examples of protocols we are supporting behind the scenes, including some of the big names
          <ul>
            <li>Sui</li>
            <li>Walrus</li>
            <li>0G</li>
            <li>zkVerify</li>
            <li>And many more....</li>
          </ul>
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4 text-c-text">Contact Us</h2>
        <p className="text-c-text">
          Email: <a href="mailto:hello@rubynodes.io" className="text-c-primary hover:underline">hello@rubynodes.io</a>
        </p>
      </div>
    </Container>
  );
}
