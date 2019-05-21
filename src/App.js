import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import './css/App.css';

class App extends Component {

  state = {
    budget: '',
    remaining: '',
    spendings: {}
  }

  addSpending = (spending) => {
    // tomar una copia del state actual
    const spendings = { ...this.state.spendings };
    console.log(spendings);

    // agregar el gasto al state
    this.setState({ spendings: spending });
    console.log(this.state.spendings);
    // ponerlo en state
  }

  render(){
    return (
      <div className="App container">
        <Header title="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form addSpending={this.addSpending} />
            </div>
            <div className="one-half column">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
