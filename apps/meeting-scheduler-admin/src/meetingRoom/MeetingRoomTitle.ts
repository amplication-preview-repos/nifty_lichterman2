import { MeetingRoom as TMeetingRoom } from "../api/meetingRoom/MeetingRoom";

export const MEETINGROOM_TITLE_FIELD = "name";

export const MeetingRoomTitle = (record: TMeetingRoom): string => {
  return record.name?.toString() || String(record.id);
};
