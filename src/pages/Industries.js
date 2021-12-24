import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Industry from './Industry';
import '../pages/style/Industries.css'

const Industries = () => {
    const [industries, setIndustries] = useState([]);
    useEffect(() => {
        fetch('./Data.json')
            .then(res => res.json())
            .then(data => setIndustries(data))
    }, [])
    return (
        <div>
            <Container>
                <Row className="row">
                    <Col className='card'>
                        {
                            industries.map(industry => <Industry industry={industry}></Industry>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Industries;




