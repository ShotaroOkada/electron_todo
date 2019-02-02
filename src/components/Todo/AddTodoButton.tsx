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
                    <button onClick={this.notification}>Todoを追加</button>
                </form>
            </div>
        )
    }

    
    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        // ボタンを押した際に、値が何もなければ、何もせずに返す
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

    public notification = () => {
        const myNotification = new Notification('Title', {
            body: 'Lorem Ipsum Dolor Sit Amet'
          })
        console.log(myNotification);
    }
}

export default AddTodoButton;