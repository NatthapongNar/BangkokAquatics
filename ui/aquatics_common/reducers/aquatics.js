import {
    GET_MASTER_SCHOOL_SCCUESS,
    GET_MASTER_CLASSES_SCCUESS,
    CREATE_LEAD_CUSTOMER_SCCUESS

} from '../constants/actionsType'

const initialRespData = { data: [], status: false, loading: true, msg: '' }

export const GET_MASTER_SCHOOL = (state = initialRespData, action) => {
    switch (action.type) {
        case GET_MASTER_SCHOOL_SCCUESS:        
            return { data: action.payload, status: true, msg: 'load success' }
        default:
            return state
    }
}

export const GET_MASTER_CLASSES = (state = initialRespData, action) => {
    switch (action.type) {
        case GET_MASTER_CLASSES_SCCUESS:        
            return { data: action.payload, status: true, msg: 'load success' }
        default:
            return state
    }
}

export const CUSTOMER_CREATED = (state = initialRespData, action) => {
    switch (action.type) {
        case CREATE_LEAD_CUSTOMER_SCCUESS:        
            return { data: action.payload, status: true, msg: 'load success' }
        default:
            return state
    }
}
