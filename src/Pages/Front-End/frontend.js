import React, { useState } from "react";
// import BarChart from "./barchart";
import "./frontend.css";

import d3 from '/Users/harrisonreid/shirlene/src/Pages/Home/d3.png';

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

  return (
      <div className='container1'>
        <div className='Title'>Visualizations</div>
    <div className='logoimgfront1'><img src={d3}></img></div>
    <div className='logoimgfront2'><img src={d3}></img></div>
    <div className='logoimgfront3'><img src={d3}></img></div>
    <div className='logoimgfront4'><img src={d3}></img></div>

    <div className= 'cardheader1'><h2>D3.js</h2></div>
    <div className= 'cardheader2'><h2>D3.js</h2></div>
    <div className= 'cardheader3'><h2>D3.js</h2></div>
    <div className= 'cardheader4'><h2>D3.js</h2></div>


    <div className='card1f'>

      test
      </div>
      <div className='card2f'>
      <h2 >Rechart.js</h2>
      </div>

      <div className='card3f'>
      test
      </div>
      <div className='card4f'>
        <h2>Tesgt</h2>
  </div>      </div>
  );
}

export default App;