import React, { useState } from "react";
import { Col, Container,Row } from "react-bootstrap";
import Product from "./Product";
import Data from "../data";

export default class ProductLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: Data}
    }

    render() {
        return (
            <React.Fragment>
            <Container>
                <Row>
                    {
                        this.state.data.map(value=> (
                            <Col lg={3} className="mt-3"><Product id={value.id} img={value.img} title={value.title} price={value.price}/></Col>
                        ))
                    }
                </Row>
            </Container>
        </React.Fragment>
        )
    }
}

