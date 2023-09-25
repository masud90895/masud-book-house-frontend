export type ILog = {
  email: string;
  password: string;
};

export type IReg = {
  name: string;
  email: string;
  password: string;
};

export type IUser = {
  user: any;
  name?: string;
  email?: string;
  _id?: string;
  image?: string;
  accessToken?: string;
};

export type RootState = {
  auth: IUser | null | undefined;
};
