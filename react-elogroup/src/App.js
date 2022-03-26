import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewLead from './pages/NewLead';
import LeadPanel from './pages/LeadPanel';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/newlead' component={NewLead} />
        <Route exact path='/leadpanel' component={LeadPanel} />
      </BrowserRouter>
    )
  }
}

export default App;
