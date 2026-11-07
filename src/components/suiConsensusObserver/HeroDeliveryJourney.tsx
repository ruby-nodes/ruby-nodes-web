import styles from "./hero-delivery.module.css";

// Local design examples, consistent with the comparison gallery; not measurements.
const hops = { private: 1, remote: 20, local: 1 };

function Stage({
  number,
  role,
  title,
  detail,
}: {
  number: string;
  role: string;
  title: string;
  detail: string;
}) {
  return (
    <div className={styles.stage}>
      <span className={styles.ordinal}>{number}</span>
      <div>
        <span className={styles.role}>{role}</span>
        <strong>{title}</strong>
        <small>{detail}</small>
      </div>
    </div>
  );
}
function Transfer({ ms, label }: { ms: number; label: string }) {
  return (
    <div className={styles.transfer}>
      <span aria-hidden="true">↓</span>
      <strong>{ms} ms</strong>
      <small>{label}</small>
    </div>
  );
}

export default function HeroDeliveryJourney() {
  return (
    <figure
      className={styles.panel}
      aria-labelledby="hero-journey-title"
      data-nosnippet
    >
      <header className={styles.header}>
        <span id="hero-journey-title">THE DELIVERY JOURNEY</span>
        <span>FRANKFURT / OVH</span>
      </header>
      <div className={styles.routes}>
        <div className={`${styles.route} ${styles.managed}`}>
          <div className={styles.routeHeading}>
            <h2>Managed</h2>
            <p>One private-network hop away.</p>
            <span>RUBY OPERATES THE FULLNODE</span>
          </div>
          <Stage
            number="01"
            role="SOURCE"
            title="Ruby validator"
            detail="Sui consensus"
          />
          <Transfer ms={hops.private} label="Private vRack" />
          <Stage
            number="02"
            role="PROCESS"
            title="Managed fullnode"
            detail="Ruby operates"
          />
          <Transfer ms={hops.local} label="Local application" />
          <Stage
            number="03"
            role="CONSUME"
            title="Your application"
            detail="Your integration"
          />
          <div className={styles.benefit}>
            Nearby infrastructure.
            <br />
            Operations handled.
          </div>
        </div>
        <div className={styles.route}>
          <div className={styles.routeHeading}>
            <h2>Relay</h2>
            <p>Data to your infrastructure.</p>
            <span>YOU OPERATE THE FULLNODE</span>
          </div>
          <Stage
            number="01"
            role="SOURCE"
            title="Ruby validator"
            detail="Sui consensus"
          />
          <Transfer ms={hops.private} label="Private network" />
          <Stage
            number="02"
            role="FORWARD"
            title="Ruby relay"
            detail="Ruby operates"
          />
          <Transfer ms={hops.remote} label="Public network" />
          <Stage
            number="03"
            role="PROCESS"
            title="Customer fullnode"
            detail="You operate"
          />
          <Transfer ms={hops.local} label="Local application" />
          <Stage
            number="04"
            role="CONSUME"
            title="Your application"
            detail="Your integration"
          />
        </div>
      </div>
      <figcaption className={styles.caption}>
        <strong>Illustrative timings</strong>
        <span>
          One-way network hops. Applications near their fullnodes; node
          processing excluded.
        </span>
      </figcaption>
    </figure>
  );
}
