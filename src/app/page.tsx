import { ThemeToggle } from "@/components/common/theme";
import { creditCards } from "@/components/features/credit-cards";
import { CreditCard } from "@/components/features/credit-cards/credit-card";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="space-y-6">
        {creditCards.map((card) => (
          <CreditCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
