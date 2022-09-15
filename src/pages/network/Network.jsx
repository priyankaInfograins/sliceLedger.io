import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../common/DocHeader'
import HeroSection from '../HeroSection';


export default function Network() {
    return (
        <>
            <Header />
            <HeroSection heading="Network" />
            <section className='network_section'>
                <div className='network_section_main'>
                    <Container>
                        <Row>
                            <Col lg={4} >
                                <div className='card'>
                                    <h4>Block explorer</h4>
                                    <p>Feature-rich blockchain explorer and analytics platform for SliceledgerChain, a new blockchain built for the next generation of apps, games, and digital assets. Sliceledger explorer provides Search, analysis, and visualize blockchain that occurs on the Sliceledger Chain, such as extrinsic, transfers, accounts, tokens, prices, staking and other activities.</p>
                                   
                                </div>
                                
                            </Col>
                            <Col lg={4}>
                                <div className='card'>
                                    <h4>State</h4>
                                    <p>Welcome to Sliceledger State home for real-time and historical data on system performance. Sliceledger State ensures providing accurate data Such as Explorer, Main net, Test net, Dev net, RPC URL, System Matrics, TPS, Average ping time, Transaction count, Response Time, and other activities.</p>

                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='card'>
                                    <h4>Network Status</h4>
                                    <p>SliceledgerChain defines Real-time latencies, data API monitoring, Market status, and endpoint checks.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
