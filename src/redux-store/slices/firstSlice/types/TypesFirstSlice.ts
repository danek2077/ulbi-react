export type userDataObj = { day: number; event: string };
export type UsersData = { [key: string]: userDataObj[] };
export interface firstStateType {
  auth: boolean;
  isAdmin: boolean;
  username: string;
  users: UsersData[];
}
