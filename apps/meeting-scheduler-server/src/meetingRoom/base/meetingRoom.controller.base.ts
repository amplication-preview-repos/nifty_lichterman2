/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MeetingRoomService } from "../meetingRoom.service";
import { MeetingRoomCreateInput } from "./MeetingRoomCreateInput";
import { MeetingRoom } from "./MeetingRoom";
import { MeetingRoomFindManyArgs } from "./MeetingRoomFindManyArgs";
import { MeetingRoomWhereUniqueInput } from "./MeetingRoomWhereUniqueInput";
import { MeetingRoomUpdateInput } from "./MeetingRoomUpdateInput";
import { MeetingFindManyArgs } from "../../meeting/base/MeetingFindManyArgs";
import { Meeting } from "../../meeting/base/Meeting";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";

export class MeetingRoomControllerBase {
  constructor(protected readonly service: MeetingRoomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MeetingRoom })
  async createMeetingRoom(
    @common.Body() data: MeetingRoomCreateInput
  ): Promise<MeetingRoom> {
    return await this.service.createMeetingRoom({
      data: data,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MeetingRoom] })
  @ApiNestedQuery(MeetingRoomFindManyArgs)
  async meetingRooms(@common.Req() request: Request): Promise<MeetingRoom[]> {
    const args = plainToClass(MeetingRoomFindManyArgs, request.query);
    return this.service.meetingRooms({
      ...args,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MeetingRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async meetingRoom(
    @common.Param() params: MeetingRoomWhereUniqueInput
  ): Promise<MeetingRoom | null> {
    const result = await this.service.meetingRoom({
      where: params,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MeetingRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMeetingRoom(
    @common.Param() params: MeetingRoomWhereUniqueInput,
    @common.Body() data: MeetingRoomUpdateInput
  ): Promise<MeetingRoom | null> {
    try {
      return await this.service.updateMeetingRoom({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MeetingRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMeetingRoom(
    @common.Param() params: MeetingRoomWhereUniqueInput
  ): Promise<MeetingRoom | null> {
    try {
      return await this.service.deleteMeetingRoom({
        where: params,
        select: {
          createdAt: true,
          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/meetings")
  @ApiNestedQuery(MeetingFindManyArgs)
  async findMeetings(
    @common.Req() request: Request,
    @common.Param() params: MeetingRoomWhereUniqueInput
  ): Promise<Meeting[]> {
    const query = plainToClass(MeetingFindManyArgs, request.query);
    const results = await this.service.findMeetings(params.id, {
      ...query,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,

        meetingRoom: {
          select: {
            id: true,
          },
        },

        scheduledAt: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/meetings")
  async connectMeetings(
    @common.Param() params: MeetingRoomWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        connect: body,
      },
    };
    await this.service.updateMeetingRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meetings")
  async updateMeetings(
    @common.Param() params: MeetingRoomWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        set: body,
      },
    };
    await this.service.updateMeetingRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meetings")
  async disconnectMeetings(
    @common.Param() params: MeetingRoomWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        disconnect: body,
      },
    };
    await this.service.updateMeetingRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}
