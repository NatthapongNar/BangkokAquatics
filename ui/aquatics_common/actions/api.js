import { RSAA } from 'redux-api-middleware'

import {
    GET_MASTER_SCHOOL_URL,
    GET_MASTER_CLASSES_URL,
    CREATE_LEAD_CUSTOMER_URL

} from '../constants/endpoints'

import {
    GET_MASTER_SCHOOL_REQUEST,
    GET_MASTER_SCHOOL_SCCUESS,
    GET_MASTER_SCHOOL_FAILED,

    GET_MASTER_CLASSES_REQUEST,
    GET_MASTER_CLASSES_SCCUESS,
    GET_MASTER_CLASSES_FAILED,

    CREATE_LEAD_CUSTOMER_REQUEST,
    CREATE_LEAD_CUSTOMER_SCCUESS,
    CREATE_LEAD_CUSTOMER_FAILED

} from '../constants/actionsType'

import config from '../config/'

export const getMasterSchools = (param) => ((dispatch) => {
    dispatch({
        [RSAA]: {
            endpoint: `${GET_MASTER_SCHOOL_URL}`,
            headers: config.jsonHeader,
            method: 'GET',
            types: [
                GET_MASTER_SCHOOL_REQUEST,
                {
                    type: GET_MASTER_SCHOOL_SCCUESS,
                    payload: (_action, _state, res) => {
                        return res.json().then((data) => data)
                    }
                },
                GET_MASTER_SCHOOL_FAILED
            ]
        }
    })
})

export const getMasterClasses = () => ((dispatch) => {
    dispatch({
        [RSAA]: {
            endpoint: `${GET_MASTER_CLASSES_URL}`,
            headers: config.jsonHeader,
            method: 'GET',
            types: [
                GET_MASTER_CLASSES_REQUEST,
                {
                    type: GET_MASTER_CLASSES_SCCUESS,
                    payload: (_action, _state, res) => {
                        return res.json().then((data) => data)
                    }
                },
                GET_MASTER_CLASSES_FAILED
            ]
        }
    })
})

export const createLeadCustomer = (params) => ((dispatch) => {
    
    let formData = new FormData()
    formData.append('parent_firstname', params.parent_firstname)
    formData.append('parent_lastname', params.parent_lastname)
    formData.append('mobile', params.mobile)
    formData.append('email', params.email)
    formData.append('child_firstname', params.child_firstname)
    formData.append('child_lastname', params.child_lastname)
    formData.append('school_id', params.school_id)
    formData.append('classes_id', params.classes_id)
    formData.append('note', params.note)
    formData.append('is_received_off', params.is_received_off)

    dispatch({
        [RSAA]: {
            endpoint: `${CREATE_LEAD_CUSTOMER_URL}`,
            // headers: config.form_header,
            method: 'POST',
            body: formData,
            types: [
                CREATE_LEAD_CUSTOMER_REQUEST,
                {
                    type: CREATE_LEAD_CUSTOMER_SCCUESS,
                    payload: (_action, _state, res) => {
                        return res.json().then((data) => data)
                    }
                },
                CREATE_LEAD_CUSTOMER_FAILED
            ]
        }
    })
})