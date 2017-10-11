import React from 'react';
import '../assets/styles/NoteView.css';
import {NoteContainer} from '../components/notes/NoteContainer.jsx'
import {CategoryContainer} from "../components/categories/CategoryContainer";
import {CategoryFilterContainer} from "../components/categories/CategoryFilterContainer";

export class NoteView extends React.Component {

    constructor(props) {
        super(props);
        //This method needs to be bound for it to filter
        this.filter = this.filter.bind(this);
        //This function is required in order to update the categoryFilter once we have added
        //A new category
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {
                this.noteContainer = instance
            }} filterNotes={this.filter}/>,

            categoryFilterContainer: <CategoryFilterContainer ref={instance => {
                this.categoryFilterContainer = instance
            }} filterItems={this.filter}/>,

            //Category saving is determined by the ID, so the ID needs to be unique
            categoryContainer: <CategoryContainer
                updateCategoryFilter={this.updateCategoryFilter} id={6}/>
        }
    }

    componentDidMount() {
        this.filter();
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
                        <button className="add-button" onClick={() => this.appendNote()}>Add note</button>
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.categoryContainer}
                </div>
            </div>
        );
    }


    filter() {
        const selectedCategory = this.categoryFilterContainer.state.selectedCategory;
        this.noteContainer.setState(prevState => {
            return {...prevState, displayedNotes: this.getFilteredNotes(selectedCategory)}
        });
    }

    getFilteredNotes(filter) {
        if (filter !== undefined)
            return this.noteContainer.state.notes.filter((note) => note.props.color === filter.props.color);
        return this.noteContainer.state.notes;
    }


    appendNote() {
        if (this.categoryFilterContainer.state.selectedCategory !== undefined) {
            this.noteContainer.appendNote(this.categoryFilterContainer.state.selectedCategory.props.color);
        } else {
            alert("No category has been selected!");
        }
    }

    //Since our CategoryFilter is a 100% dumb component we load it from the CategoryContainer component
    updateCategoryFilter(colors) {
        this.categoryFilterContainer.addCategories(colors);
    }

}
