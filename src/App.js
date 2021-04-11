import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { SearchBox } from './components/search-box/seach-box.component';

class App extends Component{

  constructor(){
    super();

    this.state ={
      monsters: [
      ],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response =>response.json())
    .then(user=>this.setState({monsters:user}));
  }

  render(){
const { monsters, searchField } =this.state;
const filteredMonsters = monsters.filter(mon =>
  mon.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox
       placeholder='Search monsters' 
         handleChange={e=>this.setState({searchField:e.target.value})}
       />
      <CardList monsters={filteredMonsters}/> 
       
      </div>
    );
  }
}


export default App;
