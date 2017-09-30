import React from 'react';
import '../assets/styles/NoteView.css';
import update from 'react-addons-update'
import {NoteHolder} from '../components/NoteHolder.jsx'
import {CategoryHolder} from "../components/CategoryHolder";
import {CategoryCreatorHolder} from "../components/CategoryCreatorHolder";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.filterNotes = this.filterNotes.bind(this);
        this.state = {
            noteHolder: <NoteHolder ref={instance => {this.noteHolder = instance}} filterNotes={this.filterNotes}/>,
            categoryHolder: <CategoryHolder ref={instance => {this.categoryHolder = instance}} filterNotes={this.filterNotes}/>,
            createCategoryHolder: <CategoryCreatorHolder ref={instance => {this.createCategoryHolder = instance}}/>
        }
    }

    render() {
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <p>This is your notes for now</p>
                    <div>
                        {this.state.categoryHolder}
                    </div>
                    <div className="Middle-Page">
                        {this.state.noteHolder}
                    </div>
                    <div className="AddNote">
                        <button onClick={() => this.appendNote()}>Add</button>
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.createCategoryHolder}
                    <div className={"AddCategory"}>
                        <button onClick={() => this.appendCategory()}>Add</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.filterNotes();
    }

    filterNotes() {
        if (this.categoryHolder !== undefined && this.categoryHolder.state.selectedCategory !== undefined) {
            const notes = [];
            for (let i = 0; i < this.noteHolder.state.notes.length; i++) {
                if (this.noteHolder.state.notes[i].props.color === this.categoryHolder.state.selectedCategory.props.color)
                    notes.push(this.noteHolder.state.notes[i]);
            }
            this.noteHolder.setState({displayedNotes: notes});
        } else {
            this.noteHolder.setState({displayedNotes: this.noteHolder.state.notes})
        }
    }

    appendNote() {
        if (this.categoryHolder.state.selectedCategory !== undefined) {
            this.noteHolder.appendNote(this.categoryHolder.state.selectedCategory.props.color);
        } else {
            alert("No category has been selected!");
        }
    }

    appendCategory() {
        this.createCategoryHolder.setState({
            categories: update(this.createCategoryHolder.state.categories, {$push: [this.createCategoryHolder.generateCategory()]})
        },
            () => this.categoryHolder.appendCategory(this.createCategoryHolder.state.categories[this.createCategoryHolder.state.categories.length - 1].props.color)
        );
    }
}
