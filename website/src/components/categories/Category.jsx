import React from 'react';
import {LocalStorage} from "../../service/LocalStorage";

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            color: props.color,
            text: props.text
        }
    }

    //When the component has loaded it will load its previous state back in
    componentDidMount() {
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    //Saves the state of the component whenever it is updated
    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state);
    }

    onInputChange({target}) {
        this.setState(prevState => {
            return {...prevState, text: target.value};
        });
    }

    render() {
        return (
            <div className="Category">
                <div style={{backgroundColor: '' + this.state.color}} className={"CategoryColor"}>
                </div>
                <div>
                    <input className={"CategoryName"} spellCheck={false} onChange={this.onInputChange} value={this.state.text}/>
                </div>
            </div>
        );
    }

    getSaveName() {
        return "Category" + this.props.id + "-" + this.props.parentId;
    }

}