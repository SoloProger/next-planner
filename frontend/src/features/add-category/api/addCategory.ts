import axios from "axios";
import { Category } from "../../../entities/category";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntityRequest } from "../../../shared/model/types/EntityRequest";
import { EntityResponse } from "../../../shared/model/types/EntityResponse";

export async function addCategory(
  requestBody: EntityRequest<Category>
): Promise<EntityResponse<Category>> {
  const invoice = await axios.post<EntityResponse<Category>>(
    `${API_URL}/categories`,
    requestBody,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );
  return invoice.data;
}
