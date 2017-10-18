import React from 'react';
import '../assets/styles/NoteView.css';
import {NoteContainer} from '../components/notes/NoteContainer.jsx'
import {Categories} from "../components/categories/Categories";
import {Navbar} from "../components/Navbar";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {
                this.noteContainer = instance
            }}/>
        }
    }

    render() {
        return (
            <div className="body-fullwidth">
                <Navbar navbarLocation={"NOTES"} navbarImage={require("../assets/images/navbar_leftarrow.png")}/>
                <Categories id={1} title={"notes"} filter={() => this.noteContainer.filter()}>
                    {this.state.noteContainer}
                </Categories>
            </div>
        );
    }

}
