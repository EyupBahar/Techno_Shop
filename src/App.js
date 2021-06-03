import "./App.css";
import LaptopComp from "./components/LaptopComp";
import PhoneComp from "./components/PhoneComp";
import WatchComp from "./components/WatchComp";
import CompComp from "./components/CompComp";

function App() {
  return (
    <div className="App">
      <h1>Clarus Shop</h1>
      <LaptopComp />
      <PhoneComp />
      <WatchComp />
      <CompComp />
    </div>
  );
}

export default App;
