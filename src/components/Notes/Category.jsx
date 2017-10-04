import React from 'react';
import './Notes.css';

export class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            color: props.color,
            text: props.text
        }
    }

    componentDidMount() {
        const data = this.load();
        if (data != null) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    color: data.color,
                    text: data.text
                }
            });
        }
        this.save();
    }

    componentDidUpdate() {
        this.save();
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
                    <input className={"CategoryName"} onChange={this.onInputChange} value={this.state.text}/>
                </div>
            </div>
        );
    }

    save() {
        localStorage.setItem("Category" + this.props.id, JSON.stringify(this.state));
    }

    load() {
        return "Category" + this.props.id in localStorage
            ? JSON.parse(localStorage.getItem("Category" + this.props.id))
            : null;
    }

}