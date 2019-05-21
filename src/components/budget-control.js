import React from 'react';
import PropTypes from 'prop-types';
import Budget from './budget';
import Remaining from './remaining';

const BudgetControl = (props) => {
  const { budget, remaining} = props;
  return (
    <React.Fragment>
      <Budget budget={ budget } />
      <Remaining budget={ budget } remaining={ remaining }/>
    </React.Fragment>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
}

export default BudgetControl;
