import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import List from './components/list';
import { budgetValidation } from './helpers/helpers';
import './css/App.css';

class App extends Component {

  state = {
    budget: '',
    remaining: '',
    spendings: {}
  }

  componentDidMount(){
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt('Cual es tu presupuesto');

    let result = budgetValidation(budget);

    if(result){
      // console.log('Valido');

      this.setState({
        budget: result,
        remaining: result
      })
    }
    else {
      // console.log('NO valido');

      // Hasta que alla un presupuesto valido no va a dejar de caer en esta funcion
      this.getBudget()
    }
  }

  addSpending = (spending) => {
    // tomar una copia del state actual
    const spendings = { ...this.state.spendings };

    // agregar el gasto al state
    spendings[`spending${Date.now()}`] = spending;  //de esta forma se pueden crear muchos gastos, puesto que se le
    // añade la fecha a cada uno de ellos
    console.log(spendings);

    // ponerlo en state
    this.setState({ spendings });
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
              <List spendings={this.state.spendings} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
