import React from 'react'
import './Layout.scss';
import Container from 'react-bootstrap/Container';

const Layout = ({children}) => {
    return (
        <section className='section-layout'>
            <Container>
                {children}
            </Container>
        </section>
    )
}

export default Layout