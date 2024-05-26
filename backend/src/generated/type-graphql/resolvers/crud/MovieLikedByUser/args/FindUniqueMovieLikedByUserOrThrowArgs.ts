import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikedByUserWhereUniqueInput } from "../../../inputs/MovieLikedByUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovieLikedByUserOrThrowArgs {
  @TypeGraphQL.Field(_type => MovieLikedByUserWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikedByUserWhereUniqueInput;
}
