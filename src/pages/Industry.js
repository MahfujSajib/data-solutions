import React from 'react';
import { Card } from 'react-bootstrap';
import '../pages/style/Industry.css'

const Industry = (props) => {
    const { name, description, img } = props.industry
    return (

        <>
            <Card className='cardstyle'>
                <Card.Body>
                    <img style={{ borderRadius: "20px", marginBottom: "10px" }} src={img} alt="" />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
};

export default Industry;
