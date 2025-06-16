import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps inženýr | Ruby Nodes",
  description:
    "Hledáme DevOps inženýra pro svět kryptoměn. Remote-first pozice v Brně s možností plného úvazku nebo spolupráce na IČO.",
};

export default function DevOpsPozicePage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <h1 className="~text-2xl-clamped/2xl font-bold text-c-text max-w-[700px] text-center leading-[1.2]">
        🔧 DevOps inženýr pro svět kryptoměn
      </h1>
      
      <div className="prose prose-invert max-w-none mt-8">
        <p className="text-lg font-semibold">
          📍 Remote-first | Brno výhodou | Plný úvazek nebo spolupráce na IČO
        </p>
        
        <p>
          Do Ruby Nodes hledáme DevOpsáka nebo DevOpsačku, který nám pomůže spravovat infrastrukturu, 
          na které běží služby pro blockchainové protokoly po celém světě.
        </p>
        
        <p>
          Ať už máš zkušenosti s provozem serverů nebo tě to láká a rád/a se učíš, 
          pojď s námi zkoumat hlubiny kryptoměnového světa.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">🧠 Co děláme v Ruby Nodes</h2>
        <p>
          Jsme mladá firma, která se pohybuje v prostředí kryptoměn a poskytuje svou infrastrukturu 
          různým blockchainovým protokolům a aplikacím, které se nad nimi vyvíjejí. V blockchain světě 
          tedy děláme všechno možné - provozujeme validátory, RPC nodes nebo indexery a také si píšeme 
          své vlastní aplikace a hromady skriptů. Většinou využíváme bare metal providers jako je OVH 
          nebo CherryServers, kde si pronajímáme výkonné železo nad nímž naše služby provozujeme.
        </p>
        
        <p>
          Pokud máš vztah k infrastruktuře, práci s hardwarem a hlavně bys s námi rád proplouval vodami 
          kryptoměnového světa, tak je tato práce pro tebe! Nehledáme vyloženě seniorního člověka, 
          určitě i rádi zaškolíme - zásadní je pro nás nadšení pro práci a pro svět krypta.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">✅ Co bys měl/a umět (nebo se nebát naučit):</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Dobrá znalost Linuxu (nic jiného nepoužíváme :)</li>
          <li>Praxe s používáním bashe/příkazové řádky (většinu času budeš trávit v terminálu :)</li>
          <li>Znalost systemd a Dockeru</li>
          <li>Znalost nástrojů jako je Prometheus, Grafana a další, které používáme pro monitoring a tvorbu dashboardů</li>
          <li>Ideálně i nějaká praktická zkušenost s kryptoměnami (například Ethereum nebo Solana), protože veškerá naše práce se kolem nich točí</li>
          <li>Zkušenost se sítěmi - provozujeme několik vlastních serverů s firewallem/switchem a ty je potřeba také administrovat</li>
          <li>Zkušenost s cloudem (AWS) určitě výhodou</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">🚀 Co děláme</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Provoz několika desítek validátorů na různých blockchainech (Ethereum, Polkadot, Sui a další)</li>
          <li>Provoz RPC fullnodes pro například Polkadot či Sui</li>
          <li>Pár speciálních setupů jako je náš vlastní extrémně výkonný load-balanced server na Novém Zélandu či poskytování několika desítek TB pro decentralized storage networks</li>
          <li>Use the right tool for the right job - využíváme bare metal servery, cloud, různé typy hostingů a další služby jako je Github, Cloudflare, Namecheap a další</li>
          <li>A samozřejmě se stále učíme, hledáme nové příležitosti a koukáme na novinky, o které v krypto světě není nouze</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">🧑‍🍳 Co pečeme dál (a čeho budeš součástí)</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Stali jsme se jedním z hlavních partnerů Mysten Labs (firma stojící za Sui) a budeme jim pomáhat s vývojem jejich platformy Seal (decentralizované správa privátních klíčů - alternativa k AWS KMS) a Hypernet, který buduje více odolný internet založený na technologii SCION</li>
          <li>Máme podepsaných několik dalších zajímavých protokolů ke spolupráci zabývajících se například kryptografií</li>
          <li>Dále se nám rýsuje společná práce s několika projekty z 0g ekosystému, které se točí primárně kolem AI</li>
          <li>A hlavně, tvá vlastní invence je více než vítaná! Jsme malá firma, které se snaží věci dělat kvalitně a efektivně a proto budeme rádi když budeš přinášet své vlastní nápady, kterém potom společně můžeme realizovat</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">🥂 Culture & vibe</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Každý rok vyrážíme na světovou konferenci nebo kryptochatu. Ať už to bude Dubaj, Denver, Lisabon, aspoň jednou ročně spolu vyrazíme mimo kancelář (nebo home office) a spojíme práci s inspirací, komunitou i zábavou</li>
          <li>Práce v progresivním odvětví. Krypto není jen hype – je to prostor, kde se věci dějí rychle. Je to kombinace technologie, financí a trošku punku</li>
          <li>Rádi ti pomůžeme se v kryptu zorientovat, začít investovat a vytvořit si vlastní portfolio - samozřejmě to není podmínka</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">🎁 Co nabízíme?</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Remote-first, ale Brno či Hradec Králové určitě výhodou</li>
          <li>Práci v malém a technickém týmu bez zbytečné byrokracie</li>
          <li>Přístup k zajímavým technologiím a partnerstvím</li>
          <li>Možnost růst s námi – učit se, zkoumat a experimentovat</li>
          <li>Cestování – každý rok vyrážíme na světovou krypto konferenci</li>
          <li>Práce na IČO, nemocenská a další benefity</li>
          <li>Zajímavé investiční příležitosti, ke kterým se čas od času dostaneme</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">📩 Kontakt</h2>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Email: <a href="mailto:ruby-nodes@proton.me" className="text-c-ruby hover:underline">ruby-nodes@proton.me</a></li>
          <li>Telegram: <a href="https://t.me/pmensik" className="text-c-ruby hover:underline" target="_blank" rel="noopener noreferrer">@pmensik</a></li>
        </ul>
      </div>
    </Container>
  );
}
