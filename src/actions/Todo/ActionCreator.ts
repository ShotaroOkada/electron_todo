import { IAddTodoAction, IToggleAction, IDeleteTodoAction } from './Action';
import { TodoActionType } from './ActionType';

let nextTodoId = 0;

// actionで何をするかを書く

// todoが追加されたときにreducerに渡すもの
export function addTodo(text: string): IAddTodoAction {
    return{
        id: nextTodoId++,
        text,
        type: TodoActionType.ADD_TODO,
    }
}

// todoがクリックされたときにreducerに渡すもの
export function toggleTodo(id: number): IToggleAction{
    return{
        id,
        type: TodoActionType.TOGGLE_TODO
    }
}

// todoが削除されたときにreducerに渡すもの
export function deleteTodo(id: number): IDeleteTodoAction{
    return{
        id,
        type: TodoActionType.DELETE_TODO
    }
}