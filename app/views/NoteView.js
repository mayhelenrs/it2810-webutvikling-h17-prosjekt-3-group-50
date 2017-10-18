import React from 'react';
import NoteContainer from '../components/notes/NoteContainer';
import Categories from '../components/categories/Categories';
import {ScrollView, StyleSheet} from 'react-native';

export default class NoteView extends React.Component {

    static navigationOptions = {
        title: 'NOTES',
        headerTitleStyle: {
            color: 'black',
            fontFamily: 'IntroRust'
        },
        headerStyle: {
            backgroundColor: 'white',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            noteContainer: <NoteContainer ref={instance => {
                this.noteContainer = instance
            }}/>
        };
    }

    render() {
        return (
            <ScrollView style={styles.backgroundNote}>
                <Categories id={0} filter={() => this.noteContainer.filter()}>
                    {this.state.noteContainer}
                </Categories>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    backgroundNote: {
        backgroundColor: 'white',
    },


});





