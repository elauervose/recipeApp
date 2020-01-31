import React from "react"

import Recipe from "./Recipe"

function RecipeList (props) {
  const listItems = props.recipes.map((recipe) =>
    <Recipe key={recipe.id}
            {...recipe}
            />
  )

  return (
    <ul>{listItems}</ul>
  )
}

export default RecipeList
