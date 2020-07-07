import React, { Component } from 'react'
import img_our_class from '../../../../images/our_class.png'

import styles from '../styles/style.scss'

import Coach1 from '../../../../images/Puwanartnarakul.png'
import Coach2 from '../../../../images/lloyd.png'
import Coach3 from '../../../../images/jonathan.png'
import Coach4 from '../../../../images/aunnop.png'
import Coach5 from '../../../../images/greg_hardy.png'

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
                                        <p className={styles['text']}>My Name is <span className={styles['bold']}>Ni Puwanartnarakul</span> and I have been teaching swimming for over <span className={styles['bold']}>14 years.</span></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Some of my accomplishments include:</u></p>
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
                                        <p className={styles['text']}>My name is <span className={styles['bold']}>Lloyd</span> and I have been coaching swim squads throughout Thailand, Singapore and Australia for <span className={styles['bold']}>15 years</span>. Prior to that I was a competitive swimmer in Australia. I have a strong focus on technique and efficiency. My effective coaching style has brought dividends to all teams I have worked with. I have a strong focus on technique and team culture.</p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Some of my accomplishments include:</u></p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}>I was a competitive swimmer and active lifesaver whilst in Australia.</li>
                                            <li className={`${styles['text']}`}>ASCTA Bronze</li>
                                            <li className={`${styles['text']}`}>Masters Coaching</li>
                                            <li className={`${styles['text']}`}>Singapore National Accreditation Coaching</li>
                                            <li className={`${styles['text']}`}>SCA Head Coaching</li>
                                            <li className={`${styles['text']}`}>Austswim Teaching Qualifications ( 3 )</li>
                                            <li className={`${styles['text']}`}>Australian Lifesaver.</li>
                                            <li className={`${styles['text']}`}>Team Captain Masters Swim Captain Australia</li>
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
                                        <p className={styles['text']}>My name is <span className={styles['bold']}>Jonathon</span> and I have been teaching swimming for over <span className={styles['bold']}>21 years.</span></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Some of my accomplishments include:</u></p>
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
                                        <p className={styles['text']}>My name is <span className={styles['bold']}>Aunnop Wannachot</span> and I have been teaching swimming for over <span className={styles['bold']}>26 years.</span></p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Some of my accomplishments include:</u></p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Swim Coach</span> : St. Andrews International School, Sukhumvit 107</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Swim Coach</span> : Brighton College Bangkok International School</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Swim Coach</span> : Bangkok Prep Secondary Campus International School</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Swimming Coach and Manager</span> : Jim’s Swimming club (Ramkhamhaeng 44)</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Swim Coach</span> : Sports Authority of Thailand</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Certification</span> : Swim coach asia license accreditation SCA level 3 (Head coach syllabus)</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Certification</span> : The Swimming coaches association of Thailand (coaching level 3)</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Certification</span> : Cardio Pulmonary Resuscitation (CPR) From Thai Life Saving Society</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Certification</span> : Active Child Program (ACP) From Japan Sport Association</li>
                                        </ul>
                                    </section>
                                </div>
                                <div id="coach_picture2" className={`col-lg-5 col-md-6 ${(width <= 768) ? 'order-first':'order-last'}`} data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach4} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: '20px' }}>
                                <div className="col-lg-5 col-md-6" data-aos="fade-left">
                                    <div className={`${styles['picture']}`}>
                                        <img src={Coach5} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6" data-aos="fade-right">
                                    <section>
                                        <h2 className={`${styles['title_name']} ${styles['bold']}`}>Meet Greg Hardy</h2>
                                        <div className={styles['symblo']}>“</div>
                                        <p className={styles['text']}>My name is <span className={styles['bold']}>Greg Hardy</span> and I am holding Austwim Teacher of Swimming and Water Safety qualifications(Australian swimming instructor).</p>
                                        <p className={styles['text']}>I was previously involved in competitive sport, and am a great believer in the benefits of being fit and active, as well as the importance of everyone being able to swim competently.</p>
                                        <p className={styles['text']}>I specialize in teaching learn to swim classes. Nothing gives me more pleasure than seeing a young child go from being scared of the water to confidently swimming a lap or two! I have worked as a swimming instructor in Thailand and South Korea, at both schools and aquatic centers. At all times I strive to make my classes fun and safe, and to be responsible, reliable and polite.</p>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Employment history /Job roles:</u></p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']} ${styles['mb20']}`}><span className={styles['bold']}>Olympic Park Indoor Swimming Pool, Seoul, South Korea</span><br/>Jan 2015 to June 2016.<br/>Taught both private lessons and group classes to students aged 4 to 12. Class levels ranged from complete novices to low level squads. Classes taught in both Korean and English.</li>
                                            <li className={`${styles['text']} ${styles['mb20']}`}><span className={styles['bold']}>Bangkok Aquatics, Bangkok, Thailand.</span><br/>October 2019 to March 2020.<br/>Learn to swim and low level squad classes as well as camps during vacations.</li>
                                        </ul>
                                        <p className={`${styles['text']} ${styles['mb0']}`}><u>Relevant Qualifications</u></p>
                                        <ul className={`${styles['pl20']}`}>
                                            <li className={`${styles['text']} ${styles['mb20']}`}><span className={styles['bold']}>Austwim Teacher of Swimming and WaterSafety,</span><br/>last undertaken in September 2019.</li>
                                            <li className={`${styles['text']}`}><span className={styles['bold']}>Provide Cardiopulmonary Resuscitation (CPR),</span><br/>undertaken in September 2019.</li>
                                        </ul>
                                    </section>
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