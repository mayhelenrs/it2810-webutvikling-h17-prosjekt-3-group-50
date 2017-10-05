import React from 'react';
import '../Categories/Categories.css';
import {Category} from "./Category";
import update from 'react-addons-update';

export class CategoryContainer extends React.Component {


    constructor(props) {
        super(props);
        this.categoryCount = 0;
        this.colors = ["#016D91", "#E53F6F", "#686868", "#F56376"];
        this.colorIndex = 0;
        this.state = {
            categories: [this.generateCategory("School"), this.generateCategory("Home")]
        };
    }

    componentDidUpdate() {
        this.save();
    }

    //When the component is finished mounting it adds the stored categories to its list
    componentDidMount() {
        const categories = [];
        const categoryIds = this.load();
        if (categoryIds !== null) {
            categoryIds.forEach(id => {
                const category = JSON.parse(localStorage.getItem("Category" + id + "-" + this.props.id));
                categories.push(this.generateCategoryWithId(category.text, id, category.color));
                this.categoryCount = id + 1; //To ensure unique key and ids
            });
            this.colorIndex = categoryIds.length;
            this.setState(prevState => {
               return {...prevState, categories: categories}
            }, () => this.props.updateCategoryFilter(this.state.categories.map(category => {
                return category.props.color;
            })));
        }
        this.save();
    }

    render() {
        return (
            <div className="CategoryCreatorHolder">
                <p>Categories</p>
                {this.state.categories}
                <div className={"AddCategory"}>
                    <button className="add-button" onClick={() => this.appendCategory()}>Add</button>
                </div>
            </div>
        );
    }

    //Appends a new category to the createCategoryContainer, the callback updates the categoryContainer
    //to add the category to the filter
    appendCategory() {
        this.setState(prevState => {
                return {...prevState, categories: update(this.state.categories,
                    {$push: [this.generateCategory("New category")]})};
            },
            () => {
                this.props.updateCategoryFilter([this.state.categories[this.state.categories.length - 1].props.color]);
            }
        );
    }

    getNextColor() {
        if (this.colorIndex >= this.colors.length)
            return this.randomColor();
        const color = this.colors[this.colorIndex];
        this.colorIndex++;
        return color;
    }

    randomColor() {
        return "rgb(" + this.random(255) + ", " + this.random(255) + ", " + this.random(255) + ")";
    }

    random(range) {
        return Math.floor(Math.random() * range);
    }

    generateCategoryWithId(text, id, color) {
        return <Category text={text} color={color} parentId={this.props.id} key={id} id={id}/>
    }

    generateCategory(text) {
        const id = this.categoryCount++;
        return this.generateCategoryWithId(text, id, this.getNextColor());
    }

    //Saves the IDs for the notes in the container
    save() {
        if (this.state.categories.length === 0)
            localStorage.removeItem("CategoryIds" + this.props.id);
        else
            localStorage.setItem("CategoryIds" + this.props.id, this.state.categories.map(category => {
                return category.props.id
            }));
    }

    //Loads the ids for the notes in the container
    load() {
        if ("CategoryIds" + this.props.id in localStorage)
            return localStorage.getItem("CategoryIds" + this.props.id).split(",").map((id) => {
                return parseInt(id, 10);
            });
        return null;
    }

}
