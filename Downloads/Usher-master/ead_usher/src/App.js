import React ,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

import './App.css';
import Homepage from './Views/Homepage';
import NavbarMain from "./Views/Navbar";


const history = require('history').createBrowserHistory;

class App extends Component{


  render () {

    const pages = [
      {
        pageLink: '/',
        view: Homepage,
        displayName: '',
        animationDelayForNavbar: 0.2,
      },
    ];


  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              {/* <Navbar pages={pages} /> */}
              <NavbarMain />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />

                  );
                })}

                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>
    </div>
  );
}
}

export default(App);
