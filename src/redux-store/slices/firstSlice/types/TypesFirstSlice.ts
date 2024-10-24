export type UsersData = { username: string; day: number; event: string };
export interface firstStateType {
  auth: boolean;
  isAdmin: boolean;
  user_entry: string;
  users: UsersData[];
}
