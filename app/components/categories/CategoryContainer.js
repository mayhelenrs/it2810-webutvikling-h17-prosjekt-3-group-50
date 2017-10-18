import React from 'react';
import Category from "./Category";
import {Button} from 'react-native-elements';
import {ScrollView, View, Text, StyleSheet, AsyncStorage} from 'react-native';
import update from 'react-addons-update';

export default class CategoryContainer extends React.Component {


    constructor(props) {
        super(props);
        this.categoryCount = 0;
        this.colors = ["#016D91", "#E53F6F", "#686868", "#F56376"];
        this.colorIndex = 0;
        this.state = {
            categories: [this.generateCategory("School"), this.generateCategory("Home")]
        };
        //If the component has not been saved before, save it
        AsyncStorage.getItem("Categories" + this.props.id).then((data) => {
            if (data === null) {
                this.save();
                this.load();
            }
        }).catch((ex) => {

        });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        return (
            <ScrollView style={styles.CategoryCreatorHolder}>
                <Text style={{fontFamily: 'IntroRust', fontSize: 20}}>Categories</Text>
                {this.state.categories}
                <View style={styles.AddCategory}>
                    <Button
                        onPress={() => this.appendCategory()}
                        title='ADD'
                        fontFamily={'IntroRust'}
                        backgroundColor="#4CAF50"
                    />
                </View>
            </ScrollView>
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
                this.save();
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

    //Saves the stored category ids and colors
    save() {
        try {
            AsyncStorage.setItem("Categories" + this.props.id, JSON.stringify(this.state.categories.map((category) => [category.props.color, category.props.id])));
        } catch (error) {

        }
    }

    //Loads the saved category ids/colors and adds it to the category list
    load() {
        AsyncStorage.getItem("Categories" + this.props.id).then((data) => {
            let categories = [];
            if (data !== null && data !== undefined) {
                JSON.parse(data).forEach((data) => {
                    categories.push(this.generateCategoryWithId(null, data[1], data[0]));
                    this.categoryCount = data[1] + 1;
                    this.colorIndex++;
                });
                this.setState((prevState) => {
                    return {...prevState, categories: categories};
                }, () => this.props.updateCategoryFilter(this.state.categories.map(category => {
                    return category.props.color;
                })));
            }
        }).catch((ex) => {

        });
    }


}

const styles = StyleSheet.create({
    AddCategory: {
        marginTop: 10,
    },
    CategoryCreatorHolder: {
        flex: 1,
    },
    Category: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    AddButton: {
        backgroundColor: '#3Cb54C',
        color: 'white',
        fontSize: 18,
    },
});
