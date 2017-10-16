import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NoteDisplay} from "./NoteDisplay";

export default class Note extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNote = this.toggleNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            title: props.text,
            color: this.props.color,
            noteDisplay: <NoteDisplay ref={instance => {this.noteDisplay = instance}}
                                      toggleNote={this.toggleNote}
                                      color={props.color}
                                      title={props.text}
                                      text={"Change your note text by typing it here!"}
                                      updateTitle={this.updateTitle}
                                      id={props.id}
            />
        }
    }

    render() {
        return (
            <View style={[styles.Note, {backgroundColor: this.state.color}]}>
                <View style={styles.RemoveNote}>
                    <img style={styles.RemoveButton} onClick={() => {this.removeNote()}} alt={'Remove'}
                         src={require('../../assets/img/close.png')}/>
                </View>
                <View style={styles.NoteContent} onClick={() => this.toggleNote()}>
                    <View style={styles.NoteIcon} className="NoteIcon">
                        <img style={styles.NoteImage} alt={'Remove'} src={require('../../assets/images/notes.png')}/>
                    </View>
                    <View style={styles.NoteName}>
                        <Text>{this.state.title}</Text>
                    </View>
                </View>
                {this.state.noteDisplay}
            </View>
        );
    }

    removeNote() {
        //this.props.handleRemove(this);
        //localStorage.removeItem("Note" + this.props.id);
        //localStorage.removeItem("NoteDisplay" + this.props.id);
    }

    updateTitle(title) {
        this.setState(prevState => {
            return {...prevState, title: title};
        });
    }

    toggleNote() {
        this.noteDisplay.setState(prevState => {
            return {...prevState, color: prevState.color, width: prevState.width === 400 ? 0 : 400, height: prevState.height === 400 ? 0 : 400};
        });
    }
}

const styles = StyleSheet.create({
    Note: {
        width: 140,
        height: 140,
        margin: 10,
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