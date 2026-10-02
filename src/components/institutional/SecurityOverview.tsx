import Link from "next/link";
import Container from "../common/Container";

const practices = [
  ["Secure by default", "Every deployment starts from a consistent security baseline designed to reduce human error."],
  ["Controlled access", "Access is limited to authorized people and only the services each deployment needs."],
  ["Always-on monitoring", "Production infrastructure is monitored around the clock, with clear alerting and escalation paths."],
];

export default function SecurityOverview() {
  return (
    <section className="bg-c-bg py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Security by default</p>
            <h2 className="mb-4 text-xl font-bold">A repeatable operating baseline</h2>
            <p className="mb-6 leading-7 text-c-text-inactive">Security controls begin during provisioning and continue through monitoring, maintenance and incident escalation.</p>
            <Link className="font-bold text-c-primary-text hover:text-c-text" href="/security">Review security & resilience →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {practices.map(([title, description]) => (
              <article key={title} className="rounded-md border border-c-menu-border bg-c-container p-6">
                <h3 className="mb-3 font-bold">{title}</h3>
                <p className="text-sm leading-6 text-c-text-inactive">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
