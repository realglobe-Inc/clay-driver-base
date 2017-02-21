# clay-driver-base@0.1.0

Base driver for clay

+ Functions
  + [create(args)](#clay-driver-base-function-create)
+ [Driver](clay-driver-base-classes) Class
  + [new Driver()](#clay-driver-base-classes-driver-constructor)
  + [driver.one(namespace, id)](#clay-driver-base-classes-driver-one)
  + [driver.list(namespace, condition)](#clay-driver-base-classes-driver-list)
  + [driver.create(namespace, attributes)](#clay-driver-base-classes-driver-create)
  + [driver.update(namespace, id, attributes)](#clay-driver-base-classes-driver-update)
  + [driver.destroy(namespace, id)](#clay-driver-base-classes-driver-destroy)

## Functions

<a class='md-heading-link' name="clay-driver-base-function-create" ></a>

### create(args) -> `Driver`

Create driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-base-classes"></a>

## Driver Class

Abstract driver


<a class='md-heading-link' name="clay-driver-base-classes-driver-constructor" ></a>

### new Driver()

Constructor of Driver class



<a class='md-heading-link' name="clay-driver-base-classes-driver-one" ></a>

### driver.one(namespace, id) -> `Promise.<ClayEntity>`

Get single resource from namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namespace to work with |
| id | ClayId | Resource id |


<a class='md-heading-link' name="clay-driver-base-classes-driver-list" ></a>

### driver.list(namespace, condition) -> `Promise.<ClayCollection>`

List resource in namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namespace to work with |
| condition | Object | List condition query |
| condition.filter | Object | Filter condition |
| condition.page | Object | Page condition |
| condition.page.number | Object | Number of page, start with 1 |
| condition.page.size | Object | Number of resources per page |


<a class='md-heading-link' name="clay-driver-base-classes-driver-create" ></a>

### driver.create(namespace, attributes) -> `Promise.<ClayEntity>`

Create data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| attributes | Object | Resource attributes to create |


<a class='md-heading-link' name="clay-driver-base-classes-driver-update" ></a>

### driver.update(namespace, id, attributes) -> `Promise.<ClayEntity>`

Update data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | ClayId | Resource id |
| attributes | Object | Resource attributes to update |


<a class='md-heading-link' name="clay-driver-base-classes-driver-destroy" ></a>

### driver.destroy(namespace, id) -> `Promise.<number>`

Delete data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | ClayId | Resource id |




