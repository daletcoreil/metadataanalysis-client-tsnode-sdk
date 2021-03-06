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


import { Span } from './span';

/**
 * 
 * @export
 * @interface Mention
 */
export interface Mention {
    /**
     * 
     * @type {Span}
     * @memberof Mention
     */
    text?: Span;
    /**
     * 
     * @type {string}
     * @memberof Mention
     */
    type?: MentionTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum MentionTypeEnum {
    TYPEUNKNOWN = 'TYPEUNKNOWN',
    PROPER = 'PROPER',
    COMMON = 'COMMON'
}



