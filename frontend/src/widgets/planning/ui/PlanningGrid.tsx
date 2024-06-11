import { useQuery } from "@tanstack/react-query";
import { GoalCard } from "../../../entities/goal";
import { getGoals } from "../../../entities/goal/api/getGoals";

function PlanningGrid() {
  const { data } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  return (
    <section className="flex ai-center wi-100 gap-24">
      {data?.data.map((goal, idx) => (
        <GoalCard
          key={idx}
          name={goal.attributes.name}
          description={goal.attributes.description}
          currentAmount={goal.attributes.currentAmount}
          totalAmount={goal.attributes.totalAmount}
        />
      ))}
    </section>
  );
}

export default PlanningGrid;
