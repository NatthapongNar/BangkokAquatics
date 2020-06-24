let expiredDate = new Date()
expiredDate.setMonth((new Date).getMonth() + 3)

module.exports = {
    site_key: (process.env.NODE_ENV == 'dev') ? '6LdRj6gZAAAAAKDNoOHR6W9vf5-nNJlijoEf-W8b' : '6LfojagZAAAAAH5uopyke4BI1Q7dn8qQyK1k7XWW',
    json_header: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    form_header: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    respMessage: {
        request: 'Waiting to load data',
        success: 'Data loaded to success',
        failure: 'Not found items'
    }
}