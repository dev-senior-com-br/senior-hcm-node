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
import { AppointmentVacancy } from './appointmentVacancy';
import { RecruitmentProcessStageStage } from './recruitmentProcessStageStage';


/**
 * Compromisso do processo seletivo.
 */
export interface Appointment { 
    /**
     * Data do compromisso.
     */
    date: string;
    /**
     * Assunto do compromisso.
     */
    subject: string;
    /**
     * Candidatos que participarão do compromisso.
     */
    candidates: Array<any>;
    /**
     * Local do compromisso.
     */
    site: string;
    stage?: RecruitmentProcessStageStage;
    /**
     * Horário de início do compromisso.
     */
    startTime: string;
    /**
     * Comentário do compromisso.
     */
    comment?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Horário de término do compromisso.
     */
    endTime: string;
    /**
     * Colaboradores que participarão do compromisso para ajudar a avaliar os candidatos.
     */
    employees?: Array<any>;
    vacancy?: AppointmentVacancy;
    /**
     * Identificador único da vaga  do processo seletivo.
     */
    vacancyId?: string;
    /**
     * Identificador único da etapa do processo seletivo.
     */
    stageId?: string;
}
