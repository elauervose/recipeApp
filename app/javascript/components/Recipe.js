import React from "react"
import PropTypes from "prop-types"
import DirectionList from "./DirectionList"
import IngredientList from "./IngredientList"
import TagList from "./TagList"

class Recipe extends React.Component {
  render () {
    return (
      <article>
        Image: {this.props.image}<br />
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <div className="byline">
          <div className="tags">Tags: <TagList tags={this.props.tags} /></div>
          <div className="dates">
            <span className="updatedOn">Updated: {this.props.updated}</span> |
            <span className="addedOn">Added: {this.props.added}</span>
          </div>
        </div>
        Description: {this.props.description}<br />
        Directions: <DirectionList steps={this.props.directions} /><br />
        Ingredients: <IngredientList ingredients={this.props.ingredients} /><br />
        Source: {this.props.sourceName} - {this.props.sourceUrl}
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
