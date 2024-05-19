import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  meetingRoomId?: SortOrder;
  scheduledAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
