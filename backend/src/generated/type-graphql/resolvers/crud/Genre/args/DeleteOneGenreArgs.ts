import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneGenreArgs {
  @TypeGraphQL.Field((_type) => GenreWhereUniqueInput, {
    nullable: false,
  })
  where!: GenreWhereUniqueInput;
}
