import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserMovieWatchlistWhereInput } from "../../inputs/UserMovieWatchlistWhereInput";

@TypeGraphQL.ArgsType()
export class MovieCountInWatchlistByUsersArgs {
  @TypeGraphQL.Field(_type => UserMovieWatchlistWhereInput, {
    nullable: true
  })
  where?: UserMovieWatchlistWhereInput | undefined;
}
