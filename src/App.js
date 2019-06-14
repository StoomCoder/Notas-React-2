/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from 'react';
import './App.css';
import { todos } from './todos.json'
console.log(todos);


class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
     
      todos:todos
  
    }
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {

    return (
     
     
        <div className="container" key={i}>
          <div className="row">
            <div className="col-6">
            <div className="card p">
            <img
            className="card-img-top" alt="Card image cap"src="https://picsum.photos/id/610/203/203"></img>
            <div className="card-body">
              <h5>{todo.Titulo}</h5>
              <p>{todo.Contenido}</p>
             <a className="btn btn-primary" href="https://picsum.photos/">Ver más</a>
            </div>
            </div>
            </div>
          </div>
        </div>
    )
  });

  return (
     
    <div className="App">
       <div className="">
                <div className="row">
                  {todos}
                </div>
              </div>
    </div>
  )



    // eslint-disable-next-line no-unreachable
   

  }
}


export default App;
