import { useState } from "react";
import "./App.css";
const App = () => {
  const [data, setdata] = useState();
  const [fidata, setfidata] = useState();
  const [fidata1, setfidata1] = useState();
  const armstrong = () => {
    let value = data;
    let dcast = parseInt(value);
    let data2 = `${value} is a Armstrong Number`;
    let data3 = `${value} is Not a Armstrong Number`;
    let sum = 0;
    for (let x of value) {
      let multi = 1;
      for (let y in value) {
        let cast = parseInt(x);
        multi = multi * cast;
      }
      sum = sum + multi;
    }
    sum === dcast ? setfidata(data2) : setfidata1(data3);
  };

  return (
    <>
      <h3 className="st">Check armstrong number or not</h3>
      <div className="form">
        <input
          onChange={(e) => {
            setdata(e.target.value);
          }}
          type="number"
          placeholder="Enter number"
        />
        <button onClick={armstrong}>Submit</button>
      </div>
      <p id="tr">{fidata}</p>
      <p id="fl">{fidata1}</p>
    </>
  );
};

export default App;