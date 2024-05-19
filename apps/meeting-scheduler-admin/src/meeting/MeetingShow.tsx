import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { MEETINGROOM_TITLE_FIELD } from "../meetingRoom/MeetingRoomTitle";

export const MeetingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="MeetingRoom"
          source="meetingroom.id"
          reference="MeetingRoom"
        >
          <TextField source={MEETINGROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="scheduledAt" source="scheduledAt" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
