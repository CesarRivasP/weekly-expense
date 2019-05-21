import React from 'react';
import PropTypes from 'prop-types';
import Budget from './budget';
import Remaining from './remaining';

const BudgetControl = (props) => {
  return (
    <React.Fragment>
      <Budget budget={props.budget} />
      <Remaining budget={props.budget} remaining={props.remaining}/>
    </React.Fragment>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}

export default BudgetControl;
