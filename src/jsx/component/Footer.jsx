import React from 'react';
import ReactDOM from 'react-dom';
import {PageHeader,small} from 'react-bootstrap';
import {Navbar,NavItem,NavDropdown,Nav,MenuItem} from 'react-bootstrap'; 

import style from './footer.styles.module.css';

const Footer = React.createClass({
    render: function () {
        return (
            <Navbar className={style.footer} fixedBottom>
                CopyRight by Galleria &copy;
                <br/>
                Version 0.0.1
            </Navbar>
        );
    }
});


module.exports = Footer;
