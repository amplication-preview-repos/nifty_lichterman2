/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MeetingCreateNestedManyWithoutCustomersInput {
  @Field(() => [MeetingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MeetingWhereUniqueInput],
  })
  connect?: Array<MeetingWhereUniqueInput>;
}

export { MeetingCreateNestedManyWithoutCustomersInput as MeetingCreateNestedManyWithoutCustomersInput };
