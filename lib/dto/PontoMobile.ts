export interface EmployeesImportByFileIdOut {
  importResult: {
    importErros: {
      errors: string[];
      employee: Employee;
    }[];
  };
}

interface Perimeter {
  id: string;
  type: string;
  startPoint: {
    id: string;
    latitude: 0;
    longitude: 0;
    dateAndTime: string;
    perimeter: Perimeter;
  };
  radius: 0;
}

interface Company {
  id: string;
  cnpj: string;
  name: string;
  dataOrigin: string;
}

interface Manager {
  id: string;
  mail: string;
  platformUserName: string;
  platformUsers: PlatformUser[];
  employees: Employee[];
}

interface Fence {
  id: string;
  name: string;
  perimeters: Perimeter[];
  employees: Employee[];
}

interface PlatformUser {
  id: string;
  username: string;
}

interface Employee {
  id: string;
  externalId: string;
  name: string;
  pis: string;
  mail: string;
  company: Company;
  manager: Manager;
  managers: Manager[];
  platformUserName: string;
  platformUsers: PlatformUser[];
  lastUpdate: string;
  nfcCode: string;
  fences: Fence[];
  enabled: boolean;
  dataOrigin: string;
}

export interface BlobServiceRequestUploadFileOut {
  fileId: string;
  version: string;
  locationURI: string;
}

export interface BlobServiceRequestCommitUploadedFileIn {
  fileId: string;
  version: string;
}

export interface BlobServiceRequestCommitUploadedFileOut {
  fileId: string;
}

export interface ClockingEventExportOut {
  locationURI: string;
}

export interface ClockingEventExportByPeriodIn {
  period: {
    initialDate: string;
    finalDate: string;
    initialTime?: string;
    finalTime?: string;
  };
  fileType: string;
  exportGeolocation?: boolean;
}
