import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

const Header = (props) => {
  const { title } = props;
  return (
    <div>
      <header>
        <h1>{ title }</h1>
      </header>
      <Divider style={{ backgroundColor: 'white', width: '100%'}} />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;
