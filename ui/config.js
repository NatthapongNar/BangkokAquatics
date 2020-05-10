let expiredDate = new Date()
expiredDate.setMonth((new Date).getMonth() + 3)

module.exports = {
    webPackHost: '127.0.0.1',
    webPackDevServPort: 8081,
    apiHost: '172.0.9.99',
    apiPort: 60001,
    apiDevHost: '172.0.9.99',
    apiDevPort: 60001,
    tokenName: 'c_user',
    tokenPath: '/',
    tokenExpired: expiredDate
}
