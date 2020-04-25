import React from 'react';
// import logo from './/checkboxlogo.svg';
// import './App.css';
import CheckBox from "./checkbox";
import NewTodo from "./newtodo"
class App extends React.Component {
  state = {
     todos : [
       {id : 1, content : "buy milk" },
       {id : 2, content : "Go Bhar" },

     ]
  }

  delTodo = (id)=>{
    console.log(id)
    let newTodo = this.state.todos.filter(val=>{
      return id !== val.id
    })
    this.setState({
      todos : newTodo
    })
  }
  addTodo = (todo)=>{
    
    todo.id = Math.round(Math.random()*10)
    console.log(todo)
    let t = [...this.state.todos,todo];
    this.setState({
      todos : t
    })
  }
  render(){
  return (
    <div className="App container">
      <header className="App-header">
        <h1 className="center blue-text"> TO DO LIST
        </h1>

        <CheckBox todos={this.state.todos} del={this.delTodo}/>
        <NewTodo addTodo={this.addTodo} />
      </header>
    </div>
  );
}
}

export default App;
