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
var Money = require('./Money');




/**
 * The CatalogQuickAmount model module.
 * Note: This model is in beta.
 * @module model/CatalogQuickAmount
 */

/**
 * Constructs a new <code>CatalogQuickAmount</code>.
 * Represents a Quick Amount in the Catalog.
 * @alias module:model/CatalogQuickAmount
 * @class
 * @param type {String} Represents the type of the Quick Amount. See [CatalogQuickAmountType](#type-catalogquickamounttype) for possible values
 * @param amount {module:model/Money} Represents the actual amount of the Quick Amount with Money type.
 */
var exports = function(type, amount) {
  var _this = this;

  _this['type'] = type;
  _this['amount'] = amount;


};

/**
 * Constructs a <code>CatalogQuickAmount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQuickAmount} obj Optional instance to populate.
 * @return {module:model/CatalogQuickAmount} The populated <code>CatalogQuickAmount</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('amount')) {
      obj['amount'] = Money.constructFromObject(data['amount']);
    }
      if (data.hasOwnProperty('score')) {
      obj['score'] = ApiClient.convertToType(data['score'], 'Number');
    }
      if (data.hasOwnProperty('ordinal')) {
      obj['ordinal'] = ApiClient.convertToType(data['ordinal'], 'Number');
    }
    }
  return obj;
}

/**
 * Represents the type of the Quick Amount. See [CatalogQuickAmountType](#type-catalogquickamounttype) for possible values
 * @member {String} type
 */
exports.prototype['type'] = undefined;
/**
 * Represents the actual amount of the Quick Amount with Money type.
 * @member {module:model/Money} amount
 */
exports.prototype['amount'] = undefined;
/**
 * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100]. MANUAL type amount will always have score = 100.
 * @member {Number} score
 */
exports.prototype['score'] = undefined;
/**
 * The order in which this Quick Amount should be displayed.
 * @member {Number} ordinal
 */
exports.prototype['ordinal'] = undefined;



module.exports = exports;



