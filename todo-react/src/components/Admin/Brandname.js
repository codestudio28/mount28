import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

class BrandName extends Component {
    render() {
        return (
            <React.Fragment>
                <Col span={24} className="brand">
                    <h3>MMPDC</h3>
                </Col>
            </React.Fragment>
        );
    }
}

BrandName.propTypes = {

};

export default BrandName;