import * as React from 'react';
import * as State from '../../states/Todo/TodosState'
import Todo from './Todo';


export interface ITodoListprops{
    todos: State.Todos;
    onTodoClick: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends React.Component<ITodoListprops>{
    render(){
        const {todos} = this.props;
        return(
            <ul>
               {todos.map(todo =>
                <Todo
                  key={todo.id}
                  {...todo}
                  onClick={this.onTodoClick(todo.id)}
                  onDelete={this.onDelete(todo.id)}
                />
                )} 
            </ul>
        )
    }

    private onTodoClick = (id:number) => () => {
        this.props.onTodoClick(id)
    }

    private onDelete = (id: number) => () => {
        this.props.onDelete(id)
    }
}

export default TodoList;