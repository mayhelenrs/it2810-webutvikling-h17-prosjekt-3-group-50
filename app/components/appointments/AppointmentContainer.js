import React from 'react';
import update from 'react-addons-update';
import {AppointmentItem} from './AppointmentItem.js';
import {Button} from 'react-native-elements';
import {View, TextInput, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class AppointmentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            displayList: [],
            desc: '',
            time: '',
            date: ''
        };
        this.appointmentCount = 0;
        this.handleRemove = this.removeAppointment.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.filter = this.filter.bind(this);
    }

    filter() {
        const appointList = this.props.selectedColor() === undefined
            ? this.state.list.map((item) => item)
            : this.state.list.filter((item) => item.props.color === this.props.selectedColor());
        this.setState((prevState) => {
            return {
                ...prevState,
                displayList: appointList
            }
        })
    }

    getColor() {
        const color = this.props.selectedColor();
        return color === undefined
            ? '#016D91'
            : color
    }

    formSubmit() {
        if (this.state.desc.length > 0 && this.state.time.length > 0 && this.state.date.length > 0) {
            const newList = this.state.list.slice();
            const index = newList.length;
            const newAppointment = this.generateAppointmentWithId(this.state.desc, this.state.time, this.state.date, this.getColor(), index);
            newList.push(newAppointment);
            this.setState({
                list: newList,
                desc: '',
                time: '',
                date: ''
            }, () => this.filter());

        }
    }

    generateAppointmentWithId(desc, time, date, color, id) {
        return <AppointmentItem description={desc} time={time} date={date} key={id} color={color} id={id}
                                handleRemove={this.handleRemove}/>
    }

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    removeAppointment(element) {
        this.state.list.forEach((appointment, index) => {
            if (appointment.props.id === element.props.id) {
                this.setState(prevState => {
                    return {
                        list: update(prevState.list, {
                            $splice: [
                                [index, 1]
                            ]
                        })
                    };
                }, () => this.filter());
            }
        });
    }

    render() {
        return (
            <View style={styles.AppointmentContainer}>
                <View style={styles.listWrap}>
                    {this.state.displayList}
                </View>
                <TextInput  style={styles.TextInput} name={"desc"} value={this.state.desc} placeholder={"Description"}
                            onChangeText={(text) => this.setState({desc: text})} underlineColorAndroid='rgba(0,0,0,0)'
                />
                <DatePicker style={styles.DateInput} date={this.state.date} mode="date" placeholder="Select date"
                            format="DD-MM-YYYY" confirmBtnText="Confirm" cancelBtnText="Cancel"
                            showIcon={false}
                            onDateChange={(date) => {this.setState({date: date})}}
                />
                <DatePicker style={styles.DateInput} date={this.state.time} mode="time" placeholder="Select time"
                            format="HH:mm" confirmBtnText="Confirm" cancelBtnText="Cancel" is24Hour={true}
                            onDateChange={(time) => {this.setState({time: time})}} showIcon={false}
                />
                <View style={{width: '100%'}}>
                    <Button
                        onPress={() => this.formSubmit()}
                        style={styles.button}
                        title='ADD'
                        fontFamily={'IntroRust'}
                        backgroundColor="#4CAF50"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    AppointmentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    listWrap: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    TextInput: {
        width: '90%',
        textAlign: 'center',
        height: 40,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        borderWidth: 0.5,
        marginBottom: 5,
    },
    DateInput: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        marginBottom: 5,
    }
});
