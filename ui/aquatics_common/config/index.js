let expiredDate = new Date()
expiredDate.setMonth((new Date).getMonth() + 3)

module.exports = {
    json_header: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    form_header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    respMessage: {
        request: 'Waiting to load data',
        success: 'Data loaded to success',
        failure: 'Not found items'
    }
}