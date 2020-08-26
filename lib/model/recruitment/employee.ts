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
import { Person } from './person';
import { WorkShift } from './workShift';


export interface Employee { 
    /**
     * Código do colaborador.
     */
    code?: number;
    workshift?: WorkShift;
    person?: Person;
    /**
     * Estação de trabalho
     */
    workstationId?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Data de demissão do colaborador (Se for o caso).
     */
    dimissalDate?: string;
}
