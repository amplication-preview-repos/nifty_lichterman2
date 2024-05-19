import * as graphql from "@nestjs/graphql";
import { MeetingRoomResolverBase } from "./base/meetingRoom.resolver.base";
import { MeetingRoom } from "./base/MeetingRoom";
import { MeetingRoomService } from "./meetingRoom.service";

@graphql.Resolver(() => MeetingRoom)
export class MeetingRoomResolver extends MeetingRoomResolverBase {
  constructor(protected readonly service: MeetingRoomService) {
    super(service);
  }
}
