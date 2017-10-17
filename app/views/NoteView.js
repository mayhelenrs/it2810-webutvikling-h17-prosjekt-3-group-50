import React from 'react';
import NoteContainer from '../components/notes/NoteContainer';
import Categories from '../components/categories/Categories';

export default class NoteView extends React.Component {

    static navigationOptions = {
        title: 'NoteView'
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
            <Categories filter={() => this.noteContainer.filter()}>
                {this.state.noteContainer}
            </Categories>
        );
    }
}




