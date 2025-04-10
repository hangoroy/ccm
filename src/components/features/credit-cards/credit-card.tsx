"use client"

import { useState } from "react";
import { CardContainer } from "./card-container";
import { CardFront } from "./card-front";
import { CardBack } from "./card-back";
import type { CreditCardProps } from "./types";

export function CreditCard({
  cardType,
  lastFourDigits,
  currentBalance,
  statementBalance,
  dueDate,
  backgroundColor,
}: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardContainer 
      isFlipped={isFlipped} 
      onFlip={() => setIsFlipped(!isFlipped)}
    >
      <CardFront
        cardType={cardType}
        lastFourDigits={lastFourDigits}
        backgroundColor={backgroundColor}
      />
      <CardBack
        currentBalance={currentBalance}
        statementBalance={statementBalance}
        dueDate={dueDate}
      />
    </CardContainer>
  );
} 