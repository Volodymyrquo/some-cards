import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import {
  AuthPage,
  Cards,
  CardsTypes,
  Contacts,
  Currencies,
  Dashboard,
  Header,
  Home,
  Navbar,
  Operations,
  Requisites,
  Tariffs,
  Users,
} from './components';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={AuthPage} />
          <Route path='/cards' exact component={Cards} />
          <Route path='/cardstypes' exact component={CardsTypes} />
          <Route path='/contacts' exact component={Contacts} />
          <Route path='/currencies' exact component={Currencies} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/operations' exact component={Operations} />
          <Route path='/requisites' exact component={Requisites} />
          <Route path='/tariffs' exact component={Tariffs} />
          <Route path='/users' exact component={Users} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
