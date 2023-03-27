import React, {useRef, useEffect} from 'react'

import { NavLink } from "react-router-dom";
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png'

import { Container, Row } from "reactstrap";

const StoreHeader = (props) => {
  return (
    <header className="store__header">
      <Container>
        <Row>
          <div className="store__nav__wrapper">
            <div className="logo">
              <img src={props.logo} alt="logo" />
              <div>
                <h1>{props.storeName}</h1>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default StoreHeader;
