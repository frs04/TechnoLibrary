import React from 'react'
import {Navbar,Container, Nav} from "react-bootstrap";
import {BsHouseDoor, BsDiagram3, BsPeople, BsList, BsPerson, BsGear} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';

const Header = () => {
  return (
    <div className='HeaderBackground'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 col-sm-4 col-md-4 col-lg-2'>
              <a href='/'>
                <img src='./images/Logo1.png' className='logoimg' alt='Logo' />
              </a>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-8'>
              <Navbar className='HeaderNavbar' expand="lg">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    <Nav.Link href="/"> <BsHouseDoor/> Home</Nav.Link>
                      <Nav.Link href="/Categories"><BsDiagram3/> Book Categories</Nav.Link>
                      <Nav.Link href="/Authors"><BsPeople/> Authors</Nav.Link>
                      <Nav.Link href="#"><BsList/> Menu</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-2'>
              <div className='row float-end'>
                <ul className='RightNav'>
                  <li>
                    <a href="/Login"><BsPerson/></a>
                  </li>
                  <li>
                    <a href="/Favorite"><AiOutlineHeart/></a>
                  </li>
                  <li>
                    <a href="/PersonalInfo"><BsGear/></a>
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