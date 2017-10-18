import React from 'react';
import {AsyncStorage, StyleSheet, TextInput, View} from 'react-native';


export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            color: props.color,
            text: props.text
        };

        //If the component has not been saved before, save it
        AsyncStorage.getItem("Category" + this.props.id + "-" + this.props.parentId).then((data) => {
            if (data === null) {
                this.save();
            }
        }).catch((ex) => {

        });
    }

    //Will load the state of the component right before its mounted
    componentDidMount() {
        this.load();
    }

    //Input listener that updates the text written in the category name filed
    onInputChange(text) {
        this.setState(prevState => {
            return {...prevState, text: text};
        }, () => this.save());
    }

    render() {
        return (
            <View style={styles.Category}>
                <View style={[styles.CategoryColor, {backgroundColor: '' + this.state.color}]}/>
                <View style={styles.CategoryInput}>
                    <TextInput style={[styles.CategoryInput, {fontFamily: 'IntroRust'}]}
                               onChangeText={this.onInputChange} value={this.state.text}/>
                </View>
            </View>
        );
    }

    //Saves the category
    save() {
        try {
            AsyncStorage.setItem("Category" + this.props.id + "-" + this.props.parentId, JSON.stringify(this.state));
        } catch (error) {
        }
    }

    //Loads the past category state
    load() {
        AsyncStorage.getItem("Category" + this.props.id + "-" + this.props.parentId).then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState(() => {
                    return data;
                });
            }
        }).catch((ex) => {

        });
    }

}

const styles = StyleSheet.create({
    CategoryColor: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 1)',
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
