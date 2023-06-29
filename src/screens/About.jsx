import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import imgTwo from '../assets/img-1.jpg'
import '../styles/about.scss';

const About = () => {
    return (
        <section className='section-about'>
            <div className='container'>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3 mt-3'>Que es un Arborista?</h2>
                        <span className='text'>Un Arborista es quien, con intención, cuida de
                            un árbol. Es quien lo hace florecer y lo ayuda a
                            sanar cuando enferma. Es quien alimenta la tierra,
                            crea vida, cuida sus frutos y cosecha con
                            conciencia un planeta mejor.
                        </span>
                    </Col>
                    <Col md={6} className='mt-5 mb-5 d-md-flex justify-content-md-end align-items-md-start text-center'>
                        <Image src={imgTwo} width='80%' />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default About