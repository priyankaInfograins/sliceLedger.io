import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import SiteLogo from '../assets/images/logo.png'
import SiteLogo from '../assets/images/logo.png'


export default function Header() {

  

  return (
    <>
      <section className='doc_main_herder'>
        <header className='doc_header_section'>
        
        <Navbar expand="lg" className='site_nav'>
            <Container>
              <Link to="/" className='navbar-brand site_logo'>
                <Image src={SiteLogo} fluid />
                <p>Sliceledger</p>
              </Link>
              <Navbar.Toggle className='menu_bar' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="my-2 me-5 my-lg-0">
                <Link to="/research" className='custom_link6 nav-link'>WhitePaper</Link>   
                  <a className='custom_link6 nav-link' href='https://slice-ledger.gitbook.io/sliceledger/api' target="_blank">Developers</a>
                  <Link to="/enterprise" className='custom_link6 nav-link'>Products</Link>
                  {/* <Link to="/network" className='custom_link4 nav-link'>Network</Link> */}
                  <Link to="/blog" className='custom_link6 nav-link'>Blog</Link>
                  <a className='custom_link6 nav-link' href='https://slice-ledger.gitbook.io/sliceledger/' target="_blank">Docs</a>
                </Nav>
                <Nav className='headerbutton_nav'>
                  <a className='headerbutton' href='https://slice-ledger.gitbook.io/sliceledger/api' target="_blank">Build with SliceLedger</a>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </section>
    </>
    // slkfasjdkl
  )
}
