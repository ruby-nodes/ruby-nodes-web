type Props = {
  eyebrow: string;
  title: string;
  description: string;
  facts: string[];
};

export default function SuccessStoryCard({ eyebrow, title, description, facts }: Props) {
  return (
    <article className="flex h-full max-w-[640px] flex-col rounded-md border border-c-menu-border bg-c-bg p-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-c-primary-text">{eyebrow}</p>
      <h3 className="mb-4 text-md font-bold text-c-text">{title}</h3>
      <p className="mb-7 text-sm leading-6 text-c-text-inactive">{description}</p>
      <ul className="mt-auto grid gap-2 text-sm text-c-text">
        {facts.map((fact) => (
          <li key={fact} className="border-t border-c-menu-border pt-2">{fact}</li>
        ))}
      </ul>
    </article>
  );
}
