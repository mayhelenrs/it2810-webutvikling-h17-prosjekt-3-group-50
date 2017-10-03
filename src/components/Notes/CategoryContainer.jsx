import React from 'react';
import './Notes.css';
import {CategoryFilter} from './CategoryFilter.jsx';
import update from 'react-addons-update';

export class CategoryContainer extends React.Component {

    constructor() {
        super();
        this.categoryCount = 0;
        this.selectElement = this.selectCategory.bind(this);
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
        return <CategoryFilter selectElement={this.selectElement} key={this.categoryCount++} color={color}/>;
    }

    selectCategory(element) {
        if (this.state.selectedCategory !== undefined)
            this.state.selectedCategory.setState({selected: false});
        this.setState({
            selectedCategory: (this.state.selectedCategory === element ? undefined : element)
        }, () => this.props.filterNotes());
    }

    appendCategory(color) {
        this.setState({
            categories: update(this.state.categories, {$push: [this.generateCategory(color)]})
        });
    }

}
