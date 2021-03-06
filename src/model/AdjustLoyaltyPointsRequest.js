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
var LoyaltyEventAdjustPoints = require('./LoyaltyEventAdjustPoints');




/**
 * The AdjustLoyaltyPointsRequest model module.
 * Note: This model is in beta.
 * @module model/AdjustLoyaltyPointsRequest
 */

/**
 * Constructs a new <code>AdjustLoyaltyPointsRequest</code>.
 * A request to adjust (add or subtract) points manually.
 * @alias module:model/AdjustLoyaltyPointsRequest
 * @class
 * @param idempotencyKey {String} A unique string that identifies this `AdjustLoyaltyPoints` request.  Keys can be any valid string, but must be unique for every request.
 * @param adjustPoints {module:model/LoyaltyEventAdjustPoints} The points to adjust (add or subtract) and the reason for the adjustment.
 */
var exports = function(idempotencyKey, adjustPoints) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['adjust_points'] = adjustPoints;
};

/**
 * Constructs a <code>AdjustLoyaltyPointsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AdjustLoyaltyPointsRequest} obj Optional instance to populate.
 * @return {module:model/AdjustLoyaltyPointsRequest} The populated <code>AdjustLoyaltyPointsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('adjust_points')) {
      obj['adjust_points'] = LoyaltyEventAdjustPoints.constructFromObject(data['adjust_points']);
    }
    }
  return obj;
}

/**
 * A unique string that identifies this `AdjustLoyaltyPoints` request.  Keys can be any valid string, but must be unique for every request.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The points to adjust (add or subtract) and the reason for the adjustment.
 * @member {module:model/LoyaltyEventAdjustPoints} adjust_points
 */
exports.prototype['adjust_points'] = undefined;



module.exports = exports;



