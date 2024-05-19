import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  meetings?: MeetingListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
