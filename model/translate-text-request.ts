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



/**
 * Contains information about the request.
 * @export
 * @interface TranslateTextRequest
 */
export interface TranslateTextRequest {
    /**
     * Use this field to associate metadata for the translate request.
     * @type {{ [key: string]: object; }}
     * @memberof TranslateTextRequest
     */
    resource?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof TranslateTextRequest
     */
    text: string;
    /**
     * 
     * @type {string}
     * @memberof TranslateTextRequest
     */
    sourceLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslateTextRequest
     */
    targetLanguage: string;
}


