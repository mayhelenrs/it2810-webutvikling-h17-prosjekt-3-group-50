import React from "react";
import {LocalStorage} from "../../service/LocalStorage";

export class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            eventTitle: "",
            eventDescription: ""
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    render() {
        return (
            <div className={"event"}>
                <input className={"event-title"}
                       value={this.state.eventTitle}
                       onChange={this.onTitleChange}
                />
                <input className={"event-description"}
                       value={this.state.eventDescription}
                       onChange={this.onDescriptionChange}
                />
            </div>
        )
    }

    /**
     * Updating the value of the input field "title" when user changes it
     * @param target
     */
    onTitleChange({target}) {
        this.setState({eventTitle: target.value, eventDescription: this.state.eventDescription});
    }

    /**
     * Updating the value of the input field "description" when user changes it
     * @param target
     */
    onDescriptionChange({target}) {
        this.setState({eventTitle: this.state.eventTitle, eventDescription: target.value});
    }

    // Runs each time the component updates
    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state);
    }

    // Runs when the component mounts for the frist time
    componentDidMount() {
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    // returns the key that will be searched for/saved to in local storage
    getSaveName() {
        return "" + this.props.day + this.props.slotId + this.props.id;
    }
}