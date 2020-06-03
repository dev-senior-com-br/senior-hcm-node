require('dotenv').config({
    path: "../.env"
});

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;
var HCMApi = require('../built/index').HCMApi;
var DependentIn = require('../built/index').DependentIn;
var DependentListIn = require('../built/index').DependentListIn;
var Pagination = require('../built/index').Pagination;


var hcmApi = new HCMApi();
var dependentIn = new DependentIn();
var dependentListIn = new DependentListIn();
var pagination = new Pagination();

hcmApi.authentication.login(username, password).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    dependentIn.dependentId = "2182988098EE44F887F88BBC85F300A9";

    hcmApi.dependent.dependentQuery(dependentIn).then(function (json) {
        if (json.statusCode != 200) {
            console.error(json);
        } else {
            console.log(json.body);
        }
    }).catch(function (error) {
        console.error("Erro na tentativa de listar dependente: ", error);
    });

    dependentListIn.employeeId = "9E8BC3478C8040558FA06C7C85FF3B28";
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
        console.error("Erro na tentativa de verificar vaga de id 9E8BC3478C8040558FA06C7C85FF3B28: ", error);
    });

    if (hcmApi.accessToken) {
        hcmApi.authentication.logout().catch(function (error) {
            console.error("Erro na tentativa de efetuar logout: ", error);
        });
    }
}).catch(function (error) {
    console.error("Erro na tentativa de efetuar login: ", error);
});
