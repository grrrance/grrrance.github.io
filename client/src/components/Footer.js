import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import vk from '../assets/img/vk.png';
import tg from '../assets/img/tg.svg';
import gh from '../assets/img/gh.svg';
import inst from '../assets/img/inst.svg';
import React from 'react'



export const Footer = () => {
  return (
    <footer className="footer">
      <div className="fcontent">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} xs={10}>
              <img class="text-selection" src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://t.me/grrrance" target="_blank"><img class="text-selection" src={tg} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://github.com/Grigory-Aseev" target="_blank"><img class="text-selection" src={gh} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://vk.com/s1ngletone" target="_blank"><img class="text-selection" src={vk} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://www.instagram.com/grrrrrance" target="_blank"><img class="text-selection" src={inst} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
              </div>
              <p class="text-selection">Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>

    </footer>
  )
}