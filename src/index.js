import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';
import "tachyons";
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux";
import {searchRobots,requestRobots} from "./reducers"
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
const rootReducers = combineReducers({requestRobots, searchRobots})
const logger = createLogger()
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
   <App ></App></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
