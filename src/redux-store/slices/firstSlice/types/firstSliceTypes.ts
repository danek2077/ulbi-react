export type userDataObj = { day: number; event: string };
export type UsersData = { [key: string]: userDataObj[] };

export interface firstStateType {
  auth: boolean;
  isAdmin: boolean | null;
  username: string;
  users: UsersData[];
  readyUser: userDataObj[];
}
