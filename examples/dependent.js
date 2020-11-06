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
var dependentIn = {
    dependentId: DEPENDENT_ID
};
var dependentListIn = {
    employeeId: EMPLOYEE_ID,
    page: {
        current: 0,
        size: 0
    }
}

hcmApi.authentication.login(USERNAME, PASS).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;

    hcmApi.dependent.dependentQuery(dependentIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

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
