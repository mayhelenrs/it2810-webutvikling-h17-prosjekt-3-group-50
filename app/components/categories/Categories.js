import React from 'react';
import CategoryContainer from "./CategoryContainer";
import CategoryFilterContainer from "./CategoryFilterContainer";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);
        this.getSelectedColor = this.getSelectedColor.bind(this);
        this.state = {
            categoryFilterContainer: <CategoryFilterContainer ref={instance => {
                this.categoryFilterContainer = instance
            }} filter={this.props.filter}/>,
            categoryContainer: <CategoryContainer filter={this.props.filter} updateCategoryFilter={this.updateCategoryFilter} id={this.props.id}/>
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
            <ScrollView style={styles.View}>
                <View style={styles.Categories}>
                    <Text style={{fontSize: 20, fontFamily: 'IntroRust'}}>This is your categories for now</Text>
                    <View style={styles.MarginTop}>
                        {this.state.categoryFilterContainer}
                    </View>
                    <View style={styles.MarginTop}>
                        {child}
                    </View>
                    {this.state.categoryContainer}
                </View>
            </ScrollView>
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

const styles = StyleSheet.create({
    MarginTop: {
        marginTop: 20,
    },
    View: {
        margin: 10,

    },
    Categories: {
        flexDirection: 'column',
    },
    Category: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    CategoryInput: {
        height: 40,
        width: '70%',
        marginLeft: 3,
    },
});
