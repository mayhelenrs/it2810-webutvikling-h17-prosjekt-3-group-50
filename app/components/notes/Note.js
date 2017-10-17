import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, AsyncStorage, TextInput} from 'react-native';

export default class Note extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.toggleNote = this.toggleNote.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            selected: false,
            title: props.text,
            color: props.color,
            text: 'This is your note text. Click here to change!',
        };
        //Checks if the note already exists, if it doesn't it will save it
        AsyncStorage.getItem("Note" + this.props.id).then((data) => {
            if (data === null) {
                this.save();
                this.load();
            }
        }).catch((ex) => {

        });
    }

    //Loads the component right before its mounted
    componentWillMount() {
        this.load();
    }

    //Input listener for the note title field
    onInputChange(text) {
        this.setState(prevState => {
            return {...prevState, title: text};
        }, () => this.save());
    }

    //Input listener for the note text field
    onTextChange(text) {
        this.setState(prevState => {
            return {...prevState, text: text};
        }, () => this.save());
    }

    render() {
        if (this.state.selected)
            return (
                <View style={[styles.Note, {backgroundColor: this.state.color}]}>
                    <View style={styles.RemoveNote}>
                        <View style={styles.Title}>
                            <TouchableOpacity onPress={() => this.toggleNote()}>
                                <Image style={styles.BackButton} onClick={() => {
                                    this.removeNote()
                                }} alt={'Remove'}
                                       source={require('../../assets/images/arrow_right.png')}/>
                            </TouchableOpacity>
                            <TextInput style={styles.TitleInput} onChangeText={this.onInputChange}
                                       value={this.state.title}
                                       underlineColorAndroid={'rgba(0, 0, 0, 0)'}/>
                        </View>
                        <TextInput style={styles.TextInput} onChangeText={this.onTextChange} value={this.state.text}
                                   underlineColorAndroid={'rgba(0, 0, 0, 0)'} multiline={true} numberOfLines={10}
                                   blurOnSubmit={false}/>
                    </View>
                </View>
            );
        return (
            <View style={[styles.Note, {backgroundColor: this.state.color}]}>
                <View style={styles.RemoveNote}>
                    <TouchableOpacity onPress={() => this.removeNote()}>
                        <Image onClick={() => {
                            this.removeNote()
                        }} alt={'Remove'}
                               source={require('../../assets/images/close.png')}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                    this.toggleNote();
                }}>
                    <View style={styles.NoteContent}>
                        <View style={styles.NoteIcon} className="NoteIcon">
                            <Image style={styles.NoteImage} alt={'Remove'}
                                   source={require('../../assets/images/notes.png')}/>
                        </View>
                        <View style={styles.NoteName}>
                            <Text style={styles.TitleText}>{this.state.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    //Removes the note from its container and localstorage
    removeNote() {
        this.props.handleRemove(this);
        AsyncStorage.removeItem("Note" + this.props.id);
    }

    //Updates the title of the note
    updateTitle(title) {
        this.setState(prevState => {
            return {...prevState, title: title};
        });
    }

    //Toggles the selected state of the note
    toggleNote() {
        this.setState(prevState => {
            return {...prevState, selected: !prevState.selected};
        });
    }

    //Function for saving the state of the note
    save() {
        try {
            //We create this object to make sure it saves as unselected
            //This way it won't be open next time we reload the note
            let state = Object.assign({}, this.state, {selected: false});
            AsyncStorage.setItem("Note" + this.props.id, JSON.stringify(state));
        } catch (error) {

        }
    }

    //Function for loading the state of the enote
    load() {
        AsyncStorage.getItem("Note" + this.props.id).then((data) => {
            if (data !== null) {
                data = JSON.parse(data);
                this.setState(() => {
                    return data;
                }, () => this.filter());
            }
        }).catch((ex) => {

        });
    }
}

const styles = StyleSheet.create({
    TitleInput: {
        color: 'white',
        fontSize: 20,
        width: '100%',
        marginLeft: 15,
    },
    TextInput: {
        color: 'white',
        fontSize: 15,
        width: '100%',
        height: '100%',
        textAlignVertical: 'top',
        marginTop: 10,
    },
    TitleText: {
        fontSize: 20,
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
    },
    Title: {
        flexDirection: 'row',
    },
    Absolute: {
        top: 0,
        bottom: 0,
        height: 0,
        width: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    NoteName: {
        marginTop: 10,
    },
    NoteImage: {},
    NoteIcon: {},
    RemoveNote: {
        margin: 10,
    },
    BackButton: {
        transform: [{rotate: '180deg'}],
        width: 30,
        height: 30,
        flex: 1,
        resizeMode: 'contain',
    },
    NoteContent: {
        alignItems: 'center',
        height: '100%',
    },
    Note: {
        width: 300,
        height: 300,
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