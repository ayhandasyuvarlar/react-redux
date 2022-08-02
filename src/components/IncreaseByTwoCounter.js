import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { inreaseByTwoCounter } from "../redux/actions/counterActions";
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(inreaseByTwoCounter());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

function mapDispatchToPops(dispatch) {
  return { actions: bindActionCreators(inreaseByTwoCounter, dispatch) };
}
export default connect(mapDispatchToPops)(IncreaseByTwoCounter);
