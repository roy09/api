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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Api) {
      root.Api = {};
    }
    root.Api.GetBuildingByOrgUnitCodeModeByStaffIdGETResponse = factory(root.Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetBuildingByOrgUnitCodeModeByStaffIdGETResponse model module.
   * @module model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>GetBuildingByOrgUnitCodeModeByStaffIdGETResponse</code>.
   * 
   * @alias module:model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetBuildingByOrgUnitCodeModeByStaffIdGETResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse} obj Optional instance to populate.
   * @return {module:model/GetBuildingByOrgUnitCodeModeByStaffIdGETResponse} The populated <code>GetBuildingByOrgUnitCodeModeByStaffIdGETResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));

