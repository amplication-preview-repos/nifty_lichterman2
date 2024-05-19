import { MeetingCreateNestedManyWithoutCustomersInput } from "./MeetingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  meetings?: MeetingCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
