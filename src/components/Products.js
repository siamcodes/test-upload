import React, { Component } from 'react';
import data from '../models/data.js';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Products extends Component {
    render() {
        return (
            <div>
                <Row>
                    {
                        data.products.map(item =>
                            <Col md={4}>
                                <Card key={item.id}>
                                    <CardImg src={item.pic} />
                                    <CardBody>
                                        <CardTitle>รหัสสินค้า {item._id}</CardTitle>
                                        <CardSubtitle><Link to={'/product/' + item._id}> {item.name} </Link></CardSubtitle>
                                        <CardSubtitle>ราคา {item.price}</CardSubtitle>
                                        <CardText>รายละเอียด <br />{item.description}</CardText>
                                        <Button>++เพิ่มสินค้าในตะกร้า</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        )
    }
}
