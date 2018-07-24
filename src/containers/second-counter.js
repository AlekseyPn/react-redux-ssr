import { connect } from "react-redux";
import { Counter } from "../components/counter";
import { SECOND_INCREMENT } from "../store/actions";

const mapStateToProps = function(state) {
  return {
    value: state.secondCounter,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    onClick: () => {
      dispatch({ type: SECOND_INCREMENT });
    },
  };
};

export const SecondCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
