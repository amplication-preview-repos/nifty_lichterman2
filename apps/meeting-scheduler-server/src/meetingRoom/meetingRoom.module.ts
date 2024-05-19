import { Module } from "@nestjs/common";
import { MeetingRoomModuleBase } from "./base/meetingRoom.module.base";
import { MeetingRoomService } from "./meetingRoom.service";
import { MeetingRoomController } from "./meetingRoom.controller";
import { MeetingRoomResolver } from "./meetingRoom.resolver";

@Module({
  imports: [MeetingRoomModuleBase],
  controllers: [MeetingRoomController],
  providers: [MeetingRoomService, MeetingRoomResolver],
  exports: [MeetingRoomService],
})
export class MeetingRoomModule {}
