import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Category } from "../model/types/Category";

export async function getCategories(): Promise<EntitiesDataModel<Category>> {
  const categories = await axios.get<EntitiesDataModel<Category>>(
    `${API_URL}/categories`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return categories.data;
}
