import React from 'react';
import PropTypes from 'prop-types';


const Budget = (props) => {
  const { budget } = props;
  return (
    <div className="alert alert-primary">
      Presupuesto: $ { budget }
    </div>
  );
}

Budget.propTypes = {
  budget: PropTypes.number.isRequired
}


export default Budget;
