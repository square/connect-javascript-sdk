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
var V1BankAccount = require('../model/V1BankAccount');
var V1CreateRefundRequest = require('../model/V1CreateRefundRequest');
var V1Order = require('../model/V1Order');
var V1Payment = require('../model/V1Payment');
var V1Refund = require('../model/V1Refund');
var V1Settlement = require('../model/V1Settlement');
var V1UpdateOrderRequest = require('../model/V1UpdateOrderRequest');

/**
 * V1Transactions service.
 * @module api/V1TransactionsApi
 */

/**
 * Constructs a new V1TransactionsApi. 
 * @alias module:api/V1TransactionsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateRefund
   * Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.  You cannot issue a partial refund for a split tender payment. You must instead issue a full or partial refund for a particular tender, by providing the applicable tender id to the V1CreateRefund endpoint. Issuing a full refund for a split tender payment refunds all tenders associated with the payment.  Issuing a refund for a card payment is not reversible. For development purposes, you can create fake cash payments in Square Point of Sale and refund them.
   * @param {String} locationId The ID of the original payment&#39;s associated location.
   * @param {module:model/V1CreateRefundRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Refund} and HTTP response
   */
  this.createRefundWithHttpInfo = function(locationId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling createRefund");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createRefund");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Refund;

    return this.apiClient.callApi(
      '/v1/{location_id}/refunds', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateRefund
   * Issues a refund for a previously processed payment. You must issue a refund within 60 days of the associated payment.  You cannot issue a partial refund for a split tender payment. You must instead issue a full or partial refund for a particular tender, by providing the applicable tender id to the V1CreateRefund endpoint. Issuing a full refund for a split tender payment refunds all tenders associated with the payment.  Issuing a refund for a card payment is not reversible. For development purposes, you can create fake cash payments in Square Point of Sale and refund them.
   * @param {String} locationId The ID of the original payment&#39;s associated location.
   * @param {module:model/V1CreateRefundRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Refund}
   */
  this.createRefund = function(locationId, body) {
    return this.createRefundWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListBankAccounts
   * Provides non-confidential details for all of a location&#39;s associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
   * @param {String} locationId The ID of the location to list bank accounts for.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1BankAccount>} and HTTP response
   */
  this.listBankAccountsWithHttpInfo = function(locationId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listBankAccounts");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1BankAccount];

    return this.apiClient.callApi(
      '/v1/{location_id}/bank-accounts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListBankAccounts
   * Provides non-confidential details for all of a location&#39;s associated bank accounts. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
   * @param {String} locationId The ID of the location to list bank accounts for.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1BankAccount>}
   */
  this.listBankAccounts = function(locationId) {
    return this.listBankAccountsWithHttpInfo(locationId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListOrders
   * Provides summary information for a merchant&#39;s online store orders.
   * @param {String} locationId The ID of the location to list online store orders for.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Order>} and HTTP response
   */
  this.listOrdersWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listOrders");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'order': opts['order'],
      'limit': opts['limit'],
      'batch_token': opts['batchToken']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Order];

    return this.apiClient.callApi(
      '/v1/{location_id}/orders', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListOrders
   * Provides summary information for a merchant&#39;s online store orders.
   * @param {String} locationId The ID of the location to list online store orders for.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Order>}
   */
  this.listOrders = function(locationId, opts) {
    return this.listOrdersWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListPayments
   * Provides summary information for all payments taken for a given Square account during a date range. Date ranges cannot exceed 1 year in length. See Date ranges for details of inclusive and exclusive dates.  *Note**: Details for payments processed with Square Point of Sale while in offline mode may not be transmitted to Square for up to 72 hours. Offline payments have a &#x60;created_at&#x60; value that reflects the time the payment was originally processed, not the time it was subsequently transmitted to Square. Consequently, the ListPayments endpoint might list an offline payment chronologically between online payments that were seen in a previous request.
   * @param {String} locationId The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business&#39;s locations.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order The order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @param {Boolean} opts.includePartial Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Payment>} and HTTP response
   */
  this.listPaymentsWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listPayments");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'order': opts['order'],
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'limit': opts['limit'],
      'batch_token': opts['batchToken'],
      'include_partial': opts['includePartial']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Payment];

    return this.apiClient.callApi(
      '/v1/{location_id}/payments', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListPayments
   * Provides summary information for all payments taken for a given Square account during a date range. Date ranges cannot exceed 1 year in length. See Date ranges for details of inclusive and exclusive dates.  *Note**: Details for payments processed with Square Point of Sale while in offline mode may not be transmitted to Square for up to 72 hours. Offline payments have a &#x60;created_at&#x60; value that reflects the time the payment was originally processed, not the time it was subsequently transmitted to Square. Consequently, the ListPayments endpoint might list an offline payment chronologically between online payments that were seen in a previous request.
   * @param {String} locationId The ID of the location to list payments for. If you specify me, this endpoint returns payments aggregated from all of the business&#39;s locations.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order The order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @param {Boolean} opts.includePartial Indicates whether or not to include partial payments in the response. Partial payments will have the tenders collected so far, but the itemizations will be empty until the payment is completed.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Payment>}
   */
  this.listPayments = function(locationId, opts) {
    return this.listPaymentsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListRefunds
   * Provides the details for all refunds initiated by a merchant or any of the merchant&#39;s mobile staff during a date range. Date ranges cannot exceed one year in length.
   * @param {String} locationId The ID of the location to list refunds for.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Refund>} and HTTP response
   */
  this.listRefundsWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listRefunds");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'order': opts['order'],
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'limit': opts['limit'],
      'batch_token': opts['batchToken']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Refund];

    return this.apiClient.callApi(
      '/v1/{location_id}/refunds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListRefunds
   * Provides the details for all refunds initiated by a merchant or any of the merchant&#39;s mobile staff during a date range. Date ranges cannot exceed one year in length.
   * @param {String} locationId The ID of the location to list refunds for.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods.
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Refund>}
   */
  this.listRefunds = function(locationId, opts) {
    return this.listRefundsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListSettlements
   * Provides summary information for all deposits and withdrawals initiated by Square to a linked bank account during a date range. Date ranges cannot exceed one year in length.  *Note**: the ListSettlements endpoint does not provide entry information.
   * @param {String} locationId The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business&#39;s locations.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {module:model/String} opts.status Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/V1Settlement>} and HTTP response
   */
  this.listSettlementsWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listSettlements");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'order': opts['order'],
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'limit': opts['limit'],
      'status': opts['status'],
      'batch_token': opts['batchToken']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = [V1Settlement];

    return this.apiClient.callApi(
      '/v1/{location_id}/settlements', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListSettlements
   * Provides summary information for all deposits and withdrawals initiated by Square to a linked bank account during a date range. Date ranges cannot exceed one year in length.  *Note**: the ListSettlements endpoint does not provide entry information.
   * @param {String} locationId The ID of the location to list settlements for. If you specify me, this endpoint returns payments aggregated from all of the business&#39;s locations.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.order TThe order in which payments are listed in the response.
   * @param {String} opts.beginTime The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   * @param {Number} opts.limit The maximum number of payments to return in a single response. This value cannot exceed 200.
   * @param {module:model/String} opts.status Provide this parameter to retrieve only settlements with a particular status (SENT or FAILED).
   * @param {String} opts.batchToken A pagination cursor to retrieve the next set of results for your original query to the endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/V1Settlement>}
   */
  this.listSettlements = function(locationId, opts) {
    return this.listSettlementsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveBankAccount
   * Provides non-confidential details for a merchant&#39;s associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
   * @param {String} locationId The ID of the bank account&#39;s associated location.
   * @param {String} bankAccountId The bank account&#39;s Square-issued ID. You obtain this value from Settlement objects returned.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1BankAccount} and HTTP response
   */
  this.retrieveBankAccountWithHttpInfo = function(locationId, bankAccountId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveBankAccount");
    }

    // verify the required parameter 'bankAccountId' is set
    if (bankAccountId === undefined || bankAccountId === null) {
      throw new Error("Missing the required parameter 'bankAccountId' when calling retrieveBankAccount");
    }


    var pathParams = {
      'location_id': locationId,
      'bank_account_id': bankAccountId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1BankAccount;

    return this.apiClient.callApi(
      '/v1/{location_id}/bank-accounts/{bank_account_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveBankAccount
   * Provides non-confidential details for a merchant&#39;s associated bank account. This endpoint does not provide full bank account numbers, and there is no way to obtain a full bank account number with the Connect API.
   * @param {String} locationId The ID of the bank account&#39;s associated location.
   * @param {String} bankAccountId The bank account&#39;s Square-issued ID. You obtain this value from Settlement objects returned.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1BankAccount}
   */
  this.retrieveBankAccount = function(locationId, bankAccountId) {
    return this.retrieveBankAccountWithHttpInfo(locationId, bankAccountId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveOrder
   * Provides comprehensive information for a single online store order, including the order&#39;s history.
   * @param {String} locationId The ID of the order&#39;s associated location.
   * @param {String} orderId The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Order} and HTTP response
   */
  this.retrieveOrderWithHttpInfo = function(locationId, orderId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveOrder");
    }

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error("Missing the required parameter 'orderId' when calling retrieveOrder");
    }


    var pathParams = {
      'location_id': locationId,
      'order_id': orderId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Order;

    return this.apiClient.callApi(
      '/v1/{location_id}/orders/{order_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveOrder
   * Provides comprehensive information for a single online store order, including the order&#39;s history.
   * @param {String} locationId The ID of the order&#39;s associated location.
   * @param {String} orderId The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Order}
   */
  this.retrieveOrder = function(locationId, orderId) {
    return this.retrieveOrderWithHttpInfo(locationId, orderId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrievePayment
   * Provides comprehensive information for a single payment.
   * @param {String} locationId The ID of the payment&#39;s associated location.
   * @param {String} paymentId The Square-issued payment ID. payment_id comes from Payment objects returned by the List Payments endpoint, Settlement objects returned by the List Settlements endpoint, or Refund objects returned by the List Refunds endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Payment} and HTTP response
   */
  this.retrievePaymentWithHttpInfo = function(locationId, paymentId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrievePayment");
    }

    // verify the required parameter 'paymentId' is set
    if (paymentId === undefined || paymentId === null) {
      throw new Error("Missing the required parameter 'paymentId' when calling retrievePayment");
    }


    var pathParams = {
      'location_id': locationId,
      'payment_id': paymentId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Payment;

    return this.apiClient.callApi(
      '/v1/{location_id}/payments/{payment_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrievePayment
   * Provides comprehensive information for a single payment.
   * @param {String} locationId The ID of the payment&#39;s associated location.
   * @param {String} paymentId The Square-issued payment ID. payment_id comes from Payment objects returned by the List Payments endpoint, Settlement objects returned by the List Settlements endpoint, or Refund objects returned by the List Refunds endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Payment}
   */
  this.retrievePayment = function(locationId, paymentId) {
    return this.retrievePaymentWithHttpInfo(locationId, paymentId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveSettlement
   * Provides comprehensive information for a single settlement.  The returned &#x60;Settlement&#x60; objects include an &#x60;entries&#x60; field that lists the transactions that contribute to the settlement total. Most settlement entries correspond to a payment payout, but settlement entries are also generated for less common events, like refunds, manual adjustments, or chargeback holds.  Square initiates its regular deposits as indicated in the [Deposit Options with Square](https://squareup.com/help/us/en/article/3807) help article. Details for a regular deposit are usually not available from Connect API endpoints before 10 p.m. PST the same day.  Square does not know when an initiated settlement **completes**, only whether it has failed. A completed settlement is typically reflected in a bank account within 3 business days, but in exceptional cases it may take longer.
   * @param {String} locationId The ID of the settlements&#39;s associated location.
   * @param {String} settlementId The settlement&#39;s Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Settlement} and HTTP response
   */
  this.retrieveSettlementWithHttpInfo = function(locationId, settlementId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveSettlement");
    }

    // verify the required parameter 'settlementId' is set
    if (settlementId === undefined || settlementId === null) {
      throw new Error("Missing the required parameter 'settlementId' when calling retrieveSettlement");
    }


    var pathParams = {
      'location_id': locationId,
      'settlement_id': settlementId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Settlement;

    return this.apiClient.callApi(
      '/v1/{location_id}/settlements/{settlement_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveSettlement
   * Provides comprehensive information for a single settlement.  The returned &#x60;Settlement&#x60; objects include an &#x60;entries&#x60; field that lists the transactions that contribute to the settlement total. Most settlement entries correspond to a payment payout, but settlement entries are also generated for less common events, like refunds, manual adjustments, or chargeback holds.  Square initiates its regular deposits as indicated in the [Deposit Options with Square](https://squareup.com/help/us/en/article/3807) help article. Details for a regular deposit are usually not available from Connect API endpoints before 10 p.m. PST the same day.  Square does not know when an initiated settlement **completes**, only whether it has failed. A completed settlement is typically reflected in a bank account within 3 business days, but in exceptional cases it may take longer.
   * @param {String} locationId The ID of the settlements&#39;s associated location.
   * @param {String} settlementId The settlement&#39;s Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Settlement}
   */
  this.retrieveSettlement = function(locationId, settlementId) {
    return this.retrieveSettlementWithHttpInfo(locationId, settlementId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateOrder
   * Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
   * @param {String} locationId The ID of the order&#39;s associated location.
   * @param {String} orderId The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
   * @param {module:model/V1UpdateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1Order} and HTTP response
   */
  this.updateOrderWithHttpInfo = function(locationId, orderId, body) {
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling updateOrder");
    }

    // verify the required parameter 'orderId' is set
    if (orderId === undefined || orderId === null) {
      throw new Error("Missing the required parameter 'orderId' when calling updateOrder");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateOrder");
    }


    var pathParams = {
      'location_id': locationId,
      'order_id': orderId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2019-06-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = V1Order;

    return this.apiClient.callApi(
      '/v1/{location_id}/orders/{order_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateOrder
   * Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
   * @param {String} locationId The ID of the order&#39;s associated location.
   * @param {String} orderId The order&#39;s Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint
   * @param {module:model/V1UpdateOrderRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1Order}
   */
  this.updateOrder = function(locationId, orderId, body) {
    return this.updateOrderWithHttpInfo(locationId, orderId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
