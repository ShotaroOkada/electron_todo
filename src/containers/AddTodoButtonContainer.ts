import { Dispatch } from "react";
import { TodoAction } from '../actions/Todo/Action';
import AddTodoButton, { IAddTodoButtonProps } from '../components/Todo/AddTodoButton';
import { addTodo } from '../actions/Todo/ActionCreator';
import { connect } from 'react-redux';
import { Todos } from '../states/Todo/TodosState';

// ここで、storeからほしいstateを宣言。
// 今回は新たなtodoをstoreに追加するだけなので、ここは指定しない
function mapStateToProps(state: Todos): {} {
    return {}
}

// ここで、storeに送りたいものをdispatchとactioncreaterを使って宣言
// 今回はcomponentのAddtodobuttonにあるonSubmitで発火される
function mapDispatchToProps(dispatch: Dispatch<TodoAction>): IAddTodoButtonProps {
    return{
        onSubmit: (s: string) => {
            dispatch(addTodo(s));
        }
    };
}

// connectを使いstoreとcomponentを繋げる
// 最後の引数には、受け取るcomponentを指定
export default connect<{}, IAddTodoButtonProps>(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoButton);