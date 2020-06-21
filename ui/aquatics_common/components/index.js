import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { BackTop } from 'antd'
import styles from './styles/style.scss'

// COMPONENTS
import Navigation from './common/navigation'
import Footer from './common/footer'

// PAGES
import Home from './pages/home'
import ClassRoom from './pages/class_room'
import Gallery from './pages/gallery'
import OurCoaches from './pages/our_coaches'

class AquaticsTemplate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active_menu: 'Home' 
        }

    }

    render() {
        const { active_menu } = this.state

        return (
            <div className={styles['bangkok_aquatic_wrapper']}>
                <Navigation
                    activeMenu={active_menu}
                    handleChangePage={this.handleChangePage}
                />
                    { this.handlePageContentRender(active_menu) }

                    <BackTop />
                    
                <Footer />
            </div>
        )
    }

    handleChangePage = (pageName) => {
        this.setState({ active_menu: pageName })
    }

    handlePageContentRender = (page) => {
        const { masters } = this.props
        
        switch(page) {
            case 'Classes':
                return (<ClassRoom />)
            case 'Gallery':
                return (<Gallery />)
            case 'Our Coaches':
                return (<OurCoaches />)
            default:
                return (<Home masters={masters} />)
        }
    }

}

const AquaticsTemplateRouter =  withRouter(AquaticsTemplate)
export default connect(
    (state) => ({}),
    {}
)(AquaticsTemplateRouter)