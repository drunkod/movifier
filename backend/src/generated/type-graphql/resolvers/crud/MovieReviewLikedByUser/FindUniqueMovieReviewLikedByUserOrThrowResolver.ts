import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieReviewLikedByUserOrThrowArgs } from "./args/FindUniqueMovieReviewLikedByUserOrThrowArgs";
import { MovieReviewLikedByUser } from "../../../models/MovieReviewLikedByUser";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLikedByUser)
export class FindUniqueMovieReviewLikedByUserOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieReviewLikedByUser, {
    nullable: true
  })
  async getMovieReviewLikedByUser(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieReviewLikedByUserOrThrowArgs): Promise<MovieReviewLikedByUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLikedByUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
