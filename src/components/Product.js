import React from 'react'
import data from '../models/data.js';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

export default function Product(props) {
    //console.log(props.match.params.id);
    const item = data.products.find(x => x._id === props.match.params.id);

    return (
        <div>
            <Card>
                <Row>
                    <Col md={4}>
                        <CardImg src={item.pic} />
                    </Col>
                    <Col md={8}>
                        <CardBody>
                            <CardTitle>รหัสสินค้า {item._id}</CardTitle>
                            <CardSubtitle> {item.name} </CardSubtitle>
                            <CardSubtitle>ราคา {item.price}</CardSubtitle>
                            <CardText>รายละเอียด <br />{item.description}</CardText>
                            <Button>++เพิ่มสินค้าในตะกร้า</Button>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}
