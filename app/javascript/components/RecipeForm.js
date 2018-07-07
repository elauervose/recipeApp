import React from "react"

function RecipeForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Title:
        <input name="title" type="text" value={props.title} onChange={props.handleChange} />
      </label>
      <label>
        Subtitle:
        <input name="subtitle" type="text" value={props.subtitle} onChange={props.handleChange} />
      </label>
      <label>
        Tags (comma separated):
        <input name="tags" type="text" value={props.tags} onChange={props.handleChange} />
      </label>
      <label>
        Description:
        <input name="description" type="text" value={props.description} onChange={props.handleChange} />
      </label>
      <label>
        Directions:
      </label>
      <label>
        Ingredients:
      </label>
      <label>
        Source:
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default RecipeForm
