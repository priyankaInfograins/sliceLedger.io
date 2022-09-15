import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../common/DocHeader';
import HeroSection from '../HeroSection';


export default function Research() {
    return (
        <>
            <Header />
            <HeroSection heading='Re-Search' />
            <section className='research_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='research_sub_section'>
                                <h4>White Paper</h4>
                                <p>This paper proposes a new blockchain architecture based on Proof of Stake and Proof of Play. SliceLedgerChain vision of lowering the barrier and enabling established businesses with blockchain technology to create value and solve real-world economic problems.</p>

                                <div className='whiteperer_link_div'>
                                    <a className="whitepaper_link" href='https://sliceledger.io/sliceledger_whitepaper.pdf' target="_blank">White Paper</a>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}
