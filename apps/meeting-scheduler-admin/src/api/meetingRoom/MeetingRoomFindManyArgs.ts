import { MeetingRoomWhereInput } from "./MeetingRoomWhereInput";
import { MeetingRoomOrderByInput } from "./MeetingRoomOrderByInput";

export type MeetingRoomFindManyArgs = {
  where?: MeetingRoomWhereInput;
  orderBy?: Array<MeetingRoomOrderByInput>;
  skip?: number;
  take?: number;
};
