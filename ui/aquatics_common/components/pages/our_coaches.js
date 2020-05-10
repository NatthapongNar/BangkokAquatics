import React, { Component } from 'react'
import img_our_class from '../../../../images/our_class.png'

import styles from '../styles/style.scss'

import Coach1 from '../../../../images/Coach1.png'
import Coach2 from '../../../../images/Coach2.png'

let width = $(window).width()
class OurCoaches extends Component {

    componentDidUpdate() {
        $(window).resize(function() {
            let w = $(window).width()
            if(w <= 768) {
                $('#coach_info').removeClass('order-first').addClass('order-last')
                $('#coach_picture').removeClass('order-last').addClass('order-first')
            } else {
                $('#coach_info').removeClass('order-last').addClass('order-first')
                $('#coach_picture').removeClass('order-first').addClass('order-last')
            }
            
        })
    }

    render() {
        return (
            <div className={styles['aquatic_content']}>
                <div className={styles['our_brand']}>
                    <img src={img_our_class} />
                    <div className={styles['overlay']}>
                        <div className={styles['text']}>Our coaches</div>
                    </div>
                </div>
                <div className="container">
                    <section className={`${styles['present']}`}>
                        <div className="container">
                            <div className="row" style={{ marginBottom: '20px' }}>
                                <div className="col-lg-6 col-md-6" data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach1} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Alex</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is Alex and I have been teaching swimming for over 15 years now. I have had a very special connection to the water since a very young age. I have taught hundreds of kids starting from the youngest beginners to competitive swimmers. Many of my students qualified for Junior Olympics and Zone Competitions.</p>
                                    </section>
                                </div>
                            </div>
                            <div className="row">                                
                                <div id="coach_info" className={`col-lg-6 col-md-6 ${(width <= 768) ? 'order-last':'order-first'}`} data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Keiran</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is Keiran and I have been teaching swimming for over 15 years now. I have had a very special connection to the water since a very young age. I have taught hundreds of kids starting from the youngest beginners to competitive swimmers. Many of my students qualified for Junior Olympics and Zone Competitions.</p>
                                    </section>
                                </div>
                                <div id="coach_picture" className={`col-lg-6 col-md-6 ${(width <= 768) ? 'order-first':'order-last'}`} data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach2} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>         
                        </div>
                    </section>

                </div>
            </div>
        )
    }

}

export default OurCoaches