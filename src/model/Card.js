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
var Address = require('./Address');




/**
 * The Card model module.
 * @module model/Card
 */

/**
 * Constructs a new <code>Card</code>.
 * Represents the payment details of a card to be used for payments. These details are determined by the &#x60;card_nonce&#x60; generated by &#x60;SqPaymentForm&#x60;.
 * @alias module:model/Card
 * @class
 */
var exports = function() {
  var _this = this;









};

/**
 * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Card} obj Optional instance to populate.
 * @return {module:model/Card} The populated <code>Card</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('card_brand')) {
      obj['card_brand'] = ApiClient.convertToType(data['card_brand'], 'String');
    }
      if (data.hasOwnProperty('last_4')) {
      obj['last_4'] = ApiClient.convertToType(data['last_4'], 'String');
    }
      if (data.hasOwnProperty('exp_month')) {
      obj['exp_month'] = ApiClient.convertToType(data['exp_month'], 'Number');
    }
      if (data.hasOwnProperty('exp_year')) {
      obj['exp_year'] = ApiClient.convertToType(data['exp_year'], 'Number');
    }
      if (data.hasOwnProperty('cardholder_name')) {
      obj['cardholder_name'] = ApiClient.convertToType(data['cardholder_name'], 'String');
    }
      if (data.hasOwnProperty('billing_address')) {
      obj['billing_address'] = Address.constructFromObject(data['billing_address']);
    }
      if (data.hasOwnProperty('fingerprint')) {
      obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
    }
    }
  return obj;
}

/**
 * Unique ID for this card. Generated by Square.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The card's brand (such as `VISA`). See [CardBrand](#type-cardbrand) for possible values
 * @member {module:model/Card.CardBrandEnum} card_brand
 */
exports.prototype['card_brand'] = undefined;
/**
 * The last 4 digits of the card number.
 * @member {String} last_4
 */
exports.prototype['last_4'] = undefined;
/**
 * The expiration month of the associated card as an integer between 1 and 12.
 * @member {Number} exp_month
 */
exports.prototype['exp_month'] = undefined;
/**
 * The four-digit year of the card's expiration date.
 * @member {Number} exp_year
 */
exports.prototype['exp_year'] = undefined;
/**
 * The name of the cardholder.
 * @member {String} cardholder_name
 */
exports.prototype['cardholder_name'] = undefined;
/**
 * The billing address for this card.
 * @member {module:model/Address} billing_address
 */
exports.prototype['billing_address'] = undefined;
/**
 * A unique, Square-assigned ID that identifies the card across multiple locations and applications for a single Square account.
 * @member {String} fingerprint
 */
exports.prototype['fingerprint'] = undefined;


  /**
   * Allowed values for the <code>card_brand</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CardBrandEnum = {
    /**
     * value: "OTHER_BRAND"
     * @const
     */
    "OTHER_BRAND": "OTHER_BRAND",
    /**
     * value: "VISA"
     * @const
     */
    "VISA": "VISA",
    /**
     * value: "MASTERCARD"
     * @const
     */
    "MASTERCARD": "MASTERCARD",
    /**
     * value: "AMERICAN_EXPRESS"
     * @const
     */
    "AMERICAN_EXPRESS": "AMERICAN_EXPRESS",
    /**
     * value: "DISCOVER"
     * @const
     */
    "DISCOVER": "DISCOVER",
    /**
     * value: "DISCOVER_DINERS"
     * @const
     */
    "DISCOVER_DINERS": "DISCOVER_DINERS",
    /**
     * value: "JCB"
     * @const
     */
    "JCB": "JCB",
    /**
     * value: "CHINA_UNIONPAY"
     * @const
     */
    "CHINA_UNIONPAY": "CHINA_UNIONPAY",
    /**
     * value: "SQUARE_GIFT_CARD"
     * @const
     */
    "SQUARE_GIFT_CARD": "SQUARE_GIFT_CARD"  };


module.exports = exports;



