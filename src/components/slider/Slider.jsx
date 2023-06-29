import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import testimonials from '../../assets/data/data';
import './slider.scss'

const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = testimonials[activeIndex];

    function handleNext() {
        if (activeIndex >= testimonials.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    }
    function handlePrev() {
        if (activeIndex === 0) {
            setActiveIndex(testimonials.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    }

    return (
        <div className='wrapper-slider'>
            <div className="container-slider">
                <div className="testimonial__wrapper">
                    <SwitchTransition component={null}>
                        <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    <div className='text_desc'>{activeSlide.desc}</div>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>

            <div className="arrows">
                <div
                    className="prev"
                    onClick={handlePrev}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handlePrev}
                >
                    <MdArrowBack />
                </div>
                <div
                    className="next"
                    onClick={handleNext}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleNext}
                >
                    <MdArrowForward />
                </div>
            </div>
        </div>
    )
}

export default Slider