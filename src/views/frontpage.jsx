import React from 'react';
import '../assets/styles/App.css';
import {Header} from '../components/Header.jsx'
//import {NoteHolder} from '../components/NoteHolder.jsx'

export class Frontpage extends React.Component {
    render() {
        return (
            <div className="Frontpage">
                <h2 className="HeaderText">Welcome to iPIM</h2>

                <Header/>

            </div>
        );
    }
}