import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { createStore } from 'redux'
import { Todos } from './states/Todo/TodosState';
import todosReducer from './reducers/Todo/reducer';
import { combineReducers } from 'redux'

const allReducer = combineReducers(todosReducer)

const store: Store<Todos> = createStore(allReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

