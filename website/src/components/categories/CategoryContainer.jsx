import React from 'react';
import {Category} from "./Category";
import {LocalStorage} from "../../service/LocalStorage";
import update from 'react-addons-update';

export class CategoryContainer extends React.Component {


    constructor(props) {
        super(props);
        this.categoryCount = 0;
        this.colors = ["#016D91", "#E53F6F", "#686868", "#F56376"];
        this.colorIndex = 0;
        this.state = {
            categories: [this.generateCategory("Other"), this.generateCategory("School")]
        };
    }

    componentDidUpdate() {
        LocalStorage.save(this.getSaveName(), this.state.categories.map(category => {
            return category.props.id;
        }));
    }

    //Since we can't keep all the data of the notes in the container we have to
    //Use a custom loading function to parse the data in
    componentDidMount() {
        //Since we always want two categories make sure they are saved before the initial load
        if (!LocalStorage.exists(this.getSaveName())) {
            LocalStorage.save(this.getSaveName(), [0, 1]);
        }
        //Custom function that
        LocalStorage.load(this.getSaveName(), (data) => {
            let ids = data.map((id) => {
                return parseInt(id, 10);
            });
            let categories = [];
            ids.forEach(id => {
                const category = JSON.parse(localStorage.getItem("Category" + id + "-" + this.props.id));
                categories.push(this.generateCategoryWithId(category.text, id, category.color));
                this.categoryCount = id + 1; //To ensure unique key and ids
            });
            this.colorIndex = ids.length;
            this.setState(prevState => {
                return {...prevState, categories: categories}
            }, () => this.props.updateCategoryFilter(this.state.categories.map(category => {
                return category.props.color;
            })));
        });
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
                return {
                    ...prevState, categories: update(this.state.categories,
                        {$push: [this.generateCategory("New category")]})
                };
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

    getSaveName() {
        return "CategoryIds" + this.props.id;
    }

}

