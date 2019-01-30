import * as React from 'react';

// storeと繋ぐpropsを宣言
interface ITodoProps{
    completed: boolean;
    text: string;
    onClick: () => void;
    onDelete: () => void;
}

class Todo extends React.Component<ITodoProps>{
    public render(){
        // それぞれのpropsを受け取る
        const {completed, text, onClick, onDelete} = this.props;
        return(
            <li>
                {/* textがクリックされた際に、completeの値によって線が引かれるor消される */}
                <label onClick={onClick} style={{textDecoration: completed? 'line-through' : 'none'}}>
                    {text}
                </label>
                <button onClick={onDelete}>削除</button>
            </li>

        )
    }
}

export default Todo;