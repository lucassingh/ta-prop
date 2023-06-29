import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-3.jpg'
import '../styles/section.scss';

const Exibition = () => {
    return (
        <section className='section-'>
            <div className='container mt-4'>
                <Row>
                    <Col md={6} className='d-md-flex justify-content-md-center align-items-md-start flex-md-column'>
                        <h2 className='title-about- mb-3'>La Exhibición</h2>
                        <span className='text'>
                            Una exhibición histórica, holística e inmersiva.
                            Se desarrolla en múltiples recorridos con tecnología
                            aplicada a la experiencia vivencial.<br />
                            • Realidad Aumentada <br />
                            • Realidad Virtual <br />
                            • Inteligencia Artificial <br />
                            • Hologramas <br />
                            • Tecnología de Frecuencias y Vibraciones <br />
                            • Música y Meditaciones <br />
                            Una Propuesta de Evolución. Una Experiencia Colectiva.
                            Premieres en 2024 / Buenos Aires, Argentina
                            Berlín, Alemania / Jerusalén, Israel.
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

export default Exibition