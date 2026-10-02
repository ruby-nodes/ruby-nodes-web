import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Resilience | Ruby Nodes",
  description: "Ruby Nodes infrastructure ownership, access, monitoring, resilience and incident-response principles.",
};

const controls = [
  ["Secure by default", "Every deployment starts from a consistent, security-focused baseline, reducing human error and keeping protection uniform as infrastructure grows."],
  ["Controlled access", "Access is limited to authorized people and only the services each deployment needs, helping protect systems from unwanted activity."],
  ["Dedicated environments", "Workloads can run in isolated environments with access and infrastructure boundaries tailored to your organization."],
  ["Always-on monitoring", "Production systems are monitored around the clock, with alerts and agreed escalation paths when something needs attention."],
  ["Built for availability", "Redundancy and failover options help services remain available when individual components or locations experience disruption."],
  ["You retain asset control", "Ruby Nodes does not take custody of delegated assets. Asset control and signing responsibilities are agreed clearly for each service."],
  ["Clear accountability", "Ownership, support expectations and incident responsibilities are documented before production, so every party knows its role."],
  ["Privacy considered", "Personal data is handled under our privacy policy and applicable GDPR requirements, with relevant data flows reviewed during scoping."],
];

const documentedScope = [
  "Infrastructure boundary and hosting locations",
  "Asset custody and signing-key responsibilities",
  "Network exposure and access requirements",
  "Monitoring, support and incident escalation",
  "Availability measurement and service commitments",
  "Relevant data flows and residency requirements",
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
        <Container className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {controls.map(([title,description]) => <article key={title} className="bg-c-bg border border-c-menu-border rounded-md p-7"><h2 className="font-bold text-md mb-3">{title}</h2><p className="text-c-text-inactive text-sm leading-6">{description}</p></article>)}
        </Container>
      </section>
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Engagement-specific controls</p>
            <h2 className="mb-4 text-xl font-bold">What we define before production</h2>
            <p className="leading-7 text-c-text-inactive">Blockchain protocols and deployment models create different operational boundaries. We document the applicable control ownership rather than presenting one generic model as suitable for every service.</p>
          </div>
          <ul className="grid gap-3 text-sm">
            {documentedScope.map((item) => (
              <li key={item} className="border-b border-c-menu-border pb-3">✓ {item}</li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="grid gap-12 pb-20 lg:grid-cols-2">
        <div><h2 className="text-xl font-bold mb-4">Operational transparency</h2><p className="text-c-text-inactive leading-7 mb-5">Public service health is available through our infrastructure dashboard. Detailed reporting and SLA measurement depend on the contracted service.</p><a className="text-c-primary-text font-bold hover:text-c-text" href="https://status.rubynodes.io" target="_blank" rel="noreferrer">View system status →</a></div>
        <div><h2 className="text-xl font-bold mb-4">Security and due-diligence enquiries</h2><p className="text-c-text-inactive leading-7 mb-5">Contact us to review the proposed architecture, responsibility model and control evidence available for the scope of your engagement.</p><a className="text-c-primary-text font-bold hover:text-c-text" href="mailto:peter@rubynodes.io?subject=Security%20and%20due%20diligence%20enquiry">Contact Peter →</a></div>
      </Container>
    </div>
  );
}
