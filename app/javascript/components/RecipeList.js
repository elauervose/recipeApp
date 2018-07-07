import React from "react"
import PropTypes from "prop-types"
import Recipe from "./Recipe"

class RecipeList extends React.Component {
  render () {
    const listItems = this.props.recipes.map((recipe) =>
      <Recipe key={recipe.id}
              {...recipe}
              />
    )

    return (
      <ul>{listItems}</ul>
    );
  }
}

export default RecipeList
