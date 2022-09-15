import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ETH_Compatibilit from '../../assets/images/ETH_Compatibilit.png';
import Developer_Experience from '../../assets/images/Developer_Experience.png';
import Security from '../../assets/images/Security.png';
import Scalability from '../../assets/images/Scalability.png';
import AOS from "aos";
import "aos/dist/aos.css";

export default function KeyPoint() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    })
    return (
        <>

            <div data-aos="fade-up">
                <section className='keyPoint_section'>
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <div className='keyPoint_head'>
                                    <h2><span>SLICELEDGER</span> makes Ethereum accessible for all</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3} md={6}>
                                <div className='keyPoint_body'>
                                    <div className='keyPoint_box'>
                                        <img  alt="ethcompatiblit" src={ETH_Compatibilit}></img>
                                        <h5>ETH Compatibility </h5>
                                        <p>Industry dominance, established tech stack, tools, languages, standards, enterprise adoption </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='keyPoint_body'>
                                    <div className='keyPoint_box'>
                                        <img  alt="Scalability" src={Scalability}></img>
                                        <h5>Scalability</h5>
                                        <p>Dedicated blockchains, scalable consensus algorithms, custom Wasm execution environments</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='keyPoint_body'>
                                    <div className='keyPoint_box'>
                                        <img  alt="Security" src={Security}></img>
                                        <h5>Security</h5>
                                        <p>Modular ''security as a service'', provided either by Ethereum or by a pool of professional validators</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6}>
                                <div className='keyPoint_body'>
                                    <div className='keyPoint_box'>
                                        <img alt="Developer_Experience" src={Developer_Experience}></img>
                                        <h5> Developer Experience </h5>
                                        <p>Equivalent to Ethereum, no protocol level knowledge required, no token deposits, fees or permissions </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>

        </>
    )
}

