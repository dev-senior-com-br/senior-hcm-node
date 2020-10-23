/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FgtsPensionType } from './fgtsPensionType';


export interface VariableJudicialValue { 
    /**
     * Valor mínimo
     */
    minimumValue?: number;
    /**
     * Percentual da pensão judicial
     */
    judicialPensionPercentage?: number;
    /**
     * Percentual de bônus do salário (PLR) da pensão
     */
    judicialPensionWageBonus?: number;
    /**
     * Percentual de FGTS da pensão
     */
    judicialPensionFgts?: number;
    /**
     * Percentual de férias da pensão
     */
    judicialPensionVacation?: number;
    /**
     * Id da entidade
     */
    id?: string;
    fgtsPensionType?: FgtsPensionType;
    /**
     * Percentual de 13o salário da pensão
     */
    judicialPension13Salary?: number;
}
