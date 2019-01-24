import { Todos } from "../../states/Todo/TodosState";
import { TodoAction } from '../../actions/Todo/Action';
import { TodoActionType } from '../../actions/Todo/ActionType';

function todosReducer(state: Todos, action: TodoAction): Todos{
    switch(action.type){
        case TodoActionType.ADD_TODO:
         return [
            ...state,
            {
             id: action.id,
             completed: false,
             text: action.text
            }
         ];

        case TodoActionType.TOGGLE_TODO:
         return state.map(todo =>
            (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
         );

        case TodoActionType.DELETE_TODO:
         return state.filter(todo => todo.id !== action.id);
        default:
         return state;
    }
}

export default todosReducer;