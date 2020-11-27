/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Attachment } from './attachment';
import { Company } from './company';
import { ContractNationalityType } from './contractNationalityType';
import { EmployeeContractType } from './employeeContractType';
import { EmployeeType } from './employeeType';
import { HireType } from './hireType';
import { Jobposition } from './jobposition';
import { Person } from './person';


export interface Employee { 
    employeetype: EmployeeType;
    /**
     * Relacionamento com posto de trabalho
     */
    workshift?: string;
    hireType: HireType;
    /**
     * Empresa do colaborador: NUMEMP
     */
    companynumber: number;
    /**
     * Processo judicial
     */
    processNumber?: string;
    jobposition: Jobposition;
    /**
     * Id externo
     */
    externalId?: string;
    /**
     * Data de admissão
     */
    hiredate: string;
    /**
     * Número de registro do colaborador
     */
    registrationnumber: number;
    /**
     * Ocupa cota de deficiente?
     */
    isOccupyQuotaDisability: boolean;
    contracttype: EmployeeContractType;
    /**
     * Consta na RAIS?
     */
    appearsinRais: boolean;
    attachment?: Attachment;
    person: Person;
    employer: Company;
    /**
     * Data de demissão
     */
    dismissaldate?: string;
    /**
     * Id do colaborador
     */
    id?: string;
    /**
     * Relacionamento com o local
     */
    department: string;
    contractNationality: ContractNationalityType;
    /**
     * Centro de custo
     */
    costcenter?: string;
    /**
     * Código do colaborador: NUMCAD
     */
    registernumber: number;
}
