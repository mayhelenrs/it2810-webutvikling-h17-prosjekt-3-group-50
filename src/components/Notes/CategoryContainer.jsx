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
            categories: [this.generateCategory("School"), this.generateCategory("Shopping"),
                        this.generateCategory("Home"), this.generateCategory("Friends")]
        };
    }

    render() {
        return (
            <div className="CategoryCreatorHolder">
                <p>Categories</p>
                {this.state.categories}
            </div>
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

    generateCategory(text) {
        return <Category text={text} color={this.getNextColor()} key={this.categoryCount++}/>;
    }

}
