import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class GqltestResolver {
  @Query(() => String)
  async testGraphQLResolver() {
    return 'GraphQL works!';
  }
}