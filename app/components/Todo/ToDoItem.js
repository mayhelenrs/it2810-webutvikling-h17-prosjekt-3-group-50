import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({checked: !this.state.checked});
    }
    render() {

        return (

            <View key={this.props.index} style={styles.itemTodo}>

                <View style={styles.categoryColorTodo}/>
                <CheckBox
                    center
                    title={this.props.value}
                    key={this.props.index}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {
                        this.handleClick();
                        this.props.onClick();
                    }}
                    containerStyle={styles.checkboxTodo}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    categoryColorTodo: {
        height: '100%',
        width: '15%',
        margin: 0,
        padding: 0,
        backgroundColor: 'lightblue',
    },
    checkboxTodo: {
        width: '100%',
        height:'100%',
        borderRadius: 0,
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: 'white',


    },
    itemTodo: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'grey',
        shadowOpacity: 0.5,


    }
});