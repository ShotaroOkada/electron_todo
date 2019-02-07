import * as React from 'react';
import * as State from '../../states/Todo/TodosState';
import Todo from './Todo';

// storeと繋ぐpropsを宣言
export interface ITodoListProps{
    todos: State.Todos;
    onTodoClick: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends React.Component<ITodoListProps>{
   public render(){
         const {todos} = this.props;
            return(
            <ul>
               {todos.map(todo =>
               // componentのTodoをHTMLのラベルのように書くことができる
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

    private onTodoClick = (id: number) => () => {
        this.props.onTodoClick(id)
    }

    private onDelete = (id: number) => () => {
        this.notificationDelete(id)
        this.props.onDelete(id)
    }

    private notificationDelete = (id: number) => {
        const notificationText = this.props.todos[id] + "が削除されました"
        if("Notification" in window){
            const ask = Notification.requestPermission();
            ask.then(permission =>{
              if(permission === "granted"){
                const msg = new Notification("タスクの削除", {
                  body: notificationText,
                });
                msg.addEventListener("click", event =>{
                  alert("Click received");
                });
              }
            });
        }
    }
}

export default TodoList;