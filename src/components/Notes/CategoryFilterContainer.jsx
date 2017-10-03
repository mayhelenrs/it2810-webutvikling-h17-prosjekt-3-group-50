import React from 'react';
import './Notes.css';
import {CategoryFilter} from './CategoryFilter.jsx';
import update from 'react-addons-update';

export class CategoryFilterContainer extends React.Component {

    constructor() {
        super();
        this.categoryCount = 0;
        this.selectCategory = this.selectCategory.bind(this);
        this.state = {
            categories: [this.generateCategory("#016D91"), this.generateCategory("#E53F6F"), this.generateCategory("#686868"),
                this.generateCategory("#F56376")],
            selectedCategory: undefined
        };
    }

    render() {
        return (
            <div className="NoteHolder">
                <p><orange>Categories</orange> - Select to filter your notes and add new ones!</p>
                <div className="Notes">
                    {this.state.categories}
                </div>
            </div>
        );
    }

    generateCategory(color) {
        return <CategoryFilter selectCategory={this.selectCategory} key={this.categoryCount++} color={color}/>;
    }

    selectCategory(element) {
        const selectedCategory = this.state.selectedCategory;

        if (selectedCategory !== undefined && selectedCategory !== element)
            this.state.selectedCategory.toggleElement();

        this.setState((prevState) => {
            return {selectedCategory: (prevState.selectedCategory === element ? undefined : element)};
        }, () => this.props.filterNotes());
    }

    appendCategory(color) {
        this.setState((prevState) => {
            return {categories: update(prevState.categories, {$push: [this.generateCategory(color)]})};
        });
    }

}
