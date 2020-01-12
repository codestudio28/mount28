import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Button, Avatar, Breadcrumb, Select, Pagination, Modal, Checkbox,notification,Tooltip,Popconfirm } from 'antd';
import { Row, Col } from 'antd';
import './content.css';
import { Input } from 'antd';
import { inject, observer } from 'mobx-react';
import axios from "axios";
import BreadCrumb from '../BreadCrumb';



const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;
const { Option } = Select;



@inject('TodoStore')
@observer
class PageContent extends Component {
   
    render() {
        const TodoStore = this.props.TodoStore;
        return (

            <React.Fragment>

                <Content style={{ margin: '24px 16px 0', backgroundColor: '#eeeeee' }}>
                    <Row>
                        <Col span={24}>
                            <BreadCrumb location="Dashboard" />
                        </Col>

                       
                            
                    </Row>

                </Content>
               

               
            </React.Fragment>
        );
    }
}

PageContent.propTypes = {

};

export default PageContent;