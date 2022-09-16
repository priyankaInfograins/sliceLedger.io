import React, {useState} from 'react'
import { Container, Row, Col, Form, Image, Spinner } from 'react-bootstrap';
import HeroSection from '../HeroSection';
import SiteLogo from '../../assets/images/logo.png';
import Web3 from 'web3';
import { ABI, CONTACT_ADDRESS } from '../../SliceBlock'




const Faucet = () => {

    const [walletAddress, setWalletAddresss] = useState(null);
    const [transactionHash, setTransactionHash] = useState()
    const [loading, setLoading] = useState(false)
    const web3_Stake = new Web3(window.ethereum);

    const errorhandeler = () => {
        document.getElementById("wallet_address_error").style.display = "none"
        document.getElementById("wallet_address").style.display = "block"
    }


    const submitHandler = () => {

        if (walletAddress === null) {
            document.getElementById("wallet_address_error").style.display = "block"
            document.getElementById("wallet_address").style.display = "none"
            return
        }

        setLoading(true)
        window.ethereum.enable().then(async (address) => {
            var loginUserAdd = address[0];
            if (loginUserAdd) {
                const MintABiWthiCONTRACT = new web3_Stake.eth.Contract(ABI, CONTACT_ADDRESS);
                MintABiWthiCONTRACT.methods.withdraw(walletAddress)
                    .send({
                        from: loginUserAdd,
                        gas: 3000000
                    }).on('error', function (error) {
                        console.log("error", error)
                        setLoading(false)

                    }).then((data) => {
                        console.log("data", data)
                        if (data) {
                            setTransactionHash(data.transactionHash)
                            setLoading(false)
                        }
                    }).catch((error) => {
                        console.log("error", error)
                        setLoading(false)
                    })
            }
        });
    }


    return (
        <>
            <HeroSection heading='Slice Faucet' />
            <section className='slice_faucet_sec'>
                <Container >
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className='faucet_main'>
                                <p className='faucet_heading'>Fast and reliable. 0.5 SLICE/day.</p>
                                <div className='faucet_container'>
                                    {loading ?
                                        <>
                                            <div className='faucet_loader'>
                                                <Spinner animation="border" size="sm" />
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='faucet_input_button'>
                                                <Form.Control
                                                    placeholder='Enter Your Wallet Address(0x...)'
                                                    value={walletAddress}
                                                    onChange={(e) => setWalletAddresss(e.target.value)}
                                                    onKeyUp={errorhandeler}
                                                />
                                                <button onClick={submitHandler}>Send Me SLICE</button>
                                            </div>

                                            <p id="wallet_address_error" style={{ color: "red", display: "none" }}>*Please Enter your wallet address</p>
                                            <p id="wallet_address">Please enter your wallet address for SLICE. It's free!</p>
                                            <hr />
                                            <div className='faucet_table table-responsive'>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <td className='transaction_row'>Your Transactions</td>
                                                            <td>Time</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{transactionHash ? <><Image className='slice_img' src={SiteLogo} />{transactionHash} </> : <>-</>}</td>
                                                            <td>{transactionHash ? <>3 days ago</> : <>-</>}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Faucet



// Fast and reliable. 0.5 SLICE/day.