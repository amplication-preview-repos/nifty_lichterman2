/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeetingRoomWhereInput } from "./MeetingRoomWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MeetingRoomListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MeetingRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => MeetingRoomWhereInput)
  @IsOptional()
  @Field(() => MeetingRoomWhereInput, {
    nullable: true,
  })
  every?: MeetingRoomWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeetingRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => MeetingRoomWhereInput)
  @IsOptional()
  @Field(() => MeetingRoomWhereInput, {
    nullable: true,
  })
  some?: MeetingRoomWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeetingRoomWhereInput,
  })
  @ValidateNested()
  @Type(() => MeetingRoomWhereInput)
  @IsOptional()
  @Field(() => MeetingRoomWhereInput, {
    nullable: true,
  })
  none?: MeetingRoomWhereInput;
}
export { MeetingRoomListRelationFilter as MeetingRoomListRelationFilter };
