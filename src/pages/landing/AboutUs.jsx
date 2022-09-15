import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Blockchain from '../../assets/images/blockchain.png'
import { WOW } from "wowjs";

export default function AboutUs() {

    useEffect(() => {
        const wow = new WOW({ live: false }); 
        wow.init()
        })

    return (
        <>
            <section className='aboutus_section'>
            <div className='bouncing_ball'></div>
            <div className='bouncing_ball1'></div>
            <div className='bouncing_ball2'></div>
             
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                                <div className='aboutus_image_section  wow slideInLeft' >
                                    <Image className="blockchanin_img" fluid src={Blockchain}></Image>
                                </div>
                        </Col>
                        <Col lg={6} md={12} >
                                <div className='aboutus_content_section wow slideInRight'>
                                    <h2>
                                        <span>SLICELEDGER</span> Blockchain
                                    </h2>
                                    <p>
                                        Sliceledger Blockchain is a public, permissionless, Ethereum Virtual Machine (EVM) compatible blockchain running on the world’s leading Proof-of-Stake and Proof-of-play consensus mechanism. The Sliceledger blockchain is open to the public, allowing participants from around the world to join in to secure and verify the record reflect accurate state of affairs.
                                    </p>
                                   
                                </div>
                        </Col>
                    </Row>
                </Container>
                
            </section>
        </>
    )
}
