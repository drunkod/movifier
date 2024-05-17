import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieKeywordCategoryOrderByWithRelationInput } from "../../../inputs/MovieKeywordCategoryOrderByWithRelationInput";
import { MovieKeywordCategoryWhereInput } from "../../../inputs/MovieKeywordCategoryWhereInput";
import { MovieKeywordCategoryWhereUniqueInput } from "../../../inputs/MovieKeywordCategoryWhereUniqueInput";
import { MovieKeywordCategoryScalarFieldEnum } from "../../../../enums/MovieKeywordCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMovieKeywordCategoryArgs {
  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereInput, {
    nullable: true,
  })
  where?: MovieKeywordCategoryWhereInput | undefined;

  @TypeGraphQL.Field(
    (_type) => [MovieKeywordCategoryOrderByWithRelationInput],
    {
      nullable: true,
    },
  )
  orderBy?: MovieKeywordCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MovieKeywordCategoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MovieKeywordCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MovieKeywordCategoryScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "name"> | undefined;
}
