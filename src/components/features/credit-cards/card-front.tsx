import { cn } from "@/lib/utils";

interface CardFrontProps {
  cardType: "Visa" | "Mastercard";
  lastFourDigits: string;
  backgroundColor?: string;
}

export function CardFront({
  cardType,
  lastFourDigits,
  backgroundColor = "bg-gradient-to-br from-gray-900 to-gray-800",
}: CardFrontProps) {
  return (
    <div 
      className={cn(
        "absolute w-full h-full rounded-xl p-6 backface-hidden",
        backgroundColor
      )}
    >
      <div className="absolute top-6 right-6">
        {cardType === "Visa" ? (
          <span className="text-white text-2xl font-bold italic">VISA</span>
        ) : (
          <span className="text-white text-2xl font-bold">MASTERCARD</span>
        )}
      </div>

      <div className="absolute top-1/2 left-6 -translate-y-1/2">
        <div className="space-y-1">
          <p className="text-sm text-white/80">Card ending in</p>
          <p className="font-mono text-2xl tracking-wider text-white">
            {lastFourDigits}
          </p>
        </div>
      </div>
    </div>
  );
} 