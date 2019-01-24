import { IAddTodoAction, IToggleAction, IDeleteTodoAction } from './Action';
import { TodoActionType } from './ActionType';

let nextTodoId = 0;

export function addTodo(text: string): IAddTodoAction {
    return{
        id: nextTodoId++,
        text,
        type: TodoActionType.ADD_TODO,
    }
}

export function toggleTodo(id: number): IToggleAction{
    return{
        id,
        type: TodoActionType.TOGGLE_TODO
    }
}

export function deleteTodo(id: number): IDeleteTodoAction{
    return{
        id,
        type: TodoActionType.DELETE_TODO
    }
}