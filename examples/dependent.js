require('dotenv').config();

var USERNAME = process.env.SENIOR_USERNAME;
var PASS = process.env.PASS;
var DEPENDENT_ID = process.env.DEPENDENT_ID;
var EMPLOYEE_ID = process.env.EMPLOYEE_ID;
var HCMApi = require('../dist/index').HCMApi;
var DependentIn = require('../dist/index').DependentIn;
var DependentListIn = require('../dist/index').DependentListIn;
var Pagination = require('@seniorsistemas/senior-core/dist/lib/model/Pagination').Pagination;

var hcmApi = new HCMApi();
var dependentIn = new DependentIn();
var dependentListIn = new DependentListIn();
var pagination = new Pagination();

hcmApi.authentication.login(USERNAME, PASS).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    dependentIn.dependentId = DEPENDENT_ID;

    hcmApi.dependent.dependentQuery(dependentIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    dependentListIn.employeeId = EMPLOYEE_ID;
    pagination.current = 0;
    pagination.size = 0;
    dependentListIn.page = pagination;
    hcmApi.dependent.dependentListQuery(dependentListIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error(`Erro na tentativa de verificar vaga de id ${EMPLOYEE_ID}: `, error);
    });

    if (hcmApi.accessToken) {
        hcmApi.authentication.logout().catch(function (error) {
            console.error("Erro na tentativa de efetuar logout: ", error);
        });
    }
}).catch(function (error) {
    console.error("Erro na tentativa de efetuar login: ", error);
});
