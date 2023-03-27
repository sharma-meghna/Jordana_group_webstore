import React from 'react'
import StoreHeader from "../Header/StoreHeader";
import CategoryTile from "./CategoryTile"

import jordanaLogo from "../../assets/images/jordana_logo.jpeg"
import milaniLogo from "../../assets/images/milani_logo.png"

import milaniface from "../../assets/images/milani_face.JPG"
import milaninails from "../../assets/images/milani_nails.JPG"
import milanilips from "../../assets/images/milani_lips.JPG"
import milanieyes from "../../assets/images/milani_eyes.JPG"

import jordanaface from "../../assets/images/jordana_face.JPG"
import jordananails from "../../assets/images/jordana_nails.JPG"
import jordanalips from "../../assets/images/jordana_lips.JPG"
import jordanaeyes from "../../assets/images/jordana_eyes.JPG"

import jordanascooter from "../../assets/images/jordana_scooter.JPG"
import jordanawatches from "../../assets/images/jordana_watches.JPG"
import jordanaheadphones from "../../assets/images/jordana_headphones.JPG"
import jordanaairpods from "../../assets/images/jordana_airpods.JPG"

import "./category_tile.css"

import {Container, Row, Col} from "reactstrap";


const StoreCategories = () => {
  return (
    <div>
        <StoreHeader storeName="Jordana Cosmetics" logo={jordanaLogo}/>
            <Container>
                <Row>
                    <Col>
                        <CategoryTile categoryName="Face" image={jordanaface}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Nails" image={jordananails}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Lips" image={jordanalips}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Eyes" image={jordanaeyes} />
                    </Col>
                </Row>
            </Container>
        <StoreHeader storeName="Milani Cosmetics"logo={milaniLogo}/>
            <Container>
                <Row>
                    <Col>
                        <CategoryTile categoryName="Face" image={milaniface}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Nails" image={milaninails}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Lips" image={milanilips}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Eyes" image={milanieyes}/>
                    </Col>
                </Row>
            </Container>
        <StoreHeader storeName="Jordana Electronics" logo={jordanaLogo}/>
            <Container>
                <Row>
                    <Col>
                        <CategoryTile categoryName="Scooters" image={jordanascooter}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Watches" image={jordanawatches}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Airpods" image={jordanaairpods}/>
                    </Col>
                    <Col>
                        <CategoryTile categoryName="Headphones" image={jordanaheadphones}/>
                    </Col>
                </Row>
            </Container>
        <StoreHeader storeName="Creation Perfumes" logo={jordanaLogo}/>
            <CategoryTile categoryName="Perfumes"/>
        <StoreHeader storeName="VS Body Creams" logo={jordanaLogo}/>
            <CategoryTile categoryName="Creams"/>
    </div>
  )
}

export default StoreCategories