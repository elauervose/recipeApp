import React from "react"
import PropTypes from "prop-types"

import RecipeForm from "./RecipeForm"
import RecipeDisplay from "./RecipeDisplay"

class Recipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      ...props
    }

    this.handleStartEdit = this.handleStartEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleStartEdit(event) {
    event.preventDefault()

    this.setState({isEditing: true})
  }

  handleSubmit(event) {
    event.preventDefault()

    this.setState({
      isEditing: false
    })
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.type === 'checkbox'
        ? target.checked
        : target.value
    });
  }

  render () {
    return (
      this.state.isEditing === true
      ? <RecipeForm {...this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      : <RecipeDisplay {...this.state} handleStartEdit={this.handleStartEdit} />
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
}
Recipe.defaultProps = {
  id: PropTypes.number.isRequired,
  url: '',
  title: '',
  subtitle: '',
  description: '',
  image: '',
  added: '',
  updated: '',
  directions: [],
  ingredients: [],
  tags: [],
  sourceName: '',
  sourceUrl: ''
}
export default Recipe
