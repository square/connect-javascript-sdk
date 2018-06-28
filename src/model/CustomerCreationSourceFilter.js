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
 * The CustomerCreationSourceFilter model module.
 * @module model/CustomerCreationSourceFilter
 */

/**
 * Constructs a new <code>CustomerCreationSourceFilter</code>.
 * Creation source filter.  If one or more creation sources are set, customer profiles are included in, or excluded from, the result if they match at least one of the filter criteria.
 * @alias module:model/CustomerCreationSourceFilter
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CustomerCreationSourceFilter</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CustomerCreationSourceFilter} obj Optional instance to populate.
 * @return {module:model/CustomerCreationSourceFilter} The populated <code>CustomerCreationSourceFilter</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('values')) {
      obj['values'] = ApiClient.convertToType(data['values'], ['String']);
    }
      if (data.hasOwnProperty('rule')) {
      obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
    }
    }
  return obj;
}

/**
 * The list of creation sources used as filtering criteria.
 * @member {Array.<module:model/CustomerCreationSourceFilter.ValuesEnum>} values
 */
exports.prototype['values'] = undefined;
/**
 * Indicates whether a customer profile matching the filter criteria should be included in the result or excluded from the result. Default: `INCLUDE`. See [CustomerInclusionExclusion](#type-customerinclusionexclusion) for possible values.
 * @member {module:model/CustomerCreationSourceFilter.RuleEnum} rule
 */
exports.prototype['rule'] = undefined;


  /**
   * Allowed values for the <code>values</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValuesEnum = {
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "APPOINTMENTS"
     * @const
     */
    "APPOINTMENTS": "APPOINTMENTS",
    /**
     * value: "COUPON"
     * @const
     */
    "COUPON": "COUPON",
    /**
     * value: "DELETION_RECOVERY"
     * @const
     */
    "DELETION_RECOVERY": "DELETION_RECOVERY",
    /**
     * value: "DIRECTORY"
     * @const
     */
    "DIRECTORY": "DIRECTORY",
    /**
     * value: "EGIFTING"
     * @const
     */
    "EGIFTING": "EGIFTING",
    /**
     * value: "EMAIL_COLLECTION"
     * @const
     */
    "EMAIL_COLLECTION": "EMAIL_COLLECTION",
    /**
     * value: "FEEDBACK"
     * @const
     */
    "FEEDBACK": "FEEDBACK",
    /**
     * value: "IMPORT"
     * @const
     */
    "IMPORT": "IMPORT",
    /**
     * value: "INVOICES"
     * @const
     */
    "INVOICES": "INVOICES",
    /**
     * value: "LOYALTY"
     * @const
     */
    "LOYALTY": "LOYALTY",
    /**
     * value: "MARKETING"
     * @const
     */
    "MARKETING": "MARKETING",
    /**
     * value: "MERGE"
     * @const
     */
    "MERGE": "MERGE",
    /**
     * value: "ONLINE_STORE"
     * @const
     */
    "ONLINE_STORE": "ONLINE_STORE",
    /**
     * value: "INSTANT_PROFILE"
     * @const
     */
    "INSTANT_PROFILE": "INSTANT_PROFILE",
    /**
     * value: "TERMINAL"
     * @const
     */
    "TERMINAL": "TERMINAL",
    /**
     * value: "THIRD_PARTY"
     * @const
     */
    "THIRD_PARTY": "THIRD_PARTY",
    /**
     * value: "THIRD_PARTY_IMPORT"
     * @const
     */
    "THIRD_PARTY_IMPORT": "THIRD_PARTY_IMPORT",
    /**
     * value: "UNMERGE_RECOVERY"
     * @const
     */
    "UNMERGE_RECOVERY": "UNMERGE_RECOVERY"  };

  /**
   * Allowed values for the <code>rule</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RuleEnum = {
    /**
     * value: "INCLUDE"
     * @const
     */
    "INCLUDE": "INCLUDE",
    /**
     * value: "EXCLUDE"
     * @const
     */
    "EXCLUDE": "EXCLUDE"  };


module.exports = exports;


