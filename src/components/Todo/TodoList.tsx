import * as React from 'react';
import * as State from '../../states/Todo/TodosState'

export interface ITodoListprops{
    todos: State.Todos;
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
}

class TodoList extends React.Component<ITodoListprops>{
    render(){
        const {todos} = this.props;
        return(
            <ul>
                
            </ul>

        )
    }
}