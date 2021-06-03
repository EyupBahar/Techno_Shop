import React from "react";
import { connect } from "react-redux";
import { sellLaptop } from "../redux/actions/actions";

const LaptopComp = (props) => {
  return (
    <div className="container">
      <h2>Laptops [Pure Redux]</h2>
      <h3>
        Number of Laptops :
        <span className="number">{props.numberOfLaptops}</span>
      </h3>
      <button onClick={props.sellLaptop}>Sell Laptop</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfLaptops: state.laptop.numberOfLaptops,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sellLaptop: () => dispatch(sellLaptop()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LaptopComp);
