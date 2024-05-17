import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieListStatsCreateManyInput", {})
export class MovieListStatsCreateManyInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  views!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  likes!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  movieListId!: string;
}
