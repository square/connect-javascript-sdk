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
var OrderQuantityUnit = require('./OrderQuantityUnit');
var OrderReturnDiscount = require('./OrderReturnDiscount');
var OrderReturnLineItemModifier = require('./OrderReturnLineItemModifier');
var OrderReturnTax = require('./OrderReturnTax');




/**
 * The OrderReturnLineItem model module.
 * @module model/OrderReturnLineItem
 */

/**
 * Constructs a new <code>OrderReturnLineItem</code>.
 * The line item being returned in an Order.
 * @alias module:model/OrderReturnLineItem
 * @class
 * @param quantity {String} The quantity returned, formatted as a decimal number. For example: `\"3\"`.  Line items with a `quantity_unit` can have non-integer quantities. For example: `\"1.70000\"`.
 */
var exports = function(quantity) {
  var _this = this;




  _this['quantity'] = quantity;













};

/**
 * Constructs a <code>OrderReturnLineItem</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderReturnLineItem} obj Optional instance to populate.
 * @return {module:model/OrderReturnLineItem} The populated <code>OrderReturnLineItem</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('uid')) {
      obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
    }
      if (data.hasOwnProperty('source_line_item_uid')) {
      obj['source_line_item_uid'] = ApiClient.convertToType(data['source_line_item_uid'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'String');
    }
      if (data.hasOwnProperty('quantity_unit')) {
      obj['quantity_unit'] = OrderQuantityUnit.constructFromObject(data['quantity_unit']);
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('catalog_object_id')) {
      obj['catalog_object_id'] = ApiClient.convertToType(data['catalog_object_id'], 'String');
    }
      if (data.hasOwnProperty('variation_name')) {
      obj['variation_name'] = ApiClient.convertToType(data['variation_name'], 'String');
    }
      if (data.hasOwnProperty('return_modifiers')) {
      obj['return_modifiers'] = ApiClient.convertToType(data['return_modifiers'], [OrderReturnLineItemModifier]);
    }
      if (data.hasOwnProperty('return_taxes')) {
      obj['return_taxes'] = ApiClient.convertToType(data['return_taxes'], [OrderReturnTax]);
    }
      if (data.hasOwnProperty('return_discounts')) {
      obj['return_discounts'] = ApiClient.convertToType(data['return_discounts'], [OrderReturnDiscount]);
    }
      if (data.hasOwnProperty('base_price_money')) {
      obj['base_price_money'] = Money.constructFromObject(data['base_price_money']);
    }
      if (data.hasOwnProperty('variation_total_price_money')) {
      obj['variation_total_price_money'] = Money.constructFromObject(data['variation_total_price_money']);
    }
      if (data.hasOwnProperty('gross_return_money')) {
      obj['gross_return_money'] = Money.constructFromObject(data['gross_return_money']);
    }
      if (data.hasOwnProperty('total_tax_money')) {
      obj['total_tax_money'] = Money.constructFromObject(data['total_tax_money']);
    }
      if (data.hasOwnProperty('total_discount_money')) {
      obj['total_discount_money'] = Money.constructFromObject(data['total_discount_money']);
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = Money.constructFromObject(data['total_money']);
    }
    }
  return obj;
}

/**
 * Unique identifier for this return line item entry. This is a read-only field.
 * @member {String} uid
 */
exports.prototype['uid'] = undefined;
/**
 * `uid` of the LineItem in the original sale Order.
 * @member {String} source_line_item_uid
 */
exports.prototype['source_line_item_uid'] = undefined;
/**
 * The name of the line item.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The quantity returned, formatted as a decimal number. For example: `\"3\"`.  Line items with a `quantity_unit` can have non-integer quantities. For example: `\"1.70000\"`.
 * @member {String} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * The unit and precision that this return line item's quantity is measured in.
 * @member {module:model/OrderQuantityUnit} quantity_unit
 */
exports.prototype['quantity_unit'] = undefined;
/**
 * The note of the returned line item.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The [CatalogItemVariation](#type-catalogitemvariation) id applied to this returned line item.
 * @member {String} catalog_object_id
 */
exports.prototype['catalog_object_id'] = undefined;
/**
 * The name of the variation applied to this returned line item.
 * @member {String} variation_name
 */
exports.prototype['variation_name'] = undefined;
/**
 * The [CatalogModifier](#type-catalogmodifier)s applied to this line item.
 * @member {Array.<module:model/OrderReturnLineItemModifier>} return_modifiers
 */
exports.prototype['return_modifiers'] = undefined;
/**
 * A list of taxes applied to this line item. On read or retrieve, this list includes both item-level taxes and any return-level taxes apportioned to this item.
 * @member {Array.<module:model/OrderReturnTax>} return_taxes
 */
exports.prototype['return_taxes'] = undefined;
/**
 * A list of discounts applied to this line item. On read or retrieve, this list includes both item-level discounts and any return-level discounts apportioned to this item.
 * @member {Array.<module:model/OrderReturnDiscount>} return_discounts
 */
exports.prototype['return_discounts'] = undefined;
/**
 * The base price for a single unit of the line item.
 * @member {module:model/Money} base_price_money
 */
exports.prototype['base_price_money'] = undefined;
/**
 * The total price of all item variations returned in this line item. Calculated as `base_price_money` multiplied by `quantity`. Does not include modifiers.
 * @member {module:model/Money} variation_total_price_money
 */
exports.prototype['variation_total_price_money'] = undefined;
/**
 * The gross return amount of money calculated as (item base price + modifiers price) * quantity.  This field is read-only.
 * @member {module:model/Money} gross_return_money
 */
exports.prototype['gross_return_money'] = undefined;
/**
 * The total tax amount of money to return for the line item.  This field is read-only.
 * @member {module:model/Money} total_tax_money
 */
exports.prototype['total_tax_money'] = undefined;
/**
 * The total discount amount of money to return for the line item.  This field is read-only.
 * @member {module:model/Money} total_discount_money
 */
exports.prototype['total_discount_money'] = undefined;
/**
 * The total amount of money to return for this line item.  This field is read-only.
 * @member {module:model/Money} total_money
 */
exports.prototype['total_money'] = undefined;



module.exports = exports;



