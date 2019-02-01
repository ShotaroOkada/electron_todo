import * as React from 'react';
import './App.css';
import AddTodoButtonContainer from './containers/AddTodoButtonContainer';
import TodoListContainer from './containers/TodoListContainer';

// ここでstoreとやり取りするcontainerをまとめている
class App extends React.Component {
  public render() {
    return (
      <div>
        <AddTodoButtonContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
