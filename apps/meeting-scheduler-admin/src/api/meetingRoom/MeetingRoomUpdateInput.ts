import { MeetingUpdateManyWithoutMeetingRoomsInput } from "./MeetingUpdateManyWithoutMeetingRoomsInput";

export type MeetingRoomUpdateInput = {
  location?: string | null;
  meetings?: MeetingUpdateManyWithoutMeetingRoomsInput;
  name?: string | null;
};
