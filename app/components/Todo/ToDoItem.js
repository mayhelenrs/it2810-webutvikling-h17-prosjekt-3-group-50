import React from 'react';
import {Text, View} from 'react-native';
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
        console.log("I was clicked first");
        this.setState({checked: !this.state.checked});

    }
    render() {
        console.log(this.props.value);
        console.log(this.props.index);


        return (

            <View key={this.props.index}>

                <View style={{backgroundColor: 'red' }}/>
                <CheckBox
                    center
                    title={this.props.value}
                    key={this.props.index}
                    checked={this.state.checked}
                    onPress={() => {
                        this.handleClick();
                        this.props.onClick();
                    }}
                />
                <Text>
                    {this.props.value}
                </Text>

            </View>
        );
    }
}
