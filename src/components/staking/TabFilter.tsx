import { Chain, chains } from "@/lib/common";
import Button from "../common/Button";

export type TabFilterProps = {
  label: string;
  selected: Chain;
  setSelected: (selected: Chain) => void;
};

export default function TabFilter({
  label,
  selected,
  setSelected,
}: TabFilterProps) {
  return (
    <div className="bg-c-container text-c-text rounded-md py-4 font-inter w-full px-6">
      <div className="flex gap-5 items-baseline">
        <div>{label}</div>
        <div className="flex gap-5 flex-wrap">
          {chains.map((chain) => (
            <Button
              key={chain}
              label={chain}
              variant="primary"
              size="small"
              className={chain === selected ? "pointer-events-none" : ""}
              active={chain === selected}
              onClick={() => setSelected(chain)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}