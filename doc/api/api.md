# clay-driver-base@4.1.5

Base driver for clay

+ Functions
  + [create(args)](#clay-driver-base-function-create)
+ [`Driver`](#clay-driver-base-class) Class
  + [new Driver()](#clay-driver-base-class-driver-constructor)
  + [driver.one(resourceName, id)](#clay-driver-base-class-driver-one)
  + [driver.list(resourceName, condition)](#clay-driver-base-class-driver-list)
  + [driver.create(resourceName, attributes)](#clay-driver-base-class-driver-create)
  + [driver.update(resourceName, id, attributes)](#clay-driver-base-class-driver-update)
  + [driver.destroy(resourceName, id)](#clay-driver-base-class-driver-destroy)
  + [driver.drop(resourceName)](#clay-driver-base-class-driver-drop)
  + [driver.resources()](#clay-driver-base-class-driver-resources)

## Functions

<a class='md-heading-link' name="clay-driver-base-function-create" ></a>

### create(args) -> `Driver`

Create driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-base-class"></a>

## `Driver` Class

Abstract driver




<a class='md-heading-link' name="clay-driver-base-class-driver-constructor" ></a>

### new Driver()

Constructor of Driver class



<a class='md-heading-link' name="clay-driver-base-class-driver-one" ></a>

### driver.one(resourceName, id) -> `Promise.<ClayEntity>`

Get single entity from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-base-class-driver-list" ></a>

### driver.list(resourceName, condition) -> `Promise.<ClayCollection>`

List entities from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| condition | ListCondition | List condition query |


<a class='md-heading-link' name="clay-driver-base-class-driver-create" ></a>

### driver.create(resourceName, attributes) -> `Promise.<ClayEntity>`

Create a new entity with resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| attributes | Object | Resource attributes to create |


<a class='md-heading-link' name="clay-driver-base-class-driver-update" ></a>

### driver.update(resourceName, id, attributes) -> `Promise.<ClayEntity>`

Update an existing entity in resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |
| attributes | Object | Resource attributes to update |


<a class='md-heading-link' name="clay-driver-base-class-driver-destroy" ></a>

### driver.destroy(resourceName, id) -> `Promise.<number>`

Delete a entity resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-base-class-driver-drop" ></a>

### driver.drop(resourceName) -> `Promise.<boolean>`

Drop resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |


<a class='md-heading-link' name="clay-driver-base-class-driver-resources" ></a>

### driver.resources() -> `Promise.<Resource>`

List resources



