export enum AuthTab {
  SignIn = "signin",
  SignUp = "signup",
}

export interface IAuthForm {
  name?: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
  expiresAt: number;
}
