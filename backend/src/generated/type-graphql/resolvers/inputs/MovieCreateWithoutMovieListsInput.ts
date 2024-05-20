import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput } from "../inputs/MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput";
import { MovieInfoCreateNestedOneWithoutMovieInput } from "../inputs/MovieInfoCreateNestedOneWithoutMovieInput";
import { MovieKeywordCategoryCreateNestedManyWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateNestedManyWithoutMoviesInput";
import { MovieRatingCreateNestedManyWithoutMovieInput } from "../inputs/MovieRatingCreateNestedManyWithoutMovieInput";
import { MovieSpokenLanguageCreateNestedManyWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateNestedManyWithoutMoviesInput";
import { MovieStatsCreateNestedOneWithoutMovieInput } from "../inputs/MovieStatsCreateNestedOneWithoutMovieInput";
import { MovieStudioCreateNestedManyWithoutMoviesInput } from "../inputs/MovieStudioCreateNestedManyWithoutMoviesInput";
import { MovifierAppUserCreateNestedManyWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateNestedManyWithoutWatchlistInput";

@TypeGraphQL.InputType("MovieCreateWithoutMovieListsInput", {})
export class MovieCreateWithoutMovieListsInput {
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

  @TypeGraphQL.Field((_type) => MovieInfoCreateNestedOneWithoutMovieInput, {
    nullable: true,
  })
  movieInfo?: MovieInfoCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsCreateNestedOneWithoutMovieInput, {
    nullable: true,
  })
  movieStats?: MovieStatsCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput,
    {
      nullable: true,
    },
  )
  crewMembers?:
    | MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioCreateNestedManyWithoutMoviesInput, {
    nullable: true,
  })
  studios?: MovieStudioCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field((_type) => GenreCreateNestedManyWithoutMoviesInput, {
    nullable: true,
  })
  genres?: GenreCreateNestedManyWithoutMoviesInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieKeywordCategoryCreateNestedManyWithoutMoviesInput,
    {
      nullable: true,
    },
  )
  keywordCategories?:
    | MovieKeywordCategoryCreateNestedManyWithoutMoviesInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingCreateNestedManyWithoutMovieInput, {
    nullable: true,
  })
  ratings?: MovieRatingCreateNestedManyWithoutMovieInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserCreateNestedManyWithoutWatchlistInput,
    {
      nullable: true,
    },
  )
  inWatchlistByUsers?:
    | MovifierAppUserCreateNestedManyWithoutWatchlistInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieSpokenLanguageCreateNestedManyWithoutMoviesInput,
    {
      nullable: true,
    },
  )
  spokenLanguages?:
    | MovieSpokenLanguageCreateNestedManyWithoutMoviesInput
    | undefined;
}
