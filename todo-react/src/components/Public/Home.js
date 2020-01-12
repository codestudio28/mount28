import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Button, Input, Icon, Tooltip, notification } from 'antd';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-bootstrap';

@inject('TodoStore')
@observer
class Home extends Component {
    
    
    render() {
        const TodoStore = this.props.TodoStore;
        const Styles = styled.div`
                .navbar { background-color: #222; }
                a, .navbar-nav, .navbar-light .nav-link {
                    color: #9FFFCB;
                    &:hover { color: white; }
                }
                .navbar-brand {
                    font-size: 1.4em;
                    color: #9FFFCB;
                    &:hover { color: white; }
                }
                .form-center {
                    position: absolute !important;
                    left: 25%;
                    right: 25%;
                }
                `;
        return (
            <React.Fragment>
               <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
            </React.Fragment>
        );
    }
}

Home.propTypes = {

};

export default Home;