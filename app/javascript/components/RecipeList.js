import React from "react"
import PropTypes from "prop-types"
import Recipe from "./Recipe"

class RecipeList extends React.Component {
  render () {
    const listItems = this.props.recipes.map((recipe) =>
      <Recipe key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              subtitle={recipe.subtitle}
              description={recipe.description}
              url={recipe.url}
              image={recipe.image}
              added={recipe.added}
              updated={recipe.updated}
              directions={recipe.directions}
              ingredients={recipe.ingredients}
              tags={recipe.tags}
              sourceName={recipe.source.name}
              sourceUrl={recipe.source.url}
              />
    )

    return (
      <ul>{listItems}</ul>
    );
  }
}

export default RecipeList
