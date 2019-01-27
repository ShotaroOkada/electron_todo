import * as React from 'react';

export interface IAddTodoButtonProps{
    onSubmit: (s:string) => void;
}

export interface IAddTodoButtonState{
    input: string;
}

class AddTodoButton extends React.Component<IAddTodoButtonProps, IAddTodoButtonState>{
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
                    <input type="text"/>
                    <button></button>
                </form>
            </div>
        )
    }

    public onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        if(!this.state.input.trim()){
            return
        }

        this.props.onSubmit(this.state.input);
        this.setState({
            input: ""
        })
    }

    public onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            input: e.currentTarget.value,
        })
    }
}

export default AddTodoButton;