import axios from "axios";

import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Goal } from "../model/types/Goal";

export async function getGoals(): Promise<EntitiesDataModel<Goal>> {
  const invoices = await axios.get<EntitiesDataModel<Goal>>(
    `${API_URL}/goals`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return invoices.data;
}
