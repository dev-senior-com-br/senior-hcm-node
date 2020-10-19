require('dotenv').config();
import { HCMApi } from '../';
import { readFileSync } from 'fs';
import { join } from 'path';
import axios from 'axios';

const username = process.env.SENIOR_USERNAME;
const password = process.env.PASS;

const hcmApi = new HCMApi();
const filename = 'pontomobile.txt';
const file = readFileSync(join(__dirname, 'assets', filename));

hcmApi.authentication
  .login(username, password)
  .then(async json => {
    hcmApi.accessToken = JSON.parse(json.body.jsonToken).access_token;
    let fileId = null;
    try {
      const { body: outputUploadFile } = await hcmApi.pontomobile.blobServiceRequestUploadFile(filename);
      await axios.put(outputUploadFile.locationURI, file, {
        headers: {
          'Content-type': 'text/plain',
        },
      });
      const { body: outputCommitFile } = await hcmApi.pontomobile.blobServiceCommitUploadedFile({
        fileId: outputUploadFile.fileId,
        version: outputUploadFile.version,
      });
      console.log('Arquivo carregado om o id: ' + outputCommitFile.fileId);
      fileId = outputCommitFile.fileId;
    } catch (error) {
      console.error('Erro ao realizar o upload do arquivo', error.response.data);
    }
    if (fileId !== null) {
      try {
        const { body: outputImport } = await hcmApi.pontomobile.employeesImportByFileId(fileId);
        console.log('Import concluído: ');
        console.log(JSON.stringify(outputImport.importResult.importErros, null, 2));
      } catch (error) {
        console.error('Erro ao importar employees por um arquivo', error.response.data);
      }
    }
    try {
      const { body: outputPeriod } = await hcmApi.pontomobile.clockingEventExportByPeriod({
        period: {
          initialDate: '2020-10-10',
          finalDate: '2020-10-15',
        },
        fileType: 'TXT', //OR CSV
      });
      console.log('Donwload do arquivo por periodo: ' + JSON.stringify(outputPeriod));
    } catch (error) {
      console.error('Erro ao realizar o clockingEvent por periodo', error.response.data);
    }
    try {
      const { body: outputClocking } = await hcmApi.pontomobile.clockingEventExport();
      console.log('Donwload do arquivo: ' + outputClocking.locationURI);
    } catch (error) {
      console.error('Erro ao realizar o clockingEvent', error.response.data);
    }
  })
  .catch(error => {
    console.error('Erro na tentativa de efetuar login: ', error.response.data);
  });
