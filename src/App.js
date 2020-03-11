import React, {Component} from 'react';
import { CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    };  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className="App"> 
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />         
        <CardList monsters={filteredMonsters}/>
      </div>
      );
    }
  }
  
  export default App;




  // this.state = {
  //   monsters:[
  //     {
  //       id:"asc1",
  //       name: "Leanne Graham"
  //     },
  //     {
  //       id:"asc2",
  //       name: "Ervin Howell"
  //     },
  //     {
  //       id:"asc3",
  //       name: "Clementine Bauch"
  //     },
  //     {
  //       id:"asc4",
  //       name: "Patricia Lebsack"
  //     },
  //     {
  //       id:"asc5",
  //       name: "Chelsey Dietrich"
  //     },
  //     {
  //       id:"asc6",
  //       name: "Mrs. Dennis Schulist"
  //     },
  //     {
  //       id:"asc7",
  //       name: "Kurtis weissnat"
  //     },
  //     {
  //       id:"asc8",
  //       name: "Nicholas Runolfsdottir V"
  //     },
  //     {
  //       id:"asc9",
  //       name: "Glenna Reichert"
  //     },
  //     {
  //       id:"asc10",
  //       name: "Clementina DuBuque"
  //     },
  //   ]
  // }
  