import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetingRoomService } from "./meetingRoom.service";
import { MeetingRoomControllerBase } from "./base/meetingRoom.controller.base";

@swagger.ApiTags("meetingRooms")
@common.Controller("meetingRooms")
export class MeetingRoomController extends MeetingRoomControllerBase {
  constructor(protected readonly service: MeetingRoomService) {
    super(service);
  }
}
