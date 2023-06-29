import React from 'react'
import '../styles/evolution.scss';
import { Col, Row } from 'react-bootstrap'

const Evolution = () => {
    return (
        <section className='evolution-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row>
                    <Col md={12}>
                        <h5>La Evolución desde el Corazón.</h5>
                    </Col>
                </Row><br />
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <p className='text mb-0'>
                            The Arborists es un viaje vivencial, una
                            oportunidad para conectar y transformar el
                            dolor colectivo y propio a través del
                            aprendizaje, la restauración de la neutralidad
                            y la transcendencia, porque entendemos que
                            solo cuando el dolor se transforma, se
                            convierte en compasión, reparación y
                            agradecimiento.
                        </p><br />

                        <p className='text mb-0'>
                            Solo así trascendemos y evolucionamos
                            como nuevos árboles en un bosque más
                            habitable.
                        </p><br />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Evolution