import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Button } from 'react-bootstrap';
import logo from "../img/logo.png"
import PropTypes from 'prop-types';
import '../header.css';

export const Header = (props) => {
    return (
        <Navbar className="main-navbar" bg="light" variant="dark">
            <div className="header-container">
                <Navbar.Brand>
                    <img
                        alt="Taxdown-logo"
                        src={logo}
                        width="250"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Tax
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link to={props.linkTo}>
                        <Button variant="success">{props.buttonText}</Button>
                    </Link>
                </Navbar.Brand>  
            </div>
        </Navbar>
    );
}

Header.propTypes = {
    linkTo: PropTypes.string,
    buttonText: PropTypes.string
  };