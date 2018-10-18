import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import TextInput from './components/textinput';
import FilterInput from './components/filterinput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['raphael', 'clara', 'junior', 'antoine']
    };
  }

  filterValue = (inputValue) => {
    const newTodos = [];

    const result = this.state.todos.filter(todo => todo == inputValue);
    
    console.log(result)
    // this.state.todos.map((element, index) => {
      // if (element !== '')
      // {
        // words.filter(word => word.length > 6);
        // if (element === inputValue)
        // {
        //   console.log('ici');
        //   newTodos.push(element);
        //   this.setState({newTodos});
        // }
      // }
    // });
  }

  addValue = (inputValue) => {
    const todos = [inputValue].concat(this.state.todos);
    this.setState({todos});
  }

  onDelete = (index) => {
    const todos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({todos});
  }
    
  render() {
    return (
      <div className="App">
        <FilterInput onChange={(inputValue) => this.filterValue(inputValue)}/>
        {this.state.todos.map((todo, index) => <Item label={todo} onClick={() => this.onDelete(index)} />)}
        <br/>
        <TextInput onClick={(inputValue) => this.addValue(inputValue)}/> 
      </div>
    );
  }
}

export default App;
