import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Record } from "../model/types/Record";

export async function getRecords(): Promise<EntitiesDataModel<Record>> {
  const records = await axios.get<EntitiesDataModel<Record>>(
    `${API_URL}/records`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );

  return records.data;
}
