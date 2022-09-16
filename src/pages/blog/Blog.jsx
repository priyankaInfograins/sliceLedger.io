import React,{useEffect} from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Blog_img from '../../assets/images/blog.png'
import Header from '../../common/DocHeader';
import HeroSection from '../HeroSection';

export default function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Header />
            <HeroSection heading='Blog' />
            <section className='blog_section'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className='blog_section_wrapper'>
                                <h1 className='blog_head_title'>SliceLedger At GITEX North Star Event 2022 Dubai: What To Expect?</h1>
                                <div className='blog_img_div'>
                                    <Image className='blog_img' fluid src={Blog_img} alt="blog Image" />
                                </div>

                                {/* <h3>CDN has geared up for GITEX North Star, are you ready to seize the opportunity?</h3> */}
                                <p>One of the most futuristic cities in the world is Dubai. It has established itself as an epicentre for significant global developments. GITEX, or the Gulf Information Technology Exhibition, is a conference and exhibition held in the Dubai World Trade Center. Numerous participants from all around the world have been drawn to it.</p>
                                <p>Since its inception, GITEX has provided businesses with incredible chances to grow their operations. The purpose of this event is for brilliant minds to showcase their technical prowess and innovation.</p>


                                <h2>Slice Ledger at GITEX North Star 2022</h2>
                                <p>Slice Ledger is the next generation EVM compatible blockchain running on Proof of stake and Proof of Play consensus mechanism. It is a public blockchain network providing world-class security to all the participants.</p>

                                <h2>What are we trying to achieve?</h2>
                                <p><b> High Throughput :</b> Many of the prominent blockchain networks face issues of low throughput. We have aimed for a high number of transactions without sacrificing security.</p>

                                <p> <b> Low gas fees:</b> Whereas some networks have charged 20$ gas fees to process the transaction, we are providing all the necessary exciting features with negligible gas fees.</p>


                                <p> <b> Low power consumption:</b> Some of the networks still use the old PoW mechanism which results in high computational power. We have adopted a Proof of Stake consensus mechanism to address this issue.</p>

                                <p> <b> Block Size:</b> The transaction can be confirmed in 1.5 seconds using Sliceledger's 620B block size. The block size is greater than other blockchains, however it has no impact on the network's performance or scalability. </p>

                                <p> <b> No Network Congestion:</b> Transactions depend on network congestion. As more nodes join the network, the network’s speed of processing the transactions becomes slow. We have tried to address this issue by making our network more scalable.</p>

                                <h3>Be a Part of the Slice Ledger Community</h3>
                                <p>This thriving international community is supported by SliceledgerChain. Sliceledger gives community members the tools they need to collaborate and build a worthwhile SliceledgerHub.</p>

                                <h3>Develop a decentralized future with us</h3>
                                <p>Behind every new technological innovation, there is a developer. Give developers the right resources and they can do wonders. Our objective is to empower developers so that they can create user-friendly Dapps, Defi platforms, NFT Marketplaces, Cryptocurrency Exchanges, Smart Contracts, Tokens and Launchpads using SliceLedger.  </p>

                                <h3>We would love to meet you!!!</h3>
                                <p>10th to 13th October (Gulf Standard Time United Arab Emirates)</p>

                                <div className='schedule_btn_div'>
                                    <a href='https://calendly.com/sliceledger/meet-us-at-gitexglobal?month=2022-10' target="_blank">Schedule our meeting now</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
