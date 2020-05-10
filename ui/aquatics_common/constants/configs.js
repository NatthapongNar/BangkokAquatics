let expiredDate = new Date()
expiredDate.setMonth((new Date).getMonth() + 3)

export default {
    host: {
        apiHost: '',
        apiPort: '',
        tokenName: 'c_user',
        tokenPath: '/',
        tokenExpired: expiredDate,
        tokenNameBypass: 'c_bypass'
    },
    jsonHeader: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    respMessage: {
        request: 'Waiting to load data',
        success: 'Data loaded to success',
        failure: 'Not found items'
    }
}
