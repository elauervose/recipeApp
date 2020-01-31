import React from "react"
import PropTypes from "prop-types"
class DirectionList extends React.Component {
  render () {
    const listItems = this.props.steps.map((instruction, index) =>
      <li key={index}>{instruction}</li>
    )
    return (
      <React.Fragment>
        <div>
        Steps: <ul>{listItems}</ul>
        </div>
      </React.Fragment>
    );
  }
}

DirectionList.propTypes = {
  steps: PropTypes.array
};
export default DirectionList
