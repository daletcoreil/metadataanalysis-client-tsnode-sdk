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


import { ClassifierCategory } from './classifier-category';
import { Entity } from './entity';
import { Topic } from './topic';

/**
 * 
 * @export
 * @interface AnalyzedTextResponse
 */
export interface AnalyzedTextResponse {
    /**
     * 
     * @type {string}
     * @memberof AnalyzedTextResponse
     */
    language: string;
    /**
     * 
     * @type {boolean}
     * @memberof AnalyzedTextResponse
     */
    languageIsReliable?: boolean;
    /**
     * 
     * @type {Array<Entity>}
     * @memberof AnalyzedTextResponse
     */
    entities?: Array<Entity>;
    /**
     * List of topics detected in the text. each detected topic refers to wikiLink and wikidataId or None if no wikipedia reference is found.
     * @type {Array<Topic>}
     * @memberof AnalyzedTextResponse
     */
    topics?: Array<Topic>;
    /**
     * List of categories associated to the text. IPTC news codes refer to - http://cv.iptc.org/newscodes/subjectcode IPTC media topics refer to - http://cv.iptc.org/newscodes/mediatopic IAB taxonomy refer to - https://www.iab.com/guidelines/taxonomy
     * @type {Array<ClassifierCategory>}
     * @memberof AnalyzedTextResponse
     */
    categories?: Array<ClassifierCategory>;
}


