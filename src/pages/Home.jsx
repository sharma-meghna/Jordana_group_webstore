import React from 'react';

import Helmet from "../components/Helmet/Helmet";
import StoreHeader from "../components/Header/StoreHeader";
import Featured from "../components/Carousel/Carousel"
import StoreCategories from "../components/StoreCategory/StoreCategories"
import "../styles/home.css";

import jordanaLogo from "../assets/images/jordana_logo.jpeg"
import milaniLogo from "../assets/images/milani_logo.png"

import {Container, Row, Col} from "reactstrap";

const Home = () => {

  return (
    <Helmet title={'Home'}>
	<Featured />
    <StoreCategories/>
            {/*
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='2' md='2'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Milani Cosmetics</p>

                            <button className="buy__btn">SHOP NOW</button>
                        </div>
                    </Col>

                    <Col lg='2' md='2'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Jordana Cosmetics</p>

                            <button className="buy__btn">SHOP NOW</button>
                        </div>
                    </Col>

                    <Col lg='2' md='2'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Jordana Electronics</p>

                            <button className="buy__btn">SHOP NOW</button>
                        </div>
                    </Col>

                    <Col lg='2' md='2'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Creation Perfumes</p>

                            <button className="buy__btn">SHOP NOW</button>
                        </div>
                    </Col>

                    <Col lg='2' md='2'>
                        <div className="hero__content">
                            <p className="hero__subtitle">VS Body Cream</p>

                            <button className="buy__btn">SHOP NOW</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
  */}
    </Helmet>
  );
}

export default Home
