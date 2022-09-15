import React from 'react'
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin,BsTelegram} from 'react-icons/bs';
import {AiOutlineArrowUp } from 'react-icons/ai';
import {FaMediumM } from 'react-icons/fa';
import private_policy from '../assets/document/Privacy Policy sliceledger.pdf'




export default function Footer() {
    return (
        <>


            <section className='social_icon_sect'>
                <Container>
                    <Row>
                        <Col lg={6} >
                            <div className='content'>
                                Join Our Community
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='footer_social'>
                                <ul>
                                    <li>
                                        <a href='https://www.facebook.com/SliceLedger' target="_blank"><BsFacebook /></a>
                                   
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/slice.ledger/' target="_blank"><BsInstagram /></a>
                                    </li>
                                    <li>
                                        <a href='https://twitter.com/LedgerSlice' target="_blank"><BsTwitter /></a>
                                    </li>
                                    <li>
                                        <a href='https://github.com/SliceLedger' target="_blank"><BsGithub /></a>
                                    </li>
                                    <li>
                                        <a href='https://www.linkedin.com/company/slice-ledger' target="_blank"><BsLinkedin /></a>
                                    </li>
                                    <li>
                                        <a href='https://t.me/sliceledger' target="_blank"><BsTelegram /></a>
                                    </li>
                                    <li>
                                        <a href='https://medium.com/@Sliceledger' target="_blank"><FaMediumM /></a>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className='footer_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='footer_body'>
                                <h5>Subscribe - Email</h5>
                                <InputGroup className="mb-3 subsribe_email">
                                    <Form.Control
                                        placeholder="Enter your email"

                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Subscribe
                                    </Button>
                                </InputGroup>
                                <p className='subContent'>We only send interesting and relevant emails.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container fluid >
                    <Row>
                        <Col lg={2}> </Col>
                        <Col lg={8} >
                            <div className='footer_bottom'>
                                <p>Copyright @2022</p>|
                                <a href='/term_and_condition'>Sliceledger Terms of use</a>|
                                <a href={private_policy} target="/blank">Privacy policy</a>

                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className='upIcon'><a href='#'><AiOutlineArrowUp /></a></div>
                        </Col>
                    </Row>
                </Container>


            </section>
        </>
    )
}

