import React from 'react';
import '../assets/styles/Component.css';
import {Category} from '../components/Category.jsx';

export class CategoryHolder extends React.Component {

    constructor() {
        super();
        this.selectElement = this.selectCategory.bind(this);
        this.state = {
            categories: [<Category />, <Category/>, <Category/>, <Category/>],
            selectedCategory: ''
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

    selectCategory(element) {
        this.setState({
            selectedCategory: element
        });
    }

}
