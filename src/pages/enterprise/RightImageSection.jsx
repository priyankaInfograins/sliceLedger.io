import React ,{useEffect}from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
// import demo from '../../assets/images/Page-1.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { WOW } from "wowjs";

export default function RightImageSection(props) {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     });
    // },[])
    useEffect(() => {
        const wow = new WOW({ live: false }); 
        wow.init()
        })
    return (
        <section className='rightImageSection '>
            <Container>
                <Row >
                    <Col lg={6} md={{ order: 'first' }} xs={{ order: 'first' }}>
               
                            <div className='rightImageSection_content wow slideInLeft'>
                            <h2><span>{props.headpart1}</span> {props.headpart2}</h2>
                                <p>
                               {props.content}
                                </p>
                                <a className='websitelink' href={props.btnLink} target="_blank">{props.btnContent}</a>
                            </div>

                    </Col>
                    <Col lg={6} md={{ order: 'last' }} xs={{ order: 'last' }}>
                      
                        <div className='image_holder wow slideInRight'>
                                <Image fluid src={props.sectioimg} alt="img" />
                        </div>
               
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
