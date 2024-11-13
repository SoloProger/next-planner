export default function calculateProgress(
  currentAmount: number,
  totalAmount: number
): number {
  return Math.round((currentAmount * 100) / totalAmount);
}
