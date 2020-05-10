import React, { Component } from 'react'

import banner1 from '../../../../../images/Carousel_Banner1.png'
import banner2 from '../../../../../images/Carousel_Banner2.png'
import banner3 from '../../../../../images/Carousel_Banner3.png'

import styles from '../../styles/component/carousel.scss'

class Carousel extends Component {

    render() {
        const { handleRegisterOpen } = this.props

        return (
            <div className={styles['banner']}>
                <div className={styles['carousel_wrapper']}>
                    <div id={`${styles['carouselCaptions']}`} className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target={`#${styles['carouselCaptions']}`} data-slide-to="0" className="active"></li>
                            <li data-target={`#${styles['carouselCaptions']}`} data-slide-to="1"></li>
                            <li data-target={`#${styles['carouselCaptions']}`} data-slide-to="2"></li>
                        </ol>
                        <div className={`carousel-inner ${styles['carousel_list']}`}>
                            <div className={`carousel-item active ${styles['carousel_list_item']}`}>
                                <div className={styles['ovelay']} style={{ backgroundColor: 'transparent linear-gradient(0deg, #050505 0%, #2E2E2E9F 43%, #FFFFFF00 100%)' }}>
                                    <div className={styles['container']}>
                                        <div className={styles['inner']}>
                                            <div className={styles['rows']}>
                                                <div className={styles['register']} onClick={handleRegisterOpen}>Register</div>
                                            </div>
                                            <div className={styles['rows']}>
                                                <div className={styles['item']}>Dream Big ~ Start Small</div>
                                                <div className={styles['item']}>Build Your Child’s Foundation With Us</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={banner1} className="d-block img-fluid" alt="Banner 1" />
                            </div>
                            <div className={`carousel-item ${styles['carousel_list_item']}`}>
                                <div className={styles['ovelay']} style={{ backgroundColor: 'transparent linear-gradient(0deg, #050505 0%, #2E2E2E9F 43%, #FFFFFF00 100%)' }}>
                                    <div className={styles['container']}>
                                        <div className={styles['inner']}>
                                            <div className={styles['rows']}>
                                                <div className={styles['register']} onClick={handleRegisterOpen}>Register</div>
                                            </div>
                                            <div className={styles['rows']}>
                                                <div className={styles['item']}>Stand out from the Competition</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={banner2} className="d-block img-fluid" alt="Banner 2" />                            
                            </div>
                            <div className={`carousel-item ${styles['carousel_list_item']}`}>
                                <div className={styles['ovelay']}>
                                    <div className={styles['container']}>
                                        <div className={styles['inner']}>
                                            <div className={styles['rows']}>
                                                <div className={styles['register']} onClick={handleRegisterOpen}>Register</div>
                                            </div>
                                            <div className={styles['rows']}>
                                                <div className={styles['item']}>Small Ratio Classes with our Highly Experienced &amp; Passionate International Training Staff</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={banner3} className="d-block img-fluid" alt="Banner 3" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href={`#${styles['carouselCaptions']}`} role="button" data-slide="prev">
                            <span className="ti-angle-left" aria-hidden="true" style={{ fontSize: '2em' }}></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={`#${styles['carouselCaptions']}`} role="button" data-slide="next">
                            <span className="ti-angle-right" aria-hidden="true" style={{ fontSize: '2em' }}></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div> 
            </div>
        )
    }

}

export default Carousel