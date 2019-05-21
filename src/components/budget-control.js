import React, { Component } from 'react';
import Budget from './budget';
import Remaining from './remaining';

class BudgetControl extends Component {
  render(){
    return (
      <React.Fragment>
        <Budget budget={this.props.budget} />
        <Remaining remaining={this.props.remaining}/>
      </React.Fragment>
    );
  }
}

export default BudgetControl;
