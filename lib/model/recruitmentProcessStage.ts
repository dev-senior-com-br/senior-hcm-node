/**
 * recruitment
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.10.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { RecruitmentProcessStageIntegrationResponsiblePerson } from './recruitmentProcessStageIntegrationResponsiblePerson';
import { RecruitmentProcessStageIntegrationStatus } from './recruitmentProcessStageIntegrationStatus';
import { RecruitmentProcessStageProcess } from './recruitmentProcessStageProcess';
import { RecruitmentProcessStageSeemMedicalStatus } from './recruitmentProcessStageSeemMedicalStatus';
import { RecruitmentProcessStageStage } from './recruitmentProcessStageStage';
import { RecruitmentProcessStageStatus } from './recruitmentProcessStageStatus';


/**
 * Etapa do processo seletivo do candidato.
 */
export interface RecruitmentProcessStage { 
    process?: RecruitmentProcessStageProcess;
    stage?: RecruitmentProcessStageStage;
    /**
     * Identificador único do processo a qual está etapa pertence.
     */
    processId?: string;
    seemMedicalStatus?: RecruitmentProcessStageSeemMedicalStatus;
    integrationStatus?: RecruitmentProcessStageIntegrationStatus;
    /**
     * Data e hora de envio das informações para gerar a ficha médica e ASO.
     */
    integrationSendDate?: Date;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Identificador único do responsável por gerar a ficha médica e ASO.
     */
    integrationResponsiblePersonId?: string;
    /**
     * Data e hora de recepção da G5 do parecer da ficha médica e ASO.
     */
    integrationG5Date?: Date;
    integrationResponsiblePerson?: RecruitmentProcessStageIntegrationResponsiblePerson;
    status?: RecruitmentProcessStageStatus;
    /**
     * Identificador único da etapa do processo seletivo.
     */
    stageId?: string;
}
