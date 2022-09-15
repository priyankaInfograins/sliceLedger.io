import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import appstore from '../../assets/images/appstore.png';
import playstore from '../../assets/images/playstore.png';
import "aos/dist/aos.css";
import { WOW } from "wowjs";




export default function LeftImageSection(props) {


    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })

    return (
        <section className='leftImageSection '>
            <Container>
                <Row>
                    <Col lg={{ span: 6, order: 'first' }} md={{ order: 'last' }} xs={{ order: 'last' }}>

                        <div className='image_holder '>
                            <Image fluid src={props.sectioimg} alt="img" />
                        </div>

                    </Col>
                    <Col lg={{ span: 6, order: 'last' }} md={{ order: 'first' }} xs={{ order: 'first' }}>

                        <div className='leftImageSection_content '>
                            <h2><span>{props.headpart1}</span> {props.headpart2}</h2>
                            <p>
                                {props.content}
                            </p>
                            {
                                props.applink ?
                                    <div className='storediv'>
                                        <a href={props.applink} target="_blank">
                                            <img alt="appstore" className="appstoreImg" src={appstore}></img>
                                        </a>
                                        <a href={props.playstorelink} target="_blank">
                                        <img  alt="playstore" className="playstoreImg" src={ playstore}></img>
                                        </a>
                                    </div>
                                    :
                                    <a className="websitelink" href={props.btnLink} target="_blank">{props.btnContent}</a>
                            }
                        </div>


                    </Col>
                </Row>
            </Container>

        </section>


    )
}



