import React from 'react';
import NavMobile from '../molecules/NavMobile';
// import NavDesktop from '../molecules/NavDesktop';

require('./_header.scss');

function Header() {
    return (
    <>
      <header>
          <NavMobile />
          {/* <NavDesktop /> */}
      </header>
    </>
  );
}

export default Header;