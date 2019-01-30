import * as React from 'react';
import './App.css';
import AddTodoButtonContainer from './containers/AddTodoButtonContainer';
import TodoListContainer from './containers/TodoListContainer';


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
