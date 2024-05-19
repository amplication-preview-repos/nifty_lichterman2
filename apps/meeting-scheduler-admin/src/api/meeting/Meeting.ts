import { Customer } from "../customer/Customer";
import { MeetingRoom } from "../meetingRoom/MeetingRoom";

export type Meeting = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  meetingRoom?: MeetingRoom | null;
  scheduledAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
