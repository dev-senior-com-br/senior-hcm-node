require('dotenv').config();

var HCMApi = require('../dist/index').HCMApi;
var VacanciesIn = require('../dist/index').VacanciesIn;
var VacancyDetailsIn = require('../dist/index').VacancyDetailsIn;
var VacancyDetailsSummaryIn = require('../dist/index').VacancyDetailsSummaryIn;
var SearchPersonsIn = require('../dist/index').SearchPersonsIn;

var USERNAME = process.env.SENIOR_USERNAME;
var PASS = process.env.PASS;
var VACANCY_ID = process.env.VACANCY_ID;

var hcmApi = new HCMApi();
var vacanciesIn = {
	situation: ["IN_PROGRESS"],
	vacancyId: VACANCY_ID
}
var vacancyDetailsIn = {
	id: VACANCY_ID
}
var vacancyDetailsSummaryIn = {
	vacancyId: VACANCY_ID
}

const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
var searchPersonsIn = {
	referenceDate: `${ye}-${mo}-${da}`
}

hcmApi.authentication.login(USERNAME, PASS).then(function (json) {
	hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    hcmApi.recruitment.listVacancies(vacanciesIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de listar Vagas: ", error);
	});

	hcmApi.recruitment.vacancyDetails(vacancyDetailsIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error("Erro na tentativa de verificar vaga de id 9E8BC3478C8040558FA06C7C85FF3B28: ", error);
	});
	
	hcmApi.recruitment.vacancyDetailsSummary(vacancyDetailsSummaryIn).then(function (json) {
		if (json.statusCode != 200) {
			console.error(json);
		} else {
			console.log(json.body);
		}
	}).catch(function (error) {
		console.error(`Erro na tentativa de verificar detalhes vaga de id ${VACANCY_ID}: `, error);
	}); 
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
