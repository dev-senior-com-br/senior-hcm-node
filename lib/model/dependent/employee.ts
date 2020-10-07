/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: ${version}
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { EmployeeType } from './employeeType';
import { Person } from './person';


export interface Employee { 
    employeetype?: EmployeeType;
    person?: Person;
    /**
     * Empresa do colaborador: NUMEMP
     */
    companynumber?: number;
    /**
     * Id do colaborador
     */
    id?: string;
    /**
     * Código do colaborador: NUMCAD
     */
    registernumber?: number;
}
