import React from 'react';
import '../assets/styles/Component.css';
import {Category} from "./Category";

export class CategoryCreatorHolder extends React.Component {

    constructor() {
        super();
        this.state = {
            categories: [<Category color={"#E53F6F"}/>, <Category color={"#E53F6F"}/>, <Category color={"#E53F6F"}/>, <Category color={"#E53F6F"}/>]
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

}
