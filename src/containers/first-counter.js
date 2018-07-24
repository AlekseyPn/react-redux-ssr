import { connect } from "react-redux";
import { Counter } from "../components/counter";
import { FIRST_INCREMENT } from "../store/actions";

const mapStateToProps = function(state) {
  return {
    value: state.firstCounter,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onClick: () => {
      dispatch({ type: FIRST_INCREMENT });
    },
  };
};

export const FirstCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
