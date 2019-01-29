import { Todos } from "../states/Todo/TodosState";
import { Dispatch } from 'react';
import { TodoAction } from '../actions/Todo/Action';
import { toggleTodo, deleteTodo } from '../actions/Todo/ActionCreator';
import { connect } from 'react-redux';
import TodoList from '../components/Todo/TodoList';

interface IStateFormProps{
    todos: Todos
}

interface IDispatchFormProps{
    onTodoClick: (id: number) => void
    onDelete: (id: number) => void
}

function mapStateToProps(state: Todos): IStateFormProps{
    return{
        todos: state
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IDispatchFormProps{
    return{
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id))
        },
        onDelete: (id: number) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect<IStateFormProps, IDispatchFormProps>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);