import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //return list 100X 
  render() {
    var arr = []
    console.log(arr)
    function mapper (){
      for(var i =1 ; i < 101; i++ ){
        arr.push(i);
      }
    }
    mapper()
    var list = arr.map((item,i) => {
      if(item % 15 === 0){
        item = item + ' fizzbuzz'
      }
      if(item % 3 === 0){
        item = item + ' fizz'
      }
      if(item % 5 === 0){
        item = item + ' buzz'
      }
      return (
      <li><button className="button">{item}</button></li>
    )
  })
    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
