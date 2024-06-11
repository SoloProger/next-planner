import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntityResponse } from "../../../shared/model/types/EntityResponse";
import { Record } from "../model/types/Record";

export async function getRecord(id?: string): Promise<EntityResponse<Record>> {
  const records = await axios.get<EntityResponse<Record>>(
    `${API_URL}/records/${+(id as string)}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return records.data;
}
