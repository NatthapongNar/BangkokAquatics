import React, { Component } from 'react'
import _ from 'lodash'

import Carousel from './component/carousel'
import Register from './component/register'

import styles from '../styles/style.scss'

import phone from '../../../../images/phone.png'
import mail from '../../../../images/mail.png'
import line from '../../../../images/line.png'


import class_swim from '../../../../images/class_swim.png'

import card_h1 from '../../../../images/card_1.png'
import card_h2 from '../../../../images/card_2.png'
import card_h3 from '../../../../images/card_3.png'
import card_h4 from '../../../../images/card_4.png'

import assigment_img from '../../../../images/card_5.png'

import coach_recom from '../../../../images/coach_recom.png'
import swin_class from '../../../../images/swim_class.png'
import schedule_class from '../../../../images/schedule_class.png'

class Home extends Component {

    constructor(props, context) { 
        super(props, context)

        this.state = {
            register: {
                isOpen: false
            }
        }

        AOS.init({ disable: 'mobile' })
    } 

    componentDidMount() {
        this.componentDidUpdate()

    }

    componentDidUpdate() {
        _.delay(() => {
            AOS.refresh()
        }, 500)
        
    }

    handleRegisterOpen = () => {
        this.setState({ register: _.assign({}, this.state.register, { isOpen: true }) })
    }

    handleRegisterClose = () => {
        this.setState({ register: _.assign({}, this.state.register, { isOpen: false }) })
    }

    render() {
        return (
            <div className={styles['aquatic_content']}>
                
                <Carousel 
                    handleRegisterOpen={this.handleRegisterOpen}
                />

                <Register 
                    data={this.state.register}
                    handleClose={this.handleRegisterClose}
                />

                <article className={styles['contact_container']}>
                    <h6 className={styles['title']}>Any questions? We’ll get back to you ASAP</h6>
                    <div className={styles['contact_channel']}>
                        <div className={styles['contact_item']}>
                            <img src={phone} className={styles['icon']} /> 
                            <span className={styles['text']}>095 527 0999</span>
                        </div>
                        <div className={styles['contact_item']}>
                            <img src={mail} className={styles['icon']} /> 
                            <span className={styles['text']}>mijitra@gmail.com</span>
                        </div>
                        <div className={styles['contact_item']}>
                            <img src={line} className={styles['icon']} /> 
                            <span className={styles['text']}>bangkok-aquatics</span>
                        </div>
                    </div>
                </article>
                            
                <div className={styles['aquatic_wrapper']}>
                    <div className={styles['preCurve']}>&nbsp;</div>
                    <div className={styles['bgCurve']}>&nbsp;</div>
                    <div className={`${styles['present']}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6" data-aos="fade-right" data-aos-delay="100">
                                    <h2 className={styles['title']}>Welcome to Bangkok Aquatics</h2>
                                    <p className={styles['text']}>The all-new premier swimming school specializing in Learn-to-Swim programs and Squads for children aged 4 and above.</p>
                                    <p className={styles['text']}>Our team of coaches have years of experience and are well known to provide one of the best swimming experiences for your children through our partner schools or private classes.</p>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-delay="100">
                                    <div className={styles['picture']}>
                                        <img src={class_swim} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>

                    <div className={`${styles['aquatic_present']}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12">
                                    <h2 className={styles['title']}>Our Classes</h2>
                                    <p className={styles['text']}>We provide a wide range of classes to help you pick one that best suits your child’s current swimming skill level:</p>
                                </div>
                                <div className="col-lg-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="flip-left" data-aos-delay="100">
                                            <div className={styles['class_group']}>
                                                <div className={`${styles['class_header']} ${styles['h1']}`}>
                                                    <div className={styles['class_title']}>Learn to Swim</div>
                                                    <img src={card_h1} className={styles['class_brand']} />
                                                </div>
                                                <div className={styles['class_body']}>
                                                    <ul>
                                                        <li>Suitable for children from around the ages of 4-11 years-old</li>
                                                        <li>Focused on teaching the FUNdamentals</li>
                                                        <li>Here your child will learn water safety, and become confident in a pool whilst supervised by an instructor. Lesson will be conducted with play in mind.</li>
                                                        <li>It is advised to attend 2 sessions per week during the learn to swim phase of learning</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="flip-left" data-aos-delay="200">
                                            <div className={styles['class_group']}>
                                                <div className={`${styles['class_header']} ${styles['h2']}`}>
                                                    <div className={styles['class_title']}>Discovery</div>
                                                    <img src={card_h2} className={styles['class_brand']} />
                                                </div>
                                                <div className={styles['class_body']}>
                                                    <ul>
                                                        <li>Suitable for those looking for fundamental stroke improvement & maintain fitness levels.</li>
                                                        <li>Children must be able to swim 100m non-stop.</li>
                                                        <li>All swimmers will learn each of the four competitive strokes, also underwater swimming, diving, grab and track starts, flip turns, general endurance, flexibility, and agility.</li>
                                                        <li>Swimmers will have the opportunity to join Meets & Competitions.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="flip-left" data-aos-delay="300">
                                            <div className={styles['class_group']}>
                                                <div className={`${styles['class_header']} ${styles['h3']}`}>
                                                    <div className={styles['class_title']}>Club Junior</div>
                                                    <img src={card_h3} className={styles['class_brand']} />
                                                </div>
                                                <div className={styles['class_body']}>
                                                    <ul>
                                                        <li>The Club Junior Squad assists swimmers to develop all aspects of stroke technique, fitness level and race skill to prepare for competitions.</li>
                                                        <li>Children must be able to swim 200m non-stop, with four different strokes.</li>
                                                        <li>This squad can be for swimmers who do not want to commit fully to training or competition and also for swimmers who have developed their swimming late.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6" data-aos="flip-left" data-aos-delay="400">
                                            <div className={styles['class_group']}>
                                                <div className={`${styles['class_header']} ${styles['h3']}`}>
                                                    <div className={styles['class_title']}>Club Senior</div>
                                                    <img src={card_h4} className={styles['class_brand']} />
                                                </div>
                                                <div className={styles['class_body']}>
                                                    <ul>
                                                        <li>The aim of Club Senior Squad is to enhance the basic training skills learnt in previous squads and to ensure that each swimmer learns correct technique on stroke start, and turns.</li>
                                                        <li>Children must be able to swim 300m non-stop, with four different strokes.</li>
                                                        <li>Swimmers will be encouraged to enter the local swimming competitions for experience and overseas competitions will also be encouraged.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`container ${styles['learn_more']}`}>
                        <a href="#">Learn More...</a>
                    </div>

                    <div className={`${styles['present']}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6" data-aos="fade-right">
                                    <header>
                                        <h2 className={styles['title']}>Not Sure Which Class to Pick?</h2>
                                    </header>
                                    <p className={styles['text']}>Not to worry! If you are unsure of your child’s swimming capabilities, we recommend registering for our Assessment Class and from there we will help you select a class that best suits your child.</p>
                                    <div className={styles['assignment_box']} data-aos="fade-up" data-delay="300">
                                        <div className="row no-gutters">
                                            <div className={`col-lg-3 col-sm-3 ${styles['adjuct']}`}>
                                                <img src={assigment_img} className={styles['img']} />
                                            </div>
                                            <div className={`col-lg-6 col-sm-9 ${styles['adjuct']}`}>
                                                <div className={styles['text']}>Assessment Class</div>
                                            </div>
                                            <div className={`col-lg-3 col-sm-12 ${styles['adjuct']}`}>
                                                <div className={styles['button']} onClick={this.handleRegisterOpen}>
                                                    <span>Register</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-left">
                                    <div className={styles['picture']}>
                                        <img src={coach_recom} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={`${styles['present']}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6" data-aos="fade-down">
                                    <header>
                                        <h2 className={styles['title']}>Special Programs</h2>
                                    </header>
                                    <p className={styles['text']}>Want to swim more than just for learning? Aiming to compete at the highest levels? Or simply not sure of your level? Our expert coaches will be able to design a program tailored to your objectives..</p>
                                    <p className={styles['text_link']}>
                                        Register for our <span onClick={this.handleRegisterOpen} className={styles['assignment_register']}>Assessment Class</span> and we’ll take it from there!
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="fade-up">
                                    <div className={styles['picture']}>
                                        <img src={swin_class} className={styles['img']} alt="Class Group" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <article className={styles['schedule_container']}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className={styles['header']}>Our Class Schedules</h2>
                            </div>
                            <div className="col-lg-12">
                                <select className={styles['select_list']}>
                                    <option value="">Regents International School</option>
                                    <option value="1">School 1</option>
                                    <option value="2">School 2</option>
                                    <option value="3">School 3</option>
                                    <option value="4">School 4</option>
                                </select>
                            </div>
                        </div>
                        <section className={styles['schedule_class']} data-aos="zoom-in" data-aos-delay="300" >
                            <img src={schedule_class} />
                        </section>
                    </div>
                </article>

                <article className={styles['price_container']}>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <h2 className={styles['header']} data-aos="fade-down" data-aos-delay="100">Price</h2>
                            </div>
                            <div className={`col-lg-3 ${styles['price_wrapper']}`} data-aos="zoom-in" data-aos-delay="100">
                                <div className={styles['price_box']}>
                                    <div className={`${styles['price_box_header']}`}>&nbsp;</div>
                                    <div className={`${styles['price_box_content']} ${styles['unshadow']}`}>
                                        <ul className="list-group list-group-flush">
                                            <li className={`list-group-item ${styles['list_label']}`}>Fee per Session</li>
                                            <li className={`list-group-item ${styles['list_label']}`}>Fee 10 Sessions (valid 8 weeks)</li>
                                            <li className={`list-group-item ${styles['list_label']}`}>Fee 20 Sessions (Valid Term)</li>
                                            <li className={`list-group-item ${styles['list_label']}`}>Available Sessions per week</li>
                                            <li className={`list-group-item ${styles['list_label']}`}>Minimum</li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row no-gutters">
                                    <div className="col-lg-3">
                                        <div className={styles['price_box']} data-aos="fade-down" data-aos-delay="100">
                                            <div className={`${styles['price_box_header']} ${styles['h1']}`}>
                                                <div className={styles['price_box_header_title']}>Learn to Swim</div>
                                                <img src={card_h1} className={styles['price_box_header_brand']} />
                                            </div>
                                            <div className={styles['price_box_content']}>
                                                <ul className="list-group list-group-flush">
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee per Session</span>
                                                        <span className={styles['value']}>฿ 600</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 10 Sessions (valid 8 weeks)</span>
                                                        <span className={styles['value2']}>฿ 4,990</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 20 Sessions (Valid Term)</span>
                                                        <span className={styles['value2']}>฿ 8,800</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Available Sessions per week</span>
                                                        <span className={styles['value2']}>6</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Minimum</span>
                                                        <span className={styles['value2']}>-</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles['price_box']} data-aos="fade-up" data-aos-delay="100">
                                            <div className={`${styles['price_box_header']} ${styles['h2']}`}>
                                                <div className={styles['price_box_header_title']}>Learn to Swim</div>
                                                <img src={card_h2} className={styles['price_box_header_brand']} />
                                            </div>
                                            <div className={styles['price_box_content']}>
                                                <ul className="list-group list-group-flush">
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee per Session</span>
                                                        <span className={styles['value']}>฿ 600</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 10 Sessions (valid 8 weeks)</span>
                                                        <span className={styles['value2']}>฿ 4,990</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 20 Sessions (Valid Term)</span>
                                                        <span className={styles['value2']}>฿ 8,800</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Available Sessions per week</span>
                                                        <span className={styles['value2']}>6</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Minimum</span>
                                                        <span className={styles['value2']}>-</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles['price_box']} data-aos="fade-down" data-aos-delay="100">
                                            <div className={`${styles['price_box_header']} ${styles['h3']}`}>
                                                <div className={styles['price_box_header_title']}>Learn to Swim</div>
                                                <img src={card_h3} className={styles['price_box_header_brand']} />
                                            </div>
                                            <div className={styles['price_box_content']}>
                                                <ul className="list-group list-group-flush">
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee per Session</span>
                                                        <span className={styles['value']}>฿ 600</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 10 Sessions (valid 8 weeks)</span>
                                                        <span className={styles['value2']}>฿ 4,990</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 20 Sessions (Valid Term)</span>
                                                        <span className={styles['value2']}>฿ 8,800</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Available Sessions per week</span>
                                                        <span className={styles['value2']}>5</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Minimum</span>
                                                        <span className={styles['value2']}>-</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className={styles['price_box']} data-aos="fade-up" data-aos-delay="100">
                                            <div className={`${styles['price_box_header']} ${styles['h4']}`}>
                                                <div className={styles['price_box_header_title']}>Learn to Swim</div>
                                                <img src={card_h4} className={styles['price_box_header_brand']} />
                                            </div>
                                            <div className={styles['price_box_content']}>
                                                <ul className="list-group list-group-flush">
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee per Session</span>
                                                        <span className={styles['value']}>฿ 600</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 10 Sessions (valid 8 weeks)</span>
                                                        <span className={styles['value2']}>฿ 4,990</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Fee 20 Sessions (Valid Term)</span>
                                                        <span className={styles['value2']}>Term</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Available Sessions per week</span>
                                                        <span className={styles['value2']}>5 per week</span>
                                                    </li>
                                                    <li className={`list-group-item ${styles['list_custom']}`}>
                                                        <span className={`${styles['label']} ${styles['text-vw-port']}`}>Minimum</span>
                                                        <span className={styles['value2']}>2-4 per week</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        )
    }

}

export default Home