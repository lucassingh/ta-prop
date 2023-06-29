import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import img from '../assets/img-2.jpg'
import '../styles/offer.scss'

const Offer = () => {
    return (
        <section className='section-offer'>
            <div className='container pt-5 pb-5'>
                <Row>
                    <Col md={4} className='cont-img'>
                        <Image src={img} width='80%' />
                    </Col>
                    <Col md={8} className='cont-text'>
                        <h4>¿Estás listo para ser un Arborista?</h4>
                        <span>
                            Al final de la exhibición y por medio de una plataforma de crowdfounding, tendrás la
                            posibilidad de plantar un árbol en el planeta. The Arborists, mediante una fundación
                            especializada en reforestaciones de bosques, creará un sistema en donde todos podrán
                            convertirse en arboristas, eligiendo un árbol con un código específico, y a través de una
                            persona responsable de la acción de marca, se plantará un árbol como símbolo-decreto de
                            evolución humanitaria; además, por medio de una membresía, recibirán el control de
                            crecimiento, la ubicación exacta y el nombre del mismo.
                        </span>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Offer