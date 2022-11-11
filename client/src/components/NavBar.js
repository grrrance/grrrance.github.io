import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import vk from '../assets/img/vk.png';
import tg from '../assets/img/tg.svg';
import gh from '../assets/img/gh.svg';
import inst from '../assets/img/inst.svg';
import ds from '../assets/img/discord.svg';
import stm from '../assets/img/steam.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img class="text-selection" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><div class="text-selection">Home</div></Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><div class="text-selection">Skills</div></Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><div class="text-selection">Projects</div></Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://t.me/grrrance" target="_blank"><img class="text-selection" src={tg} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://vk.com/s1ngletone" target="_blank"><img class="text-selection" src={vk} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://www.instagram.com/grrrrrance" target="_blank"><img class="text-selection" src={inst} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://discordapp.com/users/706915982802681917" target="_blank"><img class="text-selection" src={ds} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://steamcommunity.com/profiles/76561199132644459/" target="_blank"><img class="text-selection" src={stm} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
                <a href="https://github.com/Grigory-Aseev" target="_blank"><img class="text-selection" src={gh} width="28" height="28" fill="currentColor" viewBox="0 0 16 16"></img></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span class="text-selection">Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}