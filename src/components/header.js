import React from 'react';
import Divider from '@material-ui/core/Divider';

const Header = (props) => {
  return (
    <div>
      <header>
        <h1>{props.title}</h1>
      </header>
      <Divider style={{ backgroundColor: 'white', width: '100%'}} />
    </div>
  )
}

export default Header;
