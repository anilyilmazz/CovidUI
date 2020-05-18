import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider} from "react-redux"
import { createStore ,applyMiddleware} from "redux"
import reducer from "./redux/reducers/index"
import thunk from "redux-thunk"

const middleware = [thunk]
const store = createStore(reducer,applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


