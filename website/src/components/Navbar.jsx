import React from 'react';
import '../assets/styles/Component.css';
import {Link} from 'react-router-dom';


export class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <Link to={`/`}>
                    <img className="navImage" alt={"icon of a speedometer"}
                         src={require("../assets/images/navbar_lefticon.png")}/>
                </Link>

                {/*navbarLocation: Name of the page the user is on. */}
                <h1>{this.props.navbarLocation}</h1>

                {/* navbarLinks: Send in a <ul> with <li> child-elements containing <a> and <h2> tags.
                    This way we have all the pages, one click away,
                    instead of having to go back to the main page.
                 */}
                {this.props.navbarLinks}
            </div>
        );
    }
}
