/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 16.0.2
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Company } from './company';
import { CostCenter } from './costCenter';
import { Department } from './department';
import { Employee } from './employee';
import { JobPosition } from './jobPosition';
import { WorkShift } from './workShift';
import { WorkstationGroup } from './workstationGroup';


export interface EmployeeSummary { 
    newDepartment?: Department;
    /**
     * Representa se o colaborador já está sendo referenciado em outra vaga como o colaborador a ser substituído.
     */
    existsReferenceOfThisReplacedEmployeeOnVacancy?: boolean;
    newJobPosition?: JobPosition;
    newWorkstation?: WorkstationGroup;
    /**
     * Nome da empresa em que o colaborador trabalha.
     */
    companyName?: string;
    newCompany?: Company;
    /**
     * Identifica se o colaborador foi demitido ou não.
     */
    dismissed?: boolean;
    newWorkshift?: WorkShift;
    newCostCenter?: CostCenter;
    /**
     * Nome do grupo de posto de trabalho do colaborador.
     */
    workstationGroupName?: string;
    employee?: Employee;
    /**
     * Nome do cargo do colaborador.
     */
    jobPositionName?: string;
    /**
     * Representa se o colaborador já está sendo referenciado em outra RP como o colaborador a ser substituído.
     */
    existsReferenceOfThisReplacedEmployeeOnStaffRequisition?: boolean;
    /**
     * Verifica se o colaborador possui uma posição na hierarquia atual.
     */
    hasPositionInTheHierarchy?: boolean;
    /**
     * Local onde o colaborador substituído trabalha.
     */
    location?: string;
}
