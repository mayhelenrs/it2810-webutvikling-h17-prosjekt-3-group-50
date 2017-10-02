import React from 'react';
import '../assets/styles/NoteView.css';
import update from 'react-addons-update'
import {NoteContainer} from '../components/Notes/NoteContainer.jsx'
import {CategoryContainer} from "../components/Notes/CategoryContainer";
import {CategoryCreatorContainer} from "../components/Notes/CategoryCreatorContainer";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.filterNotes = this.filterNotes.bind(this);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {this.noteContainer = instance}} filterNotes={this.filterNotes}/>,
            categoryContainer: <CategoryContainer ref={instance => {this.categoryContainer = instance}} filterNotes={this.filterNotes}/>,
            createCategoryContainer: <CategoryCreatorContainer ref={instance => {this.createCategoryContainer = instance}}/>
        }
    }

    render() {
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <p>This is your notes for now</p>
                    <div>
                        {this.state.categoryContainer}
                    </div>
                    <div className="Middle-Page">
                        {this.state.noteContainer}
                    </div>
                    <div className="AddNote">
                        <button className="add-button" onClick={() => this.appendNote()}>Add</button>
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.createCategoryContainer}
                    <div className={"AddCategory"}>
                        <button className="add-button" onClick={() => this.appendCategory()}>Add</button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.filterNotes();
    }

    filterNotes() {
        if (this.categoryContainer !== undefined && this.categoryContainer.state.selectedCategory !== undefined) {
            const notes = [];
            for (let i = 0; i < this.noteContainer.state.notes.length; i++) {
                if (this.noteContainer.state.notes[i].props.color === this.categoryContainer.state.selectedCategory.props.color)
                    notes.push(this.noteContainer.state.notes[i]);
            }
            this.noteContainer.setState({displayedNotes: notes});
        } else {
            this.noteContainer.setState({displayedNotes: this.noteContainer.state.notes})
        }
    }

    appendNote() {
        if (this.categoryContainer.state.selectedCategory !== undefined) {
            this.noteContainer.appendNote(this.categoryContainer.state.selectedCategory.props.color);
        } else {
            alert("No category has been selected!");
        }
    }

    appendCategory() {
        this.createCategoryContainer.setState({
            categories: update(this.createCategoryContainer.state.categories, {$push: [this.createCategoryContainer.generateCategory("New category")]})
        },
            () => this.categoryContainer.appendCategory(this.createCategoryContainer.state.categories[this.createCategoryContainer.state.categories.length - 1].props.color)
        );
    }
}
