import { MeetingCreateNestedManyWithoutMeetingRoomsInput } from "./MeetingCreateNestedManyWithoutMeetingRoomsInput";

export type MeetingRoomCreateInput = {
  location?: string | null;
  meetings?: MeetingCreateNestedManyWithoutMeetingRoomsInput;
  name?: string | null;
};
