import React, { Component } from 'react'
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


import GoogleMap from './GoogleMap';

const users = [
    {
        _id: '25439',
        name: 'สมเกียรติ ใจดี',
        email: 'somkiat@sdtc.ac.th',
        address: '486/25 หมู่บ้านพฤกษาวิลล์ 4 กรุงเทพฯ',
        pic: './images/somkiat.jpg',
        age: 35,
        major: 'คอมพิวเตอร์ธุรกิจ'
    },
    {
        _id: '3593',
        name: 'สมญิง ณ ประตูน้ำ',
        email: 'somying@gmail.com',
        address: '486/25 หมู่บ้านพฤกษาวิลล์ 4 กรุงเทพฯ',
        pic: './images/somying.jpg',
        age: 35,
        major: 'คอมพิวเตอร์ธุรกิจ'
    }
]

export default class Contact extends Component {
    render() {
        return (
            <div className="col-md-8">
                <h1>ติดต่อเรา</h1>
                <GoogleMap/>

                {
                    users.map(user =>
                        <Card key={user.id}>
                            <Row>
                                <Col>
                                    <CardImg src={user.pic} />
                                </Col>
                                <Col>
                                    <CardBody>
                                        <CardTitle>รหัสนักศึกษา {user._id}</CardTitle>
                                        <CardSubtitle>ชื่อ {user.name}</CardSubtitle>
                                        <CardSubtitle>E-mail: {user.email}</CardSubtitle>
                                        <CardText>ที่อยู่ {user.address}</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    )
                }
            </div>
        )
    }
}
