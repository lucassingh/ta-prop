import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../styles/proposal.scss';

const Proposal = () => {
    return (
        <section className='section-proposal text-center'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={12}>
                        <span>
                            Al finalizar este proyecto <br />
                            habremos plantado <br />
                            60 millones de árboles, <br />
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <span className='color'>
                            Una cantidad que <br />
                            responde a las víctimas <br />
                            de la Segunda Guerra Mundial <br />
                        </span>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Proposal