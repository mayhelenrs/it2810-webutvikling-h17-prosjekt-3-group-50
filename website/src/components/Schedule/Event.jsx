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

    onTitleChange({target}) {
        this.setState({eventTitle: target.value, eventDescription: this.state.eventDescription});
    }

    onDescriptionChange({target}) {
        this.setState({eventTitle: this.state.eventTitle, eventDescription: target.value});
    }

    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state);
    }

    componentDidMount() {
        LocalStorage.loadToState(this.getSaveName(), this);
    }

    getSaveName() {
        return "" + this.props.day + this.props.slotId + this.props.id;
    }
}