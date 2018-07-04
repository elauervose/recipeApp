import React from "react"
import PropTypes from "prop-types"
class TagList extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.tags.join(", ")}
      </React.Fragment>
    );
  }
}

TagList.propTypes = {
  tags: PropTypes.array
};
export default TagList
