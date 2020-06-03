require('dotenv').config({
    path: "../.env"
});

var username = process.env.SENIOR_USERNAME;
var HCMApi = require('../built/index').HCMApi;
var EmployeeIn = require('../built/index').EmployeeIn;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var hcmApi = new HCMApi();
var employeeIn = new EmployeeIn();

hcmApi.authentication.login(username, password).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    employeeIn.employeeId = "2182988098EE44F887F88BBC85F300A9";

    const d = new Date();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
	const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	employeeIn.referenceDate = `${ye}-${mo}-${da}`;

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
