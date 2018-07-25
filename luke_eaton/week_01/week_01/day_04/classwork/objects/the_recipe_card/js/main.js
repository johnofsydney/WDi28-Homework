/*Exercises: Objects
The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa*/

console.log("connected");

const recipe = {
  Name : "Mole",
  Servings : 2,
  Ingredients : ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.Name);
console.log('Servings: ', recipe.Servings);
console.log(recipe.Ingredients);
for (let i = 0; i < recipe.Ingredients.length; i++) {
    console.log(recipe.Ingredients[i]);
  }
