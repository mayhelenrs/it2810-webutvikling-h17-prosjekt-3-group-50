import React from 'react';
import {CategoryContainer} from "./CategoryContainer";
import {CategoryFilterContainer} from "./CategoryFilterContainer";

export class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);
        this.getSelectedColor = this.getSelectedColor.bind(this);
        this.state = {
            categoryFilterContainer: <CategoryFilterContainer ref={instance => {
                this.categoryFilterContainer = instance
            }} filter={this.props.filter}/>,
            categoryContainer: <CategoryContainer updateCategoryFilter={this.updateCategoryFilter} id={this.props.id}/>
        }
    }

    componentDidMount() {
        this.props.filter();
    }

    render() {
        const child = React.cloneElement(this.props.children,
            {selectedColor: this.getSelectedColor}
        );
        return (
            <div className="NoteView">
                <div className="Left-Page">
                    <p>This is your TODO for now</p>
                    <div>
                        {this.state.categoryFilterContainer}
                    </div>
                    <div className="Middle-Page">
                        {child}
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.categoryContainer}
                </div>
            </div>
        );
    }

    getSelectedColor() {
        const selectedCategory = this.categoryFilterContainer.state.selectedCategory;
        return selectedCategory === undefined ? selectedCategory : selectedCategory.props.color;
    }

    //Since our CategoryFilter is a 100% dumb component we load it from the CategoryContainer component
    updateCategoryFilter(colors) {
        this.categoryFilterContainer.addCategories(colors);
    }

}
