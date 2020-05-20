require('dotenv').config({
    path: "../.env"
});
var SeniorApi = require('../built/index').SeniorApi;
var FilterBuilder = require('../built/index').FilterBuilder;

var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;

var api = new SeniorApi();