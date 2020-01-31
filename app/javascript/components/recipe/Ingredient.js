import React from "react"
import PropTypes from "prop-types"

class Ingredient extends React.Component {
  render () {
    return (
      <li>
        {this.props.amount} {this.props.unit} – {this.props.name}
      </li>
    );
  }
}

Ingredient.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  unit: PropTypes.string
};
export default Ingredient
