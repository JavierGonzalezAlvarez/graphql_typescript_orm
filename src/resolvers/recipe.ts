import {
    Resolver,
    Mutation,
    Arg,
    Int,
    Query,
    InputType,
    Field
} from "type-graphql";

import { Recipe } from "../entity/DTOrecipe";

//Definition of the object
@InputType()
class RecipeInput {
    @Field()
    name!: string;

    @Field()
    quantity: number;
}

@InputType()
class RecipeUpdateInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => Int, { nullable: true })
    quantity?: number;
}

@Resolver()
export class RecipeResolver {

    //post - create
    @Mutation(() => Recipe)
    async createRecipe(
        //@Arg("name") name: string,
        //@Arg("quantity", () => Int) quantity: number
        //object with variables
        @Arg("variables", () => RecipeInput) variables: RecipeInput
    ) {
        //await Recipe.insert({ name, quantity })
        const newRecipe = Recipe.create(variables);
        console.log(newRecipe);
        return await newRecipe.save();
    }

    //delete - delete
    @Mutation(() => Boolean)
    async deleteRecipe(@Arg("id", () => Int) id: number) {
        await Recipe.delete(id);
        return true;
    }

    //put - update
    @Mutation(() => Boolean)
    async updateRecipe(
        @Arg("id", () => Int) id: number,
        @Arg("fields", () => RecipeUpdateInput) fields: RecipeUpdateInput
    ) {
        await Recipe.update({ id }, fields);
        return true;
    }

    @Query(() => [Recipe])
    recipes() {
        return Recipe.find();
    }

}
