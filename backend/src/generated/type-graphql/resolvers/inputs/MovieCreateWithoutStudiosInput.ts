import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { MovieCrewMemberCreateNestedManyWithoutMoviesInput } from "../inputs/MovieCrewMemberCreateNestedManyWithoutMoviesInput";
import { MovieInfoCreateNestedOneWithoutMovieInput } from "../inputs/MovieInfoCreateNestedOneWithoutMovieInput";
import { MovieKeywordCategoryCreateNestedManyWithoutMoviesInput } from "../inputs/MovieKeywordCategoryCreateNestedManyWithoutMoviesInput";
import { MovieListCreateNestedManyWithoutMoviesInput } from "../inputs/MovieListCreateNestedManyWithoutMoviesInput";
import { MovieRatingCreateNestedManyWithoutMovieInput } from "../inputs/MovieRatingCreateNestedManyWithoutMovieInput";
import { MovieSpokenLanguageCreateNestedManyWithoutMoviesInput } from "../inputs/MovieSpokenLanguageCreateNestedManyWithoutMoviesInput";
import { MovieStatsCreateNestedOneWithoutMovieInput } from "../inputs/MovieStatsCreateNestedOneWithoutMovieInput";
import { MovifierAppUserCreateNestedManyWithoutWatchlistInput } from "../inputs/MovifierAppUserCreateNestedManyWithoutWatchlistInput";

@TypeGraphQL.InputType("MovieCreateWithoutStudiosInput", {})
export class MovieCreateWithoutStudiosInput {
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

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  genreName?: string | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoCreateNestedOneWithoutMovieInput, {
    nullable: true,
  })
  movieInfo?: MovieInfoCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsCreateNestedOneWithoutMovieInput, {
    nullable: true,
  })
  MovieStats?: MovieStatsCreateNestedOneWithoutMovieInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberCreateNestedManyWithoutMoviesInput,
    {
      nullable: true,
    },
  )
  crewMembers?: MovieCrewMemberCreateNestedManyWithoutMoviesInput | undefined;

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

  @TypeGraphQL.Field((_type) => MovieListCreateNestedManyWithoutMoviesInput, {
    nullable: true,
  })
  movieLists?: MovieListCreateNestedManyWithoutMoviesInput | undefined;

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
