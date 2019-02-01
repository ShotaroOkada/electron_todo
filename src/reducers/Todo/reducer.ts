import { Todos } from "../../states/Todo/TodosState";
import { TodoAction } from '../../actions/Todo/Action';
import { TodoActionType } from '../../actions/Todo/ActionType';

// reducerでは、現在のstateとcontainerから飛んできたactionを使って、新たなstateを作成する

const todosReducer = (state: Todos, action: TodoAction): Todos => {
    // actiontypeによってやることを場合分け
    switch(action.type){
        case TodoActionType.ADD_TODO:
         return [
             // 配列の一番後ろに新たなtodoを追加して返す
            ...state,
            {
             completed: false,
             id: action.id,
             text: action.text
            }
         ];

        case TodoActionType.TOGGLE_TODO:
        // クリックされたtodoのcompleteを反転させて返す
         return state.map(todo =>
            (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
         );

        case TodoActionType.DELETE_TODO:
        // 削除されたtodoを除いた配列を返す
         return state.filter(todo => todo.id !== action.id);

        default:
         return state;
    }
}

export default todosReducer;