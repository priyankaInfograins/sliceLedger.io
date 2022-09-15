import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import demo from '../../assets/images/1.jpg';
import demo2 from '../../assets/images/2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

export default function SupportCommunity() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })
    return (
        <>
            <section className='supportCommunity_section'>
                <Container>
                    <Row>
                        <Col lg={12}>

                            <div data-aos="fade-up">
                                <div className='supportCommunity_head'>
                                    <h2>Join the fastest-growing ecosystem in crypto across DeFi, Web3, and NFTs</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className='supportCommunity_card'>
                        <Row>
                            <Col lg={6}>
                                <div className='community'>
                                    <h4 >Sliceledger Community</h4>
                                    <p>It's a vibrant global community powered by SliceledgerChain. Sliceledger empowers community members to work together and create valuable SliceledgerHub.</p>
                                    <Image className='image' fluid src={demo} alt="img" />
                                </div>

                            </Col>
                            <Col lg={6}>
                                <div className='validators'>
                                    <h4>Become a Validator</h4>
                                    <p>Validators form the Backbone of SliceLedger network. By processing transactions and participating in consensus, apiece validator helps make it great SliceLedger blockchain network globally.</p>
                                    <Image className='image' fluid src={demo2} alt="img" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6}>
                                <div className='about_slice'>
                                    <h4>Learn about Sliceledger</h4>
                                    <p>Learn more about SliceledgerChain and see what makes it great.</p>
                                    <Image className='image' fluid src={demo2} alt="img" />
                                </div>

                            </Col>
                            <Col lg={6}>
                                <div className='resources'>
                                    <h4>Developer Resources</h4>
                                    <p>Welcome to the most exciting and innovative platform This documentation provides Developer Resources details on the SliceLedger technology. </p>
                                    <Image className='image' fluid src={demo} alt="img" />
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </section >

        </>
    )
}
