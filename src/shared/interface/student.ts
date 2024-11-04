export interface IStudent {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  country: string;
  avatar: string;
}
export type Students = Pick<IStudent, 'id' | 'email' | 'avatar' | 'last_name'>[]