import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './data.css';
import { BarChart,LabelList, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typing from 'react-typing-animation';
import Cursor from 'react-typing-animation';
import Loader from 'react-loader';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import python from '/Users/harrisonreid/shirlene/src/python.png';
function App() {
  const [coins, setCoins] = useState([]);
  const [fetched,setFetch]=useState(false);
  const [original,setOriginal]=useState([])
  const[start,setStart]=useState(false)
  const fetchCryptoData=(() => {
      axios({
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_API_KEY,
      },
      params: {
        filter_asset_id: "ADA,EOS",
      },
    })
    .then((response)=>{
      setOriginal(response)
      const coinsChanged = response.data.map(coinApiData => ({
        label: coinApiData.name,
        value: coinApiData.price_usd,
      }));
      setCoins(coinsChanged)
      setFetch(true)
      setTimeout(() => setStart(true), 2000)

      console.log(coinsChanged)

    })
    .catch((error)=>{
      console.log(error)
    })
  });
useEffect(()=>{

},[]);
      
  return (
    <div className='grid-container'>
      <div className='dataheader'>
        <h1 className='skills'>Skills</h1>
        <hr></hr>
      <button className='linkbuttons'>API(Javascript)</button>
      <button className='linkbuttonsext'>SQL(MySQL,SQL Server, PostgreSQL)</button>
      <button className='linkbuttons'>ETL(Python,R)</button>
      <button className='linkbuttonsext'>Cloud(AWS,Azure)</button>


      </div>
      <div className='statement'>
        <hr></hr>
      <header >
        <h1>
          API Fetch Example
        </h1>
        {!fetched ? <button type='button' className='fetch' onClick={fetchCryptoData}>Fetch Data</button>: <div className='fetched'><Typing cursor={false} ><h2> Data Fetched!</h2></Typing> </div>}
      </header>      
      </div>

      <div className='card1head'><h3>Axios Fetch</h3></div>
      <div className='card2head'><h3>API Response</h3></div>
      <div className='card3head'><h3>Manipulating the Data for Charting</h3></div>
      <div className='card4head'><h3>Charting the Result</h3></div>
      <div className='card1'>
          <SyntaxHighlighter wrapLongLines={true} language='javascript' className='test' style={docco}>
          {`const fetchCryptoData=(() => {'+
  'axios({'+
  'method: "GET",'+
  'url: "https://rest.coinapi.io/v1/assets",'+
  'headers: {'+
   ' "X-CoinAPI-Key": process.env.REACT_APP_API_KEY,'+
  '},'+
  'params: {'+
  '  filter_asset_id: "ADA,EOS",'+
  '},'+
'})`}
          </SyntaxHighlighter>
      </div>
      <div className='card2'>{fetched?<pre>{JSON.stringify(original,null,1)}</pre>:<div><Typing cursor={true}><h1>Waiting for Fetch</h1></Typing><h1 className='blink'>...</h1></div>}</div>
      <div className='card3'>
        {fetched?<div><SyntaxHighlighter wrapLongLines={true} language='javascript'>{'const coinsChanged = response.data.map(coinApiData => ({'+
      ' label: coinApiData.name,'+
        'value: coinApiData.price_usd,'+
      '}));'}</SyntaxHighlighter><pre>{JSON.stringify(coins,null,1)}</pre> 
      </div>:<div><Typing cursor={true}><h1>Waiting for Fetch</h1></Typing><h1 className='blink'>...</h1></div>}</div>

      <div className='card4'>
    {fetched?<div><BarChart
        width={500}
        height={300}
        data={coins}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis tickFormatter={(label) => `$${label}`} allowDecimals={true} tickCount={10} domain = {[0,5.5]}/>
        <Bar dataKey="value" fill="#8884d8" >
        <LabelList dataKey="value" formatter= {(value)=>'$'+Math.round((value + Number.EPSILON) * 100) / 100} position="top" />
        </Bar>
      </BarChart><h1>Cryptocurrency Price</h1> </div>:<div><Typing cursor={true}><h1>Waiting for Fetch</h1></Typing><h1 className='blink'>...</h1></div>}
      </div>
      <div className='footer' id='footer'>
      </div>
      </div>
    );
  
}

export default App;