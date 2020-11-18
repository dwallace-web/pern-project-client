import React, { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Question from '../Questions/Question';
import Answer from '../Answers/Answer';


const Main = (props) => {
    return (
        <Container>

                <Row>
                    <Col>
                        <Question token={props.token} />
                    </Col>
                    <Col>
                        <Answer token={props.token} />
                    </Col>
                </Row>
            
        </Container>
    )
}

export default Main;