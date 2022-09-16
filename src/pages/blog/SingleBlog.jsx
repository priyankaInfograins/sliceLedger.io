import React from 'react'
import Header from '../../common/DocHeader'
import HeroSection from '../HeroSection'
import { Container, Row, Col } from 'react-bootstrap'
import Blog_img from '../../assets/images/blog.png'
import {Link} from 'react-router-dom';

function SingleBlog() {


  return (
    <>
        <Header/>
        <HeroSection heading='Our Latest Blog' />
        <div className='single_blog_wrap'>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <div className='single_blog_card'>
                            <div className='blog_img'>
                                <img src={Blog_img} alt="" className='img-fluid' />
                            </div>
                            <div className='blog_content'>
                            <div className='blog_heading'>Slice Ledger at GITEX North Star 2022</div>
                            <div className='blog_para'>One of the most futuristic cities in the world is Dubai. It has established itself as an epicentre for significant global developments. GITEX, or the Gulf Information Technology Exhibition...</div>
                            <Link to="/blog/sliceLedger-at-gitex-event" className='blog_readMore_btn'>Read More</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </>
  )
}

export default SingleBlog