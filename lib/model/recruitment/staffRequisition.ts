/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.11.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Company } from './company';
import { ContractTypeDto } from './contractTypeDto';
import { CostCenter } from './costCenter';
import { Department } from './department';
import { EmployeeSummary } from './employeeSummary';
import { EmploymentContractDto } from './employmentContractDto';
import { JobPosition } from './jobPosition';
import { ProcessTypeDto } from './processTypeDto';
import { SequenceStaffrequisitionVacancy } from './sequenceStaffrequisitionVacancy';
import { StaffRequisitionStatusDto } from './staffRequisitionStatusDto';
import { WorkShift } from './workShift';
import { WorkstationGroup } from './workstationGroup';


export interface StaffRequisition { 
    reason?: ProcessTypeDto;
    /**
     * Justificativa do cancelamento da RP.
     */
    finalizationComment?: string;
    workstationGroup?: WorkstationGroup;
    employmentContract?: EmploymentContractDto;
    /**
     * Palavras chaves para o cálculo da aderência.
     */
    keywords?: Array<string>;
    contractType?: ContractTypeDto;
    /**
     * Identificador do departamento.
     */
    departmentId?: string;
    /**
     * Descrição da vaga.
     */
    description?: string;
    /**
     * Justificativa da reprovação da RP.
     */
    disapprovalJustification?: string;
    /**
     * Seção de conhecimentos e habilidades (aderência).
     */
    keywordCompetencySession?: boolean;
    /**
     * Data de criação da requisição de pessoal.
     */
    createdAt?: Date;
    /**
     * Identificador do centro de custo
     */
    costCenterId?: string;
    /**
     * Seção de histórico profissional (aderência).
     */
    keywordProfessionalExperienceSession?: boolean;
    company?: Company;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Justificativa para a abertura da requisição de pessoal.
     */
    justification?: string;
    department?: Department;
    /**
     * Seção de formação acadêmica (aderência).
     */
    keywordEducationSession?: boolean;
    requester?: EmployeeSummary;
    workShift?: WorkShift;
    /**
     * Id do anexo de finalização da requisição de pessoal.
     */
    finalizationAttachmentId?: string;
    /**
     * Faixa inicial da remuneração da vaga.
     */
    startSalaryRange?: string;
    /**
     * Data de admissão prevista do colaborador.
     */
    admissionDate?: string;
    /**
     * Identificador do posto de trabalho.
     */
    workstationGroupId?: string;
    /**
     * ID do colaborador que criou a requisição de pessoal.
     */
    requesterId?: string;
    costCenter?: CostCenter;
    /**
     * Identifica se deve criar a vaga no vacancymanagement ou no recruitment (default false).
     */
    createdByVacancyManagement?: boolean;
    /**
     * Seção de cargos e áreas desejadas (aderência).
     */
    keywordPositionSoughtSession?: boolean;
    /**
     * Quantidade de vagas.
     */
    positions?: number;
    /**
     * ID do colaborador que será substituido (Se for o caso).
     */
    replacedEmployeeId?: string;
    /**
     * Seção de trajetória profissional (aderência).
     */
    keywordTrajectorySession?: boolean;
    jobPosition?: JobPosition;
    /**
     * Seção de idiomas (aderência).
     */
    keywordLanguageSession?: boolean;
    /**
     * Identificador da empresa
     */
    companyId?: string;
    /**
     * Identificador do responsável por armazenar uma sequência única da Requisição de Pessoal.
     */
    sequenceStaffrequisitionVacancyId?: string;
    /**
     * Faixa final da remuneração da vaga.
     */
    endSalaryRange?: string;
    /**
     * ID do cargo desejado na requisição de pessoal.
     */
    jobPositionId?: string;
    sequenceStaffrequisitionVacancy?: SequenceStaffrequisitionVacancy;
    replacedEmployee?: EmployeeSummary;
    /**
     * Local geográfico que a vaga referência.
     */
    location?: string;
    status?: StaffRequisitionStatusDto;
    /**
     * Identificador do turno de trabalho
     */
    workShiftId?: string;
}
