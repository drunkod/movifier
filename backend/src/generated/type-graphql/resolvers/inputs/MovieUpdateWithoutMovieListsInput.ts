import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutMoviesNestedInput } from "../inputs/GenreUpdateManyWithoutMoviesNestedInput";
import { MovieCrewMemberUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieCrewMemberUpdateManyWithoutMoviesNestedInput";
import { MovieInfoUpdateOneWithoutMovieNestedInput } from "../inputs/MovieInfoUpdateOneWithoutMovieNestedInput";
import { MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput";
import { MovieRatingUpdateManyWithoutMovieNestedInput } from "../inputs/MovieRatingUpdateManyWithoutMovieNestedInput";
import { MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput";
import { MovieStatsUpdateOneWithoutMovieNestedInput } from "../inputs/MovieStatsUpdateOneWithoutMovieNestedInput";
import { MovieStudioUpdateManyWithoutMoviesNestedInput } from "../inputs/MovieStudioUpdateManyWithoutMoviesNestedInput";
import { MovifierAppUserUpdateManyWithoutWatchlistNestedInput } from "../inputs/MovifierAppUserUpdateManyWithoutWatchlistNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieUpdateWithoutMovieListsInput", {})
export class MovieUpdateWithoutMovieListsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MovieInfoUpdateOneWithoutMovieNestedInput, {
    nullable: true,
  })
  movieInfo?: MovieInfoUpdateOneWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStatsUpdateOneWithoutMovieNestedInput, {
    nullable: true,
  })
  MovieStats?: MovieStatsUpdateOneWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieCrewMemberUpdateManyWithoutMoviesNestedInput,
    {
      nullable: true,
    },
  )
  crewMembers?: MovieCrewMemberUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field((_type) => MovieStudioUpdateManyWithoutMoviesNestedInput, {
    nullable: true,
  })
  studios?: MovieStudioUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field((_type) => GenreUpdateManyWithoutMoviesNestedInput, {
    nullable: true,
  })
  genres?: GenreUpdateManyWithoutMoviesNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput,
    {
      nullable: true,
    },
  )
  keywordCategories?:
    | MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput
    | undefined;

  @TypeGraphQL.Field((_type) => MovieRatingUpdateManyWithoutMovieNestedInput, {
    nullable: true,
  })
  ratings?: MovieRatingUpdateManyWithoutMovieNestedInput | undefined;

  @TypeGraphQL.Field(
    (_type) => MovifierAppUserUpdateManyWithoutWatchlistNestedInput,
    {
      nullable: true,
    },
  )
  inWatchlistByUsers?:
    | MovifierAppUserUpdateManyWithoutWatchlistNestedInput
    | undefined;

  @TypeGraphQL.Field(
    (_type) => MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput,
    {
      nullable: true,
    },
  )
  spokenLanguages?:
    | MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput
    | undefined;
}
