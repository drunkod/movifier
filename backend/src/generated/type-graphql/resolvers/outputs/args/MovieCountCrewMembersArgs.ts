import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieCrewMemberOnMovieWhereInput } from "../../inputs/MovieCrewMemberOnMovieWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountCrewMembersArgs {
  @TypeGraphQL.Field(_type => MovieCrewMemberOnMovieWhereInput, {
    nullable: true
  })
  where?: MovieCrewMemberOnMovieWhereInput | undefined;
}
