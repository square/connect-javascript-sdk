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
var BusinessAppointmentSettings = require('./BusinessAppointmentSettings');
var BusinessBookingProfileBookingPolicy = require('./BusinessBookingProfileBookingPolicy');
var BusinessBookingProfileCustomerTimezoneChoice = require('./BusinessBookingProfileCustomerTimezoneChoice');




/**
 * The BusinessBookingProfile model module.
 * Note: This model is in beta.
 * @module model/BusinessBookingProfile
 */

/**
 * Constructs a new <code>BusinessBookingProfile</code>.
 * 
 * @alias module:model/BusinessBookingProfile
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>BusinessBookingProfile</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/BusinessBookingProfile} obj Optional instance to populate.
 * @return {module:model/BusinessBookingProfile} The populated <code>BusinessBookingProfile</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('seller_id')) {
      obj['seller_id'] = ApiClient.convertToType(data['seller_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('booking_enabled')) {
      obj['booking_enabled'] = ApiClient.convertToType(data['booking_enabled'], 'Boolean');
    }
      if (data.hasOwnProperty('customer_timezone_choice')) {
      obj['customer_timezone_choice'] = BusinessBookingProfileCustomerTimezoneChoice.constructFromObject(data['customer_timezone_choice']);
    }
      if (data.hasOwnProperty('booking_policy')) {
      obj['booking_policy'] = BusinessBookingProfileBookingPolicy.constructFromObject(data['booking_policy']);
    }
      if (data.hasOwnProperty('allow_user_cancel')) {
      obj['allow_user_cancel'] = ApiClient.convertToType(data['allow_user_cancel'], 'Boolean');
    }
      if (data.hasOwnProperty('business_appointment_settings')) {
      obj['business_appointment_settings'] = BusinessAppointmentSettings.constructFromObject(data['business_appointment_settings']);
    }
    }
  return obj;
}

/**
 * The ID of the seller, obtainable using the Merchants API.
 * @member {String} seller_id
 */
exports.prototype['seller_id'] = undefined;
/**
 * The RFC-3339 timestamp specifying the booking's creation time.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Indicates whether the seller is open for booking.
 * @member {Boolean} booking_enabled
 */
exports.prototype['booking_enabled'] = undefined;
/**
 * The choice of customer's time zone information of a booking. The Square online booking site and all notifications to customers uses either the seller location’s time zone or the time zone the customer chooses at booking.
 * @member {module:model/BusinessBookingProfileCustomerTimezoneChoice} customer_timezone_choice
 */
exports.prototype['customer_timezone_choice'] = undefined;
/**
 * The policy for the seller to automatically accept booking requests (`ACCEPT_ALL`) or not (`REQUIRES_ACCEPTANCE`).
 * @member {module:model/BusinessBookingProfileBookingPolicy} booking_policy
 */
exports.prototype['booking_policy'] = undefined;
/**
 * Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`).
 * @member {Boolean} allow_user_cancel
 */
exports.prototype['allow_user_cancel'] = undefined;
/**
 * Settings for appointment-type bookings.
 * @member {module:model/BusinessAppointmentSettings} business_appointment_settings
 */
exports.prototype['business_appointment_settings'] = undefined;



module.exports = exports;



