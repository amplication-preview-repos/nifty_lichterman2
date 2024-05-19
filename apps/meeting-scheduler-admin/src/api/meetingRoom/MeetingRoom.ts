import { Meeting } from "../meeting/Meeting";

export type MeetingRoom = {
  createdAt: Date;
  id: string;
  location: string | null;
  meetings?: Array<Meeting>;
  name: string | null;
  updatedAt: Date;
};
