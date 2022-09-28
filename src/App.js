import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {
  const state = ['Uttar Pradesh','Uttarakhand','Rajasthan','Haryana']
  const city = [['Hapur','Ghaziabad','Kanpur','Lucknow'],['Dehradun','Haridwar','Roorkee'],['Alwar','Kota','Jaipur'],['Sonipat','Panipat','Hisar']]

const stateDisplay = state.map((st,index) => {
  return (
    <option value={index}>{st}</option>
  )
});

const [stateindex,setStateindex] = useState(0);
const [citylist,setCitylist] = useState("")

useEffect(() => {
    setCitylist(city[stateindex].map((ct) => {
      return (
        <option>{ct}</option>
      )
    })
    )
},[stateindex]);

  return (
    <div className="App">
      <label>State: <br/></label>
      <select onChange={(e) => setStateindex(e.target.value)}>
      <option disabled selected value>Please select a state</option>
        {stateDisplay}
      </select>
      <br/><br/>
      <label>City: <br/></label>
      <select>
      <option disabled selected value>Please select a city</option>
      {citylist}
      </select>
    </div>
  );
}

export default App;
