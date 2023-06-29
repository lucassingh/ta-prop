import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-5.jpg'
import '../styles/section.scss';

const Book = () => {
    return (
        <section className='section-'>
            <div className='container pt-4 pb-5'>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>El Libro</h2>
                        <span className='text'>
                            Este libro es una colección de entrevistas con
                            descendientes directos, incluyendo hijos, nietos y
                            sobrinos de aquellos que participaron en el régimen
                            nazi o que fueron víctimas del Holocausto.
                            Cada entrevistado responde a las mismas preguntas,
                            pero con sus propias palabras y experiencias
                            personales, brindando una perspectiva única y
                            conmovedora sobre la historia del Holocausto.
                            El libro está diseñado para ayudar a los lectores a
                            encontrar su propio camino hacia la evolución y la
                            trascendencia.
                        </span>
                    </Col>
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-end align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Book