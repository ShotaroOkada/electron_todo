import * as React from 'react';
import * as State from '../../states/Todo/TodosState';
import Todo from './Todo';


export interface ITodoListProps{
    todos: State.Todos;
    onTodoClick: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends React.Component<ITodoListProps>{
   public render(){
         const {todos} = this.props;
        // const todoscopy:State.Todos = todos
        // todoscopy[0] = {
        //     id: 0,
        //     completed: false,
        //     text: "a"
        // }
        // alert(todoscopy[0] + "todos中身");
        // if(todos !== undefined && todos !== null){
        //     alert("check todos")
        //     alert(todoscopy.length);
        alert(todos + "todosの中身")
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

        // }else{
        //     alert("test");
        //     return <div/>
        // }
    }

    private onTodoClick = (id: number) => () => {
        this.props.onTodoClick(id)
    }

    private onDelete = (id: number) => () => {
        this.props.onDelete(id)
    }
}

export default TodoList;