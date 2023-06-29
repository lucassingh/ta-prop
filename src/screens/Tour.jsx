import React from 'react'
import '../styles/tour.scss';
import { Col, Row } from 'react-bootstrap'

const Tour = () => {
    return (
        <section className='tour-section'>
            <div className='bg'></div>
            <div className='container'>
                <Row className='mt-3'>
                    <Col md={12}>
                        <h5>El recorrido de Liliana Hermann al conocer su realidad.</h5>
                    </Col>
                </Row><br />
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <p className='text mb-0'>
                            Liliana, sobrina nieta de Lothar Hermann, ya
                            adulta se entera de que su historia familiar
                            era una ficción para, de alguna manera,
                            protegerla de la realidad.
                        </p>

                        <p className='text mb-0'>
                            Esto llevó a Liliana y a su compañero Ariel
                            Mereles a encontrar la verdad y recorrer un
                            camino asombroso junto a otros descendientes que abrieron sus corazones en este viaje
                            de evolución
                        </p> <br/>

                        <p className='text mb-0'>
                            Compartiremos su inconmensurable acto de
                            valentía, devoción, perseverancia y
                            transformación, logrando la unión.
                        </p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Tour