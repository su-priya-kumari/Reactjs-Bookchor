import React from'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import banner from './img/banner.jpeg';

const Banner = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col lg={12}>
                <Image src={banner} width="" alt="" className="ml-n5"/>
                </Col>
            </Row>
        </Container>
    );
}
export default Banner;