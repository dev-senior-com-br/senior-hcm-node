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
import { HolidayType } from './holidayType';
import { WorkshiftScale } from './workshiftScale';
import { WorkshiftType } from './workshiftType';


export interface Workshift { 
    /**
     * horas DSR
     */
    dsrminutes?: number;
    /**
     * Código da escala
     */
    code?: number;
    holidayType: HolidayType;
    /**
     * horas semanais
     */
    weekminutes?: number;
    workshiftScale: WorkshiftScale;
    /**
     * Turno
     */
    shift?: number;
    /**
     * Descrição da escala
     */
    description?: string;
    /**
     * Id da escala
     */
    id?: string;
    workshiftType?: WorkshiftType;
    /**
     * horas mensais
     */
    monthminutes?: number;
    /**
     * Estrutura
     */
    structure?: string;
}
