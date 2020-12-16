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
var CustomerGroup = require('./CustomerGroup');
var Error = require('./Error');




/**
 * The ListCustomerGroupsResponse model module.
 * @module model/ListCustomerGroupsResponse
 */

/**
 * Constructs a new <code>ListCustomerGroupsResponse</code>.
 * Defines the fields that are included in the response body of a request to the [ListCustomerGroups](#endpoint-listcustomergroups) endpoint.  One of &#x60;errors&#x60; or &#x60;groups&#x60; is present in a given response (never both).
 * @alias module:model/ListCustomerGroupsResponse
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>ListCustomerGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ListCustomerGroupsResponse} obj Optional instance to populate.
 * @return {module:model/ListCustomerGroupsResponse} The populated <code>ListCustomerGroupsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('groups')) {
      obj['groups'] = ApiClient.convertToType(data['groups'], [CustomerGroup]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * A list of customer groups belonging to the current merchant.
 * @member {Array.<module:model/CustomerGroup>} groups
 */
exports.prototype['groups'] = undefined;
/**
 * A pagination cursor to retrieve the next set of results for your original query to the endpoint. This value is present only if the request succeeded and additional results are available.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;



module.exports = exports;



