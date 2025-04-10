import { cn } from "@/lib/utils";

interface CardBackProps {
  currentBalance: number;
  statementBalance: number;
  dueDate: string;
}

export function CardBack({
  currentBalance,
  statementBalance,
  dueDate,
}: CardBackProps) {
  return (
    <div 
      className={cn(
        "absolute w-full h-full rounded-xl p-6 backface-hidden rotate-y-180",
        "bg-card border shadow-sm"
      )}
    >
      <div className="h-full flex flex-col justify-center space-y-6">
        <div className="absolute top-8 left-0 w-full h-12 bg-neutral-800" />
        
        <div className="grid grid-cols-2 gap-4 mt-20">
          <div>
            <p className="text-sm text-muted-foreground">Current Balance</p>
            <p className="text-lg font-semibold">
              ${currentBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Statement Balance</p>
            <p className="text-lg font-semibold">
              ${statementBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        <div className="pt-3 border-t">
          <p className="text-sm text-muted-foreground">Statement Due Date</p>
          <p className="text-base">{dueDate}</p>
        </div>
      </div>
    </div>
  );
} 