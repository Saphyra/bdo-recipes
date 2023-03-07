import React from "react";
import { Link } from "react-router-dom";

const Ingredients = ({ currentItemId, ingredients, items }) => {
    const getIngredients = () => {
        const ingredientList = ingredients.sort((a, b) => items[a.id].name.localeCompare(items[b.id].name))
            .map(ingredient => <Ingredient key={ingredient.id} ingredient={ingredient} items={items} />);

        return (
            <ul className="ingredients-list">
                {ingredientList}
            </ul>
        );
    }

    return (
        <div className="item-ingredients">
            <span className="subtitle">Ingredients:</span>
            {getIngredients()}
        </div>
    );
}

export default Ingredients;

const Ingredient = ({ ingredient, items }) => {
    return (
        <li>
            <Link className="ingredient-link" to={"/item/" + ingredient.id} >{ingredient.amount} x {items[ingredient.id].name}</Link>
        </li>
    );
}