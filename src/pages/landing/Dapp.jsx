import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "aos/dist/aos.css";
import { WOW } from "wowjs";
export default function Dapp() {

    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })

    return (
        <>
            <section className='dapp_section'>
                <div className='bouncing_ball'></div>
                <div className='bouncing_ball1'></div>
                <div className='bouncing_ball2'></div>
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='dapp_code_section wow slideInLeft'>
                                <div className="line1">
                                    <span className='red'>pragma solidity</span> <span className="blue">^</span><span className='green'>0.7.0</span>;
                                </div>
                                <div className="line2">
                                    <span className='red'>contract</span> <span className='purple'>SliceLedgerMint</span> <span className='red'>is</span> Initializable &#123;
                                </div>
                                <div className="line3">
                                    <span className='gray'>// define used libs</span>
                                </div>
                                <div className="line4">
                                    <span className='red'>using</span> <span className="purple">SafeMath</span> <span className="red">for</span> <span className="blue">uint256</span>;
                                </div>
                                <div className="line5">
                                    <span className='red'>using</span> <span className="purple">Address</span> <span className="red">for</span> <span className="blue">address</span>;
                                </div>
                                <div className="line6">
                                    <span className='red'>using</span> <span className="purple">SafeERC20</span> <span className="red">for</span> ERC20;
                                </div>
                                <div className="line7">
                                    SliceLedgerMintAddressProvider <span className="red">public</span> addressProvider;
                                </div>
                                <div className="line8">
                                    <span className="red">function</span> <span className="dark_blue">initialize</span>&#40; <span className="blue">address</span> owner, <span className="blue">address</span>
                                </div>
                                <div className="line9">
                                    _addressProvider&#41; <span className="red">public</span> initializer &#123;
                                </div>
                                <div className="line10">
                                    addressProvider <span className="blue">=</span> <span className="dark_blue">SliceLedgerMProvider</span>&#40;_addressProv
                                </div>
                            </div>
                       


                        </Col>
                        <Col lg={6} md={12}>
                            <div className='dapp_content_section wow slideInRight'>
                                <h2><span>SLICELEDGER</span>   Build Limitless dApps on</h2>
                                <p>
                                    SliceledgerChain is built for the next generation of apps that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing security. Sliceledger is creating the best network for Web3 developers with flexible deployment, seamless interoperability, and incredible on-chain incentives. 
                                </p>

                                <div className="developer_link">
                                    <a href='https://slice-ledger.gitbook.io/sliceledger/developer-guide' target="_blank">Developer Guide</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
