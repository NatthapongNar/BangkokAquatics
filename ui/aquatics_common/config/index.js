let expiredDate = new Date()
expiredDate.setMonth((new Date).getMonth() + 3)

module.exports = {
    webPackHost: '127.0.0.1',
    webPackDevServPort: 8080,
    apiHost: '172.17.9.94',
    apiPort: 60001,
    apiDevHost: '172.17.9.94',
    apiDevPort: 60001,
    tokenName: 'c_user',
    tokenPath: '/',
    tokenExpired: expiredDate,
    cookieConfig: {
        path: '/',
        name: { 
            authen: 'authen_info',
            dailyreports: 'daily_reports_info'
        }
    },
    hostname: (process.env.NODE_ENV === 'dev') ? 'http://localhost:5091':'http://tc001pcis1u:5092',
    json_header: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    respMessage: {
        request: 'Waiting to load data',
        success: 'Data loaded to success',
        failure: 'Not found items'
    },
    user_temp: { // FOR DEV ONLY
        Auth: {
            Area: "",
            AreaID: "",
            BaseBranchCode: "000",
            BaseBranchLatitude: "13.767282",
            BaseBranchLongitude: "100.570531",
            BaseBranchName: "สำนักงานใหญ่",
            BaseBranchType: "L",
            BranchCode: "000",
            BranchType: "L",
            CA: "",
            Department: "Lending",
            EmpName_EN: "Natthapong Nartnorakij",
            EmpName_TH: "นัฐพงษ์ นารถนรกิจ",
            EmployeeCode: "57251",
            Level: "",
            Note: "",
            OriginalBranchCode: "000",
            PositionCode: "Developer",
            Region: "",
            RegionID: "01",
            RoleId: "",
            ShortPosition: "Developer",
            StartWork: "5.4.8",
            WorkGroup: "HQ",
            Zone: "",
        },
        Deparment: "LENDING",
        Role: "dev_role",
            Session: {
            sess_authorized: ["074008"],
            sess_bmname: "-",
            sess_branch: "สำนักงานใหญ่",
            sess_branch_code: "000",
            sess_email: "natthapong.n@tcrbank.com",
            sess_empcode: "57251",
            sess_engname: "Natthapong+Nartnorakij",
            sess_is_logged: "TRUE",
            sess_pilot: [],
            sess_position: false,
            sess_region: "BKK-HQ",
            sess_region_id: "01",
            sess_region_th: "กรุงเทพ-สำนักงานใหญ่",
            sess_secure: "TRUE",
            sess_thname: "นัฐพงษ์ นารถนรกิจ",
            Status: true
        }
    }
}