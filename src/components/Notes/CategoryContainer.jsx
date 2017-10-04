import React from 'react';
import './Notes.css';
import {Category} from "./Category";

export class CategoryContainer extends React.Component {


    constructor() {
        super();
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

    componentDidMount() {
        const categories = [];
        const categoryIds = this.load();
        if (categoryIds !== null) {
            categoryIds.forEach(id => {
                const category = JSON.parse(localStorage.getItem("Category" + id));
                categories.push(this.generateCategoryWithId(category.text, id, category.color));
                this.categoryCount = id + 1; //To ensure unique key and ids
            });
            this.colorIndex = categoryIds.length;
            this.setState(prevState => {
               return {...prevState, categories: categories}
            });
        }
        this.props.updateCategoryFilter(categories);
    }

    render() {
        return (
            <div className="CategoryCreatorHolder">
                <p>Categories</p>
                {this.state.categories}
            </div>
        );
    }

    appendCategory() {

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
        return <Category text={text} color={color} key={id} id={id}/>
    }

    generateCategory(text) {
        const id = this.categoryCount++;
        return this.generateCategoryWithId(text, id, this.getNextColor());
    }

    //Saves the IDs for the notes in the container
    save() {
        if (this.state.categories.length === 0)
            localStorage.removeItem("CategoryIds");
        else
            localStorage.setItem("CategoryIds", this.state.categories.map(category => {
                return category.props.id
            }));
    }

    //Loads the ids for the notes in the container
    load() {
        if ("CategoryIds" in localStorage)
            return localStorage.getItem("CategoryIds").split(",").map((id) => {
                return parseInt(id, 10);
            });
        return null;
    }

}
