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
 * Enum class CatalogCustomAttributeDefinitionType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "STRING"
   * @const
   */
  "STRING": "STRING",
  /**
   * value: "BOOLEAN"
   * @const
   */
  "BOOLEAN": "BOOLEAN",
  /**
   * value: "NUMBER"
   * @const
   */
  "NUMBER": "NUMBER",
  /**
   * value: "SELECTION"
   * @const
   */
  "SELECTION": "SELECTION"};

/**
 * Returns a <code>CatalogCustomAttributeDefinitionType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/CatalogCustomAttributeDefinitionType} The enum <code>CatalogCustomAttributeDefinitionType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;

