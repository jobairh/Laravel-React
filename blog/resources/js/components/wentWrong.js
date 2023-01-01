import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wentWrong from "../../images/play.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img className="w-50" src={wentWrong}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;
