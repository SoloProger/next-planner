import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntityResponse } from "../../../shared/model/types/EntityResponse";
import { Record } from "../model/types/Record";

export async function getRecord(id?: string): Promise<EntityResponse<Record>> {
  const records = await axios.get<EntityResponse<Record>>(
    `${API_URL}/records/${+(id as string)}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );

  return records.data;
}
