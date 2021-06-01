import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from './img/The_Lord_of_the_Rings.gif';

const Product = (props) => {
    return (
        <React.Fragment>
                <Card>
                    <img src={props.img} width="150px" alt="" className="ml-5"/>
                    <Card.Body>
                            <h6>{props.title}</h6>
                            <h6 className="text-info">{props.price}</h6>
                    </Card.Body>
                </Card>
        </React.Fragment>
    )
}

export default Product;