import React from 'react';
import '../assets/styles/NoteView.css';
import update from 'react-addons-update'
import {NoteContainer} from '../components/Notes/NoteContainer.jsx'
import {CategoryContainer} from "../components/Notes/CategoryContainer";
import {CategoryFilterContainer} from "../components/Notes/CategoryFilterContainer";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        this.filterNotes = this.filterNotes.bind(this);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {this.noteContainer = instance}} filterNotes={this.filterNotes}/>,
            categoryFilterContainer: <CategoryFilterContainer ref={instance => {this.categoryFilterContainer = instance}} filterNotes={this.filterNotes}/>,
            categoryContainer: <CategoryContainer ref={instance => {this.categoryContainer = instance}}/>
        }
    }

    render() {
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <p>This is your notes for now</p>
                    <div>
                        {this.state.categoryFilterContainer}
                    </div>
                    <div className="Middle-Page">
                        {this.state.noteContainer}
                    </div>
                    <div className="AddNote">
                        <button onClick={() => this.appendNote()}>Add</button>
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.categoryContainer}
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
        const selectedCategory = this.categoryFilterContainer.state.selectedCategory;
        this.noteContainer.setState({displayedNotes: this.getFilteredNotes(selectedCategory)});
    }

    getFilteredNotes(filter) {
        if (filter !== undefined) {
            const notes = [];
            this.noteContainer.state.notes.forEach((note) =>  {
                if (note.props.color === filter.props.color) {
                    notes.push(note);
                }
            });
            return notes;
        }
        return update(this.noteContainer.state.notes, {$push: []});
    }

    appendNote() {
        if (this.categoryFilterContainer.state.selectedCategory !== undefined) {
            this.noteContainer.appendNote(this.categoryFilterContainer.state.selectedCategory.props.color);
        } else {
            alert("No category has been selected!");
        }
    }

    //Appends a new category to the createCategoryContainer, the callback updates the categoryContainer
    //to add the category to the filter
    appendCategory() {
        this.categoryContainer.setState({
            categories: update(this.categoryContainer.state.categories, {$push: [this.categoryContainer.generateCategory("New category")]})
        },
            () => this.categoryFilterContainer.appendCategory(this.categoryContainer.state.categories[this.categoryContainer.state.categories.length - 1].props.color)
        );
    }
}
