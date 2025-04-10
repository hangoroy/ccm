export interface CreditCardProps {
  id: string;
  cardType: "Visa" | "Mastercard";
  lastFourDigits: string;
  currentBalance: number;
  statementBalance: number;
  dueDate: string;
  backgroundColor?: string;
}