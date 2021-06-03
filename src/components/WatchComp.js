import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sellWatch } from "../redux/actions/actions";

const WatchComp = () => {
  const [number, setNumber] = React.useState(1);
  const dispatch = useDispatch();
  const numOfWatch = useSelector((state) => state.watch.numberOfWatches);

  return (
    <div className="container">
      <h2>Watches [Hooks Example]</h2>
      <h3>
        Number Of Watches : <span className="number">{numOfWatch}</span>
      </h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={() => dispatch(sellWatch(number))}>
        Sell {number} Watch
      </button>
    </div>
  );
};

export default WatchComp;
