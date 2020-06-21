import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
    GET_MASTER_SCHOOL,
    GET_MASTER_CLASSES,
    CUSTOMER_CREATED

} from './aquatics'

export default combineReducers({
    routing: routerReducer,
    GET_MASTER_SCHOOL,
    GET_MASTER_CLASSES,
    CUSTOMER_CREATED
})
