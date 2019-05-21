import React from 'react';
import { reviewBudget } from '../helpers/helpers';

const Remaining = (props) => {
    const budget = props.budget;
    const remaining = props.remaining;
    return (
      // <div className="alert alert-success">
      <div className={reviewBudget(budget, remaining)}>
        Restante: $ {props.remaining}
      </div>
    );
}

export default Remaining;
