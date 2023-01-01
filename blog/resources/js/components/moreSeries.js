import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Axios} from "axios";
import LoadingDiv from "./loadingDiv";
import WentWrong from "./wentWrong";

class MoreSeries extends Component {

    constructor() {
        super();
        this.state = {
            DataList: [],
            isLoading: true,
            isError: false,
        }
    }

    componentDidMount() {
        Axios.get("/getMoreSeries").then((response) => {

            if (response.status == 200) {
                this.setState({DataList: response.data, isLoading: false, isError: false})
            } else {
                this.setState({isLoading: false, isError: true})
            }

        }).catch((error) => {

            this.setState({isLoading: false, isError: true})

        })
    }


    render() {


        if (this.state.isLoading == true) {

            return <LoadingDiv/>
        } else if (this.state.isError == true) {
            return <WentWrong/>
        } else {

            const myList = this.state.DataList;
            const myView = myList.map(myList => {
                return (
                    <Col md={3} className="p-2">
                        <Card className="card text-center">
                            <Card.Body className="card-body">
                                <img className="item-logo" src={myList['img']} alt=""/><br/>
                                <h5 className="title-text mt-2">{myList['title']}</h5>
                                <a target="_blank" className="nav-item my-1 des-text" href={myList['url']}></a>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            });
            return (
                <Fragment>
                    <Container className="text-center section-margin">
                        <h5 className="title-text mt-2"><b>Find More</b></h5>
                        <p className="des-text">Get other tutorial series by Rabbil Hasan</p>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default MoreSeries;
