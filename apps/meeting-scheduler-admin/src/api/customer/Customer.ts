import { Meeting } from "../meeting/Meeting";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  meetings?: Array<Meeting>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
