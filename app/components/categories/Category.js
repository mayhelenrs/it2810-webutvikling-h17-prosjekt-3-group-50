import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


export default class Category extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            color: props.color,
            text: props.text
        }
    }

    onInputChange(text) {
        this.setState(prevState => {
            return {...prevState, text: text};
        });
    }

    render() {
        return (
            <View style={styles.Category}>
                <View style={[styles.CategoryColor, {backgroundColor: '' + this.state.color}]}/>
                <View style={styles.CategoryInput}>
                    <TextInput style={styles.CategoryInput} onChangeText={this.onInputChange} value={this.state.text}/>
                </View>
            </View>
        );
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
