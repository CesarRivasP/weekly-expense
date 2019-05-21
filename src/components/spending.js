import React, { Component } from 'react';

class Spending extends Component {
  render(){
    const { spendingName, quantitySpending } = this.props.spendings;
    return (
      <li className="gastos">
        <p>
          {spendingName}
          <span className="gasto">$ {quantitySpending}</span>
        </p>
      </li>
    );
  }
}

export default Spending;
