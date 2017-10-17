import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

export default class CategoryFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            selected: false
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.toggleElement();
                this.props.selectCategory(this);
            }}>
                <View style={[styles.CategoryFilter, {backgroundColor: '' + this.state.color,
                    width: (this.state.selected ? 100 : 75), height: (this.state.selected ? 100 : 75)}]}>
                    {this.state.selected}
                </View>
            </TouchableOpacity>
        );
    }

    //Toggles the selected state of the element
    toggleElement() {
        this.setState(prevState => {
            return {...prevState, selected: !prevState.selected};
        });
    }
}


const styles = StyleSheet.create({
    CategoryFilter: {
        width: 75,
        height: 75,
        margin: 10,
    },
});