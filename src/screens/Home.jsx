import React from 'react';
import '../styles/home.scss'
//import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BrowserView, MobileView } from 'react-device-detect';

const Home = () => {

    // const { t } = useTranslation("global");

    return (
        <section className='section-hero'>
            <div className='bg'></div>
            <div className='container'>
                <Row className='pt-3 pb-3'>
                    <Col md={12} className='header-container'>
                        <h1>The Arborist</h1>
                        <span className='subtitle-thin'>Proyecto Holístico Inmersivo</span>

                        <BrowserView>
                            <span className='subtitle-regular'>Transformando la Historia<br /> desde el Corazón</span>
                        </BrowserView>

                        <MobileView>
                            <span className='subtitle-regular'>Transformando la Historia desde el Corazón</span>
                        </MobileView>

                        <span className='sign'>Lothar y Liliana Hermann</span>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Home