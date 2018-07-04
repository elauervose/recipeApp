import React from "react"
import PropTypes from "prop-types"
class Ingredient extends React.Component {
  render () {
    return (
      <li>
        Name: {this.props.name}<br />
        Amount: {this.props.amount}<br />
        Unit: {this.props.unit}
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
