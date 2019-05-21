import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { todos } from './todos.json';
//console.log(todos);

class App extends Component {
   
  constructor(){
        super();
        this.state={
            todos: todos    
        }
  }
  
    render() {
      const informacion = this.state.todos.map((todo,i) => {
        return (
          <div className="col-md-4">
          <div className="card mt-4">
             <div className="card-header">
                <h3>{ todo.title }</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  { todo.priority }
                </span>
             </div>
             <div className="card-body">
                <p>{ todo.description }</p>
                <p>{ todo.responsible }</p>
             </div>
          </div>
          </div>
        )
      })
    
      return (
          <div className="App">
            <Navigation titulo="El titulo" ntareas={this.state.todos.length}/>
            
            
            
            <div className="container">
              <div className="row">
                { informacion }
              </div>
            </div>
            
            <img src={logo} className="App-logo" alt="logo" />

          </div>
        );
  }
}

export default App;
