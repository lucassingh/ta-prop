import React from 'react'
import { Col, Row, Image } from 'react-bootstrap';
import logos from '../../assets/logos.png';
import './prefooter.scss'

const Prefooter = () => {
    return (
        <section id='contact' className='section-prefooter'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={4}>
                        <Image src={logos} width='100%' />
                    </Col>
                    <Col md={8} className='cont-address'>
                        <div className='cont-text'>
                            <span className='title'>
                                Contacto
                            </span><br /> <br />
                            <span className='text'>
                                +1-305-776-1667 <br />
                                info@the-arborist.com
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Prefooter