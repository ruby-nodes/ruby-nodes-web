import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ShowcaseCardData = {
  title: string;
  image: StaticImageData | string;
  tags: string[];
  description: string;
  features: string[];
  link: string;
};

const cards: ShowcaseCardData[] = [
  {
    title: "SuiScope",
    image: "/Sui_app_scope.png",
    tags: ["Dev Tool", "Analytics"],
    description:
      "Neutral benchmarking platform for Sui infrastructure.",
    features: [
      "Real-world latency tracking",
      "gRPC/GraphQL/Archival support",
      "Free public API",
    ],
    link: "https://scope.rubynodes.io/",
  },
  {
    title: "Walrus Cost Calculator",
    image: "/Sui_app_walrus.png",
    tags: ["Calculator", "Storage"],
    description:
      "Estimate storage costs on the Walrus decentralized storage network.",
    features: [
      "Real-time on-chain parameters",
      "Interactive sliders",
      "Budget planning",
    ],
    link: "https://walrus-cost-calculator.rubynodes.io/",
  },
  {
    title: "Seal API Gateway",
    image: "/Sui_app_seal.png",
    tags: ["Security", "Gateway"],
    description:
      "Secure API gateway with subscription-based billing and usage tracking.",
    features: [
      "Threshold encryption",
      "Decentralized secrets management",
      "Sui blockchain integration",
    ],
    link: "https://seal.rubynodes.io/",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ShowcaseCard({ title, image, tags, description, features, link }: ShowcaseCardData) {
  return (
    <div
      className="group relative flex flex-col bg-c-container border border-white/10 rounded-lg overflow-hidden
                 transition-all duration-300 ease-in-out
                 hover:border-c-primary hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(179,44,60,0.35)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-lg bg-c-container-accent">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-400 mt-4 text-sm leading-relaxed">
          {description}
        </p>

        <ul className="mt-4 space-y-2 flex-1">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-c-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full
                     bg-c-primary hover:bg-c-primary-hover text-white font-bold text-sm
                     rounded-lg py-3 px-4 transition-colors duration-300 ease-in-out"
        >
          Launch App
          <ExternalLinkIcon />
        </Link>
      </div>
    </div>
  );
}

export default function ShowcaseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
      {cards.map((card) => (
        <ShowcaseCard key={card.title} {...card} />
      ))}
    </div>
  );
}
