import HCMApi from '../HCMApi';
import { RequestClient, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';
import { EmployeesImportByFileIdOut } from '../model/pontomobile/EmployeesImportByFileId';
import { BlobServiceRequestUploadFileOut } from '../model/pontomobile/BlobServiceRequestUploadFile';
import { ClockingEventExportOut } from '../model/pontomobile/ClockingEventExport';
import {
  BlobServiceRequestCommitUploadedFileIn,
  BlobServiceRequestCommitUploadedFileOut,
} from '../model/pontomobile/BlobServiceRequestCommitUploadedFile';
import { ClockingEventExportByPeriodOut } from '../model/pontomobile/ClockingEventExportByPeriod';
import { ClockingEventExportByPeriodIn } from '../model/pontomobile/ClockingEventExportByPeriod';

export default class PontoMobile extends RequestClient {

  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'pontomobile');
  }

  employeesImportByFileId(fileId: string): Promise<RequestReturn<EmployeesImportByFileIdOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/employeesImportByFileId'),
      method: HttpMethod.POST,
      data: { fileId },
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  blobServiceRequestUploadFile(fileName: string): Promise<RequestReturn<BlobServiceRequestUploadFileOut>> {
    console.log(this.seniorApi);
    const clientOptions = {
      url: this.getUrlPath('actions/blobServiceRequestUploadFile'),
      method: HttpMethod.POST,
      data: { fileName },
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  blobServiceCommitUploadedFile(
    input: BlobServiceRequestCommitUploadedFileIn
  ): Promise<RequestReturn<BlobServiceRequestCommitUploadedFileOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/blobServiceCommitUploadedFile'),
      method: HttpMethod.POST,
      data: input,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  clockingEventExport(): Promise<RequestReturn<ClockingEventExportOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/clockingEventExport'),
      method: HttpMethod.POST,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  clockingEventExportByPeriod(
    input: ClockingEventExportByPeriodIn
  ): Promise<RequestReturn<ClockingEventExportByPeriodOut>> {
    const clientOptions = {
      url: this.getUrlPath('actions/clockingEventExportByPeriod'),
      method: HttpMethod.POST,
      data: input,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
