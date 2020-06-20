import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'

import MainView from './components/MainView';
import BotView from './components/BotView';
import MessageView from './components/MessageView';

const history = createBrowserHistory()

function App() {
  return (
    <Router history = {history}>
    <Switch>
      <Route exact path = '/' component = {MainView} />
      <Route path = '/bot:botId' component = {BotView} />
      <Route path = '/:botId/user:userId' component = {MessageView} />
    </Switch>
    </Router>
  );
}

export default App;
