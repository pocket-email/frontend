import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Index } from './pages/index';
import { Authorization } from './pages/authorization';

const App = () => (
  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/authorization" component={Authorization} />
  </Router>
);

export default App;
