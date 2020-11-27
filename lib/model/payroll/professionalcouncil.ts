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
import { City } from './city';
import { ClassOrganType } from './classOrganType';


export interface Professionalcouncil { 
    /**
     * Código conselho profissional
     */
    code: number;
    classOrganType: ClassOrganType;
    headquarter?: City;
    /**
     * Descrição conselho profissional
     */
    name: string;
    /**
     * Identificador conselho profissional
     */
    id?: string;
    /**
     * Região conselho profissional
     */
    region: string;
}
