import { formatCurrent } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
};

export function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
      {label && `${label}: `}
      <span className="font-black text-black">{formatCurrent(amount)}</span>
    </p>
  );
}
