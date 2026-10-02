import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocol Infrastructure Services | Ruby Nodes",
  description: "Managed validators, RPCs, indexers, bootnodes and development-network infrastructure for blockchain protocols.",
};

const services = [
  ["Network infrastructure", "Public and private RPCs, bootnodes, indexers and other protocol-specific services."],
  ["Pre-production networks", "Testnet and development-network infrastructure supporting launch preparation and operator testing."],
  ["Regional coverage", "Infrastructure deployed in agreed regions to improve geographic distribution and serve regional traffic."],
  ["Operational tooling", "Monitoring, logging and alerting integrated into the managed-service operating model."],
];

const experience = ["Sui", "Walrus", "0G", "zkVerify", "Additional networks available on request"];

export default function ProtocolServicesPage() {
  return (
    <div className="bg-c-bg">
      <Container className="py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">For protocol teams</p>
        <h1 className="max-w-4xl ~text-2xl-clamped/2xl font-bold leading-[1.15]">Operate the infrastructure around your protocol, not only the validator set</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-c-text-inactive">Ruby Nodes operates the RPCs, indexers, bootnodes, validators and development environments protocol teams need from testnet through production.</p>
      </Container>

      <section className="border-y border-c-menu-border bg-c-container py-16">
        <Container className="grid gap-5 md:grid-cols-2">
          {services.map(([title, description]) => (
            <article key={title} className="rounded-md border border-c-menu-border bg-c-bg p-7">
              <h2 className="mb-3 text-md font-bold">{title}</h2>
              <p className="leading-6 text-c-text-inactive">{description}</p>
            </article>
          ))}
        </Container>
      </section>

      <Container className="grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold">Operational visibility</h2>
          <p className="mb-6 leading-7 text-c-text-inactive">Our monitoring stack provides real-time visibility into node health, validator performance and service availability across supported networks.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://monitoring.rubynodes.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-c-primary px-6 py-3 text-center text-sm font-bold hover:bg-c-primary-hover">Monitoring dashboard</a>
            <a href="https://status.rubynodes.io/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-c-primary px-6 py-3 text-center text-sm font-bold hover:bg-c-primary">System status</a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Production experience</h2>
          <ul className="grid gap-3 text-sm">
            {experience.map((network) => (
              <li key={network} className="border-b border-c-menu-border pb-3">{network}</li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="border-t border-c-menu-border py-16">
        <h2 className="mb-4 text-xl font-bold">Discuss your protocol requirements</h2>
        <p className="mb-5 max-w-3xl leading-7 text-c-text-inactive">Share the network stage, required services, target locations and launch timeline. We will define the deployment boundaries and managed operating scope.</p>
        <a className="font-bold text-c-primary-text hover:text-c-text" href="mailto:peter@rubynodes.io?subject=Protocol%20infrastructure%20enquiry">Contact Peter →</a>
      </Container>
    </div>
  );
}
