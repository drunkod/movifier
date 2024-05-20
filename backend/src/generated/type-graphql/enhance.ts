import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  MovieStudio: crudResolvers.MovieStudioCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  MovieStats: crudResolvers.MovieStatsCrudResolver,
  MovieInfo: crudResolvers.MovieInfoCrudResolver,
  MovieSpokenLanguage: crudResolvers.MovieSpokenLanguageCrudResolver,
  MovieCrewMemberOnMovie: crudResolvers.MovieCrewMemberOnMovieCrudResolver,
  MovieCrewMember: crudResolvers.MovieCrewMemberCrudResolver,
  MovieCrewMemberType: crudResolvers.MovieCrewMemberTypeCrudResolver,
  Genre: crudResolvers.GenreCrudResolver,
  MovieKeywordCategory: crudResolvers.MovieKeywordCategoryCrudResolver,
  MovifierAppUser: crudResolvers.MovifierAppUserCrudResolver,
  MovieList: crudResolvers.MovieListCrudResolver,
  MovieListStats: crudResolvers.MovieListStatsCrudResolver,
  MovieListComment: crudResolvers.MovieListCommentCrudResolver,
  MovieRating: crudResolvers.MovieRatingCrudResolver,
  MovieReview: crudResolvers.MovieReviewCrudResolver
};
const actionResolversMap = {
  MovieStudio: {
    aggregateMovieStudio: actionResolvers.AggregateMovieStudioResolver,
    createManyMovieStudio: actionResolvers.CreateManyMovieStudioResolver,
    createOneMovieStudio: actionResolvers.CreateOneMovieStudioResolver,
    deleteManyMovieStudio: actionResolvers.DeleteManyMovieStudioResolver,
    deleteOneMovieStudio: actionResolvers.DeleteOneMovieStudioResolver,
    findFirstMovieStudio: actionResolvers.FindFirstMovieStudioResolver,
    findFirstMovieStudioOrThrow: actionResolvers.FindFirstMovieStudioOrThrowResolver,
    movieStudios: actionResolvers.FindManyMovieStudioResolver,
    movieStudio: actionResolvers.FindUniqueMovieStudioResolver,
    getMovieStudio: actionResolvers.FindUniqueMovieStudioOrThrowResolver,
    groupByMovieStudio: actionResolvers.GroupByMovieStudioResolver,
    updateManyMovieStudio: actionResolvers.UpdateManyMovieStudioResolver,
    updateOneMovieStudio: actionResolvers.UpdateOneMovieStudioResolver,
    upsertOneMovieStudio: actionResolvers.UpsertOneMovieStudioResolver
  },
  Movie: {
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    createManyMovie: actionResolvers.CreateManyMovieResolver,
    createOneMovie: actionResolvers.CreateOneMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    deleteOneMovie: actionResolvers.DeleteOneMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    findFirstMovieOrThrow: actionResolvers.FindFirstMovieOrThrowResolver,
    movies: actionResolvers.FindManyMovieResolver,
    movie: actionResolvers.FindUniqueMovieResolver,
    getMovie: actionResolvers.FindUniqueMovieOrThrowResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    updateOneMovie: actionResolvers.UpdateOneMovieResolver,
    upsertOneMovie: actionResolvers.UpsertOneMovieResolver
  },
  MovieStats: {
    aggregateMovieStats: actionResolvers.AggregateMovieStatsResolver,
    createManyMovieStats: actionResolvers.CreateManyMovieStatsResolver,
    createOneMovieStats: actionResolvers.CreateOneMovieStatsResolver,
    deleteManyMovieStats: actionResolvers.DeleteManyMovieStatsResolver,
    deleteOneMovieStats: actionResolvers.DeleteOneMovieStatsResolver,
    findFirstMovieStats: actionResolvers.FindFirstMovieStatsResolver,
    findFirstMovieStatsOrThrow: actionResolvers.FindFirstMovieStatsOrThrowResolver,
    findManyMovieStats: actionResolvers.FindManyMovieStatsResolver,
    findUniqueMovieStats: actionResolvers.FindUniqueMovieStatsResolver,
    findUniqueMovieStatsOrThrow: actionResolvers.FindUniqueMovieStatsOrThrowResolver,
    groupByMovieStats: actionResolvers.GroupByMovieStatsResolver,
    updateManyMovieStats: actionResolvers.UpdateManyMovieStatsResolver,
    updateOneMovieStats: actionResolvers.UpdateOneMovieStatsResolver,
    upsertOneMovieStats: actionResolvers.UpsertOneMovieStatsResolver
  },
  MovieInfo: {
    aggregateMovieInfo: actionResolvers.AggregateMovieInfoResolver,
    createManyMovieInfo: actionResolvers.CreateManyMovieInfoResolver,
    createOneMovieInfo: actionResolvers.CreateOneMovieInfoResolver,
    deleteManyMovieInfo: actionResolvers.DeleteManyMovieInfoResolver,
    deleteOneMovieInfo: actionResolvers.DeleteOneMovieInfoResolver,
    findFirstMovieInfo: actionResolvers.FindFirstMovieInfoResolver,
    findFirstMovieInfoOrThrow: actionResolvers.FindFirstMovieInfoOrThrowResolver,
    movieInfos: actionResolvers.FindManyMovieInfoResolver,
    movieInfo: actionResolvers.FindUniqueMovieInfoResolver,
    getMovieInfo: actionResolvers.FindUniqueMovieInfoOrThrowResolver,
    groupByMovieInfo: actionResolvers.GroupByMovieInfoResolver,
    updateManyMovieInfo: actionResolvers.UpdateManyMovieInfoResolver,
    updateOneMovieInfo: actionResolvers.UpdateOneMovieInfoResolver,
    upsertOneMovieInfo: actionResolvers.UpsertOneMovieInfoResolver
  },
  MovieSpokenLanguage: {
    aggregateMovieSpokenLanguage: actionResolvers.AggregateMovieSpokenLanguageResolver,
    createManyMovieSpokenLanguage: actionResolvers.CreateManyMovieSpokenLanguageResolver,
    createOneMovieSpokenLanguage: actionResolvers.CreateOneMovieSpokenLanguageResolver,
    deleteManyMovieSpokenLanguage: actionResolvers.DeleteManyMovieSpokenLanguageResolver,
    deleteOneMovieSpokenLanguage: actionResolvers.DeleteOneMovieSpokenLanguageResolver,
    findFirstMovieSpokenLanguage: actionResolvers.FindFirstMovieSpokenLanguageResolver,
    findFirstMovieSpokenLanguageOrThrow: actionResolvers.FindFirstMovieSpokenLanguageOrThrowResolver,
    movieSpokenLanguages: actionResolvers.FindManyMovieSpokenLanguageResolver,
    movieSpokenLanguage: actionResolvers.FindUniqueMovieSpokenLanguageResolver,
    getMovieSpokenLanguage: actionResolvers.FindUniqueMovieSpokenLanguageOrThrowResolver,
    groupByMovieSpokenLanguage: actionResolvers.GroupByMovieSpokenLanguageResolver,
    updateManyMovieSpokenLanguage: actionResolvers.UpdateManyMovieSpokenLanguageResolver,
    updateOneMovieSpokenLanguage: actionResolvers.UpdateOneMovieSpokenLanguageResolver,
    upsertOneMovieSpokenLanguage: actionResolvers.UpsertOneMovieSpokenLanguageResolver
  },
  MovieCrewMemberOnMovie: {
    aggregateMovieCrewMemberOnMovie: actionResolvers.AggregateMovieCrewMemberOnMovieResolver,
    createManyMovieCrewMemberOnMovie: actionResolvers.CreateManyMovieCrewMemberOnMovieResolver,
    createOneMovieCrewMemberOnMovie: actionResolvers.CreateOneMovieCrewMemberOnMovieResolver,
    deleteManyMovieCrewMemberOnMovie: actionResolvers.DeleteManyMovieCrewMemberOnMovieResolver,
    deleteOneMovieCrewMemberOnMovie: actionResolvers.DeleteOneMovieCrewMemberOnMovieResolver,
    findFirstMovieCrewMemberOnMovie: actionResolvers.FindFirstMovieCrewMemberOnMovieResolver,
    findFirstMovieCrewMemberOnMovieOrThrow: actionResolvers.FindFirstMovieCrewMemberOnMovieOrThrowResolver,
    movieCrewMemberOnMovies: actionResolvers.FindManyMovieCrewMemberOnMovieResolver,
    movieCrewMemberOnMovie: actionResolvers.FindUniqueMovieCrewMemberOnMovieResolver,
    getMovieCrewMemberOnMovie: actionResolvers.FindUniqueMovieCrewMemberOnMovieOrThrowResolver,
    groupByMovieCrewMemberOnMovie: actionResolvers.GroupByMovieCrewMemberOnMovieResolver,
    updateManyMovieCrewMemberOnMovie: actionResolvers.UpdateManyMovieCrewMemberOnMovieResolver,
    updateOneMovieCrewMemberOnMovie: actionResolvers.UpdateOneMovieCrewMemberOnMovieResolver,
    upsertOneMovieCrewMemberOnMovie: actionResolvers.UpsertOneMovieCrewMemberOnMovieResolver
  },
  MovieCrewMember: {
    aggregateMovieCrewMember: actionResolvers.AggregateMovieCrewMemberResolver,
    createManyMovieCrewMember: actionResolvers.CreateManyMovieCrewMemberResolver,
    createOneMovieCrewMember: actionResolvers.CreateOneMovieCrewMemberResolver,
    deleteManyMovieCrewMember: actionResolvers.DeleteManyMovieCrewMemberResolver,
    deleteOneMovieCrewMember: actionResolvers.DeleteOneMovieCrewMemberResolver,
    findFirstMovieCrewMember: actionResolvers.FindFirstMovieCrewMemberResolver,
    findFirstMovieCrewMemberOrThrow: actionResolvers.FindFirstMovieCrewMemberOrThrowResolver,
    movieCrewMembers: actionResolvers.FindManyMovieCrewMemberResolver,
    movieCrewMember: actionResolvers.FindUniqueMovieCrewMemberResolver,
    getMovieCrewMember: actionResolvers.FindUniqueMovieCrewMemberOrThrowResolver,
    groupByMovieCrewMember: actionResolvers.GroupByMovieCrewMemberResolver,
    updateManyMovieCrewMember: actionResolvers.UpdateManyMovieCrewMemberResolver,
    updateOneMovieCrewMember: actionResolvers.UpdateOneMovieCrewMemberResolver,
    upsertOneMovieCrewMember: actionResolvers.UpsertOneMovieCrewMemberResolver
  },
  MovieCrewMemberType: {
    aggregateMovieCrewMemberType: actionResolvers.AggregateMovieCrewMemberTypeResolver,
    createManyMovieCrewMemberType: actionResolvers.CreateManyMovieCrewMemberTypeResolver,
    createOneMovieCrewMemberType: actionResolvers.CreateOneMovieCrewMemberTypeResolver,
    deleteManyMovieCrewMemberType: actionResolvers.DeleteManyMovieCrewMemberTypeResolver,
    deleteOneMovieCrewMemberType: actionResolvers.DeleteOneMovieCrewMemberTypeResolver,
    findFirstMovieCrewMemberType: actionResolvers.FindFirstMovieCrewMemberTypeResolver,
    findFirstMovieCrewMemberTypeOrThrow: actionResolvers.FindFirstMovieCrewMemberTypeOrThrowResolver,
    movieCrewMemberTypes: actionResolvers.FindManyMovieCrewMemberTypeResolver,
    movieCrewMemberType: actionResolvers.FindUniqueMovieCrewMemberTypeResolver,
    getMovieCrewMemberType: actionResolvers.FindUniqueMovieCrewMemberTypeOrThrowResolver,
    groupByMovieCrewMemberType: actionResolvers.GroupByMovieCrewMemberTypeResolver,
    updateManyMovieCrewMemberType: actionResolvers.UpdateManyMovieCrewMemberTypeResolver,
    updateOneMovieCrewMemberType: actionResolvers.UpdateOneMovieCrewMemberTypeResolver,
    upsertOneMovieCrewMemberType: actionResolvers.UpsertOneMovieCrewMemberTypeResolver
  },
  Genre: {
    aggregateGenre: actionResolvers.AggregateGenreResolver,
    createManyGenre: actionResolvers.CreateManyGenreResolver,
    createOneGenre: actionResolvers.CreateOneGenreResolver,
    deleteManyGenre: actionResolvers.DeleteManyGenreResolver,
    deleteOneGenre: actionResolvers.DeleteOneGenreResolver,
    findFirstGenre: actionResolvers.FindFirstGenreResolver,
    findFirstGenreOrThrow: actionResolvers.FindFirstGenreOrThrowResolver,
    genres: actionResolvers.FindManyGenreResolver,
    genre: actionResolvers.FindUniqueGenreResolver,
    getGenre: actionResolvers.FindUniqueGenreOrThrowResolver,
    groupByGenre: actionResolvers.GroupByGenreResolver,
    updateManyGenre: actionResolvers.UpdateManyGenreResolver,
    updateOneGenre: actionResolvers.UpdateOneGenreResolver,
    upsertOneGenre: actionResolvers.UpsertOneGenreResolver
  },
  MovieKeywordCategory: {
    aggregateMovieKeywordCategory: actionResolvers.AggregateMovieKeywordCategoryResolver,
    createManyMovieKeywordCategory: actionResolvers.CreateManyMovieKeywordCategoryResolver,
    createOneMovieKeywordCategory: actionResolvers.CreateOneMovieKeywordCategoryResolver,
    deleteManyMovieKeywordCategory: actionResolvers.DeleteManyMovieKeywordCategoryResolver,
    deleteOneMovieKeywordCategory: actionResolvers.DeleteOneMovieKeywordCategoryResolver,
    findFirstMovieKeywordCategory: actionResolvers.FindFirstMovieKeywordCategoryResolver,
    findFirstMovieKeywordCategoryOrThrow: actionResolvers.FindFirstMovieKeywordCategoryOrThrowResolver,
    movieKeywordCategories: actionResolvers.FindManyMovieKeywordCategoryResolver,
    movieKeywordCategory: actionResolvers.FindUniqueMovieKeywordCategoryResolver,
    getMovieKeywordCategory: actionResolvers.FindUniqueMovieKeywordCategoryOrThrowResolver,
    groupByMovieKeywordCategory: actionResolvers.GroupByMovieKeywordCategoryResolver,
    updateManyMovieKeywordCategory: actionResolvers.UpdateManyMovieKeywordCategoryResolver,
    updateOneMovieKeywordCategory: actionResolvers.UpdateOneMovieKeywordCategoryResolver,
    upsertOneMovieKeywordCategory: actionResolvers.UpsertOneMovieKeywordCategoryResolver
  },
  MovifierAppUser: {
    aggregateMovifierAppUser: actionResolvers.AggregateMovifierAppUserResolver,
    createManyMovifierAppUser: actionResolvers.CreateManyMovifierAppUserResolver,
    createOneMovifierAppUser: actionResolvers.CreateOneMovifierAppUserResolver,
    deleteManyMovifierAppUser: actionResolvers.DeleteManyMovifierAppUserResolver,
    deleteOneMovifierAppUser: actionResolvers.DeleteOneMovifierAppUserResolver,
    findFirstMovifierAppUser: actionResolvers.FindFirstMovifierAppUserResolver,
    findFirstMovifierAppUserOrThrow: actionResolvers.FindFirstMovifierAppUserOrThrowResolver,
    movifierAppUsers: actionResolvers.FindManyMovifierAppUserResolver,
    movifierAppUser: actionResolvers.FindUniqueMovifierAppUserResolver,
    getMovifierAppUser: actionResolvers.FindUniqueMovifierAppUserOrThrowResolver,
    groupByMovifierAppUser: actionResolvers.GroupByMovifierAppUserResolver,
    updateManyMovifierAppUser: actionResolvers.UpdateManyMovifierAppUserResolver,
    updateOneMovifierAppUser: actionResolvers.UpdateOneMovifierAppUserResolver,
    upsertOneMovifierAppUser: actionResolvers.UpsertOneMovifierAppUserResolver
  },
  MovieList: {
    aggregateMovieList: actionResolvers.AggregateMovieListResolver,
    createManyMovieList: actionResolvers.CreateManyMovieListResolver,
    createOneMovieList: actionResolvers.CreateOneMovieListResolver,
    deleteManyMovieList: actionResolvers.DeleteManyMovieListResolver,
    deleteOneMovieList: actionResolvers.DeleteOneMovieListResolver,
    findFirstMovieList: actionResolvers.FindFirstMovieListResolver,
    findFirstMovieListOrThrow: actionResolvers.FindFirstMovieListOrThrowResolver,
    movieLists: actionResolvers.FindManyMovieListResolver,
    movieList: actionResolvers.FindUniqueMovieListResolver,
    getMovieList: actionResolvers.FindUniqueMovieListOrThrowResolver,
    groupByMovieList: actionResolvers.GroupByMovieListResolver,
    updateManyMovieList: actionResolvers.UpdateManyMovieListResolver,
    updateOneMovieList: actionResolvers.UpdateOneMovieListResolver,
    upsertOneMovieList: actionResolvers.UpsertOneMovieListResolver
  },
  MovieListStats: {
    aggregateMovieListStats: actionResolvers.AggregateMovieListStatsResolver,
    createManyMovieListStats: actionResolvers.CreateManyMovieListStatsResolver,
    createOneMovieListStats: actionResolvers.CreateOneMovieListStatsResolver,
    deleteManyMovieListStats: actionResolvers.DeleteManyMovieListStatsResolver,
    deleteOneMovieListStats: actionResolvers.DeleteOneMovieListStatsResolver,
    findFirstMovieListStats: actionResolvers.FindFirstMovieListStatsResolver,
    findFirstMovieListStatsOrThrow: actionResolvers.FindFirstMovieListStatsOrThrowResolver,
    findManyMovieListStats: actionResolvers.FindManyMovieListStatsResolver,
    findUniqueMovieListStats: actionResolvers.FindUniqueMovieListStatsResolver,
    findUniqueMovieListStatsOrThrow: actionResolvers.FindUniqueMovieListStatsOrThrowResolver,
    groupByMovieListStats: actionResolvers.GroupByMovieListStatsResolver,
    updateManyMovieListStats: actionResolvers.UpdateManyMovieListStatsResolver,
    updateOneMovieListStats: actionResolvers.UpdateOneMovieListStatsResolver,
    upsertOneMovieListStats: actionResolvers.UpsertOneMovieListStatsResolver
  },
  MovieListComment: {
    aggregateMovieListComment: actionResolvers.AggregateMovieListCommentResolver,
    createManyMovieListComment: actionResolvers.CreateManyMovieListCommentResolver,
    createOneMovieListComment: actionResolvers.CreateOneMovieListCommentResolver,
    deleteManyMovieListComment: actionResolvers.DeleteManyMovieListCommentResolver,
    deleteOneMovieListComment: actionResolvers.DeleteOneMovieListCommentResolver,
    findFirstMovieListComment: actionResolvers.FindFirstMovieListCommentResolver,
    findFirstMovieListCommentOrThrow: actionResolvers.FindFirstMovieListCommentOrThrowResolver,
    movieListComments: actionResolvers.FindManyMovieListCommentResolver,
    movieListComment: actionResolvers.FindUniqueMovieListCommentResolver,
    getMovieListComment: actionResolvers.FindUniqueMovieListCommentOrThrowResolver,
    groupByMovieListComment: actionResolvers.GroupByMovieListCommentResolver,
    updateManyMovieListComment: actionResolvers.UpdateManyMovieListCommentResolver,
    updateOneMovieListComment: actionResolvers.UpdateOneMovieListCommentResolver,
    upsertOneMovieListComment: actionResolvers.UpsertOneMovieListCommentResolver
  },
  MovieRating: {
    aggregateMovieRating: actionResolvers.AggregateMovieRatingResolver,
    createManyMovieRating: actionResolvers.CreateManyMovieRatingResolver,
    createOneMovieRating: actionResolvers.CreateOneMovieRatingResolver,
    deleteManyMovieRating: actionResolvers.DeleteManyMovieRatingResolver,
    deleteOneMovieRating: actionResolvers.DeleteOneMovieRatingResolver,
    findFirstMovieRating: actionResolvers.FindFirstMovieRatingResolver,
    findFirstMovieRatingOrThrow: actionResolvers.FindFirstMovieRatingOrThrowResolver,
    movieRatings: actionResolvers.FindManyMovieRatingResolver,
    movieRating: actionResolvers.FindUniqueMovieRatingResolver,
    getMovieRating: actionResolvers.FindUniqueMovieRatingOrThrowResolver,
    groupByMovieRating: actionResolvers.GroupByMovieRatingResolver,
    updateManyMovieRating: actionResolvers.UpdateManyMovieRatingResolver,
    updateOneMovieRating: actionResolvers.UpdateOneMovieRatingResolver,
    upsertOneMovieRating: actionResolvers.UpsertOneMovieRatingResolver
  },
  MovieReview: {
    aggregateMovieReview: actionResolvers.AggregateMovieReviewResolver,
    createManyMovieReview: actionResolvers.CreateManyMovieReviewResolver,
    createOneMovieReview: actionResolvers.CreateOneMovieReviewResolver,
    deleteManyMovieReview: actionResolvers.DeleteManyMovieReviewResolver,
    deleteOneMovieReview: actionResolvers.DeleteOneMovieReviewResolver,
    findFirstMovieReview: actionResolvers.FindFirstMovieReviewResolver,
    findFirstMovieReviewOrThrow: actionResolvers.FindFirstMovieReviewOrThrowResolver,
    movieReviews: actionResolvers.FindManyMovieReviewResolver,
    movieReview: actionResolvers.FindUniqueMovieReviewResolver,
    getMovieReview: actionResolvers.FindUniqueMovieReviewOrThrowResolver,
    groupByMovieReview: actionResolvers.GroupByMovieReviewResolver,
    updateManyMovieReview: actionResolvers.UpdateManyMovieReviewResolver,
    updateOneMovieReview: actionResolvers.UpdateOneMovieReviewResolver,
    upsertOneMovieReview: actionResolvers.UpsertOneMovieReviewResolver
  }
};
const crudResolversInfo = {
  MovieStudio: ["aggregateMovieStudio", "createManyMovieStudio", "createOneMovieStudio", "deleteManyMovieStudio", "deleteOneMovieStudio", "findFirstMovieStudio", "findFirstMovieStudioOrThrow", "movieStudios", "movieStudio", "getMovieStudio", "groupByMovieStudio", "updateManyMovieStudio", "updateOneMovieStudio", "upsertOneMovieStudio"],
  Movie: ["aggregateMovie", "createManyMovie", "createOneMovie", "deleteManyMovie", "deleteOneMovie", "findFirstMovie", "findFirstMovieOrThrow", "movies", "movie", "getMovie", "groupByMovie", "updateManyMovie", "updateOneMovie", "upsertOneMovie"],
  MovieStats: ["aggregateMovieStats", "createManyMovieStats", "createOneMovieStats", "deleteManyMovieStats", "deleteOneMovieStats", "findFirstMovieStats", "findFirstMovieStatsOrThrow", "findManyMovieStats", "findUniqueMovieStats", "findUniqueMovieStatsOrThrow", "groupByMovieStats", "updateManyMovieStats", "updateOneMovieStats", "upsertOneMovieStats"],
  MovieInfo: ["aggregateMovieInfo", "createManyMovieInfo", "createOneMovieInfo", "deleteManyMovieInfo", "deleteOneMovieInfo", "findFirstMovieInfo", "findFirstMovieInfoOrThrow", "movieInfos", "movieInfo", "getMovieInfo", "groupByMovieInfo", "updateManyMovieInfo", "updateOneMovieInfo", "upsertOneMovieInfo"],
  MovieSpokenLanguage: ["aggregateMovieSpokenLanguage", "createManyMovieSpokenLanguage", "createOneMovieSpokenLanguage", "deleteManyMovieSpokenLanguage", "deleteOneMovieSpokenLanguage", "findFirstMovieSpokenLanguage", "findFirstMovieSpokenLanguageOrThrow", "movieSpokenLanguages", "movieSpokenLanguage", "getMovieSpokenLanguage", "groupByMovieSpokenLanguage", "updateManyMovieSpokenLanguage", "updateOneMovieSpokenLanguage", "upsertOneMovieSpokenLanguage"],
  MovieCrewMemberOnMovie: ["aggregateMovieCrewMemberOnMovie", "createManyMovieCrewMemberOnMovie", "createOneMovieCrewMemberOnMovie", "deleteManyMovieCrewMemberOnMovie", "deleteOneMovieCrewMemberOnMovie", "findFirstMovieCrewMemberOnMovie", "findFirstMovieCrewMemberOnMovieOrThrow", "movieCrewMemberOnMovies", "movieCrewMemberOnMovie", "getMovieCrewMemberOnMovie", "groupByMovieCrewMemberOnMovie", "updateManyMovieCrewMemberOnMovie", "updateOneMovieCrewMemberOnMovie", "upsertOneMovieCrewMemberOnMovie"],
  MovieCrewMember: ["aggregateMovieCrewMember", "createManyMovieCrewMember", "createOneMovieCrewMember", "deleteManyMovieCrewMember", "deleteOneMovieCrewMember", "findFirstMovieCrewMember", "findFirstMovieCrewMemberOrThrow", "movieCrewMembers", "movieCrewMember", "getMovieCrewMember", "groupByMovieCrewMember", "updateManyMovieCrewMember", "updateOneMovieCrewMember", "upsertOneMovieCrewMember"],
  MovieCrewMemberType: ["aggregateMovieCrewMemberType", "createManyMovieCrewMemberType", "createOneMovieCrewMemberType", "deleteManyMovieCrewMemberType", "deleteOneMovieCrewMemberType", "findFirstMovieCrewMemberType", "findFirstMovieCrewMemberTypeOrThrow", "movieCrewMemberTypes", "movieCrewMemberType", "getMovieCrewMemberType", "groupByMovieCrewMemberType", "updateManyMovieCrewMemberType", "updateOneMovieCrewMemberType", "upsertOneMovieCrewMemberType"],
  Genre: ["aggregateGenre", "createManyGenre", "createOneGenre", "deleteManyGenre", "deleteOneGenre", "findFirstGenre", "findFirstGenreOrThrow", "genres", "genre", "getGenre", "groupByGenre", "updateManyGenre", "updateOneGenre", "upsertOneGenre"],
  MovieKeywordCategory: ["aggregateMovieKeywordCategory", "createManyMovieKeywordCategory", "createOneMovieKeywordCategory", "deleteManyMovieKeywordCategory", "deleteOneMovieKeywordCategory", "findFirstMovieKeywordCategory", "findFirstMovieKeywordCategoryOrThrow", "movieKeywordCategories", "movieKeywordCategory", "getMovieKeywordCategory", "groupByMovieKeywordCategory", "updateManyMovieKeywordCategory", "updateOneMovieKeywordCategory", "upsertOneMovieKeywordCategory"],
  MovifierAppUser: ["aggregateMovifierAppUser", "createManyMovifierAppUser", "createOneMovifierAppUser", "deleteManyMovifierAppUser", "deleteOneMovifierAppUser", "findFirstMovifierAppUser", "findFirstMovifierAppUserOrThrow", "movifierAppUsers", "movifierAppUser", "getMovifierAppUser", "groupByMovifierAppUser", "updateManyMovifierAppUser", "updateOneMovifierAppUser", "upsertOneMovifierAppUser"],
  MovieList: ["aggregateMovieList", "createManyMovieList", "createOneMovieList", "deleteManyMovieList", "deleteOneMovieList", "findFirstMovieList", "findFirstMovieListOrThrow", "movieLists", "movieList", "getMovieList", "groupByMovieList", "updateManyMovieList", "updateOneMovieList", "upsertOneMovieList"],
  MovieListStats: ["aggregateMovieListStats", "createManyMovieListStats", "createOneMovieListStats", "deleteManyMovieListStats", "deleteOneMovieListStats", "findFirstMovieListStats", "findFirstMovieListStatsOrThrow", "findManyMovieListStats", "findUniqueMovieListStats", "findUniqueMovieListStatsOrThrow", "groupByMovieListStats", "updateManyMovieListStats", "updateOneMovieListStats", "upsertOneMovieListStats"],
  MovieListComment: ["aggregateMovieListComment", "createManyMovieListComment", "createOneMovieListComment", "deleteManyMovieListComment", "deleteOneMovieListComment", "findFirstMovieListComment", "findFirstMovieListCommentOrThrow", "movieListComments", "movieListComment", "getMovieListComment", "groupByMovieListComment", "updateManyMovieListComment", "updateOneMovieListComment", "upsertOneMovieListComment"],
  MovieRating: ["aggregateMovieRating", "createManyMovieRating", "createOneMovieRating", "deleteManyMovieRating", "deleteOneMovieRating", "findFirstMovieRating", "findFirstMovieRatingOrThrow", "movieRatings", "movieRating", "getMovieRating", "groupByMovieRating", "updateManyMovieRating", "updateOneMovieRating", "upsertOneMovieRating"],
  MovieReview: ["aggregateMovieReview", "createManyMovieReview", "createOneMovieReview", "deleteManyMovieReview", "deleteOneMovieReview", "findFirstMovieReview", "findFirstMovieReviewOrThrow", "movieReviews", "movieReview", "getMovieReview", "groupByMovieReview", "updateManyMovieReview", "updateOneMovieReview", "upsertOneMovieReview"]
};
const argsInfo = {
  AggregateMovieStudioArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieStudioArgs: ["data", "skipDuplicates"],
  CreateOneMovieStudioArgs: ["data"],
  DeleteManyMovieStudioArgs: ["where"],
  DeleteOneMovieStudioArgs: ["where"],
  FindFirstMovieStudioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieStudioOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieStudioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieStudioArgs: ["where"],
  FindUniqueMovieStudioOrThrowArgs: ["where"],
  GroupByMovieStudioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieStudioArgs: ["data", "where"],
  UpdateOneMovieStudioArgs: ["data", "where"],
  UpsertOneMovieStudioArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieArgs: ["data", "skipDuplicates"],
  CreateOneMovieArgs: ["data"],
  DeleteManyMovieArgs: ["where"],
  DeleteOneMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieArgs: ["where"],
  FindUniqueMovieOrThrowArgs: ["where"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieArgs: ["data", "where"],
  UpdateOneMovieArgs: ["data", "where"],
  UpsertOneMovieArgs: ["where", "create", "update"],
  AggregateMovieStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieStatsArgs: ["data", "skipDuplicates"],
  CreateOneMovieStatsArgs: ["data"],
  DeleteManyMovieStatsArgs: ["where"],
  DeleteOneMovieStatsArgs: ["where"],
  FindFirstMovieStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieStatsArgs: ["where"],
  FindUniqueMovieStatsOrThrowArgs: ["where"],
  GroupByMovieStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieStatsArgs: ["data", "where"],
  UpdateOneMovieStatsArgs: ["data", "where"],
  UpsertOneMovieStatsArgs: ["where", "create", "update"],
  AggregateMovieInfoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieInfoArgs: ["data", "skipDuplicates"],
  CreateOneMovieInfoArgs: ["data"],
  DeleteManyMovieInfoArgs: ["where"],
  DeleteOneMovieInfoArgs: ["where"],
  FindFirstMovieInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieInfoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieInfoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieInfoArgs: ["where"],
  FindUniqueMovieInfoOrThrowArgs: ["where"],
  GroupByMovieInfoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieInfoArgs: ["data", "where"],
  UpdateOneMovieInfoArgs: ["data", "where"],
  UpsertOneMovieInfoArgs: ["where", "create", "update"],
  AggregateMovieSpokenLanguageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieSpokenLanguageArgs: ["data", "skipDuplicates"],
  CreateOneMovieSpokenLanguageArgs: ["data"],
  DeleteManyMovieSpokenLanguageArgs: ["where"],
  DeleteOneMovieSpokenLanguageArgs: ["where"],
  FindFirstMovieSpokenLanguageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieSpokenLanguageOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieSpokenLanguageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieSpokenLanguageArgs: ["where"],
  FindUniqueMovieSpokenLanguageOrThrowArgs: ["where"],
  GroupByMovieSpokenLanguageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieSpokenLanguageArgs: ["data", "where"],
  UpdateOneMovieSpokenLanguageArgs: ["data", "where"],
  UpsertOneMovieSpokenLanguageArgs: ["where", "create", "update"],
  AggregateMovieCrewMemberOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieCrewMemberOnMovieArgs: ["data", "skipDuplicates"],
  CreateOneMovieCrewMemberOnMovieArgs: ["data"],
  DeleteManyMovieCrewMemberOnMovieArgs: ["where"],
  DeleteOneMovieCrewMemberOnMovieArgs: ["where"],
  FindFirstMovieCrewMemberOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieCrewMemberOnMovieOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieCrewMemberOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieCrewMemberOnMovieArgs: ["where"],
  FindUniqueMovieCrewMemberOnMovieOrThrowArgs: ["where"],
  GroupByMovieCrewMemberOnMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieCrewMemberOnMovieArgs: ["data", "where"],
  UpdateOneMovieCrewMemberOnMovieArgs: ["data", "where"],
  UpsertOneMovieCrewMemberOnMovieArgs: ["where", "create", "update"],
  AggregateMovieCrewMemberArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieCrewMemberArgs: ["data", "skipDuplicates"],
  CreateOneMovieCrewMemberArgs: ["data"],
  DeleteManyMovieCrewMemberArgs: ["where"],
  DeleteOneMovieCrewMemberArgs: ["where"],
  FindFirstMovieCrewMemberArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieCrewMemberOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieCrewMemberArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieCrewMemberArgs: ["where"],
  FindUniqueMovieCrewMemberOrThrowArgs: ["where"],
  GroupByMovieCrewMemberArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieCrewMemberArgs: ["data", "where"],
  UpdateOneMovieCrewMemberArgs: ["data", "where"],
  UpsertOneMovieCrewMemberArgs: ["where", "create", "update"],
  AggregateMovieCrewMemberTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieCrewMemberTypeArgs: ["data", "skipDuplicates"],
  CreateOneMovieCrewMemberTypeArgs: ["data"],
  DeleteManyMovieCrewMemberTypeArgs: ["where"],
  DeleteOneMovieCrewMemberTypeArgs: ["where"],
  FindFirstMovieCrewMemberTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieCrewMemberTypeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieCrewMemberTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieCrewMemberTypeArgs: ["where"],
  FindUniqueMovieCrewMemberTypeOrThrowArgs: ["where"],
  GroupByMovieCrewMemberTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieCrewMemberTypeArgs: ["data", "where"],
  UpdateOneMovieCrewMemberTypeArgs: ["data", "where"],
  UpsertOneMovieCrewMemberTypeArgs: ["where", "create", "update"],
  AggregateGenreArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGenreArgs: ["data", "skipDuplicates"],
  CreateOneGenreArgs: ["data"],
  DeleteManyGenreArgs: ["where"],
  DeleteOneGenreArgs: ["where"],
  FindFirstGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstGenreOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGenreArgs: ["where"],
  FindUniqueGenreOrThrowArgs: ["where"],
  GroupByGenreArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGenreArgs: ["data", "where"],
  UpdateOneGenreArgs: ["data", "where"],
  UpsertOneGenreArgs: ["where", "create", "update"],
  AggregateMovieKeywordCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieKeywordCategoryArgs: ["data", "skipDuplicates"],
  CreateOneMovieKeywordCategoryArgs: ["data"],
  DeleteManyMovieKeywordCategoryArgs: ["where"],
  DeleteOneMovieKeywordCategoryArgs: ["where"],
  FindFirstMovieKeywordCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieKeywordCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieKeywordCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieKeywordCategoryArgs: ["where"],
  FindUniqueMovieKeywordCategoryOrThrowArgs: ["where"],
  GroupByMovieKeywordCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieKeywordCategoryArgs: ["data", "where"],
  UpdateOneMovieKeywordCategoryArgs: ["data", "where"],
  UpsertOneMovieKeywordCategoryArgs: ["where", "create", "update"],
  AggregateMovifierAppUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovifierAppUserArgs: ["data", "skipDuplicates"],
  CreateOneMovifierAppUserArgs: ["data"],
  DeleteManyMovifierAppUserArgs: ["where"],
  DeleteOneMovifierAppUserArgs: ["where"],
  FindFirstMovifierAppUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovifierAppUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovifierAppUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovifierAppUserArgs: ["where"],
  FindUniqueMovifierAppUserOrThrowArgs: ["where"],
  GroupByMovifierAppUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovifierAppUserArgs: ["data", "where"],
  UpdateOneMovifierAppUserArgs: ["data", "where"],
  UpsertOneMovifierAppUserArgs: ["where", "create", "update"],
  AggregateMovieListArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieListArgs: ["data", "skipDuplicates"],
  CreateOneMovieListArgs: ["data"],
  DeleteManyMovieListArgs: ["where"],
  DeleteOneMovieListArgs: ["where"],
  FindFirstMovieListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieListOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieListArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieListArgs: ["where"],
  FindUniqueMovieListOrThrowArgs: ["where"],
  GroupByMovieListArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieListArgs: ["data", "where"],
  UpdateOneMovieListArgs: ["data", "where"],
  UpsertOneMovieListArgs: ["where", "create", "update"],
  AggregateMovieListStatsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieListStatsArgs: ["data", "skipDuplicates"],
  CreateOneMovieListStatsArgs: ["data"],
  DeleteManyMovieListStatsArgs: ["where"],
  DeleteOneMovieListStatsArgs: ["where"],
  FindFirstMovieListStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieListStatsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieListStatsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieListStatsArgs: ["where"],
  FindUniqueMovieListStatsOrThrowArgs: ["where"],
  GroupByMovieListStatsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieListStatsArgs: ["data", "where"],
  UpdateOneMovieListStatsArgs: ["data", "where"],
  UpsertOneMovieListStatsArgs: ["where", "create", "update"],
  AggregateMovieListCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieListCommentArgs: ["data", "skipDuplicates"],
  CreateOneMovieListCommentArgs: ["data"],
  DeleteManyMovieListCommentArgs: ["where"],
  DeleteOneMovieListCommentArgs: ["where"],
  FindFirstMovieListCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieListCommentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieListCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieListCommentArgs: ["where"],
  FindUniqueMovieListCommentOrThrowArgs: ["where"],
  GroupByMovieListCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieListCommentArgs: ["data", "where"],
  UpdateOneMovieListCommentArgs: ["data", "where"],
  UpsertOneMovieListCommentArgs: ["where", "create", "update"],
  AggregateMovieRatingArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieRatingArgs: ["data", "skipDuplicates"],
  CreateOneMovieRatingArgs: ["data"],
  DeleteManyMovieRatingArgs: ["where"],
  DeleteOneMovieRatingArgs: ["where"],
  FindFirstMovieRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieRatingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieRatingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieRatingArgs: ["where"],
  FindUniqueMovieRatingOrThrowArgs: ["where"],
  GroupByMovieRatingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieRatingArgs: ["data", "where"],
  UpdateOneMovieRatingArgs: ["data", "where"],
  UpsertOneMovieRatingArgs: ["where", "create", "update"],
  AggregateMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieReviewArgs: ["data", "skipDuplicates"],
  CreateOneMovieReviewArgs: ["data"],
  DeleteManyMovieReviewArgs: ["where"],
  DeleteOneMovieReviewArgs: ["where"],
  FindFirstMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieReviewOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieReviewArgs: ["where"],
  FindUniqueMovieReviewOrThrowArgs: ["where"],
  GroupByMovieReviewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieReviewArgs: ["data", "where"],
  UpdateOneMovieReviewArgs: ["data", "where"],
  UpsertOneMovieReviewArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  MovieStudio: relationResolvers.MovieStudioRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  MovieStats: relationResolvers.MovieStatsRelationsResolver,
  MovieInfo: relationResolvers.MovieInfoRelationsResolver,
  MovieSpokenLanguage: relationResolvers.MovieSpokenLanguageRelationsResolver,
  MovieCrewMemberOnMovie: relationResolvers.MovieCrewMemberOnMovieRelationsResolver,
  MovieCrewMember: relationResolvers.MovieCrewMemberRelationsResolver,
  MovieCrewMemberType: relationResolvers.MovieCrewMemberTypeRelationsResolver,
  Genre: relationResolvers.GenreRelationsResolver,
  MovieKeywordCategory: relationResolvers.MovieKeywordCategoryRelationsResolver,
  MovifierAppUser: relationResolvers.MovifierAppUserRelationsResolver,
  MovieList: relationResolvers.MovieListRelationsResolver,
  MovieListStats: relationResolvers.MovieListStatsRelationsResolver,
  MovieListComment: relationResolvers.MovieListCommentRelationsResolver,
  MovieRating: relationResolvers.MovieRatingRelationsResolver,
  MovieReview: relationResolvers.MovieReviewRelationsResolver
};
const relationResolversInfo = {
  MovieStudio: ["movies"],
  Movie: ["movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieStats: ["movie"],
  MovieInfo: ["movie"],
  MovieSpokenLanguage: ["movies"],
  MovieCrewMemberOnMovie: ["movie", "crewMember", "movieCrewMemberType"],
  MovieCrewMember: ["movies"],
  MovieCrewMemberType: ["movieCrewMembers"],
  Genre: ["movies"],
  MovieKeywordCategory: ["movies"],
  MovifierAppUser: ["watchlist", "rating", "movieLists", "movieListsComments"],
  MovieList: ["movies", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListStats: ["MovieList"],
  MovieListComment: ["movieList", "user"],
  MovieRating: ["Review", "movie", "user"],
  MovieReview: ["rating"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  MovieStudio: ["id", "createdAt", "updatedAt", "name"],
  Movie: ["id", "createdAt", "updatedAt"],
  MovieStats: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieInfo: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId"],
  MovieSpokenLanguage: ["language", "createdAt", "updatedAt"],
  MovieCrewMemberOnMovie: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMember: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberType: ["id", "name"],
  Genre: ["name", "createdAt", "updatedAt"],
  MovieKeywordCategory: ["id", "name"],
  MovifierAppUser: ["id", "createdAt", "updatedAt", "email", "username", "name", "role"],
  MovieList: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListStats: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListComment: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieRating: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieReview: ["id", "createdAt", "updatedAt", "content", "ratingId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMovieStudio: ["_count", "_min", "_max"],
  MovieStudioGroupBy: ["id", "createdAt", "updatedAt", "name", "_count", "_min", "_max"],
  AggregateMovie: ["_count", "_min", "_max"],
  MovieGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateMovieStats: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieStatsGroupBy: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieInfo: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieInfoGroupBy: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieSpokenLanguage: ["_count", "_min", "_max"],
  MovieSpokenLanguageGroupBy: ["language", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateMovieCrewMemberOnMovie: ["_count", "_min", "_max"],
  MovieCrewMemberOnMovieGroupBy: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "_count", "_min", "_max"],
  AggregateMovieCrewMember: ["_count", "_min", "_max"],
  MovieCrewMemberGroupBy: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "_count", "_min", "_max"],
  AggregateMovieCrewMemberType: ["_count", "_min", "_max"],
  MovieCrewMemberTypeGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateGenre: ["_count", "_min", "_max"],
  GenreGroupBy: ["name", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateMovieKeywordCategory: ["_count", "_min", "_max"],
  MovieKeywordCategoryGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateMovifierAppUser: ["_count", "_min", "_max"],
  MovifierAppUserGroupBy: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "_count", "_min", "_max"],
  AggregateMovieList: ["_count", "_min", "_max"],
  MovieListGroupBy: ["id", "createdAt", "updatedAt", "name", "userId", "_count", "_min", "_max"],
  AggregateMovieListStats: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieListStatsGroupBy: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieListComment: ["_count", "_min", "_max"],
  MovieListCommentGroupBy: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId", "_count", "_min", "_max"],
  AggregateMovieRating: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieRatingGroupBy: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieReview: ["_count", "_min", "_max"],
  MovieReviewGroupBy: ["id", "createdAt", "updatedAt", "content", "ratingId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  MovieStudioCount: ["movies"],
  MovieStudioCountAggregate: ["id", "createdAt", "updatedAt", "name", "_all"],
  MovieStudioMinAggregate: ["id", "createdAt", "updatedAt", "name"],
  MovieStudioMaxAggregate: ["id", "createdAt", "updatedAt", "name"],
  MovieCount: ["crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
  MovieMinAggregate: ["id", "createdAt", "updatedAt"],
  MovieMaxAggregate: ["id", "createdAt", "updatedAt"],
  MovieStatsCountAggregate: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId", "_all"],
  MovieStatsAvgAggregate: ["timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieStatsSumAggregate: ["timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieStatsMinAggregate: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieStatsMaxAggregate: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieInfoCountAggregate: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId", "_all"],
  MovieInfoAvgAggregate: ["durationInMinutes"],
  MovieInfoSumAggregate: ["durationInMinutes"],
  MovieInfoMinAggregate: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "durationInMinutes", "posterUrl", "movieId"],
  MovieInfoMaxAggregate: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "durationInMinutes", "posterUrl", "movieId"],
  MovieSpokenLanguageCount: ["movies"],
  MovieSpokenLanguageCountAggregate: ["language", "createdAt", "updatedAt", "_all"],
  MovieSpokenLanguageMinAggregate: ["language", "createdAt", "updatedAt"],
  MovieSpokenLanguageMaxAggregate: ["language", "createdAt", "updatedAt"],
  MovieCrewMemberOnMovieCountAggregate: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "_all"],
  MovieCrewMemberOnMovieMinAggregate: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieMaxAggregate: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberCount: ["movies"],
  MovieCrewMemberCountAggregate: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "_all"],
  MovieCrewMemberMinAggregate: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberMaxAggregate: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberTypeCount: ["movieCrewMembers"],
  MovieCrewMemberTypeCountAggregate: ["id", "name", "_all"],
  MovieCrewMemberTypeMinAggregate: ["id", "name"],
  MovieCrewMemberTypeMaxAggregate: ["id", "name"],
  GenreCount: ["movies"],
  GenreCountAggregate: ["name", "createdAt", "updatedAt", "_all"],
  GenreMinAggregate: ["name", "createdAt", "updatedAt"],
  GenreMaxAggregate: ["name", "createdAt", "updatedAt"],
  MovieKeywordCategoryCount: ["movies"],
  MovieKeywordCategoryCountAggregate: ["id", "name", "_all"],
  MovieKeywordCategoryMinAggregate: ["id", "name"],
  MovieKeywordCategoryMaxAggregate: ["id", "name"],
  MovifierAppUserCount: ["watchlist", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserCountAggregate: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "_all"],
  MovifierAppUserMinAggregate: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovifierAppUserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovieListCount: ["movies", "movieListComments"],
  MovieListCountAggregate: ["id", "createdAt", "updatedAt", "name", "userId", "_all"],
  MovieListMinAggregate: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListMaxAggregate: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListStatsCountAggregate: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId", "_all"],
  MovieListStatsAvgAggregate: ["views", "likes"],
  MovieListStatsSumAggregate: ["views", "likes"],
  MovieListStatsMinAggregate: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListStatsMaxAggregate: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListCommentCountAggregate: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId", "_all"],
  MovieListCommentMinAggregate: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieListCommentMaxAggregate: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieRatingCountAggregate: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId", "_all"],
  MovieRatingAvgAggregate: ["rating"],
  MovieRatingSumAggregate: ["rating"],
  MovieRatingMinAggregate: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieRatingMaxAggregate: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieReviewCountAggregate: ["id", "createdAt", "updatedAt", "content", "ratingId", "_all"],
  MovieReviewMinAggregate: ["id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieReviewMaxAggregate: ["id", "createdAt", "updatedAt", "content", "ratingId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MovieStudioWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "movies"],
  MovieStudioOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "name", "movies", "_relevance"],
  MovieStudioWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "createdAt", "updatedAt", "movies"],
  MovieStudioOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "_count", "_max", "_min"],
  MovieStudioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages", "_relevance"],
  MovieWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "_count", "_max", "_min"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  MovieStatsWhereInput: ["AND", "OR", "NOT", "id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId", "movie"],
  MovieStatsOrderByWithRelationAndSearchRelevanceInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId", "movie", "_relevance"],
  MovieStatsWhereUniqueInput: ["id", "movieId", "AND", "OR", "NOT", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movie"],
  MovieStatsOrderByWithAggregationInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId", "_count", "_avg", "_max", "_min", "_sum"],
  MovieStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieInfoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId", "movie"],
  MovieInfoOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId", "movie", "_relevance"],
  MovieInfoWhereUniqueInput: ["id", "imdbId", "movieId", "AND", "OR", "NOT", "createdAt", "updatedAt", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movie"],
  MovieInfoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId", "_count", "_avg", "_max", "_min", "_sum"],
  MovieInfoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId"],
  MovieSpokenLanguageWhereInput: ["AND", "OR", "NOT", "language", "createdAt", "updatedAt", "movies"],
  MovieSpokenLanguageOrderByWithRelationAndSearchRelevanceInput: ["language", "createdAt", "updatedAt", "movies", "_relevance"],
  MovieSpokenLanguageWhereUniqueInput: ["language", "AND", "OR", "NOT", "createdAt", "updatedAt", "movies"],
  MovieSpokenLanguageOrderByWithAggregationInput: ["language", "createdAt", "updatedAt", "_count", "_max", "_min"],
  MovieSpokenLanguageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "language", "createdAt", "updatedAt"],
  MovieCrewMemberOnMovieWhereInput: ["AND", "OR", "NOT", "createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "movie", "crewMember", "movieCrewMemberType"],
  MovieCrewMemberOnMovieOrderByWithRelationAndSearchRelevanceInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "movie", "crewMember", "movieCrewMemberType", "_relevance"],
  MovieCrewMemberOnMovieWhereUniqueInput: ["movieId_movieCrewMemberId_movieCrewMemberTypeId", "AND", "OR", "NOT", "createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "movie", "crewMember", "movieCrewMemberType"],
  MovieCrewMemberOnMovieOrderByWithAggregationInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId", "_count", "_max", "_min"],
  MovieCrewMemberOnMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "movies"],
  MovieCrewMemberOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "movies", "_relevance"],
  MovieCrewMemberWhereUniqueInput: ["id", "imdbId", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "photoUrl", "description", "movies"],
  MovieCrewMemberOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "_count", "_max", "_min"],
  MovieCrewMemberScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberTypeWhereInput: ["AND", "OR", "NOT", "id", "name", "movieCrewMembers"],
  MovieCrewMemberTypeOrderByWithRelationAndSearchRelevanceInput: ["id", "name", "movieCrewMembers", "_relevance"],
  MovieCrewMemberTypeWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "movieCrewMembers"],
  MovieCrewMemberTypeOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  MovieCrewMemberTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  GenreWhereInput: ["AND", "OR", "NOT", "name", "createdAt", "updatedAt", "movies"],
  GenreOrderByWithRelationAndSearchRelevanceInput: ["name", "createdAt", "updatedAt", "movies", "_relevance"],
  GenreWhereUniqueInput: ["name", "AND", "OR", "NOT", "createdAt", "updatedAt", "movies"],
  GenreOrderByWithAggregationInput: ["name", "createdAt", "updatedAt", "_count", "_max", "_min"],
  GenreScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name", "createdAt", "updatedAt"],
  MovieKeywordCategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "movies"],
  MovieKeywordCategoryOrderByWithRelationAndSearchRelevanceInput: ["id", "name", "movies", "_relevance"],
  MovieKeywordCategoryWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "movies"],
  MovieKeywordCategoryOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  MovieKeywordCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  MovifierAppUserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists", "movieListsComments", "_relevance"],
  MovifierAppUserWhereUniqueInput: ["id", "email", "username", "AND", "OR", "NOT", "createdAt", "updatedAt", "password", "name", "role", "watchlist", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "_count", "_max", "_min"],
  MovifierAppUserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovieListWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "userId", "movies", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "name", "userId", "movies", "movieListAuthor", "MovieListStats", "movieListComments", "_relevance"],
  MovieListWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "name", "userId", "movies", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "userId", "_count", "_max", "_min"],
  MovieListScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "userId"],
  MovieListStatsWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "views", "likes", "movieListId", "MovieList"],
  MovieListStatsOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId", "MovieList", "_relevance"],
  MovieListStatsWhereUniqueInput: ["id", "movieListId", "AND", "OR", "NOT", "createdAt", "updatedAt", "views", "likes", "MovieList"],
  MovieListStatsOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId", "_count", "_avg", "_max", "_min", "_sum"],
  MovieListStatsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListCommentWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "movieListId", "userId", "movieList", "user"],
  MovieListCommentOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId", "movieList", "user", "_relevance"],
  MovieListCommentWhereUniqueInput: ["id", "AND", "OR", "NOT", "createdAt", "updatedAt", "content", "movieListId", "userId", "movieList", "user"],
  MovieListCommentOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId", "_count", "_max", "_min"],
  MovieListCommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieRatingWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "rating", "movieId", "userId", "Review", "movie", "user"],
  MovieRatingOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId", "Review", "movie", "user", "_relevance"],
  MovieRatingWhereUniqueInput: ["id", "movieId", "AND", "OR", "NOT", "createdAt", "updatedAt", "rating", "userId", "Review", "movie", "user"],
  MovieRatingOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  MovieRatingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieReviewWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "ratingId", "rating"],
  MovieReviewOrderByWithRelationAndSearchRelevanceInput: ["id", "createdAt", "updatedAt", "content", "ratingId", "rating", "_relevance"],
  MovieReviewWhereUniqueInput: ["id", "ratingId", "AND", "OR", "NOT", "createdAt", "updatedAt", "content", "rating"],
  MovieReviewOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "content", "ratingId", "_count", "_max", "_min"],
  MovieReviewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieStudioCreateInput: ["id", "createdAt", "updatedAt", "name", "movies"],
  MovieStudioUpdateInput: ["id", "createdAt", "updatedAt", "name", "movies"],
  MovieStudioCreateManyInput: ["id", "createdAt", "updatedAt", "name"],
  MovieStudioUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name"],
  MovieCreateInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieUpdateInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateManyInput: ["id", "createdAt", "updatedAt"],
  MovieUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  MovieStatsCreateInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movie"],
  MovieStatsUpdateInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movie"],
  MovieStatsCreateManyInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieStatsUpdateManyMutationInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieInfoCreateInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movie"],
  MovieInfoUpdateInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movie"],
  MovieInfoCreateManyInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId"],
  MovieInfoUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl"],
  MovieSpokenLanguageCreateInput: ["language", "createdAt", "updatedAt", "movies"],
  MovieSpokenLanguageUpdateInput: ["language", "createdAt", "updatedAt", "movies"],
  MovieSpokenLanguageCreateManyInput: ["language", "createdAt", "updatedAt"],
  MovieSpokenLanguageUpdateManyMutationInput: ["language", "createdAt", "updatedAt"],
  MovieCrewMemberOnMovieCreateInput: ["createdAt", "updatedAt", "movie", "crewMember", "movieCrewMemberType"],
  MovieCrewMemberOnMovieUpdateInput: ["createdAt", "updatedAt", "movie", "crewMember", "movieCrewMemberType"],
  MovieCrewMemberOnMovieCreateManyInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieUpdateManyMutationInput: ["createdAt", "updatedAt"],
  MovieCrewMemberCreateInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "movies"],
  MovieCrewMemberUpdateInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId", "movies"],
  MovieCrewMemberCreateManyInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberTypeCreateInput: ["id", "name", "movieCrewMembers"],
  MovieCrewMemberTypeUpdateInput: ["id", "name", "movieCrewMembers"],
  MovieCrewMemberTypeCreateManyInput: ["id", "name"],
  MovieCrewMemberTypeUpdateManyMutationInput: ["id", "name"],
  GenreCreateInput: ["name", "createdAt", "updatedAt", "movies"],
  GenreUpdateInput: ["name", "createdAt", "updatedAt", "movies"],
  GenreCreateManyInput: ["name", "createdAt", "updatedAt"],
  GenreUpdateManyMutationInput: ["name", "createdAt", "updatedAt"],
  MovieKeywordCategoryCreateInput: ["id", "name", "movies"],
  MovieKeywordCategoryUpdateInput: ["id", "name", "movies"],
  MovieKeywordCategoryCreateManyInput: ["id", "name"],
  MovieKeywordCategoryUpdateManyMutationInput: ["id", "name"],
  MovifierAppUserCreateInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserUpdateInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovifierAppUserUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovieListCreateInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListUpdateInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListCreateManyInput: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name"],
  MovieListStatsCreateInput: ["id", "createdAt", "updatedAt", "views", "likes", "MovieList"],
  MovieListStatsUpdateInput: ["id", "createdAt", "updatedAt", "views", "likes", "MovieList"],
  MovieListStatsCreateManyInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListStatsUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "views", "likes"],
  MovieListCommentCreateInput: ["id", "createdAt", "updatedAt", "content", "movieList", "user"],
  MovieListCommentUpdateInput: ["id", "createdAt", "updatedAt", "content", "movieList", "user"],
  MovieListCommentCreateManyInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieListCommentUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "content"],
  MovieRatingCreateInput: ["id", "createdAt", "updatedAt", "rating", "Review", "movie", "user"],
  MovieRatingUpdateInput: ["id", "createdAt", "updatedAt", "rating", "Review", "movie", "user"],
  MovieRatingCreateManyInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieRatingUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "rating"],
  MovieReviewCreateInput: ["id", "createdAt", "updatedAt", "content", "rating"],
  MovieReviewUpdateInput: ["id", "createdAt", "updatedAt", "content", "rating"],
  MovieReviewCreateManyInput: ["id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieReviewUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "content"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MovieListRelationFilter: ["is", "isNot"],
  MovieOrderByRelationAggregateInput: ["_count"],
  MovieStudioOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieStudioCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  MovieStudioMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  MovieStudioMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  MovieInfoNullableRelationFilter: ["is", "isNot"],
  MovieStatsNullableRelationFilter: ["is", "isNot"],
  MovieCrewMemberOnMovieListRelationFilter: ["every", "some", "none"],
  MovieStudioListRelationFilter: ["every", "some", "none"],
  GenreListRelationFilter: ["every", "some", "none"],
  MovieKeywordCategoryListRelationFilter: ["every", "some", "none"],
  MovieRatingListRelationFilter: ["every", "some", "none"],
  MovieListListRelationFilter: ["every", "some", "none"],
  MovifierAppUserListRelationFilter: ["every", "some", "none"],
  MovieSpokenLanguageListRelationFilter: ["every", "some", "none"],
  MovieCrewMemberOnMovieOrderByRelationAggregateInput: ["_count"],
  MovieStudioOrderByRelationAggregateInput: ["_count"],
  GenreOrderByRelationAggregateInput: ["_count"],
  MovieKeywordCategoryOrderByRelationAggregateInput: ["_count"],
  MovieRatingOrderByRelationAggregateInput: ["_count"],
  MovieListOrderByRelationAggregateInput: ["_count"],
  MovifierAppUserOrderByRelationAggregateInput: ["_count"],
  MovieSpokenLanguageOrderByRelationAggregateInput: ["_count"],
  MovieOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieCountOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  MovieMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  MovieMinOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MovieRelationFilter: ["is", "isNot"],
  MovieStatsOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieStatsCountOrderByAggregateInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieStatsAvgOrderByAggregateInput: ["timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieStatsMaxOrderByAggregateInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieStatsMinOrderByAggregateInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating", "movieId"],
  MovieStatsSumOrderByAggregateInput: ["timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  MovieInfoOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieInfoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl", "movieId"],
  MovieInfoAvgOrderByAggregateInput: ["durationInMinutes"],
  MovieInfoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "durationInMinutes", "posterUrl", "movieId"],
  MovieInfoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "durationInMinutes", "posterUrl", "movieId"],
  MovieInfoSumOrderByAggregateInput: ["durationInMinutes"],
  MovieSpokenLanguageOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieSpokenLanguageCountOrderByAggregateInput: ["language", "createdAt", "updatedAt"],
  MovieSpokenLanguageMaxOrderByAggregateInput: ["language", "createdAt", "updatedAt"],
  MovieSpokenLanguageMinOrderByAggregateInput: ["language", "createdAt", "updatedAt"],
  MovieCrewMemberRelationFilter: ["is", "isNot"],
  MovieCrewMemberTypeRelationFilter: ["is", "isNot"],
  MovieCrewMemberOnMovieOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieCrewMemberOnMovieMovieIdMovieCrewMemberIdMovieCrewMemberTypeIdCompoundUniqueInput: ["movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieCountOrderByAggregateInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieMaxOrderByAggregateInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieMinOrderByAggregateInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieCrewMemberOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieCrewMemberCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberTypeOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieCrewMemberTypeCountOrderByAggregateInput: ["id", "name"],
  MovieCrewMemberTypeMaxOrderByAggregateInput: ["id", "name"],
  MovieCrewMemberTypeMinOrderByAggregateInput: ["id", "name"],
  GenreOrderByRelevanceInput: ["fields", "sort", "search"],
  GenreCountOrderByAggregateInput: ["name", "createdAt", "updatedAt"],
  GenreMaxOrderByAggregateInput: ["name", "createdAt", "updatedAt"],
  GenreMinOrderByAggregateInput: ["name", "createdAt", "updatedAt"],
  MovieKeywordCategoryOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieKeywordCategoryCountOrderByAggregateInput: ["id", "name"],
  MovieKeywordCategoryMaxOrderByAggregateInput: ["id", "name"],
  MovieKeywordCategoryMinOrderByAggregateInput: ["id", "name"],
  EnumMoviefireAppUserRoleFilter: ["equals", "in", "notIn", "not"],
  MovieListCommentListRelationFilter: ["every", "some", "none"],
  MovieListCommentOrderByRelationAggregateInput: ["_count"],
  MovifierAppUserOrderByRelevanceInput: ["fields", "sort", "search"],
  MovifierAppUserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovifierAppUserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovifierAppUserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  EnumMoviefireAppUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  MovifierAppUserRelationFilter: ["is", "isNot"],
  MovieListStatsNullableRelationFilter: ["is", "isNot"],
  MovieListOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieListCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "userId"],
  MovieListStatsOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieListStatsCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListStatsAvgOrderByAggregateInput: ["views", "likes"],
  MovieListStatsMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListStatsMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "views", "likes", "movieListId"],
  MovieListStatsSumOrderByAggregateInput: ["views", "likes"],
  MovieListCommentOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieListCommentCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieListCommentMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieListCommentMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieReviewNullableRelationFilter: ["is", "isNot"],
  MovieRatingOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieRatingCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieRatingAvgOrderByAggregateInput: ["rating"],
  MovieRatingMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieRatingMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieRatingSumOrderByAggregateInput: ["rating"],
  MovieRatingRelationFilter: ["is", "isNot"],
  MovieReviewOrderByRelevanceInput: ["fields", "sort", "search"],
  MovieReviewCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieReviewMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieReviewMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "content", "ratingId"],
  MovieCreateNestedManyWithoutStudiosInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  MovieUpdateManyWithoutStudiosNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieInfoCreateNestedOneWithoutMovieInput: ["create", "connectOrCreate", "connect"],
  MovieStatsCreateNestedOneWithoutMovieInput: ["create", "connectOrCreate", "connect"],
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieStudioCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  GenreCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieKeywordCategoryCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieRatingCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieListCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovifierAppUserCreateNestedManyWithoutWatchlistInput: ["create", "connectOrCreate", "connect"],
  MovieSpokenLanguageCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieInfoUpdateOneWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MovieStatsUpdateOneWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MovieCrewMemberOnMovieUpdateManyWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieStudioUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GenreUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieKeywordCategoryUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieRatingUpdateManyWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieListUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovifierAppUserUpdateManyWithoutWatchlistNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieSpokenLanguageUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedOneWithoutMovieStatsInput: ["create", "connectOrCreate", "connect"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  MovieUpdateOneRequiredWithoutMovieStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieInfoCreatealternativeTitlesInput: ["set"],
  MovieCreateNestedOneWithoutMovieInfoInput: ["create", "connectOrCreate", "connect"],
  MovieInfoUpdatealternativeTitlesInput: ["set", "push"],
  MovieUpdateOneRequiredWithoutMovieInfoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCreateNestedManyWithoutSpokenLanguagesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateManyWithoutSpokenLanguagesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedOneWithoutCrewMembersInput: ["create", "connectOrCreate", "connect"],
  MovieCrewMemberCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieCrewMemberTypeCreateNestedOneWithoutMovieCrewMembersInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateOneRequiredWithoutCrewMembersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCrewMemberUpdateOneRequiredWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCrewMemberTypeUpdateOneRequiredWithoutMovieCrewMembersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCrewMemberOnMovieCreateNestedManyWithoutCrewMemberInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieCrewMemberOnMovieUpdateManyWithoutCrewMemberNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCrewMemberOnMovieCreateNestedManyWithoutMovieCrewMemberTypeInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieCrewMemberOnMovieUpdateManyWithoutMovieCrewMemberTypeNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedManyWithoutGenresInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateManyWithoutGenresNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedManyWithoutKeywordCategoriesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateManyWithoutKeywordCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedManyWithoutInWatchlistByUsersInput: ["create", "connectOrCreate", "connect"],
  MovieRatingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieListCreateNestedManyWithoutMovieListAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieListCommentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumMoviefireAppUserRoleFieldUpdateOperationsInput: ["set"],
  MovieUpdateManyWithoutInWatchlistByUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieRatingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieListUpdateManyWithoutMovieListAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieListCommentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedManyWithoutMovieListsInput: ["create", "connectOrCreate", "connect"],
  MovifierAppUserCreateNestedOneWithoutMovieListsInput: ["create", "connectOrCreate", "connect"],
  MovieListStatsCreateNestedOneWithoutMovieListInput: ["create", "connectOrCreate", "connect"],
  MovieListCommentCreateNestedManyWithoutMovieListInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieUpdateManyWithoutMovieListsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovifierAppUserUpdateOneRequiredWithoutMovieListsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieListStatsUpdateOneWithoutMovieListNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MovieListCommentUpdateManyWithoutMovieListNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieListCreateNestedOneWithoutMovieListStatsInput: ["create", "connectOrCreate", "connect"],
  MovieListUpdateOneRequiredWithoutMovieListStatsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieListCreateNestedOneWithoutMovieListCommentsInput: ["create", "connectOrCreate", "connect"],
  MovifierAppUserCreateNestedOneWithoutMovieListsCommentsInput: ["create", "connectOrCreate", "connect"],
  MovieListUpdateOneRequiredWithoutMovieListCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovifierAppUserUpdateOneRequiredWithoutMovieListsCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieReviewCreateNestedOneWithoutRatingInput: ["create", "connectOrCreate", "connect"],
  MovieCreateNestedOneWithoutRatingsInput: ["create", "connectOrCreate", "connect"],
  MovifierAppUserCreateNestedOneWithoutRatingInput: ["create", "connectOrCreate", "connect"],
  MovieReviewUpdateOneWithoutRatingNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MovieUpdateOneRequiredWithoutRatingsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovifierAppUserUpdateOneRequiredWithoutRatingNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieRatingCreateNestedOneWithoutReviewInput: ["create", "connectOrCreate", "connect"],
  MovieRatingUpdateOneRequiredWithoutReviewNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "search", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumMoviefireAppUserRoleFilter: ["equals", "in", "notIn", "not"],
  NestedEnumMoviefireAppUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  MovieCreateWithoutStudiosInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutStudiosInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutStudiosInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutStudiosInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutStudiosInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
  MovieInfoCreateWithoutMovieInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl"],
  MovieInfoCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieStatsCreateWithoutMovieInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieStatsCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieCrewMemberOnMovieCreateWithoutMovieInput: ["createdAt", "updatedAt", "crewMember", "movieCrewMemberType"],
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieCrewMemberOnMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  MovieStudioCreateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name"],
  MovieStudioCreateOrConnectWithoutMoviesInput: ["where", "create"],
  GenreCreateWithoutMoviesInput: ["name", "createdAt", "updatedAt"],
  GenreCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieKeywordCategoryCreateWithoutMoviesInput: ["id", "name"],
  MovieKeywordCategoryCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieRatingCreateWithoutMovieInput: ["id", "createdAt", "updatedAt", "rating", "Review", "user"],
  MovieRatingCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieRatingCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  MovieListCreateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovieListCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovifierAppUserCreateWithoutWatchlistInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "rating", "movieLists", "movieListsComments"],
  MovifierAppUserCreateOrConnectWithoutWatchlistInput: ["where", "create"],
  MovieSpokenLanguageCreateWithoutMoviesInput: ["language", "createdAt", "updatedAt"],
  MovieSpokenLanguageCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieInfoUpsertWithoutMovieInput: ["update", "create", "where"],
  MovieInfoUpdateToOneWithWhereWithoutMovieInput: ["where", "data"],
  MovieInfoUpdateWithoutMovieInput: ["id", "createdAt", "updatedAt", "imdbId", "title", "description", "alternativeTitles", "durationInMinutes", "posterUrl"],
  MovieStatsUpsertWithoutMovieInput: ["update", "create", "where"],
  MovieStatsUpdateToOneWithWhereWithoutMovieInput: ["where", "data"],
  MovieStatsUpdateWithoutMovieInput: ["id", "timesWatchedCount", "totalRatingsCount", "totalLikesCount", "overallPlaceINTop", "avgRating"],
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  MovieCrewMemberOnMovieScalarWhereInput: ["AND", "OR", "NOT", "createdAt", "updatedAt", "movieId", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieStudioUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  MovieStudioUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  MovieStudioUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  MovieStudioScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name"],
  GenreUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  GenreUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  GenreUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  GenreScalarWhereInput: ["AND", "OR", "NOT", "name", "createdAt", "updatedAt"],
  MovieKeywordCategoryUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  MovieKeywordCategoryUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  MovieKeywordCategoryUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  MovieKeywordCategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  MovieRatingUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  MovieRatingUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  MovieRatingUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  MovieRatingScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "rating", "movieId", "userId"],
  MovieListUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  MovieListUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  MovieListUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  MovieListScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "userId"],
  MovifierAppUserUpsertWithWhereUniqueWithoutWatchlistInput: ["where", "update", "create"],
  MovifierAppUserUpdateWithWhereUniqueWithoutWatchlistInput: ["where", "data"],
  MovifierAppUserUpdateManyWithWhereWithoutWatchlistInput: ["where", "data"],
  MovifierAppUserScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "username", "password", "name", "role"],
  MovieSpokenLanguageUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  MovieSpokenLanguageUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  MovieSpokenLanguageUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  MovieSpokenLanguageScalarWhereInput: ["AND", "OR", "NOT", "language", "createdAt", "updatedAt"],
  MovieCreateWithoutMovieStatsInput: ["id", "createdAt", "updatedAt", "movieInfo", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutMovieStatsInput: ["where", "create"],
  MovieUpsertWithoutMovieStatsInput: ["update", "create", "where"],
  MovieUpdateToOneWithWhereWithoutMovieStatsInput: ["where", "data"],
  MovieUpdateWithoutMovieStatsInput: ["id", "createdAt", "updatedAt", "movieInfo", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateWithoutMovieInfoInput: ["id", "createdAt", "updatedAt", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutMovieInfoInput: ["where", "create"],
  MovieUpsertWithoutMovieInfoInput: ["update", "create", "where"],
  MovieUpdateToOneWithWhereWithoutMovieInfoInput: ["where", "data"],
  MovieUpdateWithoutMovieInfoInput: ["id", "createdAt", "updatedAt", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateWithoutSpokenLanguagesInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers"],
  MovieCreateOrConnectWithoutSpokenLanguagesInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutSpokenLanguagesInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutSpokenLanguagesInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutSpokenLanguagesInput: ["where", "data"],
  MovieCreateWithoutCrewMembersInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutCrewMembersInput: ["where", "create"],
  MovieCrewMemberCreateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieCrewMemberTypeCreateWithoutMovieCrewMembersInput: ["id", "name"],
  MovieCrewMemberTypeCreateOrConnectWithoutMovieCrewMembersInput: ["where", "create"],
  MovieUpsertWithoutCrewMembersInput: ["update", "create", "where"],
  MovieUpdateToOneWithWhereWithoutCrewMembersInput: ["where", "data"],
  MovieUpdateWithoutCrewMembersInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCrewMemberUpsertWithoutMoviesInput: ["update", "create", "where"],
  MovieCrewMemberUpdateToOneWithWhereWithoutMoviesInput: ["where", "data"],
  MovieCrewMemberUpdateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name", "photoUrl", "description", "imdbId"],
  MovieCrewMemberTypeUpsertWithoutMovieCrewMembersInput: ["update", "create", "where"],
  MovieCrewMemberTypeUpdateToOneWithWhereWithoutMovieCrewMembersInput: ["where", "data"],
  MovieCrewMemberTypeUpdateWithoutMovieCrewMembersInput: ["id", "name"],
  MovieCrewMemberOnMovieCreateWithoutCrewMemberInput: ["createdAt", "updatedAt", "movie", "movieCrewMemberType"],
  MovieCrewMemberOnMovieCreateOrConnectWithoutCrewMemberInput: ["where", "create"],
  MovieCrewMemberOnMovieCreateManyCrewMemberInputEnvelope: ["data", "skipDuplicates"],
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutCrewMemberInput: ["where", "update", "create"],
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutCrewMemberInput: ["where", "data"],
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutCrewMemberInput: ["where", "data"],
  MovieCrewMemberOnMovieCreateWithoutMovieCrewMemberTypeInput: ["createdAt", "updatedAt", "movie", "crewMember"],
  MovieCrewMemberOnMovieCreateOrConnectWithoutMovieCrewMemberTypeInput: ["where", "create"],
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInputEnvelope: ["data", "skipDuplicates"],
  MovieCrewMemberOnMovieUpsertWithWhereUniqueWithoutMovieCrewMemberTypeInput: ["where", "update", "create"],
  MovieCrewMemberOnMovieUpdateWithWhereUniqueWithoutMovieCrewMemberTypeInput: ["where", "data"],
  MovieCrewMemberOnMovieUpdateManyWithWhereWithoutMovieCrewMemberTypeInput: ["where", "data"],
  MovieCreateWithoutGenresInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutGenresInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutGenresInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutGenresInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutGenresInput: ["where", "data"],
  MovieCreateWithoutKeywordCategoriesInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutKeywordCategoriesInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutKeywordCategoriesInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutKeywordCategoriesInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutKeywordCategoriesInput: ["where", "data"],
  MovieCreateWithoutInWatchlistByUsersInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "spokenLanguages"],
  MovieCreateOrConnectWithoutInWatchlistByUsersInput: ["where", "create"],
  MovieRatingCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "rating", "Review", "movie"],
  MovieRatingCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieRatingCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MovieListCreateWithoutMovieListAuthorInput: ["id", "createdAt", "updatedAt", "name", "movies", "MovieListStats", "movieListComments"],
  MovieListCreateOrConnectWithoutMovieListAuthorInput: ["where", "create"],
  MovieListCreateManyMovieListAuthorInputEnvelope: ["data", "skipDuplicates"],
  MovieListCommentCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "content", "movieList"],
  MovieListCommentCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieListCommentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MovieUpsertWithWhereUniqueWithoutInWatchlistByUsersInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutInWatchlistByUsersInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutInWatchlistByUsersInput: ["where", "data"],
  MovieRatingUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieRatingUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieRatingUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieListUpsertWithWhereUniqueWithoutMovieListAuthorInput: ["where", "update", "create"],
  MovieListUpdateWithWhereUniqueWithoutMovieListAuthorInput: ["where", "data"],
  MovieListUpdateManyWithWhereWithoutMovieListAuthorInput: ["where", "data"],
  MovieListCommentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieListCommentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieListCommentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieListCommentScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "content", "movieListId", "userId"],
  MovieCreateWithoutMovieListsInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutMovieListsInput: ["where", "create"],
  MovifierAppUserCreateWithoutMovieListsInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieListsComments"],
  MovifierAppUserCreateOrConnectWithoutMovieListsInput: ["where", "create"],
  MovieListStatsCreateWithoutMovieListInput: ["id", "createdAt", "updatedAt", "views", "likes"],
  MovieListStatsCreateOrConnectWithoutMovieListInput: ["where", "create"],
  MovieListCommentCreateWithoutMovieListInput: ["id", "createdAt", "updatedAt", "content", "user"],
  MovieListCommentCreateOrConnectWithoutMovieListInput: ["where", "create"],
  MovieListCommentCreateManyMovieListInputEnvelope: ["data", "skipDuplicates"],
  MovieUpsertWithWhereUniqueWithoutMovieListsInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutMovieListsInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutMovieListsInput: ["where", "data"],
  MovifierAppUserUpsertWithoutMovieListsInput: ["update", "create", "where"],
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsInput: ["where", "data"],
  MovifierAppUserUpdateWithoutMovieListsInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieListsComments"],
  MovieListStatsUpsertWithoutMovieListInput: ["update", "create", "where"],
  MovieListStatsUpdateToOneWithWhereWithoutMovieListInput: ["where", "data"],
  MovieListStatsUpdateWithoutMovieListInput: ["id", "createdAt", "updatedAt", "views", "likes"],
  MovieListCommentUpsertWithWhereUniqueWithoutMovieListInput: ["where", "update", "create"],
  MovieListCommentUpdateWithWhereUniqueWithoutMovieListInput: ["where", "data"],
  MovieListCommentUpdateManyWithWhereWithoutMovieListInput: ["where", "data"],
  MovieListCreateWithoutMovieListStatsInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "movieListComments"],
  MovieListCreateOrConnectWithoutMovieListStatsInput: ["where", "create"],
  MovieListUpsertWithoutMovieListStatsInput: ["update", "create", "where"],
  MovieListUpdateToOneWithWhereWithoutMovieListStatsInput: ["where", "data"],
  MovieListUpdateWithoutMovieListStatsInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "movieListComments"],
  MovieListCreateWithoutMovieListCommentsInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "MovieListStats"],
  MovieListCreateOrConnectWithoutMovieListCommentsInput: ["where", "create"],
  MovifierAppUserCreateWithoutMovieListsCommentsInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists"],
  MovifierAppUserCreateOrConnectWithoutMovieListsCommentsInput: ["where", "create"],
  MovieListUpsertWithoutMovieListCommentsInput: ["update", "create", "where"],
  MovieListUpdateToOneWithWhereWithoutMovieListCommentsInput: ["where", "data"],
  MovieListUpdateWithoutMovieListCommentsInput: ["id", "createdAt", "updatedAt", "name", "movies", "movieListAuthor", "MovieListStats"],
  MovifierAppUserUpsertWithoutMovieListsCommentsInput: ["update", "create", "where"],
  MovifierAppUserUpdateToOneWithWhereWithoutMovieListsCommentsInput: ["where", "data"],
  MovifierAppUserUpdateWithoutMovieListsCommentsInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "rating", "movieLists"],
  MovieReviewCreateWithoutRatingInput: ["id", "createdAt", "updatedAt", "content"],
  MovieReviewCreateOrConnectWithoutRatingInput: ["where", "create"],
  MovieCreateWithoutRatingsInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCreateOrConnectWithoutRatingsInput: ["where", "create"],
  MovifierAppUserCreateWithoutRatingInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "movieLists", "movieListsComments"],
  MovifierAppUserCreateOrConnectWithoutRatingInput: ["where", "create"],
  MovieReviewUpsertWithoutRatingInput: ["update", "create", "where"],
  MovieReviewUpdateToOneWithWhereWithoutRatingInput: ["where", "data"],
  MovieReviewUpdateWithoutRatingInput: ["id", "createdAt", "updatedAt", "content"],
  MovieUpsertWithoutRatingsInput: ["update", "create", "where"],
  MovieUpdateToOneWithWhereWithoutRatingsInput: ["where", "data"],
  MovieUpdateWithoutRatingsInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovifierAppUserUpsertWithoutRatingInput: ["update", "create", "where"],
  MovifierAppUserUpdateToOneWithWhereWithoutRatingInput: ["where", "data"],
  MovifierAppUserUpdateWithoutRatingInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "watchlist", "movieLists", "movieListsComments"],
  MovieRatingCreateWithoutReviewInput: ["id", "createdAt", "updatedAt", "rating", "movie", "user"],
  MovieRatingCreateOrConnectWithoutReviewInput: ["where", "create"],
  MovieRatingUpsertWithoutReviewInput: ["update", "create", "where"],
  MovieRatingUpdateToOneWithWhereWithoutReviewInput: ["where", "data"],
  MovieRatingUpdateWithoutReviewInput: ["id", "createdAt", "updatedAt", "rating", "movie", "user"],
  MovieUpdateWithoutStudiosInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieCrewMemberOnMovieCreateManyMovieInput: ["createdAt", "updatedAt", "movieCrewMemberId", "movieCrewMemberTypeId"],
  MovieRatingCreateManyMovieInput: ["id", "createdAt", "updatedAt", "rating", "userId"],
  MovieCrewMemberOnMovieUpdateWithoutMovieInput: ["createdAt", "updatedAt", "crewMember", "movieCrewMemberType"],
  MovieStudioUpdateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name"],
  GenreUpdateWithoutMoviesInput: ["name", "createdAt", "updatedAt"],
  MovieKeywordCategoryUpdateWithoutMoviesInput: ["id", "name"],
  MovieRatingUpdateWithoutMovieInput: ["id", "createdAt", "updatedAt", "rating", "Review", "user"],
  MovieListUpdateWithoutMoviesInput: ["id", "createdAt", "updatedAt", "name", "movieListAuthor", "MovieListStats", "movieListComments"],
  MovifierAppUserUpdateWithoutWatchlistInput: ["id", "createdAt", "updatedAt", "email", "username", "password", "name", "role", "rating", "movieLists", "movieListsComments"],
  MovieSpokenLanguageUpdateWithoutMoviesInput: ["language", "createdAt", "updatedAt"],
  MovieUpdateWithoutSpokenLanguagesInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers"],
  MovieCrewMemberOnMovieCreateManyCrewMemberInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberTypeId"],
  MovieCrewMemberOnMovieUpdateWithoutCrewMemberInput: ["createdAt", "updatedAt", "movie", "movieCrewMemberType"],
  MovieCrewMemberOnMovieCreateManyMovieCrewMemberTypeInput: ["createdAt", "updatedAt", "movieId", "movieCrewMemberId"],
  MovieCrewMemberOnMovieUpdateWithoutMovieCrewMemberTypeInput: ["createdAt", "updatedAt", "movie", "crewMember"],
  MovieUpdateWithoutGenresInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "keywordCategories", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieUpdateWithoutKeywordCategoriesInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "ratings", "movieLists", "inWatchlistByUsers", "spokenLanguages"],
  MovieRatingCreateManyUserInput: ["id", "createdAt", "updatedAt", "rating", "movieId"],
  MovieListCreateManyMovieListAuthorInput: ["id", "createdAt", "updatedAt", "name"],
  MovieListCommentCreateManyUserInput: ["id", "createdAt", "updatedAt", "content", "movieListId"],
  MovieUpdateWithoutInWatchlistByUsersInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "movieLists", "spokenLanguages"],
  MovieRatingUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "rating", "Review", "movie"],
  MovieListUpdateWithoutMovieListAuthorInput: ["id", "createdAt", "updatedAt", "name", "movies", "MovieListStats", "movieListComments"],
  MovieListCommentUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "content", "movieList"],
  MovieListCommentCreateManyMovieListInput: ["id", "createdAt", "updatedAt", "content", "userId"],
  MovieUpdateWithoutMovieListsInput: ["id", "createdAt", "updatedAt", "movieInfo", "movieStats", "crewMembers", "studios", "genres", "keywordCategories", "ratings", "inWatchlistByUsers", "spokenLanguages"],
  MovieListCommentUpdateWithoutMovieListInput: ["id", "createdAt", "updatedAt", "content", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

