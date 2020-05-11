import React, { Component } from 'react'
import styles from '../styles/style.scss'

import phone from '../../../../images/phone.png'
import mail from '../../../../images/mail.png'
import line from '../../../../images/line.png'

import facebook from '../../../../images/facebook.png'
import instagram from '../../../../images/instagram.png'

class Footer extends Component {

    render() {
        return (
            <footer className={styles['footer_wrapper']}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mr-auto">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 text-white">
                                    <ul className={styles['contact_list']}>
                                        <li>
                                            <div className={styles['contact_list_title']}>Contact us</div>
                                        </li>
                                        <li className={styles['contact_line']}>
                                            <div className={styles['contact_item']}>
                                                <div><img src={phone} className={styles['icon']} /></div>
                                                <div className={styles['text']}>Call</div>
                                            </div>
                                            <div className={styles['contact_item']}>
                                                <div>&nbsp;</div>
                                                <div className={styles['text']}>095 527 0999</div>
                                            </div>
                                        </li>
                                        <li className={styles['contact_line']}>
                                            <div className={styles['contact_item']}>
                                                <div><img src={mail} className={styles['icon']} /></div>
                                                <div className={styles['text']}>E-mail</div>
                                            </div>
                                            <div className={styles['contact_item']}>
                                                <div>&nbsp;</div>
                                                <div className={styles['text']}>mijitra@gmail.com</div>
                                            </div>
                                        </li>
                                        <li className={styles['contact_line']}>
                                            <div className={styles['contact_item']}>
                                                <div><img src={line} className={styles['icon']} /></div>
                                                <div className={styles['text']}>Line</div>
                                            </div>
                                            <div className={styles['contact_item']}>
                                                <div>&nbsp;</div>
                                                <div className={styles['text']}>bangkok-aquatics</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`col-lg-6 col-sm-6 text-white ${styles['adjuct_verticle']}`}>
                                    <ul className={styles['contact_list']}>
                                        <li>
                                            <div className={`${styles['contact_list_title_second']}`}>Follow us on</div>
                                        </li>
                                        <li className={`${styles['contact_line']} ${styles['large']}`}>
                                            <div className={styles['contact_item']}>
                                                <img src={facebook} className={styles['icon']} />
                                                <div className={styles['text']}>Facebook</div>
                                            </div>
                                        </li>
                                        <li className={`${styles['contact_line']} ${styles['large']}`}>
                                            <div className={styles['contact_item']}>
                                                <img src={instagram} className={styles['icon']} />
                                                <div className={styles['text']}>Instagram</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 text-lg-left">
                            <div style={{ height: '98%', width: '1px', backgroundColor: '#CEC7C7', margin: '0 auto' }} />
                        </div>
                        <div className={`col-lg-5 ${styles['testimonials']} text-lg-left text-white`}>
                            <h4>Testimonials</h4>
                            <p>Wayne Morris : Lara is swimming with these guys less than a year and although she has been swimming since she a small baby. Her development has been great. As there teaching techniques really develop stroke techniques in a fun way while building kids confidence.</p>
                        </div>
                    </div>
                </div>
                <div className={styles['footer_reserve']}>
                    <div className={styles['copyright']}>Copyright © 2020 Bangkok Aquatics All rights reserved.</div>
                </div>
            </footer>
        )
    }

}

export default Footer