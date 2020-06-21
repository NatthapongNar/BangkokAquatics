import React, { Component } from 'react'
import { connect } from 'react-redux'
import bluebird from 'bluebird'

import { 
    getMasterSchools,
    getMasterClasses

} from '../actions/api'

import AquaticsTemplate from '../components'

class Aquatics extends Component {

    componentWillMount() {
        const { LOAD_MASTER_SCHOOLS, LOAD_MASTER_CLASSES } = this.props
        
        const API_LIST_CALL = [
            LOAD_MASTER_SCHOOLS,
            LOAD_MASTER_CLASSES
        ]

        bluebird.all(API_LIST_CALL).each(fn => fn())
    }

    render() {
        const { masters } = this.props
       
        return (<AquaticsTemplate masters={masters} />)
    }

}

export default connect(
    (state) => ({
        masters: {
            schools: state.GET_MASTER_SCHOOL,
            classes: state.GET_MASTER_CLASSES
        }
    }),
    {
        LOAD_MASTER_SCHOOLS: getMasterSchools,
        LOAD_MASTER_CLASSES: getMasterClasses
    }
)(Aquatics)