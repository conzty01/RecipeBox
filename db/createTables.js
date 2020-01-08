const pg = require('pg');

function main() {

}

function createTable_User {
"Table containing users that are able to acces the site"
// id
// username
// password_hash
// password_salt
}
function createTable_Ingredient {
"Table containing ingredients used in the entered recipes"
// id
// ingredient_name
}
function createTable_IngredientType {
"Table containing the ingredient types (spice, protien, vegetable, etc.)"
// id
// name
}
function createTable_IngredientTypes {
"Table linking the ingredient type to the ingredients"
// id
// ingredient_id
// type_id
}
function createTable_IngredientMeasurement {
"Table containing the measurements for the associated ingredients and the associated recipes"
// id
// ingredient_id
// recipe_id
// step_id
}
function createTable_Recipe {
"Table containing recipe entries"
// id
// recipe_name
// origin
// date_entered
// description
// image
// cook_time
// prep_time
}
function createTable_MealType {
"Table containing the type of meal (breakfast, lunch, dinner, desert, appetizer, side, etc.)"
// id
// name
}
function createTable_RecipeType {
"Table linking recipes to meal types"
// id
// mealtype_id
// recipe_id
}
function createTable_Tag {
"Table containing tags"
// id
// tag_name
}
function createTable_RecipeTag {
"Table for linking the recipe tags with their respective recipes"
// id
// recipe_id
// tag_id
}
function createTable_Step {
"Table containing information on each step of cooking"
// id
// step_number
// recipe_id
// step_text
// step_time
}
function createTable_MealSchedule {
"Table containing the meal schedule for the given week"
// id
// start_day
// date_created
}
function createTable_RecipeSchedule {
"Table relating the recipes to the weekly meal schedules"
// id
// recipe_id
// mealSchedule_id
// date_created
}
main();
