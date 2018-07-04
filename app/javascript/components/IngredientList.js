import React from "react"
import PropTypes from "prop-types"
import Ingredient from "./Ingredient"

class IngredientList extends React.Component {
  render () {
    const listItems = this.props.ingredients.map((ingredient) =>
      <Ingredient key={ingredient.name + "|" + ingredient.amount}
                  name={ingredient.name}
                  amount={ingredient.amount}
                  unit={ingredient.unit} />
    )
    return (
      <React.Fragment>
        Ingredients: <ul>{listItems}</ul>
      </React.Fragment>
    );
  }
}

IngredientList.propTypes = {
  ingredients: PropTypes.array
};
export default IngredientList
