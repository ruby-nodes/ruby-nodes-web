import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Institutional Blockchain Infrastructure | Ruby Nodes",
  description: "Dedicated, professionally operated blockchain infrastructure for institutional workloads.",
  robots: { index: false, follow: false },
};

const networks = ["Sui", "Solana", "Ethereum", "Celestia", "0G", "Walrus", "zkVerify", "peaq"];

function Mark() {
  return <div className="flex items-center gap-3 font-bold tracking-tight"><span className="grid h-7 w-7 rotate-45 place-items-center rounded-[5px] border border-c-primary bg-c-primary/10"><span className="h-2.5 w-2.5 rounded-[2px] bg-c-primary" /></span><span>RUBY NODES</span></div>;
}

function Slide({ number, eyebrow, children, dark = false }: { number: string; eyebrow?: string; children: ReactNode; dark?: boolean }) {
  return <section className={`relative mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col overflow-hidden border-b border-c-menu-border px-8 py-10 sm:px-12 lg:aspect-video lg:min-h-0 lg:px-16 lg:py-12 ${dark ? "bg-c-container" : "bg-c-bg"}`} style={{ breakAfter: "page" }}>
    <div className="mb-10 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-c-text-inactive"><Mark /><div className="flex items-center gap-4">{eyebrow && <span>{eyebrow}</span>}<span className="text-c-primary-text">{number}</span></div></div>
    <div className="flex flex-1 flex-col">{children}</div>
  </section>;
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-c-primary-text">{children}</p>;
}

export default function InstitutionalDeck() {
  return <div className="deck-root bg-[#02030a] text-c-text">
    <style>{`
      header, footer, body > header + div, body > main + div { display: none !important; }
      @media print {
        @page { size: 16in 9in; margin: 0; }
        html, body { background: #060815 !important; print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        .deck-root section { box-sizing: border-box !important; width: 16in !important; height: 8.99in !important; min-height: 0 !important; max-width: none !important; border: 0 !important; break-after: page; }
        .deck-root section:last-child { break-after: auto; }
      }
    `}</style>

    <Slide number="01 / 12" eyebrow="Institutional infrastructure">
      <div className="pointer-events-none absolute -right-40 -top-64 h-[720px] w-[720px] rounded-full bg-c-primary/15 blur-[150px]" />
      <div className="relative grid flex-1 items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div><Kicker>Blockchain infrastructure, professionally operated</Kicker><h1 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">The infrastructure layer between institutional applications and blockchain networks.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-c-text-inactive">Dedicated access, protocol-specific operations and clear accountability—without building an internal blockchain infrastructure team.</p></div>
        <div className="relative hidden h-[360px] lg:block">
          <div className="absolute left-0 top-1/2 w-32 -translate-y-1/2 rounded-md border border-c-menu-border bg-c-container p-5 text-center text-xs font-bold">INSTITUTIONAL<br />APPLICATION</div><div className="absolute left-32 right-36 top-1/2 h-px bg-c-menu-border" />
          <div className="absolute left-1/2 top-1/2 z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-md border border-c-primary bg-c-bg p-6 text-center shadow-[0_0_60px_rgba(179,44,60,0.22)]"><span className="text-xs font-bold text-c-primary-text">RUBY NODES</span><span className="mt-2 block text-[11px] leading-5 text-c-text-inactive">OPERATIONS LAYER</span></div>
          {[["18%","NETWORK A"],["43%","NETWORK B"],["68%","NETWORK C"]].map(([top,label])=><div key={label} className="absolute right-0 w-32 rounded-md border border-c-menu-border bg-c-container p-4 text-center text-xs" style={{top}}>{label}</div>)}
        </div>
      </div><p className="text-xs text-c-text-inactive print:hidden">Private presentation · rubynodes.io</p>
    </Slide>

    <Slide number="02 / 12" eyebrow="The challenge" dark>
      <div className="grid flex-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div><Kicker>Access is simple. Operations are not.</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">A blockchain endpoint hides a protocol-specific operating stack.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-c-text-inactive">Institutions may only need dependable connectivity. Running it internally means owning an entirely different discipline.</p></div>
        <div className="grid grid-cols-2 border-l border-t border-c-menu-border">{["Network upgrades", "State growth & sync", "Peer connectivity", "Version compatibility", "Hardware tuning", "Monitoring & alerts", "Incident response", "Protocol expertise"].map((item,i)=><div key={item} className="min-h-24 border-b border-r border-c-menu-border p-5"><span className="mb-5 block text-[10px] font-bold text-c-primary-text">{String(i+1).padStart(2,"0")}</span><span className="text-sm font-bold">{item}</span></div>)}</div>
      </div><div className="border-t border-c-menu-border pt-5 text-sm text-c-text-inactive">The operational burden continues for as long as the application depends on the network.</div>
    </Slide>

    <Slide number="03 / 12" eyebrow="Our role">
      <div className="mb-10 max-w-4xl"><Kicker>Blockchain access as critical infrastructure</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">We absorb the infrastructure complexity. Your team consumes a dependable service.</h2></div>
      <div className="grid flex-1 items-center gap-5 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr]">
        <div className="rounded-md border border-c-menu-border bg-c-container p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-c-text-inactive">Your environment</p><div className="mt-7 space-y-3 text-sm font-bold"><p>Trading systems</p><p>Tokenization platforms</p><p>Custody & compliance</p><p>Data products</p></div></div><span className="text-c-primary-text">→</span>
        <div className="rounded-md border border-c-primary bg-c-primary/5 p-8 shadow-[0_0_80px_rgba(179,44,60,0.12)]"><p className="text-xs font-bold uppercase tracking-[0.16em] text-c-primary-text">Ruby Nodes operating layer</p><div className="mt-8 grid grid-cols-2 gap-4 text-xs"><p>Architecture</p><p>Deployment</p><p>Monitoring</p><p>Upgrades</p><p>Performance</p><p>Response</p></div></div><span className="text-c-primary-text">→</span>
        <div className="rounded-md border border-c-menu-border bg-c-container p-7"><p className="text-xs font-bold uppercase tracking-[0.16em] text-c-text-inactive">Blockchain networks</p><div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold"><p>L1 / L2</p><p>Appchains</p><p>Data layers</p><p>Specialized roles</p></div></div>
      </div>
      <div className="mt-8 grid gap-5 border-t border-c-menu-border pt-5 text-sm sm:grid-cols-3"><p><strong>Dedicated capacity</strong><br /><span className="text-c-text-inactive">Sized to the workload</span></p><p><strong>Operational ownership</strong><br /><span className="text-c-text-inactive">Defined before production</span></p><p><strong>One accountable partner</strong><br /><span className="text-c-text-inactive">Across multiple networks</span></p></div>
    </Slide>

    <Slide number="04 / 12" eyebrow="Why outsource" dark>
      <div className="grid flex-1 gap-16 lg:grid-cols-2"><div className="flex flex-col justify-center"><Kicker>The build-versus-operate decision</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">Keep protocol operations out of the critical path.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-c-text-inactive">Internal teams retain control of product architecture, keys, assets and business logic where appropriate. Ruby Nodes owns the agreed infrastructure scope.</p></div>
      <div className="flex flex-col justify-center"><div className="grid grid-cols-[1fr_auto_1fr] border-y border-c-menu-border py-5 text-[11px] font-bold uppercase tracking-[0.16em] text-c-text-inactive"><span>Build internally</span><span className="px-5">→</span><span>Managed by Ruby Nodes</span></div>{[["Recruit protocol expertise","Use an experienced operating team"],["Maintain every network","One partner across networks"],["Design monitoring & response","Start with an operating baseline"],["Absorb upgrade risk","Managed lifecycle and upgrades"],["Provision for uncertain load","Capacity scoped to workload"]].map(([a,b])=><div key={a} className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-c-menu-border py-5 text-sm"><span className="text-c-text-inactive">{a}</span><span className="px-5 text-c-primary-text">→</span><strong>{b}</strong></div>)}</div></div>
    </Slide>

    <Slide number="05 / 12" eyebrow="Capabilities">
      <div className="mb-9 flex items-end justify-between gap-8"><div><Kicker>What we operate</Kicker><h2 className="text-3xl font-bold tracking-[-0.025em] lg:text-5xl">Infrastructure matched to the workload.</h2></div><p className="hidden max-w-sm text-sm leading-6 text-c-text-inactive lg:block">Not a generic hosting package. The service boundary is designed around network, traffic, data, security and resilience requirements.</p></div>
      <div className="grid flex-1 grid-cols-1 gap-px overflow-hidden border border-c-menu-border bg-c-menu-border md:grid-cols-2 lg:grid-cols-3">{[["Managed access","Dedicated RPC, WebSocket and network-specific interfaces."],["Dedicated infrastructure","Isolated capacity instead of shared public endpoints."],["Archive & data","Historical state, indexing and high-throughput chain access."],["Network participation","Validators and specialized protocol roles where required."],["Performance-sensitive","Tuned infrastructure for latency- or throughput-dependent workloads."],["Custom architecture","Purpose-built deployments for trading, custody, analytics, tokenization and interoperability."]].map(([title,copy],i)=><article key={title} className="bg-c-container p-6 lg:p-7"><span className="text-[10px] font-bold text-c-primary-text">0{i+1}</span><h3 className="mb-3 mt-6 text-lg font-bold">{title}</h3><p className="text-sm leading-6 text-c-text-inactive">{copy}</p></article>)}</div>
    </Slide>

    <Slide number="06 / 12" eyebrow="Evidence from production" dark>
      <div className="grid flex-1 items-center gap-16 lg:grid-cols-[0.75fr_1.25fr]"><div><Kicker>Specialized, hands-on experience</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">Operational credibility built in live networks.</h2><p className="mt-6 text-lg leading-8 text-c-text-inactive">Our advantage is direct experience with infrastructure where configuration, performance and incident response have financial consequences.</p></div><div>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-c-menu-border bg-c-menu-border"><div className="bg-c-bg p-8"><p className="text-5xl font-bold tracking-tight">25<span className="text-c-primary-text">+</span></p><p className="mt-3 text-sm text-c-text-inactive">Validators operated</p></div><div className="bg-c-bg p-8"><p className="text-5xl font-bold tracking-tight">100<span className="text-c-primary-text">+</span></p><p className="mt-3 text-sm text-c-text-inactive">Blockchain nodes operated</p></div></div>
        <div className="mt-7 space-y-4 text-sm">{[["Multi-protocol operations","Different software, failure modes and upgrade cycles"],["Specialized network roles","Validator, committee, MPC and proving infrastructure"],["Performance engineering","Benchmarking and tuning beyond default deployment"],["Distributed operations","Infrastructure across multiple geographic regions"]].map(([a,b])=><p key={a} className="grid grid-cols-2 border-b border-c-menu-border pb-4 last:border-0"><strong>{a}</strong><span className="text-c-text-inactive">{b}</span></p>)}</div>
      </div></div>
    </Slide>

    <Slide number="07 / 12" eyebrow="Institutional use cases">
      <div className="mb-8"><Kicker>Where the model applies</Kicker><h2 className="text-3xl font-bold tracking-[-0.025em] lg:text-5xl">Four workloads. One operating principle.</h2></div>
      <div className="grid flex-1 gap-4 md:grid-cols-2">{[["Trading firm","Low-latency access across networks","Dedicated nodes · optimized connectivity · performance tuning · managed upgrades"],["Bank / tokenization platform","Dependable connectivity behind a financial product","Production RPC · redundancy · archive data · lifecycle management"],["Analytics & compliance","Reliable, high-volume chain data","Archive nodes · high-throughput access · indexing · multi-network expansion"],["Investment firm / asset manager","Participation without an internal operations team","Validator infrastructure · monitoring · maintenance · defined key boundaries"]].map(([title,need,answer],i)=><article key={title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-c-menu-border py-5"><span className="text-xs font-bold text-c-primary-text">0{i+1}</span><div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm text-c-text-inactive">Need: {need}</p><p className="mt-5 text-sm leading-6"><span className="font-bold text-c-primary-text">Ruby Nodes</span> — {answer}</p></div></article>)}</div>
    </Slide>

    <Slide number="08 / 12" eyebrow="Reference architecture" dark>
      <div className="mb-9"><Kicker>Dedicated by design</Kicker><h2 className="text-3xl font-bold tracking-[-0.025em] lg:text-5xl">A clear infrastructure boundary.</h2></div>
      <div className="grid flex-1 items-center gap-4 lg:grid-cols-[0.8fr_auto_1.5fr_auto_0.8fr]"><div className="space-y-3"><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-c-text-inactive">Client environment</p>{["Application","Trading / data systems","Keys & business logic"].map(x=><div key={x} className="rounded border border-c-menu-border p-4 text-sm">{x}</div>)}</div><span className="text-c-primary-text">→</span>
      <div className="rounded-md border border-c-primary bg-c-bg p-6"><p className="text-xs font-bold uppercase tracking-[0.16em] text-c-primary-text">Managed service boundary</p><div className="mt-5 grid grid-cols-2 gap-3">{["Controlled access","Load balancing","Dedicated nodes","Monitoring","Redundancy","Incident response"].map(x=><div key={x} className="bg-c-container p-3 text-xs">{x}</div>)}</div><p className="mt-5 text-xs leading-5 text-c-text-inactive">Architecture varies by protocol, workload and required responsibility model.</p></div><span className="text-c-primary-text">→</span>
      <div className="space-y-3"><p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-c-text-inactive">Networks</p>{["Primary region","Secondary region","Archive / index layer"].map(x=><div key={x} className="rounded border border-c-menu-border p-4 text-sm">{x}</div>)}</div></div>
      <div className="mt-7 flex gap-8 border-t border-c-menu-border pt-5 text-xs text-c-text-inactive"><span>Private endpoints</span><span>Multi-region options</span><span>Client-specific capacity</span><span>Documented ownership</span></div>
    </Slide>

    <Slide number="09 / 12" eyebrow="Operating lifecycle">
      <div className="mb-12 max-w-3xl"><Kicker>From requirements to continuous operations</Kicker><h2 className="text-3xl font-bold tracking-[-0.025em] lg:text-5xl">Ownership does not end at deployment.</h2></div>
      <div className="relative grid flex-1 gap-7 md:grid-cols-5"><div className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-c-menu-border md:block" />{[["01","Discover","Networks, traffic, interfaces, regions and risk requirements."],["02","Design","Architecture, boundaries, resilience and service scope."],["03","Deploy","Provision, harden, synchronize and configure."],["04","Validate","Acceptance criteria for capacity, access and recovery."],["05","Operate","Monitor, maintain, upgrade, respond and report."]].map(([n,title,copy])=><article key={n} className="relative"><span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-c-primary bg-c-bg text-xs font-bold text-c-primary-text">{n}</span><h3 className="mb-3 mt-7 text-lg font-bold">{title}</h3><p className="text-sm leading-6 text-c-text-inactive">{copy}</p></article>)}</div>
      <p className="border-t border-c-menu-border pt-5 text-sm text-c-text-inactive">Every engagement begins with a defined technical scope and responsibility model.</p>
    </Slide>

    <Slide number="10 / 12" eyebrow="Reliability & control" dark>
      <div className="grid flex-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><Kicker>Operational discipline</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">Controls appropriate to the service—not a generic checklist.</h2><p className="mt-6 text-lg leading-8 text-c-text-inactive">The deployment model determines which controls, responsibilities and evidence apply. We make those decisions explicit before production.</p></div><div className="grid grid-cols-2 gap-x-10 gap-y-7">{[["Access","Authorized access and minimum required exposure."],["Availability","Redundancy and failover where supported by the architecture."],["Monitoring","Continuous service and infrastructure observability."],["Response","Defined alerts, escalation paths and operational ownership."],["Change","Protocol upgrades and configuration changes managed deliberately."],["Custody","Asset control and signing responsibilities agreed separately."]].map(([title,copy])=><article key={title} className="border-t border-c-menu-border pt-4"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-c-text-inactive">{copy}</p></article>)}</div></div>
      <p className="border-t border-c-menu-border pt-5 text-xs text-c-text-inactive">Service levels, reporting and control evidence are defined for the contracted scope.</p>
    </Slide>

    <Slide number="11 / 12" eyebrow="Protocol experience">
      <div className="grid flex-1 items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]"><div><Kicker>Experience across production ecosystems</Kicker><h2 className="text-3xl font-bold leading-tight tracking-[-0.025em] lg:text-5xl">Network breadth matters because protocols fail differently.</h2><p className="mt-6 text-lg leading-8 text-c-text-inactive">Operating across ecosystems builds practical knowledge of different clients, databases, consensus designs, hardware profiles and upgrade processes.</p></div><div><div className="grid grid-cols-2 gap-px overflow-hidden border border-c-menu-border bg-c-menu-border sm:grid-cols-4">{networks.map(network=><div key={network} className="grid aspect-square place-items-center bg-c-container p-4 text-center text-sm font-bold">{network}</div>)}</div><div className="mt-7 grid grid-cols-3 gap-5 text-xs leading-5 text-c-text-inactive"><p><strong className="block text-c-text">Faster evaluation</strong>of new network requirements</p><p><strong className="block text-c-text">Fewer blind spots</strong>during upgrades and incidents</p><p><strong className="block text-c-text">One relationship</strong>as network coverage expands</p></div></div></div>
      <p className="text-[11px] text-c-text-inactive">Selected ecosystems shown. Scope and availability are confirmed per engagement.</p>
    </Slide>

    <Slide number="12 / 12" eyebrow="Start with the workload" dark>
      <div className="pointer-events-none absolute -bottom-64 -right-40 h-[680px] w-[680px] rounded-full bg-c-primary/15 blur-[150px]" />
      <div className="relative grid flex-1 items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]"><div><Kicker>A practical first conversation</Kicker><h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] lg:text-6xl">Tell us the networks, workloads and reliability requirements.</h2><p className="mt-7 max-w-2xl text-xl leading-8 text-c-text-inactive">We design and operate the infrastructure behind them.</p></div><div className="border-l border-c-menu-border pl-8"><p className="text-xs font-bold uppercase tracking-[0.18em] text-c-primary-text">Useful inputs</p><ul className="mt-6 space-y-4 text-sm text-c-text-inactive"><li>Networks and required interfaces</li><li>Traffic and data-retention profile</li><li>Regions and latency requirements</li><li>Availability and responsibility model</li></ul><span className="mt-8 block h-px w-12 bg-c-primary" /><div className="mt-7"><p className="font-bold">Petr Menšík</p><a className="mt-2 block text-sm text-c-primary-text" href="mailto:peter@rubynodes.io?subject=Institutional%20infrastructure%20enquiry">peter@rubynodes.io</a><p className="mt-1 text-sm text-c-text-inactive">rubynodes.io</p></div></div></div>
      <div className="flex items-center justify-between border-t border-c-menu-border pt-5 text-xs text-c-text-inactive"><span>Dedicated blockchain infrastructure</span><span>Ruby Nodes</span></div>
    </Slide>
  </div>;
}
