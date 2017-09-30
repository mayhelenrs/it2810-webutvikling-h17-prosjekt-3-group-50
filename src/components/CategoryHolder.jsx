import React from 'react';
import '../assets/styles/Component.css';
import {Category} from '../components/Category.jsx';

export class CategoryHolder extends React.Component {

    constructor() {
        super();
        this.selectElement = this.selectCategory.bind(this);
        this.state = {
            categories: [this.generateCategory(), this.generateCategory(), this.generateCategory(),
                this.generateCategory()],
            selectedCategory: undefined
        };
    }

    render() {
        return (
            <div className="NoteHolder">
                <div className="Notes">
                    {this.state.categories}
                </div>
            </div>
        );
    }

    generateCategory() {
        return <Category selectElement={this.selectElement}/>
    }

    selectCategory(element) {
        if (this.state.selectedCategory !== undefined && this.state.selectedCategory !== element)
            this.state.selectedCategory.setState({selected: false});
        this.setState({
            selectedCategory: element
        });
    }

    /*addCategory() {
        this.setState(update(this.state.categories, {$push: [<Category/>]}))
    }*/

}
