import JsonLd from "@/components/common/JsonLd";
import { organizationId, pageMetadata, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import SuiConsensusObserver from "@/components/suiConsensusObserver/SuiConsensusObserver";

export const metadata: Metadata = pageMetadata(
  "/sui-consensus-observer",
  "Sui Consensus Observer Access & Managed Fullnodes | Ruby Nodes",
  "Connect to Ruby Nodes’ Sui validator in Frankfurt through relay access or direct peering. Explore managed fullnode infrastructure with private vRack networking.",
);

export default function SuiConsensusObserverPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": siteUrl("/sui-consensus-observer#service"),
          name: "Sui Consensus Observer Access & Managed Fullnodes",
          description:
            "Connect to Ruby Nodes’ Sui validator in Frankfurt through relay access or direct peering. Explore managed fullnode infrastructure with private vRack networking.",
          url: siteUrl("/sui-consensus-observer"),
          provider: { "@id": organizationId },
          offers: [
            {
              "@type": "Offer",
              name: "Relay access",
              price: "750",
              priceCurrency: "USD",
              url: siteUrl("/sui-consensus-observer#pricing"),
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "750",
                priceCurrency: "USD",
                unitText: "month",
              },
            },
            {
              "@type": "Offer",
              name: "Direct peering",
              price: "1750",
              priceCurrency: "USD",
              url: siteUrl("/sui-consensus-observer#pricing"),
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "1750",
                priceCurrency: "USD",
                unitText: "month",
              },
            },
            {
              "@type": "Offer",
              name: "Managed infrastructure — from $4,590/month",
              url: siteUrl("/sui-consensus-observer#pricing"),
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                minPrice: "4590",
                priceCurrency: "USD",
                unitText: "month",
              },
            },
          ],
        }}
      />
      <SuiConsensusObserver />
    </>
  );
}
