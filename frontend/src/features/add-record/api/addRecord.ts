import axios from "axios";
import { Record } from "../../../entities/record/model/types/Record";
import { API_URL } from "../../../shared/constants/apiUrl";
import { EntityRequest } from "../../../shared/model/types/EntityRequest";
import { EntityResponse } from "../../../shared/model/types/EntityResponse";

export async function addRecord(
  requestBody: EntityRequest<Record>
): Promise<EntityResponse<Record>> {
  const invoice = await axios.post<EntityResponse<Record>>(
    `${API_URL}/records`,
    requestBody,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return invoice.data;
}
