import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetingRoomServiceBase } from "./base/meetingRoom.service.base";

@Injectable()
export class MeetingRoomService extends MeetingRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
