import React from 'react';
import NavBar from '../molecules/NavBar';

require('./_header.scss');

function Header() {
    return (
    <>
      <header>
          <NavBar />
      </header>
    </>
  );
}

export default Header;