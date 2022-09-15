import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Image, Modal, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import SiteLogo from '../assets/images/logo.png'
import CalenderIcon from '../assets/images/calendar.png'
import modalLogo from '../assets/images/modal_img.png'
export default function Header() {
  const navigate = useNavigate()

  const [modalShow, setModalShow] = useState(false);

  const handleSet = () => {
    sessionStorage.setItem("firstUser", "infograins");
  }
  useEffect(() => {
    let firstUser = sessionStorage.getItem("firstUser");
    if (!firstUser) {
      setTimeout(() => {
        setModalShow(true)
      }, 1500);
    } else {
      setModalShow(false)
    }
    // setModalShow(true)
  }, [])

  const handleRedirect = () => {
    navigate("/blog/sliceLedger-at-gitex-event")
    setModalShow(false)
  }

  return (
    <>
      <section className='main_header'>
        <header className='header_section'>

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
                  <a className='custom_link6 nav-link' href='https://slice-ledger.gitbook.io/sliceledger/' target="_blank">Docs</a>
                  <Link to="/blog" className='custom_link6 nav-link'>Blog</Link>
                </Nav>
                <Nav className='headerbutton_nav'>
                  <a className='headerbutton' href='https://slice-ledger.gitbook.io/sliceledger/api' target="_blank">Build with SliceLedger</a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </section>

      <section className='event_popup'>
        <Modal

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered show={modalShow}
          backdrop="static"
          keyboard={false}
          onHide={() => setModalShow(false)}
          className="event_modal_div"
        >
          <Modal.Header closeButton className='event_header' onClick={handleSet}>
            <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='event_popup_modal'>
           <Container fluid>
           <Row>
              <Col lg={{ span: 10, order: 'first' }} md={{ span: 12, order: 'last' }} xs={{ order: 'last' }}> 
              <h2 className='Meet-head2 mb-3'>Meet Us At GITEX North Star Dubai 2022</h2>
              </Col>
              <Col lg={{ span: 2, order: 'last' }} md={{ span: 12, order: 'first' }} xs={{ order: 'first' }}>
              <Image src={modalLogo} className="modal_img_logo" alt='North Logo' fluid  />
              </Col>
            </Row>
           </Container>
           
            <h4 className='Pod-head4 pb-2'>Pod No: P-B132 & P-B133</h4>
            <div className='calender_div'>
              <Image src={CalenderIcon} alt="" fluid />
              <span className='num-content'> 10<sup>th</sup> - 13<sup>th</sup> Oct, 2022</span>
            </div>
            <p className='meetmepara pt-3'>
              Schedule your meeting in advance to save your time and get a hassle-free interaction with us at the event.
            </p>
            <p className='availabe-for pb-3'>We are available for you 24*7</p>

            <a className='know-btn' onClick={handleRedirect}>Know More</a> <a href="https://calendly.com/sliceledger/meet-us-at-gitexglobal?month=2022-10" target="_blank" className='meet-btn' >Schedule a Meeting</a>
            {/* <figure className='north_img'>
              <Image src={modalLogo} alt='North Logo' fluid />
            </figure> */}
          </Modal.Body>

        </Modal>

      </section>
    </>
  )
}



