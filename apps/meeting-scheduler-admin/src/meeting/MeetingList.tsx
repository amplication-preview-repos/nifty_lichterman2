import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { MEETINGROOM_TITLE_FIELD } from "../meetingRoom/MeetingRoomTitle";

export const MeetingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Meetings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
