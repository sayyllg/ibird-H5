import React from 'react';
import Header from './header';

function MainLayout({ children, location }) {
  return (
    <div className="">
      <Header location={location} />
      <div className="">
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;