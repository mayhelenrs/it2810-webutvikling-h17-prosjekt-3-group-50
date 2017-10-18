import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

//Child of Todo.jsx
export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }


    /**
     * Updates the state with wether the checkbox is clicked or not
     */
    handleClick() {
        this.setState({checked: !this.state.checked});
    }

    render() {
        return (
            <View key={this.props.index} style={styles.itemTodo}>

                <View style={[{backgroundColor: this.props.color}, styles.categoryColorTodo]}/>
                <CheckBox
                    key={this.props.index}

                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {
                        this.handleClick();
                        this.props.onClick();
                    }}
                    fontFamily='IntroRust'
                    containerStyle={styles.checkboxTodo}
                />
                <Text style={styles.todoText}>{this.props.value}</Text>
            </View>
        );
    }
}
//Styles the elements
const styles = StyleSheet.create({
    categoryColorTodo: {
        height: '100%',
        flex: 1
    },
    checkboxTodo: {
        borderColor: 'transparent',
        height: '100%',
        backgroundColor: 'white',
        flex: 1
    },
    todoText: {
        flex: 4,
        fontFamily: 'IntroRust'
    },
    itemTodo: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'grey',
        shadowOpacity: 0.15,

    }
});
