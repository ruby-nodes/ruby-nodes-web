import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Resilience | Ruby Nodes",
  description: "Ruby Nodes infrastructure ownership, access, monitoring, resilience and incident-response principles.",
};

const controls = [
  ["Infrastructure ownership", "We operate high-performance dedicated infrastructure across multiple continents, reducing dependence on a single cloud or region."],
  ["Access boundaries", "Client environments and access requirements are defined per engagement. Dedicated deployment options are available for workloads requiring isolation."],
  ["Continuous operations", "Production systems use continuous monitoring and alerting. Escalation and support expectations are agreed as part of the service scope."],
  ["Resilience", "Load balancing, redundancy and automated failover are designed into deployments where supported by the protocol and client requirements."],
  ["Non-custodial model", "Ruby Nodes does not take custody of delegated client assets. Key ownership and signing responsibilities are documented for each service."],
  ["Data and privacy", "Personal data is handled under our privacy policy and applicable GDPR requirements. Deployment-specific data flows are reviewed during scoping."],
];

export default function SecurityPage() {
  return (
    <div className="bg-c-bg">
      <Container className="py-20">
        <p className="text-c-primary-text text-xs font-bold uppercase tracking-[0.18em] mb-4">Security & resilience</p>
        <h1 className="~text-2xl-clamped/2xl font-bold max-w-4xl leading-[1.15]">A transparent operating model for critical blockchain infrastructure</h1>
        <p className="text-c-text-inactive text-lg leading-8 max-w-3xl mt-6">This page summarizes our operating principles. Engagement-specific controls, responsibilities and evidence are reviewed during technical due diligence and documented in the service agreement.</p>
      </Container>
      <section className="bg-c-container border-y border-c-menu-border py-16">
        <Container className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {controls.map(([title,description]) => <article key={title} className="bg-c-bg border border-c-menu-border rounded-md p-7"><h2 className="font-bold text-md mb-3">{title}</h2><p className="text-c-text-inactive text-sm leading-6">{description}</p></article>)}
        </Container>
      </section>
      <Container className="py-20 grid lg:grid-cols-2 gap-12">
        <div><h2 className="text-xl font-bold mb-4">Operational transparency</h2><p className="text-c-text-inactive leading-7 mb-5">Public service health is available through our infrastructure dashboard. Detailed reporting and SLA measurement depend on the contracted service.</p><a className="text-c-primary-text font-bold hover:text-c-text" href="https://status.rubynodes.io" target="_blank" rel="noreferrer">View system status →</a></div>
        <div><h2 className="text-xl font-bold mb-4">Security and due-diligence enquiries</h2><p className="text-c-text-inactive leading-7 mb-5">Contact us to request an architecture discussion or the evidence available for a proposed engagement. We do not claim certifications that are not explicitly stated here.</p><a className="text-c-primary-text font-bold hover:text-c-text" href="mailto:peter@rubynodes.io?subject=Security%20and%20due%20diligence%20enquiry">Contact Peter →</a></div>
      </Container>
    </div>
  );
}
