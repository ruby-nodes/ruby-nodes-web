import Container from "@/components/common/Container";
import { Metadata } from "next";
import Image from "next/image";
import Ruby from "@/assets/rubys/01.png";
import CantonLogo from "@/assets/logos/canton.svg";

export const metadata: Metadata = {
  title: "Canton Network Participant | Ruby Nodes",
  description:
    "Ruby Nodes operates dedicated Canton Network participant infrastructure with defined operational scope, monitoring and security controls.",
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
          Canton Network is an open, privacy-enabled network designed for synchronized financial
          markets. Its privacy model allows participants to share transaction data with the parties
          involved while connecting applications across the network.
        </p>

        <p className="text-c-text">
          Ruby Nodes operates Canton participant infrastructure for application teams that want an
          independent infrastructure operator. The role, topology, resilience contribution and
          responsibility boundaries are agreed during onboarding so that each party knows what it
          owns before the service enters production.
        </p>

        <div className="flex items-start gap-0 mt-10">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-c-text">Why Include Ruby Nodes</h2>
            <ul className="list-disc pl-6 mt-2 mb-4 text-c-text">
              <li>
                <strong className="text-c-text">Independent operator capacity</strong> — add
                infrastructure operated by a separate team, with deployment topology and recovery
                responsibilities documented during onboarding
              </li>
              <li>
                <strong className="text-c-text">Clear operating boundaries</strong> — define who
                owns application administration, participant operation, access, incident response
                and change approval before production
              </li>
              <li>
                <strong className="text-c-text">Deployment flexibility</strong> — select agreed
                locations and resilience options based on application, data and operational requirements
              </li>
              <li>
                <strong className="text-c-text">Production experience</strong> — operating blockchain
                infrastructure since 2020, including more than 15 production validators and work with
                ecosystems such as Sui, 0G and Avail
              </li>
              <li>
                <strong className="text-c-text">Dedicated bare metal</strong> — participant nodes run
                on dedicated hardware, with the system profile sized for the agreed workload
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
              title: "Managed Participant Node",
              body: "A dedicated Canton participant node with deployment, monitoring, upgrades and day-to-day operations handled within the agreed service scope.",
            },
            {
              title: "Canton Echo Coverage",
              body: "Your application gets featured through our Canton Echo community channel. We publish guides, announcements, and ecosystem content that puts your project in front of institutional Canton builders and users.",
            },
            {
              title: "Documented Operating Scope",
              body: "A defined deployment profile, responsibility matrix, maintenance process and escalation path for the production service.",
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
          <li>Automated provisioning with a repeatable security baseline</li>
          <li>Host firewall rules and hardened SSH configuration</li>
          <li>Continuous monitoring and operational alerting</li>
          <li>Backups, recovery procedures and resilience options defined for the deployment</li>
        </ul>

        <h2 className="text-xl font-bold mt-10 mb-4 text-c-text">Get In Touch</h2>
        <p className="text-c-text">
          Building a Canton application and looking for a reliable participant to include?
          Contact us to review the application topology, deployment requirements and operating model.
        </p>
        <p className="text-c-text">
          Email:{" "}
          <a
            href="mailto:peter@rubynodes.io"
            className="text-c-primary hover:underline"
          >
            peter@rubynodes.io
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
