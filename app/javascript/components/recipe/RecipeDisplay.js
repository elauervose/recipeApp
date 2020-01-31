import React from "react"

import DirectionList from "./DirectionList"
import IngredientList from "./IngredientList"
import TagList from "./TagList"

function RecipeDisplay (props) {
  return (
    <article className="container">
      <div className="row">
        <div className="col">
          <a onClick={props.handleStartEdit}>Edit</a>
          Image: {props.image}<br />
          <h2 className="display-2">{props.title}</h2>
          <p className="lead">{props.subtitle}</p>
          <div className="byline small">
            {props.tags.length > 0 &&
              <span className="tags">Tags: <TagList tags={props.tags} /></span>
            }
            {props.updated &&
              <span className="updatedOn">Updated: {props.updated}</span>
            }
            {props.added &&
              <span className="addedOn">Added: {props.added}</span>
            }
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <IngredientList ingredients={props.ingredients} />
        </div>
        <div className="col">
          <h3>Description</h3>
          <p>{props.description}</p>
          <h3>Directions</h3>
          <DirectionList steps={props.directions} />
        </div>
      </div>
      <div className="row">
        Source: {props.sourceName} - {props.sourceUrl}
      </div>
    </article>
  )
}

export default RecipeDisplay
