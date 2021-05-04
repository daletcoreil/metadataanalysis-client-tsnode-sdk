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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AnalyzeRequest } from '../model';
// @ts-ignore
import { AnalyzedTextResponse } from '../model';
// @ts-ignore
import { KnowledgeGraphSearchResponse } from '../model';
// @ts-ignore
import { SegmentTextRequest } from '../model';
// @ts-ignore
import { SegmentTextResponse } from '../model';
// @ts-ignore
import { TranslateCaptionsRequest } from '../model';
// @ts-ignore
import { TranslateCaptionsResponse } from '../model';
// @ts-ignore
import { TranslateTextRequest } from '../model';
// @ts-ignore
import { TranslateTextResponse } from '../model';
/**
 * MetadataAnalysisApi - axios parameter creator
 * @export
 */
export const MetadataAnalysisApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Perform metadata analysis on the provided text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {AnalyzeRequest} analyzeRequest Text to be analyzed and list of requested analysis methods.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyze: async (projectServiceId: string, analyzeRequest: AnalyzeRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectServiceId' is not null or undefined
            if (projectServiceId === null || projectServiceId === undefined) {
                throw new RequiredError('projectServiceId','Required parameter projectServiceId was null or undefined when calling analyze.');
            }
            // verify required parameter 'analyzeRequest' is not null or undefined
            if (analyzeRequest === null || analyzeRequest === undefined) {
                throw new RequiredError('analyzeRequest','Required parameter analyzeRequest was null or undefined when calling analyze.');
            }
            const localVarPath = `/metadata-analysis/analyze`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenSignature required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (projectServiceId !== undefined && projectServiceId !== null) {
                localVarHeaderParameter['ProjectServiceId'] = String(projectServiceId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof analyzeRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(analyzeRequest !== undefined ? analyzeRequest : {}) : (analyzeRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information for given knowledge graph ids. Knowledge graph ids are returned by the entities extractor of the analyzed method. This returns detailed information on an entity including image and description.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {Array<string>} ids Query knowledge graph ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        knowledgeGraphSearch: async (projectServiceId: string, ids: Array<string>, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectServiceId' is not null or undefined
            if (projectServiceId === null || projectServiceId === undefined) {
                throw new RequiredError('projectServiceId','Required parameter projectServiceId was null or undefined when calling knowledgeGraphSearch.');
            }
            // verify required parameter 'ids' is not null or undefined
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling knowledgeGraphSearch.');
            }
            const localVarPath = `/metadata-analysis/knowledge-graph-search`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenSignature required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }

            if (projectServiceId !== undefined && projectServiceId !== null) {
                localVarHeaderParameter['ProjectServiceId'] = String(projectServiceId);
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create segments from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {SegmentTextRequest} segmentTextRequest Request which contains the needed information for the segment operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentText: async (projectServiceId: string, segmentTextRequest: SegmentTextRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectServiceId' is not null or undefined
            if (projectServiceId === null || projectServiceId === undefined) {
                throw new RequiredError('projectServiceId','Required parameter projectServiceId was null or undefined when calling segmentText.');
            }
            // verify required parameter 'segmentTextRequest' is not null or undefined
            if (segmentTextRequest === null || segmentTextRequest === undefined) {
                throw new RequiredError('segmentTextRequest','Required parameter segmentTextRequest was null or undefined when calling segmentText.');
            }
            const localVarPath = `/metadata-analysis/segment-text`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenSignature required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (projectServiceId !== undefined && projectServiceId !== null) {
                localVarHeaderParameter['ProjectServiceId'] = String(projectServiceId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof segmentTextRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(segmentTextRequest !== undefined ? segmentTextRequest : {}) : (segmentTextRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Translate captions from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateCaptionsRequest} translateCaptionsRequest Request which contains the needed information for the traslate captions operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translateCaptions: async (projectServiceId: string, translateCaptionsRequest: TranslateCaptionsRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectServiceId' is not null or undefined
            if (projectServiceId === null || projectServiceId === undefined) {
                throw new RequiredError('projectServiceId','Required parameter projectServiceId was null or undefined when calling translateCaptions.');
            }
            // verify required parameter 'translateCaptionsRequest' is not null or undefined
            if (translateCaptionsRequest === null || translateCaptionsRequest === undefined) {
                throw new RequiredError('translateCaptionsRequest','Required parameter translateCaptionsRequest was null or undefined when calling translateCaptions.');
            }
            const localVarPath = `/metadata-analysis/translate-captions`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenSignature required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (projectServiceId !== undefined && projectServiceId !== null) {
                localVarHeaderParameter['ProjectServiceId'] = String(projectServiceId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof translateCaptionsRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(translateCaptionsRequest !== undefined ? translateCaptionsRequest : {}) : (translateCaptionsRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Translate a given text to a target language.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateTextRequest} translateTextRequest Request which contains the needed information for the translate operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translateText: async (projectServiceId: string, translateTextRequest: TranslateTextRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectServiceId' is not null or undefined
            if (projectServiceId === null || projectServiceId === undefined) {
                throw new RequiredError('projectServiceId','Required parameter projectServiceId was null or undefined when calling translateText.');
            }
            // verify required parameter 'translateTextRequest' is not null or undefined
            if (translateTextRequest === null || translateTextRequest === undefined) {
                throw new RequiredError('translateTextRequest','Required parameter translateTextRequest was null or undefined when calling translateText.');
            }
            const localVarPath = `/metadata-analysis/translate-text`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenSignature required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (projectServiceId !== undefined && projectServiceId !== null) {
                localVarHeaderParameter['ProjectServiceId'] = String(projectServiceId);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof translateTextRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(translateTextRequest !== undefined ? translateTextRequest : {}) : (translateTextRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetadataAnalysisApi - functional programming interface
 * @export
 */
export const MetadataAnalysisApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Perform metadata analysis on the provided text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {AnalyzeRequest} analyzeRequest Text to be analyzed and list of requested analysis methods.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyze(projectServiceId: string, analyzeRequest: AnalyzeRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnalyzedTextResponse>> {
            const localVarAxiosArgs = await MetadataAnalysisApiAxiosParamCreator(configuration).analyze(projectServiceId, analyzeRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information for given knowledge graph ids. Knowledge graph ids are returned by the entities extractor of the analyzed method. This returns detailed information on an entity including image and description.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {Array<string>} ids Query knowledge graph ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async knowledgeGraphSearch(projectServiceId: string, ids: Array<string>, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KnowledgeGraphSearchResponse>> {
            const localVarAxiosArgs = await MetadataAnalysisApiAxiosParamCreator(configuration).knowledgeGraphSearch(projectServiceId, ids, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create segments from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {SegmentTextRequest} segmentTextRequest Request which contains the needed information for the segment operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentText(projectServiceId: string, segmentTextRequest: SegmentTextRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SegmentTextResponse>> {
            const localVarAxiosArgs = await MetadataAnalysisApiAxiosParamCreator(configuration).segmentText(projectServiceId, segmentTextRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Translate captions from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateCaptionsRequest} translateCaptionsRequest Request which contains the needed information for the traslate captions operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async translateCaptions(projectServiceId: string, translateCaptionsRequest: TranslateCaptionsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TranslateCaptionsResponse>> {
            const localVarAxiosArgs = await MetadataAnalysisApiAxiosParamCreator(configuration).translateCaptions(projectServiceId, translateCaptionsRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Translate a given text to a target language.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateTextRequest} translateTextRequest Request which contains the needed information for the translate operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async translateText(projectServiceId: string, translateTextRequest: TranslateTextRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TranslateTextResponse>> {
            const localVarAxiosArgs = await MetadataAnalysisApiAxiosParamCreator(configuration).translateText(projectServiceId, translateTextRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetadataAnalysisApi - factory interface
 * @export
 */
export const MetadataAnalysisApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Perform metadata analysis on the provided text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {AnalyzeRequest} analyzeRequest Text to be analyzed and list of requested analysis methods.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyze(projectServiceId: string, analyzeRequest: AnalyzeRequest, options?: any): AxiosPromise<AnalyzedTextResponse> {
            return MetadataAnalysisApiFp(configuration).analyze(projectServiceId, analyzeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information for given knowledge graph ids. Knowledge graph ids are returned by the entities extractor of the analyzed method. This returns detailed information on an entity including image and description.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {Array<string>} ids Query knowledge graph ids
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        knowledgeGraphSearch(projectServiceId: string, ids: Array<string>, options?: any): AxiosPromise<KnowledgeGraphSearchResponse> {
            return MetadataAnalysisApiFp(configuration).knowledgeGraphSearch(projectServiceId, ids, options).then((request) => request(axios, basePath));
        },
        /**
         * Create segments from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {SegmentTextRequest} segmentTextRequest Request which contains the needed information for the segment operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentText(projectServiceId: string, segmentTextRequest: SegmentTextRequest, options?: any): AxiosPromise<SegmentTextResponse> {
            return MetadataAnalysisApiFp(configuration).segmentText(projectServiceId, segmentTextRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Translate captions from a given text.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateCaptionsRequest} translateCaptionsRequest Request which contains the needed information for the traslate captions operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translateCaptions(projectServiceId: string, translateCaptionsRequest: TranslateCaptionsRequest, options?: any): AxiosPromise<TranslateCaptionsResponse> {
            return MetadataAnalysisApiFp(configuration).translateCaptions(projectServiceId, translateCaptionsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Translate a given text to a target language.
         * @param {string} projectServiceId Project service id of the client associated to the request
         * @param {TranslateTextRequest} translateTextRequest Request which contains the needed information for the translate operation.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        translateText(projectServiceId: string, translateTextRequest: TranslateTextRequest, options?: any): AxiosPromise<TranslateTextResponse> {
            return MetadataAnalysisApiFp(configuration).translateText(projectServiceId, translateTextRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetadataAnalysisApi - object-oriented interface
 * @export
 * @class MetadataAnalysisApi
 * @extends {BaseAPI}
 */
export class MetadataAnalysisApi extends BaseAPI {
    /**
     * Perform metadata analysis on the provided text.
     * @param {string} projectServiceId Project service id of the client associated to the request
     * @param {AnalyzeRequest} analyzeRequest Text to be analyzed and list of requested analysis methods.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataAnalysisApi
     */
    public analyze(projectServiceId: string, analyzeRequest: AnalyzeRequest, options?: any) {
        return MetadataAnalysisApiFp(this.configuration).analyze(projectServiceId, analyzeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information for given knowledge graph ids. Knowledge graph ids are returned by the entities extractor of the analyzed method. This returns detailed information on an entity including image and description.
     * @param {string} projectServiceId Project service id of the client associated to the request
     * @param {Array<string>} ids Query knowledge graph ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataAnalysisApi
     */
    public knowledgeGraphSearch(projectServiceId: string, ids: Array<string>, options?: any) {
        return MetadataAnalysisApiFp(this.configuration).knowledgeGraphSearch(projectServiceId, ids, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create segments from a given text.
     * @param {string} projectServiceId Project service id of the client associated to the request
     * @param {SegmentTextRequest} segmentTextRequest Request which contains the needed information for the segment operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataAnalysisApi
     */
    public segmentText(projectServiceId: string, segmentTextRequest: SegmentTextRequest, options?: any) {
        return MetadataAnalysisApiFp(this.configuration).segmentText(projectServiceId, segmentTextRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Translate captions from a given text.
     * @param {string} projectServiceId Project service id of the client associated to the request
     * @param {TranslateCaptionsRequest} translateCaptionsRequest Request which contains the needed information for the traslate captions operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataAnalysisApi
     */
    public translateCaptions(projectServiceId: string, translateCaptionsRequest: TranslateCaptionsRequest, options?: any) {
        return MetadataAnalysisApiFp(this.configuration).translateCaptions(projectServiceId, translateCaptionsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Translate a given text to a target language.
     * @param {string} projectServiceId Project service id of the client associated to the request
     * @param {TranslateTextRequest} translateTextRequest Request which contains the needed information for the translate operation.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetadataAnalysisApi
     */
    public translateText(projectServiceId: string, translateTextRequest: TranslateTextRequest, options?: any) {
        return MetadataAnalysisApiFp(this.configuration).translateText(projectServiceId, translateTextRequest, options).then((request) => request(this.axios, this.basePath));
    }

}
