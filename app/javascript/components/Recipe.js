import React from "react"
import PropTypes from "prop-types"
import DirectionList from "./DirectionList"
import IngredientList from "./IngredientList"
import TagList from "./TagList"
import RecipeForm from "./RecipeForm"

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      recipe: {...props}
    }

    this.handleStartEdit = this.handleStartEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleStartEdit(event) {
    event.preventDefault()

    this.setState({isEditing: true})
  }

  handleSubmit(newState) {
    this.setState({
      isEditing: false,
      recipe: {...newState}
    })
  }

  render () {
    return (
      this.state.isEditing === true
      ? <RecipeForm initialState={this.state.recipe} handleSubmit={this.handleSubmit} />
      : <article>
          <a onClick={this.handleStartEdit}>Edit</a>
          Image: {this.state.recipe.image}<br />
          <h1>{this.state.recipe.title}</h1>
          <h2>{this.state.recipe.subtitle}</h2>
          <div className="byline">
            <div className="tags">Tags: <TagList tags={this.state.recipe.tags} /></div>
            <div className="dates">
              <span className="updatedOn">Updated: {this.state.recipe.updated}</span> |
              <span className="addedOn">Added: {this.state.recipe.added}</span>
            </div>
          </div>
          Description: {this.state.recipe.description}<br />
          Directions: <DirectionList steps={this.state.recipe.directions} /><br />
          Ingredients: <IngredientList ingredients={this.state.recipe.ingredients} /><br />
          Source: {this.state.recipe.sourceName} - {this.state.recipe.sourceUrl}
        </article>
    );
  }
}

Recipe.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  added: PropTypes.string,
  updated: PropTypes.string,
  directions: PropTypes.array,
  ingredients: PropTypes.array,
  tags: PropTypes.array,
  sourceName: PropTypes.string,
  sourceUrl: PropTypes.string
};
export default Recipe
