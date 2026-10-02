import Container from "@/components/common/Container";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institutional Blockchain Infrastructure | Ruby Nodes",
  description: "Dedicated, non-custodial blockchain infrastructure for financial institutions, custodians, funds and trading firms.",
};

const services = [
  ["Dedicated RPC infrastructure", "Private endpoints, load balancing, regional deployments and capacity sized to production workloads."],
  ["Managed validators", "Non-custodial validator operations with continuous monitoring, protocol-aware maintenance and agreed service levels."],
  ["Archive nodes and indexers", "Dedicated access to historical and indexed blockchain data for analytics, reconciliation and applications."],
  ["Protocol infrastructure", "Sequencers, bootnodes, relayers and testnet infrastructure for networks requiring an experienced operator."],
];

const process = [
  ["01", "Requirements review", "We document networks, workloads, access, regions, governance and risk requirements."],
  ["02", "Architecture & scope", "You receive a proposed deployment model, responsibilities, service levels and commercial scope."],
  ["03", "Deployment & acceptance", "We provision, harden, test and agree acceptance criteria before production traffic is introduced."],
  ["04", "Managed operations", "Ruby Nodes monitors, maintains and reports on the service with defined escalation paths."],
];

export default function InstitutionalPage() {
  return (
    <div className="bg-c-bg">
      <Container className="py-20">
        <p className="text-c-primary-text text-xs font-bold uppercase tracking-[0.18em] mb-4">For financial institutions</p>
        <h1 className="~text-2xl-clamped/2xl font-bold max-w-4xl leading-[1.15]">Operate onchain without building every infrastructure layer in-house</h1>
        <p className="text-c-text-inactive text-lg leading-8 max-w-3xl mt-6">Ruby Nodes provides dedicated validator, RPC and protocol infrastructure for institutions that need clear ownership, resilient deployment and an experienced operational partner.</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <a className="bg-c-primary hover:bg-c-primary-hover rounded-lg px-7 py-4 font-bold text-sm" href="mailto:peter@rubynodes.io?subject=Institutional%20infrastructure%20enquiry">Discuss your requirements</a>
          <Link className="border border-c-primary hover:bg-c-primary rounded-lg px-7 py-4 font-bold text-sm" href="/security">Review security & resilience</Link>
        </div>
      </Container>

      <section className="bg-c-container border-y border-c-menu-border py-16">
        <Container>
          <h2 className="text-xl font-bold mb-8">Infrastructure services</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map(([title, description]) => <article key={title} className="bg-c-bg border border-c-menu-border rounded-md p-7"><h3 className="font-bold text-md mb-3">{title}</h3><p className="text-c-text-inactive leading-6">{description}</p></article>)}
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold mb-5">Designed for due diligence</h2>
            <p className="text-c-text-inactive leading-7 mb-6">Each engagement is scoped around your technical and control requirements. We can support review of the proposed architecture, operational responsibilities, hosting locations, access model, monitoring, resilience and incident escalation.</p>
            <ul className="space-y-3 text-sm">
              {['Non-custodial service model','Dedicated deployment options','Multi-region infrastructure','24/7 monitoring and alerting','Defined escalation paths','Service-specific SLA and reporting'].map(item => <li key={item} className="border-b border-c-menu-border pb-3">✓ {item}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-5">Engagement process</h2>
            <div className="space-y-6">{process.map(([number,title,description]) => <div key={number} className="flex gap-4"><span className="text-c-primary-text font-bold">{number}</span><div><h3 className="font-bold mb-1">{title}</h3><p className="text-c-text-inactive text-sm leading-6">{description}</p></div></div>)}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
