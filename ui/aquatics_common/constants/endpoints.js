const SERVER_SERVICE = (process.env.NODE_ENV == 'dev') ? "http://localhost:3000/aquatics_api":"http://bangkok-aquatics.com/aquatics_api"

export const GET_MASTER_SCHOOL_URL = `${SERVER_SERVICE}/masterschools`
export const GET_MASTER_CLASSES_URL = `${SERVER_SERVICE}/masterclasses`
export const CREATE_LEAD_CUSTOMER_URL = `${SERVER_SERVICE}/create_lead`
