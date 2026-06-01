import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";
import CantonLogo from "@/assets/logos/canton.svg";

export const metadata: Metadata = {
  title: "Canton Network Participant | Ruby Nodes",
  description:
    "Ruby Nodes operates a production-grade Canton Network participant node. Include us in your Canton application — backed by bare metal infrastructure, 99.99% uptime, and Canton Echo community coverage.",
};

export default function CantonValidatorPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <div className="flex items-center gap-4 flex-wrap">
        <h1 className="~text-2xl-clamped/2xl font-bold text-c-text leading-[1.2]">
          Canton Network Participant
        </h1>
        <Image
          src={CantonLogo}
          alt="Canton Network"
          width={140}
          height={40}
          className="w-[140px] h-auto mt-1"
        />
      </div>

      <div className="prose prose-invert max-w-none mt-8 w-full">
        <p className="text-lg font-semibold text-c-text">
          Include Ruby Nodes as a participant in your Canton application
        </p>

        <p className="text-c-text">
          Canton Network is where institutional finance meets blockchain — a privacy-first,
          open network where Goldman Sachs, Broadridge, BNP Paribas, DTCC, and hundreds of
          other institutions tokenize, settle, and move real assets at scale. Over $8 trillion
          in tokenized securities, repos, and funds have been issued or processed on the platform.
          Unlike public chains, Canton participants only see the data they are party to —
          privacy is built into the protocol, not bolted on.
        </p>

        <p className="text-c-text">
          Every Canton application needs participant nodes to interact with the network.
          Ruby Nodes runs a production-ready Canton participant and validator node, and we are
          available to be onboarded into your application today.
        </p>

        <div className="flex items-start gap-0 mt-10">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">Why Include Ruby Nodes</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>
                <strong className="text-c-text">Battle-tested operator</strong> — running validators
                across 30+ blockchain networks since 2020, from genesis validators to mainnet
                infrastructure partners for Sui, 0G, Avail, and others
              </li>
              <li>
                <strong className="text-c-text">Bare metal, not cloud</strong> — our nodes run on
                dedicated hardware with no shared tenancy, giving you the reliability and
                performance that institutional workloads demand
              </li>
              <li>
                <strong className="text-c-text">99.99% uptime SLA</strong> — 24/7 monitoring,
                automated alerting, and incident response across multiple time zones
              </li>
              <li>
                <strong className="text-c-text">Global footprint</strong> — infrastructure deployed
                across multiple continents for low-latency, geo-redundant access
              </li>
              <li>
                <strong className="text-c-text">Canton Echo</strong> — we run{" "}
                <a
                  href="https://x.com/Canton_Echo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-c-primary hover:underline"
                >
                  @Canton_Echo
                </a>
                , a dedicated content and community channel for Canton Network. Applications that
                partner with us get organic visibility to an audience specifically interested in
                Canton — not just generic crypto followers
              </li>
            </ul>
          </div>

          <div className="flex-shrink-0 hidden md:block -ml-8">
            <Image src={Ruby} alt="Ruby" width={300} height={300} className="w-72 h-auto" />
          </div>
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4 text-c-text">What You Get</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose mt-4 mb-8">
          {[
            {
              title: "Reliable Participant Node",
              body: "A fully operated Canton participant node, ready to be onboarded into your application's permissioned network. We handle deployment, upgrades, and day-to-day operations — you focus on your application.",
            },
            {
              title: "Canton Echo Coverage",
              body: "Your application gets featured through our Canton Echo community channel. We publish guides, announcements, and ecosystem content that puts your project in front of institutional Canton builders and users.",
            },
            {
              title: "The Ruby Nodes Brand",
              body: "Six years of trust-building across 30+ networks. Being listed alongside Ruby Nodes signals operational seriousness to other institutions evaluating your application's participant set.",
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-c-container rounded-xl p-6 flex flex-col gap-2"
            >
              <h3 className="text-c-text font-bold text-base">{title}</h3>
              <p className="text-c-text text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4 text-c-text">Technical Infrastructure</h2>
        <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
          <li>Dedicated bare metal servers — high-end CPUs, NVMe SSD storage, no cloud overhead</li>
          <li>Redundant networking with DDoS mitigation</li>
          <li>Automated failover and regular backup procedures</li>
          <li>Full observability stack: Prometheus, Grafana, PagerDuty alerting</li>
          <li>Security-hardened environment with strict access controls</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-4 text-c-text">Get In Touch</h2>
        <p className="text-c-text">
          Building a Canton application and looking for a reliable participant to include?
          Reach out — onboarding is straightforward and we are ready to move fast.
        </p>
        <p className="text-c-text">
          Email:{" "}
          <a
            href="mailto:hello@rubynodes.io"
            className="text-c-primary hover:underline"
          >
            hello@rubynodes.io
          </a>
        </p>
        <p className="text-c-text">
          Twitter / X:{" "}
          <a
            href="https://x.com/Canton_Echo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-c-primary hover:underline"
          >
            @Canton_Echo
          </a>
        </p>
      </div>
    </Container>
  );
}
