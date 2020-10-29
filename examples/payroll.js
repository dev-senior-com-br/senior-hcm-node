require('dotenv').config();

var HCMApi = require('../dist/index').HCMApi;
var EmployeeIn = require('../dist/index').EmployeeIn;

var USERNAME = process.env.SENIOR_USERNAME;
var PASS = process.env.PASS;
var EMPLOYEE_ID = process.env.EMPLOYEE_ID

const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    
var hcmApi = new HCMApi();
var employeeIn = {
    referenceDate: `${ye}-${mo}-${da}`,
    employeeId: EMPLOYEE_ID
}

hcmApi.authentication.login(USERNAME, PASS).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;

    hcmApi.payroll.employeeQuery(employeeIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });
}).catch(function (error) {
    console.error("Erro na tentativa de efetuar login: ", error);
});
