// tslint:disable
/**
 * Dalet Metadata Analysis API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: cortexsupport@dalet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Mention } from './mention';

/**
 * 
 * @export
 * @interface Entity
 */
export interface Entity {
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    type?: EntityTypeEnum;
    /**
     * Google knowledge graph id when detected.
     * @type {string}
     * @memberof Entity
     */
    mid?: string;
    /**
     * 
     * @type {string}
     * @memberof Entity
     */
    wikipediaUrl?: string;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     * @type {number}
     * @memberof Entity
     */
    salience?: number;
    /**
     * 
     * @type {Array<Mention>}
     * @memberof Entity
     */
    mentions?: Array<Mention>;
}

/**
    * @export
    * @enum {string}
    */
export enum EntityTypeEnum {
    UNKNOWN = 'UNKNOWN',
    PERSON = 'PERSON',
    LOCATION = 'LOCATION',
    ORGANIZATION = 'ORGANIZATION',
    EVENT = 'EVENT',
    WORKOFART = 'WORKOFART',
    CONSUMERGOOD = 'CONSUMERGOOD',
    OTHER = 'OTHER',
    PHONENUMBER = 'PHONENUMBER',
    ADDRESS = 'ADDRESS',
    DATE = 'DATE',
    NUMBER = 'NUMBER',
    PRICE = 'PRICE'
}



