import React from "react";
import { connect } from "react-redux";
import { sellComp } from "../redux/actions/actions";

const CompComp = (props) => {
  const [number, setNumber] = React.useState(1);
  return (
    <div className="container">
      <h2>Computers [Pure Redux]</h2>
      <h3>
        Number of Computers :
        <span className="number">{props.numberOfComps}</span>
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          console.log(number);
          console.log(props.numberOfComps);
          props.sellComp(number);
        }}
      >
        Sell {number} Comps
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfComp: state.comp.numberOfComp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellComp: (number) => dispatch(sellComp(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompComp);
