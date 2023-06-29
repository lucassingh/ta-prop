import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-4.jpg'
import '../styles/section.scss';

const Documentary = () => {
    return (
        <section className='section-'>
            <div className='container pt-4'>
                <Row className="flex-column-reverse flex-md-row">
                    <Col md={6} className='mt-5 d-md-flex justify-content-md-start align-items-md-start text-center'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>El documental</h2>
                        <span className='text'>
                            Liliana, sobrina nieta de Lothar Hermann -un alemán
                            de ascendencia judía que debió emigrar a la Argentina
                            huyendo del Holocausto- regresa a Quirnbach,
                            Alemania, la ciudad natal de su familia.
                            En este viaje a las raíces, asiste a una serie de
                            homenajes a su familia. También se encuentra con
                            Ricardo Eichmann, hijo de Adolf Eichmann, uno de los
                            arquitectos de la “solución final” y quien fuera
                            denunciado por su tío abuelo Lothar.
                            Lo que parecía un encuentro imposible de historias
                            irreconciliables, se transforma en la evolución.
                        </span>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Documentary