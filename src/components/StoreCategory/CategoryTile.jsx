import React from 'react'
import {Container, Row, Col} from "reactstrap";

import "./category_tile.css"

const CategoryTile = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="container__hover" >
            <img className="container__image" src={props.image}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="column">{props.categoryName}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CategoryTile
