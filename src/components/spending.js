import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spending extends Component {
  render(){
    const { spendingName, quantitySpending } = this.props.spendings;
    return (
      <li className="gastos">
        <p>
           <strong>{spendingName}</strong>
          <span className="gasto">$ {quantitySpending}</span>
        </p>
      </li>
    );
  }
}

Spending.propTypes = {
  spendings: PropTypes.object.isRequired
}

export default Spending;
