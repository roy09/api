/**
 * API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DoesHaveCVByStaffIdGETResponse', 'model/DoesHavePhotoByStaffIdGETResponse', 'model/GetBuildingByDomainIdModeByStaffIdGETResponse', 'model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse', 'model/GetCurrentGrantSizeByStaffIdGETResponse', 'model/GetDesciplineOptionsPOSTRequest', 'model/GetGrantSizeByStaffIdGETResponse', 'model/GetMembersByCodeListAndJobTypePOSTRequest', 'model/GetMembersByDomainListAndJobTypePOSTRequest', 'model/GetProfileUrlByDomainIdByDomainIdGETResponse', 'model/GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse', 'model/GetProjectSearchResultSizeByQueryStringGETResponse', 'model/GetPublicationsForGroupPOSTRequest', 'model/GetPublicationsPOSTRequest', 'model/GetSearchResultSizeByQueryStringGETResponse', 'model/GetStaffIdByUrlIdGETResponse', 'model/GetStaffProfileUrlByStaffIdGETResponse', 'model/GetStaffProfileUrlForReportingByStaffIdGETResponse', 'model/IsBlacklistedByStaffIdGETResponse', 'model/IsCurrentByStaffIdGETResponse', 'model/IsCurrentInDomainByStaffIdAndDomainIdGETResponse', 'model/IsCurrentInOrgUnitCodeByStaffIdGETResponse', 'model/UpdateCacheByStaffIdGETResponse', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DoesHaveCVByStaffIdGETResponse'), require('./model/DoesHavePhotoByStaffIdGETResponse'), require('./model/GetBuildingByDomainIdModeByStaffIdGETResponse'), require('./model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse'), require('./model/GetCurrentGrantSizeByStaffIdGETResponse'), require('./model/GetDesciplineOptionsPOSTRequest'), require('./model/GetGrantSizeByStaffIdGETResponse'), require('./model/GetMembersByCodeListAndJobTypePOSTRequest'), require('./model/GetMembersByDomainListAndJobTypePOSTRequest'), require('./model/GetProfileUrlByDomainIdByDomainIdGETResponse'), require('./model/GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse'), require('./model/GetProjectSearchResultSizeByQueryStringGETResponse'), require('./model/GetPublicationsForGroupPOSTRequest'), require('./model/GetPublicationsPOSTRequest'), require('./model/GetSearchResultSizeByQueryStringGETResponse'), require('./model/GetStaffIdByUrlIdGETResponse'), require('./model/GetStaffProfileUrlByStaffIdGETResponse'), require('./model/GetStaffProfileUrlForReportingByStaffIdGETResponse'), require('./model/IsBlacklistedByStaffIdGETResponse'), require('./model/IsCurrentByStaffIdGETResponse'), require('./model/IsCurrentInDomainByStaffIdAndDomainIdGETResponse'), require('./model/IsCurrentInOrgUnitCodeByStaffIdGETResponse'), require('./model/UpdateCacheByStaffIdGETResponse'), require('./api/DefaultApi'));
  }
}(function(ApiClient, DoesHaveCVByStaffIdGETResponse, DoesHavePhotoByStaffIdGETResponse, GetBuildingByDomainIdModeByStaffIdGETResponse, GetBuildingByOrgUnitCodeModeByStaffIdGETResponse, GetCurrentGrantSizeByStaffIdGETResponse, GetDesciplineOptionsPOSTRequest, GetGrantSizeByStaffIdGETResponse, GetMembersByCodeListAndJobTypePOSTRequest, GetMembersByDomainListAndJobTypePOSTRequest, GetProfileUrlByDomainIdByDomainIdGETResponse, GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse, GetProjectSearchResultSizeByQueryStringGETResponse, GetPublicationsForGroupPOSTRequest, GetPublicationsPOSTRequest, GetSearchResultSizeByQueryStringGETResponse, GetStaffIdByUrlIdGETResponse, GetStaffProfileUrlByStaffIdGETResponse, GetStaffProfileUrlForReportingByStaffIdGETResponse, IsBlacklistedByStaffIdGETResponse, IsCurrentByStaffIdGETResponse, IsCurrentInDomainByStaffIdAndDomainIdGETResponse, IsCurrentInOrgUnitCodeByStaffIdGETResponse, UpdateCacheByStaffIdGETResponse, DefaultApi) {
  'use strict';

  /**
   * .<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Api = require('index'); // See note below*.
   * var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Api.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Api.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Api.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DoesHaveCVByStaffIdGETResponse model constructor.
     * @property {module:model/DoesHaveCVByStaffIdGETResponse}
     */
    DoesHaveCVByStaffIdGETResponse: DoesHaveCVByStaffIdGETResponse,
    /**
     * The DoesHavePhotoByStaffIdGETResponse model constructor.
     * @property {module:model/DoesHavePhotoByStaffIdGETResponse}
     */
    DoesHavePhotoByStaffIdGETResponse: DoesHavePhotoByStaffIdGETResponse,
    /**
     * The GetBuildingByDomainIdModeByStaffIdGETResponse model constructor.
     * @property {module:model/GetBuildingByDomainIdModeByStaffIdGETResponse}
     */
    GetBuildingByDomainIdModeByStaffIdGETResponse: GetBuildingByDomainIdModeByStaffIdGETResponse,
    /**
     * The GetBuildingByOrgUnitCodeModeByStaffIdGETResponse model constructor.
     * @property {module:model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse}
     */
    GetBuildingByOrgUnitCodeModeByStaffIdGETResponse: GetBuildingByOrgUnitCodeModeByStaffIdGETResponse,
    /**
     * The GetCurrentGrantSizeByStaffIdGETResponse model constructor.
     * @property {module:model/GetCurrentGrantSizeByStaffIdGETResponse}
     */
    GetCurrentGrantSizeByStaffIdGETResponse: GetCurrentGrantSizeByStaffIdGETResponse,
    /**
     * The GetDesciplineOptionsPOSTRequest model constructor.
     * @property {module:model/GetDesciplineOptionsPOSTRequest}
     */
    GetDesciplineOptionsPOSTRequest: GetDesciplineOptionsPOSTRequest,
    /**
     * The GetGrantSizeByStaffIdGETResponse model constructor.
     * @property {module:model/GetGrantSizeByStaffIdGETResponse}
     */
    GetGrantSizeByStaffIdGETResponse: GetGrantSizeByStaffIdGETResponse,
    /**
     * The GetMembersByCodeListAndJobTypePOSTRequest model constructor.
     * @property {module:model/GetMembersByCodeListAndJobTypePOSTRequest}
     */
    GetMembersByCodeListAndJobTypePOSTRequest: GetMembersByCodeListAndJobTypePOSTRequest,
    /**
     * The GetMembersByDomainListAndJobTypePOSTRequest model constructor.
     * @property {module:model/GetMembersByDomainListAndJobTypePOSTRequest}
     */
    GetMembersByDomainListAndJobTypePOSTRequest: GetMembersByDomainListAndJobTypePOSTRequest,
    /**
     * The GetProfileUrlByDomainIdByDomainIdGETResponse model constructor.
     * @property {module:model/GetProfileUrlByDomainIdByDomainIdGETResponse}
     */
    GetProfileUrlByDomainIdByDomainIdGETResponse: GetProfileUrlByDomainIdByDomainIdGETResponse,
    /**
     * The GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse model constructor.
     * @property {module:model/GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse}
     */
    GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse: GetProfileUrlByOrgUnitCodeByOrgUnitCodeGETResponse,
    /**
     * The GetProjectSearchResultSizeByQueryStringGETResponse model constructor.
     * @property {module:model/GetProjectSearchResultSizeByQueryStringGETResponse}
     */
    GetProjectSearchResultSizeByQueryStringGETResponse: GetProjectSearchResultSizeByQueryStringGETResponse,
    /**
     * The GetPublicationsForGroupPOSTRequest model constructor.
     * @property {module:model/GetPublicationsForGroupPOSTRequest}
     */
    GetPublicationsForGroupPOSTRequest: GetPublicationsForGroupPOSTRequest,
    /**
     * The GetPublicationsPOSTRequest model constructor.
     * @property {module:model/GetPublicationsPOSTRequest}
     */
    GetPublicationsPOSTRequest: GetPublicationsPOSTRequest,
    /**
     * The GetSearchResultSizeByQueryStringGETResponse model constructor.
     * @property {module:model/GetSearchResultSizeByQueryStringGETResponse}
     */
    GetSearchResultSizeByQueryStringGETResponse: GetSearchResultSizeByQueryStringGETResponse,
    /**
     * The GetStaffIdByUrlIdGETResponse model constructor.
     * @property {module:model/GetStaffIdByUrlIdGETResponse}
     */
    GetStaffIdByUrlIdGETResponse: GetStaffIdByUrlIdGETResponse,
    /**
     * The GetStaffProfileUrlByStaffIdGETResponse model constructor.
     * @property {module:model/GetStaffProfileUrlByStaffIdGETResponse}
     */
    GetStaffProfileUrlByStaffIdGETResponse: GetStaffProfileUrlByStaffIdGETResponse,
    /**
     * The GetStaffProfileUrlForReportingByStaffIdGETResponse model constructor.
     * @property {module:model/GetStaffProfileUrlForReportingByStaffIdGETResponse}
     */
    GetStaffProfileUrlForReportingByStaffIdGETResponse: GetStaffProfileUrlForReportingByStaffIdGETResponse,
    /**
     * The IsBlacklistedByStaffIdGETResponse model constructor.
     * @property {module:model/IsBlacklistedByStaffIdGETResponse}
     */
    IsBlacklistedByStaffIdGETResponse: IsBlacklistedByStaffIdGETResponse,
    /**
     * The IsCurrentByStaffIdGETResponse model constructor.
     * @property {module:model/IsCurrentByStaffIdGETResponse}
     */
    IsCurrentByStaffIdGETResponse: IsCurrentByStaffIdGETResponse,
    /**
     * The IsCurrentInDomainByStaffIdAndDomainIdGETResponse model constructor.
     * @property {module:model/IsCurrentInDomainByStaffIdAndDomainIdGETResponse}
     */
    IsCurrentInDomainByStaffIdAndDomainIdGETResponse: IsCurrentInDomainByStaffIdAndDomainIdGETResponse,
    /**
     * The IsCurrentInOrgUnitCodeByStaffIdGETResponse model constructor.
     * @property {module:model/IsCurrentInOrgUnitCodeByStaffIdGETResponse}
     */
    IsCurrentInOrgUnitCodeByStaffIdGETResponse: IsCurrentInOrgUnitCodeByStaffIdGETResponse,
    /**
     * The UpdateCacheByStaffIdGETResponse model constructor.
     * @property {module:model/UpdateCacheByStaffIdGETResponse}
     */
    UpdateCacheByStaffIdGETResponse: UpdateCacheByStaffIdGETResponse,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));