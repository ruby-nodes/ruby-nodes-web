import Container from "@/components/common/Container";
import ValidatorStaking from "@/components/staking/ValidatorStaking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Validator Services | Ruby Nodes",
  description: "Managed validator infrastructure with dedicated hardware, continuous monitoring and service-specific operational responsibilities.",
};

const capabilities = [
  ["Dedicated infrastructure", "Validators run on high-performance bare-metal systems sized for the protocol and deployed in agreed locations."],
  ["Managed operations", "Ruby Nodes monitors node health, coordinates protocol maintenance and responds to operational alerts."],
  ["Service commitments", "Availability measurement, maintenance expectations, response targets and reporting are defined for each engagement."],
];

export default function ValidatorServicesPage() {
  return (
    <div className="bg-c-bg">
      <Container className="py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Managed validators</p>
        <h1 className="max-w-4xl ~text-2xl-clamped/2xl font-bold leading-[1.15]">Production validator operations with explicit responsibility boundaries</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-c-text-inactive">Ruby Nodes operates more than 15 production validators across established and emerging blockchain networks using dedicated hardware, automated provisioning and continuous monitoring.</p>
      </Container>

      <section className="border-y border-c-menu-border bg-c-container py-16">
        <Container className="grid gap-5 md:grid-cols-3">
          {capabilities.map(([title, description]) => (
            <article key={title} className="rounded-md border border-c-menu-border bg-c-bg p-7">
              <h2 className="mb-3 text-md font-bold">{title}</h2>
              <p className="text-sm leading-6 text-c-text-inactive">{description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <ValidatorStaking />
      </section>

      <Container className="grid gap-12 pb-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-bold">Custody and signing responsibilities</h2>
          <p className="leading-7 text-c-text-inactive">Delegators retain control of their assets, and Ruby Nodes cannot transfer delegated funds. For managed deployments, signing-key ownership, access, operational authority and slashing responsibilities are agreed in writing before production.</p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Discuss a validator deployment</h2>
          <p className="mb-5 leading-7 text-c-text-inactive">Tell us the network, preferred locations, expected stake and governance requirements. We will propose the deployment and operating model.</p>
          <a className="font-bold text-c-primary-text hover:text-c-text" href="mailto:peter@rubynodes.io?subject=Managed%20validator%20enquiry">Contact Peter →</a>
        </div>
      </Container>
    </div>
  );
}
