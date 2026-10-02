import Container from "@/components/common/Container";
import RPCStaking from "@/components/staking/RPCStaking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dedicated Blockchain Infrastructure | Ruby Nodes",
  description: "Dedicated RPC, archive-node, indexer and cross-chain infrastructure designed around workload, region and resilience requirements.",
};

const useCases = [
  ["Private RPC endpoints", "Dedicated capacity and access boundaries for applications, trading systems, wallets and internal services."],
  ["Archive nodes and indexers", "Historical blockchain access and supporting infrastructure for analytics, reconciliation and data products."],
  ["Relayers and specialized nodes", "Bridge relayers and protocol-specific infrastructure operated within an agreed responsibility model."],
];

const deploymentDetails = [
  "AMD EPYC bare-metal configurations",
  "NVMe storage and up to 512 GB RAM",
  "Multi-region deployment options",
  "Load balancing and failover where applicable",
  "Continuous monitoring and alerting",
  "Capacity and latency validated during acceptance",
];

export default function PrivateInfrastructurePage() {
  return (
    <div className="bg-c-bg">
      <Container className="py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Dedicated infrastructure</p>
        <h1 className="max-w-4xl ~text-2xl-clamped/2xl font-bold leading-[1.15]">Private blockchain infrastructure designed around your workload</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-c-text-inactive">Ruby Nodes designs and operates dedicated RPC, archive, indexing and cross-chain infrastructure with capacity, location and resilience defined before deployment.</p>
      </Container>

      <section className="border-y border-c-menu-border bg-c-container py-16">
        <Container className="grid gap-5 md:grid-cols-3">
          {useCases.map(([title, description]) => (
            <article key={title} className="rounded-md border border-c-menu-border bg-c-bg p-7">
              <h2 className="mb-3 text-md font-bold">{title}</h2>
              <p className="text-sm leading-6 text-c-text-inactive">{description}</p>
            </article>
          ))}
        </Container>
      </section>

      <Container className="grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold">Deployment profile</h2>
          <p className="leading-7 text-c-text-inactive">The final configuration depends on network software, workload, traffic profile, retention requirements and target regions.</p>
        </div>
        <ul className="grid gap-3 text-sm">
          {deploymentDetails.map((detail) => (
            <li key={detail} className="border-b border-c-menu-border pb-3">✓ {detail}</li>
          ))}
        </ul>
      </Container>

      <section className="pb-20">
        <RPCStaking />
      </section>

      <Container className="border-t border-c-menu-border py-16">
        <h2 className="mb-4 text-xl font-bold">Request an infrastructure proposal</h2>
        <p className="mb-5 max-w-3xl leading-7 text-c-text-inactive">Share the required networks, expected request volume, data-retention needs, regions and availability requirements. We will propose an architecture and operating scope.</p>
        <a className="font-bold text-c-primary-text hover:text-c-text" href="mailto:peter@rubynodes.io?subject=Dedicated%20infrastructure%20enquiry">Contact Peter →</a>
      </Container>
    </div>
  );
}
