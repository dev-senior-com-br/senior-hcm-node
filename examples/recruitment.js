require('dotenv').config({
	path: "../.env"
});

var password = process.env.PASS;
var HCMApi = require('../built/index').HCMApi;
var VacanciesIn = require('../built/index').VacanciesIn;
var VacancyDetailsIn = require('../built/index').VacancyDetailsIn;
var VacancyDetailsSummaryIn = require('../built/index').VacancyDetailsSummaryIn;
var SearchPersonsIn = require('../built/index').SearchPersonsIn;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var hcmApi = new HCMApi();
var vacanciesIn = new VacanciesIn();
var vacancyDetailsIn = new VacancyDetailsIn();
var vacancyDetailsSummaryIn = new VacancyDetailsSummaryIn();
var searchPersonsIn = new SearchPersonsIn();

hcmApi.authentication.login(username, password).then(function (json) {
	hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
	vacanciesIn.situation = ["IN_PROGRESS"];
	vacanciesIn.vacancyId = "9E8BC3478C8040558FA06C7C85FF3B28";
	
    hcmApi.recruitment.listVacancies(vacanciesIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de listar Vagas: ", error);
	});

	vacancyDetailsIn.id = "9E8BC3478C8040558FA06C7C85FF3B28";
	hcmApi.recruitment.vacancyDetails(vacancyDetailsIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de verificar vaga de id 9E8BC3478C8040558FA06C7C85FF3B28: ", error);
	});
	
	vacancyDetailsSummaryIn.vacancyId = "9E8BC3478C8040558FA06C7C85FF3B28";
	hcmApi.recruitment.vacancyDetailsSummary(vacancyDetailsSummaryIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de verificar detalhes vaga de id 9E8BC3478C8040558FA06C7C85FF3B28: ", error);
	}); 

	const d = new Date();
	const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
	const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
	const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
	searchPersonsIn.referenceDate = `${ye}-${mo}-${da}`;
	hcmApi.recruitment.searchPersons(searchPersonsIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de verificar as pessoas na data de referência", error);
	});

	if (hcmApi.accessToken) {
		hcmApi.authentication.logout().catch(function (error) {
			console.error("Erro na tentativa de efetuar logout: ", error);
		});
	}
}).catch(function (error) {
	console.error("Erro na tentativa de efetuar login: ", error);
});
