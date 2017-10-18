import React from 'react';
import '../assets/styles/Component.css';
import {Link} from 'react-router-dom';


export class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <Link to={`/`}>
                    <img className="navImage" alt={"Navbar image, either a speedometer or a left-arrow"}
                         src={this.props.navbarImage}/>
                </Link>

                {/*navbarLocation: Name of the page the user is on. */}
                <h1>{this.props.navbarLocation}</h1>
            </div>
        );
    }
}
