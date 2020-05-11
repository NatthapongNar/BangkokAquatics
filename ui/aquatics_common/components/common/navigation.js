import React, { Component } from 'react'
import _ from 'lodash'

import styles from '../styles/style.scss'
import logo from '../../../../images/Group_5634.png'

const menuLists = ['Home', 'Classes', 'Gallery', 'Our Coaches']
class Navigation extends Component {

    componentDidMount() {    
        $(window).scroll(() => {
            let nav_bar = $(`.${styles['aquatic_nav']}`)
            if (nav_bar.offset().top > 200) {
                nav_bar.removeClass(styles['large'])
                nav_bar.addClass(styles['small'])
            } else {
                nav_bar.addClass(styles['large'])
                nav_bar.removeClass(styles['small'])
            }
        })
    }

    render() {
        const { activeMenu, handleChangePage } = this.props
    
        return (
            <nav className={`${styles['aquatic_nav']} navbar fixed-top navbar-expand-lg ${styles['large']}`}>
                <div className="container">
                    <a className={`navbar-brand ${styles['aquatic_nav_brand']}`} href="#">
                        <img src={logo} className={`${styles['logo']}`} alt="logo" />
                    </a>
                    <button 
                        type="button" 
                        className={`navbar-toggler ${styles['aquatic_nav_toggler']}`} 
                        data-toggle="collapse" 
                        data-target={`#${styles['navbarMenu']}`} 
                        aria-controls={`${styles['navbarMenu']}`} 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="ti-menu"></span>
                    </button>
                    <div id={styles['navbarMenu']} className="collapse navbar-collapse">
                        <ul className={`navbar-nav ${styles['aquatic_nav_menu']} ml-auto`}>
                            {
                                _.map(menuLists, (menuName, i) => {
                                    let active_menu = (activeMenu == menuName) ? styles['active'] : ''
                                    return (
                                        <li key={`menuItem_${(i+1)}`} className={`nav-item ${styles['menu_item']} ${active_menu}`} onClick={handleChangePage.bind(this, `${menuName}`)}>
                                            <a className={`nav-link ${styles['menu_link']}`}>{menuName}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    
}

export default Navigation