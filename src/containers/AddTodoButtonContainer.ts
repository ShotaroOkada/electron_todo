import { Dispatch } from "react";
import { TodoAction } from '../actions/Todo/Action';
import AddTodoButton, { IAddTodoButtonProps } from '../components/Todo/AddTodoButton';
import { addTodo } from '../actions/Todo/ActionCreator';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IAddTodoButtonProps {
    return{
        onSubmit: (s: string) => {
            dispatch(addTodo(s));
        }
    };
}

export default connect<{}, IAddTodoButtonProps>(
    mapDispatchToProps
)(AddTodoButton);