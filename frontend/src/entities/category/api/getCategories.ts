import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Category } from "../model/types/Category";

export async function getCategories(): Promise<EntitiesDataModel<Category>> {
  const categories = await axios.get<EntitiesDataModel<Category>>(
    `${API_URL}/categories`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE3NzQ4MjcxLCJleHAiOjE3MjAzNDAyNzF9.z8DYpTNuAc3Up6-Oa-wGtqAKk0hAFIwaLBjf5w2gqLU",
      },
    }
  );

  return categories.data;
}
