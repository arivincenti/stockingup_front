export interface User {
  email: string;
  password: string;
  role: string;
  username: string;
  created_at: Date;
  updated_at: Date;
  id?: bigint;
}
