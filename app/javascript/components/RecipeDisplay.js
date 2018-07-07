import React from "react"

import DirectionList from "./DirectionList"
import IngredientList from "./IngredientList"
import TagList from "./TagList"

function RecipeDisplay (props) {
  return (
    <article>
      <a onClick={props.handleStartEdit}>Edit</a>
      Image: {props.image}<br />
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <div className="byline">
        <div className="tags">Tags: <TagList tags={props.tags} /></div>
        <div className="dates">
          <span className="updatedOn">Updated: {props.updated}</span> |
          <span className="addedOn">Added: {props.added}</span>
        </div>
      </div>
      Description: {props.description}<br />
      Directions: <DirectionList steps={props.directions} /><br />
      Ingredients: <IngredientList ingredients={props.ingredients} /><br />
      Source: {props.sourceName} - {props.sourceUrl}
    </article>
  )
}

export default RecipeDisplay
