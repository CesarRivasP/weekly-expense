import React from 'react';
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

export default BudgetControl;
