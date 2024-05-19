import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetingRoomWhereUniqueInput } from "../meetingRoom/MeetingRoomWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MeetingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  meetingRoom?: MeetingRoomWhereUniqueInput;
  scheduledAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
