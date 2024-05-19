import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";

export type MeetingRoomWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  meetings?: MeetingListRelationFilter;
  name?: StringNullableFilter;
};
