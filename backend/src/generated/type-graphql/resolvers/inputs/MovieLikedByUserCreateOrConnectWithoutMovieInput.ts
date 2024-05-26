import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikedByUserCreateWithoutMovieInput } from "../inputs/MovieLikedByUserCreateWithoutMovieInput";
import { MovieLikedByUserWhereUniqueInput } from "../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikedByUserCreateOrConnectWithoutMovieInput", {})
export class MovieLikedByUserCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikedByUserCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieLikedByUserCreateWithoutMovieInput;
}
