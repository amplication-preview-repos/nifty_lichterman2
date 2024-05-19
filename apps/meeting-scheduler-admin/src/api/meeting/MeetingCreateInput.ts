import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MeetingRoomWhereUniqueInput } from "../meetingRoom/MeetingRoomWhereUniqueInput";

export type MeetingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  meetingRoom?: MeetingRoomWhereUniqueInput | null;
  scheduledAt?: Date | null;
  title?: string | null;
};
