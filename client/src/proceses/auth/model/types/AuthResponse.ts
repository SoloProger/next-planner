import { User } from '../../../../entities/user/model/types/User';

export interface AuthResponse {
  jwt: string;
  user: User;
}
