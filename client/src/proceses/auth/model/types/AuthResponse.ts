import { User } from '../../../../entities/user/model/types/User';

export interface AuthResponse {
  token: string;
  user: User;
}
