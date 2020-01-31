import React from "react"

function RecipeForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" name="title" onChange={props.handleChange} value={props.title} aria-describedby="title" placeholder="Tasty Main Course" />
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Subtitle</label>
        <input type="text" className="form-control" id="subtitle" name="subtitle" onChange={props.handleChange} value={props.subtitle} aria-describedby="subtitle" placeholder="with Side of Flavor Encrusted Nutrients" />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags (comma separated)</label>
        <input type="text" className="form-control" id="tags" name="tags" onChange={props.handleChange} value={props.tags} aria-describedby="tags" placeholder="Summer, Fruity" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" rows="3" id="description" name="description" onChange={props.handleChange} value={props.description} aria-describedby="description" placeholder="This ancient recipe was invented by accident on the eve of Michelmas of 1237 in a small town..." />
      </div>
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
