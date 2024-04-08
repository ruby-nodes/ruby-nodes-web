import StakingCard, { StakingCardProps } from "./StakingCard";

type Props = {
  cards: StakingCardProps[];
};

export default function StakingCards({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <StakingCard key={index} {...card} />
      ))}
    </div>
  );
}
