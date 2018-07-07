import React from "react"
import PropTypes from "prop-types"

class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    const emptyState = {
      title: '',
      subtitle: '',
      tags: '',
    }
    this.state = {...emptyState, ...props.initialState} // Merge with "spread" operator

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Subtitle:
          <input name="subtitle" type="text" value={this.state.subtitle} onChange={this.handleChange} />
        </label>
        <label>
          Tags (comma separated):
          <input name="tags" type="text" value={this.state.tags} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default RecipeForm
