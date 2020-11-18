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




/**
 * The CatalogIdMapping model module.
 * @module model/CatalogIdMapping
 */

/**
 * Constructs a new <code>CatalogIdMapping</code>.
 * A mapping between a temporary client-supplied ID and a permanent server-generated ID.  When calling [UpsertCatalogObject](#endpoint-Catalog-UpsertCatalogObject) or [BatchUpsertCatalogObjects](#endpoint-Catalog-BatchUpsertCatalogObjects) to create a [CatalogObject](#type-CatalogObject) instance, you can supply a temporary ID for the to-be-created object, especially when the object is to be referenced elsewhere in the same request body. This temporary ID can be any string unique within the call, but must be prefixed by \&quot;#\&quot;.  After the request is submitted and the object created, a permanent server-generated ID is assigned to the new object. The permanent ID is unique across the Square catalog.
 * @alias module:model/CatalogIdMapping
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CatalogIdMapping</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogIdMapping} obj Optional instance to populate.
 * @return {module:model/CatalogIdMapping} The populated <code>CatalogIdMapping</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('client_object_id')) {
      obj['client_object_id'] = ApiClient.convertToType(data['client_object_id'], 'String');
    }
      if (data.hasOwnProperty('object_id')) {
      obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
    }
    }
  return obj;
}

/**
 * The client-supplied temporary `#`-prefixed ID for a new `CatalogObject`.
 * @member {String} client_object_id
 */
exports.prototype['client_object_id'] = undefined;
/**
 * The permanent ID for the CatalogObject created by the server.
 * @member {String} object_id
 */
exports.prototype['object_id'] = undefined;



module.exports = exports;



