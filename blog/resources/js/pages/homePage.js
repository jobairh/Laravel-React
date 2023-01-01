import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import homeBanner from "../components/homeBanner";
import PaymentGuide from "../components/paymentGuide";
import MoreSeries from "../components/moreSeries";
import Footer from "../components/footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <homeBanner/>
                <courseFeature/>
                <coursePlanHome/>
                <PaymentGuide/>
                <MoreSeries/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
