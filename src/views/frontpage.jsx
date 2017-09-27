import React from 'react';
import '../assets/styles/App.css';
import {Header} from '../components/Header.jsx'
//import {NoteHolder} from '../components/NoteHolder.jsx'

export class Frontpage extends React.Component {
    render() {
        return (
            <Header navbarLocation="DASHBOARD"
                    navbarLinks={<li><a href={"#"}>Notes</a></li>}

            />
        );
    }
}