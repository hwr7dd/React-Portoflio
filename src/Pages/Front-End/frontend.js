import React, { useState } from "react";
import BarChart from "./barchart";
import "./frontend.css";
import d3 from '/Users/harrisonreid/shirlene/src/d3.png';

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

  return (
      <div className='gridcontainer1'>
    <img className='logoimgfront1' src={d3}></img>
    <h2 className='cardheader1'>D3.js</h2>
    <h2 className='cardheader2'>Plotly</h2>
    <h2 className='cardheader3'>R Shiny</h2>


    <div className='card2f'>

      test
      </div>
      <div className='cardheader4'>
      <h2 >Rechart.js</h2>
      </div>

      <div className='card3f'>
      test
      </div>
      <div className='cardheader4'>
        <h2>Tesgt</h2>
  </div>      </div>
  );
}

export default App;