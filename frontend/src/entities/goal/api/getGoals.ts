import axios from "axios";

import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Goal } from "../model/types/Goal";

export async function getGoals(): Promise<EntitiesDataModel<Goal>> {
  const invoices = await axios.get<EntitiesDataModel<Goal>>(
    `${API_URL}/goals`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );

  return invoices.data;
}
