import React from 'react';
import '../../assets/styles/Categories.css';
import {CategoryFilter} from './CategoryFilter.jsx';
import update from 'react-addons-update';

export class CategoryFilterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.categoryCount = 0;
        this.selectCategory = this.selectCategory.bind(this);
        this.state = {
            categories: [],
            selectedCategory: undefined
        };
    }

    render() {
        return (
            <div className="FlexContainer">
                <p>
                    <orange>CATEGORIES </orange>
                    - SELECT TO FILTER YOUR {this.props.title.toUpperCase()} AND ADD NEW ONES!
                </p>
                <div className="FlexContent">
                    {this.state.categories}
                </div>
            </div>
        );
    }


    generateCategory(color) {
        return <CategoryFilter selectCategory={this.selectCategory} key={this.categoryCount++} color={color}/>;
    }

    //Selectes the given category and unselects the previously selected category
    selectCategory(element) {
        const selectedCategory = this.state.selectedCategory;

        if (selectedCategory !== undefined && selectedCategory !== element)
            this.state.selectedCategory.toggleElement();

        this.setState(prevState => {
            return {...prevState, selectedCategory: (prevState.selectedCategory === element ? undefined : element)};
        }, () => this.props.filter());
    }

    /**
     * Appends a new category with the provided color
     * @param color
     */
    appendCategory(color) {
        this.setState(prevState => {
            return {...prevState, categories: update(prevState.categories, {$push: [this.generateCategory(color)]})};
        });
    }

    /**
     * A function used to add new colors to the category filter
     * This function is called interally by the Categories component whenever a new category is added
     * @param colors
     */
    addCategories(colors) {
        const categoryList = colors.map(color => this.generateCategory(color));
        this.setState(prevState => {
            return {
                ...prevState,
                categories: update(this.state.categories, {$push: categoryList})
            };
        });
    }

}
