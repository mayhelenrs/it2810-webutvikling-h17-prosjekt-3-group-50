import React from 'react';
import CategoryContainer from "./CategoryContainer";
import CategoryFilterContainer from "./CategoryFilterContainer";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);
        this.getSelectedColor = this.getSelectedColor.bind(this);
        this.state = {
            categoryFilterContainer: <CategoryFilterContainer ref={instance => {
                this.categoryFilterContainer = instance
            }} filterNotes={this.props.filter}/>,
            categoryContainer: <CategoryContainer updateCategoryFilter={this.updateCategoryFilter} id={this.props.id}/>
        }
    }

    componentDidMount() {
        this.props.filter();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.Categories}>
                    <Text>This is your TODO for now</Text>
                    {this.state.categoryFilterContainer}
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
    Categories: {
        flex: 1,
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
