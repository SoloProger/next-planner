import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import calculateProgress from "../lib/utils/calculateProgress";
import { GoalCardProps } from "../model/types/GoalCardProps";

function GoalCard({
  name,
  description,
  totalAmount,
  currentAmount,
}: GoalCardProps) {
  return (
    <div className="flex ai-center gap-12 pointer shadow-hover p-16 trans-1 border-radius-4">
      <CircularProgress
        value={calculateProgress(currentAmount, totalAmount)}
        size="70px"
      >
        <CircularProgressLabel>
          {calculateProgress(currentAmount, totalAmount)}%
        </CircularProgressLabel>
      </CircularProgress>
      <div className="flex-col gap-6">
        <h4 className="subtitle-semibold-1">{name}</h4>
        <p className="subtitle-semibold-2">
          {currentAmount} из {totalAmount}
        </p>
        <p className="subtitle-2">{description}</p>
      </div>
    </div>
  );
}

export default GoalCard;
