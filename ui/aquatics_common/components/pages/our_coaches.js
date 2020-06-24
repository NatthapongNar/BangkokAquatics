import React, { Component } from 'react'
import img_our_class from '../../../../images/our_class.png'

import styles from '../styles/style.scss'

import Coach1 from '../../../../images/Puwanartnarakul.png'
import Coach2 from '../../../../images/lloyd.png'
import Coach3 from '../../../../images/jonathan.png'
import Coach4 from '../../../../images/aunnop.png'

let width = $(window).width()
class OurCoaches extends Component {

    componentDidUpdate() {
        $(window).resize(function() {
            let w = $(window).width()
            if(w <= 768) {
                $('#coach_info1').removeClass('order-first').addClass('order-last')
                $('#coach_picture1').removeClass('order-last').addClass('order-first')
                $('#coach_info2').removeClass('order-first').addClass('order-last')
                $('#coach_picture2').removeClass('order-last').addClass('order-first')
            } else {
                $('#coach_info1').removeClass('order-last').addClass('order-first')
                $('#coach_picture1').removeClass('order-first').addClass('order-last')
                $('#coach_info2').removeClass('order-last').addClass('order-first')
                $('#coach_picture2').removeClass('order-first').addClass('order-last')
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
                    <section className={`${styles['ourr_coach_present']}`}>
                        <div className="container">
                            <div className="row" style={{ marginBottom: '20px' }}>
                                <div className="col-lg-5 col-md-6" data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach1} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6" data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Ni Puwanartnarakul</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My Name is <b>Ni Puwanartnarakul</b> and I have been teaching swimming for over <b>14 years.</b></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}>Some of my accomplishments include:</p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}>International Certificate in Sports</li>
                                            <li className={`${styles['text']}`}>Coaching from United States Sports Academy</li>
                                            <li className={`${styles['text']}`}>Level 3 coach at American Swimming Coach Association giving my experience with all age groups and physiology.</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="row">                                
                                <div id="coach_info1" className={`col-lg-7 col-md-6 ${(width <= 768) ? 'order-last':'order-first'}`} data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Lloyd</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is <b>Lloyd</b> and I have vast experience coaching in Thailand, Singapore and Australia. My effective coaching style has brought dividends to all teams I have worked with. I have a strong focus on technique and team culture.</p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}>Some of my accomplishments include:</p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}>I was a competitive swimmer and active lifesaver whilst in Australia.</li>
                                            <li className={`${styles['text']}`}>My qualifications include Head Coach SCA, ASCTA Bronze, Masters Australia and Singapore National Accretion.</li>
                                        </ul>
                                    </section>
                                </div>
                                <div id="coach_picture1" className={`col-lg-5 col-md-6 ${(width <= 768) ? 'order-first':'order-last'}`} data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach2} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: '20px' }}>
                                <div className="col-lg-5 col-md-6" data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach3} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6" data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Jonathon</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is <b>Jonathon</b> and I have been teaching swimming for over <b>21 years.</b></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}>Some of my accomplishments include:</p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}>Fitness First Swim School Manager in St.Leonards Sydney</li>
                                            <li className={`${styles['text']}`}>Aquatics and PE coordinator at AISB (Australian International school Bangkok)</li>
                                            <li className={`${styles['text']}`}>Team Leader for UNSW (University of NSW) Sport and Children’s Programs</li>
                                            <li className={`${styles['text']}`}>Bachelor of Education (Primary)</li>
                                            <li className={`${styles['text']}`}>Diploma of Recreation (Sports Coaching)</li>
                                            <li className={`${styles['text']}`}>Austswim teacher of Swim Coaching </li>
                                            <li className={`${styles['text']}`}>Austswim teacher of learn to swim</li>
                                            <li className={`${styles['text']}`}>Austswim teacher of infants and babies</li>
                                            <li className={`${styles['text']}`}>Swim Australia teacher of disabilities and inclusion</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className="row">                                
                                <div id="coach_info2" className={`col-lg-7 col-md-6 ${(width <= 768) ? 'order-last':'order-first'}`} data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Aunnop Wannachot</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is <b>Aunnop Wannachot</b> and I have been teaching swimming for over <b>26 years.</b></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}>Some of my accomplishments include:</p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}><b>Swim Coach</b> : St. Andrews International School, Sukhumvit 107</li>
                                            <li className={`${styles['text']}`}><b>Swim Coach</b> : Brighton College Bangkok International School</li>
                                            <li className={`${styles['text']}`}><b>Swim Coach</b> : Bangkok Prep Secondary Campus International School</li>
                                            <li className={`${styles['text']}`}><b>Swimming Coach and Manager</b> : Jim’s Swimming club (Ramkhamhaeng 44)</li>
                                            <li className={`${styles['text']}`}><b>Swim Coach</b> : Sports Authority of Thailand</li>
                                            <li className={`${styles['text']}`}><b>Certification</b> : Swim coach asia license accreditation SCA level 3 (Head coach syllabus)</li>
                                            <li className={`${styles['text']}`}><b>Certification</b> : The Swimming coaches association of Thailand (coaching level 3)</li>
                                            <li className={`${styles['text']}`}><b>Certification</b> : Cardio Pulmonary Resuscitation (CPR) From Thai Life Saving Society</li>
                                            <li className={`${styles['text']}`}><b>Certification</b> : Active Child Program (ACP) From Japan Sport Association</li>
                                        </ul>
                                    </section>
                                </div>
                                <div id="coach_picture2" className={`col-lg-5 col-md-6 ${(width <= 768) ? 'order-first':'order-last'}`} data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach4} className={styles['img']} alt="Class Group" />
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