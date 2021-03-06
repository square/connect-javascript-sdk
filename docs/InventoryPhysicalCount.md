# SquareConnect.InventoryPhysicalCount

### Description

Represents the quantity of an item variation that is physically present at a specific location, verified by a seller or a seller's employee. For example, a physical count might come from an employee counting the item variations on hand or from syncing with an external system.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique ID generated by Square for the &#x60;InventoryPhysicalCount&#x60;. | [optional] 
**reference_id** | **String** | An optional ID provided by the application to tie the &#x60;InventoryPhysicalCount&#x60; to an external system. | [optional] 
**catalog_object_id** | **String** | The Square generated ID of the &#x60;CatalogObject&#x60; being tracked. | [optional] 
**catalog_object_type** | **String** | The &#x60;CatalogObjectType&#x60; of the &#x60;CatalogObject&#x60; being tracked. Tracking is only supported for the &#x60;ITEM_VARIATION&#x60; type. | [optional] 
**state** | **String** | The current &#x60;InventoryState&#x60; for the related quantity of items. See [InventoryState](#type-inventorystate) for possible values | [optional] 
**location_id** | **String** | The Square ID of the &#x60;Location&#x60; where the related quantity of items are being tracked. | [optional] 
**quantity** | **String** | The number of items affected by the physical count as a decimal string. Can support up to 5 digits after the decimal point. | [optional] 
**source** | [**SourceApplication**](SourceApplication.md) | Read-only information about the application that submitted the physical count. | [optional] 
**employee_id** | **String** | The Square ID of the &#x60;Employee&#x60; responsible for the physical count. | [optional] 
**occurred_at** | **String** | A client-generated timestamp in RFC 3339 format that indicates when the physical count took place. For write actions, the &#x60;occurred_at&#x60; timestamp cannot be older than 24 hours or in the future relative to the time of the request. | [optional] 
**created_at** | **String** | A read-only timestamp in RFC 3339 format that indicates when Square received the physical count. | [optional] 


