import React, { Component } from 'react'
import { Form, Select } from 'antd'
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
// import schedule_class from '../../../../images/schedule_class1.png'
import am from '../../../../images/am.png'
import pm from '../../../../images/pm.png'

const Option = Select.Option

class Home extends Component {

    constructor(props, context) { 
        super(props, context)

        this.state = {
            scheduleIndex: '1',
            register: {
                isOpen: false
            }
        }

        AOS.init()
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
        const { masters, form } = this.props
        const { getFieldDecorator } = form
        
        let master_schools = (masters.schools && masters.schools.data && masters.schools.data.length > 0) ? masters.schools.data : []
       
        return (
            <div className={styles['aquatic_content']}>
                
                <Carousel handleRegisterOpen={this.handleRegisterOpen} />

                {
                    (this.state.register.isOpen) &&
                    (
                        <Register 
                            masters={masters}
                            data={this.state.register}
                            handleClose={this.handleRegisterClose}
                        />
                    )
                }

                <article className={styles['contact_container']}>
                    <h6 className={styles['title']}>Any questions? We’ll get back to you ASAP</h6>
                    <div className="row no-gutters">
                        <div className={`col-lg-4 col-md-12 ${styles['contact_channel']}`}>
                            <div className={styles['contact_item']}>
                                <a href="tel:0955270999">
                                    <img src={phone} className={styles['icon']} /> 
                                    <span className={styles['text']}>095 527 0999</span>
                                </a>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-md-12 ${styles['contact_channel']}`}>
                            <div className={styles['contact_item']}>
                                <a href="mailto:aquatics-care@bangkok-aquatics.com">
                                    <img src={mail} className={styles['icon']} /> 
                                    <span className={styles['text']}>aquatics-care@bangkok-aquatics.com</span>
                                </a>
                            </div>
                        </div>
                        <div className={`col-lg-4 col-md-12 ${styles['contact_channel']}`}>
                            <div className={styles['contact_item']}>
                                <a href="https://lin.ee/28tvoIY">
                                    <img src={line} className={styles['icon']} /> 
                                    <span className={styles['text']}>bangkok-aquatics</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*                     
                    <div className={styles['contact_channel']}>
                        <div className={styles['contact_item']}>
                            <a href="tel:0955270999">
                                <img src={phone} className={styles['icon']} /> 
                                <span className={styles['text']}>095 527 0999</span>
                            </a>
                        </div>
                        <div className={styles['contact_item']}>
                            <a href="mailto:aquatics-care@bangkok-aquatics.com">
                                <img src={mail} className={styles['icon']} /> 
                                <span className={styles['text']}>aquatics-care@bangkok-aquatics.com</span>
                            </a>
                        </div>
                        <div className={styles['contact_item']}>
                            <a href="http://line.me/ti/p/~bangkok-aquatics">
                                <img src={line} className={styles['icon']} /> 
                                <span className={styles['text']}>bangkok-aquatics</span>
                            </a>
                        </div>
                    </div>
                    */}
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

                <article className={styles['schedule_container']} style={{ paddingBottom: '30px' }}>
                    <div className="container">
                        <div className="row" style={{ width: '400px', marginBottom: '5px' }}>
                            <div className="col-lg-12">
                                <h2 className={styles['header']}>Our Class Schedules</h2>
                            </div>
                            <div className="col-lg-12" style={{ marginBottom: '20px' }}>
                                {
                                    getFieldDecorator('Schedules', { initialValue: `${this.state.scheduleIndex}` })
                                    (
                                        <Select className={styles['f0_9']} disabled={true} style={{ width: '250px' }}>
                                            {
                                                _.map(master_schools, (data, i) => {
                                                    return (
                                                        <Option 
                                                            key={`SHD${i+1}`} 
                                                            value={`${data.School_ID}`}
                                                        >
                                                            {data.School_Name}
                                                        </Option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <section className={styles['schedule_class']} data-aos="zoom-in" data-aos-delay="300">
                                    <img src={am} className="img-fluid" data-aos="zoom-in" data-aos-delay="350" />
                                    <img src={pm} className="img-fluid" data-aos="zoom-in" data-aos-delay="400" />
                                </section>
                            </div>
                        </div>
                    </div>
                </article>

                <article className={styles['price_container']}>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-12">
                                <h2 className={styles['header']}>Price</h2>
                            </div>
                            <div className="col-lg-12">
                                <p className={styles['subtitle']}>Free Class Registration Details</p>
                                <div className="table-responsive-lg">
                                    <table className={`table table-borderless ${styles['table_wrapper']}`}>
                                        <thead>
                                            <tr data-aos="flip-down" data-aos-delay="100">
                                                <th scope="col" style={{ width: '25%' }}></th>
                                                <th scope="col" style={{ width: '25%' }}>Dates</th>
                                                <th scope="col" style={{ width: '25%' }}>No. of Sessions</th>
                                                <th scope="col" style={{ width: '25%' }}>Price (THB)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={styles['striped1']}  data-aos="flip-down" data-aos-delay="150">
                                                <td scope="row">Weekday Classes</td>
                                                <td className="text-center">July 1st - July 3rd</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">FREE</td>
                                            </tr>
                                            <tr className={styles['striped2']}  data-aos="flip-down" data-aos-delay="200">
                                                <td scope="row">Saturday Classes</td>
                                                <td className="text-center">July 4th</td>
                                                <td className="text-center">1</td>
                                                <td className="text-center">FREE</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p className={styles['subtitle']}>Class Pricing (Weekdays)</p>
                                <div className="table-responsive-lg">
                                    <table className={`table table-borderless ${styles['table_wrapper']}`}>
                                        <thead>
                                            <tr  data-aos="flip-down" data-aos-delay="100">
                                                <th scope="col" style={{ width: '25%' }}></th>
                                                <th scope="col" style={{ width: '25%' }}>Class Length</th>
                                                <th scope="col" style={{ width: '25%' }}>No. of Sessions</th>
                                                <th scope="col" style={{ width: '25%' }}>Price (THB)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={styles['striped1']}  data-aos="flip-down" data-aos-delay="150">
                                                <td scope="row"></td>
                                                <td className="text-center">1 week</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">3,500</td>
                                            </tr>
                                            <tr className={styles['striped2']}  data-aos="flip-down" data-aos-delay="200">
                                                <td scope="row"></td>
                                                <td className="text-center">2 week</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">6,500</td>
                                            </tr>
                                            <tr className={styles['striped1']} data-aos="flip-down" data-aos-delay="250">
                                                <td scope="row"></td>
                                                <td className="text-center">3 week</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">9,700</td>
                                            </tr>
                                            <tr className={styles['striped2']} data-aos="flip-down" data-aos-delay="300">
                                                <td scope="row"></td>
                                                <td className="text-center">4 week</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">12,000</td>
                                            </tr>
                                            <tr className={styles['striped1']} data-aos="flip-down" data-aos-delay="350">
                                                <td scope="row"></td>
                                                <td className="text-center">5 week</td>
                                                <td className="text-center">Unlimited</td>
                                                <td className="text-center">15,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <p className={styles['subtitle']}>Class Pricing (Saturdays)</p>
                                <div className="table-responsive-lg">
                                    <table className={`table table-borderless ${styles['table_wrapper']}`}>
                                        <thead>
                                            <tr  data-aos="flip-down" data-aos-delay="100">
                                                <th scope="col" style={{ width: '25%' }}></th>
                                                <th scope="col" style={{ width: '25%' }}>Dates  </th>
                                                <th scope="col" style={{ width: '25%' }}>No. of Sessions</th>
                                                <th scope="col" style={{ width: '25%' }}>Price (THB)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={styles['striped1']}  data-aos="flip-down" data-aos-delay="150">
                                                <td scope="row"></td>
                                                <td className="text-center">July 11th, 18th, &amp; 25th</td>
                                                <td className="text-center" rowSpan="2">5</td>
                                                <td className="text-center" rowSpan="2">3,500</td>
                                            </tr>
                                            <tr className={styles['striped1']}  data-aos="flip-down" data-aos-delay="200">
                                                <td scope="row"></td>
                                                <td className="text-center">August 1st &amp; 8th</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className={styles['subfooter']}>* 8 Swimmers per 1 Coach ratio for Club Senior, Club Junior, Discovery *</p>
                                <p className={styles['subfooter']}>* 4 Swimmers per 1 Coach ratio for Explore *</p>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        )
    }

}

export default Form.create()(Home)