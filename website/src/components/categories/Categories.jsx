import React from 'react';
import {CategoryContainer} from "./CategoryContainer";
import {CategoryFilterContainer} from "./CategoryFilterContainer";
import {Pagetext} from "../Pagetext";

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

    //Filters the component its wrapping once it is mounted
    componentDidMount() {
        this.props.filter();
    }

    render() {
        //Clones the element and adds a function prop that returns the selected category color
        //This way the wrapped component can filter based on the selected category color
        const child = React.cloneElement(this.props.children,
            {selectedColor: this.getSelectedColor}
        );
        return (
            <div className="NoteView">
                <div className={"Left-Page"}>
                    <div className="Left-Page-Container">
                        <Pagetext text={"This is your " + this.props.title + " for now"}/>
                        <div>
                            {this.state.categoryFilterContainer}
                        </div>
                        <div className="Middle-Page">
                            {child}
                        </div>
                    </div>
                </div>
                <div className="Right-Page">
                    {this.state.categoryContainer}
                </div>
            </div>
        );
    }

    /**
     * Returns the selected color in the category filter. This function will be passed down to the component
     * wrapped by this class
     * @returns {string}
     */
    getSelectedColor() {
        const selectedCategory = this.categoryFilterContainer.state.selectedCategory;
        return selectedCategory === undefined ? selectedCategory : selectedCategory.props.color;
    }

    /**
     * Will add new colors to the category filter. Since its a dumb component this function
     * has to tell it whenever a new category has been added
     * @param colors
     */
    updateCategoryFilter(colors) {
        this.categoryFilterContainer.addCategories(colors);
    }

}
