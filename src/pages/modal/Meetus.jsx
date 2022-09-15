import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { FaCalendarAlt } from "react-icons/fa"
import CalenderIcon from '../../assets/images/calendar.png'
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Meetus(props) {
    const navigate = useNavigate()
    // const [modalShow, setModalShow] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const handleSet = () => {
        sessionStorage.setItem("firstUser", "infograins");
    }
    useEffect(() => {
        let firstUser = sessionStorage.getItem("firstUser");
        if (!firstUser) {
            setModalShow(true)
        } else {
            setModalShow(false)
        }
        // setModalShow(true)
    }, [])


    const handleRedirect = () => {
        // navigate("/blog/sliceLedger-at-gitex-event")
        // setModalShow(false)
    }


    return (
        <>
            {/* <section className='event_popup'>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={modalShow}
                    className="event_modal_div"
                   
                >
                    <Modal.Header closeButton className='event_header'  onClick={handleSet}>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='event_popup_modal'>
                        <h2 className='Meet-head2 mb-3'>Meet Us At GITEX North Star Dubai 2022</h2>
                        <h4 className='Pod-head4 pb-2'>Pod No: P-B247</h4>
                        <div className='calender_div'>
                            <Image src={CalenderIcon} alt="" fluid />
                            <span className='num-content'> 10<sup>th</sup> - 13<sup>th</sup> Oct, 2022</span>
                        </div>
                        <p className='meetmepara pt-3'>
                            Schedule your meeting in advance to save your time and get a hassle-free interaction with us at the event.
                        </p>
                        <p className='availabe-for pb-3'>We are available for you 24*7</p>

                        <button className='know-btn' onClick={handleRedirect}>Know More</button> <a href="https://calendly.com/sliceledger/meet-us-at-gitexglobal?month=2022-10" target="_blank" className='meet-btn' >Schedule a Meeting</a>
                    </Modal.Body>

                </Modal>

            </section> */}

            <section className='event_popup'>
                <Modal
                   
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={modalShow}
                    onHide={() => setModalShow(false)}
                    className="event_modal_div"
                >
                    <Modal.Header closeButton className='event_header'>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='event_popup_modal'>
                        <h2 className='Meet-head2 mb-3'>Meet Us At GITEX North Star Dubai 2022</h2>
                        <h4 className='Pod-head4 pb-2'>Pod No: P-B247</h4>

                        <div className='calender_div'>
                            <Image src={CalenderIcon} alt="" fluid />
                            <span className='num-content'> 10<sup>th</sup> - 13<sup>th</sup> Oct, 2022</span>
                        </div>
                        <p className='meetmepara pt-3'>
                            Schedule your meeting in advance to save your time and get a hassle-free interaction with us at the event.
                        </p>
                        <p className='availabe-for pb-3'>We are available for you 24*7</p>

                        <button className='know-btn'>Know More</button> <button className='meet-btn'>Schedule a Meeting</button>
                    </Modal.Body>

                </Modal>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                </Button>
            </section>
        </>
    );
}

export default Meetus