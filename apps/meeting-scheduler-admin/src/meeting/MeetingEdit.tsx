import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { MeetingRoomTitle } from "../meetingRoom/MeetingRoomTitle";

export const MeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="meetingRoom.id"
          reference="MeetingRoom"
          label="MeetingRoom"
        >
          <SelectInput optionText={MeetingRoomTitle} />
        </ReferenceInput>
        <DateTimeInput label="scheduledAt" source="scheduledAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
