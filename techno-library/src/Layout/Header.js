import React from 'react'
import {Navbar,Container, Nav} from "react-bootstrap";
import {BsHouseDoor, BsDiagram3, BsPeople, BsList, BsPerson, BsGear} from 'react-icons/bs';
import {HiOutlineBookOpen} from 'react-icons/hi';

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

                    <Nav.Link href="/Home"> <BsHouseDoor/> Home</Nav.Link>
                      <Nav.Link href="/Categories" src='../Pages/Categories.js'><BsDiagram3/> Book Categories</Nav.Link>
                      <Nav.Link href="/Authors" src="../Pages/Authors.js"><BsPeople/> Authors</Nav.Link>
                      <Nav.Link href="/Menu"><BsList/> Menu</Nav.Link>


                      <Nav.Link href="/"> <BsHouseDoor/> Home</Nav.Link>
                      <Nav.Link href="#2"><BsDiagram3/> Book Categories</Nav.Link>
                      <Nav.Link href="/Authors"><BsPeople/> Authors</Nav.Link>
                      <Nav.Link href="#4"><BsList/> Menu</Nav.Link>

                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-2'>
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