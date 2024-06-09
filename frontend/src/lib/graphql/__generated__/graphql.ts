import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateGenre = {
  __typename?: 'AggregateGenre';
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
};

export type AggregateMovie = {
  __typename?: 'AggregateMovie';
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
};

export type AggregateMovieCrewMember = {
  __typename?: 'AggregateMovieCrewMember';
  _avg?: Maybe<MovieCrewMemberAvgAggregate>;
  _count?: Maybe<MovieCrewMemberCountAggregate>;
  _max?: Maybe<MovieCrewMemberMaxAggregate>;
  _min?: Maybe<MovieCrewMemberMinAggregate>;
  _sum?: Maybe<MovieCrewMemberSumAggregate>;
};

export type AggregateMovieCrewMemberType = {
  __typename?: 'AggregateMovieCrewMemberType';
  _count?: Maybe<MovieCrewMemberTypeCountAggregate>;
  _max?: Maybe<MovieCrewMemberTypeMaxAggregate>;
  _min?: Maybe<MovieCrewMemberTypeMinAggregate>;
};

export type AggregateMovieLikedByUser = {
  __typename?: 'AggregateMovieLikedByUser';
  _count?: Maybe<MovieLikedByUserCountAggregate>;
  _max?: Maybe<MovieLikedByUserMaxAggregate>;
  _min?: Maybe<MovieLikedByUserMinAggregate>;
};

export type AggregateMovieList = {
  __typename?: 'AggregateMovieList';
  _count?: Maybe<MovieListCountAggregate>;
  _max?: Maybe<MovieListMaxAggregate>;
  _min?: Maybe<MovieListMinAggregate>;
};

export type AggregateMovieListLikedByUser = {
  __typename?: 'AggregateMovieListLikedByUser';
  _count?: Maybe<MovieListLikedByUserCountAggregate>;
  _max?: Maybe<MovieListLikedByUserMaxAggregate>;
  _min?: Maybe<MovieListLikedByUserMinAggregate>;
};

export type AggregateMovieRating = {
  __typename?: 'AggregateMovieRating';
  _avg?: Maybe<MovieRatingAvgAggregate>;
  _count?: Maybe<MovieRatingCountAggregate>;
  _max?: Maybe<MovieRatingMaxAggregate>;
  _min?: Maybe<MovieRatingMinAggregate>;
  _sum?: Maybe<MovieRatingSumAggregate>;
};

export type AggregateMovieReview = {
  __typename?: 'AggregateMovieReview';
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
};

export type AggregateMovieReviewLikedByUser = {
  __typename?: 'AggregateMovieReviewLikedByUser';
  _count?: Maybe<MovieReviewLikedByUserCountAggregate>;
  _max?: Maybe<MovieReviewLikedByUserMaxAggregate>;
  _min?: Maybe<MovieReviewLikedByUserMinAggregate>;
};

export type AggregateMovieSpokenLanguage = {
  __typename?: 'AggregateMovieSpokenLanguage';
  _count?: Maybe<MovieSpokenLanguageCountAggregate>;
  _max?: Maybe<MovieSpokenLanguageMaxAggregate>;
  _min?: Maybe<MovieSpokenLanguageMinAggregate>;
};

export type AggregateMovieWatchedByUser = {
  __typename?: 'AggregateMovieWatchedByUser';
  _count?: Maybe<MovieWatchedByUserCountAggregate>;
  _max?: Maybe<MovieWatchedByUserMaxAggregate>;
  _min?: Maybe<MovieWatchedByUserMinAggregate>;
};

export type AggregateUserMovieWatchlist = {
  __typename?: 'AggregateUserMovieWatchlist';
  _count?: Maybe<UserMovieWatchlistCountAggregate>;
  _max?: Maybe<UserMovieWatchlistMaxAggregate>;
  _min?: Maybe<UserMovieWatchlistMinAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type Decades = {
  __typename?: 'Decades';
  decades: Array<Scalars['Float']['output']>;
};

export type EnumMoviefireAppUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<MoviefireAppUserRole>;
};

export type EnumMoviefireAppUserRoleFilter = {
  equals?: InputMaybe<MoviefireAppUserRole>;
  in?: InputMaybe<Array<MoviefireAppUserRole>>;
  not?: InputMaybe<NestedEnumMoviefireAppUserRoleFilter>;
  notIn?: InputMaybe<Array<MoviefireAppUserRole>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Genre = {
  __typename?: 'Genre';
  _count?: Maybe<GenreCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movies: Array<Movie>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type GenreMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type GenreCount = {
  __typename?: 'GenreCount';
  movies: Scalars['Int']['output'];
};


export type GenreCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type GenreCountAggregate = {
  __typename?: 'GenreCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GenreCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GenreCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GenreCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<GenreCreateWithoutMoviesInput>>;
};

export type GenreCreateOrConnectWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type GenreGroupBy = {
  __typename?: 'GenreGroupBy';
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type GenreListRelationFilter = {
  every?: InputMaybe<GenreWhereInput>;
  none?: InputMaybe<GenreWhereInput>;
  some?: InputMaybe<GenreWhereInput>;
};

export type GenreMaxAggregate = {
  __typename?: 'GenreMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type GenreMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreMinAggregate = {
  __typename?: 'GenreMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type GenreMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GenreOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type GenreOrderByRelevanceInput = {
  fields: Array<GenreOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type GenreOrderByWithAggregationInput = {
  _count?: InputMaybe<GenreCountOrderByAggregateInput>;
  _max?: InputMaybe<GenreMaxOrderByAggregateInput>;
  _min?: InputMaybe<GenreMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<GenreOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GenreScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt';

export type GenreScalarWhereInput = {
  AND?: InputMaybe<Array<GenreScalarWhereInput>>;
  NOT?: InputMaybe<Array<GenreScalarWhereInput>>;
  OR?: InputMaybe<Array<GenreScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GenreScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GenreScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GenreScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GenreScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GenreUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutGenresNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateManyWithWhereWithoutMoviesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<GenreCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<GenreWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GenreScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GenreWhereUniqueInput>>;
  set?: InputMaybe<Array<GenreWhereUniqueInput>>;
  update?: InputMaybe<Array<GenreUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<GenreUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<GenreUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
  data: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  update: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreWhereInput = {
  AND?: InputMaybe<Array<GenreWhereInput>>;
  NOT?: InputMaybe<Array<GenreWhereInput>>;
  OR?: InputMaybe<Array<GenreWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GenreWhereUniqueInput = {
  AND?: InputMaybe<Array<GenreWhereInput>>;
  NOT?: InputMaybe<Array<GenreWhereInput>>;
  OR?: InputMaybe<Array<GenreWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  crewMembers: Array<MovieCrewMemberOnMovie>;
  genres: Array<Genre>;
  id: Scalars['String']['output'];
  inWatchlistByUsers: Array<UserMovieWatchlist>;
  keywordCategories: Array<MovieKeywordCategory>;
  likedBy: Array<MovieLikedByUser>;
  movieInfo?: Maybe<MovieInfo>;
  movieLists: Array<MovieList>;
  movieStats?: Maybe<MovieStats>;
  ratedBy: Array<MovieRating>;
  spokenLanguages: Array<MovieSpokenLanguage>;
  studios: Array<MovieStudio>;
  updatedAt: Scalars['DateTimeISO']['output'];
  watchedBy: Array<MovieWatchedByUser>;
};


export type MovieCrewMembersArgs = {
  cursor?: InputMaybe<MovieCrewMemberOnMovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberOnMovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};


export type MovieGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type MovieInWatchlistByUsersArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MovieKeywordCategoriesArgs = {
  cursor?: InputMaybe<MovieKeywordCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieKeywordCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
};


export type MovieLikedByArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovieMovieInfoArgs = {
  where?: InputMaybe<MovieInfoWhereInput>;
};


export type MovieMovieListsArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovieMovieStatsArgs = {
  where?: InputMaybe<MovieStatsWhereInput>;
};


export type MovieRatedByArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovieSpokenLanguagesArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieSpokenLanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MovieStudiosArgs = {
  cursor?: InputMaybe<MovieStudioWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieStudioScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieStudioOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieStudioWhereInput>;
};


export type MovieWatchedByArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  crewMembers: Scalars['Int']['output'];
  genres: Scalars['Int']['output'];
  inWatchlistByUsers: Scalars['Int']['output'];
  keywordCategories: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
  movieLists: Scalars['Int']['output'];
  ratedBy: Scalars['Int']['output'];
  spokenLanguages: Scalars['Int']['output'];
  studios: Scalars['Int']['output'];
  watchedBy: Scalars['Int']['output'];
};


export type MovieCountCrewMembersArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};


export type MovieCountGenresArgs = {
  where?: InputMaybe<GenreWhereInput>;
};


export type MovieCountInWatchlistByUsersArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MovieCountKeywordCategoriesArgs = {
  where?: InputMaybe<MovieKeywordCategoryWhereInput>;
};


export type MovieCountLikedByArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovieCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovieCountRatedByArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovieCountSpokenLanguagesArgs = {
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MovieCountStudiosArgs = {
  where?: InputMaybe<MovieStudioWhereInput>;
};


export type MovieCountWatchedByArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieCountAggregate = {
  __typename?: 'MovieCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutGenresInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutGenresInput>>;
};

export type MovieCreateNestedManyWithoutMovieListsInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutMovieListsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutMovieListsInput>>;
};

export type MovieCreateNestedManyWithoutSpokenLanguagesInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutSpokenLanguagesInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutSpokenLanguagesInput>>;
};

export type MovieCreateNestedOneWithoutCrewMembersInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutCrewMembersInput>;
  create?: InputMaybe<MovieCreateWithoutCrewMembersInput>;
};

export type MovieCreateNestedOneWithoutInWatchlistByUsersInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutInWatchlistByUsersInput>;
  create?: InputMaybe<MovieCreateWithoutInWatchlistByUsersInput>;
};

export type MovieCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieCreateWithoutLikedByInput>;
};

export type MovieCreateNestedOneWithoutRatedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatedByInput>;
  create?: InputMaybe<MovieCreateWithoutRatedByInput>;
};

export type MovieCreateNestedOneWithoutWatchedByInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchedByInput>;
  create?: InputMaybe<MovieCreateWithoutWatchedByInput>;
};

export type MovieCreateOrConnectWithoutCrewMembersInput = {
  create: MovieCreateWithoutCrewMembersInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutLikedByInput = {
  create: MovieCreateWithoutLikedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutRatedByInput = {
  create: MovieCreateWithoutRatedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutSpokenLanguagesInput = {
  create: MovieCreateWithoutSpokenLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutWatchedByInput = {
  create: MovieCreateWithoutWatchedByInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutCrewMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutGenresInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutInWatchlistByUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutLikedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutMovieListsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutRatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutSpokenLanguagesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  watchedBy?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutMovieInput>;
};

export type MovieCreateWithoutWatchedByInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutMovieInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryCreateNestedManyWithoutMoviesInput>;
  likedBy?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutMovieInput>;
  movieInfo?: InputMaybe<MovieInfoCreateNestedOneWithoutMovieInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMoviesInput>;
  movieStats?: InputMaybe<MovieStatsCreateNestedOneWithoutMovieInput>;
  ratedBy?: InputMaybe<MovieRatingCreateNestedManyWithoutMovieInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageCreateNestedManyWithoutMoviesInput>;
  studios?: InputMaybe<MovieStudioCreateNestedManyWithoutMoviesInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMember = {
  __typename?: 'MovieCrewMember';
  _count?: Maybe<MovieCrewMemberCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  movies: Array<MovieCrewMemberOnMovie>;
  name: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type MovieCrewMemberMoviesArgs = {
  cursor?: InputMaybe<MovieCrewMemberOnMovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberOnMovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberAvgAggregate = {
  __typename?: 'MovieCrewMemberAvgAggregate';
  popularity?: Maybe<Scalars['Float']['output']>;
};

export type MovieCrewMemberAvgOrderByAggregateInput = {
  popularity?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberCount = {
  __typename?: 'MovieCrewMemberCount';
  movies: Scalars['Int']['output'];
};


export type MovieCrewMemberCountMoviesArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberCountAggregate = {
  __typename?: 'MovieCrewMemberCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imdbId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  photoUrl: Scalars['Int']['output'];
  popularity: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieCrewMemberCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  movies?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput>;
  name: Scalars['String']['input'];
  photoUrl: Scalars['String']['input'];
  popularity?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoUrl: Scalars['String']['input'];
  popularity?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberCreateNestedOneWithoutMoviesInput = {
  connect?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<MovieCrewMemberCreateWithoutMoviesInput>;
};

export type MovieCrewMemberCreateOrConnectWithoutMoviesInput = {
  create: MovieCrewMemberCreateWithoutMoviesInput;
  where: MovieCrewMemberWhereUniqueInput;
};

export type MovieCrewMemberCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  photoUrl: Scalars['String']['input'];
  popularity?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberGroupBy = {
  __typename?: 'MovieCrewMemberGroupBy';
  _avg?: Maybe<MovieCrewMemberAvgAggregate>;
  _count?: Maybe<MovieCrewMemberCountAggregate>;
  _max?: Maybe<MovieCrewMemberMaxAggregate>;
  _min?: Maybe<MovieCrewMemberMinAggregate>;
  _sum?: Maybe<MovieCrewMemberSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photoUrl: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieCrewMemberMaxAggregate = {
  __typename?: 'MovieCrewMemberMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imdbId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieCrewMemberMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberMinAggregate = {
  __typename?: 'MovieCrewMemberMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imdbId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoUrl?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieCrewMemberMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOnMovie = {
  __typename?: 'MovieCrewMemberOnMovie';
  createdAt: Scalars['DateTimeISO']['output'];
  crewMember: MovieCrewMember;
  movie: Movie;
  movieCrewMemberId: Scalars['String']['output'];
  movieCrewMemberType: MovieCrewMemberType;
  movieCrewMemberTypeId: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieCrewMemberOnMovieCreateManyCrewMemberInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieCrewMemberTypeId: Scalars['String']['input'];
  movieId: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope = {
  data: Array<MovieCrewMemberOnMovieCreateManyCrewMemberInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieCrewMemberId: Scalars['String']['input'];
  movieId: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope = {
  data: Array<MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieCrewMemberId: Scalars['String']['input'];
  movieCrewMemberTypeId: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateManyMovieInputEnvelope = {
  data: Array<MovieCrewMemberOnMovieCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutCrewMemberInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope>;
};

export type MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope>;
};

export type MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieInputEnvelope>;
};

export type MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput = {
  create: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieCreateWithoutCrewMemberInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutCrewMembersInput;
  movieCrewMemberType: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMember: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  movie: MovieCreateNestedOneWithoutCrewMembersInput;
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  crewMember: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  movieCrewMemberType: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  order?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieCrewMemberOnMovieListRelationFilter = {
  every?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
  none?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
  some?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput = {
  movieCrewMemberId: Scalars['String']['input'];
  movieCrewMemberTypeId: Scalars['String']['input'];
  movieId: Scalars['String']['input'];
};

export type MovieCrewMemberOnMovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOnMovieOrderByRelevanceFieldEnum =
  | 'movieCrewMemberId'
  | 'movieCrewMemberTypeId'
  | 'movieId';

export type MovieCrewMemberOnMovieOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberOnMovieOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberOnMovieOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  crewMember?: InputMaybe<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieCrewMemberId?: InputMaybe<SortOrder>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>;
  movieCrewMemberTypeId?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOnMovieScalarFieldEnum =
  | 'createdAt'
  | 'movieCrewMemberId'
  | 'movieCrewMemberTypeId'
  | 'movieId'
  | 'order'
  | 'updatedAt';

export type MovieCrewMemberOnMovieScalarWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOnMovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput = {
  data: MovieCrewMemberOnMovieUpdateManyMutationInput;
  where: MovieCrewMemberOnMovieScalarWhereInput;
};

export type MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput = {
  data: MovieCrewMemberOnMovieUpdateManyMutationInput;
  where: MovieCrewMemberOnMovieScalarWhereInput;
};

export type MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput = {
  data: MovieCrewMemberOnMovieUpdateManyMutationInput;
  where: MovieCrewMemberOnMovieScalarWhereInput;
};

export type MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutCrewMemberInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope>;
  delete?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput>>;
  updateMany?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput>>;
  upsert?: InputMaybe<Array<MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput>>;
};

export type MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope>;
  delete?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput>>;
  updateMany?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput>>;
  upsert?: InputMaybe<Array<MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput>>;
};

export type MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieCrewMemberOnMovieCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieCrewMemberOnMovieCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieCrewMemberOnMovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieCrewMemberOnMovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput = {
  data: MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput = {
  data: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutCrewMembersNestedInput>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMember?: InputMaybe<MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutCrewMembersNestedInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMember?: InputMaybe<MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput = {
  create: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput;
  update: MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput;
  update: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  update: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  where: MovieCrewMemberOnMovieWhereUniqueInput;
};

export type MovieCrewMemberOnMovieWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMember?: InputMaybe<MovieCrewMemberRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeRelationFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOnMovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberOnMovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMember?: InputMaybe<MovieCrewMemberRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieCrewMemberId?: InputMaybe<StringFilter>;
  movieCrewMemberType?: InputMaybe<MovieCrewMemberTypeRelationFilter>;
  movieCrewMemberTypeId?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  movieId_movieCrewMemberId_movieCrewMemberTypeId?: InputMaybe<MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput>;
  order?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberOrderByRelevanceFieldEnum =
  | 'description'
  | 'id'
  | 'imdbId'
  | 'name'
  | 'photoUrl';

export type MovieCrewMemberOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieCrewMemberAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieCrewMemberCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieCrewMemberMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieCrewMemberMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieCrewMemberSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  photoUrl?: InputMaybe<SortOrder>;
  popularity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberRelationFilter = {
  is?: InputMaybe<MovieCrewMemberWhereInput>;
  isNot?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberScalarFieldEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'imdbId'
  | 'name'
  | 'photoUrl'
  | 'popularity'
  | 'updatedAt';

export type MovieCrewMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieCrewMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imdbId?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  photoUrl?: InputMaybe<StringWithAggregatesFilter>;
  popularity?: InputMaybe<FloatWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieCrewMemberSumAggregate = {
  __typename?: 'MovieCrewMemberSumAggregate';
  popularity?: Maybe<Scalars['Float']['output']>;
};

export type MovieCrewMemberSumOrderByAggregateInput = {
  popularity?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberType = {
  __typename?: 'MovieCrewMemberType';
  _count?: Maybe<MovieCrewMemberTypeCount>;
  id: Scalars['String']['output'];
  movieCrewMembers: Array<MovieCrewMemberOnMovie>;
  name: Scalars['String']['output'];
};


export type MovieCrewMemberTypeMovieCrewMembersArgs = {
  cursor?: InputMaybe<MovieCrewMemberOnMovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberOnMovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberTypeCount = {
  __typename?: 'MovieCrewMemberTypeCount';
  movieCrewMembers: Scalars['Int']['output'];
};


export type MovieCrewMemberTypeCountMovieCrewMembersArgs = {
  where?: InputMaybe<MovieCrewMemberOnMovieWhereInput>;
};

export type MovieCrewMemberTypeCountAggregate = {
  __typename?: 'MovieCrewMemberTypeCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type MovieCrewMemberTypeCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput>;
  name: Scalars['String']['input'];
};

export type MovieCrewMemberTypeCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput = {
  connect?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput>;
  create?: InputMaybe<MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput>;
};

export type MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput = {
  create: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  where: MovieCrewMemberTypeWhereUniqueInput;
};

export type MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MovieCrewMemberTypeGroupBy = {
  __typename?: 'MovieCrewMemberTypeGroupBy';
  _count?: Maybe<MovieCrewMemberTypeCountAggregate>;
  _max?: Maybe<MovieCrewMemberTypeMaxAggregate>;
  _min?: Maybe<MovieCrewMemberTypeMinAggregate>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MovieCrewMemberTypeMaxAggregate = {
  __typename?: 'MovieCrewMemberTypeMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MovieCrewMemberTypeMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeMinAggregate = {
  __typename?: 'MovieCrewMemberTypeMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MovieCrewMemberTypeMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieCrewMemberTypeOrderByRelevanceInput = {
  fields: Array<MovieCrewMemberTypeOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieCrewMemberTypeOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieCrewMemberTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieCrewMemberTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieCrewMemberTypeMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieCrewMemberTypeOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type MovieCrewMemberTypeRelationFilter = {
  is?: InputMaybe<MovieCrewMemberTypeWhereInput>;
  isNot?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeScalarFieldEnum =
  | 'id'
  | 'name';

export type MovieCrewMemberTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieCrewMemberTypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberTypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberTypeScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieCrewMemberTypeUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieCrewMemberTypeUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput = {
  connect?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput>;
  create?: InputMaybe<MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput>;
  update?: InputMaybe<MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput>;
  upsert?: InputMaybe<MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput>;
};

export type MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput = {
  data: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput = {
  create: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  update: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};

export type MovieCrewMemberTypeWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  id?: InputMaybe<StringFilter>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieCrewMemberTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberTypeWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieCrewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MovieCrewMemberUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput = {
  connect?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCrewMemberCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<MovieCrewMemberCreateWithoutMoviesInput>;
  update?: InputMaybe<MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput>;
  upsert?: InputMaybe<MovieCrewMemberUpsertWithoutMoviesInput>;
};

export type MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput = {
  data: MovieCrewMemberUpdateWithoutMoviesInput;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photoUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  popularity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieCrewMemberUpsertWithoutMoviesInput = {
  create: MovieCrewMemberCreateWithoutMoviesInput;
  update: MovieCrewMemberUpdateWithoutMoviesInput;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};

export type MovieCrewMemberWhereInput = {
  AND?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imdbId?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  photoUrl?: InputMaybe<StringFilter>;
  popularity?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieCrewMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  NOT?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  OR?: InputMaybe<Array<MovieCrewMemberWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  photoUrl?: InputMaybe<StringFilter>;
  popularity?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieGroupBy = {
  __typename?: 'MovieGroupBy';
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieInfo = {
  __typename?: 'MovieInfo';
  alternativeTitles: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  durationInMinutes: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  imdbId: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  posterUrl: Scalars['String']['output'];
  releaseDate: Scalars['DateTimeISO']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieInfoCreateNestedOneWithoutMovieInput = {
  connect?: InputMaybe<MovieInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieInfoCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieInfoCreateWithoutMovieInput>;
};

export type MovieInfoCreateOrConnectWithoutMovieInput = {
  create: MovieInfoCreateWithoutMovieInput;
  where: MovieInfoWhereUniqueInput;
};

export type MovieInfoCreateWithoutMovieInput = {
  alternativeTitles?: InputMaybe<MovieInfoCreatealternativeTitlesInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  durationInMinutes: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId: Scalars['String']['input'];
  posterUrl: Scalars['String']['input'];
  releaseDate: Scalars['DateTimeISO']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieInfoCreatealternativeTitlesInput = {
  set: Array<Scalars['String']['input']>;
};

export type MovieInfoNullableRelationFilter = {
  is?: InputMaybe<MovieInfoWhereInput>;
  isNot?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoOrderByRelevanceFieldEnum =
  | 'alternativeTitles'
  | 'description'
  | 'id'
  | 'imdbId'
  | 'movieId'
  | 'posterUrl'
  | 'title';

export type MovieInfoOrderByRelevanceInput = {
  fields: Array<MovieInfoOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieInfoOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieInfoOrderByRelevanceInput>;
  alternativeTitles?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationInMinutes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imdbId?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  posterUrl?: InputMaybe<SortOrder>;
  releaseDate?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieInfoUpdateOneWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieInfoWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieInfoCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieInfoCreateWithoutMovieInput>;
  delete?: InputMaybe<MovieInfoWhereInput>;
  disconnect?: InputMaybe<MovieInfoWhereInput>;
  update?: InputMaybe<MovieInfoUpdateToOneWithWhereWithoutMovieInput>;
  upsert?: InputMaybe<MovieInfoUpsertWithoutMovieInput>;
};

export type MovieInfoUpdateToOneWithWhereWithoutMovieInput = {
  data: MovieInfoUpdateWithoutMovieInput;
  where?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoUpdateWithoutMovieInput = {
  alternativeTitles?: InputMaybe<MovieInfoUpdatealternativeTitlesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationInMinutes?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imdbId?: InputMaybe<StringFieldUpdateOperationsInput>;
  posterUrl?: InputMaybe<StringFieldUpdateOperationsInput>;
  releaseDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieInfoUpdatealternativeTitlesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MovieInfoUpsertWithoutMovieInput = {
  create: MovieInfoCreateWithoutMovieInput;
  update: MovieInfoUpdateWithoutMovieInput;
  where?: InputMaybe<MovieInfoWhereInput>;
};

export type MovieInfoWhereInput = {
  AND?: InputMaybe<Array<MovieInfoWhereInput>>;
  NOT?: InputMaybe<Array<MovieInfoWhereInput>>;
  OR?: InputMaybe<Array<MovieInfoWhereInput>>;
  alternativeTitles?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  durationInMinutes?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  imdbId?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  posterUrl?: InputMaybe<StringFilter>;
  releaseDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieInfoWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieInfoWhereInput>>;
  NOT?: InputMaybe<Array<MovieInfoWhereInput>>;
  OR?: InputMaybe<Array<MovieInfoWhereInput>>;
  alternativeTitles?: InputMaybe<StringNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  durationInMinutes?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imdbId?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<Scalars['String']['input']>;
  posterUrl?: InputMaybe<StringFilter>;
  releaseDate?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieKeywordCategory = {
  __typename?: 'MovieKeywordCategory';
  _count?: Maybe<MovieKeywordCategoryCount>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type MovieKeywordCategoryCount = {
  __typename?: 'MovieKeywordCategoryCount';
  movies: Scalars['Int']['output'];
};


export type MovieKeywordCategoryCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieKeywordCategoryCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieKeywordCategoryCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieKeywordCategoryCreateWithoutMoviesInput>>;
};

export type MovieKeywordCategoryCreateOrConnectWithoutMoviesInput = {
  create: MovieKeywordCategoryCreateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryCreateWithoutMoviesInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MovieKeywordCategoryListRelationFilter = {
  every?: InputMaybe<MovieKeywordCategoryWhereInput>;
  none?: InputMaybe<MovieKeywordCategoryWhereInput>;
  some?: InputMaybe<MovieKeywordCategoryWhereInput>;
};

export type MovieKeywordCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieKeywordCategoryOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieKeywordCategoryOrderByRelevanceInput = {
  fields: Array<MovieKeywordCategoryOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieKeywordCategoryOrderByRelevanceInput>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export type MovieKeywordCategoryScalarFieldEnum =
  | 'id'
  | 'name';

export type MovieKeywordCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieKeywordCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieKeywordCategoryUpdateManyMutationInput;
  where: MovieKeywordCategoryScalarWhereInput;
};

export type MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieKeywordCategoryCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieKeywordCategoryCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieKeywordCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieKeywordCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieKeywordCategoryUpdateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryUpdateWithoutMoviesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieKeywordCategoryCreateWithoutMoviesInput;
  update: MovieKeywordCategoryUpdateWithoutMoviesInput;
  where: MovieKeywordCategoryWhereUniqueInput;
};

export type MovieKeywordCategoryWhereInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  id?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MovieKeywordCategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  NOT?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  OR?: InputMaybe<Array<MovieKeywordCategoryWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MovieLikedByUser = {
  __typename?: 'MovieLikedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieLikedByUserCountAggregate = {
  __typename?: 'MovieLikedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieLikedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutLikedByInput;
  user: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyMovieInputEnvelope = {
  data: Array<MovieLikedByUserCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type MovieLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieLikedByUserCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyMovieInputEnvelope>;
};

export type MovieLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieLikedByUserCreateOrConnectWithoutMovieInput = {
  create: MovieLikedByUserCreateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieLikedByUserCreateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutLikedByInput;
};

export type MovieLikedByUserGroupBy = {
  __typename?: 'MovieLikedByUserGroupBy';
  _count?: Maybe<MovieLikedByUserCountAggregate>;
  _max?: Maybe<MovieLikedByUserMaxAggregate>;
  _min?: Maybe<MovieLikedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieLikedByUserWhereInput>;
  none?: InputMaybe<MovieLikedByUserWhereInput>;
  some?: InputMaybe<MovieLikedByUserWhereInput>;
};

export type MovieLikedByUserMaxAggregate = {
  __typename?: 'MovieLikedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieLikedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserMinAggregate = {
  __typename?: 'MovieLikedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieLikedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type MovieLikedByUserOrderByRelevanceInput = {
  fields: Array<MovieLikedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieLikedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieLikedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieLikedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieLikedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieLikedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type MovieLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieLikedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieLikedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieLikedByUserUpdateManyWithWhereWithoutMovieInput = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where: MovieLikedByUserScalarWhereInput;
};

export type MovieLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where: MovieLikedByUserScalarWhereInput;
};

export type MovieLikedByUserUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieLikedByUserUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieLikedByUserUpdateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieLikedByUserUpdateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieLikedByUserCreateWithoutMovieInput;
  update: MovieLikedByUserUpdateWithoutMovieInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieLikedByUserCreateWithoutUserInput;
  update: MovieLikedByUserUpdateWithoutUserInput;
  where: MovieLikedByUserWhereUniqueInput;
};

export type MovieLikedByUserUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieLikedByUserUserIdMovieIdCompoundUniqueInput>;
};

export type MovieList = {
  __typename?: 'MovieList';
  _count?: Maybe<MovieListCount>;
  comments: Array<MovieListComment>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  likedBy: Array<MovieListLikedByUser>;
  movieListAuthor: MovifierAppUser;
  movies: Array<Movie>;
  name: Scalars['String']['output'];
  stats?: Maybe<MovieListStats>;
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};


export type MovieListCommentsArgs = {
  cursor?: InputMaybe<MovieListCommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListCommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListCommentOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovieListLikedByArgs = {
  cursor?: InputMaybe<MovieListLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MovieListMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type MovieListStatsArgs = {
  where?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListComment = {
  __typename?: 'MovieListComment';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movieListId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type MovieListCommentCreateManyMovieListInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieListCommentCreateManyMovieListInputEnvelope = {
  data: Array<MovieListCommentCreateManyMovieListInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCommentCreateManyUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieListId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCommentCreateManyUserInputEnvelope = {
  data: Array<MovieListCommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCommentCreateNestedManyWithoutMovieListInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyMovieListInputEnvelope>;
};

export type MovieListCommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyUserInputEnvelope>;
};

export type MovieListCommentCreateOrConnectWithoutMovieListInput = {
  create: MovieListCommentCreateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentCreateOrConnectWithoutUserInput = {
  create: MovieListCommentCreateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentCreateWithoutMovieListInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
};

export type MovieListCommentCreateWithoutUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieList: MovieListCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCommentListRelationFilter = {
  every?: InputMaybe<MovieListCommentWhereInput>;
  none?: InputMaybe<MovieListCommentWhereInput>;
  some?: InputMaybe<MovieListCommentWhereInput>;
};

export type MovieListCommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListCommentOrderByRelevanceFieldEnum =
  | 'content'
  | 'id'
  | 'movieListId'
  | 'userId';

export type MovieListCommentOrderByRelevanceInput = {
  fields: Array<MovieListCommentOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListCommentOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieListCommentOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieList?: InputMaybe<MovieListOrderByWithRelationAndSearchRelevanceInput>;
  movieListId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListCommentScalarFieldEnum =
  | 'content'
  | 'createdAt'
  | 'id'
  | 'movieListId'
  | 'updatedAt'
  | 'userId';

export type MovieListCommentScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListCommentUpdateManyWithWhereWithoutMovieListInput = {
  data: MovieListCommentUpdateManyMutationInput;
  where: MovieListCommentScalarWhereInput;
};

export type MovieListCommentUpdateManyWithWhereWithoutUserInput = {
  data: MovieListCommentUpdateManyMutationInput;
  where: MovieListCommentScalarWhereInput;
};

export type MovieListCommentUpdateManyWithoutMovieListNestedInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyMovieListInputEnvelope>;
  delete?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput>>;
  updateMany?: InputMaybe<Array<MovieListCommentUpdateManyWithWhereWithoutMovieListInput>>;
  upsert?: InputMaybe<Array<MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput>>;
};

export type MovieListCommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListCommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListCommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListCommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListCommentWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListCommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieListCommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieListCommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput = {
  data: MovieListCommentUpdateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieListCommentUpdateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpdateWithoutMovieListInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput>;
};

export type MovieListCommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput = {
  create: MovieListCommentCreateWithoutMovieListInput;
  update: MovieListCommentUpdateWithoutMovieListInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieListCommentCreateWithoutUserInput;
  update: MovieListCommentUpdateWithoutUserInput;
  where: MovieListCommentWhereUniqueInput;
};

export type MovieListCommentWhereInput = {
  AND?: InputMaybe<Array<MovieListCommentWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCommentWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListCommentWhereInput>>;
  NOT?: InputMaybe<Array<MovieListCommentWhereInput>>;
  OR?: InputMaybe<Array<MovieListCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListCount = {
  __typename?: 'MovieListCount';
  comments: Scalars['Int']['output'];
  likedBy: Scalars['Int']['output'];
  movies: Scalars['Int']['output'];
};


export type MovieListCountCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovieListCountLikedByArgs = {
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MovieListCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieListCountAggregate = {
  __typename?: 'MovieListCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  tags: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieListCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListCreateInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieListCreateManyMovieListAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateManyMovieListAuthorInputEnvelope = {
  data: Array<MovieListCreateManyMovieListAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListCreateNestedManyWithoutMovieListAuthorInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMovieListAuthorInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMovieListAuthorInput>>;
  createMany?: InputMaybe<MovieListCreateManyMovieListAuthorInputEnvelope>;
};

export type MovieListCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMoviesInput>>;
};

export type MovieListCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutCommentsInput>;
};

export type MovieListCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieListCreateWithoutLikedByInput>;
};

export type MovieListCreateOrConnectWithoutCommentsInput = {
  create: MovieListCreateWithoutCommentsInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutLikedByInput = {
  create: MovieListCreateWithoutLikedByInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMovieListAuthorInput = {
  create: MovieListCreateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateOrConnectWithoutMoviesInput = {
  create: MovieListCreateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutLikedByInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMovieListAuthorInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutMovieListsInput>;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreateWithoutMoviesInput = {
  comments?: InputMaybe<MovieListCommentCreateNestedManyWithoutMovieListInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutMovieListInput>;
  movieListAuthor: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  name: Scalars['String']['input'];
  stats?: InputMaybe<MovieListStatsCreateNestedOneWithoutMovieListInput>;
  tags?: InputMaybe<MovieListCreatetagsInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieListCreatetagsInput = {
  set: Array<Scalars['String']['input']>;
};

export type MovieListGroupBy = {
  __typename?: 'MovieListGroupBy';
  _count?: Maybe<MovieListCountAggregate>;
  _max?: Maybe<MovieListMaxAggregate>;
  _min?: Maybe<MovieListMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type MovieListLikedByUser = {
  __typename?: 'MovieListLikedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movieList: MovieList;
  movieListId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieListLikedByUserCountAggregate = {
  __typename?: 'MovieListLikedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieListId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieListLikedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieList: MovieListCreateNestedOneWithoutLikedByInput;
  user: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
};

export type MovieListLikedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieListLikedByUserCreateManyMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieListLikedByUserCreateManyMovieListInputEnvelope = {
  data: Array<MovieListLikedByUserCreateManyMovieListInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieListId: Scalars['String']['input'];
};

export type MovieListLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieListLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieListLikedByUserCreateNestedManyWithoutMovieListInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyMovieListInputEnvelope>;
};

export type MovieListLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieListLikedByUserCreateOrConnectWithoutMovieListInput = {
  create: MovieListLikedByUserCreateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieListLikedByUserCreateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserCreateWithoutMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
};

export type MovieListLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieList: MovieListCreateNestedOneWithoutLikedByInput;
};

export type MovieListLikedByUserGroupBy = {
  __typename?: 'MovieListLikedByUserGroupBy';
  _count?: Maybe<MovieListLikedByUserCountAggregate>;
  _max?: Maybe<MovieListLikedByUserMaxAggregate>;
  _min?: Maybe<MovieListLikedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieListId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieListLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieListLikedByUserWhereInput>;
  none?: InputMaybe<MovieListLikedByUserWhereInput>;
  some?: InputMaybe<MovieListLikedByUserWhereInput>;
};

export type MovieListLikedByUserMaxAggregate = {
  __typename?: 'MovieListLikedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieListId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieListLikedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserMinAggregate = {
  __typename?: 'MovieListLikedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieListId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieListLikedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserOrderByRelevanceFieldEnum =
  | 'movieListId'
  | 'userId';

export type MovieListLikedByUserOrderByRelevanceInput = {
  fields: Array<MovieListLikedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListLikedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieListLikedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieListLikedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieListLikedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieListLikedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieList?: InputMaybe<MovieListOrderByWithRelationAndSearchRelevanceInput>;
  movieListId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListLikedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieListId'
  | 'userId';

export type MovieListLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieListId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListLikedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieListId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieListLikedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutLikedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput>;
};

export type MovieListLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput = {
  data: MovieListLikedByUserUpdateManyMutationInput;
  where: MovieListLikedByUserScalarWhereInput;
};

export type MovieListLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieListLikedByUserUpdateManyMutationInput;
  where: MovieListLikedByUserScalarWhereInput;
};

export type MovieListLikedByUserUpdateManyWithoutMovieListNestedInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutMovieListInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutMovieListInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyMovieListInputEnvelope>;
  delete?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput>>;
  updateMany?: InputMaybe<Array<MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput>>;
  upsert?: InputMaybe<Array<MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput>>;
};

export type MovieListLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieListLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieListLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieListLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput = {
  data: MovieListLikedByUserUpdateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieListLikedByUserUpdateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpdateWithoutMovieListInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput>;
};

export type MovieListLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieList?: InputMaybe<MovieListUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput = {
  create: MovieListLikedByUserCreateWithoutMovieListInput;
  update: MovieListLikedByUserUpdateWithoutMovieListInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieListLikedByUserCreateWithoutUserInput;
  update: MovieListLikedByUserUpdateWithoutUserInput;
  where: MovieListLikedByUserWhereUniqueInput;
};

export type MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput = {
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieListLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieListLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieList?: InputMaybe<MovieListRelationFilter>;
  movieListId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieListId?: InputMaybe<MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput>;
};

export type MovieListListRelationFilter = {
  every?: InputMaybe<MovieListWhereInput>;
  none?: InputMaybe<MovieListWhereInput>;
  some?: InputMaybe<MovieListWhereInput>;
};

export type MovieListMaxAggregate = {
  __typename?: 'MovieListMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieListMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListMinAggregate = {
  __typename?: 'MovieListMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieListMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieListOrderByRelevanceFieldEnum =
  | 'description'
  | 'id'
  | 'name'
  | 'tags'
  | 'userId';

export type MovieListOrderByRelevanceInput = {
  fields: Array<MovieListOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieListCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieListMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieListMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieListOrderByRelevanceInput>;
  comments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedBy?: InputMaybe<MovieListLikedByUserOrderByRelationAggregateInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  stats?: InputMaybe<MovieListStatsOrderByWithRelationAndSearchRelevanceInput>;
  tags?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieListRelationFilter = {
  is?: InputMaybe<MovieListWhereInput>;
  isNot?: InputMaybe<MovieListWhereInput>;
};

export type MovieListScalarFieldEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'name'
  | 'tags'
  | 'updatedAt'
  | 'userId';

export type MovieListScalarWhereInput = {
  AND?: InputMaybe<Array<MovieListScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieListScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieListScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieListScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieListScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieListScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieListSearchCriteriaInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MovieListStats = {
  __typename?: 'MovieListStats';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  likes: Scalars['Int']['output'];
  movieListId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  views: Scalars['Int']['output'];
};

export type MovieListStatsCreateNestedOneWithoutMovieListInput = {
  connect?: InputMaybe<MovieListStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListStatsCreateOrConnectWithoutMovieListInput>;
  create?: InputMaybe<MovieListStatsCreateWithoutMovieListInput>;
};

export type MovieListStatsCreateOrConnectWithoutMovieListInput = {
  create: MovieListStatsCreateWithoutMovieListInput;
  where: MovieListStatsWhereUniqueInput;
};

export type MovieListStatsCreateWithoutMovieListInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likes: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  views: Scalars['Int']['input'];
};

export type MovieListStatsNullableRelationFilter = {
  is?: InputMaybe<MovieListStatsWhereInput>;
  isNot?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieListId';

export type MovieListStatsOrderByRelevanceInput = {
  fields: Array<MovieListStatsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieListStatsOrderByWithRelationAndSearchRelevanceInput = {
  MovieList?: InputMaybe<MovieListOrderByWithRelationAndSearchRelevanceInput>;
  _relevance?: InputMaybe<MovieListStatsOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<SortOrder>;
  movieListId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  views?: InputMaybe<SortOrder>;
};

export type MovieListStatsUpdateOneWithoutMovieListNestedInput = {
  connect?: InputMaybe<MovieListStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListStatsCreateOrConnectWithoutMovieListInput>;
  create?: InputMaybe<MovieListStatsCreateWithoutMovieListInput>;
  delete?: InputMaybe<MovieListStatsWhereInput>;
  disconnect?: InputMaybe<MovieListStatsWhereInput>;
  update?: InputMaybe<MovieListStatsUpdateToOneWithWhereWithoutMovieListInput>;
  upsert?: InputMaybe<MovieListStatsUpsertWithoutMovieListInput>;
};

export type MovieListStatsUpdateToOneWithWhereWithoutMovieListInput = {
  data: MovieListStatsUpdateWithoutMovieListInput;
  where?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsUpdateWithoutMovieListInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  views?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovieListStatsUpsertWithoutMovieListInput = {
  create: MovieListStatsCreateWithoutMovieListInput;
  update: MovieListStatsUpdateWithoutMovieListInput;
  where?: InputMaybe<MovieListStatsWhereInput>;
};

export type MovieListStatsWhereInput = {
  AND?: InputMaybe<Array<MovieListStatsWhereInput>>;
  MovieList?: InputMaybe<MovieListRelationFilter>;
  NOT?: InputMaybe<Array<MovieListStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieListStatsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likes?: InputMaybe<IntFilter>;
  movieListId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type MovieListStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListStatsWhereInput>>;
  MovieList?: InputMaybe<MovieListRelationFilter>;
  NOT?: InputMaybe<Array<MovieListStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieListStatsWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likes?: InputMaybe<IntFilter>;
  movieListId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  views?: InputMaybe<IntFilter>;
};

export type MovieListUpdateInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateManyWithWhereWithoutMovieListAuthorInput = {
  data: MovieListUpdateManyMutationInput;
  where: MovieListScalarWhereInput;
};

export type MovieListUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieListUpdateManyMutationInput;
  where: MovieListScalarWhereInput;
};

export type MovieListUpdateManyWithoutMovieListAuthorNestedInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMovieListAuthorInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMovieListAuthorInput>>;
  createMany?: InputMaybe<MovieListCreateManyMovieListAuthorInputEnvelope>;
  delete?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput>>;
  updateMany?: InputMaybe<Array<MovieListUpdateManyWithWhereWithoutMovieListAuthorInput>>;
  upsert?: InputMaybe<Array<MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput>>;
};

export type MovieListUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieListCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieListCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieListScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieListWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieListUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieListUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieListUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieListUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MovieListCreateWithoutCommentsInput>;
  update?: InputMaybe<MovieListUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<MovieListUpsertWithoutCommentsInput>;
};

export type MovieListUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieListWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieListCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieListCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieListUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieListUpsertWithoutLikedByInput>;
};

export type MovieListUpdateToOneWithWhereWithoutCommentsInput = {
  data: MovieListUpdateWithoutCommentsInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieListUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput = {
  data: MovieListUpdateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieListUpdateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutLikedByInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMovieListAuthorInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdateWithoutMoviesInput = {
  comments?: InputMaybe<MovieListCommentUpdateManyWithoutMovieListNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieListLikedByUserUpdateManyWithoutMovieListNestedInput>;
  movieListAuthor?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stats?: InputMaybe<MovieListStatsUpdateOneWithoutMovieListNestedInput>;
  tags?: InputMaybe<MovieListUpdatetagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieListUpdatetagsInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput = {
  create: MovieListCreateWithoutMovieListAuthorInput;
  update: MovieListUpdateWithoutMovieListAuthorInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieListCreateWithoutMoviesInput;
  update: MovieListUpdateWithoutMoviesInput;
  where: MovieListWhereUniqueInput;
};

export type MovieListUpsertWithoutCommentsInput = {
  create: MovieListCreateWithoutCommentsInput;
  update: MovieListUpdateWithoutCommentsInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListUpsertWithoutLikedByInput = {
  create: MovieListCreateWithoutLikedByInput;
  update: MovieListUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieListWhereInput>;
};

export type MovieListWhereInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  comments?: InputMaybe<MovieListCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  likedBy?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  stats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieListWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieListWhereInput>>;
  NOT?: InputMaybe<Array<MovieListWhereInput>>;
  OR?: InputMaybe<Array<MovieListWhereInput>>;
  comments?: InputMaybe<MovieListCommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  movieListAuthor?: InputMaybe<MovifierAppUserRelationFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  stats?: InputMaybe<MovieListStatsNullableRelationFilter>;
  tags?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieMaxAggregate = {
  __typename?: 'MovieMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieMinAggregate = {
  __typename?: 'MovieMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelevanceFieldEnum =
  | 'id';

export type MovieOrderByRelevanceInput = {
  fields: Array<MovieOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistOrderByRelationAggregateInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryOrderByRelationAggregateInput>;
  likedBy?: InputMaybe<MovieLikedByUserOrderByRelationAggregateInput>;
  movieInfo?: InputMaybe<MovieInfoOrderByWithRelationAndSearchRelevanceInput>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieStats?: InputMaybe<MovieStatsOrderByWithRelationAndSearchRelevanceInput>;
  ratedBy?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageOrderByRelationAggregateInput>;
  studios?: InputMaybe<MovieStudioOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  watchedBy?: InputMaybe<MovieWatchedByUserOrderByRelationAggregateInput>;
};

export type MovieRating = {
  __typename?: 'MovieRating';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  review?: Maybe<MovieReview>;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};


export type MovieRatingReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieRatingAvgAggregate = {
  __typename?: 'MovieRatingAvgAggregate';
  rating?: Maybe<Scalars['Float']['output']>;
};

export type MovieRatingAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type MovieRatingCountAggregate = {
  __typename?: 'MovieRatingCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieRatingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieRatingCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieRatingCreateManyMovieInputEnvelope = {
  data: Array<MovieRatingCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieRatingCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movieId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieRatingCreateManyUserInputEnvelope = {
  data: Array<MovieRatingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieRatingCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyMovieInputEnvelope>;
};

export type MovieRatingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyUserInputEnvelope>;
};

export type MovieRatingCreateNestedOneWithoutReviewInput = {
  connect?: InputMaybe<MovieRatingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieRatingCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<MovieRatingCreateWithoutReviewInput>;
};

export type MovieRatingCreateOrConnectWithoutMovieInput = {
  create: MovieRatingCreateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateOrConnectWithoutReviewInput = {
  create: MovieRatingCreateWithoutReviewInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateOrConnectWithoutUserInput = {
  create: MovieRatingCreateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateWithoutReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
};

export type MovieRatingCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie: MovieCreateNestedOneWithoutRatedByInput;
  rating: Scalars['Int']['input'];
  review?: InputMaybe<MovieReviewCreateNestedOneWithoutRatingInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieRatingGroupBy = {
  __typename?: 'MovieRatingGroupBy';
  _avg?: Maybe<MovieRatingAvgAggregate>;
  _count?: Maybe<MovieRatingCountAggregate>;
  _max?: Maybe<MovieRatingMaxAggregate>;
  _min?: Maybe<MovieRatingMinAggregate>;
  _sum?: Maybe<MovieRatingSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type MovieRatingListRelationFilter = {
  every?: InputMaybe<MovieRatingWhereInput>;
  none?: InputMaybe<MovieRatingWhereInput>;
  some?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingMaxAggregate = {
  __typename?: 'MovieRatingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieRatingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingMinAggregate = {
  __typename?: 'MovieRatingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieRatingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieId'
  | 'userId';

export type MovieRatingOrderByRelevanceInput = {
  fields: Array<MovieRatingOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieRatingOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieRatingAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieRatingCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieRatingMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieRatingMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieRatingSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieRatingOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<MovieReviewOrderByWithRelationAndSearchRelevanceInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieRatingRelationFilter = {
  is?: InputMaybe<MovieRatingWhereInput>;
  isNot?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'movieId'
  | 'rating'
  | 'updatedAt'
  | 'userId';

export type MovieRatingScalarWhereInput = {
  AND?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRatingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieRatingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieRatingSumAggregate = {
  __typename?: 'MovieRatingSumAggregate';
  rating?: Maybe<Scalars['Int']['output']>;
};

export type MovieRatingSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
};

export type MovieRatingUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieRatingUpdateManyWithWhereWithoutMovieInput = {
  data: MovieRatingUpdateManyMutationInput;
  where: MovieRatingScalarWhereInput;
};

export type MovieRatingUpdateManyWithWhereWithoutUserInput = {
  data: MovieRatingUpdateManyMutationInput;
  where: MovieRatingScalarWhereInput;
};

export type MovieRatingUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieRatingUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieRatingUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieRatingUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieRatingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieRatingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieRatingCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieRatingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieRatingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieRatingWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieRatingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieRatingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieRatingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieRatingUpdateOneRequiredWithoutReviewNestedInput = {
  connect?: InputMaybe<MovieRatingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieRatingCreateOrConnectWithoutReviewInput>;
  create?: InputMaybe<MovieRatingCreateWithoutReviewInput>;
  update?: InputMaybe<MovieRatingUpdateToOneWithWhereWithoutReviewInput>;
  upsert?: InputMaybe<MovieRatingUpsertWithoutReviewInput>;
};

export type MovieRatingUpdateToOneWithWhereWithoutReviewInput = {
  data: MovieRatingUpdateWithoutReviewInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieRatingUpdateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieRatingUpdateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateWithoutReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput>;
};

export type MovieRatingUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutRatedByNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<MovieReviewUpdateOneWithoutRatingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieRatingUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieRatingCreateWithoutMovieInput;
  update: MovieRatingUpdateWithoutMovieInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieRatingCreateWithoutUserInput;
  update: MovieRatingUpdateWithoutUserInput;
  where: MovieRatingWhereUniqueInput;
};

export type MovieRatingUpsertWithoutReviewInput = {
  create: MovieRatingCreateWithoutReviewInput;
  update: MovieRatingUpdateWithoutReviewInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};

export type MovieRatingUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieRatingWhereInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<MovieReviewNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieRatingWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieRatingWhereInput>>;
  NOT?: InputMaybe<Array<MovieRatingWhereInput>>;
  OR?: InputMaybe<Array<MovieRatingWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<MovieReviewNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieRatingUserIdMovieIdCompoundUniqueInput>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export type MovieReview = {
  __typename?: 'MovieReview';
  _count?: Maybe<MovieReviewCount>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  likedBy: Array<MovieReviewLikedByUser>;
  rating: MovieRating;
  ratingId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type MovieReviewLikedByArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewCount = {
  __typename?: 'MovieReviewCount';
  likedBy: Scalars['Int']['output'];
};


export type MovieReviewCountLikedByArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewCountAggregate = {
  __typename?: 'MovieReviewCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ratingId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieReviewCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput>;
  rating: MovieRatingCreateNestedOneWithoutReviewInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateManyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  ratingId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateNestedOneWithoutLikedByInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikedByInput>;
};

export type MovieReviewCreateNestedOneWithoutRatingInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovieReviewCreateWithoutRatingInput>;
};

export type MovieReviewCreateOrConnectWithoutLikedByInput = {
  create: MovieReviewCreateWithoutLikedByInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutRatingInput = {
  create: MovieReviewCreateWithoutRatingInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateWithoutLikedByInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: MovieRatingCreateNestedOneWithoutReviewInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewCreateWithoutRatingInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieReviewGroupBy = {
  __typename?: 'MovieReviewGroupBy';
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  ratingId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieReviewLikedByUser = {
  __typename?: 'MovieReviewLikedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movieReview: MovieReview;
  movieReviewId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieReviewLikedByUserCountAggregate = {
  __typename?: 'MovieReviewLikedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieReviewId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieReviewLikedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikedByInput;
  user: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope = {
  data: Array<MovieReviewLikedByUserCreateManyMovieReviewInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieReviewLikedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReviewId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieReviewLikedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutMovieReviewInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope>;
};

export type MovieReviewLikedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyUserInputEnvelope>;
};

export type MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput = {
  create: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserCreateOrConnectWithoutUserInput = {
  create: MovieReviewLikedByUserCreateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserCreateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikedByInput;
};

export type MovieReviewLikedByUserGroupBy = {
  __typename?: 'MovieReviewLikedByUserGroupBy';
  _count?: Maybe<MovieReviewLikedByUserCountAggregate>;
  _max?: Maybe<MovieReviewLikedByUserMaxAggregate>;
  _min?: Maybe<MovieReviewLikedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieReviewId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieReviewLikedByUserListRelationFilter = {
  every?: InputMaybe<MovieReviewLikedByUserWhereInput>;
  none?: InputMaybe<MovieReviewLikedByUserWhereInput>;
  some?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};

export type MovieReviewLikedByUserMaxAggregate = {
  __typename?: 'MovieReviewLikedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieReviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieReviewLikedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserMinAggregate = {
  __typename?: 'MovieReviewLikedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieReviewId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieReviewLikedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByRelevanceFieldEnum =
  | 'movieReviewId'
  | 'userId';

export type MovieReviewLikedByUserOrderByRelevanceInput = {
  fields: Array<MovieReviewLikedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieReviewLikedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieReviewLikedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewLikedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewLikedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieReviewId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieReviewLikedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieReview?: InputMaybe<MovieReviewOrderByWithRelationAndSearchRelevanceInput>;
  movieReviewId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieReviewId'
  | 'userId';

export type MovieReviewLikedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieReviewLikedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieReviewId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieReviewLikedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where: MovieReviewLikedByUserScalarWhereInput;
};

export type MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where: MovieReviewLikedByUserScalarWhereInput;
};

export type MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutMovieReviewInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope>;
  delete?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput>>;
  updateMany?: InputMaybe<Array<MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput>>;
  upsert?: InputMaybe<Array<MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput>>;
};

export type MovieReviewLikedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieReviewLikedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieReviewLikedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieReviewLikedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieReviewLikedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieReviewLikedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput = {
  data: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewLikedByUserUpdateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpdateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikedByNestedInput>;
};

export type MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput = {
  create: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  update: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewLikedByUserCreateWithoutUserInput;
  update: MovieReviewLikedByUserUpdateWithoutUserInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};

export type MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput = {
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieReviewLikedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieReviewLikedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewLikedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  movieReviewId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieReviewId?: InputMaybe<MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput>;
};

export type MovieReviewMaxAggregate = {
  __typename?: 'MovieReviewMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ratingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieReviewMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewMinAggregate = {
  __typename?: 'MovieReviewMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ratingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieReviewMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewNullableRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewOrderByRelevanceFieldEnum =
  | 'content'
  | 'id'
  | 'ratingId';

export type MovieReviewOrderByRelevanceInput = {
  fields: Array<MovieReviewOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieReviewOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewMinOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieReviewOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedBy?: InputMaybe<MovieReviewLikedByUserOrderByRelationAggregateInput>;
  rating?: InputMaybe<MovieRatingOrderByWithRelationAndSearchRelevanceInput>;
  ratingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieReviewRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewScalarFieldEnum =
  | 'content'
  | 'createdAt'
  | 'id'
  | 'ratingId'
  | 'updatedAt';

export type MovieReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieReviewScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  ratingId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieReviewUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput>;
  rating?: InputMaybe<MovieRatingUpdateOneRequiredWithoutReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieReviewUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutLikedByInput>;
};

export type MovieReviewUpdateOneWithoutRatingNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutRatingInput>;
  create?: InputMaybe<MovieReviewCreateWithoutRatingInput>;
  delete?: InputMaybe<MovieReviewWhereInput>;
  disconnect?: InputMaybe<MovieReviewWhereInput>;
  update?: InputMaybe<MovieReviewUpdateToOneWithWhereWithoutRatingInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutRatingInput>;
};

export type MovieReviewUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieReviewUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpdateToOneWithWhereWithoutRatingInput = {
  data: MovieReviewUpdateWithoutRatingInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpdateWithoutLikedByInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<MovieRatingUpdateOneRequiredWithoutReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateWithoutRatingInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedBy?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewUpsertWithoutLikedByInput = {
  create: MovieReviewCreateWithoutLikedByInput;
  update: MovieReviewUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewUpsertWithoutRatingInput = {
  create: MovieReviewCreateWithoutRatingInput;
  update: MovieReviewUpdateWithoutRatingInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewWhereInput = {
  AND?: InputMaybe<Array<MovieReviewWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  likedBy?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  rating?: InputMaybe<MovieRatingRelationFilter>;
  ratingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieReviewWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieReviewWhereInput>>;
  NOT?: InputMaybe<Array<MovieReviewWhereInput>>;
  OR?: InputMaybe<Array<MovieReviewWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedBy?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  rating?: InputMaybe<MovieRatingRelationFilter>;
  ratingId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'updatedAt';

export type MovieScalarWhereInput = {
  AND?: InputMaybe<Array<MovieScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieSpokenLanguage = {
  __typename?: 'MovieSpokenLanguage';
  _count?: Maybe<MovieSpokenLanguageCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  iso_639_1: Scalars['String']['output'];
  movies: Array<Movie>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type MovieSpokenLanguageMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieSpokenLanguageCount = {
  __typename?: 'MovieSpokenLanguageCount';
  movies: Scalars['Int']['output'];
};


export type MovieSpokenLanguageCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieSpokenLanguageCountAggregate = {
  __typename?: 'MovieSpokenLanguageCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  iso_639_1: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MovieSpokenLanguageCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iso_639_1?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  iso_639_1: Scalars['String']['input'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutSpokenLanguagesInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieSpokenLanguageCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  iso_639_1: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieSpokenLanguageCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieSpokenLanguageCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieSpokenLanguageCreateWithoutMoviesInput>>;
};

export type MovieSpokenLanguageCreateOrConnectWithoutMoviesInput = {
  create: MovieSpokenLanguageCreateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  iso_639_1: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieSpokenLanguageGroupBy = {
  __typename?: 'MovieSpokenLanguageGroupBy';
  _count?: Maybe<MovieSpokenLanguageCountAggregate>;
  _max?: Maybe<MovieSpokenLanguageMaxAggregate>;
  _min?: Maybe<MovieSpokenLanguageMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  iso_639_1: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieSpokenLanguageListRelationFilter = {
  every?: InputMaybe<MovieSpokenLanguageWhereInput>;
  none?: InputMaybe<MovieSpokenLanguageWhereInput>;
  some?: InputMaybe<MovieSpokenLanguageWhereInput>;
};

export type MovieSpokenLanguageMaxAggregate = {
  __typename?: 'MovieSpokenLanguageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  iso_639_1?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieSpokenLanguageMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iso_639_1?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageMinAggregate = {
  __typename?: 'MovieSpokenLanguageMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  iso_639_1?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type MovieSpokenLanguageMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iso_639_1?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageOrderByRelevanceFieldEnum =
  | 'iso_639_1'
  | 'name';

export type MovieSpokenLanguageOrderByRelevanceInput = {
  fields: Array<MovieSpokenLanguageOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieSpokenLanguageOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieSpokenLanguageCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieSpokenLanguageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieSpokenLanguageMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  iso_639_1?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieSpokenLanguageOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  iso_639_1?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieSpokenLanguageScalarFieldEnum =
  | 'createdAt'
  | 'iso_639_1'
  | 'name'
  | 'updatedAt';

export type MovieSpokenLanguageScalarWhereInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iso_639_1?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieSpokenLanguageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  iso_639_1?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieSpokenLanguageUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iso_639_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutSpokenLanguagesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieSpokenLanguageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iso_639_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieSpokenLanguageUpdateManyMutationInput;
  where: MovieSpokenLanguageScalarWhereInput;
};

export type MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieSpokenLanguageCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieSpokenLanguageCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieSpokenLanguageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieSpokenLanguageWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieSpokenLanguageUpdateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iso_639_1?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieSpokenLanguageCreateWithoutMoviesInput;
  update: MovieSpokenLanguageUpdateWithoutMoviesInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};

export type MovieSpokenLanguageWhereInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iso_639_1?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieSpokenLanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  NOT?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  OR?: InputMaybe<Array<MovieSpokenLanguageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iso_639_1?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStats = {
  __typename?: 'MovieStats';
  avgRating: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  movieId: Scalars['String']['output'];
  overallPlaceInTop: Scalars['Int']['output'];
  timesWatchedCount: Scalars['Int']['output'];
  totalLikesCount: Scalars['Int']['output'];
  totalRatingsCount: Scalars['Int']['output'];
};

export type MovieStatsCreateNestedOneWithoutMovieInput = {
  connect?: InputMaybe<MovieStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieStatsCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieStatsCreateWithoutMovieInput>;
};

export type MovieStatsCreateOrConnectWithoutMovieInput = {
  create: MovieStatsCreateWithoutMovieInput;
  where: MovieStatsWhereUniqueInput;
};

export type MovieStatsCreateWithoutMovieInput = {
  avgRating: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  overallPlaceInTop: Scalars['Int']['input'];
  timesWatchedCount: Scalars['Int']['input'];
  totalLikesCount: Scalars['Int']['input'];
  totalRatingsCount: Scalars['Int']['input'];
};

export type MovieStatsNullableRelationFilter = {
  is?: InputMaybe<MovieStatsWhereInput>;
  isNot?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsOrderByRelevanceFieldEnum =
  | 'id'
  | 'movieId';

export type MovieStatsOrderByRelevanceInput = {
  fields: Array<MovieStatsOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieStatsOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieStatsOrderByRelevanceInput>;
  avgRating?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  overallPlaceInTop?: InputMaybe<SortOrder>;
  timesWatchedCount?: InputMaybe<SortOrder>;
  totalLikesCount?: InputMaybe<SortOrder>;
  totalRatingsCount?: InputMaybe<SortOrder>;
};

export type MovieStatsUpdateOneWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieStatsCreateOrConnectWithoutMovieInput>;
  create?: InputMaybe<MovieStatsCreateWithoutMovieInput>;
  delete?: InputMaybe<MovieStatsWhereInput>;
  disconnect?: InputMaybe<MovieStatsWhereInput>;
  update?: InputMaybe<MovieStatsUpdateToOneWithWhereWithoutMovieInput>;
  upsert?: InputMaybe<MovieStatsUpsertWithoutMovieInput>;
};

export type MovieStatsUpdateToOneWithWhereWithoutMovieInput = {
  data: MovieStatsUpdateWithoutMovieInput;
  where?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsUpdateWithoutMovieInput = {
  avgRating?: InputMaybe<FloatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  overallPlaceInTop?: InputMaybe<IntFieldUpdateOperationsInput>;
  timesWatchedCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalLikesCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalRatingsCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type MovieStatsUpsertWithoutMovieInput = {
  create: MovieStatsCreateWithoutMovieInput;
  update: MovieStatsUpdateWithoutMovieInput;
  where?: InputMaybe<MovieStatsWhereInput>;
};

export type MovieStatsWhereInput = {
  AND?: InputMaybe<Array<MovieStatsWhereInput>>;
  NOT?: InputMaybe<Array<MovieStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieStatsWhereInput>>;
  avgRating?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  overallPlaceInTop?: InputMaybe<IntFilter>;
  timesWatchedCount?: InputMaybe<IntFilter>;
  totalLikesCount?: InputMaybe<IntFilter>;
  totalRatingsCount?: InputMaybe<IntFilter>;
};

export type MovieStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieStatsWhereInput>>;
  NOT?: InputMaybe<Array<MovieStatsWhereInput>>;
  OR?: InputMaybe<Array<MovieStatsWhereInput>>;
  avgRating?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<Scalars['String']['input']>;
  overallPlaceInTop?: InputMaybe<IntFilter>;
  timesWatchedCount?: InputMaybe<IntFilter>;
  totalLikesCount?: InputMaybe<IntFilter>;
  totalRatingsCount?: InputMaybe<IntFilter>;
};

export type MovieStudio = {
  __typename?: 'MovieStudio';
  _count?: Maybe<MovieStudioCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MovieStudioCount = {
  __typename?: 'MovieStudioCount';
  movies: Scalars['Int']['output'];
};


export type MovieStudioCountMoviesArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieStudioCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieStudioCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieStudioCreateWithoutMoviesInput>>;
};

export type MovieStudioCreateOrConnectWithoutMoviesInput = {
  create: MovieStudioCreateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type MovieStudioListRelationFilter = {
  every?: InputMaybe<MovieStudioWhereInput>;
  none?: InputMaybe<MovieStudioWhereInput>;
  some?: InputMaybe<MovieStudioWhereInput>;
};

export type MovieStudioOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieStudioOrderByRelevanceFieldEnum =
  | 'id'
  | 'name';

export type MovieStudioOrderByRelevanceInput = {
  fields: Array<MovieStudioOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieStudioOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieStudioOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieStudioScalarFieldEnum =
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt';

export type MovieStudioScalarWhereInput = {
  AND?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStudioUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieStudioUpdateManyWithWhereWithoutMoviesInput = {
  data: MovieStudioUpdateManyMutationInput;
  where: MovieStudioScalarWhereInput;
};

export type MovieStudioUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieStudioCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<MovieStudioCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieStudioScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieStudioWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieStudioUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<MovieStudioUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<MovieStudioUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type MovieStudioUpdateWithWhereUniqueWithoutMoviesInput = {
  data: MovieStudioUpdateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieStudioUpsertWithWhereUniqueWithoutMoviesInput = {
  create: MovieStudioCreateWithoutMoviesInput;
  update: MovieStudioUpdateWithoutMoviesInput;
  where: MovieStudioWhereUniqueInput;
};

export type MovieStudioWhereInput = {
  AND?: InputMaybe<Array<MovieStudioWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieStudioWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieStudioWhereInput>>;
  NOT?: InputMaybe<Array<MovieStudioWhereInput>>;
  OR?: InputMaybe<Array<MovieStudioWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutGenresInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutMovieListsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutSpokenLanguagesInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutGenresNestedInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutGenresInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutGenresInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutGenresInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutGenresInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutGenresInput>>;
};

export type MovieUpdateManyWithoutMovieListsNestedInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutMovieListsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutMovieListsInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutMovieListsInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutMovieListsInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutMovieListsInput>>;
};

export type MovieUpdateManyWithoutSpokenLanguagesNestedInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutSpokenLanguagesInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutSpokenLanguagesInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutSpokenLanguagesInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput>>;
};

export type MovieUpdateOneRequiredWithoutCrewMembersNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutCrewMembersInput>;
  create?: InputMaybe<MovieCreateWithoutCrewMembersInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutCrewMembersInput>;
  upsert?: InputMaybe<MovieUpsertWithoutCrewMembersInput>;
};

export type MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutInWatchlistByUsersInput>;
  create?: InputMaybe<MovieCreateWithoutInWatchlistByUsersInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput>;
  upsert?: InputMaybe<MovieUpsertWithoutInWatchlistByUsersInput>;
};

export type MovieUpdateOneRequiredWithoutLikedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikedByInput>;
  create?: InputMaybe<MovieCreateWithoutLikedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutLikedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutLikedByInput>;
};

export type MovieUpdateOneRequiredWithoutRatedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatedByInput>;
  create?: InputMaybe<MovieCreateWithoutRatedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutRatedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutRatedByInput>;
};

export type MovieUpdateOneRequiredWithoutWatchedByNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchedByInput>;
  create?: InputMaybe<MovieCreateWithoutWatchedByInput>;
  update?: InputMaybe<MovieUpdateToOneWithWhereWithoutWatchedByInput>;
  upsert?: InputMaybe<MovieUpsertWithoutWatchedByInput>;
};

export type MovieUpdateToOneWithWhereWithoutCrewMembersInput = {
  data: MovieUpdateWithoutCrewMembersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput = {
  data: MovieUpdateWithoutInWatchlistByUsersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutLikedByInput = {
  data: MovieUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutRatedByInput = {
  data: MovieUpdateWithoutRatedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateToOneWithWhereWithoutWatchedByInput = {
  data: MovieUpdateWithoutWatchedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
  data: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutMovieListsInput = {
  data: MovieUpdateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput = {
  data: MovieUpdateWithoutSpokenLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutCrewMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutGenresInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutInWatchlistByUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutLikedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutMovieListsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutRatedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutSpokenLanguagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchedBy?: InputMaybe<MovieWatchedByUserUpdateManyWithoutMovieNestedInput>;
};

export type MovieUpdateWithoutWatchedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistUpdateManyWithoutMovieNestedInput>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput>;
  likedBy?: InputMaybe<MovieLikedByUserUpdateManyWithoutMovieNestedInput>;
  movieInfo?: InputMaybe<MovieInfoUpdateOneWithoutMovieNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMoviesNestedInput>;
  movieStats?: InputMaybe<MovieStatsUpdateOneWithoutMovieNestedInput>;
  ratedBy?: InputMaybe<MovieRatingUpdateManyWithoutMovieNestedInput>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput>;
  studios?: InputMaybe<MovieStudioUpdateManyWithoutMoviesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  update: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutMovieListsInput = {
  create: MovieCreateWithoutMovieListsInput;
  update: MovieUpdateWithoutMovieListsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput = {
  create: MovieCreateWithoutSpokenLanguagesInput;
  update: MovieUpdateWithoutSpokenLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutCrewMembersInput = {
  create: MovieCreateWithoutCrewMembersInput;
  update: MovieUpdateWithoutCrewMembersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutInWatchlistByUsersInput = {
  create: MovieCreateWithoutInWatchlistByUsersInput;
  update: MovieUpdateWithoutInWatchlistByUsersInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutLikedByInput = {
  create: MovieCreateWithoutLikedByInput;
  update: MovieUpdateWithoutLikedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutRatedByInput = {
  create: MovieCreateWithoutRatedByInput;
  update: MovieUpdateWithoutRatedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieUpsertWithoutWatchedByInput = {
  create: MovieCreateWithoutWatchedByInput;
  update: MovieUpdateWithoutWatchedByInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MovieWatchedByUser = {
  __typename?: 'MovieWatchedByUser';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type MovieWatchedByUserCountAggregate = {
  __typename?: 'MovieWatchedByUserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type MovieWatchedByUserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutWatchedByInput;
  user: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
};

export type MovieWatchedByUserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyMovieInputEnvelope = {
  data: Array<MovieWatchedByUserCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieWatchedByUserCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type MovieWatchedByUserCreateManyUserInputEnvelope = {
  data: Array<MovieWatchedByUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MovieWatchedByUserCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyMovieInputEnvelope>;
};

export type MovieWatchedByUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyUserInputEnvelope>;
};

export type MovieWatchedByUserCreateOrConnectWithoutMovieInput = {
  create: MovieWatchedByUserCreateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserCreateOrConnectWithoutUserInput = {
  create: MovieWatchedByUserCreateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
};

export type MovieWatchedByUserCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutWatchedByInput;
};

export type MovieWatchedByUserGroupBy = {
  __typename?: 'MovieWatchedByUserGroupBy';
  _count?: Maybe<MovieWatchedByUserCountAggregate>;
  _max?: Maybe<MovieWatchedByUserMaxAggregate>;
  _min?: Maybe<MovieWatchedByUserMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type MovieWatchedByUserListRelationFilter = {
  every?: InputMaybe<MovieWatchedByUserWhereInput>;
  none?: InputMaybe<MovieWatchedByUserWhereInput>;
  some?: InputMaybe<MovieWatchedByUserWhereInput>;
};

export type MovieWatchedByUserMaxAggregate = {
  __typename?: 'MovieWatchedByUserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieWatchedByUserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserMinAggregate = {
  __typename?: 'MovieWatchedByUserMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MovieWatchedByUserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type MovieWatchedByUserOrderByRelevanceInput = {
  fields: Array<MovieWatchedByUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovieWatchedByUserOrderByWithAggregationInput = {
  _count?: InputMaybe<MovieWatchedByUserCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieWatchedByUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieWatchedByUserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MovieWatchedByUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieWatchedByUserScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type MovieWatchedByUserScalarWhereInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieWatchedByUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MovieWatchedByUserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutWatchedByNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput>;
};

export type MovieWatchedByUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where: MovieWatchedByUserScalarWhereInput;
};

export type MovieWatchedByUserUpdateManyWithWhereWithoutUserInput = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where: MovieWatchedByUserScalarWhereInput;
};

export type MovieWatchedByUserUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutMovieInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type MovieWatchedByUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieWatchedByUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<MovieWatchedByUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<MovieWatchedByUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieWatchedByUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWatchedByUserWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<MovieWatchedByUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieWatchedByUserUpdateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieWatchedByUserUpdateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput>;
};

export type MovieWatchedByUserUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutWatchedByNestedInput>;
};

export type MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieWatchedByUserCreateWithoutMovieInput;
  update: MovieWatchedByUserUpdateWithoutMovieInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieWatchedByUserCreateWithoutUserInput;
  update: MovieWatchedByUserUpdateWithoutUserInput;
  where: MovieWatchedByUserWhereUniqueInput;
};

export type MovieWatchedByUserUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type MovieWatchedByUserWhereInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MovieWatchedByUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  NOT?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  OR?: InputMaybe<Array<MovieWatchedByUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<MovieWatchedByUserUserIdMovieIdCompoundUniqueInput>;
};

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  likedBy?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratedBy?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchedBy?: InputMaybe<MovieWatchedByUserListRelationFilter>;
};

export type MovieWhereUniqueInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  crewMembers?: InputMaybe<MovieCrewMemberOnMovieListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  inWatchlistByUsers?: InputMaybe<UserMovieWatchlistListRelationFilter>;
  keywordCategories?: InputMaybe<MovieKeywordCategoryListRelationFilter>;
  likedBy?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieInfo?: InputMaybe<MovieInfoNullableRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieStats?: InputMaybe<MovieStatsNullableRelationFilter>;
  ratedBy?: InputMaybe<MovieRatingListRelationFilter>;
  spokenLanguages?: InputMaybe<MovieSpokenLanguageListRelationFilter>;
  studios?: InputMaybe<MovieStudioListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchedBy?: InputMaybe<MovieWatchedByUserListRelationFilter>;
};

export type MoviefireAppUserRole =
  | 'ADMIN'
  | 'USER';

export type MoviesSearchCriteriaInput = {
  decade?: InputMaybe<Scalars['Float']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  studio?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type MovifierAppUser = {
  __typename?: 'MovifierAppUser';
  _count?: Maybe<MovifierAppUserCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: MoviefireAppUserRole;
  updatedAt: Scalars['DateTimeISO']['output'];
  username: Scalars['String']['output'];
};

export type MovifierAppUserCount = {
  __typename?: 'MovifierAppUserCount';
  MovieListLikedByUser: Scalars['Int']['output'];
  likedMovieReviews: Scalars['Int']['output'];
  likedMovies: Scalars['Int']['output'];
  movieLists: Scalars['Int']['output'];
  movieListsComments: Scalars['Int']['output'];
  ratedMovies: Scalars['Int']['output'];
  watchedMovies: Scalars['Int']['output'];
  watchlist: Scalars['Int']['output'];
};


export type MovifierAppUserCountMovieListLikedByUserArgs = {
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MovifierAppUserCountLikedMovieReviewsArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MovifierAppUserCountLikedMoviesArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MovifierAppUserCountMovieListsArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MovifierAppUserCountMovieListsCommentsArgs = {
  where?: InputMaybe<MovieListCommentWhereInput>;
};


export type MovifierAppUserCountRatedMoviesArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MovifierAppUserCountWatchedMoviesArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MovifierAppUserCountWatchlistArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type MovifierAppUserCreateInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMovieReviewsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutLikedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListLikedByUserInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsCommentsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutMovieListsInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsInput>;
};

export type MovifierAppUserCreateNestedOneWithoutRatedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchedMoviesInput>;
};

export type MovifierAppUserCreateNestedOneWithoutWatchlistInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchlistInput>;
};

export type MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput = {
  create: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutLikedMoviesInput = {
  create: MovifierAppUserCreateWithoutLikedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput = {
  create: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput = {
  create: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutMovieListsInput = {
  create: MovifierAppUserCreateWithoutMovieListsInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutRatedMoviesInput = {
  create: MovifierAppUserCreateWithoutRatedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput = {
  create: MovifierAppUserCreateWithoutWatchedMoviesInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateOrConnectWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  where: MovifierAppUserWhereUniqueInput;
};

export type MovifierAppUserCreateWithoutLikedMovieReviewsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutLikedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListLikedByUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListsCommentsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutMovieListsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutRatedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutWatchedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchlist?: InputMaybe<UserMovieWatchlistCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserCreateWithoutWatchlistInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikedByUserCreateNestedManyWithoutUserInput>;
  movieLists?: InputMaybe<MovieListCreateNestedManyWithoutMovieListAuthorInput>;
  movieListsComments?: InputMaybe<MovieListCommentCreateNestedManyWithoutUserInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  ratedMovies?: InputMaybe<MovieRatingCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<MoviefireAppUserRole>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
  watchedMovies?: InputMaybe<MovieWatchedByUserCreateNestedManyWithoutUserInput>;
};

export type MovifierAppUserOrderByRelevanceFieldEnum =
  | 'email'
  | 'id'
  | 'name'
  | 'password'
  | 'username';

export type MovifierAppUserOrderByRelevanceInput = {
  fields: Array<MovifierAppUserOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MovifierAppUserOrderByWithRelationAndSearchRelevanceInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<MovifierAppUserOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserOrderByRelationAggregateInput>;
  likedMovies?: InputMaybe<MovieLikedByUserOrderByRelationAggregateInput>;
  movieLists?: InputMaybe<MovieListOrderByRelationAggregateInput>;
  movieListsComments?: InputMaybe<MovieListCommentOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  ratedMovies?: InputMaybe<MovieRatingOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  watchedMovies?: InputMaybe<MovieWatchedByUserOrderByRelationAggregateInput>;
  watchlist?: InputMaybe<UserMovieWatchlistOrderByRelationAggregateInput>;
};

export type MovifierAppUserRelationFilter = {
  is?: InputMaybe<MovifierAppUserWhereInput>;
  isNot?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserScalarFieldEnum =
  | 'createdAt'
  | 'email'
  | 'id'
  | 'name'
  | 'password'
  | 'role'
  | 'updatedAt'
  | 'username';

export type MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMovieReviewsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutLikedMovieReviewsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutLikedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutLikedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListLikedByUserInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListLikedByUserInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsCommentsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListsCommentsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutMovieListsInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutMovieListsInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutMovieListsInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutRatedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutRatedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutRatedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchedMoviesInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutWatchedMoviesInput>;
};

export type MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput = {
  connect?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovifierAppUserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<MovifierAppUserCreateWithoutWatchlistInput>;
  update?: InputMaybe<MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput>;
  upsert?: InputMaybe<MovifierAppUserUpsertWithoutWatchlistInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput = {
  data: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput = {
  data: MovifierAppUserUpdateWithoutLikedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput = {
  data: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput = {
  data: MovifierAppUserUpdateWithoutMovieListsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput = {
  data: MovifierAppUserUpdateWithoutRatedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput = {
  data: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput = {
  data: MovifierAppUserUpdateWithoutWatchlistInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpdateWithoutLikedMovieReviewsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutLikedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListLikedByUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListsCommentsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutMovieListsInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutRatedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutWatchedMoviesInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<UserMovieWatchlistUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpdateWithoutWatchlistInput = {
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikedByUserUpdateManyWithoutUserNestedInput>;
  movieLists?: InputMaybe<MovieListUpdateManyWithoutMovieListAuthorNestedInput>;
  movieListsComments?: InputMaybe<MovieListCommentUpdateManyWithoutUserNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  ratedMovies?: InputMaybe<MovieRatingUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchedMovies?: InputMaybe<MovieWatchedByUserUpdateManyWithoutUserNestedInput>;
};

export type MovifierAppUserUpsertWithoutLikedMovieReviewsInput = {
  create: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  update: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutLikedMoviesInput = {
  create: MovifierAppUserCreateWithoutLikedMoviesInput;
  update: MovifierAppUserUpdateWithoutLikedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListLikedByUserInput = {
  create: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  update: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListsCommentsInput = {
  create: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  update: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutMovieListsInput = {
  create: MovifierAppUserCreateWithoutMovieListsInput;
  update: MovifierAppUserUpdateWithoutMovieListsInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutRatedMoviesInput = {
  create: MovifierAppUserCreateWithoutRatedMoviesInput;
  update: MovifierAppUserUpdateWithoutRatedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutWatchedMoviesInput = {
  create: MovifierAppUserCreateWithoutWatchedMoviesInput;
  update: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserUpsertWithoutWatchlistInput = {
  create: MovifierAppUserCreateWithoutWatchlistInput;
  update: MovifierAppUserUpdateWithoutWatchlistInput;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};

export type MovifierAppUserWhereInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  ratedMovies?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  watchedMovies?: InputMaybe<MovieWatchedByUserListRelationFilter>;
  watchlist?: InputMaybe<UserMovieWatchlistListRelationFilter>;
};

export type MovifierAppUserWhereUniqueInput = {
  AND?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  MovieListLikedByUser?: InputMaybe<MovieListLikedByUserListRelationFilter>;
  NOT?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  OR?: InputMaybe<Array<MovifierAppUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  likedMovieReviews?: InputMaybe<MovieReviewLikedByUserListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikedByUserListRelationFilter>;
  movieLists?: InputMaybe<MovieListListRelationFilter>;
  movieListsComments?: InputMaybe<MovieListCommentListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  ratedMovies?: InputMaybe<MovieRatingListRelationFilter>;
  role?: InputMaybe<EnumMoviefireAppUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
  watchedMovies?: InputMaybe<MovieWatchedByUserListRelationFilter>;
  watchlist?: InputMaybe<UserMovieWatchlistListRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyGenre: AffectedRowsOutput;
  createManyMovie: AffectedRowsOutput;
  createManyMovieCrewMember: AffectedRowsOutput;
  createManyMovieCrewMemberType: AffectedRowsOutput;
  createManyMovieLikedByUser: AffectedRowsOutput;
  createManyMovieList: AffectedRowsOutput;
  createManyMovieListLikedByUser: AffectedRowsOutput;
  createManyMovieRating: AffectedRowsOutput;
  createManyMovieReview: AffectedRowsOutput;
  createManyMovieReviewLikedByUser: AffectedRowsOutput;
  createManyMovieSpokenLanguage: AffectedRowsOutput;
  createManyMovieWatchedByUser: AffectedRowsOutput;
  createManyUserMovieWatchlist: AffectedRowsOutput;
  createOneGenre: Genre;
  createOneMovie: Movie;
  createOneMovieCrewMember: MovieCrewMember;
  createOneMovieCrewMemberType: MovieCrewMemberType;
  createOneMovieLikedByUser: MovieLikedByUser;
  createOneMovieList: MovieList;
  createOneMovieListLikedByUser: MovieListLikedByUser;
  createOneMovieRating: MovieRating;
  createOneMovieReview: MovieReview;
  createOneMovieReviewLikedByUser: MovieReviewLikedByUser;
  createOneMovieSpokenLanguage: MovieSpokenLanguage;
  createOneMovieWatchedByUser: MovieWatchedByUser;
  createOneMovifierAppUser: UserRegisterOutput;
  createOneUserMovieWatchlist: UserMovieWatchlist;
  deleteManyGenre: AffectedRowsOutput;
  deleteManyMovie: AffectedRowsOutput;
  deleteManyMovieCrewMember: AffectedRowsOutput;
  deleteManyMovieCrewMemberType: AffectedRowsOutput;
  deleteManyMovieLikedByUser: AffectedRowsOutput;
  deleteManyMovieList: AffectedRowsOutput;
  deleteManyMovieListLikedByUser: AffectedRowsOutput;
  deleteManyMovieRating: AffectedRowsOutput;
  deleteManyMovieReview: AffectedRowsOutput;
  deleteManyMovieReviewLikedByUser: AffectedRowsOutput;
  deleteManyMovieSpokenLanguage: AffectedRowsOutput;
  deleteManyMovieWatchedByUser: AffectedRowsOutput;
  deleteManyUserMovieWatchlist: AffectedRowsOutput;
  deleteOneGenre?: Maybe<Genre>;
  deleteOneMovie?: Maybe<Movie>;
  deleteOneMovieCrewMember?: Maybe<MovieCrewMember>;
  deleteOneMovieCrewMemberType?: Maybe<MovieCrewMemberType>;
  deleteOneMovieLikedByUser?: Maybe<MovieLikedByUser>;
  deleteOneMovieList?: Maybe<MovieList>;
  deleteOneMovieListLikedByUser?: Maybe<MovieListLikedByUser>;
  deleteOneMovieRating?: Maybe<MovieRating>;
  deleteOneMovieReview?: Maybe<MovieReview>;
  deleteOneMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  deleteOneMovieSpokenLanguage?: Maybe<MovieSpokenLanguage>;
  deleteOneMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  deleteOneUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  fetchMovieFromTmdb?: Maybe<Movie>;
  loginUser: UserLoginOutput;
  updateManyGenre: AffectedRowsOutput;
  updateManyMovie: AffectedRowsOutput;
  updateManyMovieCrewMember: AffectedRowsOutput;
  updateManyMovieCrewMemberType: AffectedRowsOutput;
  updateManyMovieLikedByUser: AffectedRowsOutput;
  updateManyMovieList: AffectedRowsOutput;
  updateManyMovieListLikedByUser: AffectedRowsOutput;
  updateManyMovieRating: AffectedRowsOutput;
  updateManyMovieReview: AffectedRowsOutput;
  updateManyMovieReviewLikedByUser: AffectedRowsOutput;
  updateManyMovieSpokenLanguage: AffectedRowsOutput;
  updateManyMovieWatchedByUser: AffectedRowsOutput;
  updateManyUserMovieWatchlist: AffectedRowsOutput;
  updateOneGenre?: Maybe<Genre>;
  updateOneMovie?: Maybe<Movie>;
  updateOneMovieCrewMember?: Maybe<MovieCrewMember>;
  updateOneMovieCrewMemberType?: Maybe<MovieCrewMemberType>;
  updateOneMovieLikedByUser?: Maybe<MovieLikedByUser>;
  updateOneMovieList?: Maybe<MovieList>;
  updateOneMovieListLikedByUser?: Maybe<MovieListLikedByUser>;
  updateOneMovieRating?: Maybe<MovieRating>;
  updateOneMovieReview?: Maybe<MovieReview>;
  updateOneMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  updateOneMovieSpokenLanguage?: Maybe<MovieSpokenLanguage>;
  updateOneMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  updateOneUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  upsertOneGenre: Genre;
  upsertOneMovie: Movie;
  upsertOneMovieCrewMember: MovieCrewMember;
  upsertOneMovieCrewMemberType: MovieCrewMemberType;
  upsertOneMovieLikedByUser: MovieLikedByUser;
  upsertOneMovieList: MovieList;
  upsertOneMovieListLikedByUser: MovieListLikedByUser;
  upsertOneMovieRating: MovieRating;
  upsertOneMovieReview: MovieReview;
  upsertOneMovieReviewLikedByUser: MovieReviewLikedByUser;
  upsertOneMovieSpokenLanguage: MovieSpokenLanguage;
  upsertOneMovieWatchedByUser: MovieWatchedByUser;
  upsertOneUserMovieWatchlist: UserMovieWatchlist;
};


export type MutationCreateManyGenreArgs = {
  data: Array<GenreCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieArgs = {
  data: Array<MovieCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieCrewMemberArgs = {
  data: Array<MovieCrewMemberCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieCrewMemberTypeArgs = {
  data: Array<MovieCrewMemberTypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieLikedByUserArgs = {
  data: Array<MovieLikedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieListArgs = {
  data: Array<MovieListCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieListLikedByUserArgs = {
  data: Array<MovieListLikedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieRatingArgs = {
  data: Array<MovieRatingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieReviewArgs = {
  data: Array<MovieReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieReviewLikedByUserArgs = {
  data: Array<MovieReviewLikedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieSpokenLanguageArgs = {
  data: Array<MovieSpokenLanguageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyMovieWatchedByUserArgs = {
  data: Array<MovieWatchedByUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserMovieWatchlistArgs = {
  data: Array<UserMovieWatchlistCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneGenreArgs = {
  data: GenreCreateInput;
};


export type MutationCreateOneMovieArgs = {
  data: MovieCreateInput;
};


export type MutationCreateOneMovieCrewMemberArgs = {
  data: MovieCrewMemberCreateInput;
};


export type MutationCreateOneMovieCrewMemberTypeArgs = {
  data: MovieCrewMemberTypeCreateInput;
};


export type MutationCreateOneMovieLikedByUserArgs = {
  data: MovieLikedByUserCreateInput;
};


export type MutationCreateOneMovieListArgs = {
  data: MovieListCreateInput;
};


export type MutationCreateOneMovieListLikedByUserArgs = {
  data: MovieListLikedByUserCreateInput;
};


export type MutationCreateOneMovieRatingArgs = {
  data: MovieRatingCreateInput;
};


export type MutationCreateOneMovieReviewArgs = {
  data: MovieReviewCreateInput;
};


export type MutationCreateOneMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserCreateInput;
};


export type MutationCreateOneMovieSpokenLanguageArgs = {
  data: MovieSpokenLanguageCreateInput;
};


export type MutationCreateOneMovieWatchedByUserArgs = {
  data: MovieWatchedByUserCreateInput;
};


export type MutationCreateOneMovifierAppUserArgs = {
  data: MovifierAppUserCreateInput;
};


export type MutationCreateOneUserMovieWatchlistArgs = {
  data: UserMovieWatchlistCreateInput;
};


export type MutationDeleteManyGenreArgs = {
  where?: InputMaybe<GenreWhereInput>;
};


export type MutationDeleteManyMovieArgs = {
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationDeleteManyMovieCrewMemberArgs = {
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type MutationDeleteManyMovieCrewMemberTypeArgs = {
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type MutationDeleteManyMovieLikedByUserArgs = {
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MutationDeleteManyMovieListArgs = {
  where?: InputMaybe<MovieListWhereInput>;
};


export type MutationDeleteManyMovieListLikedByUserArgs = {
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MutationDeleteManyMovieRatingArgs = {
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MutationDeleteManyMovieReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type MutationDeleteManyMovieReviewLikedByUserArgs = {
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MutationDeleteManyMovieSpokenLanguageArgs = {
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MutationDeleteManyMovieWatchedByUserArgs = {
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MutationDeleteManyUserMovieWatchlistArgs = {
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MutationDeleteOneGenreArgs = {
  where: GenreWhereUniqueInput;
};


export type MutationDeleteOneMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type MutationDeleteOneMovieCrewMemberArgs = {
  where: MovieCrewMemberWhereUniqueInput;
};


export type MutationDeleteOneMovieCrewMemberTypeArgs = {
  where: MovieCrewMemberTypeWhereUniqueInput;
};


export type MutationDeleteOneMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationDeleteOneMovieListArgs = {
  where: MovieListWhereUniqueInput;
};


export type MutationDeleteOneMovieListLikedByUserArgs = {
  where: MovieListLikedByUserWhereUniqueInput;
};


export type MutationDeleteOneMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type MutationDeleteOneMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type MutationDeleteOneMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationDeleteOneMovieSpokenLanguageArgs = {
  where: MovieSpokenLanguageWhereUniqueInput;
};


export type MutationDeleteOneMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationDeleteOneUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type MutationFetchMovieFromTmdbArgs = {
  imdbId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: UserLoginInput;
};


export type MutationUpdateManyGenreArgs = {
  data: GenreUpdateManyMutationInput;
  where?: InputMaybe<GenreWhereInput>;
};


export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: InputMaybe<MovieWhereInput>;
};


export type MutationUpdateManyMovieCrewMemberArgs = {
  data: MovieCrewMemberUpdateManyMutationInput;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type MutationUpdateManyMovieCrewMemberTypeArgs = {
  data: MovieCrewMemberTypeUpdateManyMutationInput;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type MutationUpdateManyMovieLikedByUserArgs = {
  data: MovieLikedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type MutationUpdateManyMovieListArgs = {
  data: MovieListUpdateManyMutationInput;
  where?: InputMaybe<MovieListWhereInput>;
};


export type MutationUpdateManyMovieListLikedByUserArgs = {
  data: MovieListLikedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type MutationUpdateManyMovieRatingArgs = {
  data: MovieRatingUpdateManyMutationInput;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type MutationUpdateManyMovieReviewArgs = {
  data: MovieReviewUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type MutationUpdateManyMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type MutationUpdateManyMovieSpokenLanguageArgs = {
  data: MovieSpokenLanguageUpdateManyMutationInput;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type MutationUpdateManyMovieWatchedByUserArgs = {
  data: MovieWatchedByUserUpdateManyMutationInput;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type MutationUpdateManyUserMovieWatchlistArgs = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type MutationUpdateOneGenreArgs = {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};


export type MutationUpdateOneMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpdateOneMovieCrewMemberArgs = {
  data: MovieCrewMemberUpdateInput;
  where: MovieCrewMemberWhereUniqueInput;
};


export type MutationUpdateOneMovieCrewMemberTypeArgs = {
  data: MovieCrewMemberTypeUpdateInput;
  where: MovieCrewMemberTypeWhereUniqueInput;
};


export type MutationUpdateOneMovieLikedByUserArgs = {
  data: MovieLikedByUserUpdateInput;
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationUpdateOneMovieListArgs = {
  data: MovieListUpdateInput;
  where: MovieListWhereUniqueInput;
};


export type MutationUpdateOneMovieListLikedByUserArgs = {
  data: MovieListLikedByUserUpdateInput;
  where: MovieListLikedByUserWhereUniqueInput;
};


export type MutationUpdateOneMovieRatingArgs = {
  data: MovieRatingUpdateInput;
  where: MovieRatingWhereUniqueInput;
};


export type MutationUpdateOneMovieReviewArgs = {
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};


export type MutationUpdateOneMovieReviewLikedByUserArgs = {
  data: MovieReviewLikedByUserUpdateInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationUpdateOneMovieSpokenLanguageArgs = {
  data: MovieSpokenLanguageUpdateInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};


export type MutationUpdateOneMovieWatchedByUserArgs = {
  data: MovieWatchedByUserUpdateInput;
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationUpdateOneUserMovieWatchlistArgs = {
  data: UserMovieWatchlistUpdateInput;
  where: UserMovieWatchlistWhereUniqueInput;
};


export type MutationUpsertOneGenreArgs = {
  create: GenreCreateInput;
  update: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};


export type MutationUpsertOneMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpsertOneMovieCrewMemberArgs = {
  create: MovieCrewMemberCreateInput;
  update: MovieCrewMemberUpdateInput;
  where: MovieCrewMemberWhereUniqueInput;
};


export type MutationUpsertOneMovieCrewMemberTypeArgs = {
  create: MovieCrewMemberTypeCreateInput;
  update: MovieCrewMemberTypeUpdateInput;
  where: MovieCrewMemberTypeWhereUniqueInput;
};


export type MutationUpsertOneMovieLikedByUserArgs = {
  create: MovieLikedByUserCreateInput;
  update: MovieLikedByUserUpdateInput;
  where: MovieLikedByUserWhereUniqueInput;
};


export type MutationUpsertOneMovieListArgs = {
  create: MovieListCreateInput;
  update: MovieListUpdateInput;
  where: MovieListWhereUniqueInput;
};


export type MutationUpsertOneMovieListLikedByUserArgs = {
  create: MovieListLikedByUserCreateInput;
  update: MovieListLikedByUserUpdateInput;
  where: MovieListLikedByUserWhereUniqueInput;
};


export type MutationUpsertOneMovieRatingArgs = {
  create: MovieRatingCreateInput;
  update: MovieRatingUpdateInput;
  where: MovieRatingWhereUniqueInput;
};


export type MutationUpsertOneMovieReviewArgs = {
  create: MovieReviewCreateInput;
  update: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};


export type MutationUpsertOneMovieReviewLikedByUserArgs = {
  create: MovieReviewLikedByUserCreateInput;
  update: MovieReviewLikedByUserUpdateInput;
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type MutationUpsertOneMovieSpokenLanguageArgs = {
  create: MovieSpokenLanguageCreateInput;
  update: MovieSpokenLanguageUpdateInput;
  where: MovieSpokenLanguageWhereUniqueInput;
};


export type MutationUpsertOneMovieWatchedByUserArgs = {
  create: MovieWatchedByUserCreateInput;
  update: MovieWatchedByUserUpdateInput;
  where: MovieWatchedByUserWhereUniqueInput;
};


export type MutationUpsertOneUserMovieWatchlistArgs = {
  create: UserMovieWatchlistCreateInput;
  update: UserMovieWatchlistUpdateInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumMoviefireAppUserRoleFilter = {
  equals?: InputMaybe<MoviefireAppUserRole>;
  in?: InputMaybe<Array<MoviefireAppUserRole>>;
  not?: InputMaybe<NestedEnumMoviefireAppUserRoleFilter>;
  notIn?: InputMaybe<Array<MoviefireAppUserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGenre: AggregateGenre;
  aggregateMovie: AggregateMovie;
  aggregateMovieCrewMember: AggregateMovieCrewMember;
  aggregateMovieCrewMemberType: AggregateMovieCrewMemberType;
  aggregateMovieLikedByUser: AggregateMovieLikedByUser;
  aggregateMovieList: AggregateMovieList;
  aggregateMovieListLikedByUser: AggregateMovieListLikedByUser;
  aggregateMovieRating: AggregateMovieRating;
  aggregateMovieReview: AggregateMovieReview;
  aggregateMovieReviewLikedByUser: AggregateMovieReviewLikedByUser;
  aggregateMovieSpokenLanguage: AggregateMovieSpokenLanguage;
  aggregateMovieWatchedByUser: AggregateMovieWatchedByUser;
  aggregateUserMovieWatchlist: AggregateUserMovieWatchlist;
  findFirstGenre?: Maybe<Genre>;
  findFirstGenreOrThrow?: Maybe<Genre>;
  findFirstMovie?: Maybe<Movie>;
  findFirstMovieCrewMember?: Maybe<MovieCrewMember>;
  findFirstMovieCrewMemberOrThrow?: Maybe<MovieCrewMember>;
  findFirstMovieCrewMemberType?: Maybe<MovieCrewMemberType>;
  findFirstMovieCrewMemberTypeOrThrow?: Maybe<MovieCrewMemberType>;
  findFirstMovieLikedByUser?: Maybe<MovieLikedByUser>;
  findFirstMovieLikedByUserOrThrow?: Maybe<MovieLikedByUser>;
  findFirstMovieList?: Maybe<MovieList>;
  findFirstMovieListLikedByUser?: Maybe<MovieListLikedByUser>;
  findFirstMovieListLikedByUserOrThrow?: Maybe<MovieListLikedByUser>;
  findFirstMovieListOrThrow?: Maybe<MovieList>;
  findFirstMovieOrThrow?: Maybe<Movie>;
  findFirstMovieRating?: Maybe<MovieRating>;
  findFirstMovieRatingOrThrow?: Maybe<MovieRating>;
  findFirstMovieReview?: Maybe<MovieReview>;
  findFirstMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  findFirstMovieReviewLikedByUserOrThrow?: Maybe<MovieReviewLikedByUser>;
  findFirstMovieReviewOrThrow?: Maybe<MovieReview>;
  findFirstMovieSpokenLanguage?: Maybe<MovieSpokenLanguage>;
  findFirstMovieSpokenLanguageOrThrow?: Maybe<MovieSpokenLanguage>;
  findFirstMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  findFirstMovieWatchedByUserOrThrow?: Maybe<MovieWatchedByUser>;
  findFirstUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  findFirstUserMovieWatchlistOrThrow?: Maybe<UserMovieWatchlist>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  getGenre?: Maybe<Genre>;
  getMovie?: Maybe<Movie>;
  getMovieCrewMember?: Maybe<MovieCrewMember>;
  getMovieCrewMemberType?: Maybe<MovieCrewMemberType>;
  getMovieDecades: Decades;
  getMovieLikedByUser?: Maybe<MovieLikedByUser>;
  getMovieList?: Maybe<MovieList>;
  getMovieListLikedByUser?: Maybe<MovieListLikedByUser>;
  getMovieRating?: Maybe<MovieRating>;
  getMovieReview?: Maybe<MovieReview>;
  getMovieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  getMovieSpokenLanguage?: Maybe<MovieSpokenLanguage>;
  getMovieWatchedByUser?: Maybe<MovieWatchedByUser>;
  getUserMovieWatchlist?: Maybe<UserMovieWatchlist>;
  groupByGenre: Array<GenreGroupBy>;
  groupByMovie: Array<MovieGroupBy>;
  groupByMovieCrewMember: Array<MovieCrewMemberGroupBy>;
  groupByMovieCrewMemberType: Array<MovieCrewMemberTypeGroupBy>;
  groupByMovieLikedByUser: Array<MovieLikedByUserGroupBy>;
  groupByMovieList: Array<MovieListGroupBy>;
  groupByMovieListLikedByUser: Array<MovieListLikedByUserGroupBy>;
  groupByMovieRating: Array<MovieRatingGroupBy>;
  groupByMovieReview: Array<MovieReviewGroupBy>;
  groupByMovieReviewLikedByUser: Array<MovieReviewLikedByUserGroupBy>;
  groupByMovieSpokenLanguage: Array<MovieSpokenLanguageGroupBy>;
  groupByMovieWatchedByUser: Array<MovieWatchedByUserGroupBy>;
  groupByUserMovieWatchlist: Array<UserMovieWatchlistGroupBy>;
  me?: Maybe<MovifierAppUser>;
  movie?: Maybe<Movie>;
  movieCrewMember?: Maybe<MovieCrewMember>;
  movieCrewMemberType?: Maybe<MovieCrewMemberType>;
  movieCrewMemberTypes: Array<MovieCrewMemberType>;
  movieCrewMembers: Array<MovieCrewMember>;
  movieLikedByUser?: Maybe<MovieLikedByUser>;
  movieLikedByUsers: Array<MovieLikedByUser>;
  movieList?: Maybe<MovieList>;
  movieListLikedByUser?: Maybe<MovieListLikedByUser>;
  movieListLikedByUsers: Array<MovieListLikedByUser>;
  movieLists: Array<MovieList>;
  movieRating?: Maybe<MovieRating>;
  movieRatings: Array<MovieRating>;
  movieRatingsSearchWithMovies: Array<MovieRating>;
  movieReview?: Maybe<MovieReview>;
  movieReviewLikedByUser?: Maybe<MovieReviewLikedByUser>;
  movieReviewLikedByUsers: Array<MovieReviewLikedByUser>;
  movieReviews: Array<MovieReview>;
  movieReviewsSearchWithMovies: Array<MovieReview>;
  movieSpokenLanguage?: Maybe<MovieSpokenLanguage>;
  movieSpokenLanguages: Array<MovieSpokenLanguage>;
  movieWatchedByUser?: Maybe<MovieWatchedByUser>;
  movieWatchedByUsers: Array<MovieWatchedByUser>;
  movies: Array<Movie>;
  movifierAppUsers: Array<MovifierAppUser>;
  searchMovieLists: Array<MovieList>;
  searchMovies: Array<Movie>;
  userMovieWatchlist?: Maybe<UserMovieWatchlist>;
  userMovieWatchlists: Array<UserMovieWatchlist>;
};


export type QueryAggregateGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type QueryAggregateMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryAggregateMovieCrewMemberArgs = {
  cursor?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type QueryAggregateMovieCrewMemberTypeArgs = {
  cursor?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type QueryAggregateMovieLikedByUserArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryAggregateMovieListArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QueryAggregateMovieListLikedByUserArgs = {
  cursor?: InputMaybe<MovieListLikedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type QueryAggregateMovieRatingArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryAggregateMovieReviewLikedByUserArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryAggregateMovieSpokenLanguageArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type QueryAggregateMovieWatchedByUserArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryAggregateUserMovieWatchlistArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryFindFirstGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type QueryFindFirstGenreOrThrowArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type QueryFindFirstMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieCrewMemberArgs = {
  cursor?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type QueryFindFirstMovieCrewMemberOrThrowArgs = {
  cursor?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type QueryFindFirstMovieCrewMemberTypeArgs = {
  cursor?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type QueryFindFirstMovieCrewMemberTypeOrThrowArgs = {
  cursor?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type QueryFindFirstMovieLikedByUserArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryFindFirstMovieLikedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryFindFirstMovieListArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QueryFindFirstMovieListLikedByUserArgs = {
  cursor?: InputMaybe<MovieListLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type QueryFindFirstMovieListLikedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieListLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type QueryFindFirstMovieListOrThrowArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QueryFindFirstMovieOrThrowArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryFindFirstMovieRatingArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryFindFirstMovieRatingOrThrowArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryFindFirstMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryFindFirstMovieReviewLikedByUserArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryFindFirstMovieReviewLikedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryFindFirstMovieReviewOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryFindFirstMovieSpokenLanguageArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieSpokenLanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type QueryFindFirstMovieSpokenLanguageOrThrowArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieSpokenLanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type QueryFindFirstMovieWatchedByUserArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryFindFirstMovieWatchedByUserOrThrowArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryFindFirstUserMovieWatchlistArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryFindFirstUserMovieWatchlistOrThrowArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryGenreArgs = {
  where: GenreWhereUniqueInput;
};


export type QueryGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type QueryGetGenreArgs = {
  where: GenreWhereUniqueInput;
};


export type QueryGetMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryGetMovieCrewMemberArgs = {
  where: MovieCrewMemberWhereUniqueInput;
};


export type QueryGetMovieCrewMemberTypeArgs = {
  where: MovieCrewMemberTypeWhereUniqueInput;
};


export type QueryGetMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type QueryGetMovieListArgs = {
  where: MovieListWhereUniqueInput;
};


export type QueryGetMovieListLikedByUserArgs = {
  where: MovieListLikedByUserWhereUniqueInput;
};


export type QueryGetMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type QueryGetMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type QueryGetMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type QueryGetMovieSpokenLanguageArgs = {
  where: MovieSpokenLanguageWhereUniqueInput;
};


export type QueryGetMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type QueryGetUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type QueryGroupByGenreArgs = {
  by: Array<GenreScalarFieldEnum>;
  having?: InputMaybe<GenreScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GenreOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GenreWhereInput>;
};


export type QueryGroupByMovieArgs = {
  by: Array<MovieScalarFieldEnum>;
  having?: InputMaybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryGroupByMovieCrewMemberArgs = {
  by: Array<MovieCrewMemberScalarFieldEnum>;
  having?: InputMaybe<MovieCrewMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type QueryGroupByMovieCrewMemberTypeArgs = {
  by: Array<MovieCrewMemberTypeScalarFieldEnum>;
  having?: InputMaybe<MovieCrewMemberTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieCrewMemberTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type QueryGroupByMovieLikedByUserArgs = {
  by: Array<MovieLikedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieLikedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryGroupByMovieListArgs = {
  by: Array<MovieListScalarFieldEnum>;
  having?: InputMaybe<MovieListScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QueryGroupByMovieListLikedByUserArgs = {
  by: Array<MovieListLikedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieListLikedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type QueryGroupByMovieRatingArgs = {
  by: Array<MovieRatingScalarFieldEnum>;
  having?: InputMaybe<MovieRatingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryGroupByMovieReviewArgs = {
  by: Array<MovieReviewScalarFieldEnum>;
  having?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryGroupByMovieReviewLikedByUserArgs = {
  by: Array<MovieReviewLikedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieReviewLikedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryGroupByMovieSpokenLanguageArgs = {
  by: Array<MovieSpokenLanguageScalarFieldEnum>;
  having?: InputMaybe<MovieSpokenLanguageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type QueryGroupByMovieWatchedByUserArgs = {
  by: Array<MovieWatchedByUserScalarFieldEnum>;
  having?: InputMaybe<MovieWatchedByUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryGroupByUserMovieWatchlistArgs = {
  by: Array<UserMovieWatchlistScalarFieldEnum>;
  having?: InputMaybe<UserMovieWatchlistScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};


export type QueryMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryMovieCrewMemberArgs = {
  where: MovieCrewMemberWhereUniqueInput;
};


export type QueryMovieCrewMemberTypeArgs = {
  where: MovieCrewMemberTypeWhereUniqueInput;
};


export type QueryMovieCrewMemberTypesArgs = {
  cursor?: InputMaybe<MovieCrewMemberTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberTypeWhereInput>;
};


export type QueryMovieCrewMembersArgs = {
  cursor?: InputMaybe<MovieCrewMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieCrewMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieCrewMemberWhereInput>;
};


export type QueryMovieLikedByUserArgs = {
  where: MovieLikedByUserWhereUniqueInput;
};


export type QueryMovieLikedByUsersArgs = {
  cursor?: InputMaybe<MovieLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieLikedByUserWhereInput>;
};


export type QueryMovieListArgs = {
  where: MovieListWhereUniqueInput;
};


export type QueryMovieListLikedByUserArgs = {
  where: MovieListLikedByUserWhereUniqueInput;
};


export type QueryMovieListLikedByUsersArgs = {
  cursor?: InputMaybe<MovieListLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListLikedByUserWhereInput>;
};


export type QueryMovieListsArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QueryMovieRatingArgs = {
  where: MovieRatingWhereUniqueInput;
};


export type QueryMovieRatingsArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryMovieRatingsSearchWithMoviesArgs = {
  cursor?: InputMaybe<MovieRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieRatingOrderByWithRelationAndSearchRelevanceInput>>;
  searchCriteria: MoviesSearchCriteriaInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieRatingWhereInput>;
};


export type QueryMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};


export type QueryMovieReviewLikedByUserArgs = {
  where: MovieReviewLikedByUserWhereUniqueInput;
};


export type QueryMovieReviewLikedByUsersArgs = {
  cursor?: InputMaybe<MovieReviewLikedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewLikedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewLikedByUserWhereInput>;
};


export type QueryMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryMovieReviewsSearchWithMoviesArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieReviewOrderByWithRelationAndSearchRelevanceInput>>;
  searchCriteria: MoviesSearchCriteriaInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};


export type QueryMovieSpokenLanguageArgs = {
  where: MovieSpokenLanguageWhereUniqueInput;
};


export type QueryMovieSpokenLanguagesArgs = {
  cursor?: InputMaybe<MovieSpokenLanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieSpokenLanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieSpokenLanguageWhereInput>;
};


export type QueryMovieWatchedByUserArgs = {
  where: MovieWatchedByUserWhereUniqueInput;
};


export type QueryMovieWatchedByUsersArgs = {
  cursor?: InputMaybe<MovieWatchedByUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieWatchedByUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWatchedByUserWhereInput>;
};


export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryMovifierAppUsersArgs = {
  cursor?: InputMaybe<MovifierAppUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovifierAppUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovifierAppUserWhereInput>;
};


export type QuerySearchMovieListsArgs = {
  cursor?: InputMaybe<MovieListWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieListScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieListOrderByWithRelationAndSearchRelevanceInput>>;
  searchCriteria: MovieListSearchCriteriaInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieListWhereInput>;
};


export type QuerySearchMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  searchCriteria: MoviesSearchCriteriaInput;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type QueryUserMovieWatchlistArgs = {
  where: UserMovieWatchlistWhereUniqueInput;
};


export type QueryUserMovieWatchlistsArgs = {
  cursor?: InputMaybe<UserMovieWatchlistWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserMovieWatchlistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type SortOrder =
  | 'asc'
  | 'desc';

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserLoginOutput = {
  __typename?: 'UserLoginOutput';
  token: Scalars['String']['output'];
  user: MovifierAppUser;
};

export type UserMovieWatchlist = {
  __typename?: 'UserMovieWatchlist';
  createdAt: Scalars['DateTimeISO']['output'];
  movie: Movie;
  movieId: Scalars['String']['output'];
  user: MovifierAppUser;
  userId: Scalars['String']['output'];
};

export type UserMovieWatchlistCountAggregate = {
  __typename?: 'UserMovieWatchlistCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  movieId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserMovieWatchlistCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  user: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
};

export type UserMovieWatchlistCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyMovieInputEnvelope = {
  data: Array<UserMovieWatchlistCreateManyMovieInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMovieWatchlistCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movieId: Scalars['String']['input'];
};

export type UserMovieWatchlistCreateManyUserInputEnvelope = {
  data: Array<UserMovieWatchlistCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMovieWatchlistCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutMovieInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyMovieInputEnvelope>;
};

export type UserMovieWatchlistCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyUserInputEnvelope>;
};

export type UserMovieWatchlistCreateOrConnectWithoutMovieInput = {
  create: UserMovieWatchlistCreateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistCreateOrConnectWithoutUserInput = {
  create: UserMovieWatchlistCreateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
};

export type UserMovieWatchlistCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  movie: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
};

export type UserMovieWatchlistGroupBy = {
  __typename?: 'UserMovieWatchlistGroupBy';
  _count?: Maybe<UserMovieWatchlistCountAggregate>;
  _max?: Maybe<UserMovieWatchlistMaxAggregate>;
  _min?: Maybe<UserMovieWatchlistMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  movieId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type UserMovieWatchlistListRelationFilter = {
  every?: InputMaybe<UserMovieWatchlistWhereInput>;
  none?: InputMaybe<UserMovieWatchlistWhereInput>;
  some?: InputMaybe<UserMovieWatchlistWhereInput>;
};

export type UserMovieWatchlistMaxAggregate = {
  __typename?: 'UserMovieWatchlistMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserMovieWatchlistMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistMinAggregate = {
  __typename?: 'UserMovieWatchlistMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  movieId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserMovieWatchlistMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByRelevanceFieldEnum =
  | 'movieId'
  | 'userId';

export type UserMovieWatchlistOrderByRelevanceInput = {
  fields: Array<UserMovieWatchlistOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type UserMovieWatchlistOrderByWithAggregationInput = {
  _count?: InputMaybe<UserMovieWatchlistCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMovieWatchlistMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMovieWatchlistMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserMovieWatchlistOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationAndSearchRelevanceInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<MovifierAppUserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserMovieWatchlistScalarFieldEnum =
  | 'createdAt'
  | 'movieId'
  | 'userId';

export type UserMovieWatchlistScalarWhereInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserMovieWatchlistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserMovieWatchlistUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput>;
};

export type UserMovieWatchlistUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where: UserMovieWatchlistScalarWhereInput;
};

export type UserMovieWatchlistUpdateManyWithWhereWithoutUserInput = {
  data: UserMovieWatchlistUpdateManyMutationInput;
  where: UserMovieWatchlistScalarWhereInput;
};

export type UserMovieWatchlistUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutMovieInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutMovieInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput>>;
  updateMany?: InputMaybe<Array<UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput>>;
  upsert?: InputMaybe<Array<UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput>>;
};

export type UserMovieWatchlistUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserMovieWatchlistCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserMovieWatchlistCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserMovieWatchlistCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserMovieWatchlistScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  set?: InputMaybe<Array<UserMovieWatchlistWhereUniqueInput>>;
  update?: InputMaybe<Array<UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserMovieWatchlistUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput = {
  data: UserMovieWatchlistUpdateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput = {
  data: UserMovieWatchlistUpdateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput>;
};

export type UserMovieWatchlistUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput>;
};

export type UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput = {
  create: UserMovieWatchlistCreateWithoutMovieInput;
  update: UserMovieWatchlistUpdateWithoutMovieInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput = {
  create: UserMovieWatchlistCreateWithoutUserInput;
  update: UserMovieWatchlistUpdateWithoutUserInput;
  where: UserMovieWatchlistWhereUniqueInput;
};

export type UserMovieWatchlistUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UserMovieWatchlistWhereInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserMovieWatchlistWhereUniqueInput = {
  AND?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  NOT?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  OR?: InputMaybe<Array<UserMovieWatchlistWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<StringFilter>;
  user?: InputMaybe<MovifierAppUserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_movieId?: InputMaybe<UserMovieWatchlistUserIdMovieIdCompoundUniqueInput>;
};

export type UserRegisterOutput = {
  __typename?: 'UserRegisterOutput';
  token: Scalars['String']['output'];
  user: MovifierAppUser;
};

export type GetMovieListForPageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieListForPageQuery = { __typename?: 'Query', movieList?: { __typename?: 'MovieList', id: string, name: string, description: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } } | null };

export type GetMovieForPageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieForPageQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, description: string, releaseDate: any, durationInMinutes: number, posterUrl: string, alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> } | null };

export type GetSpokenLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpokenLanguagesQuery = { __typename?: 'Query', movieSpokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> };

export type GetMoviesForHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesForHomePageQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type GetPersonForPageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPersonForPageQuery = { __typename?: 'Query', movieCrewMember?: { __typename?: 'MovieCrewMember', id: string, name: string, imdbId: string, description: string, popularity: number, photoUrl: string } | null };

export type GetUserLikedMoviesQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput> | MovieOrderByWithRelationAndSearchRelevanceInput>;
  userId: Scalars['String']['input'];
}>;


export type GetUserLikedMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type GetUserCreatedMovieListsQueryVariables = Exact<{
  searchCriteria: MovieListSearchCriteriaInput;
  userId: Scalars['String']['input'];
}>;


export type GetUserCreatedMovieListsQuery = { __typename?: 'Query', searchMovieLists: Array<{ __typename?: 'MovieList', id: string, name: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } }> };

export type GetUserLikedMovieListsQueryVariables = Exact<{
  searchCriteria: MovieListSearchCriteriaInput;
  userId: Scalars['String']['input'];
}>;


export type GetUserLikedMovieListsQuery = { __typename?: 'Query', searchMovieLists: Array<{ __typename?: 'MovieList', id: string, name: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } }> };

export type GetTotalMoviesWatchedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTotalMoviesWatchedQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetTotalMoviesLikedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTotalMoviesLikedQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetTotalMoviesInWatchlistQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTotalMoviesInWatchlistQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetTotalMovieListsCreatedQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTotalMovieListsCreatedQuery = { __typename?: 'Query', movieLists: Array<{ __typename?: 'MovieList', id: string }> };

export type GetTotalMovieReviewsWrittenQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetTotalMovieReviewsWrittenQuery = { __typename?: 'Query', movieReviews: Array<{ __typename?: 'MovieReview', id: string }> };

export type GetRecentWatchedMoviesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  take?: Scalars['Int']['input'];
}>;


export type GetRecentWatchedMoviesQuery = { __typename?: 'Query', movieWatchedByUsers: Array<{ __typename?: 'MovieWatchedByUser', movie: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null } }> };

export type GetRecentLikedMoviesQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  take?: Scalars['Int']['input'];
}>;


export type GetRecentLikedMoviesQuery = { __typename?: 'Query', movieLikedByUsers: Array<{ __typename?: 'MovieLikedByUser', movie: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null } }> };

export type UserMovieReviewCardItemFragment = { __typename?: 'MovieReview', id: string, createdAt: any, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, movie: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null } } };

export type SearchUserMovieReviewsQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
  userId: Scalars['String']['input'];
}>;


export type SearchUserMovieReviewsQuery = { __typename?: 'Query', movieReviewsSearchWithMovies: Array<{ __typename?: 'MovieReview', id: string, createdAt: any, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, movie: { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null } } }> };

export type GetUserWatchedMoviesQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput> | MovieOrderByWithRelationAndSearchRelevanceInput>;
  userId: Scalars['String']['input'];
}>;


export type GetUserWatchedMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type GetUserWatchlistQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput> | MovieOrderByWithRelationAndSearchRelevanceInput>;
  userId: Scalars['String']['input'];
}>;


export type GetUserWatchlistQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type CrewMemberTypeCardItemFragment = { __typename?: 'MovieCrewMemberType', id: string, name: string, _count?: { __typename?: 'MovieCrewMemberTypeCount', movieCrewMembers: number } | null };

export type DeleteMovieCrewMemberTypeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteMovieCrewMemberTypeMutation = { __typename?: 'Mutation', deleteOneMovieCrewMemberType?: { __typename?: 'MovieCrewMemberType', id: string } | null };

export type GetMovieCrewMemberTypesForAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieCrewMemberTypesForAdminQuery = { __typename?: 'Query', movieCrewMemberTypes: Array<{ __typename?: 'MovieCrewMemberType', id: string, name: string, _count?: { __typename?: 'MovieCrewMemberTypeCount', movieCrewMembers: number } | null }> };

export type UpsertMovieCrewMemberTypeMutationVariables = Exact<{
  data: MovieCrewMemberTypeCreateInput;
  updateData: MovieCrewMemberTypeUpdateInput;
  existingTypeId: Scalars['String']['input'];
}>;


export type UpsertMovieCrewMemberTypeMutation = { __typename?: 'Mutation', upsertOneMovieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string } };

export type GetMovieCrewMemberTypeForUpdateQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieCrewMemberTypeForUpdateQuery = { __typename?: 'Query', movieCrewMemberType?: { __typename?: 'MovieCrewMemberType', id: string, name: string } | null };

export type DeleteMovieGenreMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteMovieGenreMutation = { __typename?: 'Mutation', deleteOneGenre?: { __typename?: 'Genre', id: string } | null };

export type MovieGenreCardItemFragment = { __typename?: 'Genre', id: string, name: string, _count?: { __typename?: 'GenreCount', movies: number } | null };

export type GetMovieGenresForAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMovieGenresForAdminQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string, _count?: { __typename?: 'GenreCount', movies: number } | null }> };

export type UpsertMovieGenreMutationVariables = Exact<{
  data: GenreCreateInput;
  updateData: GenreUpdateInput;
  existingGenreId: Scalars['String']['input'];
}>;


export type UpsertMovieGenreMutation = { __typename?: 'Mutation', upsertOneGenre: { __typename?: 'Genre', id: string } };

export type GetMovieGenreForUpdateQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieGenreForUpdateQuery = { __typename?: 'Query', genre?: { __typename?: 'Genre', id: string, name: string } | null };

export type DeleteMovieListMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteMovieListMutation = { __typename?: 'Mutation', deleteOneMovieList?: { __typename?: 'MovieList', id: string } | null };

export type MovieListCardItemFragment = { __typename?: 'MovieList', id: string, name: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } };

export type MovieListPageItemFragment = { __typename?: 'MovieList', id: string, name: string, description: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } };

export type GetUserWatchedMovieIdsInMovieListQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  movieListId: Scalars['String']['input'];
}>;


export type GetUserWatchedMovieIdsInMovieListQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetUserLikedMovieIdsInMovieListQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  movieListId: Scalars['String']['input'];
}>;


export type GetUserLikedMovieIdsInMovieListQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type SearchMovieListsQueryVariables = Exact<{
  searchCriteria: MovieListSearchCriteriaInput;
}>;


export type SearchMovieListsQuery = { __typename?: 'Query', searchMovieLists: Array<{ __typename?: 'MovieList', id: string, name: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }>, movieListAuthor: { __typename?: 'MovifierAppUser', id: string, username: string } }> };

export type SearchMoviesForListCreationQueryVariables = Exact<{
  search: Scalars['String']['input'];
  alreadySelectedMovies: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SearchMoviesForListCreationQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, releaseDate: any } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', crewMember: { __typename?: 'MovieCrewMember', id: string, name: string }, movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string } }> }> };

export type GetSelectedMovieListMoviesQueryVariables = Exact<{
  movieIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetSelectedMovieListMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type UpsertMovieListMutationVariables = Exact<{
  data: MovieListCreateInput;
  updateData: MovieListUpdateInput;
  existingListId: Scalars['String']['input'];
}>;


export type UpsertMovieListMutation = { __typename?: 'Mutation', upsertOneMovieList: { __typename?: 'MovieList', id: string } };

export type MinimalisticMovieSearchCardItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, releaseDate: any } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', crewMember: { __typename?: 'MovieCrewMember', id: string, name: string }, movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string } }> };

export type GetMovieListForUpdateQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieListForUpdateQuery = { __typename?: 'Query', movieList?: { __typename?: 'MovieList', id: string, name: string, description: string, tags: Array<string>, movies: Array<{ __typename?: 'Movie', id: string }> } | null };

export type MovieReviewCardItemFragment = { __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null };

export type GetMovieRatingReviewQueryVariables = Exact<{
  ratingId: Scalars['String']['input'];
}>;


export type GetMovieRatingReviewQuery = { __typename?: 'Query', movieReview?: { __typename?: 'MovieReview', id: string, content: string } | null };

export type UpsertMovieRatingReviewMutationVariables = Exact<{
  ratingId: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type UpsertMovieRatingReviewMutation = { __typename?: 'Mutation', upsertOneMovieReview: { __typename?: 'MovieReview', id: string, content: string } };

export type MovieCardItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null };

export type DirectorNamesTitleItemFragment = { __typename?: 'Movie', crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }> };

export type MoviePageItemFragment = { __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, description: string, releaseDate: any, durationInMinutes: number, posterUrl: string, alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> };

export type MoviePageDetailsTabsItemFragment = { __typename?: 'Movie', movieInfo?: { __typename?: 'MovieInfo', alternativeTitles: Array<string> } | null, crewMembers: Array<{ __typename?: 'MovieCrewMemberOnMovie', movieCrewMemberType: { __typename?: 'MovieCrewMemberType', id: string, name: string }, crewMember: { __typename?: 'MovieCrewMember', name: string, id: string } }>, studios: Array<{ __typename?: 'MovieStudio', name: string }>, genres: Array<{ __typename?: 'Genre', name: string }>, keywordCategories: Array<{ __typename?: 'MovieKeywordCategory', id: string, name: string }>, spokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> };

export type MoviePagePosterItemFragment = { __typename?: 'Movie', movieInfo?: { __typename?: 'MovieInfo', id: string, posterUrl: string, title: string } | null };

export type PopularMovieReviewsQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PopularMovieReviewsQuery = { __typename?: 'Query', movieReviews: Array<{ __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null }> };

export type RecentMovieReviewsQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RecentMovieReviewsQuery = { __typename?: 'Query', movieReviews: Array<{ __typename?: 'MovieReview', id: string, content: string, rating: { __typename?: 'MovieRating', id: string, rating: number, user: { __typename?: 'MovifierAppUser', id: string, username: string } }, _count?: { __typename?: 'MovieReviewCount', likedBy: number } | null }> };

export type GetMovieRatingByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type GetMovieRatingByUserQuery = { __typename?: 'Query', movieRating?: { __typename?: 'MovieRating', id: string, rating: number } | null };

export type UpsertMovieRatingForUserMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type UpsertMovieRatingForUserMutation = { __typename?: 'Mutation', upsertOneMovieRating: { __typename?: 'MovieRating', id: string, rating: number } };

export type DeleteMovieRatingForUserMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type DeleteMovieRatingForUserMutation = { __typename?: 'Mutation', deleteOneMovieRating?: { __typename?: 'MovieRating', id: string } | null };

export type SearchMoviesQueryVariables = Exact<{
  searchCriteria: MoviesSearchCriteriaInput;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput> | MovieOrderByWithRelationAndSearchRelevanceInput>;
  take?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type DecadesQueryVariables = Exact<{ [key: string]: never; }>;


export type DecadesQuery = { __typename?: 'Query', getMovieDecades: { __typename?: 'Decades', decades: Array<number> } };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', name: string }> };

export type UpsertMovieMutationVariables = Exact<{
  data: MovieCreateInput;
  updateData: MovieUpdateInput;
  existingMovieId: Scalars['String']['input'];
}>;


export type UpsertMovieMutation = { __typename?: 'Mutation', upsertOneMovie: { __typename?: 'Movie', id: string } };

export type SearchGenresForMovieCreationQueryVariables = Exact<{
  search: Scalars['String']['input'];
  alreadySelectedGenres: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SearchGenresForMovieCreationQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type GetSelectedMovieGenresQueryVariables = Exact<{
  genresIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetSelectedMovieGenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string, _count?: { __typename?: 'GenreCount', movies: number } | null }> };

export type MinimalisticGenreSearchItemFragment = { __typename?: 'Genre', id: string, name: string };

export type SearchLanguagesForMovieCreationQueryVariables = Exact<{
  search: Scalars['String']['input'];
  alreadySelectedLanguages: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type SearchLanguagesForMovieCreationQuery = { __typename?: 'Query', movieSpokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> };

export type GetSelectedMovieLanguagesQueryVariables = Exact<{
  spokenLanguagesIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetSelectedMovieLanguagesQuery = { __typename?: 'Query', movieSpokenLanguages: Array<{ __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string }> };

export type MinimalisticLanguageSearchCardItemFragment = { __typename?: 'MovieSpokenLanguage', iso_639_1: string, name: string };

export type PersonPageItemFragment = { __typename?: 'MovieCrewMember', id: string, name: string, imdbId: string, description: string, popularity: number, photoUrl: string };

export type GetUserWatchedPersonMovieIdsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type GetUserWatchedPersonMovieIdsQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetUserLikedPersonMovieIdsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  personId: Scalars['String']['input'];
}>;


export type GetUserLikedPersonMovieIdsQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetPersonMovieCountQueryVariables = Exact<{
  personId: Scalars['String']['input'];
}>;


export type GetPersonMovieCountQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: string }> };

export type GetMoviesForPersonPageQueryVariables = Exact<{
  personId: Scalars['String']['input'];
  searchCriteria: MoviesSearchCriteriaInput;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput> | MovieOrderByWithRelationAndSearchRelevanceInput>;
}>;


export type GetMoviesForPersonPageQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, movieInfo?: { __typename?: 'MovieInfo', id: string, title: string, posterUrl: string } | null }> };

export type PersonPagePosterItemFragment = { __typename?: 'MovieCrewMember', photoUrl: string, name: string };

export type LoginUserMutationVariables = Exact<{
  data: UserLoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserLoginOutput', token: string, user: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } } };

export type RegisterUserMutationVariables = Exact<{
  data: MovifierAppUserCreateInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createOneMovifierAppUser: { __typename?: 'UserRegisterOutput', token: string, user: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } } };

export type IsMovieReviewLikedByUserQueryVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieReviewLikedByUserQuery = { __typename?: 'Query', movieReviewLikedByUser?: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } | null };

export type MarkMovieReviewLikedMutationVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieReviewLikedMutation = { __typename?: 'Mutation', createOneMovieReviewLikedByUser: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } };

export type UnmarkMovieReviewLikedMutationVariables = Exact<{
  movieReviewId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieReviewLikedMutation = { __typename?: 'Mutation', deleteOneMovieReviewLikedByUser?: { __typename?: 'MovieReviewLikedByUser', movieReviewId: string } | null };

export type IsMovieLikedByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieLikedByUserQuery = { __typename?: 'Query', movieLikedByUser?: { __typename?: 'MovieLikedByUser', movieId: string } | null };

export type MarkMovieLikedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieLikedMutation = { __typename?: 'Mutation', createOneMovieLikedByUser: { __typename?: 'MovieLikedByUser', createdAt: any } };

export type UnmarkMovieLikedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieLikedMutation = { __typename?: 'Mutation', deleteOneMovieLikedByUser?: { __typename?: 'MovieLikedByUser', createdAt: any } | null };

export type IsMovieListLikedByUserQueryVariables = Exact<{
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieListLikedByUserQuery = { __typename?: 'Query', movieListLikedByUser?: { __typename?: 'MovieListLikedByUser', movieListId: string } | null };

export type MarkMovieListLikedMutationVariables = Exact<{
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieListLikedMutation = { __typename?: 'Mutation', createOneMovieListLikedByUser: { __typename?: 'MovieListLikedByUser', movieListId: string } };

export type UnmarkMovieListLikedMutationVariables = Exact<{
  movieListId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieListLikedMutation = { __typename?: 'Mutation', deleteOneMovieListLikedByUser?: { __typename?: 'MovieListLikedByUser', movieListId: string } | null };

export type IsMovieWatchedByUserQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieWatchedByUserQuery = { __typename?: 'Query', movieWatchedByUser?: { __typename?: 'MovieWatchedByUser', movieId: string } | null };

export type MarkMovieWatchedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type MarkMovieWatchedMutation = { __typename?: 'Mutation', createOneMovieWatchedByUser: { __typename?: 'MovieWatchedByUser', movieId: string } };

export type UnmarkMovieWatchedMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type UnmarkMovieWatchedMutation = { __typename?: 'Mutation', deleteOneMovieWatchedByUser?: { __typename?: 'MovieWatchedByUser', movieId: string } | null };

export type AddMovieToUserWatchlistMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type AddMovieToUserWatchlistMutation = { __typename?: 'Mutation', createOneUserMovieWatchlist: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } };

export type IsMovieInUserWatchlistQueryVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type IsMovieInUserWatchlistQuery = { __typename?: 'Query', userMovieWatchlist?: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } | null };

export type RemoveMovieFromWatchlistMutationVariables = Exact<{
  movieId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type RemoveMovieFromWatchlistMutation = { __typename?: 'Mutation', deleteOneUserMovieWatchlist?: { __typename?: 'UserMovieWatchlist', movieId: string, userId: string } | null };

export type CurrentUserFragment = { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', me?: { __typename?: 'MovifierAppUser', id: string, role: MoviefireAppUserRole, name: string } | null };

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AggregateGenre: ResolverTypeWrapper<AggregateGenre>;
  AggregateMovie: ResolverTypeWrapper<AggregateMovie>;
  AggregateMovieCrewMember: ResolverTypeWrapper<AggregateMovieCrewMember>;
  AggregateMovieCrewMemberType: ResolverTypeWrapper<AggregateMovieCrewMemberType>;
  AggregateMovieLikedByUser: ResolverTypeWrapper<AggregateMovieLikedByUser>;
  AggregateMovieList: ResolverTypeWrapper<AggregateMovieList>;
  AggregateMovieListLikedByUser: ResolverTypeWrapper<AggregateMovieListLikedByUser>;
  AggregateMovieRating: ResolverTypeWrapper<AggregateMovieRating>;
  AggregateMovieReview: ResolverTypeWrapper<AggregateMovieReview>;
  AggregateMovieReviewLikedByUser: ResolverTypeWrapper<AggregateMovieReviewLikedByUser>;
  AggregateMovieSpokenLanguage: ResolverTypeWrapper<AggregateMovieSpokenLanguage>;
  AggregateMovieWatchedByUser: ResolverTypeWrapper<AggregateMovieWatchedByUser>;
  AggregateUserMovieWatchlist: ResolverTypeWrapper<AggregateUserMovieWatchlist>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Decades: ResolverTypeWrapper<Decades>;
  EnumMoviefireAppUserRoleFieldUpdateOperationsInput: EnumMoviefireAppUserRoleFieldUpdateOperationsInput;
  EnumMoviefireAppUserRoleFilter: EnumMoviefireAppUserRoleFilter;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  FloatFilter: FloatFilter;
  FloatWithAggregatesFilter: FloatWithAggregatesFilter;
  Genre: ResolverTypeWrapper<Genre>;
  GenreCount: ResolverTypeWrapper<GenreCount>;
  GenreCountAggregate: ResolverTypeWrapper<GenreCountAggregate>;
  GenreCountOrderByAggregateInput: GenreCountOrderByAggregateInput;
  GenreCreateInput: GenreCreateInput;
  GenreCreateManyInput: GenreCreateManyInput;
  GenreCreateNestedManyWithoutMoviesInput: GenreCreateNestedManyWithoutMoviesInput;
  GenreCreateOrConnectWithoutMoviesInput: GenreCreateOrConnectWithoutMoviesInput;
  GenreCreateWithoutMoviesInput: GenreCreateWithoutMoviesInput;
  GenreGroupBy: ResolverTypeWrapper<GenreGroupBy>;
  GenreListRelationFilter: GenreListRelationFilter;
  GenreMaxAggregate: ResolverTypeWrapper<GenreMaxAggregate>;
  GenreMaxOrderByAggregateInput: GenreMaxOrderByAggregateInput;
  GenreMinAggregate: ResolverTypeWrapper<GenreMinAggregate>;
  GenreMinOrderByAggregateInput: GenreMinOrderByAggregateInput;
  GenreOrderByRelationAggregateInput: GenreOrderByRelationAggregateInput;
  GenreOrderByRelevanceFieldEnum: GenreOrderByRelevanceFieldEnum;
  GenreOrderByRelevanceInput: GenreOrderByRelevanceInput;
  GenreOrderByWithAggregationInput: GenreOrderByWithAggregationInput;
  GenreOrderByWithRelationAndSearchRelevanceInput: GenreOrderByWithRelationAndSearchRelevanceInput;
  GenreScalarFieldEnum: GenreScalarFieldEnum;
  GenreScalarWhereInput: GenreScalarWhereInput;
  GenreScalarWhereWithAggregatesInput: GenreScalarWhereWithAggregatesInput;
  GenreUpdateInput: GenreUpdateInput;
  GenreUpdateManyMutationInput: GenreUpdateManyMutationInput;
  GenreUpdateManyWithWhereWithoutMoviesInput: GenreUpdateManyWithWhereWithoutMoviesInput;
  GenreUpdateManyWithoutMoviesNestedInput: GenreUpdateManyWithoutMoviesNestedInput;
  GenreUpdateWithWhereUniqueWithoutMoviesInput: GenreUpdateWithWhereUniqueWithoutMoviesInput;
  GenreUpdateWithoutMoviesInput: GenreUpdateWithoutMoviesInput;
  GenreUpsertWithWhereUniqueWithoutMoviesInput: GenreUpsertWithWhereUniqueWithoutMoviesInput;
  GenreWhereInput: GenreWhereInput;
  GenreWhereUniqueInput: GenreWhereUniqueInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Movie: ResolverTypeWrapper<Movie>;
  MovieCount: ResolverTypeWrapper<MovieCount>;
  MovieCountAggregate: ResolverTypeWrapper<MovieCountAggregate>;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutGenresInput: MovieCreateNestedManyWithoutGenresInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedManyWithoutSpokenLanguagesInput: MovieCreateNestedManyWithoutSpokenLanguagesInput;
  MovieCreateNestedOneWithoutCrewMembersInput: MovieCreateNestedOneWithoutCrewMembersInput;
  MovieCreateNestedOneWithoutInWatchlistByUsersInput: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  MovieCreateNestedOneWithoutLikedByInput: MovieCreateNestedOneWithoutLikedByInput;
  MovieCreateNestedOneWithoutRatedByInput: MovieCreateNestedOneWithoutRatedByInput;
  MovieCreateNestedOneWithoutWatchedByInput: MovieCreateNestedOneWithoutWatchedByInput;
  MovieCreateOrConnectWithoutCrewMembersInput: MovieCreateOrConnectWithoutCrewMembersInput;
  MovieCreateOrConnectWithoutGenresInput: MovieCreateOrConnectWithoutGenresInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutLikedByInput: MovieCreateOrConnectWithoutLikedByInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatedByInput: MovieCreateOrConnectWithoutRatedByInput;
  MovieCreateOrConnectWithoutSpokenLanguagesInput: MovieCreateOrConnectWithoutSpokenLanguagesInput;
  MovieCreateOrConnectWithoutWatchedByInput: MovieCreateOrConnectWithoutWatchedByInput;
  MovieCreateWithoutCrewMembersInput: MovieCreateWithoutCrewMembersInput;
  MovieCreateWithoutGenresInput: MovieCreateWithoutGenresInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutLikedByInput: MovieCreateWithoutLikedByInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatedByInput: MovieCreateWithoutRatedByInput;
  MovieCreateWithoutSpokenLanguagesInput: MovieCreateWithoutSpokenLanguagesInput;
  MovieCreateWithoutWatchedByInput: MovieCreateWithoutWatchedByInput;
  MovieCrewMember: ResolverTypeWrapper<MovieCrewMember>;
  MovieCrewMemberAvgAggregate: ResolverTypeWrapper<MovieCrewMemberAvgAggregate>;
  MovieCrewMemberAvgOrderByAggregateInput: MovieCrewMemberAvgOrderByAggregateInput;
  MovieCrewMemberCount: ResolverTypeWrapper<MovieCrewMemberCount>;
  MovieCrewMemberCountAggregate: ResolverTypeWrapper<MovieCrewMemberCountAggregate>;
  MovieCrewMemberCountOrderByAggregateInput: MovieCrewMemberCountOrderByAggregateInput;
  MovieCrewMemberCreateInput: MovieCrewMemberCreateInput;
  MovieCrewMemberCreateManyInput: MovieCrewMemberCreateManyInput;
  MovieCrewMemberCreateNestedOneWithoutMoviesInput: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  MovieCrewMemberCreateOrConnectWithoutMoviesInput: MovieCrewMemberCreateOrConnectWithoutMoviesInput;
  MovieCrewMemberCreateWithoutMoviesInput: MovieCrewMemberCreateWithoutMoviesInput;
  MovieCrewMemberGroupBy: ResolverTypeWrapper<MovieCrewMemberGroupBy>;
  MovieCrewMemberMaxAggregate: ResolverTypeWrapper<MovieCrewMemberMaxAggregate>;
  MovieCrewMemberMaxOrderByAggregateInput: MovieCrewMemberMaxOrderByAggregateInput;
  MovieCrewMemberMinAggregate: ResolverTypeWrapper<MovieCrewMemberMinAggregate>;
  MovieCrewMemberMinOrderByAggregateInput: MovieCrewMemberMinOrderByAggregateInput;
  MovieCrewMemberOnMovie: ResolverTypeWrapper<MovieCrewMemberOnMovie>;
  MovieCrewMemberOnMovieCreateManyCrewMemberInput: MovieCrewMemberOnMovieCreateManyCrewMemberInput;
  MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope: MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope;
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope;
  MovieCrewMemberOnMovieCreateManyMovieInput: MovieCrewMemberOnMovieCreateManyMovieInput;
  MovieCrewMemberOnMovieCreateManyMovieInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope;
  MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput;
  MovieCrewMemberOnMovieCreateWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateWithoutMovieInput: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  MovieCrewMemberOnMovieListRelationFilter: MovieCrewMemberOnMovieListRelationFilter;
  MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput: MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput;
  MovieCrewMemberOnMovieOrderByRelationAggregateInput: MovieCrewMemberOnMovieOrderByRelationAggregateInput;
  MovieCrewMemberOnMovieOrderByRelevanceFieldEnum: MovieCrewMemberOnMovieOrderByRelevanceFieldEnum;
  MovieCrewMemberOnMovieOrderByRelevanceInput: MovieCrewMemberOnMovieOrderByRelevanceInput;
  MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberOnMovieScalarFieldEnum: MovieCrewMemberOnMovieScalarFieldEnum;
  MovieCrewMemberOnMovieScalarWhereInput: MovieCrewMemberOnMovieScalarWhereInput;
  MovieCrewMemberOnMovieUpdateManyMutationInput: MovieCrewMemberOnMovieUpdateManyMutationInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieWhereInput: MovieCrewMemberOnMovieWhereInput;
  MovieCrewMemberOnMovieWhereUniqueInput: MovieCrewMemberOnMovieWhereUniqueInput;
  MovieCrewMemberOrderByRelevanceFieldEnum: MovieCrewMemberOrderByRelevanceFieldEnum;
  MovieCrewMemberOrderByRelevanceInput: MovieCrewMemberOrderByRelevanceInput;
  MovieCrewMemberOrderByWithAggregationInput: MovieCrewMemberOrderByWithAggregationInput;
  MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberRelationFilter: MovieCrewMemberRelationFilter;
  MovieCrewMemberScalarFieldEnum: MovieCrewMemberScalarFieldEnum;
  MovieCrewMemberScalarWhereWithAggregatesInput: MovieCrewMemberScalarWhereWithAggregatesInput;
  MovieCrewMemberSumAggregate: ResolverTypeWrapper<MovieCrewMemberSumAggregate>;
  MovieCrewMemberSumOrderByAggregateInput: MovieCrewMemberSumOrderByAggregateInput;
  MovieCrewMemberType: ResolverTypeWrapper<MovieCrewMemberType>;
  MovieCrewMemberTypeCount: ResolverTypeWrapper<MovieCrewMemberTypeCount>;
  MovieCrewMemberTypeCountAggregate: ResolverTypeWrapper<MovieCrewMemberTypeCountAggregate>;
  MovieCrewMemberTypeCountOrderByAggregateInput: MovieCrewMemberTypeCountOrderByAggregateInput;
  MovieCrewMemberTypeCreateInput: MovieCrewMemberTypeCreateInput;
  MovieCrewMemberTypeCreateManyInput: MovieCrewMemberTypeCreateManyInput;
  MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeGroupBy: ResolverTypeWrapper<MovieCrewMemberTypeGroupBy>;
  MovieCrewMemberTypeMaxAggregate: ResolverTypeWrapper<MovieCrewMemberTypeMaxAggregate>;
  MovieCrewMemberTypeMaxOrderByAggregateInput: MovieCrewMemberTypeMaxOrderByAggregateInput;
  MovieCrewMemberTypeMinAggregate: ResolverTypeWrapper<MovieCrewMemberTypeMinAggregate>;
  MovieCrewMemberTypeMinOrderByAggregateInput: MovieCrewMemberTypeMinOrderByAggregateInput;
  MovieCrewMemberTypeOrderByRelevanceFieldEnum: MovieCrewMemberTypeOrderByRelevanceFieldEnum;
  MovieCrewMemberTypeOrderByRelevanceInput: MovieCrewMemberTypeOrderByRelevanceInput;
  MovieCrewMemberTypeOrderByWithAggregationInput: MovieCrewMemberTypeOrderByWithAggregationInput;
  MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberTypeRelationFilter: MovieCrewMemberTypeRelationFilter;
  MovieCrewMemberTypeScalarFieldEnum: MovieCrewMemberTypeScalarFieldEnum;
  MovieCrewMemberTypeScalarWhereWithAggregatesInput: MovieCrewMemberTypeScalarWhereWithAggregatesInput;
  MovieCrewMemberTypeUpdateInput: MovieCrewMemberTypeUpdateInput;
  MovieCrewMemberTypeUpdateManyMutationInput: MovieCrewMemberTypeUpdateManyMutationInput;
  MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput;
  MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeWhereInput: MovieCrewMemberTypeWhereInput;
  MovieCrewMemberTypeWhereUniqueInput: MovieCrewMemberTypeWhereUniqueInput;
  MovieCrewMemberUpdateInput: MovieCrewMemberUpdateInput;
  MovieCrewMemberUpdateManyMutationInput: MovieCrewMemberUpdateManyMutationInput;
  MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput;
  MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput: MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput;
  MovieCrewMemberUpdateWithoutMoviesInput: MovieCrewMemberUpdateWithoutMoviesInput;
  MovieCrewMemberUpsertWithoutMoviesInput: MovieCrewMemberUpsertWithoutMoviesInput;
  MovieCrewMemberWhereInput: MovieCrewMemberWhereInput;
  MovieCrewMemberWhereUniqueInput: MovieCrewMemberWhereUniqueInput;
  MovieGroupBy: ResolverTypeWrapper<MovieGroupBy>;
  MovieInfo: ResolverTypeWrapper<MovieInfo>;
  MovieInfoCreateNestedOneWithoutMovieInput: MovieInfoCreateNestedOneWithoutMovieInput;
  MovieInfoCreateOrConnectWithoutMovieInput: MovieInfoCreateOrConnectWithoutMovieInput;
  MovieInfoCreateWithoutMovieInput: MovieInfoCreateWithoutMovieInput;
  MovieInfoCreatealternativeTitlesInput: MovieInfoCreatealternativeTitlesInput;
  MovieInfoNullableRelationFilter: MovieInfoNullableRelationFilter;
  MovieInfoOrderByRelevanceFieldEnum: MovieInfoOrderByRelevanceFieldEnum;
  MovieInfoOrderByRelevanceInput: MovieInfoOrderByRelevanceInput;
  MovieInfoOrderByWithRelationAndSearchRelevanceInput: MovieInfoOrderByWithRelationAndSearchRelevanceInput;
  MovieInfoUpdateOneWithoutMovieNestedInput: MovieInfoUpdateOneWithoutMovieNestedInput;
  MovieInfoUpdateToOneWithWhereWithoutMovieInput: MovieInfoUpdateToOneWithWhereWithoutMovieInput;
  MovieInfoUpdateWithoutMovieInput: MovieInfoUpdateWithoutMovieInput;
  MovieInfoUpdatealternativeTitlesInput: MovieInfoUpdatealternativeTitlesInput;
  MovieInfoUpsertWithoutMovieInput: MovieInfoUpsertWithoutMovieInput;
  MovieInfoWhereInput: MovieInfoWhereInput;
  MovieInfoWhereUniqueInput: MovieInfoWhereUniqueInput;
  MovieKeywordCategory: ResolverTypeWrapper<MovieKeywordCategory>;
  MovieKeywordCategoryCount: ResolverTypeWrapper<MovieKeywordCategoryCount>;
  MovieKeywordCategoryCreateNestedManyWithoutMoviesInput: MovieKeywordCategoryCreateNestedManyWithoutMoviesInput;
  MovieKeywordCategoryCreateOrConnectWithoutMoviesInput: MovieKeywordCategoryCreateOrConnectWithoutMoviesInput;
  MovieKeywordCategoryCreateWithoutMoviesInput: MovieKeywordCategoryCreateWithoutMoviesInput;
  MovieKeywordCategoryListRelationFilter: MovieKeywordCategoryListRelationFilter;
  MovieKeywordCategoryOrderByRelationAggregateInput: MovieKeywordCategoryOrderByRelationAggregateInput;
  MovieKeywordCategoryOrderByRelevanceFieldEnum: MovieKeywordCategoryOrderByRelevanceFieldEnum;
  MovieKeywordCategoryOrderByRelevanceInput: MovieKeywordCategoryOrderByRelevanceInput;
  MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput: MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput;
  MovieKeywordCategoryScalarFieldEnum: MovieKeywordCategoryScalarFieldEnum;
  MovieKeywordCategoryScalarWhereInput: MovieKeywordCategoryScalarWhereInput;
  MovieKeywordCategoryUpdateManyMutationInput: MovieKeywordCategoryUpdateManyMutationInput;
  MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput: MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput;
  MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput: MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput;
  MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryUpdateWithoutMoviesInput: MovieKeywordCategoryUpdateWithoutMoviesInput;
  MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryWhereInput: MovieKeywordCategoryWhereInput;
  MovieKeywordCategoryWhereUniqueInput: MovieKeywordCategoryWhereUniqueInput;
  MovieLikedByUser: ResolverTypeWrapper<MovieLikedByUser>;
  MovieLikedByUserCountAggregate: ResolverTypeWrapper<MovieLikedByUserCountAggregate>;
  MovieLikedByUserCountOrderByAggregateInput: MovieLikedByUserCountOrderByAggregateInput;
  MovieLikedByUserCreateInput: MovieLikedByUserCreateInput;
  MovieLikedByUserCreateManyInput: MovieLikedByUserCreateManyInput;
  MovieLikedByUserCreateManyMovieInput: MovieLikedByUserCreateManyMovieInput;
  MovieLikedByUserCreateManyMovieInputEnvelope: MovieLikedByUserCreateManyMovieInputEnvelope;
  MovieLikedByUserCreateManyUserInput: MovieLikedByUserCreateManyUserInput;
  MovieLikedByUserCreateManyUserInputEnvelope: MovieLikedByUserCreateManyUserInputEnvelope;
  MovieLikedByUserCreateNestedManyWithoutMovieInput: MovieLikedByUserCreateNestedManyWithoutMovieInput;
  MovieLikedByUserCreateNestedManyWithoutUserInput: MovieLikedByUserCreateNestedManyWithoutUserInput;
  MovieLikedByUserCreateOrConnectWithoutMovieInput: MovieLikedByUserCreateOrConnectWithoutMovieInput;
  MovieLikedByUserCreateOrConnectWithoutUserInput: MovieLikedByUserCreateOrConnectWithoutUserInput;
  MovieLikedByUserCreateWithoutMovieInput: MovieLikedByUserCreateWithoutMovieInput;
  MovieLikedByUserCreateWithoutUserInput: MovieLikedByUserCreateWithoutUserInput;
  MovieLikedByUserGroupBy: ResolverTypeWrapper<MovieLikedByUserGroupBy>;
  MovieLikedByUserListRelationFilter: MovieLikedByUserListRelationFilter;
  MovieLikedByUserMaxAggregate: ResolverTypeWrapper<MovieLikedByUserMaxAggregate>;
  MovieLikedByUserMaxOrderByAggregateInput: MovieLikedByUserMaxOrderByAggregateInput;
  MovieLikedByUserMinAggregate: ResolverTypeWrapper<MovieLikedByUserMinAggregate>;
  MovieLikedByUserMinOrderByAggregateInput: MovieLikedByUserMinOrderByAggregateInput;
  MovieLikedByUserOrderByRelationAggregateInput: MovieLikedByUserOrderByRelationAggregateInput;
  MovieLikedByUserOrderByRelevanceFieldEnum: MovieLikedByUserOrderByRelevanceFieldEnum;
  MovieLikedByUserOrderByRelevanceInput: MovieLikedByUserOrderByRelevanceInput;
  MovieLikedByUserOrderByWithAggregationInput: MovieLikedByUserOrderByWithAggregationInput;
  MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieLikedByUserScalarFieldEnum: MovieLikedByUserScalarFieldEnum;
  MovieLikedByUserScalarWhereInput: MovieLikedByUserScalarWhereInput;
  MovieLikedByUserScalarWhereWithAggregatesInput: MovieLikedByUserScalarWhereWithAggregatesInput;
  MovieLikedByUserUpdateInput: MovieLikedByUserUpdateInput;
  MovieLikedByUserUpdateManyMutationInput: MovieLikedByUserUpdateManyMutationInput;
  MovieLikedByUserUpdateManyWithWhereWithoutMovieInput: MovieLikedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieLikedByUserUpdateManyWithWhereWithoutUserInput: MovieLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieLikedByUserUpdateManyWithoutMovieNestedInput: MovieLikedByUserUpdateManyWithoutMovieNestedInput;
  MovieLikedByUserUpdateManyWithoutUserNestedInput: MovieLikedByUserUpdateManyWithoutUserNestedInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUpdateWithoutMovieInput: MovieLikedByUserUpdateWithoutMovieInput;
  MovieLikedByUserUpdateWithoutUserInput: MovieLikedByUserUpdateWithoutUserInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUserIdMovieIdCompoundUniqueInput: MovieLikedByUserUserIdMovieIdCompoundUniqueInput;
  MovieLikedByUserWhereInput: MovieLikedByUserWhereInput;
  MovieLikedByUserWhereUniqueInput: MovieLikedByUserWhereUniqueInput;
  MovieList: ResolverTypeWrapper<MovieList>;
  MovieListComment: ResolverTypeWrapper<MovieListComment>;
  MovieListCommentCreateManyMovieListInput: MovieListCommentCreateManyMovieListInput;
  MovieListCommentCreateManyMovieListInputEnvelope: MovieListCommentCreateManyMovieListInputEnvelope;
  MovieListCommentCreateManyUserInput: MovieListCommentCreateManyUserInput;
  MovieListCommentCreateManyUserInputEnvelope: MovieListCommentCreateManyUserInputEnvelope;
  MovieListCommentCreateNestedManyWithoutMovieListInput: MovieListCommentCreateNestedManyWithoutMovieListInput;
  MovieListCommentCreateNestedManyWithoutUserInput: MovieListCommentCreateNestedManyWithoutUserInput;
  MovieListCommentCreateOrConnectWithoutMovieListInput: MovieListCommentCreateOrConnectWithoutMovieListInput;
  MovieListCommentCreateOrConnectWithoutUserInput: MovieListCommentCreateOrConnectWithoutUserInput;
  MovieListCommentCreateWithoutMovieListInput: MovieListCommentCreateWithoutMovieListInput;
  MovieListCommentCreateWithoutUserInput: MovieListCommentCreateWithoutUserInput;
  MovieListCommentListRelationFilter: MovieListCommentListRelationFilter;
  MovieListCommentOrderByRelationAggregateInput: MovieListCommentOrderByRelationAggregateInput;
  MovieListCommentOrderByRelevanceFieldEnum: MovieListCommentOrderByRelevanceFieldEnum;
  MovieListCommentOrderByRelevanceInput: MovieListCommentOrderByRelevanceInput;
  MovieListCommentOrderByWithRelationAndSearchRelevanceInput: MovieListCommentOrderByWithRelationAndSearchRelevanceInput;
  MovieListCommentScalarFieldEnum: MovieListCommentScalarFieldEnum;
  MovieListCommentScalarWhereInput: MovieListCommentScalarWhereInput;
  MovieListCommentUpdateManyMutationInput: MovieListCommentUpdateManyMutationInput;
  MovieListCommentUpdateManyWithWhereWithoutMovieListInput: MovieListCommentUpdateManyWithWhereWithoutMovieListInput;
  MovieListCommentUpdateManyWithWhereWithoutUserInput: MovieListCommentUpdateManyWithWhereWithoutUserInput;
  MovieListCommentUpdateManyWithoutMovieListNestedInput: MovieListCommentUpdateManyWithoutMovieListNestedInput;
  MovieListCommentUpdateManyWithoutUserNestedInput: MovieListCommentUpdateManyWithoutUserNestedInput;
  MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput: MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpdateWithWhereUniqueWithoutUserInput: MovieListCommentUpdateWithWhereUniqueWithoutUserInput;
  MovieListCommentUpdateWithoutMovieListInput: MovieListCommentUpdateWithoutMovieListInput;
  MovieListCommentUpdateWithoutUserInput: MovieListCommentUpdateWithoutUserInput;
  MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput: MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpsertWithWhereUniqueWithoutUserInput: MovieListCommentUpsertWithWhereUniqueWithoutUserInput;
  MovieListCommentWhereInput: MovieListCommentWhereInput;
  MovieListCommentWhereUniqueInput: MovieListCommentWhereUniqueInput;
  MovieListCount: ResolverTypeWrapper<MovieListCount>;
  MovieListCountAggregate: ResolverTypeWrapper<MovieListCountAggregate>;
  MovieListCountOrderByAggregateInput: MovieListCountOrderByAggregateInput;
  MovieListCreateInput: MovieListCreateInput;
  MovieListCreateManyInput: MovieListCreateManyInput;
  MovieListCreateManyMovieListAuthorInput: MovieListCreateManyMovieListAuthorInput;
  MovieListCreateManyMovieListAuthorInputEnvelope: MovieListCreateManyMovieListAuthorInputEnvelope;
  MovieListCreateNestedManyWithoutMovieListAuthorInput: MovieListCreateNestedManyWithoutMovieListAuthorInput;
  MovieListCreateNestedManyWithoutMoviesInput: MovieListCreateNestedManyWithoutMoviesInput;
  MovieListCreateNestedOneWithoutCommentsInput: MovieListCreateNestedOneWithoutCommentsInput;
  MovieListCreateNestedOneWithoutLikedByInput: MovieListCreateNestedOneWithoutLikedByInput;
  MovieListCreateOrConnectWithoutCommentsInput: MovieListCreateOrConnectWithoutCommentsInput;
  MovieListCreateOrConnectWithoutLikedByInput: MovieListCreateOrConnectWithoutLikedByInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutCommentsInput: MovieListCreateWithoutCommentsInput;
  MovieListCreateWithoutLikedByInput: MovieListCreateWithoutLikedByInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
  MovieListCreatetagsInput: MovieListCreatetagsInput;
  MovieListGroupBy: ResolverTypeWrapper<MovieListGroupBy>;
  MovieListLikedByUser: ResolverTypeWrapper<MovieListLikedByUser>;
  MovieListLikedByUserCountAggregate: ResolverTypeWrapper<MovieListLikedByUserCountAggregate>;
  MovieListLikedByUserCountOrderByAggregateInput: MovieListLikedByUserCountOrderByAggregateInput;
  MovieListLikedByUserCreateInput: MovieListLikedByUserCreateInput;
  MovieListLikedByUserCreateManyInput: MovieListLikedByUserCreateManyInput;
  MovieListLikedByUserCreateManyMovieListInput: MovieListLikedByUserCreateManyMovieListInput;
  MovieListLikedByUserCreateManyMovieListInputEnvelope: MovieListLikedByUserCreateManyMovieListInputEnvelope;
  MovieListLikedByUserCreateManyUserInput: MovieListLikedByUserCreateManyUserInput;
  MovieListLikedByUserCreateManyUserInputEnvelope: MovieListLikedByUserCreateManyUserInputEnvelope;
  MovieListLikedByUserCreateNestedManyWithoutMovieListInput: MovieListLikedByUserCreateNestedManyWithoutMovieListInput;
  MovieListLikedByUserCreateNestedManyWithoutUserInput: MovieListLikedByUserCreateNestedManyWithoutUserInput;
  MovieListLikedByUserCreateOrConnectWithoutMovieListInput: MovieListLikedByUserCreateOrConnectWithoutMovieListInput;
  MovieListLikedByUserCreateOrConnectWithoutUserInput: MovieListLikedByUserCreateOrConnectWithoutUserInput;
  MovieListLikedByUserCreateWithoutMovieListInput: MovieListLikedByUserCreateWithoutMovieListInput;
  MovieListLikedByUserCreateWithoutUserInput: MovieListLikedByUserCreateWithoutUserInput;
  MovieListLikedByUserGroupBy: ResolverTypeWrapper<MovieListLikedByUserGroupBy>;
  MovieListLikedByUserListRelationFilter: MovieListLikedByUserListRelationFilter;
  MovieListLikedByUserMaxAggregate: ResolverTypeWrapper<MovieListLikedByUserMaxAggregate>;
  MovieListLikedByUserMaxOrderByAggregateInput: MovieListLikedByUserMaxOrderByAggregateInput;
  MovieListLikedByUserMinAggregate: ResolverTypeWrapper<MovieListLikedByUserMinAggregate>;
  MovieListLikedByUserMinOrderByAggregateInput: MovieListLikedByUserMinOrderByAggregateInput;
  MovieListLikedByUserOrderByRelationAggregateInput: MovieListLikedByUserOrderByRelationAggregateInput;
  MovieListLikedByUserOrderByRelevanceFieldEnum: MovieListLikedByUserOrderByRelevanceFieldEnum;
  MovieListLikedByUserOrderByRelevanceInput: MovieListLikedByUserOrderByRelevanceInput;
  MovieListLikedByUserOrderByWithAggregationInput: MovieListLikedByUserOrderByWithAggregationInput;
  MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieListLikedByUserScalarFieldEnum: MovieListLikedByUserScalarFieldEnum;
  MovieListLikedByUserScalarWhereInput: MovieListLikedByUserScalarWhereInput;
  MovieListLikedByUserScalarWhereWithAggregatesInput: MovieListLikedByUserScalarWhereWithAggregatesInput;
  MovieListLikedByUserUpdateInput: MovieListLikedByUserUpdateInput;
  MovieListLikedByUserUpdateManyMutationInput: MovieListLikedByUserUpdateManyMutationInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput: MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutUserInput: MovieListLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieListLikedByUserUpdateManyWithoutMovieListNestedInput: MovieListLikedByUserUpdateManyWithoutMovieListNestedInput;
  MovieListLikedByUserUpdateManyWithoutUserNestedInput: MovieListLikedByUserUpdateManyWithoutUserNestedInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUpdateWithoutMovieListInput: MovieListLikedByUserUpdateWithoutMovieListInput;
  MovieListLikedByUserUpdateWithoutUserInput: MovieListLikedByUserUpdateWithoutUserInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput: MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput;
  MovieListLikedByUserWhereInput: MovieListLikedByUserWhereInput;
  MovieListLikedByUserWhereUniqueInput: MovieListLikedByUserWhereUniqueInput;
  MovieListListRelationFilter: MovieListListRelationFilter;
  MovieListMaxAggregate: ResolverTypeWrapper<MovieListMaxAggregate>;
  MovieListMaxOrderByAggregateInput: MovieListMaxOrderByAggregateInput;
  MovieListMinAggregate: ResolverTypeWrapper<MovieListMinAggregate>;
  MovieListMinOrderByAggregateInput: MovieListMinOrderByAggregateInput;
  MovieListOrderByRelationAggregateInput: MovieListOrderByRelationAggregateInput;
  MovieListOrderByRelevanceFieldEnum: MovieListOrderByRelevanceFieldEnum;
  MovieListOrderByRelevanceInput: MovieListOrderByRelevanceInput;
  MovieListOrderByWithAggregationInput: MovieListOrderByWithAggregationInput;
  MovieListOrderByWithRelationAndSearchRelevanceInput: MovieListOrderByWithRelationAndSearchRelevanceInput;
  MovieListRelationFilter: MovieListRelationFilter;
  MovieListScalarFieldEnum: MovieListScalarFieldEnum;
  MovieListScalarWhereInput: MovieListScalarWhereInput;
  MovieListScalarWhereWithAggregatesInput: MovieListScalarWhereWithAggregatesInput;
  MovieListSearchCriteriaInput: MovieListSearchCriteriaInput;
  MovieListStats: ResolverTypeWrapper<MovieListStats>;
  MovieListStatsCreateNestedOneWithoutMovieListInput: MovieListStatsCreateNestedOneWithoutMovieListInput;
  MovieListStatsCreateOrConnectWithoutMovieListInput: MovieListStatsCreateOrConnectWithoutMovieListInput;
  MovieListStatsCreateWithoutMovieListInput: MovieListStatsCreateWithoutMovieListInput;
  MovieListStatsNullableRelationFilter: MovieListStatsNullableRelationFilter;
  MovieListStatsOrderByRelevanceFieldEnum: MovieListStatsOrderByRelevanceFieldEnum;
  MovieListStatsOrderByRelevanceInput: MovieListStatsOrderByRelevanceInput;
  MovieListStatsOrderByWithRelationAndSearchRelevanceInput: MovieListStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieListStatsUpdateOneWithoutMovieListNestedInput: MovieListStatsUpdateOneWithoutMovieListNestedInput;
  MovieListStatsUpdateToOneWithWhereWithoutMovieListInput: MovieListStatsUpdateToOneWithWhereWithoutMovieListInput;
  MovieListStatsUpdateWithoutMovieListInput: MovieListStatsUpdateWithoutMovieListInput;
  MovieListStatsUpsertWithoutMovieListInput: MovieListStatsUpsertWithoutMovieListInput;
  MovieListStatsWhereInput: MovieListStatsWhereInput;
  MovieListStatsWhereUniqueInput: MovieListStatsWhereUniqueInput;
  MovieListUpdateInput: MovieListUpdateInput;
  MovieListUpdateManyMutationInput: MovieListUpdateManyMutationInput;
  MovieListUpdateManyWithWhereWithoutMovieListAuthorInput: MovieListUpdateManyWithWhereWithoutMovieListAuthorInput;
  MovieListUpdateManyWithWhereWithoutMoviesInput: MovieListUpdateManyWithWhereWithoutMoviesInput;
  MovieListUpdateManyWithoutMovieListAuthorNestedInput: MovieListUpdateManyWithoutMovieListAuthorNestedInput;
  MovieListUpdateManyWithoutMoviesNestedInput: MovieListUpdateManyWithoutMoviesNestedInput;
  MovieListUpdateOneRequiredWithoutCommentsNestedInput: MovieListUpdateOneRequiredWithoutCommentsNestedInput;
  MovieListUpdateOneRequiredWithoutLikedByNestedInput: MovieListUpdateOneRequiredWithoutLikedByNestedInput;
  MovieListUpdateToOneWithWhereWithoutCommentsInput: MovieListUpdateToOneWithWhereWithoutCommentsInput;
  MovieListUpdateToOneWithWhereWithoutLikedByInput: MovieListUpdateToOneWithWhereWithoutLikedByInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutCommentsInput: MovieListUpdateWithoutCommentsInput;
  MovieListUpdateWithoutLikedByInput: MovieListUpdateWithoutLikedByInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpdatetagsInput: MovieListUpdatetagsInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutCommentsInput: MovieListUpsertWithoutCommentsInput;
  MovieListUpsertWithoutLikedByInput: MovieListUpsertWithoutLikedByInput;
  MovieListWhereInput: MovieListWhereInput;
  MovieListWhereUniqueInput: MovieListWhereUniqueInput;
  MovieMaxAggregate: ResolverTypeWrapper<MovieMaxAggregate>;
  MovieMaxOrderByAggregateInput: MovieMaxOrderByAggregateInput;
  MovieMinAggregate: ResolverTypeWrapper<MovieMinAggregate>;
  MovieMinOrderByAggregateInput: MovieMinOrderByAggregateInput;
  MovieOrderByRelationAggregateInput: MovieOrderByRelationAggregateInput;
  MovieOrderByRelevanceFieldEnum: MovieOrderByRelevanceFieldEnum;
  MovieOrderByRelevanceInput: MovieOrderByRelevanceInput;
  MovieOrderByWithAggregationInput: MovieOrderByWithAggregationInput;
  MovieOrderByWithRelationAndSearchRelevanceInput: MovieOrderByWithRelationAndSearchRelevanceInput;
  MovieRating: ResolverTypeWrapper<MovieRating>;
  MovieRatingAvgAggregate: ResolverTypeWrapper<MovieRatingAvgAggregate>;
  MovieRatingAvgOrderByAggregateInput: MovieRatingAvgOrderByAggregateInput;
  MovieRatingCountAggregate: ResolverTypeWrapper<MovieRatingCountAggregate>;
  MovieRatingCountOrderByAggregateInput: MovieRatingCountOrderByAggregateInput;
  MovieRatingCreateInput: MovieRatingCreateInput;
  MovieRatingCreateManyInput: MovieRatingCreateManyInput;
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateNestedOneWithoutReviewInput: MovieRatingCreateNestedOneWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutReviewInput: MovieRatingCreateOrConnectWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutReviewInput: MovieRatingCreateWithoutReviewInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingGroupBy: ResolverTypeWrapper<MovieRatingGroupBy>;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingMaxAggregate: ResolverTypeWrapper<MovieRatingMaxAggregate>;
  MovieRatingMaxOrderByAggregateInput: MovieRatingMaxOrderByAggregateInput;
  MovieRatingMinAggregate: ResolverTypeWrapper<MovieRatingMinAggregate>;
  MovieRatingMinOrderByAggregateInput: MovieRatingMinOrderByAggregateInput;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceFieldEnum: MovieRatingOrderByRelevanceFieldEnum;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithAggregationInput: MovieRatingOrderByWithAggregationInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarFieldEnum: MovieRatingScalarFieldEnum;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingScalarWhereWithAggregatesInput: MovieRatingScalarWhereWithAggregatesInput;
  MovieRatingSumAggregate: ResolverTypeWrapper<MovieRatingSumAggregate>;
  MovieRatingSumOrderByAggregateInput: MovieRatingSumOrderByAggregateInput;
  MovieRatingUpdateInput: MovieRatingUpdateInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateOneRequiredWithoutReviewNestedInput: MovieRatingUpdateOneRequiredWithoutReviewNestedInput;
  MovieRatingUpdateToOneWithWhereWithoutReviewInput: MovieRatingUpdateToOneWithWhereWithoutReviewInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutReviewInput: MovieRatingUpdateWithoutReviewInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingUpsertWithoutReviewInput: MovieRatingUpsertWithoutReviewInput;
  MovieRatingUserIdMovieIdCompoundUniqueInput: MovieRatingUserIdMovieIdCompoundUniqueInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReview: ResolverTypeWrapper<MovieReview>;
  MovieReviewCount: ResolverTypeWrapper<MovieReviewCount>;
  MovieReviewCountAggregate: ResolverTypeWrapper<MovieReviewCountAggregate>;
  MovieReviewCountOrderByAggregateInput: MovieReviewCountOrderByAggregateInput;
  MovieReviewCreateInput: MovieReviewCreateInput;
  MovieReviewCreateManyInput: MovieReviewCreateManyInput;
  MovieReviewCreateNestedOneWithoutLikedByInput: MovieReviewCreateNestedOneWithoutLikedByInput;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutLikedByInput: MovieReviewCreateOrConnectWithoutLikedByInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutLikedByInput: MovieReviewCreateWithoutLikedByInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewGroupBy: ResolverTypeWrapper<MovieReviewGroupBy>;
  MovieReviewLikedByUser: ResolverTypeWrapper<MovieReviewLikedByUser>;
  MovieReviewLikedByUserCountAggregate: ResolverTypeWrapper<MovieReviewLikedByUserCountAggregate>;
  MovieReviewLikedByUserCountOrderByAggregateInput: MovieReviewLikedByUserCountOrderByAggregateInput;
  MovieReviewLikedByUserCreateInput: MovieReviewLikedByUserCreateInput;
  MovieReviewLikedByUserCreateManyInput: MovieReviewLikedByUserCreateManyInput;
  MovieReviewLikedByUserCreateManyMovieReviewInput: MovieReviewLikedByUserCreateManyMovieReviewInput;
  MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope;
  MovieReviewLikedByUserCreateManyUserInput: MovieReviewLikedByUserCreateManyUserInput;
  MovieReviewLikedByUserCreateManyUserInputEnvelope: MovieReviewLikedByUserCreateManyUserInputEnvelope;
  MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput: MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateNestedManyWithoutUserInput: MovieReviewLikedByUserCreateNestedManyWithoutUserInput;
  MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateOrConnectWithoutUserInput: MovieReviewLikedByUserCreateOrConnectWithoutUserInput;
  MovieReviewLikedByUserCreateWithoutMovieReviewInput: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateWithoutUserInput: MovieReviewLikedByUserCreateWithoutUserInput;
  MovieReviewLikedByUserGroupBy: ResolverTypeWrapper<MovieReviewLikedByUserGroupBy>;
  MovieReviewLikedByUserListRelationFilter: MovieReviewLikedByUserListRelationFilter;
  MovieReviewLikedByUserMaxAggregate: ResolverTypeWrapper<MovieReviewLikedByUserMaxAggregate>;
  MovieReviewLikedByUserMaxOrderByAggregateInput: MovieReviewLikedByUserMaxOrderByAggregateInput;
  MovieReviewLikedByUserMinAggregate: ResolverTypeWrapper<MovieReviewLikedByUserMinAggregate>;
  MovieReviewLikedByUserMinOrderByAggregateInput: MovieReviewLikedByUserMinOrderByAggregateInput;
  MovieReviewLikedByUserOrderByRelationAggregateInput: MovieReviewLikedByUserOrderByRelationAggregateInput;
  MovieReviewLikedByUserOrderByRelevanceFieldEnum: MovieReviewLikedByUserOrderByRelevanceFieldEnum;
  MovieReviewLikedByUserOrderByRelevanceInput: MovieReviewLikedByUserOrderByRelevanceInput;
  MovieReviewLikedByUserOrderByWithAggregationInput: MovieReviewLikedByUserOrderByWithAggregationInput;
  MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewLikedByUserScalarFieldEnum: MovieReviewLikedByUserScalarFieldEnum;
  MovieReviewLikedByUserScalarWhereInput: MovieReviewLikedByUserScalarWhereInput;
  MovieReviewLikedByUserScalarWhereWithAggregatesInput: MovieReviewLikedByUserScalarWhereWithAggregatesInput;
  MovieReviewLikedByUserUpdateInput: MovieReviewLikedByUserUpdateInput;
  MovieReviewLikedByUserUpdateManyMutationInput: MovieReviewLikedByUserUpdateManyMutationInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput: MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput;
  MovieReviewLikedByUserUpdateManyWithoutUserNestedInput: MovieReviewLikedByUserUpdateManyWithoutUserNestedInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUpdateWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithoutUserInput: MovieReviewLikedByUserUpdateWithoutUserInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput: MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput;
  MovieReviewLikedByUserWhereInput: MovieReviewLikedByUserWhereInput;
  MovieReviewLikedByUserWhereUniqueInput: MovieReviewLikedByUserWhereUniqueInput;
  MovieReviewMaxAggregate: ResolverTypeWrapper<MovieReviewMaxAggregate>;
  MovieReviewMaxOrderByAggregateInput: MovieReviewMaxOrderByAggregateInput;
  MovieReviewMinAggregate: ResolverTypeWrapper<MovieReviewMinAggregate>;
  MovieReviewMinOrderByAggregateInput: MovieReviewMinOrderByAggregateInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceFieldEnum: MovieReviewOrderByRelevanceFieldEnum;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithAggregationInput: MovieReviewOrderByWithAggregationInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewRelationFilter: MovieReviewRelationFilter;
  MovieReviewScalarFieldEnum: MovieReviewScalarFieldEnum;
  MovieReviewScalarWhereWithAggregatesInput: MovieReviewScalarWhereWithAggregatesInput;
  MovieReviewUpdateInput: MovieReviewUpdateInput;
  MovieReviewUpdateManyMutationInput: MovieReviewUpdateManyMutationInput;
  MovieReviewUpdateOneRequiredWithoutLikedByNestedInput: MovieReviewUpdateOneRequiredWithoutLikedByNestedInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutLikedByInput: MovieReviewUpdateToOneWithWhereWithoutLikedByInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutLikedByInput: MovieReviewUpdateWithoutLikedByInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
  MovieReviewUpsertWithoutLikedByInput: MovieReviewUpsertWithoutLikedByInput;
  MovieReviewUpsertWithoutRatingInput: MovieReviewUpsertWithoutRatingInput;
  MovieReviewWhereInput: MovieReviewWhereInput;
  MovieReviewWhereUniqueInput: MovieReviewWhereUniqueInput;
  MovieScalarFieldEnum: MovieScalarFieldEnum;
  MovieScalarWhereInput: MovieScalarWhereInput;
  MovieScalarWhereWithAggregatesInput: MovieScalarWhereWithAggregatesInput;
  MovieSpokenLanguage: ResolverTypeWrapper<MovieSpokenLanguage>;
  MovieSpokenLanguageCount: ResolverTypeWrapper<MovieSpokenLanguageCount>;
  MovieSpokenLanguageCountAggregate: ResolverTypeWrapper<MovieSpokenLanguageCountAggregate>;
  MovieSpokenLanguageCountOrderByAggregateInput: MovieSpokenLanguageCountOrderByAggregateInput;
  MovieSpokenLanguageCreateInput: MovieSpokenLanguageCreateInput;
  MovieSpokenLanguageCreateManyInput: MovieSpokenLanguageCreateManyInput;
  MovieSpokenLanguageCreateNestedManyWithoutMoviesInput: MovieSpokenLanguageCreateNestedManyWithoutMoviesInput;
  MovieSpokenLanguageCreateOrConnectWithoutMoviesInput: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput;
  MovieSpokenLanguageCreateWithoutMoviesInput: MovieSpokenLanguageCreateWithoutMoviesInput;
  MovieSpokenLanguageGroupBy: ResolverTypeWrapper<MovieSpokenLanguageGroupBy>;
  MovieSpokenLanguageListRelationFilter: MovieSpokenLanguageListRelationFilter;
  MovieSpokenLanguageMaxAggregate: ResolverTypeWrapper<MovieSpokenLanguageMaxAggregate>;
  MovieSpokenLanguageMaxOrderByAggregateInput: MovieSpokenLanguageMaxOrderByAggregateInput;
  MovieSpokenLanguageMinAggregate: ResolverTypeWrapper<MovieSpokenLanguageMinAggregate>;
  MovieSpokenLanguageMinOrderByAggregateInput: MovieSpokenLanguageMinOrderByAggregateInput;
  MovieSpokenLanguageOrderByRelationAggregateInput: MovieSpokenLanguageOrderByRelationAggregateInput;
  MovieSpokenLanguageOrderByRelevanceFieldEnum: MovieSpokenLanguageOrderByRelevanceFieldEnum;
  MovieSpokenLanguageOrderByRelevanceInput: MovieSpokenLanguageOrderByRelevanceInput;
  MovieSpokenLanguageOrderByWithAggregationInput: MovieSpokenLanguageOrderByWithAggregationInput;
  MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput: MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput;
  MovieSpokenLanguageScalarFieldEnum: MovieSpokenLanguageScalarFieldEnum;
  MovieSpokenLanguageScalarWhereInput: MovieSpokenLanguageScalarWhereInput;
  MovieSpokenLanguageScalarWhereWithAggregatesInput: MovieSpokenLanguageScalarWhereWithAggregatesInput;
  MovieSpokenLanguageUpdateInput: MovieSpokenLanguageUpdateInput;
  MovieSpokenLanguageUpdateManyMutationInput: MovieSpokenLanguageUpdateManyMutationInput;
  MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput: MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput;
  MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput: MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput;
  MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageUpdateWithoutMoviesInput: MovieSpokenLanguageUpdateWithoutMoviesInput;
  MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageWhereInput: MovieSpokenLanguageWhereInput;
  MovieSpokenLanguageWhereUniqueInput: MovieSpokenLanguageWhereUniqueInput;
  MovieStats: ResolverTypeWrapper<MovieStats>;
  MovieStatsCreateNestedOneWithoutMovieInput: MovieStatsCreateNestedOneWithoutMovieInput;
  MovieStatsCreateOrConnectWithoutMovieInput: MovieStatsCreateOrConnectWithoutMovieInput;
  MovieStatsCreateWithoutMovieInput: MovieStatsCreateWithoutMovieInput;
  MovieStatsNullableRelationFilter: MovieStatsNullableRelationFilter;
  MovieStatsOrderByRelevanceFieldEnum: MovieStatsOrderByRelevanceFieldEnum;
  MovieStatsOrderByRelevanceInput: MovieStatsOrderByRelevanceInput;
  MovieStatsOrderByWithRelationAndSearchRelevanceInput: MovieStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieStatsUpdateOneWithoutMovieNestedInput: MovieStatsUpdateOneWithoutMovieNestedInput;
  MovieStatsUpdateToOneWithWhereWithoutMovieInput: MovieStatsUpdateToOneWithWhereWithoutMovieInput;
  MovieStatsUpdateWithoutMovieInput: MovieStatsUpdateWithoutMovieInput;
  MovieStatsUpsertWithoutMovieInput: MovieStatsUpsertWithoutMovieInput;
  MovieStatsWhereInput: MovieStatsWhereInput;
  MovieStatsWhereUniqueInput: MovieStatsWhereUniqueInput;
  MovieStudio: ResolverTypeWrapper<MovieStudio>;
  MovieStudioCount: ResolverTypeWrapper<MovieStudioCount>;
  MovieStudioCreateNestedManyWithoutMoviesInput: MovieStudioCreateNestedManyWithoutMoviesInput;
  MovieStudioCreateOrConnectWithoutMoviesInput: MovieStudioCreateOrConnectWithoutMoviesInput;
  MovieStudioCreateWithoutMoviesInput: MovieStudioCreateWithoutMoviesInput;
  MovieStudioListRelationFilter: MovieStudioListRelationFilter;
  MovieStudioOrderByRelationAggregateInput: MovieStudioOrderByRelationAggregateInput;
  MovieStudioOrderByRelevanceFieldEnum: MovieStudioOrderByRelevanceFieldEnum;
  MovieStudioOrderByRelevanceInput: MovieStudioOrderByRelevanceInput;
  MovieStudioOrderByWithRelationAndSearchRelevanceInput: MovieStudioOrderByWithRelationAndSearchRelevanceInput;
  MovieStudioScalarFieldEnum: MovieStudioScalarFieldEnum;
  MovieStudioScalarWhereInput: MovieStudioScalarWhereInput;
  MovieStudioUpdateManyMutationInput: MovieStudioUpdateManyMutationInput;
  MovieStudioUpdateManyWithWhereWithoutMoviesInput: MovieStudioUpdateManyWithWhereWithoutMoviesInput;
  MovieStudioUpdateManyWithoutMoviesNestedInput: MovieStudioUpdateManyWithoutMoviesNestedInput;
  MovieStudioUpdateWithWhereUniqueWithoutMoviesInput: MovieStudioUpdateWithWhereUniqueWithoutMoviesInput;
  MovieStudioUpdateWithoutMoviesInput: MovieStudioUpdateWithoutMoviesInput;
  MovieStudioUpsertWithWhereUniqueWithoutMoviesInput: MovieStudioUpsertWithWhereUniqueWithoutMoviesInput;
  MovieStudioWhereInput: MovieStudioWhereInput;
  MovieStudioWhereUniqueInput: MovieStudioWhereUniqueInput;
  MovieUpdateInput: MovieUpdateInput;
  MovieUpdateManyMutationInput: MovieUpdateManyMutationInput;
  MovieUpdateManyWithWhereWithoutGenresInput: MovieUpdateManyWithWhereWithoutGenresInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithWhereWithoutSpokenLanguagesInput: MovieUpdateManyWithWhereWithoutSpokenLanguagesInput;
  MovieUpdateManyWithoutGenresNestedInput: MovieUpdateManyWithoutGenresNestedInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateManyWithoutSpokenLanguagesNestedInput: MovieUpdateManyWithoutSpokenLanguagesNestedInput;
  MovieUpdateOneRequiredWithoutCrewMembersNestedInput: MovieUpdateOneRequiredWithoutCrewMembersNestedInput;
  MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput: MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput;
  MovieUpdateOneRequiredWithoutLikedByNestedInput: MovieUpdateOneRequiredWithoutLikedByNestedInput;
  MovieUpdateOneRequiredWithoutRatedByNestedInput: MovieUpdateOneRequiredWithoutRatedByNestedInput;
  MovieUpdateOneRequiredWithoutWatchedByNestedInput: MovieUpdateOneRequiredWithoutWatchedByNestedInput;
  MovieUpdateToOneWithWhereWithoutCrewMembersInput: MovieUpdateToOneWithWhereWithoutCrewMembersInput;
  MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput: MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateToOneWithWhereWithoutLikedByInput: MovieUpdateToOneWithWhereWithoutLikedByInput;
  MovieUpdateToOneWithWhereWithoutRatedByInput: MovieUpdateToOneWithWhereWithoutRatedByInput;
  MovieUpdateToOneWithWhereWithoutWatchedByInput: MovieUpdateToOneWithWhereWithoutWatchedByInput;
  MovieUpdateWithWhereUniqueWithoutGenresInput: MovieUpdateWithWhereUniqueWithoutGenresInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput: MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput;
  MovieUpdateWithoutCrewMembersInput: MovieUpdateWithoutCrewMembersInput;
  MovieUpdateWithoutGenresInput: MovieUpdateWithoutGenresInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutLikedByInput: MovieUpdateWithoutLikedByInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatedByInput: MovieUpdateWithoutRatedByInput;
  MovieUpdateWithoutSpokenLanguagesInput: MovieUpdateWithoutSpokenLanguagesInput;
  MovieUpdateWithoutWatchedByInput: MovieUpdateWithoutWatchedByInput;
  MovieUpsertWithWhereUniqueWithoutGenresInput: MovieUpsertWithWhereUniqueWithoutGenresInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput: MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput;
  MovieUpsertWithoutCrewMembersInput: MovieUpsertWithoutCrewMembersInput;
  MovieUpsertWithoutInWatchlistByUsersInput: MovieUpsertWithoutInWatchlistByUsersInput;
  MovieUpsertWithoutLikedByInput: MovieUpsertWithoutLikedByInput;
  MovieUpsertWithoutRatedByInput: MovieUpsertWithoutRatedByInput;
  MovieUpsertWithoutWatchedByInput: MovieUpsertWithoutWatchedByInput;
  MovieWatchedByUser: ResolverTypeWrapper<MovieWatchedByUser>;
  MovieWatchedByUserCountAggregate: ResolverTypeWrapper<MovieWatchedByUserCountAggregate>;
  MovieWatchedByUserCountOrderByAggregateInput: MovieWatchedByUserCountOrderByAggregateInput;
  MovieWatchedByUserCreateInput: MovieWatchedByUserCreateInput;
  MovieWatchedByUserCreateManyInput: MovieWatchedByUserCreateManyInput;
  MovieWatchedByUserCreateManyMovieInput: MovieWatchedByUserCreateManyMovieInput;
  MovieWatchedByUserCreateManyMovieInputEnvelope: MovieWatchedByUserCreateManyMovieInputEnvelope;
  MovieWatchedByUserCreateManyUserInput: MovieWatchedByUserCreateManyUserInput;
  MovieWatchedByUserCreateManyUserInputEnvelope: MovieWatchedByUserCreateManyUserInputEnvelope;
  MovieWatchedByUserCreateNestedManyWithoutMovieInput: MovieWatchedByUserCreateNestedManyWithoutMovieInput;
  MovieWatchedByUserCreateNestedManyWithoutUserInput: MovieWatchedByUserCreateNestedManyWithoutUserInput;
  MovieWatchedByUserCreateOrConnectWithoutMovieInput: MovieWatchedByUserCreateOrConnectWithoutMovieInput;
  MovieWatchedByUserCreateOrConnectWithoutUserInput: MovieWatchedByUserCreateOrConnectWithoutUserInput;
  MovieWatchedByUserCreateWithoutMovieInput: MovieWatchedByUserCreateWithoutMovieInput;
  MovieWatchedByUserCreateWithoutUserInput: MovieWatchedByUserCreateWithoutUserInput;
  MovieWatchedByUserGroupBy: ResolverTypeWrapper<MovieWatchedByUserGroupBy>;
  MovieWatchedByUserListRelationFilter: MovieWatchedByUserListRelationFilter;
  MovieWatchedByUserMaxAggregate: ResolverTypeWrapper<MovieWatchedByUserMaxAggregate>;
  MovieWatchedByUserMaxOrderByAggregateInput: MovieWatchedByUserMaxOrderByAggregateInput;
  MovieWatchedByUserMinAggregate: ResolverTypeWrapper<MovieWatchedByUserMinAggregate>;
  MovieWatchedByUserMinOrderByAggregateInput: MovieWatchedByUserMinOrderByAggregateInput;
  MovieWatchedByUserOrderByRelationAggregateInput: MovieWatchedByUserOrderByRelationAggregateInput;
  MovieWatchedByUserOrderByRelevanceFieldEnum: MovieWatchedByUserOrderByRelevanceFieldEnum;
  MovieWatchedByUserOrderByRelevanceInput: MovieWatchedByUserOrderByRelevanceInput;
  MovieWatchedByUserOrderByWithAggregationInput: MovieWatchedByUserOrderByWithAggregationInput;
  MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput: MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieWatchedByUserScalarFieldEnum: MovieWatchedByUserScalarFieldEnum;
  MovieWatchedByUserScalarWhereInput: MovieWatchedByUserScalarWhereInput;
  MovieWatchedByUserScalarWhereWithAggregatesInput: MovieWatchedByUserScalarWhereWithAggregatesInput;
  MovieWatchedByUserUpdateInput: MovieWatchedByUserUpdateInput;
  MovieWatchedByUserUpdateManyMutationInput: MovieWatchedByUserUpdateManyMutationInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput: MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutUserInput: MovieWatchedByUserUpdateManyWithWhereWithoutUserInput;
  MovieWatchedByUserUpdateManyWithoutMovieNestedInput: MovieWatchedByUserUpdateManyWithoutMovieNestedInput;
  MovieWatchedByUserUpdateManyWithoutUserNestedInput: MovieWatchedByUserUpdateManyWithoutUserNestedInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUpdateWithoutMovieInput: MovieWatchedByUserUpdateWithoutMovieInput;
  MovieWatchedByUserUpdateWithoutUserInput: MovieWatchedByUserUpdateWithoutUserInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUserIdMovieIdCompoundUniqueInput: MovieWatchedByUserUserIdMovieIdCompoundUniqueInput;
  MovieWatchedByUserWhereInput: MovieWatchedByUserWhereInput;
  MovieWatchedByUserWhereUniqueInput: MovieWatchedByUserWhereUniqueInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MoviefireAppUserRole: MoviefireAppUserRole;
  MoviesSearchCriteriaInput: MoviesSearchCriteriaInput;
  MovifierAppUser: ResolverTypeWrapper<MovifierAppUser>;
  MovifierAppUserCount: ResolverTypeWrapper<MovifierAppUserCount>;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateNestedOneWithoutLikedMoviesInput: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatedMoviesInput: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchlistInput: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
  MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateOrConnectWithoutLikedMoviesInput: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput: MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatedMoviesInput: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput: MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutLikedMovieReviewsInput: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateWithoutLikedMoviesInput: MovifierAppUserCreateWithoutLikedMoviesInput;
  MovifierAppUserCreateWithoutMovieListLikedByUserInput: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatedMoviesInput: MovifierAppUserCreateWithoutRatedMoviesInput;
  MovifierAppUserCreateWithoutWatchedMoviesInput: MovifierAppUserCreateWithoutWatchedMoviesInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserOrderByRelevanceFieldEnum: MovifierAppUserOrderByRelevanceFieldEnum;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserScalarFieldEnum: MovifierAppUserScalarFieldEnum;
  MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutLikedMovieReviewsInput: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateWithoutLikedMoviesInput: MovifierAppUserUpdateWithoutLikedMoviesInput;
  MovifierAppUserUpdateWithoutMovieListLikedByUserInput: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatedMoviesInput: MovifierAppUserUpdateWithoutRatedMoviesInput;
  MovifierAppUserUpdateWithoutWatchedMoviesInput: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutLikedMovieReviewsInput: MovifierAppUserUpsertWithoutLikedMovieReviewsInput;
  MovifierAppUserUpsertWithoutLikedMoviesInput: MovifierAppUserUpsertWithoutLikedMoviesInput;
  MovifierAppUserUpsertWithoutMovieListLikedByUserInput: MovifierAppUserUpsertWithoutMovieListLikedByUserInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatedMoviesInput: MovifierAppUserUpsertWithoutRatedMoviesInput;
  MovifierAppUserUpsertWithoutWatchedMoviesInput: MovifierAppUserUpsertWithoutWatchedMoviesInput;
  MovifierAppUserUpsertWithoutWatchlistInput: MovifierAppUserUpsertWithoutWatchlistInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedFloatWithAggregatesFilter: NestedFloatWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableListFilter: StringNullableListFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  UserLoginInput: UserLoginInput;
  UserLoginOutput: ResolverTypeWrapper<UserLoginOutput>;
  UserMovieWatchlist: ResolverTypeWrapper<UserMovieWatchlist>;
  UserMovieWatchlistCountAggregate: ResolverTypeWrapper<UserMovieWatchlistCountAggregate>;
  UserMovieWatchlistCountOrderByAggregateInput: UserMovieWatchlistCountOrderByAggregateInput;
  UserMovieWatchlistCreateInput: UserMovieWatchlistCreateInput;
  UserMovieWatchlistCreateManyInput: UserMovieWatchlistCreateManyInput;
  UserMovieWatchlistCreateManyMovieInput: UserMovieWatchlistCreateManyMovieInput;
  UserMovieWatchlistCreateManyMovieInputEnvelope: UserMovieWatchlistCreateManyMovieInputEnvelope;
  UserMovieWatchlistCreateManyUserInput: UserMovieWatchlistCreateManyUserInput;
  UserMovieWatchlistCreateManyUserInputEnvelope: UserMovieWatchlistCreateManyUserInputEnvelope;
  UserMovieWatchlistCreateNestedManyWithoutMovieInput: UserMovieWatchlistCreateNestedManyWithoutMovieInput;
  UserMovieWatchlistCreateNestedManyWithoutUserInput: UserMovieWatchlistCreateNestedManyWithoutUserInput;
  UserMovieWatchlistCreateOrConnectWithoutMovieInput: UserMovieWatchlistCreateOrConnectWithoutMovieInput;
  UserMovieWatchlistCreateOrConnectWithoutUserInput: UserMovieWatchlistCreateOrConnectWithoutUserInput;
  UserMovieWatchlistCreateWithoutMovieInput: UserMovieWatchlistCreateWithoutMovieInput;
  UserMovieWatchlistCreateWithoutUserInput: UserMovieWatchlistCreateWithoutUserInput;
  UserMovieWatchlistGroupBy: ResolverTypeWrapper<UserMovieWatchlistGroupBy>;
  UserMovieWatchlistListRelationFilter: UserMovieWatchlistListRelationFilter;
  UserMovieWatchlistMaxAggregate: ResolverTypeWrapper<UserMovieWatchlistMaxAggregate>;
  UserMovieWatchlistMaxOrderByAggregateInput: UserMovieWatchlistMaxOrderByAggregateInput;
  UserMovieWatchlistMinAggregate: ResolverTypeWrapper<UserMovieWatchlistMinAggregate>;
  UserMovieWatchlistMinOrderByAggregateInput: UserMovieWatchlistMinOrderByAggregateInput;
  UserMovieWatchlistOrderByRelationAggregateInput: UserMovieWatchlistOrderByRelationAggregateInput;
  UserMovieWatchlistOrderByRelevanceFieldEnum: UserMovieWatchlistOrderByRelevanceFieldEnum;
  UserMovieWatchlistOrderByRelevanceInput: UserMovieWatchlistOrderByRelevanceInput;
  UserMovieWatchlistOrderByWithAggregationInput: UserMovieWatchlistOrderByWithAggregationInput;
  UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput: UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput;
  UserMovieWatchlistScalarFieldEnum: UserMovieWatchlistScalarFieldEnum;
  UserMovieWatchlistScalarWhereInput: UserMovieWatchlistScalarWhereInput;
  UserMovieWatchlistScalarWhereWithAggregatesInput: UserMovieWatchlistScalarWhereWithAggregatesInput;
  UserMovieWatchlistUpdateInput: UserMovieWatchlistUpdateInput;
  UserMovieWatchlistUpdateManyMutationInput: UserMovieWatchlistUpdateManyMutationInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput: UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutUserInput: UserMovieWatchlistUpdateManyWithWhereWithoutUserInput;
  UserMovieWatchlistUpdateManyWithoutMovieNestedInput: UserMovieWatchlistUpdateManyWithoutMovieNestedInput;
  UserMovieWatchlistUpdateManyWithoutUserNestedInput: UserMovieWatchlistUpdateManyWithoutUserNestedInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUpdateWithoutMovieInput: UserMovieWatchlistUpdateWithoutMovieInput;
  UserMovieWatchlistUpdateWithoutUserInput: UserMovieWatchlistUpdateWithoutUserInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUserIdMovieIdCompoundUniqueInput: UserMovieWatchlistUserIdMovieIdCompoundUniqueInput;
  UserMovieWatchlistWhereInput: UserMovieWatchlistWhereInput;
  UserMovieWatchlistWhereUniqueInput: UserMovieWatchlistWhereUniqueInput;
  UserRegisterOutput: ResolverTypeWrapper<UserRegisterOutput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateGenre: AggregateGenre;
  AggregateMovie: AggregateMovie;
  AggregateMovieCrewMember: AggregateMovieCrewMember;
  AggregateMovieCrewMemberType: AggregateMovieCrewMemberType;
  AggregateMovieLikedByUser: AggregateMovieLikedByUser;
  AggregateMovieList: AggregateMovieList;
  AggregateMovieListLikedByUser: AggregateMovieListLikedByUser;
  AggregateMovieRating: AggregateMovieRating;
  AggregateMovieReview: AggregateMovieReview;
  AggregateMovieReviewLikedByUser: AggregateMovieReviewLikedByUser;
  AggregateMovieSpokenLanguage: AggregateMovieSpokenLanguage;
  AggregateMovieWatchedByUser: AggregateMovieWatchedByUser;
  AggregateUserMovieWatchlist: AggregateUserMovieWatchlist;
  Boolean: Scalars['Boolean']['output'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: Scalars['DateTimeISO']['output'];
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Decades: Decades;
  EnumMoviefireAppUserRoleFieldUpdateOperationsInput: EnumMoviefireAppUserRoleFieldUpdateOperationsInput;
  EnumMoviefireAppUserRoleFilter: EnumMoviefireAppUserRoleFilter;
  Float: Scalars['Float']['output'];
  FloatFieldUpdateOperationsInput: FloatFieldUpdateOperationsInput;
  FloatFilter: FloatFilter;
  FloatWithAggregatesFilter: FloatWithAggregatesFilter;
  Genre: Genre;
  GenreCount: GenreCount;
  GenreCountAggregate: GenreCountAggregate;
  GenreCountOrderByAggregateInput: GenreCountOrderByAggregateInput;
  GenreCreateInput: GenreCreateInput;
  GenreCreateManyInput: GenreCreateManyInput;
  GenreCreateNestedManyWithoutMoviesInput: GenreCreateNestedManyWithoutMoviesInput;
  GenreCreateOrConnectWithoutMoviesInput: GenreCreateOrConnectWithoutMoviesInput;
  GenreCreateWithoutMoviesInput: GenreCreateWithoutMoviesInput;
  GenreGroupBy: GenreGroupBy;
  GenreListRelationFilter: GenreListRelationFilter;
  GenreMaxAggregate: GenreMaxAggregate;
  GenreMaxOrderByAggregateInput: GenreMaxOrderByAggregateInput;
  GenreMinAggregate: GenreMinAggregate;
  GenreMinOrderByAggregateInput: GenreMinOrderByAggregateInput;
  GenreOrderByRelationAggregateInput: GenreOrderByRelationAggregateInput;
  GenreOrderByRelevanceInput: GenreOrderByRelevanceInput;
  GenreOrderByWithAggregationInput: GenreOrderByWithAggregationInput;
  GenreOrderByWithRelationAndSearchRelevanceInput: GenreOrderByWithRelationAndSearchRelevanceInput;
  GenreScalarWhereInput: GenreScalarWhereInput;
  GenreScalarWhereWithAggregatesInput: GenreScalarWhereWithAggregatesInput;
  GenreUpdateInput: GenreUpdateInput;
  GenreUpdateManyMutationInput: GenreUpdateManyMutationInput;
  GenreUpdateManyWithWhereWithoutMoviesInput: GenreUpdateManyWithWhereWithoutMoviesInput;
  GenreUpdateManyWithoutMoviesNestedInput: GenreUpdateManyWithoutMoviesNestedInput;
  GenreUpdateWithWhereUniqueWithoutMoviesInput: GenreUpdateWithWhereUniqueWithoutMoviesInput;
  GenreUpdateWithoutMoviesInput: GenreUpdateWithoutMoviesInput;
  GenreUpsertWithWhereUniqueWithoutMoviesInput: GenreUpsertWithWhereUniqueWithoutMoviesInput;
  GenreWhereInput: GenreWhereInput;
  GenreWhereUniqueInput: GenreWhereUniqueInput;
  Int: Scalars['Int']['output'];
  IntFieldUpdateOperationsInput: IntFieldUpdateOperationsInput;
  IntFilter: IntFilter;
  IntWithAggregatesFilter: IntWithAggregatesFilter;
  Movie: Movie;
  MovieCount: MovieCount;
  MovieCountAggregate: MovieCountAggregate;
  MovieCountOrderByAggregateInput: MovieCountOrderByAggregateInput;
  MovieCreateInput: MovieCreateInput;
  MovieCreateManyInput: MovieCreateManyInput;
  MovieCreateNestedManyWithoutGenresInput: MovieCreateNestedManyWithoutGenresInput;
  MovieCreateNestedManyWithoutMovieListsInput: MovieCreateNestedManyWithoutMovieListsInput;
  MovieCreateNestedManyWithoutSpokenLanguagesInput: MovieCreateNestedManyWithoutSpokenLanguagesInput;
  MovieCreateNestedOneWithoutCrewMembersInput: MovieCreateNestedOneWithoutCrewMembersInput;
  MovieCreateNestedOneWithoutInWatchlistByUsersInput: MovieCreateNestedOneWithoutInWatchlistByUsersInput;
  MovieCreateNestedOneWithoutLikedByInput: MovieCreateNestedOneWithoutLikedByInput;
  MovieCreateNestedOneWithoutRatedByInput: MovieCreateNestedOneWithoutRatedByInput;
  MovieCreateNestedOneWithoutWatchedByInput: MovieCreateNestedOneWithoutWatchedByInput;
  MovieCreateOrConnectWithoutCrewMembersInput: MovieCreateOrConnectWithoutCrewMembersInput;
  MovieCreateOrConnectWithoutGenresInput: MovieCreateOrConnectWithoutGenresInput;
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: MovieCreateOrConnectWithoutInWatchlistByUsersInput;
  MovieCreateOrConnectWithoutLikedByInput: MovieCreateOrConnectWithoutLikedByInput;
  MovieCreateOrConnectWithoutMovieListsInput: MovieCreateOrConnectWithoutMovieListsInput;
  MovieCreateOrConnectWithoutRatedByInput: MovieCreateOrConnectWithoutRatedByInput;
  MovieCreateOrConnectWithoutSpokenLanguagesInput: MovieCreateOrConnectWithoutSpokenLanguagesInput;
  MovieCreateOrConnectWithoutWatchedByInput: MovieCreateOrConnectWithoutWatchedByInput;
  MovieCreateWithoutCrewMembersInput: MovieCreateWithoutCrewMembersInput;
  MovieCreateWithoutGenresInput: MovieCreateWithoutGenresInput;
  MovieCreateWithoutInWatchlistByUsersInput: MovieCreateWithoutInWatchlistByUsersInput;
  MovieCreateWithoutLikedByInput: MovieCreateWithoutLikedByInput;
  MovieCreateWithoutMovieListsInput: MovieCreateWithoutMovieListsInput;
  MovieCreateWithoutRatedByInput: MovieCreateWithoutRatedByInput;
  MovieCreateWithoutSpokenLanguagesInput: MovieCreateWithoutSpokenLanguagesInput;
  MovieCreateWithoutWatchedByInput: MovieCreateWithoutWatchedByInput;
  MovieCrewMember: MovieCrewMember;
  MovieCrewMemberAvgAggregate: MovieCrewMemberAvgAggregate;
  MovieCrewMemberAvgOrderByAggregateInput: MovieCrewMemberAvgOrderByAggregateInput;
  MovieCrewMemberCount: MovieCrewMemberCount;
  MovieCrewMemberCountAggregate: MovieCrewMemberCountAggregate;
  MovieCrewMemberCountOrderByAggregateInput: MovieCrewMemberCountOrderByAggregateInput;
  MovieCrewMemberCreateInput: MovieCrewMemberCreateInput;
  MovieCrewMemberCreateManyInput: MovieCrewMemberCreateManyInput;
  MovieCrewMemberCreateNestedOneWithoutMoviesInput: MovieCrewMemberCreateNestedOneWithoutMoviesInput;
  MovieCrewMemberCreateOrConnectWithoutMoviesInput: MovieCrewMemberCreateOrConnectWithoutMoviesInput;
  MovieCrewMemberCreateWithoutMoviesInput: MovieCrewMemberCreateWithoutMoviesInput;
  MovieCrewMemberGroupBy: MovieCrewMemberGroupBy;
  MovieCrewMemberMaxAggregate: MovieCrewMemberMaxAggregate;
  MovieCrewMemberMaxOrderByAggregateInput: MovieCrewMemberMaxOrderByAggregateInput;
  MovieCrewMemberMinAggregate: MovieCrewMemberMinAggregate;
  MovieCrewMemberMinOrderByAggregateInput: MovieCrewMemberMinOrderByAggregateInput;
  MovieCrewMemberOnMovie: MovieCrewMemberOnMovie;
  MovieCrewMemberOnMovieCreateManyCrewMemberInput: MovieCrewMemberOnMovieCreateManyCrewMemberInput;
  MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope: MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope;
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope;
  MovieCrewMemberOnMovieCreateManyMovieInput: MovieCrewMemberOnMovieCreateManyMovieInput;
  MovieCrewMemberOnMovieCreateManyMovieInputEnvelope: MovieCrewMemberOnMovieCreateManyMovieInputEnvelope;
  MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput: MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput: MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput;
  MovieCrewMemberOnMovieCreateWithoutCrewMemberInput: MovieCrewMemberOnMovieCreateWithoutCrewMemberInput;
  MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieCreateWithoutMovieInput: MovieCrewMemberOnMovieCreateWithoutMovieInput;
  MovieCrewMemberOnMovieListRelationFilter: MovieCrewMemberOnMovieListRelationFilter;
  MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput: MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput;
  MovieCrewMemberOnMovieOrderByRelationAggregateInput: MovieCrewMemberOnMovieOrderByRelationAggregateInput;
  MovieCrewMemberOnMovieOrderByRelevanceInput: MovieCrewMemberOnMovieOrderByRelevanceInput;
  MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberOnMovieScalarWhereInput: MovieCrewMemberOnMovieScalarWhereInput;
  MovieCrewMemberOnMovieUpdateManyMutationInput: MovieCrewMemberOnMovieUpdateManyMutationInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput: MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput;
  MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput: MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput: MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpdateWithoutMovieInput: MovieCrewMemberOnMovieUpdateWithoutMovieInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput;
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput: MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput;
  MovieCrewMemberOnMovieWhereInput: MovieCrewMemberOnMovieWhereInput;
  MovieCrewMemberOnMovieWhereUniqueInput: MovieCrewMemberOnMovieWhereUniqueInput;
  MovieCrewMemberOrderByRelevanceInput: MovieCrewMemberOrderByRelevanceInput;
  MovieCrewMemberOrderByWithAggregationInput: MovieCrewMemberOrderByWithAggregationInput;
  MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberRelationFilter: MovieCrewMemberRelationFilter;
  MovieCrewMemberScalarWhereWithAggregatesInput: MovieCrewMemberScalarWhereWithAggregatesInput;
  MovieCrewMemberSumAggregate: MovieCrewMemberSumAggregate;
  MovieCrewMemberSumOrderByAggregateInput: MovieCrewMemberSumOrderByAggregateInput;
  MovieCrewMemberType: MovieCrewMemberType;
  MovieCrewMemberTypeCount: MovieCrewMemberTypeCount;
  MovieCrewMemberTypeCountAggregate: MovieCrewMemberTypeCountAggregate;
  MovieCrewMemberTypeCountOrderByAggregateInput: MovieCrewMemberTypeCountOrderByAggregateInput;
  MovieCrewMemberTypeCreateInput: MovieCrewMemberTypeCreateInput;
  MovieCrewMemberTypeCreateManyInput: MovieCrewMemberTypeCreateManyInput;
  MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput: MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeGroupBy: MovieCrewMemberTypeGroupBy;
  MovieCrewMemberTypeMaxAggregate: MovieCrewMemberTypeMaxAggregate;
  MovieCrewMemberTypeMaxOrderByAggregateInput: MovieCrewMemberTypeMaxOrderByAggregateInput;
  MovieCrewMemberTypeMinAggregate: MovieCrewMemberTypeMinAggregate;
  MovieCrewMemberTypeMinOrderByAggregateInput: MovieCrewMemberTypeMinOrderByAggregateInput;
  MovieCrewMemberTypeOrderByRelevanceInput: MovieCrewMemberTypeOrderByRelevanceInput;
  MovieCrewMemberTypeOrderByWithAggregationInput: MovieCrewMemberTypeOrderByWithAggregationInput;
  MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput: MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput;
  MovieCrewMemberTypeRelationFilter: MovieCrewMemberTypeRelationFilter;
  MovieCrewMemberTypeScalarWhereWithAggregatesInput: MovieCrewMemberTypeScalarWhereWithAggregatesInput;
  MovieCrewMemberTypeUpdateInput: MovieCrewMemberTypeUpdateInput;
  MovieCrewMemberTypeUpdateManyMutationInput: MovieCrewMemberTypeUpdateManyMutationInput;
  MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput: MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput;
  MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput: MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput;
  MovieCrewMemberTypeWhereInput: MovieCrewMemberTypeWhereInput;
  MovieCrewMemberTypeWhereUniqueInput: MovieCrewMemberTypeWhereUniqueInput;
  MovieCrewMemberUpdateInput: MovieCrewMemberUpdateInput;
  MovieCrewMemberUpdateManyMutationInput: MovieCrewMemberUpdateManyMutationInput;
  MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput: MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput;
  MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput: MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput;
  MovieCrewMemberUpdateWithoutMoviesInput: MovieCrewMemberUpdateWithoutMoviesInput;
  MovieCrewMemberUpsertWithoutMoviesInput: MovieCrewMemberUpsertWithoutMoviesInput;
  MovieCrewMemberWhereInput: MovieCrewMemberWhereInput;
  MovieCrewMemberWhereUniqueInput: MovieCrewMemberWhereUniqueInput;
  MovieGroupBy: MovieGroupBy;
  MovieInfo: MovieInfo;
  MovieInfoCreateNestedOneWithoutMovieInput: MovieInfoCreateNestedOneWithoutMovieInput;
  MovieInfoCreateOrConnectWithoutMovieInput: MovieInfoCreateOrConnectWithoutMovieInput;
  MovieInfoCreateWithoutMovieInput: MovieInfoCreateWithoutMovieInput;
  MovieInfoCreatealternativeTitlesInput: MovieInfoCreatealternativeTitlesInput;
  MovieInfoNullableRelationFilter: MovieInfoNullableRelationFilter;
  MovieInfoOrderByRelevanceInput: MovieInfoOrderByRelevanceInput;
  MovieInfoOrderByWithRelationAndSearchRelevanceInput: MovieInfoOrderByWithRelationAndSearchRelevanceInput;
  MovieInfoUpdateOneWithoutMovieNestedInput: MovieInfoUpdateOneWithoutMovieNestedInput;
  MovieInfoUpdateToOneWithWhereWithoutMovieInput: MovieInfoUpdateToOneWithWhereWithoutMovieInput;
  MovieInfoUpdateWithoutMovieInput: MovieInfoUpdateWithoutMovieInput;
  MovieInfoUpdatealternativeTitlesInput: MovieInfoUpdatealternativeTitlesInput;
  MovieInfoUpsertWithoutMovieInput: MovieInfoUpsertWithoutMovieInput;
  MovieInfoWhereInput: MovieInfoWhereInput;
  MovieInfoWhereUniqueInput: MovieInfoWhereUniqueInput;
  MovieKeywordCategory: MovieKeywordCategory;
  MovieKeywordCategoryCount: MovieKeywordCategoryCount;
  MovieKeywordCategoryCreateNestedManyWithoutMoviesInput: MovieKeywordCategoryCreateNestedManyWithoutMoviesInput;
  MovieKeywordCategoryCreateOrConnectWithoutMoviesInput: MovieKeywordCategoryCreateOrConnectWithoutMoviesInput;
  MovieKeywordCategoryCreateWithoutMoviesInput: MovieKeywordCategoryCreateWithoutMoviesInput;
  MovieKeywordCategoryListRelationFilter: MovieKeywordCategoryListRelationFilter;
  MovieKeywordCategoryOrderByRelationAggregateInput: MovieKeywordCategoryOrderByRelationAggregateInput;
  MovieKeywordCategoryOrderByRelevanceInput: MovieKeywordCategoryOrderByRelevanceInput;
  MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput: MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput;
  MovieKeywordCategoryScalarWhereInput: MovieKeywordCategoryScalarWhereInput;
  MovieKeywordCategoryUpdateManyMutationInput: MovieKeywordCategoryUpdateManyMutationInput;
  MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput: MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput;
  MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput: MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput;
  MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryUpdateWithoutMoviesInput: MovieKeywordCategoryUpdateWithoutMoviesInput;
  MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput: MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput;
  MovieKeywordCategoryWhereInput: MovieKeywordCategoryWhereInput;
  MovieKeywordCategoryWhereUniqueInput: MovieKeywordCategoryWhereUniqueInput;
  MovieLikedByUser: MovieLikedByUser;
  MovieLikedByUserCountAggregate: MovieLikedByUserCountAggregate;
  MovieLikedByUserCountOrderByAggregateInput: MovieLikedByUserCountOrderByAggregateInput;
  MovieLikedByUserCreateInput: MovieLikedByUserCreateInput;
  MovieLikedByUserCreateManyInput: MovieLikedByUserCreateManyInput;
  MovieLikedByUserCreateManyMovieInput: MovieLikedByUserCreateManyMovieInput;
  MovieLikedByUserCreateManyMovieInputEnvelope: MovieLikedByUserCreateManyMovieInputEnvelope;
  MovieLikedByUserCreateManyUserInput: MovieLikedByUserCreateManyUserInput;
  MovieLikedByUserCreateManyUserInputEnvelope: MovieLikedByUserCreateManyUserInputEnvelope;
  MovieLikedByUserCreateNestedManyWithoutMovieInput: MovieLikedByUserCreateNestedManyWithoutMovieInput;
  MovieLikedByUserCreateNestedManyWithoutUserInput: MovieLikedByUserCreateNestedManyWithoutUserInput;
  MovieLikedByUserCreateOrConnectWithoutMovieInput: MovieLikedByUserCreateOrConnectWithoutMovieInput;
  MovieLikedByUserCreateOrConnectWithoutUserInput: MovieLikedByUserCreateOrConnectWithoutUserInput;
  MovieLikedByUserCreateWithoutMovieInput: MovieLikedByUserCreateWithoutMovieInput;
  MovieLikedByUserCreateWithoutUserInput: MovieLikedByUserCreateWithoutUserInput;
  MovieLikedByUserGroupBy: MovieLikedByUserGroupBy;
  MovieLikedByUserListRelationFilter: MovieLikedByUserListRelationFilter;
  MovieLikedByUserMaxAggregate: MovieLikedByUserMaxAggregate;
  MovieLikedByUserMaxOrderByAggregateInput: MovieLikedByUserMaxOrderByAggregateInput;
  MovieLikedByUserMinAggregate: MovieLikedByUserMinAggregate;
  MovieLikedByUserMinOrderByAggregateInput: MovieLikedByUserMinOrderByAggregateInput;
  MovieLikedByUserOrderByRelationAggregateInput: MovieLikedByUserOrderByRelationAggregateInput;
  MovieLikedByUserOrderByRelevanceInput: MovieLikedByUserOrderByRelevanceInput;
  MovieLikedByUserOrderByWithAggregationInput: MovieLikedByUserOrderByWithAggregationInput;
  MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieLikedByUserScalarWhereInput: MovieLikedByUserScalarWhereInput;
  MovieLikedByUserScalarWhereWithAggregatesInput: MovieLikedByUserScalarWhereWithAggregatesInput;
  MovieLikedByUserUpdateInput: MovieLikedByUserUpdateInput;
  MovieLikedByUserUpdateManyMutationInput: MovieLikedByUserUpdateManyMutationInput;
  MovieLikedByUserUpdateManyWithWhereWithoutMovieInput: MovieLikedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieLikedByUserUpdateManyWithWhereWithoutUserInput: MovieLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieLikedByUserUpdateManyWithoutMovieNestedInput: MovieLikedByUserUpdateManyWithoutMovieNestedInput;
  MovieLikedByUserUpdateManyWithoutUserNestedInput: MovieLikedByUserUpdateManyWithoutUserNestedInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUpdateWithoutMovieInput: MovieLikedByUserUpdateWithoutMovieInput;
  MovieLikedByUserUpdateWithoutUserInput: MovieLikedByUserUpdateWithoutUserInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieLikedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieLikedByUserUserIdMovieIdCompoundUniqueInput: MovieLikedByUserUserIdMovieIdCompoundUniqueInput;
  MovieLikedByUserWhereInput: MovieLikedByUserWhereInput;
  MovieLikedByUserWhereUniqueInput: MovieLikedByUserWhereUniqueInput;
  MovieList: MovieList;
  MovieListComment: MovieListComment;
  MovieListCommentCreateManyMovieListInput: MovieListCommentCreateManyMovieListInput;
  MovieListCommentCreateManyMovieListInputEnvelope: MovieListCommentCreateManyMovieListInputEnvelope;
  MovieListCommentCreateManyUserInput: MovieListCommentCreateManyUserInput;
  MovieListCommentCreateManyUserInputEnvelope: MovieListCommentCreateManyUserInputEnvelope;
  MovieListCommentCreateNestedManyWithoutMovieListInput: MovieListCommentCreateNestedManyWithoutMovieListInput;
  MovieListCommentCreateNestedManyWithoutUserInput: MovieListCommentCreateNestedManyWithoutUserInput;
  MovieListCommentCreateOrConnectWithoutMovieListInput: MovieListCommentCreateOrConnectWithoutMovieListInput;
  MovieListCommentCreateOrConnectWithoutUserInput: MovieListCommentCreateOrConnectWithoutUserInput;
  MovieListCommentCreateWithoutMovieListInput: MovieListCommentCreateWithoutMovieListInput;
  MovieListCommentCreateWithoutUserInput: MovieListCommentCreateWithoutUserInput;
  MovieListCommentListRelationFilter: MovieListCommentListRelationFilter;
  MovieListCommentOrderByRelationAggregateInput: MovieListCommentOrderByRelationAggregateInput;
  MovieListCommentOrderByRelevanceInput: MovieListCommentOrderByRelevanceInput;
  MovieListCommentOrderByWithRelationAndSearchRelevanceInput: MovieListCommentOrderByWithRelationAndSearchRelevanceInput;
  MovieListCommentScalarWhereInput: MovieListCommentScalarWhereInput;
  MovieListCommentUpdateManyMutationInput: MovieListCommentUpdateManyMutationInput;
  MovieListCommentUpdateManyWithWhereWithoutMovieListInput: MovieListCommentUpdateManyWithWhereWithoutMovieListInput;
  MovieListCommentUpdateManyWithWhereWithoutUserInput: MovieListCommentUpdateManyWithWhereWithoutUserInput;
  MovieListCommentUpdateManyWithoutMovieListNestedInput: MovieListCommentUpdateManyWithoutMovieListNestedInput;
  MovieListCommentUpdateManyWithoutUserNestedInput: MovieListCommentUpdateManyWithoutUserNestedInput;
  MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput: MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpdateWithWhereUniqueWithoutUserInput: MovieListCommentUpdateWithWhereUniqueWithoutUserInput;
  MovieListCommentUpdateWithoutMovieListInput: MovieListCommentUpdateWithoutMovieListInput;
  MovieListCommentUpdateWithoutUserInput: MovieListCommentUpdateWithoutUserInput;
  MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput: MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListCommentUpsertWithWhereUniqueWithoutUserInput: MovieListCommentUpsertWithWhereUniqueWithoutUserInput;
  MovieListCommentWhereInput: MovieListCommentWhereInput;
  MovieListCommentWhereUniqueInput: MovieListCommentWhereUniqueInput;
  MovieListCount: MovieListCount;
  MovieListCountAggregate: MovieListCountAggregate;
  MovieListCountOrderByAggregateInput: MovieListCountOrderByAggregateInput;
  MovieListCreateInput: MovieListCreateInput;
  MovieListCreateManyInput: MovieListCreateManyInput;
  MovieListCreateManyMovieListAuthorInput: MovieListCreateManyMovieListAuthorInput;
  MovieListCreateManyMovieListAuthorInputEnvelope: MovieListCreateManyMovieListAuthorInputEnvelope;
  MovieListCreateNestedManyWithoutMovieListAuthorInput: MovieListCreateNestedManyWithoutMovieListAuthorInput;
  MovieListCreateNestedManyWithoutMoviesInput: MovieListCreateNestedManyWithoutMoviesInput;
  MovieListCreateNestedOneWithoutCommentsInput: MovieListCreateNestedOneWithoutCommentsInput;
  MovieListCreateNestedOneWithoutLikedByInput: MovieListCreateNestedOneWithoutLikedByInput;
  MovieListCreateOrConnectWithoutCommentsInput: MovieListCreateOrConnectWithoutCommentsInput;
  MovieListCreateOrConnectWithoutLikedByInput: MovieListCreateOrConnectWithoutLikedByInput;
  MovieListCreateOrConnectWithoutMovieListAuthorInput: MovieListCreateOrConnectWithoutMovieListAuthorInput;
  MovieListCreateOrConnectWithoutMoviesInput: MovieListCreateOrConnectWithoutMoviesInput;
  MovieListCreateWithoutCommentsInput: MovieListCreateWithoutCommentsInput;
  MovieListCreateWithoutLikedByInput: MovieListCreateWithoutLikedByInput;
  MovieListCreateWithoutMovieListAuthorInput: MovieListCreateWithoutMovieListAuthorInput;
  MovieListCreateWithoutMoviesInput: MovieListCreateWithoutMoviesInput;
  MovieListCreatetagsInput: MovieListCreatetagsInput;
  MovieListGroupBy: MovieListGroupBy;
  MovieListLikedByUser: MovieListLikedByUser;
  MovieListLikedByUserCountAggregate: MovieListLikedByUserCountAggregate;
  MovieListLikedByUserCountOrderByAggregateInput: MovieListLikedByUserCountOrderByAggregateInput;
  MovieListLikedByUserCreateInput: MovieListLikedByUserCreateInput;
  MovieListLikedByUserCreateManyInput: MovieListLikedByUserCreateManyInput;
  MovieListLikedByUserCreateManyMovieListInput: MovieListLikedByUserCreateManyMovieListInput;
  MovieListLikedByUserCreateManyMovieListInputEnvelope: MovieListLikedByUserCreateManyMovieListInputEnvelope;
  MovieListLikedByUserCreateManyUserInput: MovieListLikedByUserCreateManyUserInput;
  MovieListLikedByUserCreateManyUserInputEnvelope: MovieListLikedByUserCreateManyUserInputEnvelope;
  MovieListLikedByUserCreateNestedManyWithoutMovieListInput: MovieListLikedByUserCreateNestedManyWithoutMovieListInput;
  MovieListLikedByUserCreateNestedManyWithoutUserInput: MovieListLikedByUserCreateNestedManyWithoutUserInput;
  MovieListLikedByUserCreateOrConnectWithoutMovieListInput: MovieListLikedByUserCreateOrConnectWithoutMovieListInput;
  MovieListLikedByUserCreateOrConnectWithoutUserInput: MovieListLikedByUserCreateOrConnectWithoutUserInput;
  MovieListLikedByUserCreateWithoutMovieListInput: MovieListLikedByUserCreateWithoutMovieListInput;
  MovieListLikedByUserCreateWithoutUserInput: MovieListLikedByUserCreateWithoutUserInput;
  MovieListLikedByUserGroupBy: MovieListLikedByUserGroupBy;
  MovieListLikedByUserListRelationFilter: MovieListLikedByUserListRelationFilter;
  MovieListLikedByUserMaxAggregate: MovieListLikedByUserMaxAggregate;
  MovieListLikedByUserMaxOrderByAggregateInput: MovieListLikedByUserMaxOrderByAggregateInput;
  MovieListLikedByUserMinAggregate: MovieListLikedByUserMinAggregate;
  MovieListLikedByUserMinOrderByAggregateInput: MovieListLikedByUserMinOrderByAggregateInput;
  MovieListLikedByUserOrderByRelationAggregateInput: MovieListLikedByUserOrderByRelationAggregateInput;
  MovieListLikedByUserOrderByRelevanceInput: MovieListLikedByUserOrderByRelevanceInput;
  MovieListLikedByUserOrderByWithAggregationInput: MovieListLikedByUserOrderByWithAggregationInput;
  MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieListLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieListLikedByUserScalarWhereInput: MovieListLikedByUserScalarWhereInput;
  MovieListLikedByUserScalarWhereWithAggregatesInput: MovieListLikedByUserScalarWhereWithAggregatesInput;
  MovieListLikedByUserUpdateInput: MovieListLikedByUserUpdateInput;
  MovieListLikedByUserUpdateManyMutationInput: MovieListLikedByUserUpdateManyMutationInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput: MovieListLikedByUserUpdateManyWithWhereWithoutMovieListInput;
  MovieListLikedByUserUpdateManyWithWhereWithoutUserInput: MovieListLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieListLikedByUserUpdateManyWithoutMovieListNestedInput: MovieListLikedByUserUpdateManyWithoutMovieListNestedInput;
  MovieListLikedByUserUpdateManyWithoutUserNestedInput: MovieListLikedByUserUpdateManyWithoutUserNestedInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUpdateWithoutMovieListInput: MovieListLikedByUserUpdateWithoutMovieListInput;
  MovieListLikedByUserUpdateWithoutUserInput: MovieListLikedByUserUpdateWithoutUserInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutMovieListInput;
  MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieListLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput: MovieListLikedByUserUserIdMovieListIdCompoundUniqueInput;
  MovieListLikedByUserWhereInput: MovieListLikedByUserWhereInput;
  MovieListLikedByUserWhereUniqueInput: MovieListLikedByUserWhereUniqueInput;
  MovieListListRelationFilter: MovieListListRelationFilter;
  MovieListMaxAggregate: MovieListMaxAggregate;
  MovieListMaxOrderByAggregateInput: MovieListMaxOrderByAggregateInput;
  MovieListMinAggregate: MovieListMinAggregate;
  MovieListMinOrderByAggregateInput: MovieListMinOrderByAggregateInput;
  MovieListOrderByRelationAggregateInput: MovieListOrderByRelationAggregateInput;
  MovieListOrderByRelevanceInput: MovieListOrderByRelevanceInput;
  MovieListOrderByWithAggregationInput: MovieListOrderByWithAggregationInput;
  MovieListOrderByWithRelationAndSearchRelevanceInput: MovieListOrderByWithRelationAndSearchRelevanceInput;
  MovieListRelationFilter: MovieListRelationFilter;
  MovieListScalarWhereInput: MovieListScalarWhereInput;
  MovieListScalarWhereWithAggregatesInput: MovieListScalarWhereWithAggregatesInput;
  MovieListSearchCriteriaInput: MovieListSearchCriteriaInput;
  MovieListStats: MovieListStats;
  MovieListStatsCreateNestedOneWithoutMovieListInput: MovieListStatsCreateNestedOneWithoutMovieListInput;
  MovieListStatsCreateOrConnectWithoutMovieListInput: MovieListStatsCreateOrConnectWithoutMovieListInput;
  MovieListStatsCreateWithoutMovieListInput: MovieListStatsCreateWithoutMovieListInput;
  MovieListStatsNullableRelationFilter: MovieListStatsNullableRelationFilter;
  MovieListStatsOrderByRelevanceInput: MovieListStatsOrderByRelevanceInput;
  MovieListStatsOrderByWithRelationAndSearchRelevanceInput: MovieListStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieListStatsUpdateOneWithoutMovieListNestedInput: MovieListStatsUpdateOneWithoutMovieListNestedInput;
  MovieListStatsUpdateToOneWithWhereWithoutMovieListInput: MovieListStatsUpdateToOneWithWhereWithoutMovieListInput;
  MovieListStatsUpdateWithoutMovieListInput: MovieListStatsUpdateWithoutMovieListInput;
  MovieListStatsUpsertWithoutMovieListInput: MovieListStatsUpsertWithoutMovieListInput;
  MovieListStatsWhereInput: MovieListStatsWhereInput;
  MovieListStatsWhereUniqueInput: MovieListStatsWhereUniqueInput;
  MovieListUpdateInput: MovieListUpdateInput;
  MovieListUpdateManyMutationInput: MovieListUpdateManyMutationInput;
  MovieListUpdateManyWithWhereWithoutMovieListAuthorInput: MovieListUpdateManyWithWhereWithoutMovieListAuthorInput;
  MovieListUpdateManyWithWhereWithoutMoviesInput: MovieListUpdateManyWithWhereWithoutMoviesInput;
  MovieListUpdateManyWithoutMovieListAuthorNestedInput: MovieListUpdateManyWithoutMovieListAuthorNestedInput;
  MovieListUpdateManyWithoutMoviesNestedInput: MovieListUpdateManyWithoutMoviesNestedInput;
  MovieListUpdateOneRequiredWithoutCommentsNestedInput: MovieListUpdateOneRequiredWithoutCommentsNestedInput;
  MovieListUpdateOneRequiredWithoutLikedByNestedInput: MovieListUpdateOneRequiredWithoutLikedByNestedInput;
  MovieListUpdateToOneWithWhereWithoutCommentsInput: MovieListUpdateToOneWithWhereWithoutCommentsInput;
  MovieListUpdateToOneWithWhereWithoutLikedByInput: MovieListUpdateToOneWithWhereWithoutLikedByInput;
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: MovieListUpdateWithWhereUniqueWithoutMoviesInput;
  MovieListUpdateWithoutCommentsInput: MovieListUpdateWithoutCommentsInput;
  MovieListUpdateWithoutLikedByInput: MovieListUpdateWithoutLikedByInput;
  MovieListUpdateWithoutMovieListAuthorInput: MovieListUpdateWithoutMovieListAuthorInput;
  MovieListUpdateWithoutMoviesInput: MovieListUpdateWithoutMoviesInput;
  MovieListUpdatetagsInput: MovieListUpdatetagsInput;
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput;
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: MovieListUpsertWithWhereUniqueWithoutMoviesInput;
  MovieListUpsertWithoutCommentsInput: MovieListUpsertWithoutCommentsInput;
  MovieListUpsertWithoutLikedByInput: MovieListUpsertWithoutLikedByInput;
  MovieListWhereInput: MovieListWhereInput;
  MovieListWhereUniqueInput: MovieListWhereUniqueInput;
  MovieMaxAggregate: MovieMaxAggregate;
  MovieMaxOrderByAggregateInput: MovieMaxOrderByAggregateInput;
  MovieMinAggregate: MovieMinAggregate;
  MovieMinOrderByAggregateInput: MovieMinOrderByAggregateInput;
  MovieOrderByRelationAggregateInput: MovieOrderByRelationAggregateInput;
  MovieOrderByRelevanceInput: MovieOrderByRelevanceInput;
  MovieOrderByWithAggregationInput: MovieOrderByWithAggregationInput;
  MovieOrderByWithRelationAndSearchRelevanceInput: MovieOrderByWithRelationAndSearchRelevanceInput;
  MovieRating: MovieRating;
  MovieRatingAvgAggregate: MovieRatingAvgAggregate;
  MovieRatingAvgOrderByAggregateInput: MovieRatingAvgOrderByAggregateInput;
  MovieRatingCountAggregate: MovieRatingCountAggregate;
  MovieRatingCountOrderByAggregateInput: MovieRatingCountOrderByAggregateInput;
  MovieRatingCreateInput: MovieRatingCreateInput;
  MovieRatingCreateManyInput: MovieRatingCreateManyInput;
  MovieRatingCreateManyMovieInput: MovieRatingCreateManyMovieInput;
  MovieRatingCreateManyMovieInputEnvelope: MovieRatingCreateManyMovieInputEnvelope;
  MovieRatingCreateManyUserInput: MovieRatingCreateManyUserInput;
  MovieRatingCreateManyUserInputEnvelope: MovieRatingCreateManyUserInputEnvelope;
  MovieRatingCreateNestedManyWithoutMovieInput: MovieRatingCreateNestedManyWithoutMovieInput;
  MovieRatingCreateNestedManyWithoutUserInput: MovieRatingCreateNestedManyWithoutUserInput;
  MovieRatingCreateNestedOneWithoutReviewInput: MovieRatingCreateNestedOneWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutMovieInput: MovieRatingCreateOrConnectWithoutMovieInput;
  MovieRatingCreateOrConnectWithoutReviewInput: MovieRatingCreateOrConnectWithoutReviewInput;
  MovieRatingCreateOrConnectWithoutUserInput: MovieRatingCreateOrConnectWithoutUserInput;
  MovieRatingCreateWithoutMovieInput: MovieRatingCreateWithoutMovieInput;
  MovieRatingCreateWithoutReviewInput: MovieRatingCreateWithoutReviewInput;
  MovieRatingCreateWithoutUserInput: MovieRatingCreateWithoutUserInput;
  MovieRatingGroupBy: MovieRatingGroupBy;
  MovieRatingListRelationFilter: MovieRatingListRelationFilter;
  MovieRatingMaxAggregate: MovieRatingMaxAggregate;
  MovieRatingMaxOrderByAggregateInput: MovieRatingMaxOrderByAggregateInput;
  MovieRatingMinAggregate: MovieRatingMinAggregate;
  MovieRatingMinOrderByAggregateInput: MovieRatingMinOrderByAggregateInput;
  MovieRatingOrderByRelationAggregateInput: MovieRatingOrderByRelationAggregateInput;
  MovieRatingOrderByRelevanceInput: MovieRatingOrderByRelevanceInput;
  MovieRatingOrderByWithAggregationInput: MovieRatingOrderByWithAggregationInput;
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: MovieRatingOrderByWithRelationAndSearchRelevanceInput;
  MovieRatingRelationFilter: MovieRatingRelationFilter;
  MovieRatingScalarWhereInput: MovieRatingScalarWhereInput;
  MovieRatingScalarWhereWithAggregatesInput: MovieRatingScalarWhereWithAggregatesInput;
  MovieRatingSumAggregate: MovieRatingSumAggregate;
  MovieRatingSumOrderByAggregateInput: MovieRatingSumOrderByAggregateInput;
  MovieRatingUpdateInput: MovieRatingUpdateInput;
  MovieRatingUpdateManyMutationInput: MovieRatingUpdateManyMutationInput;
  MovieRatingUpdateManyWithWhereWithoutMovieInput: MovieRatingUpdateManyWithWhereWithoutMovieInput;
  MovieRatingUpdateManyWithWhereWithoutUserInput: MovieRatingUpdateManyWithWhereWithoutUserInput;
  MovieRatingUpdateManyWithoutMovieNestedInput: MovieRatingUpdateManyWithoutMovieNestedInput;
  MovieRatingUpdateManyWithoutUserNestedInput: MovieRatingUpdateManyWithoutUserNestedInput;
  MovieRatingUpdateOneRequiredWithoutReviewNestedInput: MovieRatingUpdateOneRequiredWithoutReviewNestedInput;
  MovieRatingUpdateToOneWithWhereWithoutReviewInput: MovieRatingUpdateToOneWithWhereWithoutReviewInput;
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: MovieRatingUpdateWithWhereUniqueWithoutMovieInput;
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: MovieRatingUpdateWithWhereUniqueWithoutUserInput;
  MovieRatingUpdateWithoutMovieInput: MovieRatingUpdateWithoutMovieInput;
  MovieRatingUpdateWithoutReviewInput: MovieRatingUpdateWithoutReviewInput;
  MovieRatingUpdateWithoutUserInput: MovieRatingUpdateWithoutUserInput;
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: MovieRatingUpsertWithWhereUniqueWithoutMovieInput;
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: MovieRatingUpsertWithWhereUniqueWithoutUserInput;
  MovieRatingUpsertWithoutReviewInput: MovieRatingUpsertWithoutReviewInput;
  MovieRatingUserIdMovieIdCompoundUniqueInput: MovieRatingUserIdMovieIdCompoundUniqueInput;
  MovieRatingWhereInput: MovieRatingWhereInput;
  MovieRatingWhereUniqueInput: MovieRatingWhereUniqueInput;
  MovieRelationFilter: MovieRelationFilter;
  MovieReview: MovieReview;
  MovieReviewCount: MovieReviewCount;
  MovieReviewCountAggregate: MovieReviewCountAggregate;
  MovieReviewCountOrderByAggregateInput: MovieReviewCountOrderByAggregateInput;
  MovieReviewCreateInput: MovieReviewCreateInput;
  MovieReviewCreateManyInput: MovieReviewCreateManyInput;
  MovieReviewCreateNestedOneWithoutLikedByInput: MovieReviewCreateNestedOneWithoutLikedByInput;
  MovieReviewCreateNestedOneWithoutRatingInput: MovieReviewCreateNestedOneWithoutRatingInput;
  MovieReviewCreateOrConnectWithoutLikedByInput: MovieReviewCreateOrConnectWithoutLikedByInput;
  MovieReviewCreateOrConnectWithoutRatingInput: MovieReviewCreateOrConnectWithoutRatingInput;
  MovieReviewCreateWithoutLikedByInput: MovieReviewCreateWithoutLikedByInput;
  MovieReviewCreateWithoutRatingInput: MovieReviewCreateWithoutRatingInput;
  MovieReviewGroupBy: MovieReviewGroupBy;
  MovieReviewLikedByUser: MovieReviewLikedByUser;
  MovieReviewLikedByUserCountAggregate: MovieReviewLikedByUserCountAggregate;
  MovieReviewLikedByUserCountOrderByAggregateInput: MovieReviewLikedByUserCountOrderByAggregateInput;
  MovieReviewLikedByUserCreateInput: MovieReviewLikedByUserCreateInput;
  MovieReviewLikedByUserCreateManyInput: MovieReviewLikedByUserCreateManyInput;
  MovieReviewLikedByUserCreateManyMovieReviewInput: MovieReviewLikedByUserCreateManyMovieReviewInput;
  MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope: MovieReviewLikedByUserCreateManyMovieReviewInputEnvelope;
  MovieReviewLikedByUserCreateManyUserInput: MovieReviewLikedByUserCreateManyUserInput;
  MovieReviewLikedByUserCreateManyUserInputEnvelope: MovieReviewLikedByUserCreateManyUserInputEnvelope;
  MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput: MovieReviewLikedByUserCreateNestedManyWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateNestedManyWithoutUserInput: MovieReviewLikedByUserCreateNestedManyWithoutUserInput;
  MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput: MovieReviewLikedByUserCreateOrConnectWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateOrConnectWithoutUserInput: MovieReviewLikedByUserCreateOrConnectWithoutUserInput;
  MovieReviewLikedByUserCreateWithoutMovieReviewInput: MovieReviewLikedByUserCreateWithoutMovieReviewInput;
  MovieReviewLikedByUserCreateWithoutUserInput: MovieReviewLikedByUserCreateWithoutUserInput;
  MovieReviewLikedByUserGroupBy: MovieReviewLikedByUserGroupBy;
  MovieReviewLikedByUserListRelationFilter: MovieReviewLikedByUserListRelationFilter;
  MovieReviewLikedByUserMaxAggregate: MovieReviewLikedByUserMaxAggregate;
  MovieReviewLikedByUserMaxOrderByAggregateInput: MovieReviewLikedByUserMaxOrderByAggregateInput;
  MovieReviewLikedByUserMinAggregate: MovieReviewLikedByUserMinAggregate;
  MovieReviewLikedByUserMinOrderByAggregateInput: MovieReviewLikedByUserMinOrderByAggregateInput;
  MovieReviewLikedByUserOrderByRelationAggregateInput: MovieReviewLikedByUserOrderByRelationAggregateInput;
  MovieReviewLikedByUserOrderByRelevanceInput: MovieReviewLikedByUserOrderByRelevanceInput;
  MovieReviewLikedByUserOrderByWithAggregationInput: MovieReviewLikedByUserOrderByWithAggregationInput;
  MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput: MovieReviewLikedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewLikedByUserScalarWhereInput: MovieReviewLikedByUserScalarWhereInput;
  MovieReviewLikedByUserScalarWhereWithAggregatesInput: MovieReviewLikedByUserScalarWhereWithAggregatesInput;
  MovieReviewLikedByUserUpdateInput: MovieReviewLikedByUserUpdateInput;
  MovieReviewLikedByUserUpdateManyMutationInput: MovieReviewLikedByUserUpdateManyMutationInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput: MovieReviewLikedByUserUpdateManyWithWhereWithoutUserInput;
  MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput: MovieReviewLikedByUserUpdateManyWithoutMovieReviewNestedInput;
  MovieReviewLikedByUserUpdateManyWithoutUserNestedInput: MovieReviewLikedByUserUpdateManyWithoutUserNestedInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUpdateWithoutMovieReviewInput: MovieReviewLikedByUserUpdateWithoutMovieReviewInput;
  MovieReviewLikedByUserUpdateWithoutUserInput: MovieReviewLikedByUserUpdateWithoutUserInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutMovieReviewInput;
  MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput: MovieReviewLikedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput: MovieReviewLikedByUserUserIdMovieReviewIdCompoundUniqueInput;
  MovieReviewLikedByUserWhereInput: MovieReviewLikedByUserWhereInput;
  MovieReviewLikedByUserWhereUniqueInput: MovieReviewLikedByUserWhereUniqueInput;
  MovieReviewMaxAggregate: MovieReviewMaxAggregate;
  MovieReviewMaxOrderByAggregateInput: MovieReviewMaxOrderByAggregateInput;
  MovieReviewMinAggregate: MovieReviewMinAggregate;
  MovieReviewMinOrderByAggregateInput: MovieReviewMinOrderByAggregateInput;
  MovieReviewNullableRelationFilter: MovieReviewNullableRelationFilter;
  MovieReviewOrderByRelevanceInput: MovieReviewOrderByRelevanceInput;
  MovieReviewOrderByWithAggregationInput: MovieReviewOrderByWithAggregationInput;
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: MovieReviewOrderByWithRelationAndSearchRelevanceInput;
  MovieReviewRelationFilter: MovieReviewRelationFilter;
  MovieReviewScalarWhereWithAggregatesInput: MovieReviewScalarWhereWithAggregatesInput;
  MovieReviewUpdateInput: MovieReviewUpdateInput;
  MovieReviewUpdateManyMutationInput: MovieReviewUpdateManyMutationInput;
  MovieReviewUpdateOneRequiredWithoutLikedByNestedInput: MovieReviewUpdateOneRequiredWithoutLikedByNestedInput;
  MovieReviewUpdateOneWithoutRatingNestedInput: MovieReviewUpdateOneWithoutRatingNestedInput;
  MovieReviewUpdateToOneWithWhereWithoutLikedByInput: MovieReviewUpdateToOneWithWhereWithoutLikedByInput;
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: MovieReviewUpdateToOneWithWhereWithoutRatingInput;
  MovieReviewUpdateWithoutLikedByInput: MovieReviewUpdateWithoutLikedByInput;
  MovieReviewUpdateWithoutRatingInput: MovieReviewUpdateWithoutRatingInput;
  MovieReviewUpsertWithoutLikedByInput: MovieReviewUpsertWithoutLikedByInput;
  MovieReviewUpsertWithoutRatingInput: MovieReviewUpsertWithoutRatingInput;
  MovieReviewWhereInput: MovieReviewWhereInput;
  MovieReviewWhereUniqueInput: MovieReviewWhereUniqueInput;
  MovieScalarWhereInput: MovieScalarWhereInput;
  MovieScalarWhereWithAggregatesInput: MovieScalarWhereWithAggregatesInput;
  MovieSpokenLanguage: MovieSpokenLanguage;
  MovieSpokenLanguageCount: MovieSpokenLanguageCount;
  MovieSpokenLanguageCountAggregate: MovieSpokenLanguageCountAggregate;
  MovieSpokenLanguageCountOrderByAggregateInput: MovieSpokenLanguageCountOrderByAggregateInput;
  MovieSpokenLanguageCreateInput: MovieSpokenLanguageCreateInput;
  MovieSpokenLanguageCreateManyInput: MovieSpokenLanguageCreateManyInput;
  MovieSpokenLanguageCreateNestedManyWithoutMoviesInput: MovieSpokenLanguageCreateNestedManyWithoutMoviesInput;
  MovieSpokenLanguageCreateOrConnectWithoutMoviesInput: MovieSpokenLanguageCreateOrConnectWithoutMoviesInput;
  MovieSpokenLanguageCreateWithoutMoviesInput: MovieSpokenLanguageCreateWithoutMoviesInput;
  MovieSpokenLanguageGroupBy: MovieSpokenLanguageGroupBy;
  MovieSpokenLanguageListRelationFilter: MovieSpokenLanguageListRelationFilter;
  MovieSpokenLanguageMaxAggregate: MovieSpokenLanguageMaxAggregate;
  MovieSpokenLanguageMaxOrderByAggregateInput: MovieSpokenLanguageMaxOrderByAggregateInput;
  MovieSpokenLanguageMinAggregate: MovieSpokenLanguageMinAggregate;
  MovieSpokenLanguageMinOrderByAggregateInput: MovieSpokenLanguageMinOrderByAggregateInput;
  MovieSpokenLanguageOrderByRelationAggregateInput: MovieSpokenLanguageOrderByRelationAggregateInput;
  MovieSpokenLanguageOrderByRelevanceInput: MovieSpokenLanguageOrderByRelevanceInput;
  MovieSpokenLanguageOrderByWithAggregationInput: MovieSpokenLanguageOrderByWithAggregationInput;
  MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput: MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput;
  MovieSpokenLanguageScalarWhereInput: MovieSpokenLanguageScalarWhereInput;
  MovieSpokenLanguageScalarWhereWithAggregatesInput: MovieSpokenLanguageScalarWhereWithAggregatesInput;
  MovieSpokenLanguageUpdateInput: MovieSpokenLanguageUpdateInput;
  MovieSpokenLanguageUpdateManyMutationInput: MovieSpokenLanguageUpdateManyMutationInput;
  MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput: MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput;
  MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput: MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput;
  MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageUpdateWithoutMoviesInput: MovieSpokenLanguageUpdateWithoutMoviesInput;
  MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput: MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput;
  MovieSpokenLanguageWhereInput: MovieSpokenLanguageWhereInput;
  MovieSpokenLanguageWhereUniqueInput: MovieSpokenLanguageWhereUniqueInput;
  MovieStats: MovieStats;
  MovieStatsCreateNestedOneWithoutMovieInput: MovieStatsCreateNestedOneWithoutMovieInput;
  MovieStatsCreateOrConnectWithoutMovieInput: MovieStatsCreateOrConnectWithoutMovieInput;
  MovieStatsCreateWithoutMovieInput: MovieStatsCreateWithoutMovieInput;
  MovieStatsNullableRelationFilter: MovieStatsNullableRelationFilter;
  MovieStatsOrderByRelevanceInput: MovieStatsOrderByRelevanceInput;
  MovieStatsOrderByWithRelationAndSearchRelevanceInput: MovieStatsOrderByWithRelationAndSearchRelevanceInput;
  MovieStatsUpdateOneWithoutMovieNestedInput: MovieStatsUpdateOneWithoutMovieNestedInput;
  MovieStatsUpdateToOneWithWhereWithoutMovieInput: MovieStatsUpdateToOneWithWhereWithoutMovieInput;
  MovieStatsUpdateWithoutMovieInput: MovieStatsUpdateWithoutMovieInput;
  MovieStatsUpsertWithoutMovieInput: MovieStatsUpsertWithoutMovieInput;
  MovieStatsWhereInput: MovieStatsWhereInput;
  MovieStatsWhereUniqueInput: MovieStatsWhereUniqueInput;
  MovieStudio: MovieStudio;
  MovieStudioCount: MovieStudioCount;
  MovieStudioCreateNestedManyWithoutMoviesInput: MovieStudioCreateNestedManyWithoutMoviesInput;
  MovieStudioCreateOrConnectWithoutMoviesInput: MovieStudioCreateOrConnectWithoutMoviesInput;
  MovieStudioCreateWithoutMoviesInput: MovieStudioCreateWithoutMoviesInput;
  MovieStudioListRelationFilter: MovieStudioListRelationFilter;
  MovieStudioOrderByRelationAggregateInput: MovieStudioOrderByRelationAggregateInput;
  MovieStudioOrderByRelevanceInput: MovieStudioOrderByRelevanceInput;
  MovieStudioOrderByWithRelationAndSearchRelevanceInput: MovieStudioOrderByWithRelationAndSearchRelevanceInput;
  MovieStudioScalarWhereInput: MovieStudioScalarWhereInput;
  MovieStudioUpdateManyMutationInput: MovieStudioUpdateManyMutationInput;
  MovieStudioUpdateManyWithWhereWithoutMoviesInput: MovieStudioUpdateManyWithWhereWithoutMoviesInput;
  MovieStudioUpdateManyWithoutMoviesNestedInput: MovieStudioUpdateManyWithoutMoviesNestedInput;
  MovieStudioUpdateWithWhereUniqueWithoutMoviesInput: MovieStudioUpdateWithWhereUniqueWithoutMoviesInput;
  MovieStudioUpdateWithoutMoviesInput: MovieStudioUpdateWithoutMoviesInput;
  MovieStudioUpsertWithWhereUniqueWithoutMoviesInput: MovieStudioUpsertWithWhereUniqueWithoutMoviesInput;
  MovieStudioWhereInput: MovieStudioWhereInput;
  MovieStudioWhereUniqueInput: MovieStudioWhereUniqueInput;
  MovieUpdateInput: MovieUpdateInput;
  MovieUpdateManyMutationInput: MovieUpdateManyMutationInput;
  MovieUpdateManyWithWhereWithoutGenresInput: MovieUpdateManyWithWhereWithoutGenresInput;
  MovieUpdateManyWithWhereWithoutMovieListsInput: MovieUpdateManyWithWhereWithoutMovieListsInput;
  MovieUpdateManyWithWhereWithoutSpokenLanguagesInput: MovieUpdateManyWithWhereWithoutSpokenLanguagesInput;
  MovieUpdateManyWithoutGenresNestedInput: MovieUpdateManyWithoutGenresNestedInput;
  MovieUpdateManyWithoutMovieListsNestedInput: MovieUpdateManyWithoutMovieListsNestedInput;
  MovieUpdateManyWithoutSpokenLanguagesNestedInput: MovieUpdateManyWithoutSpokenLanguagesNestedInput;
  MovieUpdateOneRequiredWithoutCrewMembersNestedInput: MovieUpdateOneRequiredWithoutCrewMembersNestedInput;
  MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput: MovieUpdateOneRequiredWithoutInWatchlistByUsersNestedInput;
  MovieUpdateOneRequiredWithoutLikedByNestedInput: MovieUpdateOneRequiredWithoutLikedByNestedInput;
  MovieUpdateOneRequiredWithoutRatedByNestedInput: MovieUpdateOneRequiredWithoutRatedByNestedInput;
  MovieUpdateOneRequiredWithoutWatchedByNestedInput: MovieUpdateOneRequiredWithoutWatchedByNestedInput;
  MovieUpdateToOneWithWhereWithoutCrewMembersInput: MovieUpdateToOneWithWhereWithoutCrewMembersInput;
  MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput: MovieUpdateToOneWithWhereWithoutInWatchlistByUsersInput;
  MovieUpdateToOneWithWhereWithoutLikedByInput: MovieUpdateToOneWithWhereWithoutLikedByInput;
  MovieUpdateToOneWithWhereWithoutRatedByInput: MovieUpdateToOneWithWhereWithoutRatedByInput;
  MovieUpdateToOneWithWhereWithoutWatchedByInput: MovieUpdateToOneWithWhereWithoutWatchedByInput;
  MovieUpdateWithWhereUniqueWithoutGenresInput: MovieUpdateWithWhereUniqueWithoutGenresInput;
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: MovieUpdateWithWhereUniqueWithoutMovieListsInput;
  MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput: MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput;
  MovieUpdateWithoutCrewMembersInput: MovieUpdateWithoutCrewMembersInput;
  MovieUpdateWithoutGenresInput: MovieUpdateWithoutGenresInput;
  MovieUpdateWithoutInWatchlistByUsersInput: MovieUpdateWithoutInWatchlistByUsersInput;
  MovieUpdateWithoutLikedByInput: MovieUpdateWithoutLikedByInput;
  MovieUpdateWithoutMovieListsInput: MovieUpdateWithoutMovieListsInput;
  MovieUpdateWithoutRatedByInput: MovieUpdateWithoutRatedByInput;
  MovieUpdateWithoutSpokenLanguagesInput: MovieUpdateWithoutSpokenLanguagesInput;
  MovieUpdateWithoutWatchedByInput: MovieUpdateWithoutWatchedByInput;
  MovieUpsertWithWhereUniqueWithoutGenresInput: MovieUpsertWithWhereUniqueWithoutGenresInput;
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: MovieUpsertWithWhereUniqueWithoutMovieListsInput;
  MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput: MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput;
  MovieUpsertWithoutCrewMembersInput: MovieUpsertWithoutCrewMembersInput;
  MovieUpsertWithoutInWatchlistByUsersInput: MovieUpsertWithoutInWatchlistByUsersInput;
  MovieUpsertWithoutLikedByInput: MovieUpsertWithoutLikedByInput;
  MovieUpsertWithoutRatedByInput: MovieUpsertWithoutRatedByInput;
  MovieUpsertWithoutWatchedByInput: MovieUpsertWithoutWatchedByInput;
  MovieWatchedByUser: MovieWatchedByUser;
  MovieWatchedByUserCountAggregate: MovieWatchedByUserCountAggregate;
  MovieWatchedByUserCountOrderByAggregateInput: MovieWatchedByUserCountOrderByAggregateInput;
  MovieWatchedByUserCreateInput: MovieWatchedByUserCreateInput;
  MovieWatchedByUserCreateManyInput: MovieWatchedByUserCreateManyInput;
  MovieWatchedByUserCreateManyMovieInput: MovieWatchedByUserCreateManyMovieInput;
  MovieWatchedByUserCreateManyMovieInputEnvelope: MovieWatchedByUserCreateManyMovieInputEnvelope;
  MovieWatchedByUserCreateManyUserInput: MovieWatchedByUserCreateManyUserInput;
  MovieWatchedByUserCreateManyUserInputEnvelope: MovieWatchedByUserCreateManyUserInputEnvelope;
  MovieWatchedByUserCreateNestedManyWithoutMovieInput: MovieWatchedByUserCreateNestedManyWithoutMovieInput;
  MovieWatchedByUserCreateNestedManyWithoutUserInput: MovieWatchedByUserCreateNestedManyWithoutUserInput;
  MovieWatchedByUserCreateOrConnectWithoutMovieInput: MovieWatchedByUserCreateOrConnectWithoutMovieInput;
  MovieWatchedByUserCreateOrConnectWithoutUserInput: MovieWatchedByUserCreateOrConnectWithoutUserInput;
  MovieWatchedByUserCreateWithoutMovieInput: MovieWatchedByUserCreateWithoutMovieInput;
  MovieWatchedByUserCreateWithoutUserInput: MovieWatchedByUserCreateWithoutUserInput;
  MovieWatchedByUserGroupBy: MovieWatchedByUserGroupBy;
  MovieWatchedByUserListRelationFilter: MovieWatchedByUserListRelationFilter;
  MovieWatchedByUserMaxAggregate: MovieWatchedByUserMaxAggregate;
  MovieWatchedByUserMaxOrderByAggregateInput: MovieWatchedByUserMaxOrderByAggregateInput;
  MovieWatchedByUserMinAggregate: MovieWatchedByUserMinAggregate;
  MovieWatchedByUserMinOrderByAggregateInput: MovieWatchedByUserMinOrderByAggregateInput;
  MovieWatchedByUserOrderByRelationAggregateInput: MovieWatchedByUserOrderByRelationAggregateInput;
  MovieWatchedByUserOrderByRelevanceInput: MovieWatchedByUserOrderByRelevanceInput;
  MovieWatchedByUserOrderByWithAggregationInput: MovieWatchedByUserOrderByWithAggregationInput;
  MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput: MovieWatchedByUserOrderByWithRelationAndSearchRelevanceInput;
  MovieWatchedByUserScalarWhereInput: MovieWatchedByUserScalarWhereInput;
  MovieWatchedByUserScalarWhereWithAggregatesInput: MovieWatchedByUserScalarWhereWithAggregatesInput;
  MovieWatchedByUserUpdateInput: MovieWatchedByUserUpdateInput;
  MovieWatchedByUserUpdateManyMutationInput: MovieWatchedByUserUpdateManyMutationInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput: MovieWatchedByUserUpdateManyWithWhereWithoutMovieInput;
  MovieWatchedByUserUpdateManyWithWhereWithoutUserInput: MovieWatchedByUserUpdateManyWithWhereWithoutUserInput;
  MovieWatchedByUserUpdateManyWithoutMovieNestedInput: MovieWatchedByUserUpdateManyWithoutMovieNestedInput;
  MovieWatchedByUserUpdateManyWithoutUserNestedInput: MovieWatchedByUserUpdateManyWithoutUserNestedInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpdateWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUpdateWithoutMovieInput: MovieWatchedByUserUpdateWithoutMovieInput;
  MovieWatchedByUserUpdateWithoutUserInput: MovieWatchedByUserUpdateWithoutUserInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutMovieInput;
  MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput: MovieWatchedByUserUpsertWithWhereUniqueWithoutUserInput;
  MovieWatchedByUserUserIdMovieIdCompoundUniqueInput: MovieWatchedByUserUserIdMovieIdCompoundUniqueInput;
  MovieWatchedByUserWhereInput: MovieWatchedByUserWhereInput;
  MovieWatchedByUserWhereUniqueInput: MovieWatchedByUserWhereUniqueInput;
  MovieWhereInput: MovieWhereInput;
  MovieWhereUniqueInput: MovieWhereUniqueInput;
  MoviesSearchCriteriaInput: MoviesSearchCriteriaInput;
  MovifierAppUser: MovifierAppUser;
  MovifierAppUserCount: MovifierAppUserCount;
  MovifierAppUserCreateInput: MovifierAppUserCreateInput;
  MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput: MovifierAppUserCreateNestedOneWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateNestedOneWithoutLikedMoviesInput: MovifierAppUserCreateNestedOneWithoutLikedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput: MovifierAppUserCreateNestedOneWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput;
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: MovifierAppUserCreateNestedOneWithoutMovieListsInput;
  MovifierAppUserCreateNestedOneWithoutRatedMoviesInput: MovifierAppUserCreateNestedOneWithoutRatedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput: MovifierAppUserCreateNestedOneWithoutWatchedMoviesInput;
  MovifierAppUserCreateNestedOneWithoutWatchlistInput: MovifierAppUserCreateNestedOneWithoutWatchlistInput;
  MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput: MovifierAppUserCreateOrConnectWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateOrConnectWithoutLikedMoviesInput: MovifierAppUserCreateOrConnectWithoutLikedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput: MovifierAppUserCreateOrConnectWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput;
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: MovifierAppUserCreateOrConnectWithoutMovieListsInput;
  MovifierAppUserCreateOrConnectWithoutRatedMoviesInput: MovifierAppUserCreateOrConnectWithoutRatedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput: MovifierAppUserCreateOrConnectWithoutWatchedMoviesInput;
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: MovifierAppUserCreateOrConnectWithoutWatchlistInput;
  MovifierAppUserCreateWithoutLikedMovieReviewsInput: MovifierAppUserCreateWithoutLikedMovieReviewsInput;
  MovifierAppUserCreateWithoutLikedMoviesInput: MovifierAppUserCreateWithoutLikedMoviesInput;
  MovifierAppUserCreateWithoutMovieListLikedByUserInput: MovifierAppUserCreateWithoutMovieListLikedByUserInput;
  MovifierAppUserCreateWithoutMovieListsCommentsInput: MovifierAppUserCreateWithoutMovieListsCommentsInput;
  MovifierAppUserCreateWithoutMovieListsInput: MovifierAppUserCreateWithoutMovieListsInput;
  MovifierAppUserCreateWithoutRatedMoviesInput: MovifierAppUserCreateWithoutRatedMoviesInput;
  MovifierAppUserCreateWithoutWatchedMoviesInput: MovifierAppUserCreateWithoutWatchedMoviesInput;
  MovifierAppUserCreateWithoutWatchlistInput: MovifierAppUserCreateWithoutWatchlistInput;
  MovifierAppUserOrderByRelevanceInput: MovifierAppUserOrderByRelevanceInput;
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: MovifierAppUserOrderByWithRelationAndSearchRelevanceInput;
  MovifierAppUserRelationFilter: MovifierAppUserRelationFilter;
  MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutLikedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListLikedByUserNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutRatedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchedMoviesNestedInput;
  MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput: MovifierAppUserUpdateOneRequiredWithoutWatchlistNestedInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutLikedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput;
  MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutRatedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchedMoviesInput;
  MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput: MovifierAppUserUpdateToOneWithWhereWithoutWatchlistInput;
  MovifierAppUserUpdateWithoutLikedMovieReviewsInput: MovifierAppUserUpdateWithoutLikedMovieReviewsInput;
  MovifierAppUserUpdateWithoutLikedMoviesInput: MovifierAppUserUpdateWithoutLikedMoviesInput;
  MovifierAppUserUpdateWithoutMovieListLikedByUserInput: MovifierAppUserUpdateWithoutMovieListLikedByUserInput;
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: MovifierAppUserUpdateWithoutMovieListsCommentsInput;
  MovifierAppUserUpdateWithoutMovieListsInput: MovifierAppUserUpdateWithoutMovieListsInput;
  MovifierAppUserUpdateWithoutRatedMoviesInput: MovifierAppUserUpdateWithoutRatedMoviesInput;
  MovifierAppUserUpdateWithoutWatchedMoviesInput: MovifierAppUserUpdateWithoutWatchedMoviesInput;
  MovifierAppUserUpdateWithoutWatchlistInput: MovifierAppUserUpdateWithoutWatchlistInput;
  MovifierAppUserUpsertWithoutLikedMovieReviewsInput: MovifierAppUserUpsertWithoutLikedMovieReviewsInput;
  MovifierAppUserUpsertWithoutLikedMoviesInput: MovifierAppUserUpsertWithoutLikedMoviesInput;
  MovifierAppUserUpsertWithoutMovieListLikedByUserInput: MovifierAppUserUpsertWithoutMovieListLikedByUserInput;
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: MovifierAppUserUpsertWithoutMovieListsCommentsInput;
  MovifierAppUserUpsertWithoutMovieListsInput: MovifierAppUserUpsertWithoutMovieListsInput;
  MovifierAppUserUpsertWithoutRatedMoviesInput: MovifierAppUserUpsertWithoutRatedMoviesInput;
  MovifierAppUserUpsertWithoutWatchedMoviesInput: MovifierAppUserUpsertWithoutWatchedMoviesInput;
  MovifierAppUserUpsertWithoutWatchlistInput: MovifierAppUserUpsertWithoutWatchlistInput;
  MovifierAppUserWhereInput: MovifierAppUserWhereInput;
  MovifierAppUserWhereUniqueInput: MovifierAppUserWhereUniqueInput;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedEnumMoviefireAppUserRoleFilter: NestedEnumMoviefireAppUserRoleFilter;
  NestedFloatFilter: NestedFloatFilter;
  NestedFloatWithAggregatesFilter: NestedFloatWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedIntWithAggregatesFilter: NestedIntWithAggregatesFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: {};
  String: Scalars['String']['output'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableListFilter: StringNullableListFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  UserLoginInput: UserLoginInput;
  UserLoginOutput: UserLoginOutput;
  UserMovieWatchlist: UserMovieWatchlist;
  UserMovieWatchlistCountAggregate: UserMovieWatchlistCountAggregate;
  UserMovieWatchlistCountOrderByAggregateInput: UserMovieWatchlistCountOrderByAggregateInput;
  UserMovieWatchlistCreateInput: UserMovieWatchlistCreateInput;
  UserMovieWatchlistCreateManyInput: UserMovieWatchlistCreateManyInput;
  UserMovieWatchlistCreateManyMovieInput: UserMovieWatchlistCreateManyMovieInput;
  UserMovieWatchlistCreateManyMovieInputEnvelope: UserMovieWatchlistCreateManyMovieInputEnvelope;
  UserMovieWatchlistCreateManyUserInput: UserMovieWatchlistCreateManyUserInput;
  UserMovieWatchlistCreateManyUserInputEnvelope: UserMovieWatchlistCreateManyUserInputEnvelope;
  UserMovieWatchlistCreateNestedManyWithoutMovieInput: UserMovieWatchlistCreateNestedManyWithoutMovieInput;
  UserMovieWatchlistCreateNestedManyWithoutUserInput: UserMovieWatchlistCreateNestedManyWithoutUserInput;
  UserMovieWatchlistCreateOrConnectWithoutMovieInput: UserMovieWatchlistCreateOrConnectWithoutMovieInput;
  UserMovieWatchlistCreateOrConnectWithoutUserInput: UserMovieWatchlistCreateOrConnectWithoutUserInput;
  UserMovieWatchlistCreateWithoutMovieInput: UserMovieWatchlistCreateWithoutMovieInput;
  UserMovieWatchlistCreateWithoutUserInput: UserMovieWatchlistCreateWithoutUserInput;
  UserMovieWatchlistGroupBy: UserMovieWatchlistGroupBy;
  UserMovieWatchlistListRelationFilter: UserMovieWatchlistListRelationFilter;
  UserMovieWatchlistMaxAggregate: UserMovieWatchlistMaxAggregate;
  UserMovieWatchlistMaxOrderByAggregateInput: UserMovieWatchlistMaxOrderByAggregateInput;
  UserMovieWatchlistMinAggregate: UserMovieWatchlistMinAggregate;
  UserMovieWatchlistMinOrderByAggregateInput: UserMovieWatchlistMinOrderByAggregateInput;
  UserMovieWatchlistOrderByRelationAggregateInput: UserMovieWatchlistOrderByRelationAggregateInput;
  UserMovieWatchlistOrderByRelevanceInput: UserMovieWatchlistOrderByRelevanceInput;
  UserMovieWatchlistOrderByWithAggregationInput: UserMovieWatchlistOrderByWithAggregationInput;
  UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput: UserMovieWatchlistOrderByWithRelationAndSearchRelevanceInput;
  UserMovieWatchlistScalarWhereInput: UserMovieWatchlistScalarWhereInput;
  UserMovieWatchlistScalarWhereWithAggregatesInput: UserMovieWatchlistScalarWhereWithAggregatesInput;
  UserMovieWatchlistUpdateInput: UserMovieWatchlistUpdateInput;
  UserMovieWatchlistUpdateManyMutationInput: UserMovieWatchlistUpdateManyMutationInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput: UserMovieWatchlistUpdateManyWithWhereWithoutMovieInput;
  UserMovieWatchlistUpdateManyWithWhereWithoutUserInput: UserMovieWatchlistUpdateManyWithWhereWithoutUserInput;
  UserMovieWatchlistUpdateManyWithoutMovieNestedInput: UserMovieWatchlistUpdateManyWithoutMovieNestedInput;
  UserMovieWatchlistUpdateManyWithoutUserNestedInput: UserMovieWatchlistUpdateManyWithoutUserNestedInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpdateWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUpdateWithoutMovieInput: UserMovieWatchlistUpdateWithoutMovieInput;
  UserMovieWatchlistUpdateWithoutUserInput: UserMovieWatchlistUpdateWithoutUserInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutMovieInput;
  UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput: UserMovieWatchlistUpsertWithWhereUniqueWithoutUserInput;
  UserMovieWatchlistUserIdMovieIdCompoundUniqueInput: UserMovieWatchlistUserIdMovieIdCompoundUniqueInput;
  UserMovieWatchlistWhereInput: UserMovieWatchlistWhereInput;
  UserMovieWatchlistWhereUniqueInput: UserMovieWatchlistWhereUniqueInput;
  UserRegisterOutput: UserRegisterOutput;
}>;

export type ClientDirectiveArgs = { };

export type ClientDirectiveResolver<Result, Parent, ContextType = any, Args = ClientDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AffectedRowsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateGenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateGenre'] = ResolversParentTypes['AggregateGenre']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['GenreCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['GenreMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['GenreMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovie'] = ResolversParentTypes['AggregateMovie']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieCrewMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieCrewMember'] = ResolversParentTypes['AggregateMovieCrewMember']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieCrewMemberAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieCrewMemberMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieCrewMemberMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieCrewMemberSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieCrewMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieCrewMemberType'] = ResolversParentTypes['AggregateMovieCrewMemberType']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieLikedByUser'] = ResolversParentTypes['AggregateMovieLikedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieList'] = ResolversParentTypes['AggregateMovieList']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieListMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieListMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieListLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieListLikedByUser'] = ResolversParentTypes['AggregateMovieListLikedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieRating'] = ResolversParentTypes['AggregateMovieRating']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieRatingAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieRatingCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieRatingMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieRatingMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieRatingSumAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieReview'] = ResolversParentTypes['AggregateMovieReview']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieReviewLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieReviewLikedByUser'] = ResolversParentTypes['AggregateMovieReviewLikedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieSpokenLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieSpokenLanguage'] = ResolversParentTypes['AggregateMovieSpokenLanguage']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateMovieWatchedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateMovieWatchedByUser'] = ResolversParentTypes['AggregateMovieWatchedByUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateUserMovieWatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['AggregateUserMovieWatchlist'] = ResolversParentTypes['AggregateUserMovieWatchlist']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMinAggregate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type DecadesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Decades'] = ResolversParentTypes['Decades']> = ResolversObject<{
  decades?: Resolver<Array<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['GenreCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<GenreMoviesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreCount'] = ResolversParentTypes['GenreCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<GenreCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreCountAggregate'] = ResolversParentTypes['GenreCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreGroupBy'] = ResolversParentTypes['GenreGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['GenreCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['GenreMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['GenreMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreMaxAggregate'] = ResolversParentTypes['GenreMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenreMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenreMinAggregate'] = ResolversParentTypes['GenreMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  crewMembers?: Resolver<Array<ResolversTypes['MovieCrewMemberOnMovie']>, ParentType, ContextType, Partial<MovieCrewMembersArgs>>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType, Partial<MovieGenresArgs>>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inWatchlistByUsers?: Resolver<Array<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<MovieInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<Array<ResolversTypes['MovieKeywordCategory']>, ParentType, ContextType, Partial<MovieKeywordCategoriesArgs>>;
  likedBy?: Resolver<Array<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<MovieLikedByArgs>>;
  movieInfo?: Resolver<Maybe<ResolversTypes['MovieInfo']>, ParentType, ContextType, Partial<MovieMovieInfoArgs>>;
  movieLists?: Resolver<Array<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<MovieMovieListsArgs>>;
  movieStats?: Resolver<Maybe<ResolversTypes['MovieStats']>, ParentType, ContextType, Partial<MovieMovieStatsArgs>>;
  ratedBy?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<MovieRatedByArgs>>;
  spokenLanguages?: Resolver<Array<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<MovieSpokenLanguagesArgs>>;
  studios?: Resolver<Array<ResolversTypes['MovieStudio']>, ParentType, ContextType, Partial<MovieStudiosArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  watchedBy?: Resolver<Array<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<MovieWatchedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCount'] = ResolversParentTypes['MovieCount']> = ResolversObject<{
  crewMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountCrewMembersArgs>>;
  genres?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountGenresArgs>>;
  inWatchlistByUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountInWatchlistByUsersArgs>>;
  keywordCategories?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountKeywordCategoriesArgs>>;
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountLikedByArgs>>;
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountMovieListsArgs>>;
  ratedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountRatedByArgs>>;
  spokenLanguages?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountSpokenLanguagesArgs>>;
  studios?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountStudiosArgs>>;
  watchedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCountWatchedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCountAggregate'] = ResolversParentTypes['MovieCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMember'] = ResolversParentTypes['MovieCrewMember']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movies?: Resolver<Array<ResolversTypes['MovieCrewMemberOnMovie']>, ParentType, ContextType, Partial<MovieCrewMemberMoviesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberAvgAggregate'] = ResolversParentTypes['MovieCrewMemberAvgAggregate']> = ResolversObject<{
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberCount'] = ResolversParentTypes['MovieCrewMemberCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCrewMemberCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberCountAggregate'] = ResolversParentTypes['MovieCrewMemberCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberGroupBy'] = ResolversParentTypes['MovieCrewMemberGroupBy']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieCrewMemberAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieCrewMemberMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieCrewMemberMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieCrewMemberSumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photoUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberMaxAggregate'] = ResolversParentTypes['MovieCrewMemberMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imdbId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberMinAggregate'] = ResolversParentTypes['MovieCrewMemberMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imdbId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberOnMovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberOnMovie'] = ResolversParentTypes['MovieCrewMemberOnMovie']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  crewMember?: Resolver<ResolversTypes['MovieCrewMember'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieCrewMemberId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieCrewMemberType?: Resolver<ResolversTypes['MovieCrewMemberType'], ParentType, ContextType>;
  movieCrewMemberTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberSumAggregate'] = ResolversParentTypes['MovieCrewMemberSumAggregate']> = ResolversObject<{
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberType'] = ResolversParentTypes['MovieCrewMemberType']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeCount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieCrewMembers?: Resolver<Array<ResolversTypes['MovieCrewMemberOnMovie']>, ParentType, ContextType, Partial<MovieCrewMemberTypeMovieCrewMembersArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeCount'] = ResolversParentTypes['MovieCrewMemberTypeCount']> = ResolversObject<{
  movieCrewMembers?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieCrewMemberTypeCountMovieCrewMembersArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeCountAggregate'] = ResolversParentTypes['MovieCrewMemberTypeCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeGroupBy'] = ResolversParentTypes['MovieCrewMemberTypeGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieCrewMemberTypeMinAggregate']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeMaxAggregate'] = ResolversParentTypes['MovieCrewMemberTypeMaxAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieCrewMemberTypeMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCrewMemberTypeMinAggregate'] = ResolversParentTypes['MovieCrewMemberTypeMinAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieGroupBy'] = ResolversParentTypes['MovieGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieInfo'] = ResolversParentTypes['MovieInfo']> = ResolversObject<{
  alternativeTitles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  durationInMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imdbId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posterUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieKeywordCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieKeywordCategory'] = ResolversParentTypes['MovieKeywordCategory']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieKeywordCategoryCount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieKeywordCategoryCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieKeywordCategoryCount'] = ResolversParentTypes['MovieKeywordCategoryCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieKeywordCategoryCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUser'] = ResolversParentTypes['MovieLikedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserCountAggregate'] = ResolversParentTypes['MovieLikedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserGroupBy'] = ResolversParentTypes['MovieLikedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieLikedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserMaxAggregate'] = ResolversParentTypes['MovieLikedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieLikedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieLikedByUserMinAggregate'] = ResolversParentTypes['MovieLikedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieList'] = ResolversParentTypes['MovieList']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListCount']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['MovieListComment']>, ParentType, ContextType, Partial<MovieListCommentsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, Partial<MovieListLikedByArgs>>;
  movieListAuthor?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<MovieListMoviesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['MovieListStats']>, ParentType, ContextType, Partial<MovieListStatsArgs>>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListCommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListComment'] = ResolversParentTypes['MovieListComment']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieListId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListCount'] = ResolversParentTypes['MovieListCount']> = ResolversObject<{
  comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountCommentsArgs>>;
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountLikedByArgs>>;
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieListCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListCountAggregate'] = ResolversParentTypes['MovieListCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListGroupBy'] = ResolversParentTypes['MovieListGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieListMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieListMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListLikedByUser'] = ResolversParentTypes['MovieListLikedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieList?: Resolver<ResolversTypes['MovieList'], ParentType, ContextType>;
  movieListId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListLikedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListLikedByUserCountAggregate'] = ResolversParentTypes['MovieListLikedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieListId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListLikedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListLikedByUserGroupBy'] = ResolversParentTypes['MovieListLikedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieListLikedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieListId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListLikedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListLikedByUserMaxAggregate'] = ResolversParentTypes['MovieListLikedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieListId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListLikedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListLikedByUserMinAggregate'] = ResolversParentTypes['MovieListLikedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieListId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListMaxAggregate'] = ResolversParentTypes['MovieListMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListMinAggregate'] = ResolversParentTypes['MovieListMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieListStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieListStats'] = ResolversParentTypes['MovieListStats']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieListId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  views?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieMaxAggregate'] = ResolversParentTypes['MovieMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieMinAggregate'] = ResolversParentTypes['MovieMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRating'] = ResolversParentTypes['MovieRating']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<MovieRatingReviewArgs>>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingAvgAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingAvgAggregate'] = ResolversParentTypes['MovieRatingAvgAggregate']> = ResolversObject<{
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingCountAggregate'] = ResolversParentTypes['MovieRatingCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingGroupBy'] = ResolversParentTypes['MovieRatingGroupBy']> = ResolversObject<{
  _avg?: Resolver<Maybe<ResolversTypes['MovieRatingAvgAggregate']>, ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['MovieRatingCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieRatingMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieRatingMinAggregate']>, ParentType, ContextType>;
  _sum?: Resolver<Maybe<ResolversTypes['MovieRatingSumAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingMaxAggregate'] = ResolversParentTypes['MovieRatingMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingMinAggregate'] = ResolversParentTypes['MovieRatingMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieRatingSumAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatingSumAggregate'] = ResolversParentTypes['MovieRatingSumAggregate']> = ResolversObject<{
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReview'] = ResolversParentTypes['MovieReview']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCount']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  likedBy?: Resolver<Array<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<MovieReviewLikedByArgs>>;
  rating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewCount'] = ResolversParentTypes['MovieReviewCount']> = ResolversObject<{
  likedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieReviewCountLikedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewCountAggregate'] = ResolversParentTypes['MovieReviewCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewGroupBy'] = ResolversParentTypes['MovieReviewGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewMinAggregate']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ratingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUser'] = ResolversParentTypes['MovieReviewLikedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserCountAggregate'] = ResolversParentTypes['MovieReviewLikedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserGroupBy'] = ResolversParentTypes['MovieReviewLikedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieReviewId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserMaxAggregate'] = ResolversParentTypes['MovieReviewLikedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieReviewId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewLikedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewLikedByUserMinAggregate'] = ResolversParentTypes['MovieReviewLikedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieReviewId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewMaxAggregate'] = ResolversParentTypes['MovieReviewMaxAggregate']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieReviewMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieReviewMinAggregate'] = ResolversParentTypes['MovieReviewMinAggregate']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ratingId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguage'] = ResolversParentTypes['MovieSpokenLanguage']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  iso_639_1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<MovieSpokenLanguageMoviesArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageCount'] = ResolversParentTypes['MovieSpokenLanguageCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieSpokenLanguageCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageCountAggregate'] = ResolversParentTypes['MovieSpokenLanguageCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  iso_639_1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageGroupBy'] = ResolversParentTypes['MovieSpokenLanguageGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguageMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  iso_639_1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageMaxAggregate'] = ResolversParentTypes['MovieSpokenLanguageMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  iso_639_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieSpokenLanguageMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguageMinAggregate'] = ResolversParentTypes['MovieSpokenLanguageMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  iso_639_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStats'] = ResolversParentTypes['MovieStats']> = ResolversObject<{
  avgRating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overallPlaceInTop?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timesWatchedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalLikesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalRatingsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStudio'] = ResolversParentTypes['MovieStudio']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieStudioCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieStudioCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieStudioCount'] = ResolversParentTypes['MovieStudioCount']> = ResolversObject<{
  movies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovieStudioCountMoviesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUser'] = ResolversParentTypes['MovieWatchedByUser']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserCountAggregate'] = ResolversParentTypes['MovieWatchedByUserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserGroupBy'] = ResolversParentTypes['MovieWatchedByUserGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['MovieWatchedByUserMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserMaxAggregate'] = ResolversParentTypes['MovieWatchedByUserMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovieWatchedByUserMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieWatchedByUserMinAggregate'] = ResolversParentTypes['MovieWatchedByUserMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovifierAppUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovifierAppUser'] = ResolversParentTypes['MovifierAppUser']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['MovifierAppUserCount']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['MoviefireAppUserRole'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MovifierAppUserCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovifierAppUserCount'] = ResolversParentTypes['MovifierAppUserCount']> = ResolversObject<{
  MovieListLikedByUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListLikedByUserArgs>>;
  likedMovieReviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountLikedMovieReviewsArgs>>;
  likedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountLikedMoviesArgs>>;
  movieLists?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsArgs>>;
  movieListsComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountMovieListsCommentsArgs>>;
  ratedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountRatedMoviesArgs>>;
  watchedMovies?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountWatchedMoviesArgs>>;
  watchlist?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<MovifierAppUserCountWatchlistArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createManyGenre?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyGenreArgs, 'data'>>;
  createManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieArgs, 'data'>>;
  createManyMovieCrewMember?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieCrewMemberArgs, 'data'>>;
  createManyMovieCrewMemberType?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieCrewMemberTypeArgs, 'data'>>;
  createManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieLikedByUserArgs, 'data'>>;
  createManyMovieList?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieListArgs, 'data'>>;
  createManyMovieListLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieListLikedByUserArgs, 'data'>>;
  createManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieRatingArgs, 'data'>>;
  createManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieReviewArgs, 'data'>>;
  createManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieReviewLikedByUserArgs, 'data'>>;
  createManyMovieSpokenLanguage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieSpokenLanguageArgs, 'data'>>;
  createManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyMovieWatchedByUserArgs, 'data'>>;
  createManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationCreateManyUserMovieWatchlistArgs, 'data'>>;
  createOneGenre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType, RequireFields<MutationCreateOneGenreArgs, 'data'>>;
  createOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateOneMovieArgs, 'data'>>;
  createOneMovieCrewMember?: Resolver<ResolversTypes['MovieCrewMember'], ParentType, ContextType, RequireFields<MutationCreateOneMovieCrewMemberArgs, 'data'>>;
  createOneMovieCrewMemberType?: Resolver<ResolversTypes['MovieCrewMemberType'], ParentType, ContextType, RequireFields<MutationCreateOneMovieCrewMemberTypeArgs, 'data'>>;
  createOneMovieLikedByUser?: Resolver<ResolversTypes['MovieLikedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieLikedByUserArgs, 'data'>>;
  createOneMovieList?: Resolver<ResolversTypes['MovieList'], ParentType, ContextType, RequireFields<MutationCreateOneMovieListArgs, 'data'>>;
  createOneMovieListLikedByUser?: Resolver<ResolversTypes['MovieListLikedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieListLikedByUserArgs, 'data'>>;
  createOneMovieRating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType, RequireFields<MutationCreateOneMovieRatingArgs, 'data'>>;
  createOneMovieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType, RequireFields<MutationCreateOneMovieReviewArgs, 'data'>>;
  createOneMovieReviewLikedByUser?: Resolver<ResolversTypes['MovieReviewLikedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieReviewLikedByUserArgs, 'data'>>;
  createOneMovieSpokenLanguage?: Resolver<ResolversTypes['MovieSpokenLanguage'], ParentType, ContextType, RequireFields<MutationCreateOneMovieSpokenLanguageArgs, 'data'>>;
  createOneMovieWatchedByUser?: Resolver<ResolversTypes['MovieWatchedByUser'], ParentType, ContextType, RequireFields<MutationCreateOneMovieWatchedByUserArgs, 'data'>>;
  createOneMovifierAppUser?: Resolver<ResolversTypes['UserRegisterOutput'], ParentType, ContextType, RequireFields<MutationCreateOneMovifierAppUserArgs, 'data'>>;
  createOneUserMovieWatchlist?: Resolver<ResolversTypes['UserMovieWatchlist'], ParentType, ContextType, RequireFields<MutationCreateOneUserMovieWatchlistArgs, 'data'>>;
  deleteManyGenre?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyGenreArgs>>;
  deleteManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieArgs>>;
  deleteManyMovieCrewMember?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieCrewMemberArgs>>;
  deleteManyMovieCrewMemberType?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieCrewMemberTypeArgs>>;
  deleteManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieLikedByUserArgs>>;
  deleteManyMovieList?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieListArgs>>;
  deleteManyMovieListLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieListLikedByUserArgs>>;
  deleteManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieRatingArgs>>;
  deleteManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieReviewArgs>>;
  deleteManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieReviewLikedByUserArgs>>;
  deleteManyMovieSpokenLanguage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieSpokenLanguageArgs>>;
  deleteManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyMovieWatchedByUserArgs>>;
  deleteManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, Partial<MutationDeleteManyUserMovieWatchlistArgs>>;
  deleteOneGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<MutationDeleteOneGenreArgs, 'where'>>;
  deleteOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieArgs, 'where'>>;
  deleteOneMovieCrewMember?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieCrewMemberArgs, 'where'>>;
  deleteOneMovieCrewMemberType?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieCrewMemberTypeArgs, 'where'>>;
  deleteOneMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieLikedByUserArgs, 'where'>>;
  deleteOneMovieList?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieListArgs, 'where'>>;
  deleteOneMovieListLikedByUser?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieListLikedByUserArgs, 'where'>>;
  deleteOneMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieRatingArgs, 'where'>>;
  deleteOneMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieReviewArgs, 'where'>>;
  deleteOneMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieReviewLikedByUserArgs, 'where'>>;
  deleteOneMovieSpokenLanguage?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieSpokenLanguageArgs, 'where'>>;
  deleteOneMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<MutationDeleteOneMovieWatchedByUserArgs, 'where'>>;
  deleteOneUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<MutationDeleteOneUserMovieWatchlistArgs, 'where'>>;
  fetchMovieFromTmdb?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationFetchMovieFromTmdbArgs, 'imdbId'>>;
  loginUser?: Resolver<ResolversTypes['UserLoginOutput'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'data'>>;
  updateManyGenre?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyGenreArgs, 'data'>>;
  updateManyMovie?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieArgs, 'data'>>;
  updateManyMovieCrewMember?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieCrewMemberArgs, 'data'>>;
  updateManyMovieCrewMemberType?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieCrewMemberTypeArgs, 'data'>>;
  updateManyMovieLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieLikedByUserArgs, 'data'>>;
  updateManyMovieList?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieListArgs, 'data'>>;
  updateManyMovieListLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieListLikedByUserArgs, 'data'>>;
  updateManyMovieRating?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieRatingArgs, 'data'>>;
  updateManyMovieReview?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieReviewArgs, 'data'>>;
  updateManyMovieReviewLikedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieReviewLikedByUserArgs, 'data'>>;
  updateManyMovieSpokenLanguage?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieSpokenLanguageArgs, 'data'>>;
  updateManyMovieWatchedByUser?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyMovieWatchedByUserArgs, 'data'>>;
  updateManyUserMovieWatchlist?: Resolver<ResolversTypes['AffectedRowsOutput'], ParentType, ContextType, RequireFields<MutationUpdateManyUserMovieWatchlistArgs, 'data'>>;
  updateOneGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<MutationUpdateOneGenreArgs, 'data' | 'where'>>;
  updateOneMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieArgs, 'data' | 'where'>>;
  updateOneMovieCrewMember?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieCrewMemberArgs, 'data' | 'where'>>;
  updateOneMovieCrewMemberType?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieCrewMemberTypeArgs, 'data' | 'where'>>;
  updateOneMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieLikedByUserArgs, 'data' | 'where'>>;
  updateOneMovieList?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieListArgs, 'data' | 'where'>>;
  updateOneMovieListLikedByUser?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieListLikedByUserArgs, 'data' | 'where'>>;
  updateOneMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieRatingArgs, 'data' | 'where'>>;
  updateOneMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieReviewArgs, 'data' | 'where'>>;
  updateOneMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieReviewLikedByUserArgs, 'data' | 'where'>>;
  updateOneMovieSpokenLanguage?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieSpokenLanguageArgs, 'data' | 'where'>>;
  updateOneMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<MutationUpdateOneMovieWatchedByUserArgs, 'data' | 'where'>>;
  updateOneUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<MutationUpdateOneUserMovieWatchlistArgs, 'data' | 'where'>>;
  upsertOneGenre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType, RequireFields<MutationUpsertOneGenreArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieCrewMember?: Resolver<ResolversTypes['MovieCrewMember'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieCrewMemberArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieCrewMemberType?: Resolver<ResolversTypes['MovieCrewMemberType'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieCrewMemberTypeArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieLikedByUser?: Resolver<ResolversTypes['MovieLikedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieLikedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieList?: Resolver<ResolversTypes['MovieList'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieListArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieListLikedByUser?: Resolver<ResolversTypes['MovieListLikedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieListLikedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieRating?: Resolver<ResolversTypes['MovieRating'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieRatingArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieReview?: Resolver<ResolversTypes['MovieReview'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieReviewArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieReviewLikedByUser?: Resolver<ResolversTypes['MovieReviewLikedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieReviewLikedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieSpokenLanguage?: Resolver<ResolversTypes['MovieSpokenLanguage'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieSpokenLanguageArgs, 'create' | 'update' | 'where'>>;
  upsertOneMovieWatchedByUser?: Resolver<ResolversTypes['MovieWatchedByUser'], ParentType, ContextType, RequireFields<MutationUpsertOneMovieWatchedByUserArgs, 'create' | 'update' | 'where'>>;
  upsertOneUserMovieWatchlist?: Resolver<ResolversTypes['UserMovieWatchlist'], ParentType, ContextType, RequireFields<MutationUpsertOneUserMovieWatchlistArgs, 'create' | 'update' | 'where'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  aggregateGenre?: Resolver<ResolversTypes['AggregateGenre'], ParentType, ContextType, Partial<QueryAggregateGenreArgs>>;
  aggregateMovie?: Resolver<ResolversTypes['AggregateMovie'], ParentType, ContextType, Partial<QueryAggregateMovieArgs>>;
  aggregateMovieCrewMember?: Resolver<ResolversTypes['AggregateMovieCrewMember'], ParentType, ContextType, Partial<QueryAggregateMovieCrewMemberArgs>>;
  aggregateMovieCrewMemberType?: Resolver<ResolversTypes['AggregateMovieCrewMemberType'], ParentType, ContextType, Partial<QueryAggregateMovieCrewMemberTypeArgs>>;
  aggregateMovieLikedByUser?: Resolver<ResolversTypes['AggregateMovieLikedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieLikedByUserArgs>>;
  aggregateMovieList?: Resolver<ResolversTypes['AggregateMovieList'], ParentType, ContextType, Partial<QueryAggregateMovieListArgs>>;
  aggregateMovieListLikedByUser?: Resolver<ResolversTypes['AggregateMovieListLikedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieListLikedByUserArgs>>;
  aggregateMovieRating?: Resolver<ResolversTypes['AggregateMovieRating'], ParentType, ContextType, Partial<QueryAggregateMovieRatingArgs>>;
  aggregateMovieReview?: Resolver<ResolversTypes['AggregateMovieReview'], ParentType, ContextType, Partial<QueryAggregateMovieReviewArgs>>;
  aggregateMovieReviewLikedByUser?: Resolver<ResolversTypes['AggregateMovieReviewLikedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieReviewLikedByUserArgs>>;
  aggregateMovieSpokenLanguage?: Resolver<ResolversTypes['AggregateMovieSpokenLanguage'], ParentType, ContextType, Partial<QueryAggregateMovieSpokenLanguageArgs>>;
  aggregateMovieWatchedByUser?: Resolver<ResolversTypes['AggregateMovieWatchedByUser'], ParentType, ContextType, Partial<QueryAggregateMovieWatchedByUserArgs>>;
  aggregateUserMovieWatchlist?: Resolver<ResolversTypes['AggregateUserMovieWatchlist'], ParentType, ContextType, Partial<QueryAggregateUserMovieWatchlistArgs>>;
  findFirstGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, Partial<QueryFindFirstGenreArgs>>;
  findFirstGenreOrThrow?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, Partial<QueryFindFirstGenreOrThrowArgs>>;
  findFirstMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieArgs>>;
  findFirstMovieCrewMember?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, Partial<QueryFindFirstMovieCrewMemberArgs>>;
  findFirstMovieCrewMemberOrThrow?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, Partial<QueryFindFirstMovieCrewMemberOrThrowArgs>>;
  findFirstMovieCrewMemberType?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, Partial<QueryFindFirstMovieCrewMemberTypeArgs>>;
  findFirstMovieCrewMemberTypeOrThrow?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, Partial<QueryFindFirstMovieCrewMemberTypeOrThrowArgs>>;
  findFirstMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieLikedByUserArgs>>;
  findFirstMovieLikedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieLikedByUserOrThrowArgs>>;
  findFirstMovieList?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<QueryFindFirstMovieListArgs>>;
  findFirstMovieListLikedByUser?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieListLikedByUserArgs>>;
  findFirstMovieListLikedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieListLikedByUserOrThrowArgs>>;
  findFirstMovieListOrThrow?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<QueryFindFirstMovieListOrThrowArgs>>;
  findFirstMovieOrThrow?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryFindFirstMovieOrThrowArgs>>;
  findFirstMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryFindFirstMovieRatingArgs>>;
  findFirstMovieRatingOrThrow?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryFindFirstMovieRatingOrThrowArgs>>;
  findFirstMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewArgs>>;
  findFirstMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewLikedByUserArgs>>;
  findFirstMovieReviewLikedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewLikedByUserOrThrowArgs>>;
  findFirstMovieReviewOrThrow?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryFindFirstMovieReviewOrThrowArgs>>;
  findFirstMovieSpokenLanguage?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<QueryFindFirstMovieSpokenLanguageArgs>>;
  findFirstMovieSpokenLanguageOrThrow?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<QueryFindFirstMovieSpokenLanguageOrThrowArgs>>;
  findFirstMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieWatchedByUserArgs>>;
  findFirstMovieWatchedByUserOrThrow?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryFindFirstMovieWatchedByUserOrThrowArgs>>;
  findFirstUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryFindFirstUserMovieWatchlistArgs>>;
  findFirstUserMovieWatchlistOrThrow?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryFindFirstUserMovieWatchlistOrThrowArgs>>;
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QueryGenreArgs, 'where'>>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType, Partial<QueryGenresArgs>>;
  getGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QueryGetGenreArgs, 'where'>>;
  getMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryGetMovieArgs, 'where'>>;
  getMovieCrewMember?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, RequireFields<QueryGetMovieCrewMemberArgs, 'where'>>;
  getMovieCrewMemberType?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, RequireFields<QueryGetMovieCrewMemberTypeArgs, 'where'>>;
  getMovieDecades?: Resolver<ResolversTypes['Decades'], ParentType, ContextType>;
  getMovieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieLikedByUserArgs, 'where'>>;
  getMovieList?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, RequireFields<QueryGetMovieListArgs, 'where'>>;
  getMovieListLikedByUser?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieListLikedByUserArgs, 'where'>>;
  getMovieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<QueryGetMovieRatingArgs, 'where'>>;
  getMovieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<QueryGetMovieReviewArgs, 'where'>>;
  getMovieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieReviewLikedByUserArgs, 'where'>>;
  getMovieSpokenLanguage?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, RequireFields<QueryGetMovieSpokenLanguageArgs, 'where'>>;
  getMovieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<QueryGetMovieWatchedByUserArgs, 'where'>>;
  getUserMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<QueryGetUserMovieWatchlistArgs, 'where'>>;
  groupByGenre?: Resolver<Array<ResolversTypes['GenreGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByGenreArgs, 'by'>>;
  groupByMovie?: Resolver<Array<ResolversTypes['MovieGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieArgs, 'by'>>;
  groupByMovieCrewMember?: Resolver<Array<ResolversTypes['MovieCrewMemberGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieCrewMemberArgs, 'by'>>;
  groupByMovieCrewMemberType?: Resolver<Array<ResolversTypes['MovieCrewMemberTypeGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieCrewMemberTypeArgs, 'by'>>;
  groupByMovieLikedByUser?: Resolver<Array<ResolversTypes['MovieLikedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieLikedByUserArgs, 'by'>>;
  groupByMovieList?: Resolver<Array<ResolversTypes['MovieListGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieListArgs, 'by'>>;
  groupByMovieListLikedByUser?: Resolver<Array<ResolversTypes['MovieListLikedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieListLikedByUserArgs, 'by'>>;
  groupByMovieRating?: Resolver<Array<ResolversTypes['MovieRatingGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieRatingArgs, 'by'>>;
  groupByMovieReview?: Resolver<Array<ResolversTypes['MovieReviewGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieReviewArgs, 'by'>>;
  groupByMovieReviewLikedByUser?: Resolver<Array<ResolversTypes['MovieReviewLikedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieReviewLikedByUserArgs, 'by'>>;
  groupByMovieSpokenLanguage?: Resolver<Array<ResolversTypes['MovieSpokenLanguageGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieSpokenLanguageArgs, 'by'>>;
  groupByMovieWatchedByUser?: Resolver<Array<ResolversTypes['MovieWatchedByUserGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByMovieWatchedByUserArgs, 'by'>>;
  groupByUserMovieWatchlist?: Resolver<Array<ResolversTypes['UserMovieWatchlistGroupBy']>, ParentType, ContextType, RequireFields<QueryGroupByUserMovieWatchlistArgs, 'by'>>;
  me?: Resolver<Maybe<ResolversTypes['MovifierAppUser']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'where'>>;
  movieCrewMember?: Resolver<Maybe<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, RequireFields<QueryMovieCrewMemberArgs, 'where'>>;
  movieCrewMemberType?: Resolver<Maybe<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, RequireFields<QueryMovieCrewMemberTypeArgs, 'where'>>;
  movieCrewMemberTypes?: Resolver<Array<ResolversTypes['MovieCrewMemberType']>, ParentType, ContextType, Partial<QueryMovieCrewMemberTypesArgs>>;
  movieCrewMembers?: Resolver<Array<ResolversTypes['MovieCrewMember']>, ParentType, ContextType, Partial<QueryMovieCrewMembersArgs>>;
  movieLikedByUser?: Resolver<Maybe<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, RequireFields<QueryMovieLikedByUserArgs, 'where'>>;
  movieLikedByUsers?: Resolver<Array<ResolversTypes['MovieLikedByUser']>, ParentType, ContextType, Partial<QueryMovieLikedByUsersArgs>>;
  movieList?: Resolver<Maybe<ResolversTypes['MovieList']>, ParentType, ContextType, RequireFields<QueryMovieListArgs, 'where'>>;
  movieListLikedByUser?: Resolver<Maybe<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, RequireFields<QueryMovieListLikedByUserArgs, 'where'>>;
  movieListLikedByUsers?: Resolver<Array<ResolversTypes['MovieListLikedByUser']>, ParentType, ContextType, Partial<QueryMovieListLikedByUsersArgs>>;
  movieLists?: Resolver<Array<ResolversTypes['MovieList']>, ParentType, ContextType, Partial<QueryMovieListsArgs>>;
  movieRating?: Resolver<Maybe<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<QueryMovieRatingArgs, 'where'>>;
  movieRatings?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, Partial<QueryMovieRatingsArgs>>;
  movieRatingsSearchWithMovies?: Resolver<Array<ResolversTypes['MovieRating']>, ParentType, ContextType, RequireFields<QueryMovieRatingsSearchWithMoviesArgs, 'searchCriteria'>>;
  movieReview?: Resolver<Maybe<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<QueryMovieReviewArgs, 'where'>>;
  movieReviewLikedByUser?: Resolver<Maybe<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, RequireFields<QueryMovieReviewLikedByUserArgs, 'where'>>;
  movieReviewLikedByUsers?: Resolver<Array<ResolversTypes['MovieReviewLikedByUser']>, ParentType, ContextType, Partial<QueryMovieReviewLikedByUsersArgs>>;
  movieReviews?: Resolver<Array<ResolversTypes['MovieReview']>, ParentType, ContextType, Partial<QueryMovieReviewsArgs>>;
  movieReviewsSearchWithMovies?: Resolver<Array<ResolversTypes['MovieReview']>, ParentType, ContextType, RequireFields<QueryMovieReviewsSearchWithMoviesArgs, 'searchCriteria'>>;
  movieSpokenLanguage?: Resolver<Maybe<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, RequireFields<QueryMovieSpokenLanguageArgs, 'where'>>;
  movieSpokenLanguages?: Resolver<Array<ResolversTypes['MovieSpokenLanguage']>, ParentType, ContextType, Partial<QueryMovieSpokenLanguagesArgs>>;
  movieWatchedByUser?: Resolver<Maybe<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, RequireFields<QueryMovieWatchedByUserArgs, 'where'>>;
  movieWatchedByUsers?: Resolver<Array<ResolversTypes['MovieWatchedByUser']>, ParentType, ContextType, Partial<QueryMovieWatchedByUsersArgs>>;
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, Partial<QueryMoviesArgs>>;
  movifierAppUsers?: Resolver<Array<ResolversTypes['MovifierAppUser']>, ParentType, ContextType, Partial<QueryMovifierAppUsersArgs>>;
  searchMovieLists?: Resolver<Array<ResolversTypes['MovieList']>, ParentType, ContextType, RequireFields<QuerySearchMovieListsArgs, 'searchCriteria'>>;
  searchMovies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QuerySearchMoviesArgs, 'searchCriteria'>>;
  userMovieWatchlist?: Resolver<Maybe<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, RequireFields<QueryUserMovieWatchlistArgs, 'where'>>;
  userMovieWatchlists?: Resolver<Array<ResolversTypes['UserMovieWatchlist']>, ParentType, ContextType, Partial<QueryUserMovieWatchlistsArgs>>;
}>;

export type UserLoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLoginOutput'] = ResolversParentTypes['UserLoginOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlist'] = ResolversParentTypes['UserMovieWatchlist']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistCountAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistCountAggregate'] = ResolversParentTypes['UserMovieWatchlistCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistGroupByResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistGroupBy'] = ResolversParentTypes['UserMovieWatchlistGroupBy']> = ResolversObject<{
  _count?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistCountAggregate']>, ParentType, ContextType>;
  _max?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMaxAggregate']>, ParentType, ContextType>;
  _min?: Resolver<Maybe<ResolversTypes['UserMovieWatchlistMinAggregate']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  movieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistMaxAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistMaxAggregate'] = ResolversParentTypes['UserMovieWatchlistMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMovieWatchlistMinAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMovieWatchlistMinAggregate'] = ResolversParentTypes['UserMovieWatchlistMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTimeISO']>, ParentType, ContextType>;
  movieId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserRegisterOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRegisterOutput'] = ResolversParentTypes['UserRegisterOutput']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['MovifierAppUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
  AggregateGenre?: AggregateGenreResolvers<ContextType>;
  AggregateMovie?: AggregateMovieResolvers<ContextType>;
  AggregateMovieCrewMember?: AggregateMovieCrewMemberResolvers<ContextType>;
  AggregateMovieCrewMemberType?: AggregateMovieCrewMemberTypeResolvers<ContextType>;
  AggregateMovieLikedByUser?: AggregateMovieLikedByUserResolvers<ContextType>;
  AggregateMovieList?: AggregateMovieListResolvers<ContextType>;
  AggregateMovieListLikedByUser?: AggregateMovieListLikedByUserResolvers<ContextType>;
  AggregateMovieRating?: AggregateMovieRatingResolvers<ContextType>;
  AggregateMovieReview?: AggregateMovieReviewResolvers<ContextType>;
  AggregateMovieReviewLikedByUser?: AggregateMovieReviewLikedByUserResolvers<ContextType>;
  AggregateMovieSpokenLanguage?: AggregateMovieSpokenLanguageResolvers<ContextType>;
  AggregateMovieWatchedByUser?: AggregateMovieWatchedByUserResolvers<ContextType>;
  AggregateUserMovieWatchlist?: AggregateUserMovieWatchlistResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  Decades?: DecadesResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  GenreCount?: GenreCountResolvers<ContextType>;
  GenreCountAggregate?: GenreCountAggregateResolvers<ContextType>;
  GenreGroupBy?: GenreGroupByResolvers<ContextType>;
  GenreMaxAggregate?: GenreMaxAggregateResolvers<ContextType>;
  GenreMinAggregate?: GenreMinAggregateResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MovieCount?: MovieCountResolvers<ContextType>;
  MovieCountAggregate?: MovieCountAggregateResolvers<ContextType>;
  MovieCrewMember?: MovieCrewMemberResolvers<ContextType>;
  MovieCrewMemberAvgAggregate?: MovieCrewMemberAvgAggregateResolvers<ContextType>;
  MovieCrewMemberCount?: MovieCrewMemberCountResolvers<ContextType>;
  MovieCrewMemberCountAggregate?: MovieCrewMemberCountAggregateResolvers<ContextType>;
  MovieCrewMemberGroupBy?: MovieCrewMemberGroupByResolvers<ContextType>;
  MovieCrewMemberMaxAggregate?: MovieCrewMemberMaxAggregateResolvers<ContextType>;
  MovieCrewMemberMinAggregate?: MovieCrewMemberMinAggregateResolvers<ContextType>;
  MovieCrewMemberOnMovie?: MovieCrewMemberOnMovieResolvers<ContextType>;
  MovieCrewMemberSumAggregate?: MovieCrewMemberSumAggregateResolvers<ContextType>;
  MovieCrewMemberType?: MovieCrewMemberTypeResolvers<ContextType>;
  MovieCrewMemberTypeCount?: MovieCrewMemberTypeCountResolvers<ContextType>;
  MovieCrewMemberTypeCountAggregate?: MovieCrewMemberTypeCountAggregateResolvers<ContextType>;
  MovieCrewMemberTypeGroupBy?: MovieCrewMemberTypeGroupByResolvers<ContextType>;
  MovieCrewMemberTypeMaxAggregate?: MovieCrewMemberTypeMaxAggregateResolvers<ContextType>;
  MovieCrewMemberTypeMinAggregate?: MovieCrewMemberTypeMinAggregateResolvers<ContextType>;
  MovieGroupBy?: MovieGroupByResolvers<ContextType>;
  MovieInfo?: MovieInfoResolvers<ContextType>;
  MovieKeywordCategory?: MovieKeywordCategoryResolvers<ContextType>;
  MovieKeywordCategoryCount?: MovieKeywordCategoryCountResolvers<ContextType>;
  MovieLikedByUser?: MovieLikedByUserResolvers<ContextType>;
  MovieLikedByUserCountAggregate?: MovieLikedByUserCountAggregateResolvers<ContextType>;
  MovieLikedByUserGroupBy?: MovieLikedByUserGroupByResolvers<ContextType>;
  MovieLikedByUserMaxAggregate?: MovieLikedByUserMaxAggregateResolvers<ContextType>;
  MovieLikedByUserMinAggregate?: MovieLikedByUserMinAggregateResolvers<ContextType>;
  MovieList?: MovieListResolvers<ContextType>;
  MovieListComment?: MovieListCommentResolvers<ContextType>;
  MovieListCount?: MovieListCountResolvers<ContextType>;
  MovieListCountAggregate?: MovieListCountAggregateResolvers<ContextType>;
  MovieListGroupBy?: MovieListGroupByResolvers<ContextType>;
  MovieListLikedByUser?: MovieListLikedByUserResolvers<ContextType>;
  MovieListLikedByUserCountAggregate?: MovieListLikedByUserCountAggregateResolvers<ContextType>;
  MovieListLikedByUserGroupBy?: MovieListLikedByUserGroupByResolvers<ContextType>;
  MovieListLikedByUserMaxAggregate?: MovieListLikedByUserMaxAggregateResolvers<ContextType>;
  MovieListLikedByUserMinAggregate?: MovieListLikedByUserMinAggregateResolvers<ContextType>;
  MovieListMaxAggregate?: MovieListMaxAggregateResolvers<ContextType>;
  MovieListMinAggregate?: MovieListMinAggregateResolvers<ContextType>;
  MovieListStats?: MovieListStatsResolvers<ContextType>;
  MovieMaxAggregate?: MovieMaxAggregateResolvers<ContextType>;
  MovieMinAggregate?: MovieMinAggregateResolvers<ContextType>;
  MovieRating?: MovieRatingResolvers<ContextType>;
  MovieRatingAvgAggregate?: MovieRatingAvgAggregateResolvers<ContextType>;
  MovieRatingCountAggregate?: MovieRatingCountAggregateResolvers<ContextType>;
  MovieRatingGroupBy?: MovieRatingGroupByResolvers<ContextType>;
  MovieRatingMaxAggregate?: MovieRatingMaxAggregateResolvers<ContextType>;
  MovieRatingMinAggregate?: MovieRatingMinAggregateResolvers<ContextType>;
  MovieRatingSumAggregate?: MovieRatingSumAggregateResolvers<ContextType>;
  MovieReview?: MovieReviewResolvers<ContextType>;
  MovieReviewCount?: MovieReviewCountResolvers<ContextType>;
  MovieReviewCountAggregate?: MovieReviewCountAggregateResolvers<ContextType>;
  MovieReviewGroupBy?: MovieReviewGroupByResolvers<ContextType>;
  MovieReviewLikedByUser?: MovieReviewLikedByUserResolvers<ContextType>;
  MovieReviewLikedByUserCountAggregate?: MovieReviewLikedByUserCountAggregateResolvers<ContextType>;
  MovieReviewLikedByUserGroupBy?: MovieReviewLikedByUserGroupByResolvers<ContextType>;
  MovieReviewLikedByUserMaxAggregate?: MovieReviewLikedByUserMaxAggregateResolvers<ContextType>;
  MovieReviewLikedByUserMinAggregate?: MovieReviewLikedByUserMinAggregateResolvers<ContextType>;
  MovieReviewMaxAggregate?: MovieReviewMaxAggregateResolvers<ContextType>;
  MovieReviewMinAggregate?: MovieReviewMinAggregateResolvers<ContextType>;
  MovieSpokenLanguage?: MovieSpokenLanguageResolvers<ContextType>;
  MovieSpokenLanguageCount?: MovieSpokenLanguageCountResolvers<ContextType>;
  MovieSpokenLanguageCountAggregate?: MovieSpokenLanguageCountAggregateResolvers<ContextType>;
  MovieSpokenLanguageGroupBy?: MovieSpokenLanguageGroupByResolvers<ContextType>;
  MovieSpokenLanguageMaxAggregate?: MovieSpokenLanguageMaxAggregateResolvers<ContextType>;
  MovieSpokenLanguageMinAggregate?: MovieSpokenLanguageMinAggregateResolvers<ContextType>;
  MovieStats?: MovieStatsResolvers<ContextType>;
  MovieStudio?: MovieStudioResolvers<ContextType>;
  MovieStudioCount?: MovieStudioCountResolvers<ContextType>;
  MovieWatchedByUser?: MovieWatchedByUserResolvers<ContextType>;
  MovieWatchedByUserCountAggregate?: MovieWatchedByUserCountAggregateResolvers<ContextType>;
  MovieWatchedByUserGroupBy?: MovieWatchedByUserGroupByResolvers<ContextType>;
  MovieWatchedByUserMaxAggregate?: MovieWatchedByUserMaxAggregateResolvers<ContextType>;
  MovieWatchedByUserMinAggregate?: MovieWatchedByUserMinAggregateResolvers<ContextType>;
  MovifierAppUser?: MovifierAppUserResolvers<ContextType>;
  MovifierAppUserCount?: MovifierAppUserCountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserLoginOutput?: UserLoginOutputResolvers<ContextType>;
  UserMovieWatchlist?: UserMovieWatchlistResolvers<ContextType>;
  UserMovieWatchlistCountAggregate?: UserMovieWatchlistCountAggregateResolvers<ContextType>;
  UserMovieWatchlistGroupBy?: UserMovieWatchlistGroupByResolvers<ContextType>;
  UserMovieWatchlistMaxAggregate?: UserMovieWatchlistMaxAggregateResolvers<ContextType>;
  UserMovieWatchlistMinAggregate?: UserMovieWatchlistMinAggregateResolvers<ContextType>;
  UserRegisterOutput?: UserRegisterOutputResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  client?: ClientDirectiveResolver<any, any, ContextType>;
}>;

export const MovieCardItemFragmentDoc = gql`
    fragment MovieCardItem on Movie {
  id
  movieInfo {
    id
    title
    posterUrl
  }
}
    `;
export const UserMovieReviewCardItemFragmentDoc = gql`
    fragment UserMovieReviewCardItem on MovieReview {
  id
  createdAt
  content
  rating {
    id
    rating
    movie {
      id
      ...MovieCardItem
    }
  }
}
    ${MovieCardItemFragmentDoc}`;
export const CrewMemberTypeCardItemFragmentDoc = gql`
    fragment CrewMemberTypeCardItem on MovieCrewMemberType {
  id
  name
  _count {
    movieCrewMembers
  }
}
    `;
export const MovieGenreCardItemFragmentDoc = gql`
    fragment MovieGenreCardItem on Genre {
  id
  name
  _count {
    movies
  }
}
    `;
export const MovieListCardItemFragmentDoc = gql`
    fragment MovieListCardItem on MovieList {
  id
  name
  tags
  movies(take: 5) {
    id
    movieInfo {
      id
      title
      posterUrl
    }
  }
  movieListAuthor {
    id
    username
  }
}
    `;
export const MovieListPageItemFragmentDoc = gql`
    fragment MovieListPageItem on MovieList {
  id
  name
  description
  tags
  movies {
    id
    ...MovieCardItem
  }
  movieListAuthor {
    id
    username
  }
}
    ${MovieCardItemFragmentDoc}`;
export const MinimalisticMovieSearchCardItemFragmentDoc = gql`
    fragment MinimalisticMovieSearchCardItem on Movie {
  id
  movieInfo {
    id
    title
    releaseDate
  }
  crewMembers {
    crewMember {
      id
      name
    }
    movieCrewMemberType {
      id
      name
    }
  }
}
    `;
export const MovieReviewCardItemFragmentDoc = gql`
    fragment MovieReviewCardItem on MovieReview {
  id
  content
  rating {
    id
    rating
    user {
      id
      username
    }
  }
  _count {
    likedBy
  }
}
    `;
export const DirectorNamesTitleItemFragmentDoc = gql`
    fragment DirectorNamesTitleItem on Movie {
  crewMembers(orderBy: [{crewMember: {popularity: desc}}, {order: asc}]) {
    movieCrewMemberType {
      id
      name
    }
    crewMember {
      name
      id
    }
  }
}
    `;
export const MoviePagePosterItemFragmentDoc = gql`
    fragment MoviePagePosterItem on Movie {
  movieInfo {
    id
    posterUrl
    title
  }
}
    `;
export const MoviePageDetailsTabsItemFragmentDoc = gql`
    fragment MoviePageDetailsTabsItem on Movie {
  movieInfo {
    alternativeTitles
  }
  crewMembers(orderBy: [{crewMember: {popularity: desc}}, {order: asc}]) {
    movieCrewMemberType {
      id
      name
    }
    crewMember {
      name
      id
    }
  }
  studios {
    name
  }
  genres {
    name
  }
  keywordCategories {
    id
    name
  }
  spokenLanguages {
    iso_639_1
    name
  }
}
    `;
export const MoviePageItemFragmentDoc = gql`
    fragment MoviePageItem on Movie {
  id
  movieInfo {
    id
    title
    description
    releaseDate
    durationInMinutes
  }
  ...DirectorNamesTitleItem
  ...MoviePagePosterItem
  ...MoviePageDetailsTabsItem
}
    ${DirectorNamesTitleItemFragmentDoc}
${MoviePagePosterItemFragmentDoc}
${MoviePageDetailsTabsItemFragmentDoc}`;
export const MinimalisticGenreSearchItemFragmentDoc = gql`
    fragment MinimalisticGenreSearchItem on Genre {
  id
  name
}
    `;
export const MinimalisticLanguageSearchCardItemFragmentDoc = gql`
    fragment MinimalisticLanguageSearchCardItem on MovieSpokenLanguage {
  iso_639_1
  name
}
    `;
export const PersonPagePosterItemFragmentDoc = gql`
    fragment PersonPagePosterItem on MovieCrewMember {
  photoUrl
  name
}
    `;
export const PersonPageItemFragmentDoc = gql`
    fragment PersonPageItem on MovieCrewMember {
  id
  name
  imdbId
  description
  popularity
  ...PersonPagePosterItem
}
    ${PersonPagePosterItemFragmentDoc}`;
export const CurrentUserFragmentDoc = gql`
    fragment CurrentUser on MovifierAppUser {
  id
  role
  name
}
    `;
export const GetMovieListForPageDocument = gql`
    query GetMovieListForPage($id: String!) {
  movieList(where: {id: $id}) {
    ...MovieListPageItem
  }
}
    ${MovieListPageItemFragmentDoc}`;

/**
 * __useGetMovieListForPageQuery__
 *
 * To run a query within a React component, call `useGetMovieListForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieListForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieListForPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieListForPageQuery(baseOptions: Apollo.QueryHookOptions<GetMovieListForPageQuery, GetMovieListForPageQueryVariables> & ({ variables: GetMovieListForPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>(GetMovieListForPageDocument, options);
      }
export function useGetMovieListForPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>(GetMovieListForPageDocument, options);
        }
export function useGetMovieListForPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>(GetMovieListForPageDocument, options);
        }
export type GetMovieListForPageQueryHookResult = ReturnType<typeof useGetMovieListForPageQuery>;
export type GetMovieListForPageLazyQueryHookResult = ReturnType<typeof useGetMovieListForPageLazyQuery>;
export type GetMovieListForPageSuspenseQueryHookResult = ReturnType<typeof useGetMovieListForPageSuspenseQuery>;
export type GetMovieListForPageQueryResult = Apollo.QueryResult<GetMovieListForPageQuery, GetMovieListForPageQueryVariables>;
export const GetMovieForPageDocument = gql`
    query GetMovieForPage($id: String!) {
  movie(where: {id: $id}) {
    ...MoviePageItem
  }
}
    ${MoviePageItemFragmentDoc}`;

/**
 * __useGetMovieForPageQuery__
 *
 * To run a query within a React component, call `useGetMovieForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieForPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieForPageQuery(baseOptions: Apollo.QueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables> & ({ variables: GetMovieForPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
      }
export function useGetMovieForPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
        }
export function useGetMovieForPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieForPageQuery, GetMovieForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieForPageQuery, GetMovieForPageQueryVariables>(GetMovieForPageDocument, options);
        }
export type GetMovieForPageQueryHookResult = ReturnType<typeof useGetMovieForPageQuery>;
export type GetMovieForPageLazyQueryHookResult = ReturnType<typeof useGetMovieForPageLazyQuery>;
export type GetMovieForPageSuspenseQueryHookResult = ReturnType<typeof useGetMovieForPageSuspenseQuery>;
export type GetMovieForPageQueryResult = Apollo.QueryResult<GetMovieForPageQuery, GetMovieForPageQueryVariables>;
export const GetSpokenLanguagesDocument = gql`
    query GetSpokenLanguages {
  movieSpokenLanguages {
    iso_639_1
    name
  }
}
    `;

/**
 * __useGetSpokenLanguagesQuery__
 *
 * To run a query within a React component, call `useGetSpokenLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpokenLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpokenLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpokenLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>(GetSpokenLanguagesDocument, options);
      }
export function useGetSpokenLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>(GetSpokenLanguagesDocument, options);
        }
export function useGetSpokenLanguagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>(GetSpokenLanguagesDocument, options);
        }
export type GetSpokenLanguagesQueryHookResult = ReturnType<typeof useGetSpokenLanguagesQuery>;
export type GetSpokenLanguagesLazyQueryHookResult = ReturnType<typeof useGetSpokenLanguagesLazyQuery>;
export type GetSpokenLanguagesSuspenseQueryHookResult = ReturnType<typeof useGetSpokenLanguagesSuspenseQuery>;
export type GetSpokenLanguagesQueryResult = Apollo.QueryResult<GetSpokenLanguagesQuery, GetSpokenLanguagesQueryVariables>;
export const GetMoviesForHomePageDocument = gql`
    query GetMoviesForHomePage {
  movies(orderBy: {movieInfo: {releaseDate: desc}}, take: 15) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetMoviesForHomePageQuery__
 *
 * To run a query within a React component, call `useGetMoviesForHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesForHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesForHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesForHomePageQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
      }
export function useGetMoviesForHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
        }
export function useGetMoviesForHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>(GetMoviesForHomePageDocument, options);
        }
export type GetMoviesForHomePageQueryHookResult = ReturnType<typeof useGetMoviesForHomePageQuery>;
export type GetMoviesForHomePageLazyQueryHookResult = ReturnType<typeof useGetMoviesForHomePageLazyQuery>;
export type GetMoviesForHomePageSuspenseQueryHookResult = ReturnType<typeof useGetMoviesForHomePageSuspenseQuery>;
export type GetMoviesForHomePageQueryResult = Apollo.QueryResult<GetMoviesForHomePageQuery, GetMoviesForHomePageQueryVariables>;
export const GetPersonForPageDocument = gql`
    query GetPersonForPage($id: String!) {
  movieCrewMember(where: {id: $id}) {
    ...PersonPageItem
  }
}
    ${PersonPageItemFragmentDoc}`;

/**
 * __useGetPersonForPageQuery__
 *
 * To run a query within a React component, call `useGetPersonForPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonForPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonForPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPersonForPageQuery(baseOptions: Apollo.QueryHookOptions<GetPersonForPageQuery, GetPersonForPageQueryVariables> & ({ variables: GetPersonForPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonForPageQuery, GetPersonForPageQueryVariables>(GetPersonForPageDocument, options);
      }
export function useGetPersonForPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonForPageQuery, GetPersonForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonForPageQuery, GetPersonForPageQueryVariables>(GetPersonForPageDocument, options);
        }
export function useGetPersonForPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPersonForPageQuery, GetPersonForPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonForPageQuery, GetPersonForPageQueryVariables>(GetPersonForPageDocument, options);
        }
export type GetPersonForPageQueryHookResult = ReturnType<typeof useGetPersonForPageQuery>;
export type GetPersonForPageLazyQueryHookResult = ReturnType<typeof useGetPersonForPageLazyQuery>;
export type GetPersonForPageSuspenseQueryHookResult = ReturnType<typeof useGetPersonForPageSuspenseQuery>;
export type GetPersonForPageQueryResult = Apollo.QueryResult<GetPersonForPageQuery, GetPersonForPageQueryVariables>;
export const GetUserLikedMoviesDocument = gql`
    query GetUserLikedMovies($searchCriteria: MoviesSearchCriteriaInput!, $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!], $userId: String!) {
  searchMovies(
    searchCriteria: $searchCriteria
    orderBy: $orderBy
    where: {likedBy: {some: {userId: {equals: $userId}}}}
  ) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetUserLikedMoviesQuery__
 *
 * To run a query within a React component, call `useGetUserLikedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLikedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLikedMoviesQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      orderBy: // value for 'orderBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserLikedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables> & ({ variables: GetUserLikedMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>(GetUserLikedMoviesDocument, options);
      }
export function useGetUserLikedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>(GetUserLikedMoviesDocument, options);
        }
export function useGetUserLikedMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>(GetUserLikedMoviesDocument, options);
        }
export type GetUserLikedMoviesQueryHookResult = ReturnType<typeof useGetUserLikedMoviesQuery>;
export type GetUserLikedMoviesLazyQueryHookResult = ReturnType<typeof useGetUserLikedMoviesLazyQuery>;
export type GetUserLikedMoviesSuspenseQueryHookResult = ReturnType<typeof useGetUserLikedMoviesSuspenseQuery>;
export type GetUserLikedMoviesQueryResult = Apollo.QueryResult<GetUserLikedMoviesQuery, GetUserLikedMoviesQueryVariables>;
export const GetUserCreatedMovieListsDocument = gql`
    query GetUserCreatedMovieLists($searchCriteria: MovieListSearchCriteriaInput!, $userId: String!) {
  searchMovieLists(
    searchCriteria: $searchCriteria
    where: {movieListAuthor: {is: {id: {equals: $userId}}}}
  ) {
    ...MovieListCardItem
  }
}
    ${MovieListCardItemFragmentDoc}`;

/**
 * __useGetUserCreatedMovieListsQuery__
 *
 * To run a query within a React component, call `useGetUserCreatedMovieListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCreatedMovieListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCreatedMovieListsQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserCreatedMovieListsQuery(baseOptions: Apollo.QueryHookOptions<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables> & ({ variables: GetUserCreatedMovieListsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>(GetUserCreatedMovieListsDocument, options);
      }
export function useGetUserCreatedMovieListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>(GetUserCreatedMovieListsDocument, options);
        }
export function useGetUserCreatedMovieListsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>(GetUserCreatedMovieListsDocument, options);
        }
export type GetUserCreatedMovieListsQueryHookResult = ReturnType<typeof useGetUserCreatedMovieListsQuery>;
export type GetUserCreatedMovieListsLazyQueryHookResult = ReturnType<typeof useGetUserCreatedMovieListsLazyQuery>;
export type GetUserCreatedMovieListsSuspenseQueryHookResult = ReturnType<typeof useGetUserCreatedMovieListsSuspenseQuery>;
export type GetUserCreatedMovieListsQueryResult = Apollo.QueryResult<GetUserCreatedMovieListsQuery, GetUserCreatedMovieListsQueryVariables>;
export const GetUserLikedMovieListsDocument = gql`
    query GetUserLikedMovieLists($searchCriteria: MovieListSearchCriteriaInput!, $userId: String!) {
  searchMovieLists(
    searchCriteria: $searchCriteria
    where: {likedBy: {some: {userId: {equals: $userId}}}}
  ) {
    ...MovieListCardItem
  }
}
    ${MovieListCardItemFragmentDoc}`;

/**
 * __useGetUserLikedMovieListsQuery__
 *
 * To run a query within a React component, call `useGetUserLikedMovieListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLikedMovieListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLikedMovieListsQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserLikedMovieListsQuery(baseOptions: Apollo.QueryHookOptions<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables> & ({ variables: GetUserLikedMovieListsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>(GetUserLikedMovieListsDocument, options);
      }
export function useGetUserLikedMovieListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>(GetUserLikedMovieListsDocument, options);
        }
export function useGetUserLikedMovieListsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>(GetUserLikedMovieListsDocument, options);
        }
export type GetUserLikedMovieListsQueryHookResult = ReturnType<typeof useGetUserLikedMovieListsQuery>;
export type GetUserLikedMovieListsLazyQueryHookResult = ReturnType<typeof useGetUserLikedMovieListsLazyQuery>;
export type GetUserLikedMovieListsSuspenseQueryHookResult = ReturnType<typeof useGetUserLikedMovieListsSuspenseQuery>;
export type GetUserLikedMovieListsQueryResult = Apollo.QueryResult<GetUserLikedMovieListsQuery, GetUserLikedMovieListsQueryVariables>;
export const GetTotalMoviesWatchedDocument = gql`
    query GetTotalMoviesWatched($userId: String!) {
  movies(where: {watchedBy: {some: {userId: {equals: $userId}}}}) {
    id
  }
}
    `;

/**
 * __useGetTotalMoviesWatchedQuery__
 *
 * To run a query within a React component, call `useGetTotalMoviesWatchedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMoviesWatchedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMoviesWatchedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalMoviesWatchedQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables> & ({ variables: GetTotalMoviesWatchedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>(GetTotalMoviesWatchedDocument, options);
      }
export function useGetTotalMoviesWatchedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>(GetTotalMoviesWatchedDocument, options);
        }
export function useGetTotalMoviesWatchedSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>(GetTotalMoviesWatchedDocument, options);
        }
export type GetTotalMoviesWatchedQueryHookResult = ReturnType<typeof useGetTotalMoviesWatchedQuery>;
export type GetTotalMoviesWatchedLazyQueryHookResult = ReturnType<typeof useGetTotalMoviesWatchedLazyQuery>;
export type GetTotalMoviesWatchedSuspenseQueryHookResult = ReturnType<typeof useGetTotalMoviesWatchedSuspenseQuery>;
export type GetTotalMoviesWatchedQueryResult = Apollo.QueryResult<GetTotalMoviesWatchedQuery, GetTotalMoviesWatchedQueryVariables>;
export const GetTotalMoviesLikedDocument = gql`
    query GetTotalMoviesLiked($userId: String!) {
  movies(where: {likedBy: {some: {userId: {equals: $userId}}}}) {
    id
  }
}
    `;

/**
 * __useGetTotalMoviesLikedQuery__
 *
 * To run a query within a React component, call `useGetTotalMoviesLikedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMoviesLikedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMoviesLikedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalMoviesLikedQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables> & ({ variables: GetTotalMoviesLikedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>(GetTotalMoviesLikedDocument, options);
      }
export function useGetTotalMoviesLikedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>(GetTotalMoviesLikedDocument, options);
        }
export function useGetTotalMoviesLikedSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>(GetTotalMoviesLikedDocument, options);
        }
export type GetTotalMoviesLikedQueryHookResult = ReturnType<typeof useGetTotalMoviesLikedQuery>;
export type GetTotalMoviesLikedLazyQueryHookResult = ReturnType<typeof useGetTotalMoviesLikedLazyQuery>;
export type GetTotalMoviesLikedSuspenseQueryHookResult = ReturnType<typeof useGetTotalMoviesLikedSuspenseQuery>;
export type GetTotalMoviesLikedQueryResult = Apollo.QueryResult<GetTotalMoviesLikedQuery, GetTotalMoviesLikedQueryVariables>;
export const GetTotalMoviesInWatchlistDocument = gql`
    query GetTotalMoviesInWatchlist($userId: String!) {
  movies(where: {inWatchlistByUsers: {some: {userId: {equals: $userId}}}}) {
    id
  }
}
    `;

/**
 * __useGetTotalMoviesInWatchlistQuery__
 *
 * To run a query within a React component, call `useGetTotalMoviesInWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMoviesInWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMoviesInWatchlistQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalMoviesInWatchlistQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables> & ({ variables: GetTotalMoviesInWatchlistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>(GetTotalMoviesInWatchlistDocument, options);
      }
export function useGetTotalMoviesInWatchlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>(GetTotalMoviesInWatchlistDocument, options);
        }
export function useGetTotalMoviesInWatchlistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>(GetTotalMoviesInWatchlistDocument, options);
        }
export type GetTotalMoviesInWatchlistQueryHookResult = ReturnType<typeof useGetTotalMoviesInWatchlistQuery>;
export type GetTotalMoviesInWatchlistLazyQueryHookResult = ReturnType<typeof useGetTotalMoviesInWatchlistLazyQuery>;
export type GetTotalMoviesInWatchlistSuspenseQueryHookResult = ReturnType<typeof useGetTotalMoviesInWatchlistSuspenseQuery>;
export type GetTotalMoviesInWatchlistQueryResult = Apollo.QueryResult<GetTotalMoviesInWatchlistQuery, GetTotalMoviesInWatchlistQueryVariables>;
export const GetTotalMovieListsCreatedDocument = gql`
    query GetTotalMovieListsCreated($userId: String!) {
  movieLists(where: {movieListAuthor: {is: {id: {equals: $userId}}}}) {
    id
  }
}
    `;

/**
 * __useGetTotalMovieListsCreatedQuery__
 *
 * To run a query within a React component, call `useGetTotalMovieListsCreatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMovieListsCreatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMovieListsCreatedQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalMovieListsCreatedQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables> & ({ variables: GetTotalMovieListsCreatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>(GetTotalMovieListsCreatedDocument, options);
      }
export function useGetTotalMovieListsCreatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>(GetTotalMovieListsCreatedDocument, options);
        }
export function useGetTotalMovieListsCreatedSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>(GetTotalMovieListsCreatedDocument, options);
        }
export type GetTotalMovieListsCreatedQueryHookResult = ReturnType<typeof useGetTotalMovieListsCreatedQuery>;
export type GetTotalMovieListsCreatedLazyQueryHookResult = ReturnType<typeof useGetTotalMovieListsCreatedLazyQuery>;
export type GetTotalMovieListsCreatedSuspenseQueryHookResult = ReturnType<typeof useGetTotalMovieListsCreatedSuspenseQuery>;
export type GetTotalMovieListsCreatedQueryResult = Apollo.QueryResult<GetTotalMovieListsCreatedQuery, GetTotalMovieListsCreatedQueryVariables>;
export const GetTotalMovieReviewsWrittenDocument = gql`
    query GetTotalMovieReviewsWritten($userId: String!) {
  movieReviews(where: {rating: {is: {userId: {equals: $userId}}}}) {
    id
  }
}
    `;

/**
 * __useGetTotalMovieReviewsWrittenQuery__
 *
 * To run a query within a React component, call `useGetTotalMovieReviewsWrittenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMovieReviewsWrittenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMovieReviewsWrittenQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTotalMovieReviewsWrittenQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables> & ({ variables: GetTotalMovieReviewsWrittenQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>(GetTotalMovieReviewsWrittenDocument, options);
      }
export function useGetTotalMovieReviewsWrittenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>(GetTotalMovieReviewsWrittenDocument, options);
        }
export function useGetTotalMovieReviewsWrittenSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>(GetTotalMovieReviewsWrittenDocument, options);
        }
export type GetTotalMovieReviewsWrittenQueryHookResult = ReturnType<typeof useGetTotalMovieReviewsWrittenQuery>;
export type GetTotalMovieReviewsWrittenLazyQueryHookResult = ReturnType<typeof useGetTotalMovieReviewsWrittenLazyQuery>;
export type GetTotalMovieReviewsWrittenSuspenseQueryHookResult = ReturnType<typeof useGetTotalMovieReviewsWrittenSuspenseQuery>;
export type GetTotalMovieReviewsWrittenQueryResult = Apollo.QueryResult<GetTotalMovieReviewsWrittenQuery, GetTotalMovieReviewsWrittenQueryVariables>;
export const GetRecentWatchedMoviesDocument = gql`
    query GetRecentWatchedMovies($userId: String!, $take: Int! = 5) {
  movieWatchedByUsers(
    take: $take
    where: {userId: {equals: $userId}}
    orderBy: [{createdAt: desc}]
  ) {
    movie {
      ...MovieCardItem
    }
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetRecentWatchedMoviesQuery__
 *
 * To run a query within a React component, call `useGetRecentWatchedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentWatchedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentWatchedMoviesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetRecentWatchedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables> & ({ variables: GetRecentWatchedMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>(GetRecentWatchedMoviesDocument, options);
      }
export function useGetRecentWatchedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>(GetRecentWatchedMoviesDocument, options);
        }
export function useGetRecentWatchedMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>(GetRecentWatchedMoviesDocument, options);
        }
export type GetRecentWatchedMoviesQueryHookResult = ReturnType<typeof useGetRecentWatchedMoviesQuery>;
export type GetRecentWatchedMoviesLazyQueryHookResult = ReturnType<typeof useGetRecentWatchedMoviesLazyQuery>;
export type GetRecentWatchedMoviesSuspenseQueryHookResult = ReturnType<typeof useGetRecentWatchedMoviesSuspenseQuery>;
export type GetRecentWatchedMoviesQueryResult = Apollo.QueryResult<GetRecentWatchedMoviesQuery, GetRecentWatchedMoviesQueryVariables>;
export const GetRecentLikedMoviesDocument = gql`
    query GetRecentLikedMovies($userId: String!, $take: Int! = 5) {
  movieLikedByUsers(
    take: $take
    where: {userId: {equals: $userId}}
    orderBy: [{createdAt: desc}]
  ) {
    movie {
      ...MovieCardItem
    }
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetRecentLikedMoviesQuery__
 *
 * To run a query within a React component, call `useGetRecentLikedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentLikedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentLikedMoviesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetRecentLikedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables> & ({ variables: GetRecentLikedMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>(GetRecentLikedMoviesDocument, options);
      }
export function useGetRecentLikedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>(GetRecentLikedMoviesDocument, options);
        }
export function useGetRecentLikedMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>(GetRecentLikedMoviesDocument, options);
        }
export type GetRecentLikedMoviesQueryHookResult = ReturnType<typeof useGetRecentLikedMoviesQuery>;
export type GetRecentLikedMoviesLazyQueryHookResult = ReturnType<typeof useGetRecentLikedMoviesLazyQuery>;
export type GetRecentLikedMoviesSuspenseQueryHookResult = ReturnType<typeof useGetRecentLikedMoviesSuspenseQuery>;
export type GetRecentLikedMoviesQueryResult = Apollo.QueryResult<GetRecentLikedMoviesQuery, GetRecentLikedMoviesQueryVariables>;
export const SearchUserMovieReviewsDocument = gql`
    query SearchUserMovieReviews($searchCriteria: MoviesSearchCriteriaInput!, $userId: String!) {
  movieReviewsSearchWithMovies(
    searchCriteria: $searchCriteria
    where: {rating: {is: {userId: {equals: $userId}}}}
  ) {
    id
    ...UserMovieReviewCardItem
  }
}
    ${UserMovieReviewCardItemFragmentDoc}`;

/**
 * __useSearchUserMovieReviewsQuery__
 *
 * To run a query within a React component, call `useSearchUserMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUserMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUserMovieReviewsQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSearchUserMovieReviewsQuery(baseOptions: Apollo.QueryHookOptions<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables> & ({ variables: SearchUserMovieReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>(SearchUserMovieReviewsDocument, options);
      }
export function useSearchUserMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>(SearchUserMovieReviewsDocument, options);
        }
export function useSearchUserMovieReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>(SearchUserMovieReviewsDocument, options);
        }
export type SearchUserMovieReviewsQueryHookResult = ReturnType<typeof useSearchUserMovieReviewsQuery>;
export type SearchUserMovieReviewsLazyQueryHookResult = ReturnType<typeof useSearchUserMovieReviewsLazyQuery>;
export type SearchUserMovieReviewsSuspenseQueryHookResult = ReturnType<typeof useSearchUserMovieReviewsSuspenseQuery>;
export type SearchUserMovieReviewsQueryResult = Apollo.QueryResult<SearchUserMovieReviewsQuery, SearchUserMovieReviewsQueryVariables>;
export const GetUserWatchedMoviesDocument = gql`
    query GetUserWatchedMovies($searchCriteria: MoviesSearchCriteriaInput!, $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!], $userId: String!) {
  searchMovies(
    searchCriteria: $searchCriteria
    orderBy: $orderBy
    where: {watchedBy: {some: {userId: {equals: $userId}}}}
  ) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetUserWatchedMoviesQuery__
 *
 * To run a query within a React component, call `useGetUserWatchedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWatchedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWatchedMoviesQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      orderBy: // value for 'orderBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserWatchedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables> & ({ variables: GetUserWatchedMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>(GetUserWatchedMoviesDocument, options);
      }
export function useGetUserWatchedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>(GetUserWatchedMoviesDocument, options);
        }
export function useGetUserWatchedMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>(GetUserWatchedMoviesDocument, options);
        }
export type GetUserWatchedMoviesQueryHookResult = ReturnType<typeof useGetUserWatchedMoviesQuery>;
export type GetUserWatchedMoviesLazyQueryHookResult = ReturnType<typeof useGetUserWatchedMoviesLazyQuery>;
export type GetUserWatchedMoviesSuspenseQueryHookResult = ReturnType<typeof useGetUserWatchedMoviesSuspenseQuery>;
export type GetUserWatchedMoviesQueryResult = Apollo.QueryResult<GetUserWatchedMoviesQuery, GetUserWatchedMoviesQueryVariables>;
export const GetUserWatchlistDocument = gql`
    query GetUserWatchlist($searchCriteria: MoviesSearchCriteriaInput!, $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!], $userId: String!) {
  searchMovies(
    searchCriteria: $searchCriteria
    orderBy: $orderBy
    where: {inWatchlistByUsers: {some: {userId: {equals: $userId}}}}
  ) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetUserWatchlistQuery__
 *
 * To run a query within a React component, call `useGetUserWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWatchlistQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      orderBy: // value for 'orderBy'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserWatchlistQuery(baseOptions: Apollo.QueryHookOptions<GetUserWatchlistQuery, GetUserWatchlistQueryVariables> & ({ variables: GetUserWatchlistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>(GetUserWatchlistDocument, options);
      }
export function useGetUserWatchlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>(GetUserWatchlistDocument, options);
        }
export function useGetUserWatchlistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>(GetUserWatchlistDocument, options);
        }
export type GetUserWatchlistQueryHookResult = ReturnType<typeof useGetUserWatchlistQuery>;
export type GetUserWatchlistLazyQueryHookResult = ReturnType<typeof useGetUserWatchlistLazyQuery>;
export type GetUserWatchlistSuspenseQueryHookResult = ReturnType<typeof useGetUserWatchlistSuspenseQuery>;
export type GetUserWatchlistQueryResult = Apollo.QueryResult<GetUserWatchlistQuery, GetUserWatchlistQueryVariables>;
export const DeleteMovieCrewMemberTypeDocument = gql`
    mutation DeleteMovieCrewMemberType($id: String!) {
  deleteOneMovieCrewMemberType(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteMovieCrewMemberTypeMutationFn = Apollo.MutationFunction<DeleteMovieCrewMemberTypeMutation, DeleteMovieCrewMemberTypeMutationVariables>;

/**
 * __useDeleteMovieCrewMemberTypeMutation__
 *
 * To run a mutation, you first call `useDeleteMovieCrewMemberTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieCrewMemberTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieCrewMemberTypeMutation, { data, loading, error }] = useDeleteMovieCrewMemberTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMovieCrewMemberTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieCrewMemberTypeMutation, DeleteMovieCrewMemberTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieCrewMemberTypeMutation, DeleteMovieCrewMemberTypeMutationVariables>(DeleteMovieCrewMemberTypeDocument, options);
      }
export type DeleteMovieCrewMemberTypeMutationHookResult = ReturnType<typeof useDeleteMovieCrewMemberTypeMutation>;
export type DeleteMovieCrewMemberTypeMutationResult = Apollo.MutationResult<DeleteMovieCrewMemberTypeMutation>;
export type DeleteMovieCrewMemberTypeMutationOptions = Apollo.BaseMutationOptions<DeleteMovieCrewMemberTypeMutation, DeleteMovieCrewMemberTypeMutationVariables>;
export const GetMovieCrewMemberTypesForAdminDocument = gql`
    query GetMovieCrewMemberTypesForAdmin {
  movieCrewMemberTypes {
    ...CrewMemberTypeCardItem
  }
}
    ${CrewMemberTypeCardItemFragmentDoc}`;

/**
 * __useGetMovieCrewMemberTypesForAdminQuery__
 *
 * To run a query within a React component, call `useGetMovieCrewMemberTypesForAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieCrewMemberTypesForAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieCrewMemberTypesForAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieCrewMemberTypesForAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>(GetMovieCrewMemberTypesForAdminDocument, options);
      }
export function useGetMovieCrewMemberTypesForAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>(GetMovieCrewMemberTypesForAdminDocument, options);
        }
export function useGetMovieCrewMemberTypesForAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>(GetMovieCrewMemberTypesForAdminDocument, options);
        }
export type GetMovieCrewMemberTypesForAdminQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypesForAdminQuery>;
export type GetMovieCrewMemberTypesForAdminLazyQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypesForAdminLazyQuery>;
export type GetMovieCrewMemberTypesForAdminSuspenseQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypesForAdminSuspenseQuery>;
export type GetMovieCrewMemberTypesForAdminQueryResult = Apollo.QueryResult<GetMovieCrewMemberTypesForAdminQuery, GetMovieCrewMemberTypesForAdminQueryVariables>;
export const UpsertMovieCrewMemberTypeDocument = gql`
    mutation UpsertMovieCrewMemberType($data: MovieCrewMemberTypeCreateInput!, $updateData: MovieCrewMemberTypeUpdateInput!, $existingTypeId: String!) {
  upsertOneMovieCrewMemberType(
    where: {id: $existingTypeId}
    update: $updateData
    create: $data
  ) {
    id
  }
}
    `;
export type UpsertMovieCrewMemberTypeMutationFn = Apollo.MutationFunction<UpsertMovieCrewMemberTypeMutation, UpsertMovieCrewMemberTypeMutationVariables>;

/**
 * __useUpsertMovieCrewMemberTypeMutation__
 *
 * To run a mutation, you first call `useUpsertMovieCrewMemberTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieCrewMemberTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieCrewMemberTypeMutation, { data, loading, error }] = useUpsertMovieCrewMemberTypeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateData: // value for 'updateData'
 *      existingTypeId: // value for 'existingTypeId'
 *   },
 * });
 */
export function useUpsertMovieCrewMemberTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieCrewMemberTypeMutation, UpsertMovieCrewMemberTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieCrewMemberTypeMutation, UpsertMovieCrewMemberTypeMutationVariables>(UpsertMovieCrewMemberTypeDocument, options);
      }
export type UpsertMovieCrewMemberTypeMutationHookResult = ReturnType<typeof useUpsertMovieCrewMemberTypeMutation>;
export type UpsertMovieCrewMemberTypeMutationResult = Apollo.MutationResult<UpsertMovieCrewMemberTypeMutation>;
export type UpsertMovieCrewMemberTypeMutationOptions = Apollo.BaseMutationOptions<UpsertMovieCrewMemberTypeMutation, UpsertMovieCrewMemberTypeMutationVariables>;
export const GetMovieCrewMemberTypeForUpdateDocument = gql`
    query GetMovieCrewMemberTypeForUpdate($id: String!) {
  movieCrewMemberType(where: {id: $id}) {
    id
    name
  }
}
    `;

/**
 * __useGetMovieCrewMemberTypeForUpdateQuery__
 *
 * To run a query within a React component, call `useGetMovieCrewMemberTypeForUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieCrewMemberTypeForUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieCrewMemberTypeForUpdateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieCrewMemberTypeForUpdateQuery(baseOptions: Apollo.QueryHookOptions<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables> & ({ variables: GetMovieCrewMemberTypeForUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>(GetMovieCrewMemberTypeForUpdateDocument, options);
      }
export function useGetMovieCrewMemberTypeForUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>(GetMovieCrewMemberTypeForUpdateDocument, options);
        }
export function useGetMovieCrewMemberTypeForUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>(GetMovieCrewMemberTypeForUpdateDocument, options);
        }
export type GetMovieCrewMemberTypeForUpdateQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypeForUpdateQuery>;
export type GetMovieCrewMemberTypeForUpdateLazyQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypeForUpdateLazyQuery>;
export type GetMovieCrewMemberTypeForUpdateSuspenseQueryHookResult = ReturnType<typeof useGetMovieCrewMemberTypeForUpdateSuspenseQuery>;
export type GetMovieCrewMemberTypeForUpdateQueryResult = Apollo.QueryResult<GetMovieCrewMemberTypeForUpdateQuery, GetMovieCrewMemberTypeForUpdateQueryVariables>;
export const DeleteMovieGenreDocument = gql`
    mutation DeleteMovieGenre($id: String!) {
  deleteOneGenre(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteMovieGenreMutationFn = Apollo.MutationFunction<DeleteMovieGenreMutation, DeleteMovieGenreMutationVariables>;

/**
 * __useDeleteMovieGenreMutation__
 *
 * To run a mutation, you first call `useDeleteMovieGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieGenreMutation, { data, loading, error }] = useDeleteMovieGenreMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMovieGenreMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieGenreMutation, DeleteMovieGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieGenreMutation, DeleteMovieGenreMutationVariables>(DeleteMovieGenreDocument, options);
      }
export type DeleteMovieGenreMutationHookResult = ReturnType<typeof useDeleteMovieGenreMutation>;
export type DeleteMovieGenreMutationResult = Apollo.MutationResult<DeleteMovieGenreMutation>;
export type DeleteMovieGenreMutationOptions = Apollo.BaseMutationOptions<DeleteMovieGenreMutation, DeleteMovieGenreMutationVariables>;
export const GetMovieGenresForAdminDocument = gql`
    query GetMovieGenresForAdmin {
  genres {
    ...MovieGenreCardItem
  }
}
    ${MovieGenreCardItemFragmentDoc}`;

/**
 * __useGetMovieGenresForAdminQuery__
 *
 * To run a query within a React component, call `useGetMovieGenresForAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieGenresForAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieGenresForAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMovieGenresForAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>(GetMovieGenresForAdminDocument, options);
      }
export function useGetMovieGenresForAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>(GetMovieGenresForAdminDocument, options);
        }
export function useGetMovieGenresForAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>(GetMovieGenresForAdminDocument, options);
        }
export type GetMovieGenresForAdminQueryHookResult = ReturnType<typeof useGetMovieGenresForAdminQuery>;
export type GetMovieGenresForAdminLazyQueryHookResult = ReturnType<typeof useGetMovieGenresForAdminLazyQuery>;
export type GetMovieGenresForAdminSuspenseQueryHookResult = ReturnType<typeof useGetMovieGenresForAdminSuspenseQuery>;
export type GetMovieGenresForAdminQueryResult = Apollo.QueryResult<GetMovieGenresForAdminQuery, GetMovieGenresForAdminQueryVariables>;
export const UpsertMovieGenreDocument = gql`
    mutation UpsertMovieGenre($data: GenreCreateInput!, $updateData: GenreUpdateInput!, $existingGenreId: String!) {
  upsertOneGenre(
    where: {id: $existingGenreId}
    update: $updateData
    create: $data
  ) {
    id
  }
}
    `;
export type UpsertMovieGenreMutationFn = Apollo.MutationFunction<UpsertMovieGenreMutation, UpsertMovieGenreMutationVariables>;

/**
 * __useUpsertMovieGenreMutation__
 *
 * To run a mutation, you first call `useUpsertMovieGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieGenreMutation, { data, loading, error }] = useUpsertMovieGenreMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateData: // value for 'updateData'
 *      existingGenreId: // value for 'existingGenreId'
 *   },
 * });
 */
export function useUpsertMovieGenreMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieGenreMutation, UpsertMovieGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieGenreMutation, UpsertMovieGenreMutationVariables>(UpsertMovieGenreDocument, options);
      }
export type UpsertMovieGenreMutationHookResult = ReturnType<typeof useUpsertMovieGenreMutation>;
export type UpsertMovieGenreMutationResult = Apollo.MutationResult<UpsertMovieGenreMutation>;
export type UpsertMovieGenreMutationOptions = Apollo.BaseMutationOptions<UpsertMovieGenreMutation, UpsertMovieGenreMutationVariables>;
export const GetMovieGenreForUpdateDocument = gql`
    query GetMovieGenreForUpdate($id: String!) {
  genre(where: {id: $id}) {
    id
    name
  }
}
    `;

/**
 * __useGetMovieGenreForUpdateQuery__
 *
 * To run a query within a React component, call `useGetMovieGenreForUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieGenreForUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieGenreForUpdateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieGenreForUpdateQuery(baseOptions: Apollo.QueryHookOptions<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables> & ({ variables: GetMovieGenreForUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>(GetMovieGenreForUpdateDocument, options);
      }
export function useGetMovieGenreForUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>(GetMovieGenreForUpdateDocument, options);
        }
export function useGetMovieGenreForUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>(GetMovieGenreForUpdateDocument, options);
        }
export type GetMovieGenreForUpdateQueryHookResult = ReturnType<typeof useGetMovieGenreForUpdateQuery>;
export type GetMovieGenreForUpdateLazyQueryHookResult = ReturnType<typeof useGetMovieGenreForUpdateLazyQuery>;
export type GetMovieGenreForUpdateSuspenseQueryHookResult = ReturnType<typeof useGetMovieGenreForUpdateSuspenseQuery>;
export type GetMovieGenreForUpdateQueryResult = Apollo.QueryResult<GetMovieGenreForUpdateQuery, GetMovieGenreForUpdateQueryVariables>;
export const DeleteMovieListDocument = gql`
    mutation DeleteMovieList($id: String!) {
  deleteOneMovieList(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteMovieListMutationFn = Apollo.MutationFunction<DeleteMovieListMutation, DeleteMovieListMutationVariables>;

/**
 * __useDeleteMovieListMutation__
 *
 * To run a mutation, you first call `useDeleteMovieListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieListMutation, { data, loading, error }] = useDeleteMovieListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMovieListMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieListMutation, DeleteMovieListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieListMutation, DeleteMovieListMutationVariables>(DeleteMovieListDocument, options);
      }
export type DeleteMovieListMutationHookResult = ReturnType<typeof useDeleteMovieListMutation>;
export type DeleteMovieListMutationResult = Apollo.MutationResult<DeleteMovieListMutation>;
export type DeleteMovieListMutationOptions = Apollo.BaseMutationOptions<DeleteMovieListMutation, DeleteMovieListMutationVariables>;
export const GetUserWatchedMovieIdsInMovieListDocument = gql`
    query GetUserWatchedMovieIdsInMovieList($userId: String!, $movieListId: String!) {
  movies(
    where: {watchedBy: {some: {userId: {equals: $userId}}}, movieLists: {some: {id: {equals: $movieListId}}}}
  ) {
    id
  }
}
    `;

/**
 * __useGetUserWatchedMovieIdsInMovieListQuery__
 *
 * To run a query within a React component, call `useGetUserWatchedMovieIdsInMovieListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWatchedMovieIdsInMovieListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWatchedMovieIdsInMovieListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      movieListId: // value for 'movieListId'
 *   },
 * });
 */
export function useGetUserWatchedMovieIdsInMovieListQuery(baseOptions: Apollo.QueryHookOptions<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables> & ({ variables: GetUserWatchedMovieIdsInMovieListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>(GetUserWatchedMovieIdsInMovieListDocument, options);
      }
export function useGetUserWatchedMovieIdsInMovieListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>(GetUserWatchedMovieIdsInMovieListDocument, options);
        }
export function useGetUserWatchedMovieIdsInMovieListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>(GetUserWatchedMovieIdsInMovieListDocument, options);
        }
export type GetUserWatchedMovieIdsInMovieListQueryHookResult = ReturnType<typeof useGetUserWatchedMovieIdsInMovieListQuery>;
export type GetUserWatchedMovieIdsInMovieListLazyQueryHookResult = ReturnType<typeof useGetUserWatchedMovieIdsInMovieListLazyQuery>;
export type GetUserWatchedMovieIdsInMovieListSuspenseQueryHookResult = ReturnType<typeof useGetUserWatchedMovieIdsInMovieListSuspenseQuery>;
export type GetUserWatchedMovieIdsInMovieListQueryResult = Apollo.QueryResult<GetUserWatchedMovieIdsInMovieListQuery, GetUserWatchedMovieIdsInMovieListQueryVariables>;
export const GetUserLikedMovieIdsInMovieListDocument = gql`
    query GetUserLikedMovieIdsInMovieList($userId: String!, $movieListId: String!) {
  movies(
    where: {likedBy: {some: {userId: {equals: $userId}}}, movieLists: {some: {id: {equals: $movieListId}}}}
  ) {
    id
  }
}
    `;

/**
 * __useGetUserLikedMovieIdsInMovieListQuery__
 *
 * To run a query within a React component, call `useGetUserLikedMovieIdsInMovieListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLikedMovieIdsInMovieListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLikedMovieIdsInMovieListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      movieListId: // value for 'movieListId'
 *   },
 * });
 */
export function useGetUserLikedMovieIdsInMovieListQuery(baseOptions: Apollo.QueryHookOptions<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables> & ({ variables: GetUserLikedMovieIdsInMovieListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>(GetUserLikedMovieIdsInMovieListDocument, options);
      }
export function useGetUserLikedMovieIdsInMovieListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>(GetUserLikedMovieIdsInMovieListDocument, options);
        }
export function useGetUserLikedMovieIdsInMovieListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>(GetUserLikedMovieIdsInMovieListDocument, options);
        }
export type GetUserLikedMovieIdsInMovieListQueryHookResult = ReturnType<typeof useGetUserLikedMovieIdsInMovieListQuery>;
export type GetUserLikedMovieIdsInMovieListLazyQueryHookResult = ReturnType<typeof useGetUserLikedMovieIdsInMovieListLazyQuery>;
export type GetUserLikedMovieIdsInMovieListSuspenseQueryHookResult = ReturnType<typeof useGetUserLikedMovieIdsInMovieListSuspenseQuery>;
export type GetUserLikedMovieIdsInMovieListQueryResult = Apollo.QueryResult<GetUserLikedMovieIdsInMovieListQuery, GetUserLikedMovieIdsInMovieListQueryVariables>;
export const SearchMovieListsDocument = gql`
    query SearchMovieLists($searchCriteria: MovieListSearchCriteriaInput!) {
  searchMovieLists(take: 5, searchCriteria: $searchCriteria) {
    ...MovieListCardItem
  }
}
    ${MovieListCardItemFragmentDoc}`;

/**
 * __useSearchMovieListsQuery__
 *
 * To run a query within a React component, call `useSearchMovieListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMovieListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMovieListsQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *   },
 * });
 */
export function useSearchMovieListsQuery(baseOptions: Apollo.QueryHookOptions<SearchMovieListsQuery, SearchMovieListsQueryVariables> & ({ variables: SearchMovieListsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMovieListsQuery, SearchMovieListsQueryVariables>(SearchMovieListsDocument, options);
      }
export function useSearchMovieListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMovieListsQuery, SearchMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMovieListsQuery, SearchMovieListsQueryVariables>(SearchMovieListsDocument, options);
        }
export function useSearchMovieListsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMovieListsQuery, SearchMovieListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMovieListsQuery, SearchMovieListsQueryVariables>(SearchMovieListsDocument, options);
        }
export type SearchMovieListsQueryHookResult = ReturnType<typeof useSearchMovieListsQuery>;
export type SearchMovieListsLazyQueryHookResult = ReturnType<typeof useSearchMovieListsLazyQuery>;
export type SearchMovieListsSuspenseQueryHookResult = ReturnType<typeof useSearchMovieListsSuspenseQuery>;
export type SearchMovieListsQueryResult = Apollo.QueryResult<SearchMovieListsQuery, SearchMovieListsQueryVariables>;
export const SearchMoviesForListCreationDocument = gql`
    query SearchMoviesForListCreation($search: String!, $alreadySelectedMovies: [String!]!) {
  searchMovies(
    take: 5
    searchCriteria: {search: $search}
    where: {id: {notIn: $alreadySelectedMovies}}
  ) {
    ...MinimalisticMovieSearchCardItem
  }
}
    ${MinimalisticMovieSearchCardItemFragmentDoc}`;

/**
 * __useSearchMoviesForListCreationQuery__
 *
 * To run a query within a React component, call `useSearchMoviesForListCreationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesForListCreationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesForListCreationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      alreadySelectedMovies: // value for 'alreadySelectedMovies'
 *   },
 * });
 */
export function useSearchMoviesForListCreationQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables> & ({ variables: SearchMoviesForListCreationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>(SearchMoviesForListCreationDocument, options);
      }
export function useSearchMoviesForListCreationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>(SearchMoviesForListCreationDocument, options);
        }
export function useSearchMoviesForListCreationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>(SearchMoviesForListCreationDocument, options);
        }
export type SearchMoviesForListCreationQueryHookResult = ReturnType<typeof useSearchMoviesForListCreationQuery>;
export type SearchMoviesForListCreationLazyQueryHookResult = ReturnType<typeof useSearchMoviesForListCreationLazyQuery>;
export type SearchMoviesForListCreationSuspenseQueryHookResult = ReturnType<typeof useSearchMoviesForListCreationSuspenseQuery>;
export type SearchMoviesForListCreationQueryResult = Apollo.QueryResult<SearchMoviesForListCreationQuery, SearchMoviesForListCreationQueryVariables>;
export const GetSelectedMovieListMoviesDocument = gql`
    query GetSelectedMovieListMovies($movieIds: [String!]!) {
  movies(where: {id: {in: $movieIds}}) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetSelectedMovieListMoviesQuery__
 *
 * To run a query within a React component, call `useGetSelectedMovieListMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedMovieListMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedMovieListMoviesQuery({
 *   variables: {
 *      movieIds: // value for 'movieIds'
 *   },
 * });
 */
export function useGetSelectedMovieListMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables> & ({ variables: GetSelectedMovieListMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>(GetSelectedMovieListMoviesDocument, options);
      }
export function useGetSelectedMovieListMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>(GetSelectedMovieListMoviesDocument, options);
        }
export function useGetSelectedMovieListMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>(GetSelectedMovieListMoviesDocument, options);
        }
export type GetSelectedMovieListMoviesQueryHookResult = ReturnType<typeof useGetSelectedMovieListMoviesQuery>;
export type GetSelectedMovieListMoviesLazyQueryHookResult = ReturnType<typeof useGetSelectedMovieListMoviesLazyQuery>;
export type GetSelectedMovieListMoviesSuspenseQueryHookResult = ReturnType<typeof useGetSelectedMovieListMoviesSuspenseQuery>;
export type GetSelectedMovieListMoviesQueryResult = Apollo.QueryResult<GetSelectedMovieListMoviesQuery, GetSelectedMovieListMoviesQueryVariables>;
export const UpsertMovieListDocument = gql`
    mutation UpsertMovieList($data: MovieListCreateInput!, $updateData: MovieListUpdateInput!, $existingListId: String!) {
  upsertOneMovieList(
    where: {id: $existingListId}
    update: $updateData
    create: $data
  ) {
    id
  }
}
    `;
export type UpsertMovieListMutationFn = Apollo.MutationFunction<UpsertMovieListMutation, UpsertMovieListMutationVariables>;

/**
 * __useUpsertMovieListMutation__
 *
 * To run a mutation, you first call `useUpsertMovieListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieListMutation, { data, loading, error }] = useUpsertMovieListMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateData: // value for 'updateData'
 *      existingListId: // value for 'existingListId'
 *   },
 * });
 */
export function useUpsertMovieListMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieListMutation, UpsertMovieListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieListMutation, UpsertMovieListMutationVariables>(UpsertMovieListDocument, options);
      }
export type UpsertMovieListMutationHookResult = ReturnType<typeof useUpsertMovieListMutation>;
export type UpsertMovieListMutationResult = Apollo.MutationResult<UpsertMovieListMutation>;
export type UpsertMovieListMutationOptions = Apollo.BaseMutationOptions<UpsertMovieListMutation, UpsertMovieListMutationVariables>;
export const GetMovieListForUpdateDocument = gql`
    query GetMovieListForUpdate($id: String!) {
  movieList(where: {id: $id}) {
    id
    name
    description
    tags
    movies {
      id
    }
  }
}
    `;

/**
 * __useGetMovieListForUpdateQuery__
 *
 * To run a query within a React component, call `useGetMovieListForUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieListForUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieListForUpdateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieListForUpdateQuery(baseOptions: Apollo.QueryHookOptions<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables> & ({ variables: GetMovieListForUpdateQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>(GetMovieListForUpdateDocument, options);
      }
export function useGetMovieListForUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>(GetMovieListForUpdateDocument, options);
        }
export function useGetMovieListForUpdateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>(GetMovieListForUpdateDocument, options);
        }
export type GetMovieListForUpdateQueryHookResult = ReturnType<typeof useGetMovieListForUpdateQuery>;
export type GetMovieListForUpdateLazyQueryHookResult = ReturnType<typeof useGetMovieListForUpdateLazyQuery>;
export type GetMovieListForUpdateSuspenseQueryHookResult = ReturnType<typeof useGetMovieListForUpdateSuspenseQuery>;
export type GetMovieListForUpdateQueryResult = Apollo.QueryResult<GetMovieListForUpdateQuery, GetMovieListForUpdateQueryVariables>;
export const GetMovieRatingReviewDocument = gql`
    query GetMovieRatingReview($ratingId: String!) {
  movieReview(where: {ratingId: $ratingId}) {
    id
    content
  }
}
    `;

/**
 * __useGetMovieRatingReviewQuery__
 *
 * To run a query within a React component, call `useGetMovieRatingReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieRatingReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieRatingReviewQuery({
 *   variables: {
 *      ratingId: // value for 'ratingId'
 *   },
 * });
 */
export function useGetMovieRatingReviewQuery(baseOptions: Apollo.QueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables> & ({ variables: GetMovieRatingReviewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
      }
export function useGetMovieRatingReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
        }
export function useGetMovieRatingReviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>(GetMovieRatingReviewDocument, options);
        }
export type GetMovieRatingReviewQueryHookResult = ReturnType<typeof useGetMovieRatingReviewQuery>;
export type GetMovieRatingReviewLazyQueryHookResult = ReturnType<typeof useGetMovieRatingReviewLazyQuery>;
export type GetMovieRatingReviewSuspenseQueryHookResult = ReturnType<typeof useGetMovieRatingReviewSuspenseQuery>;
export type GetMovieRatingReviewQueryResult = Apollo.QueryResult<GetMovieRatingReviewQuery, GetMovieRatingReviewQueryVariables>;
export const UpsertMovieRatingReviewDocument = gql`
    mutation UpsertMovieRatingReview($ratingId: String!, $content: String!) {
  upsertOneMovieReview(
    where: {ratingId: $ratingId}
    update: {content: {set: $content}}
    create: {rating: {connect: {id: $ratingId}}, content: $content}
  ) {
    id
    content
  }
}
    `;
export type UpsertMovieRatingReviewMutationFn = Apollo.MutationFunction<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>;

/**
 * __useUpsertMovieRatingReviewMutation__
 *
 * To run a mutation, you first call `useUpsertMovieRatingReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieRatingReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieRatingReviewMutation, { data, loading, error }] = useUpsertMovieRatingReviewMutation({
 *   variables: {
 *      ratingId: // value for 'ratingId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpsertMovieRatingReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>(UpsertMovieRatingReviewDocument, options);
      }
export type UpsertMovieRatingReviewMutationHookResult = ReturnType<typeof useUpsertMovieRatingReviewMutation>;
export type UpsertMovieRatingReviewMutationResult = Apollo.MutationResult<UpsertMovieRatingReviewMutation>;
export type UpsertMovieRatingReviewMutationOptions = Apollo.BaseMutationOptions<UpsertMovieRatingReviewMutation, UpsertMovieRatingReviewMutationVariables>;
export const PopularMovieReviewsDocument = gql`
    query PopularMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
  movieReviews(
    where: {rating: {is: {movieId: {equals: $movieId}}}}
    orderBy: [{likedBy: {_count: desc}}]
    take: $take
    skip: $skip
  ) {
    ...MovieReviewCardItem
  }
}
    ${MovieReviewCardItemFragmentDoc}`;

/**
 * __usePopularMovieReviewsQuery__
 *
 * To run a query within a React component, call `usePopularMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMovieReviewsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePopularMovieReviewsQuery(baseOptions: Apollo.QueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables> & ({ variables: PopularMovieReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
      }
export function usePopularMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
        }
export function usePopularMovieReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>(PopularMovieReviewsDocument, options);
        }
export type PopularMovieReviewsQueryHookResult = ReturnType<typeof usePopularMovieReviewsQuery>;
export type PopularMovieReviewsLazyQueryHookResult = ReturnType<typeof usePopularMovieReviewsLazyQuery>;
export type PopularMovieReviewsSuspenseQueryHookResult = ReturnType<typeof usePopularMovieReviewsSuspenseQuery>;
export type PopularMovieReviewsQueryResult = Apollo.QueryResult<PopularMovieReviewsQuery, PopularMovieReviewsQueryVariables>;
export const RecentMovieReviewsDocument = gql`
    query RecentMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
  movieReviews(
    orderBy: [{updatedAt: desc}]
    where: {rating: {is: {movieId: {equals: $movieId}}}}
    take: $take
    skip: $skip
  ) {
    ...MovieReviewCardItem
  }
}
    ${MovieReviewCardItemFragmentDoc}`;

/**
 * __useRecentMovieReviewsQuery__
 *
 * To run a query within a React component, call `useRecentMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentMovieReviewsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useRecentMovieReviewsQuery(baseOptions: Apollo.QueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables> & ({ variables: RecentMovieReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
      }
export function useRecentMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
        }
export function useRecentMovieReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>(RecentMovieReviewsDocument, options);
        }
export type RecentMovieReviewsQueryHookResult = ReturnType<typeof useRecentMovieReviewsQuery>;
export type RecentMovieReviewsLazyQueryHookResult = ReturnType<typeof useRecentMovieReviewsLazyQuery>;
export type RecentMovieReviewsSuspenseQueryHookResult = ReturnType<typeof useRecentMovieReviewsSuspenseQuery>;
export type RecentMovieReviewsQueryResult = Apollo.QueryResult<RecentMovieReviewsQuery, RecentMovieReviewsQueryVariables>;
export const GetMovieRatingByUserDocument = gql`
    query GetMovieRatingByUser($movieId: String!, $userId: String!) {
  movieRating(where: {userId_movieId: {movieId: $movieId, userId: $userId}}) {
    id
    rating
  }
}
    `;

/**
 * __useGetMovieRatingByUserQuery__
 *
 * To run a query within a React component, call `useGetMovieRatingByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieRatingByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieRatingByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetMovieRatingByUserQuery(baseOptions: Apollo.QueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables> & ({ variables: GetMovieRatingByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
      }
export function useGetMovieRatingByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
        }
export function useGetMovieRatingByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>(GetMovieRatingByUserDocument, options);
        }
export type GetMovieRatingByUserQueryHookResult = ReturnType<typeof useGetMovieRatingByUserQuery>;
export type GetMovieRatingByUserLazyQueryHookResult = ReturnType<typeof useGetMovieRatingByUserLazyQuery>;
export type GetMovieRatingByUserSuspenseQueryHookResult = ReturnType<typeof useGetMovieRatingByUserSuspenseQuery>;
export type GetMovieRatingByUserQueryResult = Apollo.QueryResult<GetMovieRatingByUserQuery, GetMovieRatingByUserQueryVariables>;
export const UpsertMovieRatingForUserDocument = gql`
    mutation UpsertMovieRatingForUser($movieId: String!, $userId: String!, $rating: Int!) {
  upsertOneMovieRating(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
    update: {rating: {set: $rating}}
    create: {rating: $rating, user: {connect: {id: $userId}}, movie: {connect: {id: $movieId}}}
  ) {
    id
    rating
  }
}
    `;
export type UpsertMovieRatingForUserMutationFn = Apollo.MutationFunction<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>;

/**
 * __useUpsertMovieRatingForUserMutation__
 *
 * To run a mutation, you first call `useUpsertMovieRatingForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieRatingForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieRatingForUserMutation, { data, loading, error }] = useUpsertMovieRatingForUserMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpsertMovieRatingForUserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>(UpsertMovieRatingForUserDocument, options);
      }
export type UpsertMovieRatingForUserMutationHookResult = ReturnType<typeof useUpsertMovieRatingForUserMutation>;
export type UpsertMovieRatingForUserMutationResult = Apollo.MutationResult<UpsertMovieRatingForUserMutation>;
export type UpsertMovieRatingForUserMutationOptions = Apollo.BaseMutationOptions<UpsertMovieRatingForUserMutation, UpsertMovieRatingForUserMutationVariables>;
export const DeleteMovieRatingForUserDocument = gql`
    mutation DeleteMovieRatingForUser($movieId: String!, $userId: String!) {
  deleteOneMovieRating(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    id
  }
}
    `;
export type DeleteMovieRatingForUserMutationFn = Apollo.MutationFunction<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>;

/**
 * __useDeleteMovieRatingForUserMutation__
 *
 * To run a mutation, you first call `useDeleteMovieRatingForUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieRatingForUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieRatingForUserMutation, { data, loading, error }] = useDeleteMovieRatingForUserMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteMovieRatingForUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>(DeleteMovieRatingForUserDocument, options);
      }
export type DeleteMovieRatingForUserMutationHookResult = ReturnType<typeof useDeleteMovieRatingForUserMutation>;
export type DeleteMovieRatingForUserMutationResult = Apollo.MutationResult<DeleteMovieRatingForUserMutation>;
export type DeleteMovieRatingForUserMutationOptions = Apollo.BaseMutationOptions<DeleteMovieRatingForUserMutation, DeleteMovieRatingForUserMutationVariables>;
export const SearchMoviesDocument = gql`
    query SearchMovies($searchCriteria: MoviesSearchCriteriaInput!, $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!], $take: Int! = 5, $skip: Int! = 0) {
  searchMovies(
    take: $take
    skip: $skip
    searchCriteria: $searchCriteria
    orderBy: $orderBy
  ) {
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      searchCriteria: // value for 'searchCriteria'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables> & ({ variables: SearchMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export function useSearchMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesSuspenseQueryHookResult = ReturnType<typeof useSearchMoviesSuspenseQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const DecadesDocument = gql`
    query Decades {
  getMovieDecades {
    decades
  }
}
    `;

/**
 * __useDecadesQuery__
 *
 * To run a query within a React component, call `useDecadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDecadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDecadesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDecadesQuery(baseOptions?: Apollo.QueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
      }
export function useDecadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
        }
export function useDecadesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DecadesQuery, DecadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DecadesQuery, DecadesQueryVariables>(DecadesDocument, options);
        }
export type DecadesQueryHookResult = ReturnType<typeof useDecadesQuery>;
export type DecadesLazyQueryHookResult = ReturnType<typeof useDecadesLazyQuery>;
export type DecadesSuspenseQueryHookResult = ReturnType<typeof useDecadesSuspenseQuery>;
export type DecadesQueryResult = Apollo.QueryResult<DecadesQuery, DecadesQueryVariables>;
export const GenresDocument = gql`
    query Genres {
  genres {
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }
export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }
export function useGenresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresSuspenseQueryHookResult = ReturnType<typeof useGenresSuspenseQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const UpsertMovieDocument = gql`
    mutation UpsertMovie($data: MovieCreateInput!, $updateData: MovieUpdateInput!, $existingMovieId: String!) {
  upsertOneMovie(
    where: {id: $existingMovieId}
    create: $data
    update: $updateData
  ) {
    id
  }
}
    `;
export type UpsertMovieMutationFn = Apollo.MutationFunction<UpsertMovieMutation, UpsertMovieMutationVariables>;

/**
 * __useUpsertMovieMutation__
 *
 * To run a mutation, you first call `useUpsertMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMovieMutation, { data, loading, error }] = useUpsertMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateData: // value for 'updateData'
 *      existingMovieId: // value for 'existingMovieId'
 *   },
 * });
 */
export function useUpsertMovieMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMovieMutation, UpsertMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMovieMutation, UpsertMovieMutationVariables>(UpsertMovieDocument, options);
      }
export type UpsertMovieMutationHookResult = ReturnType<typeof useUpsertMovieMutation>;
export type UpsertMovieMutationResult = Apollo.MutationResult<UpsertMovieMutation>;
export type UpsertMovieMutationOptions = Apollo.BaseMutationOptions<UpsertMovieMutation, UpsertMovieMutationVariables>;
export const SearchGenresForMovieCreationDocument = gql`
    query SearchGenresForMovieCreation($search: String!, $alreadySelectedGenres: [String!]!) {
  genres(
    take: 5
    where: {AND: [{id: {notIn: $alreadySelectedGenres}}, {name: {contains: $search, mode: insensitive}}]}
  ) {
    ...MinimalisticGenreSearchItem
  }
}
    ${MinimalisticGenreSearchItemFragmentDoc}`;

/**
 * __useSearchGenresForMovieCreationQuery__
 *
 * To run a query within a React component, call `useSearchGenresForMovieCreationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGenresForMovieCreationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGenresForMovieCreationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      alreadySelectedGenres: // value for 'alreadySelectedGenres'
 *   },
 * });
 */
export function useSearchGenresForMovieCreationQuery(baseOptions: Apollo.QueryHookOptions<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables> & ({ variables: SearchGenresForMovieCreationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>(SearchGenresForMovieCreationDocument, options);
      }
export function useSearchGenresForMovieCreationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>(SearchGenresForMovieCreationDocument, options);
        }
export function useSearchGenresForMovieCreationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>(SearchGenresForMovieCreationDocument, options);
        }
export type SearchGenresForMovieCreationQueryHookResult = ReturnType<typeof useSearchGenresForMovieCreationQuery>;
export type SearchGenresForMovieCreationLazyQueryHookResult = ReturnType<typeof useSearchGenresForMovieCreationLazyQuery>;
export type SearchGenresForMovieCreationSuspenseQueryHookResult = ReturnType<typeof useSearchGenresForMovieCreationSuspenseQuery>;
export type SearchGenresForMovieCreationQueryResult = Apollo.QueryResult<SearchGenresForMovieCreationQuery, SearchGenresForMovieCreationQueryVariables>;
export const GetSelectedMovieGenresDocument = gql`
    query GetSelectedMovieGenres($genresIds: [String!]!) {
  genres(where: {id: {in: $genresIds}}) {
    ...MovieGenreCardItem
  }
}
    ${MovieGenreCardItemFragmentDoc}`;

/**
 * __useGetSelectedMovieGenresQuery__
 *
 * To run a query within a React component, call `useGetSelectedMovieGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedMovieGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedMovieGenresQuery({
 *   variables: {
 *      genresIds: // value for 'genresIds'
 *   },
 * });
 */
export function useGetSelectedMovieGenresQuery(baseOptions: Apollo.QueryHookOptions<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables> & ({ variables: GetSelectedMovieGenresQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>(GetSelectedMovieGenresDocument, options);
      }
export function useGetSelectedMovieGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>(GetSelectedMovieGenresDocument, options);
        }
export function useGetSelectedMovieGenresSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>(GetSelectedMovieGenresDocument, options);
        }
export type GetSelectedMovieGenresQueryHookResult = ReturnType<typeof useGetSelectedMovieGenresQuery>;
export type GetSelectedMovieGenresLazyQueryHookResult = ReturnType<typeof useGetSelectedMovieGenresLazyQuery>;
export type GetSelectedMovieGenresSuspenseQueryHookResult = ReturnType<typeof useGetSelectedMovieGenresSuspenseQuery>;
export type GetSelectedMovieGenresQueryResult = Apollo.QueryResult<GetSelectedMovieGenresQuery, GetSelectedMovieGenresQueryVariables>;
export const SearchLanguagesForMovieCreationDocument = gql`
    query SearchLanguagesForMovieCreation($search: String!, $alreadySelectedLanguages: [String!]!) {
  movieSpokenLanguages(
    take: 5
    where: {AND: [{iso_639_1: {notIn: $alreadySelectedLanguages}}, {OR: [{name: {contains: $search, mode: insensitive}}, {iso_639_1: {contains: $search, mode: insensitive}}]}]}
  ) {
    ...MinimalisticLanguageSearchCardItem
  }
}
    ${MinimalisticLanguageSearchCardItemFragmentDoc}`;

/**
 * __useSearchLanguagesForMovieCreationQuery__
 *
 * To run a query within a React component, call `useSearchLanguagesForMovieCreationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchLanguagesForMovieCreationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchLanguagesForMovieCreationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      alreadySelectedLanguages: // value for 'alreadySelectedLanguages'
 *   },
 * });
 */
export function useSearchLanguagesForMovieCreationQuery(baseOptions: Apollo.QueryHookOptions<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables> & ({ variables: SearchLanguagesForMovieCreationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>(SearchLanguagesForMovieCreationDocument, options);
      }
export function useSearchLanguagesForMovieCreationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>(SearchLanguagesForMovieCreationDocument, options);
        }
export function useSearchLanguagesForMovieCreationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>(SearchLanguagesForMovieCreationDocument, options);
        }
export type SearchLanguagesForMovieCreationQueryHookResult = ReturnType<typeof useSearchLanguagesForMovieCreationQuery>;
export type SearchLanguagesForMovieCreationLazyQueryHookResult = ReturnType<typeof useSearchLanguagesForMovieCreationLazyQuery>;
export type SearchLanguagesForMovieCreationSuspenseQueryHookResult = ReturnType<typeof useSearchLanguagesForMovieCreationSuspenseQuery>;
export type SearchLanguagesForMovieCreationQueryResult = Apollo.QueryResult<SearchLanguagesForMovieCreationQuery, SearchLanguagesForMovieCreationQueryVariables>;
export const GetSelectedMovieLanguagesDocument = gql`
    query GetSelectedMovieLanguages($spokenLanguagesIds: [String!]!) {
  movieSpokenLanguages(where: {iso_639_1: {in: $spokenLanguagesIds}}) {
    ...MinimalisticLanguageSearchCardItem
  }
}
    ${MinimalisticLanguageSearchCardItemFragmentDoc}`;

/**
 * __useGetSelectedMovieLanguagesQuery__
 *
 * To run a query within a React component, call `useGetSelectedMovieLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSelectedMovieLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSelectedMovieLanguagesQuery({
 *   variables: {
 *      spokenLanguagesIds: // value for 'spokenLanguagesIds'
 *   },
 * });
 */
export function useGetSelectedMovieLanguagesQuery(baseOptions: Apollo.QueryHookOptions<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables> & ({ variables: GetSelectedMovieLanguagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>(GetSelectedMovieLanguagesDocument, options);
      }
export function useGetSelectedMovieLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>(GetSelectedMovieLanguagesDocument, options);
        }
export function useGetSelectedMovieLanguagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>(GetSelectedMovieLanguagesDocument, options);
        }
export type GetSelectedMovieLanguagesQueryHookResult = ReturnType<typeof useGetSelectedMovieLanguagesQuery>;
export type GetSelectedMovieLanguagesLazyQueryHookResult = ReturnType<typeof useGetSelectedMovieLanguagesLazyQuery>;
export type GetSelectedMovieLanguagesSuspenseQueryHookResult = ReturnType<typeof useGetSelectedMovieLanguagesSuspenseQuery>;
export type GetSelectedMovieLanguagesQueryResult = Apollo.QueryResult<GetSelectedMovieLanguagesQuery, GetSelectedMovieLanguagesQueryVariables>;
export const GetUserWatchedPersonMovieIdsDocument = gql`
    query GetUserWatchedPersonMovieIds($userId: String!, $personId: String!) {
  movies(
    where: {watchedBy: {some: {userId: {equals: $userId}}}, crewMembers: {some: {crewMember: {is: {id: {equals: $personId}}}}}}
    distinct: [id]
  ) {
    id
  }
}
    `;

/**
 * __useGetUserWatchedPersonMovieIdsQuery__
 *
 * To run a query within a React component, call `useGetUserWatchedPersonMovieIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWatchedPersonMovieIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWatchedPersonMovieIdsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetUserWatchedPersonMovieIdsQuery(baseOptions: Apollo.QueryHookOptions<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables> & ({ variables: GetUserWatchedPersonMovieIdsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>(GetUserWatchedPersonMovieIdsDocument, options);
      }
export function useGetUserWatchedPersonMovieIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>(GetUserWatchedPersonMovieIdsDocument, options);
        }
export function useGetUserWatchedPersonMovieIdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>(GetUserWatchedPersonMovieIdsDocument, options);
        }
export type GetUserWatchedPersonMovieIdsQueryHookResult = ReturnType<typeof useGetUserWatchedPersonMovieIdsQuery>;
export type GetUserWatchedPersonMovieIdsLazyQueryHookResult = ReturnType<typeof useGetUserWatchedPersonMovieIdsLazyQuery>;
export type GetUserWatchedPersonMovieIdsSuspenseQueryHookResult = ReturnType<typeof useGetUserWatchedPersonMovieIdsSuspenseQuery>;
export type GetUserWatchedPersonMovieIdsQueryResult = Apollo.QueryResult<GetUserWatchedPersonMovieIdsQuery, GetUserWatchedPersonMovieIdsQueryVariables>;
export const GetUserLikedPersonMovieIdsDocument = gql`
    query GetUserLikedPersonMovieIds($userId: String!, $personId: String!) {
  movies(
    where: {likedBy: {some: {userId: {equals: $userId}}}, crewMembers: {some: {crewMember: {is: {id: {equals: $personId}}}}}}
    distinct: [id]
  ) {
    id
  }
}
    `;

/**
 * __useGetUserLikedPersonMovieIdsQuery__
 *
 * To run a query within a React component, call `useGetUserLikedPersonMovieIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLikedPersonMovieIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLikedPersonMovieIdsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetUserLikedPersonMovieIdsQuery(baseOptions: Apollo.QueryHookOptions<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables> & ({ variables: GetUserLikedPersonMovieIdsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>(GetUserLikedPersonMovieIdsDocument, options);
      }
export function useGetUserLikedPersonMovieIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>(GetUserLikedPersonMovieIdsDocument, options);
        }
export function useGetUserLikedPersonMovieIdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>(GetUserLikedPersonMovieIdsDocument, options);
        }
export type GetUserLikedPersonMovieIdsQueryHookResult = ReturnType<typeof useGetUserLikedPersonMovieIdsQuery>;
export type GetUserLikedPersonMovieIdsLazyQueryHookResult = ReturnType<typeof useGetUserLikedPersonMovieIdsLazyQuery>;
export type GetUserLikedPersonMovieIdsSuspenseQueryHookResult = ReturnType<typeof useGetUserLikedPersonMovieIdsSuspenseQuery>;
export type GetUserLikedPersonMovieIdsQueryResult = Apollo.QueryResult<GetUserLikedPersonMovieIdsQuery, GetUserLikedPersonMovieIdsQueryVariables>;
export const GetPersonMovieCountDocument = gql`
    query GetPersonMovieCount($personId: String!) {
  movies(
    where: {crewMembers: {some: {crewMember: {is: {id: {equals: $personId}}}}}}
    distinct: [id]
  ) {
    id
  }
}
    `;

/**
 * __useGetPersonMovieCountQuery__
 *
 * To run a query within a React component, call `useGetPersonMovieCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPersonMovieCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPersonMovieCountQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useGetPersonMovieCountQuery(baseOptions: Apollo.QueryHookOptions<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables> & ({ variables: GetPersonMovieCountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>(GetPersonMovieCountDocument, options);
      }
export function useGetPersonMovieCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>(GetPersonMovieCountDocument, options);
        }
export function useGetPersonMovieCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>(GetPersonMovieCountDocument, options);
        }
export type GetPersonMovieCountQueryHookResult = ReturnType<typeof useGetPersonMovieCountQuery>;
export type GetPersonMovieCountLazyQueryHookResult = ReturnType<typeof useGetPersonMovieCountLazyQuery>;
export type GetPersonMovieCountSuspenseQueryHookResult = ReturnType<typeof useGetPersonMovieCountSuspenseQuery>;
export type GetPersonMovieCountQueryResult = Apollo.QueryResult<GetPersonMovieCountQuery, GetPersonMovieCountQueryVariables>;
export const GetMoviesForPersonPageDocument = gql`
    query GetMoviesForPersonPage($personId: String!, $searchCriteria: MoviesSearchCriteriaInput!, $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]) {
  searchMovies(
    searchCriteria: $searchCriteria
    orderBy: $orderBy
    where: {crewMembers: {some: {crewMember: {is: {id: {equals: $personId}}}}}}
    take: 10
  ) {
    id
    ...MovieCardItem
  }
}
    ${MovieCardItemFragmentDoc}`;

/**
 * __useGetMoviesForPersonPageQuery__
 *
 * To run a query within a React component, call `useGetMoviesForPersonPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesForPersonPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesForPersonPageQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *      searchCriteria: // value for 'searchCriteria'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetMoviesForPersonPageQuery(baseOptions: Apollo.QueryHookOptions<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables> & ({ variables: GetMoviesForPersonPageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>(GetMoviesForPersonPageDocument, options);
      }
export function useGetMoviesForPersonPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>(GetMoviesForPersonPageDocument, options);
        }
export function useGetMoviesForPersonPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>(GetMoviesForPersonPageDocument, options);
        }
export type GetMoviesForPersonPageQueryHookResult = ReturnType<typeof useGetMoviesForPersonPageQuery>;
export type GetMoviesForPersonPageLazyQueryHookResult = ReturnType<typeof useGetMoviesForPersonPageLazyQuery>;
export type GetMoviesForPersonPageSuspenseQueryHookResult = ReturnType<typeof useGetMoviesForPersonPageSuspenseQuery>;
export type GetMoviesForPersonPageQueryResult = Apollo.QueryResult<GetMoviesForPersonPageQuery, GetMoviesForPersonPageQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: UserLoginInput!) {
  loginUser(data: $data) {
    token
    user {
      ...CurrentUser
    }
  }
}
    ${CurrentUserFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($data: MovifierAppUserCreateInput!) {
  createOneMovifierAppUser(data: $data) {
    token
    user {
      ...CurrentUser
    }
  }
}
    ${CurrentUserFragmentDoc}`;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const IsMovieReviewLikedByUserDocument = gql`
    query IsMovieReviewLikedByUser($movieReviewId: String!, $userId: String!) {
  movieReviewLikedByUser(
    where: {userId_movieReviewId: {movieReviewId: $movieReviewId, userId: $userId}}
  ) {
    movieReviewId
  }
}
    `;

/**
 * __useIsMovieReviewLikedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieReviewLikedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieReviewLikedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieReviewLikedByUserQuery({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieReviewLikedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables> & ({ variables: IsMovieReviewLikedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
      }
export function useIsMovieReviewLikedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
        }
export function useIsMovieReviewLikedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>(IsMovieReviewLikedByUserDocument, options);
        }
export type IsMovieReviewLikedByUserQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserQuery>;
export type IsMovieReviewLikedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserLazyQuery>;
export type IsMovieReviewLikedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieReviewLikedByUserSuspenseQuery>;
export type IsMovieReviewLikedByUserQueryResult = Apollo.QueryResult<IsMovieReviewLikedByUserQuery, IsMovieReviewLikedByUserQueryVariables>;
export const MarkMovieReviewLikedDocument = gql`
    mutation MarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
  createOneMovieReviewLikedByUser(
    data: {movieReview: {connect: {id: $movieReviewId}}, user: {connect: {id: $userId}}}
  ) {
    movieReviewId
  }
}
    `;
export type MarkMovieReviewLikedMutationFn = Apollo.MutationFunction<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>;

/**
 * __useMarkMovieReviewLikedMutation__
 *
 * To run a mutation, you first call `useMarkMovieReviewLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieReviewLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieReviewLikedMutation, { data, loading, error }] = useMarkMovieReviewLikedMutation({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieReviewLikedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>(MarkMovieReviewLikedDocument, options);
      }
export type MarkMovieReviewLikedMutationHookResult = ReturnType<typeof useMarkMovieReviewLikedMutation>;
export type MarkMovieReviewLikedMutationResult = Apollo.MutationResult<MarkMovieReviewLikedMutation>;
export type MarkMovieReviewLikedMutationOptions = Apollo.BaseMutationOptions<MarkMovieReviewLikedMutation, MarkMovieReviewLikedMutationVariables>;
export const UnmarkMovieReviewLikedDocument = gql`
    mutation UnmarkMovieReviewLiked($movieReviewId: String!, $userId: String!) {
  deleteOneMovieReviewLikedByUser(
    where: {userId_movieReviewId: {movieReviewId: $movieReviewId, userId: $userId}}
  ) {
    movieReviewId
  }
}
    `;
export type UnmarkMovieReviewLikedMutationFn = Apollo.MutationFunction<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>;

/**
 * __useUnmarkMovieReviewLikedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieReviewLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieReviewLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieReviewLikedMutation, { data, loading, error }] = useUnmarkMovieReviewLikedMutation({
 *   variables: {
 *      movieReviewId: // value for 'movieReviewId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieReviewLikedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>(UnmarkMovieReviewLikedDocument, options);
      }
export type UnmarkMovieReviewLikedMutationHookResult = ReturnType<typeof useUnmarkMovieReviewLikedMutation>;
export type UnmarkMovieReviewLikedMutationResult = Apollo.MutationResult<UnmarkMovieReviewLikedMutation>;
export type UnmarkMovieReviewLikedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieReviewLikedMutation, UnmarkMovieReviewLikedMutationVariables>;
export const IsMovieLikedByUserDocument = gql`
    query IsMovieLikedByUser($movieId: String!, $userId: String!) {
  movieLikedByUser(where: {userId_movieId: {movieId: $movieId, userId: $userId}}) {
    movieId
  }
}
    `;

/**
 * __useIsMovieLikedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieLikedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieLikedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieLikedByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieLikedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables> & ({ variables: IsMovieLikedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
      }
export function useIsMovieLikedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
        }
export function useIsMovieLikedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>(IsMovieLikedByUserDocument, options);
        }
export type IsMovieLikedByUserQueryHookResult = ReturnType<typeof useIsMovieLikedByUserQuery>;
export type IsMovieLikedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieLikedByUserLazyQuery>;
export type IsMovieLikedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieLikedByUserSuspenseQuery>;
export type IsMovieLikedByUserQueryResult = Apollo.QueryResult<IsMovieLikedByUserQuery, IsMovieLikedByUserQueryVariables>;
export const MarkMovieLikedDocument = gql`
    mutation MarkMovieLiked($movieId: String!, $userId: String!) {
  createOneMovieLikedByUser(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    createdAt
  }
}
    `;
export type MarkMovieLikedMutationFn = Apollo.MutationFunction<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>;

/**
 * __useMarkMovieLikedMutation__
 *
 * To run a mutation, you first call `useMarkMovieLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieLikedMutation, { data, loading, error }] = useMarkMovieLikedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieLikedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>(MarkMovieLikedDocument, options);
      }
export type MarkMovieLikedMutationHookResult = ReturnType<typeof useMarkMovieLikedMutation>;
export type MarkMovieLikedMutationResult = Apollo.MutationResult<MarkMovieLikedMutation>;
export type MarkMovieLikedMutationOptions = Apollo.BaseMutationOptions<MarkMovieLikedMutation, MarkMovieLikedMutationVariables>;
export const UnmarkMovieLikedDocument = gql`
    mutation UnmarkMovieLiked($movieId: String!, $userId: String!) {
  deleteOneMovieLikedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    createdAt
  }
}
    `;
export type UnmarkMovieLikedMutationFn = Apollo.MutationFunction<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>;

/**
 * __useUnmarkMovieLikedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieLikedMutation, { data, loading, error }] = useUnmarkMovieLikedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieLikedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>(UnmarkMovieLikedDocument, options);
      }
export type UnmarkMovieLikedMutationHookResult = ReturnType<typeof useUnmarkMovieLikedMutation>;
export type UnmarkMovieLikedMutationResult = Apollo.MutationResult<UnmarkMovieLikedMutation>;
export type UnmarkMovieLikedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieLikedMutation, UnmarkMovieLikedMutationVariables>;
export const IsMovieListLikedByUserDocument = gql`
    query IsMovieListLikedByUser($movieListId: String!, $userId: String!) {
  movieListLikedByUser(
    where: {userId_movieListId: {movieListId: $movieListId, userId: $userId}}
  ) {
    movieListId
  }
}
    `;

/**
 * __useIsMovieListLikedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieListLikedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieListLikedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieListLikedByUserQuery({
 *   variables: {
 *      movieListId: // value for 'movieListId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieListLikedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables> & ({ variables: IsMovieListLikedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>(IsMovieListLikedByUserDocument, options);
      }
export function useIsMovieListLikedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>(IsMovieListLikedByUserDocument, options);
        }
export function useIsMovieListLikedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>(IsMovieListLikedByUserDocument, options);
        }
export type IsMovieListLikedByUserQueryHookResult = ReturnType<typeof useIsMovieListLikedByUserQuery>;
export type IsMovieListLikedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieListLikedByUserLazyQuery>;
export type IsMovieListLikedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieListLikedByUserSuspenseQuery>;
export type IsMovieListLikedByUserQueryResult = Apollo.QueryResult<IsMovieListLikedByUserQuery, IsMovieListLikedByUserQueryVariables>;
export const MarkMovieListLikedDocument = gql`
    mutation MarkMovieListLiked($movieListId: String!, $userId: String!) {
  createOneMovieListLikedByUser(
    data: {movieList: {connect: {id: $movieListId}}, user: {connect: {id: $userId}}}
  ) {
    movieListId
  }
}
    `;
export type MarkMovieListLikedMutationFn = Apollo.MutationFunction<MarkMovieListLikedMutation, MarkMovieListLikedMutationVariables>;

/**
 * __useMarkMovieListLikedMutation__
 *
 * To run a mutation, you first call `useMarkMovieListLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieListLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieListLikedMutation, { data, loading, error }] = useMarkMovieListLikedMutation({
 *   variables: {
 *      movieListId: // value for 'movieListId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieListLikedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieListLikedMutation, MarkMovieListLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieListLikedMutation, MarkMovieListLikedMutationVariables>(MarkMovieListLikedDocument, options);
      }
export type MarkMovieListLikedMutationHookResult = ReturnType<typeof useMarkMovieListLikedMutation>;
export type MarkMovieListLikedMutationResult = Apollo.MutationResult<MarkMovieListLikedMutation>;
export type MarkMovieListLikedMutationOptions = Apollo.BaseMutationOptions<MarkMovieListLikedMutation, MarkMovieListLikedMutationVariables>;
export const UnmarkMovieListLikedDocument = gql`
    mutation UnmarkMovieListLiked($movieListId: String!, $userId: String!) {
  deleteOneMovieListLikedByUser(
    where: {userId_movieListId: {movieListId: $movieListId, userId: $userId}}
  ) {
    movieListId
  }
}
    `;
export type UnmarkMovieListLikedMutationFn = Apollo.MutationFunction<UnmarkMovieListLikedMutation, UnmarkMovieListLikedMutationVariables>;

/**
 * __useUnmarkMovieListLikedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieListLikedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieListLikedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieListLikedMutation, { data, loading, error }] = useUnmarkMovieListLikedMutation({
 *   variables: {
 *      movieListId: // value for 'movieListId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieListLikedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieListLikedMutation, UnmarkMovieListLikedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieListLikedMutation, UnmarkMovieListLikedMutationVariables>(UnmarkMovieListLikedDocument, options);
      }
export type UnmarkMovieListLikedMutationHookResult = ReturnType<typeof useUnmarkMovieListLikedMutation>;
export type UnmarkMovieListLikedMutationResult = Apollo.MutationResult<UnmarkMovieListLikedMutation>;
export type UnmarkMovieListLikedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieListLikedMutation, UnmarkMovieListLikedMutationVariables>;
export const IsMovieWatchedByUserDocument = gql`
    query IsMovieWatchedByUser($movieId: String!, $userId: String!) {
  movieWatchedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
  }
}
    `;

/**
 * __useIsMovieWatchedByUserQuery__
 *
 * To run a query within a React component, call `useIsMovieWatchedByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieWatchedByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieWatchedByUserQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieWatchedByUserQuery(baseOptions: Apollo.QueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables> & ({ variables: IsMovieWatchedByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
      }
export function useIsMovieWatchedByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
        }
export function useIsMovieWatchedByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>(IsMovieWatchedByUserDocument, options);
        }
export type IsMovieWatchedByUserQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserQuery>;
export type IsMovieWatchedByUserLazyQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserLazyQuery>;
export type IsMovieWatchedByUserSuspenseQueryHookResult = ReturnType<typeof useIsMovieWatchedByUserSuspenseQuery>;
export type IsMovieWatchedByUserQueryResult = Apollo.QueryResult<IsMovieWatchedByUserQuery, IsMovieWatchedByUserQueryVariables>;
export const MarkMovieWatchedDocument = gql`
    mutation MarkMovieWatched($movieId: String!, $userId: String!) {
  createOneMovieWatchedByUser(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    movieId
  }
}
    `;
export type MarkMovieWatchedMutationFn = Apollo.MutationFunction<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>;

/**
 * __useMarkMovieWatchedMutation__
 *
 * To run a mutation, you first call `useMarkMovieWatchedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMovieWatchedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMovieWatchedMutation, { data, loading, error }] = useMarkMovieWatchedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useMarkMovieWatchedMutation(baseOptions?: Apollo.MutationHookOptions<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>(MarkMovieWatchedDocument, options);
      }
export type MarkMovieWatchedMutationHookResult = ReturnType<typeof useMarkMovieWatchedMutation>;
export type MarkMovieWatchedMutationResult = Apollo.MutationResult<MarkMovieWatchedMutation>;
export type MarkMovieWatchedMutationOptions = Apollo.BaseMutationOptions<MarkMovieWatchedMutation, MarkMovieWatchedMutationVariables>;
export const UnmarkMovieWatchedDocument = gql`
    mutation UnmarkMovieWatched($movieId: String!, $userId: String!) {
  deleteOneMovieWatchedByUser(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
  }
}
    `;
export type UnmarkMovieWatchedMutationFn = Apollo.MutationFunction<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>;

/**
 * __useUnmarkMovieWatchedMutation__
 *
 * To run a mutation, you first call `useUnmarkMovieWatchedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnmarkMovieWatchedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unmarkMovieWatchedMutation, { data, loading, error }] = useUnmarkMovieWatchedMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnmarkMovieWatchedMutation(baseOptions?: Apollo.MutationHookOptions<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>(UnmarkMovieWatchedDocument, options);
      }
export type UnmarkMovieWatchedMutationHookResult = ReturnType<typeof useUnmarkMovieWatchedMutation>;
export type UnmarkMovieWatchedMutationResult = Apollo.MutationResult<UnmarkMovieWatchedMutation>;
export type UnmarkMovieWatchedMutationOptions = Apollo.BaseMutationOptions<UnmarkMovieWatchedMutation, UnmarkMovieWatchedMutationVariables>;
export const AddMovieToUserWatchlistDocument = gql`
    mutation AddMovieToUserWatchlist($movieId: String!, $userId: String!) {
  createOneUserMovieWatchlist(
    data: {movie: {connect: {id: $movieId}}, user: {connect: {id: $userId}}}
  ) {
    movieId
    userId
  }
}
    `;
export type AddMovieToUserWatchlistMutationFn = Apollo.MutationFunction<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>;

/**
 * __useAddMovieToUserWatchlistMutation__
 *
 * To run a mutation, you first call `useAddMovieToUserWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieToUserWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieToUserWatchlistMutation, { data, loading, error }] = useAddMovieToUserWatchlistMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddMovieToUserWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>(AddMovieToUserWatchlistDocument, options);
      }
export type AddMovieToUserWatchlistMutationHookResult = ReturnType<typeof useAddMovieToUserWatchlistMutation>;
export type AddMovieToUserWatchlistMutationResult = Apollo.MutationResult<AddMovieToUserWatchlistMutation>;
export type AddMovieToUserWatchlistMutationOptions = Apollo.BaseMutationOptions<AddMovieToUserWatchlistMutation, AddMovieToUserWatchlistMutationVariables>;
export const IsMovieInUserWatchlistDocument = gql`
    query IsMovieInUserWatchlist($movieId: String!, $userId: String!) {
  userMovieWatchlist(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
    userId
  }
}
    `;

/**
 * __useIsMovieInUserWatchlistQuery__
 *
 * To run a query within a React component, call `useIsMovieInUserWatchlistQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsMovieInUserWatchlistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsMovieInUserWatchlistQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIsMovieInUserWatchlistQuery(baseOptions: Apollo.QueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables> & ({ variables: IsMovieInUserWatchlistQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
      }
export function useIsMovieInUserWatchlistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
        }
export function useIsMovieInUserWatchlistSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>(IsMovieInUserWatchlistDocument, options);
        }
export type IsMovieInUserWatchlistQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistQuery>;
export type IsMovieInUserWatchlistLazyQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistLazyQuery>;
export type IsMovieInUserWatchlistSuspenseQueryHookResult = ReturnType<typeof useIsMovieInUserWatchlistSuspenseQuery>;
export type IsMovieInUserWatchlistQueryResult = Apollo.QueryResult<IsMovieInUserWatchlistQuery, IsMovieInUserWatchlistQueryVariables>;
export const RemoveMovieFromWatchlistDocument = gql`
    mutation RemoveMovieFromWatchlist($movieId: String!, $userId: String!) {
  deleteOneUserMovieWatchlist(
    where: {userId_movieId: {movieId: $movieId, userId: $userId}}
  ) {
    movieId
    userId
  }
}
    `;
export type RemoveMovieFromWatchlistMutationFn = Apollo.MutationFunction<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>;

/**
 * __useRemoveMovieFromWatchlistMutation__
 *
 * To run a mutation, you first call `useRemoveMovieFromWatchlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMovieFromWatchlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMovieFromWatchlistMutation, { data, loading, error }] = useRemoveMovieFromWatchlistMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveMovieFromWatchlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>(RemoveMovieFromWatchlistDocument, options);
      }
export type RemoveMovieFromWatchlistMutationHookResult = ReturnType<typeof useRemoveMovieFromWatchlistMutation>;
export type RemoveMovieFromWatchlistMutationResult = Apollo.MutationResult<RemoveMovieFromWatchlistMutation>;
export type RemoveMovieFromWatchlistMutationOptions = Apollo.BaseMutationOptions<RemoveMovieFromWatchlistMutation, RemoveMovieFromWatchlistMutationVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  me {
    ...CurrentUser
  }
}
    ${CurrentUserFragmentDoc}`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export function useGetCurrentUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserSuspenseQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export type AffectedRowsOutputKeySpecifier = ('count' | AffectedRowsOutputKeySpecifier)[];
export type AffectedRowsOutputFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGenreKeySpecifier = ('_count' | '_max' | '_min' | AggregateGenreKeySpecifier)[];
export type AggregateGenreFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieKeySpecifier)[];
export type AggregateMovieFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieCrewMemberKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateMovieCrewMemberKeySpecifier)[];
export type AggregateMovieCrewMemberFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieCrewMemberTypeKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieCrewMemberTypeKeySpecifier)[];
export type AggregateMovieCrewMemberTypeFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieLikedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieLikedByUserKeySpecifier)[];
export type AggregateMovieLikedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieListKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieListKeySpecifier)[];
export type AggregateMovieListFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieListLikedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieListLikedByUserKeySpecifier)[];
export type AggregateMovieListLikedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieRatingKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateMovieRatingKeySpecifier)[];
export type AggregateMovieRatingFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieReviewKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieReviewKeySpecifier)[];
export type AggregateMovieReviewFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieReviewLikedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieReviewLikedByUserKeySpecifier)[];
export type AggregateMovieReviewLikedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieSpokenLanguageKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieSpokenLanguageKeySpecifier)[];
export type AggregateMovieSpokenLanguageFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMovieWatchedByUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateMovieWatchedByUserKeySpecifier)[];
export type AggregateMovieWatchedByUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserMovieWatchlistKeySpecifier = ('_count' | '_max' | '_min' | AggregateUserMovieWatchlistKeySpecifier)[];
export type AggregateUserMovieWatchlistFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DecadesKeySpecifier = ('decades' | DecadesKeySpecifier)[];
export type DecadesFieldPolicy = {
	decades?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreKeySpecifier = ('_count' | 'createdAt' | 'id' | 'movies' | 'name' | 'updatedAt' | GenreKeySpecifier)[];
export type GenreFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreCountKeySpecifier = ('movies' | GenreCountKeySpecifier)[];
export type GenreCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'name' | 'updatedAt' | GenreCountAggregateKeySpecifier)[];
export type GenreCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'name' | 'updatedAt' | GenreGroupByKeySpecifier)[];
export type GenreGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | GenreMaxAggregateKeySpecifier)[];
export type GenreMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenreMinAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | GenreMinAggregateKeySpecifier)[];
export type GenreMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeySpecifier = ('_count' | 'createdAt' | 'crewMembers' | 'genres' | 'id' | 'inWatchlistByUsers' | 'keywordCategories' | 'likedBy' | 'movieInfo' | 'movieLists' | 'movieStats' | 'ratedBy' | 'spokenLanguages' | 'studios' | 'updatedAt' | 'watchedBy' | MovieKeySpecifier)[];
export type MovieFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movieInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieStats?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCountKeySpecifier = ('crewMembers' | 'genres' | 'inWatchlistByUsers' | 'keywordCategories' | 'likedBy' | 'movieLists' | 'ratedBy' | 'spokenLanguages' | 'studios' | 'watchedBy' | MovieCountKeySpecifier)[];
export type MovieCountFieldPolicy = {
	crewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	inWatchlistByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	keywordCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	spokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	studios?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'updatedAt' | MovieCountAggregateKeySpecifier)[];
export type MovieCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberKeySpecifier = ('_count' | 'createdAt' | 'description' | 'id' | 'imdbId' | 'movies' | 'name' | 'photoUrl' | 'popularity' | 'updatedAt' | MovieCrewMemberKeySpecifier)[];
export type MovieCrewMemberFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberAvgAggregateKeySpecifier = ('popularity' | MovieCrewMemberAvgAggregateKeySpecifier)[];
export type MovieCrewMemberAvgAggregateFieldPolicy = {
	popularity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberCountKeySpecifier = ('movies' | MovieCrewMemberCountKeySpecifier)[];
export type MovieCrewMemberCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'description' | 'id' | 'imdbId' | 'name' | 'photoUrl' | 'popularity' | 'updatedAt' | MovieCrewMemberCountAggregateKeySpecifier)[];
export type MovieCrewMemberCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'createdAt' | 'description' | 'id' | 'imdbId' | 'name' | 'photoUrl' | 'popularity' | 'updatedAt' | MovieCrewMemberGroupByKeySpecifier)[];
export type MovieCrewMemberGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberMaxAggregateKeySpecifier = ('createdAt' | 'description' | 'id' | 'imdbId' | 'name' | 'photoUrl' | 'popularity' | 'updatedAt' | MovieCrewMemberMaxAggregateKeySpecifier)[];
export type MovieCrewMemberMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberMinAggregateKeySpecifier = ('createdAt' | 'description' | 'id' | 'imdbId' | 'name' | 'photoUrl' | 'popularity' | 'updatedAt' | MovieCrewMemberMinAggregateKeySpecifier)[];
export type MovieCrewMemberMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	photoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	popularity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberOnMovieKeySpecifier = ('createdAt' | 'crewMember' | 'movie' | 'movieCrewMemberId' | 'movieCrewMemberType' | 'movieCrewMemberTypeId' | 'movieId' | 'order' | 'updatedAt' | MovieCrewMemberOnMovieKeySpecifier)[];
export type MovieCrewMemberOnMovieFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	crewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberTypeId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberSumAggregateKeySpecifier = ('popularity' | MovieCrewMemberSumAggregateKeySpecifier)[];
export type MovieCrewMemberSumAggregateFieldPolicy = {
	popularity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeKeySpecifier = ('_count' | 'id' | 'movieCrewMembers' | 'name' | MovieCrewMemberTypeKeySpecifier)[];
export type MovieCrewMemberTypeFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeCountKeySpecifier = ('movieCrewMembers' | MovieCrewMemberTypeCountKeySpecifier)[];
export type MovieCrewMemberTypeCountFieldPolicy = {
	movieCrewMembers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeCountAggregateKeySpecifier = ('_all' | 'id' | 'name' | MovieCrewMemberTypeCountAggregateKeySpecifier)[];
export type MovieCrewMemberTypeCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'id' | 'name' | MovieCrewMemberTypeGroupByKeySpecifier)[];
export type MovieCrewMemberTypeGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeMaxAggregateKeySpecifier = ('id' | 'name' | MovieCrewMemberTypeMaxAggregateKeySpecifier)[];
export type MovieCrewMemberTypeMaxAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieCrewMemberTypeMinAggregateKeySpecifier = ('id' | 'name' | MovieCrewMemberTypeMinAggregateKeySpecifier)[];
export type MovieCrewMemberTypeMinAggregateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'updatedAt' | MovieGroupByKeySpecifier)[];
export type MovieGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieInfoKeySpecifier = ('alternativeTitles' | 'createdAt' | 'description' | 'durationInMinutes' | 'id' | 'imdbId' | 'movieId' | 'posterUrl' | 'releaseDate' | 'title' | 'updatedAt' | MovieInfoKeySpecifier)[];
export type MovieInfoFieldPolicy = {
	alternativeTitles?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	durationInMinutes?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	imdbId?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	posterUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseDate?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeywordCategoryKeySpecifier = ('_count' | 'id' | 'name' | MovieKeywordCategoryKeySpecifier)[];
export type MovieKeywordCategoryFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieKeywordCategoryCountKeySpecifier = ('movies' | MovieKeywordCategoryCountKeySpecifier)[];
export type MovieKeywordCategoryCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | MovieLikedByUserKeySpecifier)[];
export type MovieLikedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | MovieLikedByUserCountAggregateKeySpecifier)[];
export type MovieLikedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | MovieLikedByUserGroupByKeySpecifier)[];
export type MovieLikedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieLikedByUserMaxAggregateKeySpecifier)[];
export type MovieLikedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieLikedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieLikedByUserMinAggregateKeySpecifier)[];
export type MovieLikedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListKeySpecifier = ('_count' | 'comments' | 'createdAt' | 'description' | 'id' | 'likedBy' | 'movieListAuthor' | 'movies' | 'name' | 'stats' | 'tags' | 'updatedAt' | 'userId' | MovieListKeySpecifier)[];
export type MovieListFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	stats?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListCommentKeySpecifier = ('content' | 'createdAt' | 'id' | 'movieListId' | 'updatedAt' | 'userId' | MovieListCommentKeySpecifier)[];
export type MovieListCommentFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListCountKeySpecifier = ('comments' | 'likedBy' | 'movies' | MovieListCountKeySpecifier)[];
export type MovieListCountFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'description' | 'id' | 'name' | 'tags' | 'updatedAt' | 'userId' | MovieListCountAggregateKeySpecifier)[];
export type MovieListCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'description' | 'id' | 'name' | 'tags' | 'updatedAt' | 'userId' | MovieListGroupByKeySpecifier)[];
export type MovieListGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListLikedByUserKeySpecifier = ('createdAt' | 'movieList' | 'movieListId' | 'user' | 'userId' | MovieListLikedByUserKeySpecifier)[];
export type MovieListLikedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieList?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListLikedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieListId' | 'userId' | MovieListLikedByUserCountAggregateKeySpecifier)[];
export type MovieListLikedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListLikedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieListId' | 'userId' | MovieListLikedByUserGroupByKeySpecifier)[];
export type MovieListLikedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListLikedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieListId' | 'userId' | MovieListLikedByUserMaxAggregateKeySpecifier)[];
export type MovieListLikedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListLikedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieListId' | 'userId' | MovieListLikedByUserMinAggregateKeySpecifier)[];
export type MovieListLikedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListMaxAggregateKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | 'userId' | MovieListMaxAggregateKeySpecifier)[];
export type MovieListMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListMinAggregateKeySpecifier = ('createdAt' | 'description' | 'id' | 'name' | 'updatedAt' | 'userId' | MovieListMinAggregateKeySpecifier)[];
export type MovieListMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieListStatsKeySpecifier = ('createdAt' | 'id' | 'likes' | 'movieListId' | 'updatedAt' | 'views' | MovieListStatsKeySpecifier)[];
export type MovieListStatsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	likes?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	views?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | MovieMaxAggregateKeySpecifier)[];
export type MovieMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieMinAggregateKeySpecifier = ('createdAt' | 'id' | 'updatedAt' | MovieMinAggregateKeySpecifier)[];
export type MovieMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingKeySpecifier = ('createdAt' | 'id' | 'movie' | 'movieId' | 'rating' | 'review' | 'updatedAt' | 'user' | 'userId' | MovieRatingKeySpecifier)[];
export type MovieRatingFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	review?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingAvgAggregateKeySpecifier = ('rating' | MovieRatingAvgAggregateKeySpecifier)[];
export type MovieRatingAvgAggregateFieldPolicy = {
	rating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingCountAggregateKeySpecifier)[];
export type MovieRatingCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingGroupByKeySpecifier)[];
export type MovieRatingGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingMaxAggregateKeySpecifier)[];
export type MovieRatingMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingMinAggregateKeySpecifier = ('createdAt' | 'id' | 'movieId' | 'rating' | 'updatedAt' | 'userId' | MovieRatingMinAggregateKeySpecifier)[];
export type MovieRatingMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieRatingSumAggregateKeySpecifier = ('rating' | MovieRatingSumAggregateKeySpecifier)[];
export type MovieRatingSumAggregateFieldPolicy = {
	rating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewKeySpecifier = ('_count' | 'content' | 'createdAt' | 'id' | 'likedBy' | 'rating' | 'ratingId' | 'updatedAt' | MovieReviewKeySpecifier)[];
export type MovieReviewFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewCountKeySpecifier = ('likedBy' | MovieReviewCountKeySpecifier)[];
export type MovieReviewCountFieldPolicy = {
	likedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewCountAggregateKeySpecifier = ('_all' | 'content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewCountAggregateKeySpecifier)[];
export type MovieReviewCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewGroupByKeySpecifier)[];
export type MovieReviewGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserKeySpecifier = ('createdAt' | 'movieReview' | 'movieReviewId' | 'user' | 'userId' | MovieReviewLikedByUserKeySpecifier)[];
export type MovieReviewLikedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserCountAggregateKeySpecifier)[];
export type MovieReviewLikedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserGroupByKeySpecifier)[];
export type MovieReviewLikedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserMaxAggregateKeySpecifier)[];
export type MovieReviewLikedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewLikedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieReviewId' | 'userId' | MovieReviewLikedByUserMinAggregateKeySpecifier)[];
export type MovieReviewLikedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewMaxAggregateKeySpecifier = ('content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewMaxAggregateKeySpecifier)[];
export type MovieReviewMaxAggregateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieReviewMinAggregateKeySpecifier = ('content' | 'createdAt' | 'id' | 'ratingId' | 'updatedAt' | MovieReviewMinAggregateKeySpecifier)[];
export type MovieReviewMinAggregateFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageKeySpecifier = ('_count' | 'createdAt' | 'iso_639_1' | 'movies' | 'name' | 'updatedAt' | MovieSpokenLanguageKeySpecifier)[];
export type MovieSpokenLanguageFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	iso_639_1?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageCountKeySpecifier = ('movies' | MovieSpokenLanguageCountKeySpecifier)[];
export type MovieSpokenLanguageCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'iso_639_1' | 'name' | 'updatedAt' | MovieSpokenLanguageCountAggregateKeySpecifier)[];
export type MovieSpokenLanguageCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	iso_639_1?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'iso_639_1' | 'name' | 'updatedAt' | MovieSpokenLanguageGroupByKeySpecifier)[];
export type MovieSpokenLanguageGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	iso_639_1?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageMaxAggregateKeySpecifier = ('createdAt' | 'iso_639_1' | 'name' | 'updatedAt' | MovieSpokenLanguageMaxAggregateKeySpecifier)[];
export type MovieSpokenLanguageMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	iso_639_1?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieSpokenLanguageMinAggregateKeySpecifier = ('createdAt' | 'iso_639_1' | 'name' | 'updatedAt' | MovieSpokenLanguageMinAggregateKeySpecifier)[];
export type MovieSpokenLanguageMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	iso_639_1?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStatsKeySpecifier = ('avgRating' | 'id' | 'movieId' | 'overallPlaceInTop' | 'timesWatchedCount' | 'totalLikesCount' | 'totalRatingsCount' | MovieStatsKeySpecifier)[];
export type MovieStatsFieldPolicy = {
	avgRating?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	overallPlaceInTop?: FieldPolicy<any> | FieldReadFunction<any>,
	timesWatchedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalLikesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRatingsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStudioKeySpecifier = ('_count' | 'createdAt' | 'id' | 'name' | 'updatedAt' | MovieStudioKeySpecifier)[];
export type MovieStudioFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieStudioCountKeySpecifier = ('movies' | MovieStudioCountKeySpecifier)[];
export type MovieStudioCountFieldPolicy = {
	movies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | MovieWatchedByUserKeySpecifier)[];
export type MovieWatchedByUserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | MovieWatchedByUserCountAggregateKeySpecifier)[];
export type MovieWatchedByUserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | MovieWatchedByUserGroupByKeySpecifier)[];
export type MovieWatchedByUserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieWatchedByUserMaxAggregateKeySpecifier)[];
export type MovieWatchedByUserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovieWatchedByUserMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | MovieWatchedByUserMinAggregateKeySpecifier)[];
export type MovieWatchedByUserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovifierAppUserKeySpecifier = ('_count' | 'createdAt' | 'email' | 'id' | 'name' | 'role' | 'updatedAt' | 'username' | MovifierAppUserKeySpecifier)[];
export type MovifierAppUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MovifierAppUserCountKeySpecifier = ('MovieListLikedByUser' | 'likedMovieReviews' | 'likedMovies' | 'movieLists' | 'movieListsComments' | 'ratedMovies' | 'watchedMovies' | 'watchlist' | MovifierAppUserCountKeySpecifier)[];
export type MovifierAppUserCountFieldPolicy = {
	MovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	likedMovieReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	likedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListsComments?: FieldPolicy<any> | FieldReadFunction<any>,
	ratedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	watchedMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	watchlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createManyGenre' | 'createManyMovie' | 'createManyMovieCrewMember' | 'createManyMovieCrewMemberType' | 'createManyMovieLikedByUser' | 'createManyMovieList' | 'createManyMovieListLikedByUser' | 'createManyMovieRating' | 'createManyMovieReview' | 'createManyMovieReviewLikedByUser' | 'createManyMovieSpokenLanguage' | 'createManyMovieWatchedByUser' | 'createManyUserMovieWatchlist' | 'createOneGenre' | 'createOneMovie' | 'createOneMovieCrewMember' | 'createOneMovieCrewMemberType' | 'createOneMovieLikedByUser' | 'createOneMovieList' | 'createOneMovieListLikedByUser' | 'createOneMovieRating' | 'createOneMovieReview' | 'createOneMovieReviewLikedByUser' | 'createOneMovieSpokenLanguage' | 'createOneMovieWatchedByUser' | 'createOneMovifierAppUser' | 'createOneUserMovieWatchlist' | 'deleteManyGenre' | 'deleteManyMovie' | 'deleteManyMovieCrewMember' | 'deleteManyMovieCrewMemberType' | 'deleteManyMovieLikedByUser' | 'deleteManyMovieList' | 'deleteManyMovieListLikedByUser' | 'deleteManyMovieRating' | 'deleteManyMovieReview' | 'deleteManyMovieReviewLikedByUser' | 'deleteManyMovieSpokenLanguage' | 'deleteManyMovieWatchedByUser' | 'deleteManyUserMovieWatchlist' | 'deleteOneGenre' | 'deleteOneMovie' | 'deleteOneMovieCrewMember' | 'deleteOneMovieCrewMemberType' | 'deleteOneMovieLikedByUser' | 'deleteOneMovieList' | 'deleteOneMovieListLikedByUser' | 'deleteOneMovieRating' | 'deleteOneMovieReview' | 'deleteOneMovieReviewLikedByUser' | 'deleteOneMovieSpokenLanguage' | 'deleteOneMovieWatchedByUser' | 'deleteOneUserMovieWatchlist' | 'fetchMovieFromTmdb' | 'loginUser' | 'updateManyGenre' | 'updateManyMovie' | 'updateManyMovieCrewMember' | 'updateManyMovieCrewMemberType' | 'updateManyMovieLikedByUser' | 'updateManyMovieList' | 'updateManyMovieListLikedByUser' | 'updateManyMovieRating' | 'updateManyMovieReview' | 'updateManyMovieReviewLikedByUser' | 'updateManyMovieSpokenLanguage' | 'updateManyMovieWatchedByUser' | 'updateManyUserMovieWatchlist' | 'updateOneGenre' | 'updateOneMovie' | 'updateOneMovieCrewMember' | 'updateOneMovieCrewMemberType' | 'updateOneMovieLikedByUser' | 'updateOneMovieList' | 'updateOneMovieListLikedByUser' | 'updateOneMovieRating' | 'updateOneMovieReview' | 'updateOneMovieReviewLikedByUser' | 'updateOneMovieSpokenLanguage' | 'updateOneMovieWatchedByUser' | 'updateOneUserMovieWatchlist' | 'upsertOneGenre' | 'upsertOneMovie' | 'upsertOneMovieCrewMember' | 'upsertOneMovieCrewMemberType' | 'upsertOneMovieLikedByUser' | 'upsertOneMovieList' | 'upsertOneMovieListLikedByUser' | 'upsertOneMovieRating' | 'upsertOneMovieReview' | 'upsertOneMovieReviewLikedByUser' | 'upsertOneMovieSpokenLanguage' | 'upsertOneMovieWatchedByUser' | 'upsertOneUserMovieWatchlist' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createManyGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneMovifierAppUser?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	fetchMovieFromTmdb?: FieldPolicy<any> | FieldReadFunction<any>,
	loginUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertOneUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateGenre' | 'aggregateMovie' | 'aggregateMovieCrewMember' | 'aggregateMovieCrewMemberType' | 'aggregateMovieLikedByUser' | 'aggregateMovieList' | 'aggregateMovieListLikedByUser' | 'aggregateMovieRating' | 'aggregateMovieReview' | 'aggregateMovieReviewLikedByUser' | 'aggregateMovieSpokenLanguage' | 'aggregateMovieWatchedByUser' | 'aggregateUserMovieWatchlist' | 'findFirstGenre' | 'findFirstGenreOrThrow' | 'findFirstMovie' | 'findFirstMovieCrewMember' | 'findFirstMovieCrewMemberOrThrow' | 'findFirstMovieCrewMemberType' | 'findFirstMovieCrewMemberTypeOrThrow' | 'findFirstMovieLikedByUser' | 'findFirstMovieLikedByUserOrThrow' | 'findFirstMovieList' | 'findFirstMovieListLikedByUser' | 'findFirstMovieListLikedByUserOrThrow' | 'findFirstMovieListOrThrow' | 'findFirstMovieOrThrow' | 'findFirstMovieRating' | 'findFirstMovieRatingOrThrow' | 'findFirstMovieReview' | 'findFirstMovieReviewLikedByUser' | 'findFirstMovieReviewLikedByUserOrThrow' | 'findFirstMovieReviewOrThrow' | 'findFirstMovieSpokenLanguage' | 'findFirstMovieSpokenLanguageOrThrow' | 'findFirstMovieWatchedByUser' | 'findFirstMovieWatchedByUserOrThrow' | 'findFirstUserMovieWatchlist' | 'findFirstUserMovieWatchlistOrThrow' | 'genre' | 'genres' | 'getGenre' | 'getMovie' | 'getMovieCrewMember' | 'getMovieCrewMemberType' | 'getMovieDecades' | 'getMovieLikedByUser' | 'getMovieList' | 'getMovieListLikedByUser' | 'getMovieRating' | 'getMovieReview' | 'getMovieReviewLikedByUser' | 'getMovieSpokenLanguage' | 'getMovieWatchedByUser' | 'getUserMovieWatchlist' | 'groupByGenre' | 'groupByMovie' | 'groupByMovieCrewMember' | 'groupByMovieCrewMemberType' | 'groupByMovieLikedByUser' | 'groupByMovieList' | 'groupByMovieListLikedByUser' | 'groupByMovieRating' | 'groupByMovieReview' | 'groupByMovieReviewLikedByUser' | 'groupByMovieSpokenLanguage' | 'groupByMovieWatchedByUser' | 'groupByUserMovieWatchlist' | 'me' | 'movie' | 'movieCrewMember' | 'movieCrewMemberType' | 'movieCrewMemberTypes' | 'movieCrewMembers' | 'movieLikedByUser' | 'movieLikedByUsers' | 'movieList' | 'movieListLikedByUser' | 'movieListLikedByUsers' | 'movieLists' | 'movieRating' | 'movieRatings' | 'movieRatingsSearchWithMovies' | 'movieReview' | 'movieReviewLikedByUser' | 'movieReviewLikedByUsers' | 'movieReviews' | 'movieReviewsSearchWithMovies' | 'movieSpokenLanguage' | 'movieSpokenLanguages' | 'movieWatchedByUser' | 'movieWatchedByUsers' | 'movies' | 'movifierAppUsers' | 'searchMovieLists' | 'searchMovies' | 'userMovieWatchlist' | 'userMovieWatchlists' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstGenreOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieCrewMemberOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieCrewMemberTypeOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieLikedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieListLikedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieListOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieRatingOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewLikedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieReviewOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieSpokenLanguageOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstMovieWatchedByUserOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUserMovieWatchlistOrThrow?: FieldPolicy<any> | FieldReadFunction<any>,
	genre?: FieldPolicy<any> | FieldReadFunction<any>,
	genres?: FieldPolicy<any> | FieldReadFunction<any>,
	getGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieDecades?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	getMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByGenre?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovie?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieList?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByMovieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByUserMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMember?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberType?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMemberTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	movieCrewMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLikedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieList?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieListLikedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	movieRating?: FieldPolicy<any> | FieldReadFunction<any>,
	movieRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	movieRatingsSearchWithMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReview?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewLikedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewLikedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviews?: FieldPolicy<any> | FieldReadFunction<any>,
	movieReviewsSearchWithMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	movieSpokenLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	movieSpokenLanguages?: FieldPolicy<any> | FieldReadFunction<any>,
	movieWatchedByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	movieWatchedByUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	movies?: FieldPolicy<any> | FieldReadFunction<any>,
	movifierAppUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	searchMovieLists?: FieldPolicy<any> | FieldReadFunction<any>,
	searchMovies?: FieldPolicy<any> | FieldReadFunction<any>,
	userMovieWatchlist?: FieldPolicy<any> | FieldReadFunction<any>,
	userMovieWatchlists?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLoginOutputKeySpecifier = ('token' | 'user' | UserLoginOutputKeySpecifier)[];
export type UserLoginOutputFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistKeySpecifier = ('createdAt' | 'movie' | 'movieId' | 'user' | 'userId' | UserMovieWatchlistKeySpecifier)[];
export type UserMovieWatchlistFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movie?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'movieId' | 'userId' | UserMovieWatchlistCountAggregateKeySpecifier)[];
export type UserMovieWatchlistCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'movieId' | 'userId' | UserMovieWatchlistGroupByKeySpecifier)[];
export type UserMovieWatchlistGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistMaxAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | UserMovieWatchlistMaxAggregateKeySpecifier)[];
export type UserMovieWatchlistMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMovieWatchlistMinAggregateKeySpecifier = ('createdAt' | 'movieId' | 'userId' | UserMovieWatchlistMinAggregateKeySpecifier)[];
export type UserMovieWatchlistMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	movieId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRegisterOutputKeySpecifier = ('token' | 'user' | UserRegisterOutputKeySpecifier)[];
export type UserRegisterOutputFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AffectedRowsOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AffectedRowsOutputKeySpecifier | (() => undefined | AffectedRowsOutputKeySpecifier),
		fields?: AffectedRowsOutputFieldPolicy,
	},
	AggregateGenre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGenreKeySpecifier | (() => undefined | AggregateGenreKeySpecifier),
		fields?: AggregateGenreFieldPolicy,
	},
	AggregateMovie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieKeySpecifier | (() => undefined | AggregateMovieKeySpecifier),
		fields?: AggregateMovieFieldPolicy,
	},
	AggregateMovieCrewMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieCrewMemberKeySpecifier | (() => undefined | AggregateMovieCrewMemberKeySpecifier),
		fields?: AggregateMovieCrewMemberFieldPolicy,
	},
	AggregateMovieCrewMemberType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieCrewMemberTypeKeySpecifier | (() => undefined | AggregateMovieCrewMemberTypeKeySpecifier),
		fields?: AggregateMovieCrewMemberTypeFieldPolicy,
	},
	AggregateMovieLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieLikedByUserKeySpecifier | (() => undefined | AggregateMovieLikedByUserKeySpecifier),
		fields?: AggregateMovieLikedByUserFieldPolicy,
	},
	AggregateMovieList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieListKeySpecifier | (() => undefined | AggregateMovieListKeySpecifier),
		fields?: AggregateMovieListFieldPolicy,
	},
	AggregateMovieListLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieListLikedByUserKeySpecifier | (() => undefined | AggregateMovieListLikedByUserKeySpecifier),
		fields?: AggregateMovieListLikedByUserFieldPolicy,
	},
	AggregateMovieRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieRatingKeySpecifier | (() => undefined | AggregateMovieRatingKeySpecifier),
		fields?: AggregateMovieRatingFieldPolicy,
	},
	AggregateMovieReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieReviewKeySpecifier | (() => undefined | AggregateMovieReviewKeySpecifier),
		fields?: AggregateMovieReviewFieldPolicy,
	},
	AggregateMovieReviewLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieReviewLikedByUserKeySpecifier | (() => undefined | AggregateMovieReviewLikedByUserKeySpecifier),
		fields?: AggregateMovieReviewLikedByUserFieldPolicy,
	},
	AggregateMovieSpokenLanguage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieSpokenLanguageKeySpecifier | (() => undefined | AggregateMovieSpokenLanguageKeySpecifier),
		fields?: AggregateMovieSpokenLanguageFieldPolicy,
	},
	AggregateMovieWatchedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMovieWatchedByUserKeySpecifier | (() => undefined | AggregateMovieWatchedByUserKeySpecifier),
		fields?: AggregateMovieWatchedByUserFieldPolicy,
	},
	AggregateUserMovieWatchlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserMovieWatchlistKeySpecifier | (() => undefined | AggregateUserMovieWatchlistKeySpecifier),
		fields?: AggregateUserMovieWatchlistFieldPolicy,
	},
	Decades?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DecadesKeySpecifier | (() => undefined | DecadesKeySpecifier),
		fields?: DecadesFieldPolicy,
	},
	Genre?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreKeySpecifier | (() => undefined | GenreKeySpecifier),
		fields?: GenreFieldPolicy,
	},
	GenreCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreCountKeySpecifier | (() => undefined | GenreCountKeySpecifier),
		fields?: GenreCountFieldPolicy,
	},
	GenreCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreCountAggregateKeySpecifier | (() => undefined | GenreCountAggregateKeySpecifier),
		fields?: GenreCountAggregateFieldPolicy,
	},
	GenreGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreGroupByKeySpecifier | (() => undefined | GenreGroupByKeySpecifier),
		fields?: GenreGroupByFieldPolicy,
	},
	GenreMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreMaxAggregateKeySpecifier | (() => undefined | GenreMaxAggregateKeySpecifier),
		fields?: GenreMaxAggregateFieldPolicy,
	},
	GenreMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenreMinAggregateKeySpecifier | (() => undefined | GenreMinAggregateKeySpecifier),
		fields?: GenreMinAggregateFieldPolicy,
	},
	Movie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeySpecifier | (() => undefined | MovieKeySpecifier),
		fields?: MovieFieldPolicy,
	},
	MovieCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCountKeySpecifier | (() => undefined | MovieCountKeySpecifier),
		fields?: MovieCountFieldPolicy,
	},
	MovieCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCountAggregateKeySpecifier | (() => undefined | MovieCountAggregateKeySpecifier),
		fields?: MovieCountAggregateFieldPolicy,
	},
	MovieCrewMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberKeySpecifier | (() => undefined | MovieCrewMemberKeySpecifier),
		fields?: MovieCrewMemberFieldPolicy,
	},
	MovieCrewMemberAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberAvgAggregateKeySpecifier | (() => undefined | MovieCrewMemberAvgAggregateKeySpecifier),
		fields?: MovieCrewMemberAvgAggregateFieldPolicy,
	},
	MovieCrewMemberCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberCountKeySpecifier | (() => undefined | MovieCrewMemberCountKeySpecifier),
		fields?: MovieCrewMemberCountFieldPolicy,
	},
	MovieCrewMemberCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberCountAggregateKeySpecifier | (() => undefined | MovieCrewMemberCountAggregateKeySpecifier),
		fields?: MovieCrewMemberCountAggregateFieldPolicy,
	},
	MovieCrewMemberGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberGroupByKeySpecifier | (() => undefined | MovieCrewMemberGroupByKeySpecifier),
		fields?: MovieCrewMemberGroupByFieldPolicy,
	},
	MovieCrewMemberMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberMaxAggregateKeySpecifier | (() => undefined | MovieCrewMemberMaxAggregateKeySpecifier),
		fields?: MovieCrewMemberMaxAggregateFieldPolicy,
	},
	MovieCrewMemberMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberMinAggregateKeySpecifier | (() => undefined | MovieCrewMemberMinAggregateKeySpecifier),
		fields?: MovieCrewMemberMinAggregateFieldPolicy,
	},
	MovieCrewMemberOnMovie?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberOnMovieKeySpecifier | (() => undefined | MovieCrewMemberOnMovieKeySpecifier),
		fields?: MovieCrewMemberOnMovieFieldPolicy,
	},
	MovieCrewMemberSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberSumAggregateKeySpecifier | (() => undefined | MovieCrewMemberSumAggregateKeySpecifier),
		fields?: MovieCrewMemberSumAggregateFieldPolicy,
	},
	MovieCrewMemberType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeKeySpecifier | (() => undefined | MovieCrewMemberTypeKeySpecifier),
		fields?: MovieCrewMemberTypeFieldPolicy,
	},
	MovieCrewMemberTypeCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeCountKeySpecifier | (() => undefined | MovieCrewMemberTypeCountKeySpecifier),
		fields?: MovieCrewMemberTypeCountFieldPolicy,
	},
	MovieCrewMemberTypeCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeCountAggregateKeySpecifier | (() => undefined | MovieCrewMemberTypeCountAggregateKeySpecifier),
		fields?: MovieCrewMemberTypeCountAggregateFieldPolicy,
	},
	MovieCrewMemberTypeGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeGroupByKeySpecifier | (() => undefined | MovieCrewMemberTypeGroupByKeySpecifier),
		fields?: MovieCrewMemberTypeGroupByFieldPolicy,
	},
	MovieCrewMemberTypeMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeMaxAggregateKeySpecifier | (() => undefined | MovieCrewMemberTypeMaxAggregateKeySpecifier),
		fields?: MovieCrewMemberTypeMaxAggregateFieldPolicy,
	},
	MovieCrewMemberTypeMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieCrewMemberTypeMinAggregateKeySpecifier | (() => undefined | MovieCrewMemberTypeMinAggregateKeySpecifier),
		fields?: MovieCrewMemberTypeMinAggregateFieldPolicy,
	},
	MovieGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieGroupByKeySpecifier | (() => undefined | MovieGroupByKeySpecifier),
		fields?: MovieGroupByFieldPolicy,
	},
	MovieInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieInfoKeySpecifier | (() => undefined | MovieInfoKeySpecifier),
		fields?: MovieInfoFieldPolicy,
	},
	MovieKeywordCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeywordCategoryKeySpecifier | (() => undefined | MovieKeywordCategoryKeySpecifier),
		fields?: MovieKeywordCategoryFieldPolicy,
	},
	MovieKeywordCategoryCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieKeywordCategoryCountKeySpecifier | (() => undefined | MovieKeywordCategoryCountKeySpecifier),
		fields?: MovieKeywordCategoryCountFieldPolicy,
	},
	MovieLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserKeySpecifier | (() => undefined | MovieLikedByUserKeySpecifier),
		fields?: MovieLikedByUserFieldPolicy,
	},
	MovieLikedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserCountAggregateKeySpecifier | (() => undefined | MovieLikedByUserCountAggregateKeySpecifier),
		fields?: MovieLikedByUserCountAggregateFieldPolicy,
	},
	MovieLikedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserGroupByKeySpecifier | (() => undefined | MovieLikedByUserGroupByKeySpecifier),
		fields?: MovieLikedByUserGroupByFieldPolicy,
	},
	MovieLikedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserMaxAggregateKeySpecifier | (() => undefined | MovieLikedByUserMaxAggregateKeySpecifier),
		fields?: MovieLikedByUserMaxAggregateFieldPolicy,
	},
	MovieLikedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieLikedByUserMinAggregateKeySpecifier | (() => undefined | MovieLikedByUserMinAggregateKeySpecifier),
		fields?: MovieLikedByUserMinAggregateFieldPolicy,
	},
	MovieList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListKeySpecifier | (() => undefined | MovieListKeySpecifier),
		fields?: MovieListFieldPolicy,
	},
	MovieListComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListCommentKeySpecifier | (() => undefined | MovieListCommentKeySpecifier),
		fields?: MovieListCommentFieldPolicy,
	},
	MovieListCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListCountKeySpecifier | (() => undefined | MovieListCountKeySpecifier),
		fields?: MovieListCountFieldPolicy,
	},
	MovieListCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListCountAggregateKeySpecifier | (() => undefined | MovieListCountAggregateKeySpecifier),
		fields?: MovieListCountAggregateFieldPolicy,
	},
	MovieListGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListGroupByKeySpecifier | (() => undefined | MovieListGroupByKeySpecifier),
		fields?: MovieListGroupByFieldPolicy,
	},
	MovieListLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListLikedByUserKeySpecifier | (() => undefined | MovieListLikedByUserKeySpecifier),
		fields?: MovieListLikedByUserFieldPolicy,
	},
	MovieListLikedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListLikedByUserCountAggregateKeySpecifier | (() => undefined | MovieListLikedByUserCountAggregateKeySpecifier),
		fields?: MovieListLikedByUserCountAggregateFieldPolicy,
	},
	MovieListLikedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListLikedByUserGroupByKeySpecifier | (() => undefined | MovieListLikedByUserGroupByKeySpecifier),
		fields?: MovieListLikedByUserGroupByFieldPolicy,
	},
	MovieListLikedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListLikedByUserMaxAggregateKeySpecifier | (() => undefined | MovieListLikedByUserMaxAggregateKeySpecifier),
		fields?: MovieListLikedByUserMaxAggregateFieldPolicy,
	},
	MovieListLikedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListLikedByUserMinAggregateKeySpecifier | (() => undefined | MovieListLikedByUserMinAggregateKeySpecifier),
		fields?: MovieListLikedByUserMinAggregateFieldPolicy,
	},
	MovieListMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListMaxAggregateKeySpecifier | (() => undefined | MovieListMaxAggregateKeySpecifier),
		fields?: MovieListMaxAggregateFieldPolicy,
	},
	MovieListMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListMinAggregateKeySpecifier | (() => undefined | MovieListMinAggregateKeySpecifier),
		fields?: MovieListMinAggregateFieldPolicy,
	},
	MovieListStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieListStatsKeySpecifier | (() => undefined | MovieListStatsKeySpecifier),
		fields?: MovieListStatsFieldPolicy,
	},
	MovieMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieMaxAggregateKeySpecifier | (() => undefined | MovieMaxAggregateKeySpecifier),
		fields?: MovieMaxAggregateFieldPolicy,
	},
	MovieMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieMinAggregateKeySpecifier | (() => undefined | MovieMinAggregateKeySpecifier),
		fields?: MovieMinAggregateFieldPolicy,
	},
	MovieRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingKeySpecifier | (() => undefined | MovieRatingKeySpecifier),
		fields?: MovieRatingFieldPolicy,
	},
	MovieRatingAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingAvgAggregateKeySpecifier | (() => undefined | MovieRatingAvgAggregateKeySpecifier),
		fields?: MovieRatingAvgAggregateFieldPolicy,
	},
	MovieRatingCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingCountAggregateKeySpecifier | (() => undefined | MovieRatingCountAggregateKeySpecifier),
		fields?: MovieRatingCountAggregateFieldPolicy,
	},
	MovieRatingGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingGroupByKeySpecifier | (() => undefined | MovieRatingGroupByKeySpecifier),
		fields?: MovieRatingGroupByFieldPolicy,
	},
	MovieRatingMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingMaxAggregateKeySpecifier | (() => undefined | MovieRatingMaxAggregateKeySpecifier),
		fields?: MovieRatingMaxAggregateFieldPolicy,
	},
	MovieRatingMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingMinAggregateKeySpecifier | (() => undefined | MovieRatingMinAggregateKeySpecifier),
		fields?: MovieRatingMinAggregateFieldPolicy,
	},
	MovieRatingSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieRatingSumAggregateKeySpecifier | (() => undefined | MovieRatingSumAggregateKeySpecifier),
		fields?: MovieRatingSumAggregateFieldPolicy,
	},
	MovieReview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewKeySpecifier | (() => undefined | MovieReviewKeySpecifier),
		fields?: MovieReviewFieldPolicy,
	},
	MovieReviewCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewCountKeySpecifier | (() => undefined | MovieReviewCountKeySpecifier),
		fields?: MovieReviewCountFieldPolicy,
	},
	MovieReviewCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewCountAggregateKeySpecifier | (() => undefined | MovieReviewCountAggregateKeySpecifier),
		fields?: MovieReviewCountAggregateFieldPolicy,
	},
	MovieReviewGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewGroupByKeySpecifier | (() => undefined | MovieReviewGroupByKeySpecifier),
		fields?: MovieReviewGroupByFieldPolicy,
	},
	MovieReviewLikedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserKeySpecifier | (() => undefined | MovieReviewLikedByUserKeySpecifier),
		fields?: MovieReviewLikedByUserFieldPolicy,
	},
	MovieReviewLikedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserCountAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserCountAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserCountAggregateFieldPolicy,
	},
	MovieReviewLikedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserGroupByKeySpecifier | (() => undefined | MovieReviewLikedByUserGroupByKeySpecifier),
		fields?: MovieReviewLikedByUserGroupByFieldPolicy,
	},
	MovieReviewLikedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserMaxAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserMaxAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserMaxAggregateFieldPolicy,
	},
	MovieReviewLikedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewLikedByUserMinAggregateKeySpecifier | (() => undefined | MovieReviewLikedByUserMinAggregateKeySpecifier),
		fields?: MovieReviewLikedByUserMinAggregateFieldPolicy,
	},
	MovieReviewMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewMaxAggregateKeySpecifier | (() => undefined | MovieReviewMaxAggregateKeySpecifier),
		fields?: MovieReviewMaxAggregateFieldPolicy,
	},
	MovieReviewMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieReviewMinAggregateKeySpecifier | (() => undefined | MovieReviewMinAggregateKeySpecifier),
		fields?: MovieReviewMinAggregateFieldPolicy,
	},
	MovieSpokenLanguage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageKeySpecifier | (() => undefined | MovieSpokenLanguageKeySpecifier),
		fields?: MovieSpokenLanguageFieldPolicy,
	},
	MovieSpokenLanguageCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageCountKeySpecifier | (() => undefined | MovieSpokenLanguageCountKeySpecifier),
		fields?: MovieSpokenLanguageCountFieldPolicy,
	},
	MovieSpokenLanguageCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageCountAggregateKeySpecifier | (() => undefined | MovieSpokenLanguageCountAggregateKeySpecifier),
		fields?: MovieSpokenLanguageCountAggregateFieldPolicy,
	},
	MovieSpokenLanguageGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageGroupByKeySpecifier | (() => undefined | MovieSpokenLanguageGroupByKeySpecifier),
		fields?: MovieSpokenLanguageGroupByFieldPolicy,
	},
	MovieSpokenLanguageMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageMaxAggregateKeySpecifier | (() => undefined | MovieSpokenLanguageMaxAggregateKeySpecifier),
		fields?: MovieSpokenLanguageMaxAggregateFieldPolicy,
	},
	MovieSpokenLanguageMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieSpokenLanguageMinAggregateKeySpecifier | (() => undefined | MovieSpokenLanguageMinAggregateKeySpecifier),
		fields?: MovieSpokenLanguageMinAggregateFieldPolicy,
	},
	MovieStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStatsKeySpecifier | (() => undefined | MovieStatsKeySpecifier),
		fields?: MovieStatsFieldPolicy,
	},
	MovieStudio?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStudioKeySpecifier | (() => undefined | MovieStudioKeySpecifier),
		fields?: MovieStudioFieldPolicy,
	},
	MovieStudioCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieStudioCountKeySpecifier | (() => undefined | MovieStudioCountKeySpecifier),
		fields?: MovieStudioCountFieldPolicy,
	},
	MovieWatchedByUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserKeySpecifier | (() => undefined | MovieWatchedByUserKeySpecifier),
		fields?: MovieWatchedByUserFieldPolicy,
	},
	MovieWatchedByUserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserCountAggregateKeySpecifier | (() => undefined | MovieWatchedByUserCountAggregateKeySpecifier),
		fields?: MovieWatchedByUserCountAggregateFieldPolicy,
	},
	MovieWatchedByUserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserGroupByKeySpecifier | (() => undefined | MovieWatchedByUserGroupByKeySpecifier),
		fields?: MovieWatchedByUserGroupByFieldPolicy,
	},
	MovieWatchedByUserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserMaxAggregateKeySpecifier | (() => undefined | MovieWatchedByUserMaxAggregateKeySpecifier),
		fields?: MovieWatchedByUserMaxAggregateFieldPolicy,
	},
	MovieWatchedByUserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovieWatchedByUserMinAggregateKeySpecifier | (() => undefined | MovieWatchedByUserMinAggregateKeySpecifier),
		fields?: MovieWatchedByUserMinAggregateFieldPolicy,
	},
	MovifierAppUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovifierAppUserKeySpecifier | (() => undefined | MovifierAppUserKeySpecifier),
		fields?: MovifierAppUserFieldPolicy,
	},
	MovifierAppUserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MovifierAppUserCountKeySpecifier | (() => undefined | MovifierAppUserCountKeySpecifier),
		fields?: MovifierAppUserCountFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	UserLoginOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLoginOutputKeySpecifier | (() => undefined | UserLoginOutputKeySpecifier),
		fields?: UserLoginOutputFieldPolicy,
	},
	UserMovieWatchlist?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistKeySpecifier | (() => undefined | UserMovieWatchlistKeySpecifier),
		fields?: UserMovieWatchlistFieldPolicy,
	},
	UserMovieWatchlistCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistCountAggregateKeySpecifier | (() => undefined | UserMovieWatchlistCountAggregateKeySpecifier),
		fields?: UserMovieWatchlistCountAggregateFieldPolicy,
	},
	UserMovieWatchlistGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistGroupByKeySpecifier | (() => undefined | UserMovieWatchlistGroupByKeySpecifier),
		fields?: UserMovieWatchlistGroupByFieldPolicy,
	},
	UserMovieWatchlistMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistMaxAggregateKeySpecifier | (() => undefined | UserMovieWatchlistMaxAggregateKeySpecifier),
		fields?: UserMovieWatchlistMaxAggregateFieldPolicy,
	},
	UserMovieWatchlistMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMovieWatchlistMinAggregateKeySpecifier | (() => undefined | UserMovieWatchlistMinAggregateKeySpecifier),
		fields?: UserMovieWatchlistMinAggregateFieldPolicy,
	},
	UserRegisterOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRegisterOutputKeySpecifier | (() => undefined | UserRegisterOutputKeySpecifier),
		fields?: UserRegisterOutputFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;