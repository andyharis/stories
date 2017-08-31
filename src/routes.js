import React,{Component} from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import NotFound from 'containers/NotFound';
import Read from 'containers/Read/Read';
import Create from 'containers/Create/Create';

const App = () => (
  <Switch>
    <Route exact={true} path="/" render={e => <div>
        <h3>Home page</h3>
      </div>
    }/>
    <Route path="/create" component={Create}/>
    <Route path="/read" component={Read}/>
    <Route component={NotFound}/>
  </Switch>
)
export default App;
