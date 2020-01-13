import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

class BrandName extends Component {
    render() {
        return (
            <React.Fragment>
                <Col span={24} className="brand">
                    <h3 style={{fontSize:'1.25em', color:'#092b00',fontFamily:'Roboto'}}>MMPDC</h3>
                </Col>
            </React.Fragment>
        );
    }
}

BrandName.propTypes = {

};

export default BrandName;