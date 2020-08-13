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
import { Employee } from './employee';
import { RecruitmentProcessStatusDto } from './recruitmentProcessStatusDto';
import { Resume } from './resume';
import { Vacancy } from './vacancy';


export interface RecruitmentProcess { 
    resume?: Resume;
    /**
     * Data e hora da criação da candidatura.
     */
    createdAt?: Date;
    /**
     * Identificador único do candidato externo.
     */
    resumeId?: string;
    /**
     * Identificador único do colaborador.
     */
    employeeId?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Justificativa para a reprovação/remoção do candidato no processo seletivo em questão (Se for o caso).
     */
    justification?: string;
    employee?: Employee;
    vacancy?: Vacancy;
    /**
     * Identificador único da vaga.
     */
    vacancyId?: string;
    /**
     * Data e hora da última alteração na candidatura.
     */
    updatedAt?: Date;
    status?: RecruitmentProcessStatusDto;
}
