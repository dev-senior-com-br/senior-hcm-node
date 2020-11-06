export interface EmployeesImportByFileIdOut {
  /**
   * Resposta da importação
   */
  importResult: {
    /**
     * Conjunto de erros da importação
     */
    importErros: {
      /**
       * Erros encontrados durante a importação
       */
      errors: string[];
      /**
       * Empregado vinculado aos erros
       */
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
  /**
   * O identificador único do arquivo. Composto pelo ID + o nome do arquivo (separados por /).
   */
  fileId: string;
  /**
   * Versão do arquivo.
   */
  version: string;
}

export interface BlobServiceRequestCommitUploadedFileOut {
  /**
   * O identificador único do arquivo. Composto pelo ID + o nome do arquivo (separados por /).
   */
  fileId: string;
}

export interface ClockingEventExportOut {
  /**
   * Url para donwload do arquivo
   */
  locationURI: string;
}

export interface ClockingEventExportByPeriodIn {
  /**
   * Período
   */
  period: {
    /**
     * Data inicial
     */
    initialDate: string;
    /**
     * Data final
     */
    finalDate: string;
    /**
     * Hora inicial
     */
    initialTime?: string;
    /**
     * Hora final
     */
    finalTime?: string;
  };
  /**
   * Tipo do arquivo
   */
  fileType: string;
  /**
   * Exportar geolocalização"
   */
  exportGeolocation?: boolean;
}
