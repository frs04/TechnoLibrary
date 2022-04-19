import React from 'react'
import {Navbar,Container, Nav} from "react-bootstrap";
import {BsHouseDoor, BsDiagram3, BsPeople, BsList, BsPerson, BsGear} from 'react-icons/bs';
import {HiOutlineBookOpen} from 'react-icons/hi'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='HeaderBackground'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <a href='/'>
                <img src='./images/Logo1.png' className='logoimg' alt='Logo' />
              </a>
            </div>
            <div className='col-8'>
              <Navbar className='HeaderNavbar' expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#1"> <BsHouseDoor/> Home</Nav.Link>
                      <Nav.Link href="#2"><BsDiagram3/> Book Categories</Nav.Link>
                      <Nav.Link href="#3"><BsPeople/> Authors</Nav.Link>
                      <Nav.Link href="#4"><BsList/> Menu</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className='col-2'>
              <div className='row float-end'>
                <ul className='RightNav'>
                  <li>
                    <a href="#"><BsPerson/></a>
                  </li>
                  <li>
                    <a href="#"><HiOutlineBookOpen/></a>
                  </li>
                  <li>
                    <a href="#"><BsGear/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header