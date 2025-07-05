export type AnyObject = Record<string, unknown>;

export interface IQueryData<T> {
  data: T;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
