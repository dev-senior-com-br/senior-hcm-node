require('dotenv').config({
    path: "../.env"
});

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;
var HCMApi = require('../built/index').HCMApi;
var VacanciesIn = require('../built/index').VacanciesIn;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var hcmApi = new HCMApi();
var vacanciesIn = new VacanciesIn();

hcmApi.authentication.login(username, password).then(function (json) {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    vacanciesIn.reason = "Analista";
   
    hcmApi.recruitment.listVacancies().then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de enviar notificação: ", error);
	});

	if (hcmApi.accessToken) {
		hcmApi.authentication.logout().catch(function (error) {
			console.error("Erro na tentativa de efetuar logout: ", error);
		});
	}
}).catch(function (error) {
	console.error("Erro na tentativa de efetuar login: ", error);
});