import React from 'react';
import '../assets/styles/Component.css';

export class NoteAdder extends React.Component {
    render() {
        return (
            <div className="NoteAdder">
                <img src={"public/add_button.png"} alt={"Add button"}/>
            </div>
        );
    }
}