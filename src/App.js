import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import OrderForm from './OrderForm';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            path='/pizza'
            component={OrderForm}
          />
          <Route 
            path='/'
            component={Home}
          />
        </Switch>
      </Router>
    </>
  );
};
export default App;
