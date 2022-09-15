import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import demo from '../../assets/images/video_2.m4v';
import FeatureSection from './FeatureSection'




export default function HeroSection() {
    return (
        <>
            <section className='hero_section'>
                <div className='hero_section_banner'>
                    <video className='hero_video' autoPlay="autoplay" loop="loop" muted="muted" alt="blockchain_video">
                        <source src={demo} type="video/m4v" />
                        <source src={demo} type="video/ogg" />
                    </video>
                    <div>
                        <Container>
                            <Row>
                                <Col lg={12} className="p-5">
                                    <div className='hero_content'>
                                        <div className='hero_details'>
                                            <h1>The Most Anticipated Blockchain Network</h1>
                                            <p>The world's first decentralised and permissionless ecosystem offers the Blockchain stream various opportunities and innovations, attracting developers, innovators, artists, businesses, and other stakeholders. Sliceledger offers a number of communities to join, develop, and grow.</p>
                                            <div className='doucumentation'>
                                            <a href='https://slice-ledger.gitbook.io/sliceledger/' target="_blank">Documentation</a>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <FeatureSection />
            </section>
        </>
    )
}








{/* <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='hero_content'>
                                <div className='hero_details'>
                                    <h1>Bringing the world to Ethereum</h1>
                                    <p>Sliceledger believes in Web3 for all. Sliceledger is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='hero_img_div'>
                                <Image src={Hero} fluid />



                         </div>
                                </Col>
                            </Row>
                        </Container> */}