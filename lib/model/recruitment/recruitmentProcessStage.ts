/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.10.4
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AprovationTypeDto } from './aprovationTypeDto';
import { IntegrationStatusDto } from './integrationStatusDto';
import { ModelStage } from './modelStage';
import { Person } from './person';
import { RecruitmentProcess } from './recruitmentProcess';
import { SeemMedicalStatusDto } from './seemMedicalStatusDto';


export interface RecruitmentProcessStage { 
    process?: RecruitmentProcess;
    stage?: ModelStage;
    /**
     * Identificador único do processo a qual está etapa pertence.
     */
    processId?: string;
    seemMedicalStatus?: SeemMedicalStatusDto;
    integrationStatus?: IntegrationStatusDto;
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
    integrationResponsiblePerson?: Person;
    status?: AprovationTypeDto;
    /**
     * Identificador único da etapa do processo seletivo.
     */
    stageId?: string;
}
