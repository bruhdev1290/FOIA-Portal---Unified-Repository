import React from 'react';
import PropTypes from 'prop-types';
import Constrain from './wizard_layout_constrain';

function Header({ headerUpper, headerLower }) {
  return (
    <header className="w-layout-header">
      <div className="w-layout-header__upper">
        <Constrain width="large">
          {headerUpper}
        </Constrain>
      </div>
      <div className="w-layout-header__lower">
        <Constrain width="large">
          {headerLower}
        </Constrain>
      </div>
    </header>
  );
}

Header.propTypes = {
  headerUpper: PropTypes.node,
  headerLower: PropTypes.node,
};

export default Header;
