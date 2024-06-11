import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntitiesDataModel } from "../../../shared/model/types/EntitiesDataModel";
import { Record } from "../model/types/Record";

export async function getRecords(): Promise<EntitiesDataModel<Record>> {
  const records = await axios.get<EntitiesDataModel<Record>>(
    `${API_URL}/records`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return records.data;
}
