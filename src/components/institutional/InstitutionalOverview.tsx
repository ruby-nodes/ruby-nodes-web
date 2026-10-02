import Link from "next/link";
import Container from "../common/Container";

const audiences = [
  ["Financial institutions", "Dedicated, non-custodial infrastructure designed around governance, resilience and reporting requirements."],
  ["Protocols and foundations", "Validators, RPCs, bootnodes, indexers and testnet infrastructure operated by one accountable partner."],
  ["Trading and data teams", "Low-latency private endpoints, archive access and capacity engineered for predictable workloads."],
];

export default function InstitutionalOverview() {
  return (
    <section className="py-20 border-y border-c-menu-border bg-c-container">
      <Container>
        <div className="max-w-3xl mb-10">
          <p className="text-c-primary-text text-xs font-bold uppercase tracking-[0.18em] mb-3">Built for operational scrutiny</p>
          <h2 className="text-xl font-bold mb-4">Infrastructure your technical and risk teams can evaluate</h2>
          <p className="text-c-text-inactive leading-6">From architecture review through production operations, we define ownership, deployment boundaries, availability and escalation paths for each engagement.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {audiences.map(([title, description]) => (
            <article key={title} className="border border-c-menu-border rounded-md p-7 bg-c-bg">
              <h3 className="font-bold text-md mb-3">{title}</h3>
              <p className="text-c-text-inactive text-sm leading-6">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex gap-6 flex-wrap text-sm font-bold">
          <Link className="text-c-primary-text hover:text-c-text" href="/institutional">Explore institutional services →</Link>
          <Link className="text-c-text hover:text-c-text-inactive" href="/security">Review security & resilience →</Link>
        </div>
      </Container>
    </section>
  );
}
