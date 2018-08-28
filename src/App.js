import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BarChart, XAxis, YAxis, Bar, CartesianGrid, Cell, Tooltip} from 'recharts';

// var data; 

// Import CSV files
// const csvFilePath='./data/test.csv';
// const csv=require('csvtojson');
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//   data = jsonObj;
//   console.log(jsonObj);
// })

// const jsonArray=await csv().fromFile(filePath);

const data = [
  {
    "AnswerRef": "one",
    "Text": "National University of Malaysia",
    "Score": 0,
    "RespondentPercentage": 12,
    "Rank": 1
  },
  {
    "AnswerRef": "two",
    "Text": "University of Malaysia Pahang",
    "Score": 0,
    "RespondentPercentage": 32,
    "Rank": 2
  },
  {
    "AnswerRef": "three",
    "Text": "Raffles University Iskandar",
    "Score": 1,
    "RespondentPercentage": 41,
    "Rank": 3
  },
  {
    "AnswerRef": "four",
    "Text": "UCSI University",
    "Score": 0,
    "RespondentPercentage": 16,
    "Rank": 4
  }
];

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Chart Demo</h1>
        </header>
        <p className="App-intro">
          
        </p>
      </div>

    );
  }
}

export class SimpleBarChart extends React.Component{
	render () {
  	return (
    	<BarChart 
            width={900} 
            height={260} 
            data={data}
            Tooltip={Tooltip}
            margin={{top: 5, right: 0, left: 0, bottom: 25}}>
       <XAxis 
           dataKey="Text"
           fontFamily="sans-serif"
           tickSize
           dy='25'
       />
       <YAxis hide/>
       <CartesianGrid 
           vertical={false}
           stroke="#ebf3f0"
       />
       <Bar 
           dataKey="RespondentPercentage" 
           barSize ={170}
           fontFamily="sans-serif"
          
           >
            {
                data.map((entry, index) => (
                    <Cell fill={data[index].AnswerRef === "three" ? '#61bf93' : '#ededed'} />
                ))
            }
        </Bar>
      </BarChart>
    );
  }
}

export default App;
