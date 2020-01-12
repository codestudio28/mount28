import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './headers.css';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Layout, Menu, Icon, Button, Avatar } from 'antd';
import { Container, Row, Col } from 'react-bootstrap';
import { Badge } from 'antd';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;
@inject('TodoStore')
@observer
class Headers extends Component {
   
    render() {
        const TodoStore = this.props.TodoStore;
        const gotoLogout = () =>{
            reactLocalStorage.clear();
            window.open("/","_self");
        }
        return (
            <React.Fragment>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <Row>
                        <Col xs={6} md={6}>
                        </Col>
                        <Col xs={6} md={6}>
                            <Menu mode="horizontal" 
                                 style={{
                                    backgroundColor: '#ffffff',
                                    paddingRight: '2em',
                                    color: '#ffffff',
                                    textAlign: 'right',
                                    borderStyle:'none'
                            }}>
                                <SubMenu className="head-menu"
                                    title={
                                        <React.Fragment>
                                            <Badge count={5}>
                                                <span >
                                                    <Icon type="global"
                                                    style={{fontSize:'1.5em'}}
                                                    ></Icon>
                                                </span>
                                            </Badge>
                                            <Icon type="caret-down" style={{fontSize:'1.5em'}}></Icon>
                                        </React.Fragment>

                                    }
                                    style={{borderStyle:'none'}}
                                   
                                    >
                                    <Menu.Item key="1">Notification 1</Menu.Item>
                                    <Menu.Item >Notification 2</Menu.Item>
                                </SubMenu>
                                <SubMenu 
                                    title={
                                        <React.Fragment>
                                           <Badge count={0} dot>
                                            <Avatar src={TodoStore.getAddUserProfilePath+reactLocalStorage.get('userimage') } 
                                                    style={{"width":"3.5em","height":"3em"}} />
                                            </Badge>
                                        </React.Fragment>

                                    }>
                                    <Menu.Item key="1">My Account</Menu.Item>
                                    <Menu.Item onClick={gotoLogout}>Logout</Menu.Item>
                                </SubMenu>


                            </Menu>
                        </Col>
                    </Row>
                </Header>
            </React.Fragment>
        );
    }
}

Headers.propTypes = {

};

export default Headers;