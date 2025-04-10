import { cn } from "@/lib/utils";

interface CardContainerProps {
  children: React.ReactNode;
  isFlipped: boolean;
  onFlip: () => void;
}

export function CardContainer({ children, isFlipped, onFlip }: CardContainerProps) {
  return (
    <div 
      className="h-[240px] w-[380px] relative preserve-3d cursor-pointer hover:scale-105 transition-all duration-300"
      style={{ perspective: "1000px" }}
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
    >
      <div
        className={cn(
          "absolute w-full h-full transition-all duration-500",
          "preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
} 