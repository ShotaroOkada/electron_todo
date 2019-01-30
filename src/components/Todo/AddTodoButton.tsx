import * as React from 'react';

// storeと繋ぐpropsの型を宣言
export interface IAddTodoButtonProps{
    onSubmit: (s:string) => void;
}

// このcomponent内で使うstateの型を宣言
export interface IAddTodoButtonState{
    input: string;
}

class AddTodoButton extends React.Component<IAddTodoButtonProps, IAddTodoButtonState>{
    // stateの初期化
    constructor(props: IAddTodoButtonProps){
        super(props);
        this.state = {
            input: ""
        }
    }

    public render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.input} onChange={this.onInputChange}/>
                    <button>Todoを追加</button>
                </form>
            </div>
        )
    }

    // ボタンを押した際に、値が何もなければ、何もせずに返す
    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        if(!this.state.input.trim()){
            return
        }

        // 引数に入力されたtodoを受け取り、その後フォームの入力を空にする
        this.props.onSubmit(this.state.input);
        // stateを変更する場合は、必ずsetStateを使う
        this.setState({
            input: ""
        })
    }

    // 入力される値が変更されるたび、stateの値をそれに変更する
    public onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            input: e.currentTarget.value,
        })
    }
}

export default AddTodoButton;