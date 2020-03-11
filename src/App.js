import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignInAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signinandsignup" component={SignInAndSignupPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
