import { MeetingUpdateManyWithoutCustomersInput } from "./MeetingUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  meetings?: MeetingUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
