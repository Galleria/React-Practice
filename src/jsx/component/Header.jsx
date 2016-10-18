import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,NavItem,NavDropdown,Nav,MenuItem} from 'react-bootstrap'; 
import {FormGroup,FormControl,Button} from 'react-bootstrap'; 

import styles from './styles.module.css';

import {Glyphicon} from 'react-bootstrap';
import {LinkContainer,IndexLinkContainer} from 'react-router-bootstrap';

import NavLink from './NavLink.jsx';

const Header = React.createClass({
    render: function () {
        //console.log( styles );
        return (
            <Navbar staticTop>
                <Navbar.Header>
                <Navbar.Brand>
                   <NavLink to='/'> Title_Menu </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                
                <Navbar.Collapse className={styles.container}>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Topic" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Login</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>

                <Nav pullRight>
                    <IndexLinkContainer  to='/' activeHref="active">
                        <NavItem><Glyphicon glyph="home" /> </NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to='/login' activeHref="active">
                        <NavItem><Glyphicon glyph="log-in" /> </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/about' activeHref="active">
                        <NavItem><Glyphicon glyph="user" /> </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/add' activeHref="active">
                        <NavItem><Glyphicon glyph="plus" /> </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/lists' activeHref="active">
                        <NavItem><Glyphicon glyph="th-large" /> </NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Form pullRight className={styles.searchForm}>
                    <FormGroup className={styles.searchMenu}>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>
                    {' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>

                


                
            </Navbar> 
        );
    }
});


module.exports = Header;
/*
Header.contextTypes = {
   data: React.PropTypes.oneOfType([
     React.PropTypes.object,
     React.PropTypes.array
   ]).isRequired
};
*/