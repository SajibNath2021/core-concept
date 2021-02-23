import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name : "jon",
    job : "gammer"
  }

  const array = [
    {name : "adobe", price: "$66"},
    {name : "ps5", price:"$22"},
    {name : "pdf reader", price : "$11"}
  ]
  const nayok = ['josim','razak','rubel','alomgir',"korim"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users></Users>
        <Count></Count>

        <ul>
          {
            nayok.map(nayok=> <li>{nayok}</li> )
          }
          
        </ul>
          {
            array.map(array => <Card array={array}></Card>) 
          }
          
        {/* <Card array = {array[0]}></Card>
        <Card array = {array[1]}></Card>
        <Card array = {array[2]}></Card> */}

        {/* <Card name= "adobe" price = "44"></Card>
        <Card name= "pdf reader" price = "22"></Card>
        <p>
          Edit by me <code>src/App.js</code> and save to reload.
        </p>
        <p>my first react paragraph</p>
        <h1>name : {person.name}</h1>
        <h3>job : {person.job}</h3>
        <Player name = "Masrafi Bin Murtoza"></Player>
        <Player name = "Liton"></Player>
        <Player name = "Musfiq"></Player>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> 
      {
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=> res.json())
      .then(data => setUsers(data));
    }
  )
  return(
    <div>
      <h1>dynamic user : {users.length} </h1>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Count() {
  const [count, setCount] = useState(10);
   
  return(
    <div>
      <h1>count :{count}</h1>
      <button onClick= {() => setCount(count-1)}>remove</button>
      <button onClick= {() =>setCount(count+1)}>add</button>
    </div>
  )
  
}

function Card(props) {
  const bodyStyle= {
    border:"1px solid gray",
    borderRadius: '5px',
    backgroundColor : 'lightgray',
    height: '100%',
    width : '200px',
    float: 'left',
    margin: '10px'
  }

  const {name, price} = props.array; //destructuring
  return(
      <div style= {bodyStyle}>
        <h1> {name}</h1>
        <h3>{price}</h3>
        <button>bye now</button>
      </div>
    )
  
}

function Player(props) {
  // const personStyle = {
  //   border : '2px solid yellow',
  //   margin : '10px'
  // }
  return ( 
  <div style = {{border: '2px solid red', margin: '10px'}}>
    <h1>Name : {props.name}</h1>
    <h3>hero of the year</h3>
  </div> 
  )  
}

export default App;
