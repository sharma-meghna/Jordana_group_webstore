import React from 'react'
import {Container, Row, Col} from "reactstrap";

import "./category_tile.css"

const CategoryTile = (props) => {
  return (
    <div className="container__hover">
      <Container>
        <Row>
          <Col>
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
