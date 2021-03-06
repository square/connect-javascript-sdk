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
var TipSettings = require('./TipSettings');




/**
 * The DeviceCheckoutOptions model module.
 * @module model/DeviceCheckoutOptions
 */

/**
 * Constructs a new <code>DeviceCheckoutOptions</code>.
 * 
 * @alias module:model/DeviceCheckoutOptions
 * @class
 * @param deviceId {String} The unique ID of the device intended for this `TerminalCheckout`. A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint. Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
 */
var exports = function(deviceId) {
  var _this = this;

  _this['device_id'] = deviceId;


};

/**
 * Constructs a <code>DeviceCheckoutOptions</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DeviceCheckoutOptions} obj Optional instance to populate.
 * @return {module:model/DeviceCheckoutOptions} The populated <code>DeviceCheckoutOptions</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('device_id')) {
      obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
    }
      if (data.hasOwnProperty('skip_receipt_screen')) {
      obj['skip_receipt_screen'] = ApiClient.convertToType(data['skip_receipt_screen'], 'Boolean');
    }
      if (data.hasOwnProperty('tip_settings')) {
      obj['tip_settings'] = TipSettings.constructFromObject(data['tip_settings']);
    }
    }
  return obj;
}

/**
 * The unique ID of the device intended for this `TerminalCheckout`. A list of `DeviceCode` objects can be retrieved from the /v2/devices/codes endpoint. Match a `DeviceCode.device_id` value with `device_id` to get the associated device code.
 * @member {String} device_id
 */
exports.prototype['device_id'] = undefined;
/**
 * Instruct the device to skip the receipt screen. Defaults to false.
 * @member {Boolean} skip_receipt_screen
 */
exports.prototype['skip_receipt_screen'] = undefined;
/**
 * Tip specific settings
 * @member {module:model/TipSettings} tip_settings
 */
exports.prototype['tip_settings'] = undefined;



module.exports = exports;



