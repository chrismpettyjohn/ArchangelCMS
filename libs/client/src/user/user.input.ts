

export interface UserFilterOneInput {
  id?: number;
  username?: string;
}

export interface UserCreateInput {
  username: string;
  password: string;
  email: string;
  betaCode?: string;
}