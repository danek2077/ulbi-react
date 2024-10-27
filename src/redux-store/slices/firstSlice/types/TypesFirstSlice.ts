export type UsersData = { username: string; date: string; event: string };
export interface firstStateType {
  auth: boolean;
  isAdmin: boolean;
  user_entry: string;
  users: UsersData[];
}
