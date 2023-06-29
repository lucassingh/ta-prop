import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './item.scss'

const Items = () => {
    return (
        <div className='main-container'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={2} className='item text-center'><span>AI</span></Col>
                    <Col md={2} className='item text-center'><span>REALIDAD<br /> VIRTUAL</span></Col>
                    <Col md={2} className='item text-center'><span>TECNOLOGÍAS<br /> ALTERNATIVAS</span></Col>
                    <Col md={2} className='item text-center'><span>REALIDAD<br /> AUMENTADA</span></Col>
                    <Col md={2} className='item text-center'><span>TECNOLOGÍA DE <br /> FRECUENCIAS <br /> Y VIBRACIONES</span></Col>
                    <Col md={2} className='item text-center'><span>HOLOGRAMAS</span></Col>
                </Row>
            </div>

        </div>
    )
}

export default Items