import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { FiExternalLink } from 'react-icons/fi'
export default function FeatureSection() {
    return (
        <>
            <section className='feature_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='feature_content'>
                                <div className='feature_marque'>
                                    <div className='marque_content'>
                                        <b>0.000018</b>
                                        <p>Min. cost per transaction </p>
                                    </div>
                                    <div className='marque_content'>
                                        <b>1.5s</b>
                                        <p>Block Time</p>
                                    </div>
                                    <div className='marque_content'>
                                        <b>620B</b>
                                        <p>Block Size</p>
                                    </div>
                                    <div className='marque_content'>
                                        <b>1.5s</b>
                                        <p>Transaction Time</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}




