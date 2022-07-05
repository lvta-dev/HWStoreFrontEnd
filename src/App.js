import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from './store/GlobalState';

import './index.css';

import { HomePage, ProductsPage } from './pages';
import { NavBarDesktop, SideMenu, Footer } from './components';

function App() {
  const Context = useContext(GlobalContext);
  return (
    <>
      <NavBarDesktop />
      <SideMenu
        outerMostClass="side-menu-section hamburger"
        isHidden={Context.isHidden}
        handler={true}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/product/:category"
          element={<ProductsPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
