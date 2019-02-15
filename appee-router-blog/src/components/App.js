import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route as Link, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise'
import PostsIndex from './PostsIndex';
import NewPost from './NewPost.js';
import ShowPost from './ShowPost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <React.Fragment>
            <Switch>
              <Link exact path="/" component={PostsIndex} />
              <Link exact path="/posts/new" component={NewPost} />
              <Link exact path="/posts/:id" component={ShowPost} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;