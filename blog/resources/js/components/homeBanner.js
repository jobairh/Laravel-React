import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="parallax" fluid>
                    <Row>
                        <Col className="top-div text-center" lg={12} md={12} sm={12}>
                            <p className="text-center m-0 top-title">React JS</p>
                            <p className="text-center m-0 top-subtitle">Learn With Rabbil Hasan</p>
                            <p className="text-center m-0 top-subtitle">Learn Something Good, Do Something Better</p>
                            <Button className="btn login-btn m-2">Login</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeBanner;
