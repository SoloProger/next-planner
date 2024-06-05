import { GoalCard } from "../../../entities/goal";
import { tempGoals } from "../constants/tempGoals";

function PlanningGrid() {
  return (
    <section className="flex ai-center wi-100 gap-24">
      {tempGoals.map((goal, idx) => (
        <GoalCard
          key={idx}
          name={goal.name}
          description={goal.description}
          currentAmount={goal.currentAmount}
          totalAmount={goal.totalAmount}
        />
      ))}
    </section>
  );
}

export default PlanningGrid;
