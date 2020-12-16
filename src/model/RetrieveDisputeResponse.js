/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var Dispute = require('./Dispute');
var Error = require('./Error');




/**
 * The RetrieveDisputeResponse model module.
 * Note: This model is in beta.
 * @module model/RetrieveDisputeResponse
 */

/**
 * Constructs a new <code>RetrieveDisputeResponse</code>.
 * Defines fields in a &#x60;RetrieveDispute&#x60; response.
 * @alias module:model/RetrieveDisputeResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveDisputeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveDisputeResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveDisputeResponse} The populated <code>RetrieveDisputeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('dispute')) {
      obj['dispute'] = Dispute.constructFromObject(data['dispute']);
    }
    }
  return obj;
}

/**
 * Information about errors encountered during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * Details about the requested `Dispute`.
 * @member {module:model/Dispute} dispute
 */
exports.prototype['dispute'] = undefined;



module.exports = exports;



