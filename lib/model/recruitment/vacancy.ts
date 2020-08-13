/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: develop-SNAPSHOT
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Chat } from './chat';
import { Company } from './company';
import { ContractTypeDto } from './contractTypeDto';
import { CostCenter } from './costCenter';
import { Department } from './department';
import { EmployeeSummary } from './employeeSummary';
import { EmploymentContractDto } from './employmentContractDto';
import { IntegrationStatusDto } from './integrationStatusDto';
import { JobPosition } from './jobPosition';
import { PersonalityModelVacancy } from './personalityModelVacancy';
import { ProcessTypeDto } from './processTypeDto';
import { SequenceStaffrequisitionVacancy } from './sequenceStaffrequisitionVacancy';
import { StaffRequisition } from './staffRequisition';
import { VacancyAdmissionSituationDto } from './vacancyAdmissionSituationDto';
import { VacancySituationDto } from './vacancySituationDto';
import { WorkShift } from './workShift';
import { WorkstationGroup } from './workstationGroup';


export interface Vacancy { 
    reason?: ProcessTypeDto;
    /**
     * Comentário de conclusão
     */
    finalizationComment?: string;
    workstationGroup?: WorkstationGroup;
    requisition?: StaffRequisition;
    contractType?: ContractTypeDto;
    /**
     * Data inicial da publicação da vaga para candidatos externos.
     */
    externalStartDate?: string;
    /**
     * Identificador do departamento
     */
    departmentId?: string;
    /**
     * Data de criação da vaga.
     */
    createdAt?: Date;
    admissionSituation?: VacancyAdmissionSituationDto;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * URL com o link do arquivo que contém o texto da publicação no BlobService.
     */
    locationURI?: string;
    requester?: EmployeeSummary;
    workShift?: WorkShift;
    /**
     * Id do anexo de finalização da vaga
     */
    finalizationAttachmentId?: string;
    /**
     * Data prevista de admissão.
     */
    admissionDate?: string;
    /**
     * Identificador do posto de trabalho.
     */
    workstationGroupId?: string;
    /**
     * ID do solicitante da vaga.
     */
    requesterId?: string;
    costCenter?: CostCenter;
    /**
     * Quantidade de horas que a vaga ficou pendente com o solicitante.
     */
    pendencyHours?: number;
    /**
     * Versão do identificador do arquivo com o texto da publicação no BlobService.
     */
    version?: string;
    jobPosition?: JobPosition;
    /**
     * Identificador da empresa
     */
    companyId?: string;
    /**
     * Fim da faixa salarial.
     */
    endSalaryRange?: string;
    /**
     * Identificador do cargo da vaga.
     */
    jobPositionId?: string;
    sequenceStaffrequisitionVacancy?: SequenceStaffrequisitionVacancy;
    replacedEmployee?: EmployeeSummary;
    integrationStatus?: IntegrationStatusDto;
    /**
     * Identificador do turno de trabalho
     */
    workShiftId?: string;
    /**
     * Identificador do arquivo com o texto da publicação no BlobService.
     */
    fileId?: string;
    /**
     * Identificador do questionário
     */
    questionnaire?: string;
    personalityModel?: PersonalityModelVacancy;
    employmentContract?: EmploymentContractDto;
    /**
     * ID do chat da vaga.
     */
    chatId?: string;
    /**
     * Indica se a vaga deve ser publicada para candidatos externos.
     */
    externalPublish?: boolean;
    /**
     * Descrição da vaga.
     */
    description?: string;
    /**
     * Título da vaga.
     */
    title?: string;
    /**
     * Id da requisição da vaga.
     */
    requisitionId?: string;
    /**
     * Indica se a vaga deve estar em destaque.
     */
    highlight?: boolean;
    /**
     * Data final da publicação da vaga para candidatos internos.
     */
    internalEndDate?: string;
    /**
     * Identificador do centro de custo
     */
    costCenterId?: string;
    /**
     * Indica se a vaga possui alguma pendência registrada.
     */
    hasPendencyRegistered?: boolean;
    /**
     * Indica se a vaga deve ser publicada para candidatos internos.
     */
    internalPublish?: boolean;
    responsible?: EmployeeSummary;
    company?: Company;
    /**
     * Justificativa para a abertura da vaga.
     */
    justification?: string;
    department?: Department;
    situation?: VacancySituationDto;
    /**
     * Início da faixa salarial.
     */
    startSalaryRange?: string;
    /**
     * Data inicial da publicação da vaga para candidatos internos.
     */
    internalStartDate?: string;
    /**
     * Data final da publicação da vaga para candidatos externos.
     */
    externalEndDate?: string;
    /**
     * ID do colaborador que será substituido (Se for o caso).
     */
    replacedEmployeeId?: string;
    /**
     * Indica que a vaga está pendente com o solicitante.
     */
    pendingWithRequester?: boolean;
    /**
     * Indica se a vaga já possui candidatos.
     */
    hasCandidates?: boolean;
    /**
     * Identificador do responsável por armazenar uma sequência única da RP na vaga.
     */
    sequenceStaffrequisitionVacancyId?: string;
    /**
     * Data e hora de conclusão da vaga
     */
    finalizedAt?: Date;
    chat?: Chat;
    /**
     * Progresso da vaga.
     */
    progress?: number;
    /**
     * Local da vaga.
     */
    location?: string;
}
