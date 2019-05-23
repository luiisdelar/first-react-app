import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import TareaForm from './components/TareaForm';
import { todos } from './todos.json';
//console.log(todos);

class App extends Component {
   
  constructor(){
        super();
        this.state={
            todos: todos    
        }

        this.manejaTarea = this.manejaTarea.bind(this);
  }
  
  manejaTarea(tarea){
    this.setState({
      todos: [...this.state.todos,tarea]
    })
  }

  borraTarea(indice){
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== indice
        })
      })
  }
    render() {
      const informacion = this.state.todos.map((todo,i) => {
        return (
          <div className="col-md-4" key={i}>
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
             <div className="card-footer">
                <button className="btn btn-danger" onClick={ this.borraTarea.bind(this,i) }>Delete</button>
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
                <div className="col-md-4 mt-4">
                  <TareaForm onAggTarea={ this.manejaTarea }/>
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    { informacion }
                  </div>
                </div>
              </div>
            </div>
            
            

          </div>
        );
  }
}

export default App;
