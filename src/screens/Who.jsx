import React from 'react'
import '../styles/who.scss';
import { Col, Row } from 'react-bootstrap'
import Slider from '../components/slider/Slider';

const Who = () => {
    return (
        <section className='who-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={12}>
                        <h2 className='header-section'>Lothar y Liliana Hermann</h2>
                        <p className='title mb-0'>
                            La Segunda Guerra Mundial, El
                            Holocausto y la Justicia por Lothar
                            Hermann.
                        </p>
                    </Col>
                </Row>
                <Row md={12}>
                    <Slider />
                </Row>
            </div>
        </section>
    )
}

export default Who