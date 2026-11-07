import Container from "@/components/common/Container";
import Link from "next/link";
import styles from "./observer.module.css";

const contact =
  "mailto:peter@rubynodes.io?subject=Sui%20ConsensusObserver%20enquiry";

const plans = [
  {
    number: "01",
    name: "Relay access",
    price: "$750",
    scope: "For teams running their own observer.",
    features: [
      "Connect through a Ruby-operated relay",
      "One organization · one active observer peer",
      "Coordinated onboarding and catch-up",
    ],
    action: "Discuss relay access",
  },
  {
    number: "02",
    name: "Direct peering",
    price: "$1,750",
    scope: "A direct connection to Ruby’s validator.",
    features: [
      "Peer with the validator’s observer feed",
      "One approved active observer peer",
      "Agreed serving capacity and onboarding",
    ],
    action: "Discuss direct peering",
  },
  {
    number: "03",
    name: "Managed infrastructure",
    price: "$4,590",
    prefix: "From",
    scope: "Ruby hosts and operates the node.",
    features: [
      "Dedicated fullnode infrastructure",
      "Frankfurt deployment with private vRack networking",
      "One agreed upstream connection included",
    ],
    action: "Plan a managed deployment",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function Topology() {
  return (
    <figure className={styles.topology}>
      <div className={styles.diagramHeading}>
        <span>THE CONSENSUS CONNECTION</span>
        <span>FRANKFURT / OVH</span>
      </div>
      <div className={styles.validator}>
        <svg viewBox="0 0 64 64" aria-hidden="true" className={styles.ruby}>
          <path
            d="M16 9h32l13 18-29 29L3 27Z"
            fill="currentColor"
            fillOpacity=".14"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="m16 9 8 18 8 29 8-29 8-18M3 27h58M24 27l8-18 8 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        <div>
          <strong>Ruby validator</strong>
          <span>Sui consensus · Frankfurt</span>
        </div>
        <span className={styles.nodeTag}>UPSTREAM</span>
      </div>
      <div className={styles.paths}>
        <div>
          <span className={styles.pathLabel}>DIRECT</span>
          <span>Validator</span>
          <span aria-hidden="true">→</span>
          <strong>Observer</strong>
        </div>
        <div>
          <span className={styles.pathLabel}>RELAY</span>
          <span>Validator</span>
          <span aria-hidden="true">→</span>
          <strong className={styles.relayNode}>Ruby relay</strong>
          <span aria-hidden="true">→</span>
          <strong>Observer</strong>
        </div>
      </div>
      <p className={styles.operatingLabel}>
        EITHER PATH · CHOOSE WHO OPERATES THE OBSERVER
      </p>
      <div className={styles.diagramGrid}>
        <div className={styles.node}>
          <span className={styles.nodeIcon}>↗</span>
          <strong>Your observer</strong>
          <span>You host and operate</span>
        </div>
        <div className={`${styles.node} ${styles.managedNode}`}>
          <span className={styles.nodeIcon}>◇</span>
          <strong>Ruby-managed fullnode</strong>
          <span>Frankfurt · private vRack</span>
          <span className={styles.privateTag}>PRIVATE NETWORK OPTION</span>
        </div>
      </div>
      <figcaption>
        Choose an upstream path and an operating model. Private networking is
        available for a managed Frankfurt deployment; the final topology is
        agreed during onboarding.
      </figcaption>
    </figure>
  );
}

export function SuiConsensusTeaser() {
  return (
    <section className={styles.teaser} aria-labelledby="sui-teaser-title">
      <Container>
        <div className={styles.teaserInner}>
          <div>
            <Eyebrow>Sui Consensus Observer · Frankfurt</Eyebrow>
            <h2 id="sui-teaser-title">Get closer to Sui consensus.</h2>
            <p>
              Direct peering, relay access and dedicated infrastructure near
              Ruby’s validator. Choose the connection that fits your workload.
            </p>
          </div>
          <Link className={styles.primary} href="/sui-consensus-observer">
            Explore the service <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function SuiConsensusObserver() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="sui-title">
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <Eyebrow>Sui Consensus Observer</Eyebrow>
              <h1 id="sui-title">
                Get closer to
                <br />
                Sui <span>consensus.</span>
              </h1>
              <p className={styles.lead}>
                Connect your observer infrastructure through direct validator
                peering or relay access. Explore a Ruby-managed fullnode in
                Frankfurt with private vRack networking, designed to reduce
                network distance and the work of running your own deployment.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href={contact}>
                  Discuss your setup <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.secondary} href="#pricing">
                  Compare options <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className={styles.heroFacts}>
                <span>Access to validator data</span>
                <span>Built for low latency</span>
                <span>From $750 / month</span>
              </div>
            </div>
            <Topology />
          </div>
        </Container>
      </section>

      <section className={styles.intro}>
        <Container>
          <div className={styles.introGrid}>
            <div>
              <Eyebrow>A second path to network activity</Eyebrow>
              <h2>
                Consensus data.
                <br />
                Alongside checkpoint sync.
              </h2>
            </div>
            <div>
              <p>
                A Consensus Observer is a Sui fullnode that receives and
                processes consensus blocks through an observer connection, in
                addition to its normal checkpoint-based state synchronization.
              </p>
              <p>
                It gives trading teams, data platforms and infrastructure
                operators another data path for custom processing. It remains a
                fullnode, with no validator voting power. How your application
                consumes the data depends on your node and integration; ordinary
                RPC methods do not automatically expose raw consensus blocks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="deployment-title">
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <Eyebrow>Location is part of the architecture</Eyebrow>
              <h2 id="deployment-title">
                Less network distance.
                <br />
                Less infrastructure to manage.
              </h2>
            </div>
            <p>
              Run your own observer wherever your application needs it, or
              discuss dedicated infrastructure close to Ruby’s Frankfurt
              validator.
            </p>
          </div>
          <div className={styles.benefitGrid}>
            <article>
              <span className={styles.number}>01 / CONNECT</span>
              <h3>Choose your data path</h3>
              <p>
                Use a Ruby relay or peer directly with our validator. We agree
                the upstream, peer identity and connection requirements with
                your team.
              </p>
            </article>
            <article>
              <span className={styles.number}>02 / LOCATE</span>
              <h3>Bring the node closer</h3>
              <p>
                Ruby can deploy and operate your fullnode in Frankfurt with
                private vRack connectivity. The goal is to reduce network
                distance and operational workload.
              </p>
            </article>
            <article>
              <span className={styles.number}>03 / MEASURE</span>
              <h3>Validate what improves</h3>
              <p>
                Evaluate arrival timing, completeness and recovery against your
                application’s baseline. A more involved deployment should
                demonstrate useful value.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className={styles.research} aria-labelledby="research-title">
        <Container>
          <div className={styles.researchGrid}>
            <div>
              <Eyebrow>Connectivity research</Eyebrow>
              <h2 id="research-title">
                Location deserves
                <br />
                measurement.
              </h2>
              <p>
                We compare validator connectivity across key regions to identify
                strong locations for consensus infrastructure. Frankfurt
                combines strong connectivity to individual validators with
                access to Ruby’s validator and private vRack deployment options.
              </p>
            </div>
            <div className={styles.study}>
              <div className={styles.studyHeader}>
                <span>CONNECTIVITY RESEARCH</span>
                <strong>London &amp; Frankfurt</strong>
              </div>
              <dl>
                <div>
                  <dt>London</dt>
                  <dd>Best quorum-threshold connectivity proxy</dd>
                </div>
                <div>
                  <dt>Frankfurt</dt>
                  <dd>Best median connectivity to individual validators</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="pricing"
        className={`${styles.section} ${styles.pricing}`}
        aria-labelledby="pricing-title"
      >
        <Container>
          <div className={styles.sectionHeading}>
            <div>
              <Eyebrow>Choose how you connect</Eyebrow>
              <h2 id="pricing-title">Start with the path you need.</h2>
            </div>
            <p>
              USD per month. Deployment scope, connection requirements and any
              setup work are confirmed before agreement.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            {plans.map((plan) => (
              <article className={styles.plan} key={plan.number}>
                <span className={styles.number}>
                  {plan.number} /{" "}
                  {plan.number === "03" ? "WE OPERATE" : "YOU OPERATE"}
                </span>
                <h3>{plan.name}</h3>
                <p className={styles.scope}>{plan.scope}</p>
                <div className={styles.price}>
                  {plan.prefix && (
                    <span className={styles.from}>{plan.prefix} </span>
                  )}
                  <strong>{plan.price}</strong>
                  <span>/ month</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className={styles.planCta} href={contact}>
                  {plan.action} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <div className={styles.future}>
            <div>
              <span className={styles.number}>04 / IN DEVELOPMENT</span>
              <h3>Multiple validators. One potential feed.</h3>
              <p>
                We’re exploring aggregation across participating validators,
                with deduplication and earliest valid copy delivery.
                Availability, performance and pricing depend on partners and
                benchmarking.
              </p>
            </div>
            <a className={styles.secondary} href={contact}>
              Discuss aggregation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Container>
      </section>

      <section className={styles.operations} aria-labelledby="operations-title">
        <Container>
          <div className={styles.introGrid}>
            <div>
              <Eyebrow>Find the right fit</Eyebrow>
              <h2 id="operations-title">Frequently asked questions</h2>
              <p>
                Compare the data path, hosting options and level of management
                that make sense for your application.
              </p>
            </div>
            <div className={styles.faq}>
              <details>
                <summary>
                  How much faster is the feed than standard RPC?
                </summary>
                <p>
                  An observer adds a consensus-data path alongside checkpoint
                  synchronization, which can let your integration process
                  activity without waiting for checkpoint-based delivery. The
                  useful speed difference depends on the data you need and how
                  your application consumes it.
                </p>
                <p>
                  <strong>Illustrative local-preview example:</strong> a message
                  arriving through an observer after 100 ms versus corresponding
                  data appearing through a checkpoint-based RPC feed after 400
                  ms would give a 300 ms arrival advantage. These figures
                  illustrate the comparison; they are not measured service
                  performance.
                </p>
              </details>
              <details>
                <summary>
                  Why choose private vRack networking over my own remote node?
                </summary>
                <p>
                  A Ruby-managed fullnode near our Frankfurt validator can use a
                  private vRack connection instead of a long public-network path
                  to a remote node. That reduces network distance and gives Ruby
                  responsibility for the agreed infrastructure operations.
                </p>
                <p>
                  <strong>Illustrative local-preview example:</strong> replacing
                  a 20 ms network hop with a 1 ms private hop would remove 19 ms
                  of transport delay.
                </p>
              </details>
              <details>
                <summary>
                  Relay or direct peering—which should I choose?
                </summary>
                <p>
                  Relay access starts at $750/month and is the lighter starting
                  point for teams operating their own observer. Direct peering
                  at $1,750/month connects that observer to Ruby’s validator
                  with fewer upstream hops. The right choice depends on your
                  node’s location and integration; compare both paths before
                  paying for an upgrade solely for speed.
                </p>
              </details>
              <details>
                <summary>Can Ruby run the fullnode for me?</summary>
                <p>
                  Yes. Managed infrastructure starts from $4,590/month, with a
                  dedicated Frankfurt fullnode, private vRack networking and one
                  agreed upstream connection. We scope the hardware, operations
                  and application integration with your team before deployment.
                </p>
              </details>
              <details>
                <summary>Can I start small and upgrade later?</summary>
                <p>
                  Start with relay access if you already run an observer, then
                  discuss direct peering or managed infrastructure as your needs
                  develop. We can compare options against your existing setup so
                  a larger deployment has a clear purpose for your application.
                </p>
              </details>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.contact}>
        <Container>
          <div className={styles.contactInner}>
            <Eyebrow>Build your connection to Sui</Eyebrow>
            <h2>
              Tell us what your
              <br />
              application needs to see.
            </h2>
            <p>
              Share what you need to consume, where you run and what you want to
              improve. We’ll discuss a practical starting point.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={contact}>
                Contact Ruby Nodes <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.secondary} href="https://t.me/pmensik">
                Message Ruby Nodes <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
