import { TodoActionType } from './ActionType';

export interface IAddTodoAction{
    type: TodoActionType.ADD_TODO;
    id: number;
    text: string;
}

export interface IToggleAction{
    type: TodoActionType.TOGGLE_TODO;
    id: number;
}

export interface IDeleteTodoAction{
    type: TodoActionType.DELETE_TODO;
    id: number;
}

export type TodoAction = IAddTodoAction | IToggleAction | IDeleteTodoAction