import axios from "axios";
import { API_URL } from "../../../shared/constants/apiUrl";
import { AuthRequest } from "../model/types/AuthRequest";
import { AuthResponse } from "../model/types/AuthResponse";

export async function authUser(
  requestBody: AuthRequest
): Promise<AuthResponse> {
  const authData = await axios.post<AuthResponse>(
    `${API_URL}/auth/local`,
    requestBody
  );
  return authData.data;
}
