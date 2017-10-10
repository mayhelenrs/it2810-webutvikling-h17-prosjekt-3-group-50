import React from 'react';
import {CategoryItem} from './Items.jsx';

export class Category extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currently: "",
            category: ['School', 'Home', 'Shopping', 'Other'],
            colors: ['rgb(43, 186, 178)', 'rgb(241, 167, 170)', 'rgb(236, 154, 44)', 'rgb(15, 110, 143)']
        };
        this.handleClicks = this.handleClicks.bind(this);
    }

    handleClicks(index) {
        this.setState({currently: this.state.category[index]});
        this.props.handleCategory(this.state.colors[index]);

    }

    renderCategoryItems() {
        return this.state.category.map((category, index) =>
            <CategoryItem className="items" value={category} color={this.state.colors[index]}
            key={index} onClick={() => this.handleClicks(index)}/>
        );
    }

    render(){
        console.log(this.state.currently);
        return (
            <div className="Body">
                <div id="category-list">
                    <h1 id="titleCategory">Categories</h1>
                    <ul id="category-holder">
                        {this.renderCategoryItems()}
                    </ul>
                </div>
            </div>
        );
    }

}