import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import OrderForm from './OrderForm';

const App = () => {
  return (
    <>
      <Router>
        <Route 
          exact path='/'
          component={Home}
        />
        <Route 
          exact path='/pizza'
          component={OrderForm}
        />
      </Router>
    </>
  );
};
export default App;
