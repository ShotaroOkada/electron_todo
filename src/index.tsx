import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { createStore } from 'redux'
import { Todos } from './states/Todo/TodosState';
import todosReducer from './reducers/Todo/reducer';

// createStore:第一引数にstoreを繋げるreducer, 第二引数に指定したstateの初期値
const store: Store<Todos> = createStore(todosReducer, []);

ReactDOM.render(
  <Provider store={store}>
  {/* storeの変更を反映させるcomponentを指定 */}
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

