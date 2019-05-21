import React from 'react';
import PropTypes from 'prop-types';
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

Remaining.propTypes = {
  remaining: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired
}

export default Remaining;
