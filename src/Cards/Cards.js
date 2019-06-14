import React, {Component} from 'react';



class Cards extends Component{



  render(){
    
    const todos = this.state.todos.map((todo,i) =>{

      return(


        <div>
          <h1>Encabezado</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="card p">
            <img
            className="card-img-top" alt="Card image cap"src="https://picsum.photos/id/610/203/203"></img>
            <div className="card-body">
              <h5>Titulo del proyecto</h5>
              <p>En este proyecto podemos observar...</p>
             <a className="btn btn-primary" href="https://picsum.photos/">Ver más</a>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      )
    })

    return(


<div>
          <h1>Encabezado</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="card p">
            <img
            className="card-img-top" alt="Card image cap"src="https://picsum.photos/id/610/203/203"></img>
            <div className="card-body">
              <h5>Titulo del proyecto</h5>
              <p>En este proyecto podemos observar...</p>
             <a className="btn btn-primary" href="https://picsum.photos/">Ver más</a>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>





    )
  }
}


export default Cards;
