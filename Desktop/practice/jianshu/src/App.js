import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GlobalStyle/>
          <IconFont/>
          <BrowserRouter>
            <Fragment>
              <Header/>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/login' exact component={Login} ></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
