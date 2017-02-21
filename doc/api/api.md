# clay-driver-base@0.0.6

Base driver for clay

+ Functions
  + [()](#clay-driver-base-function-undefined)
  + [create(args)](#clay-driver-base-function-create)
+ [Driver](clay-driver-base-classes) Class
  + [new Driver()](#clay-driver-base-classes-driver-constructor)
  + [driver.one(namespace, id)](#clay-driver-base-classes-driver-one)
  + [driver.list(namespace, condition)](#clay-driver-base-classes-driver-list)
  + [driver.create(namespace, attributes)](#clay-driver-base-classes-driver-create)
  + [driver.update(namespace, id, attributes)](#clay-driver-base-classes-driver-update)
  + [driver.destroy(namespace, id)](#clay-driver-base-classes-driver-destroy)

## Functions

<a class='md-heading-link' name="clay-driver-base-function-undefined" ></a>

### ()


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

### driver.one(namespace, id) -> `Promise.<Resource>`

Get a data from namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namespace to work with |
| id | string,number | Resource id |


<a class='md-heading-link' name="clay-driver-base-classes-driver-list" ></a>

### driver.list(namespace, condition) -> `Promise.<ResourceList>`

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

### driver.create(namespace, attributes) -> `Promise`

Create data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| attributes | Object | Resource attributes to create |


<a class='md-heading-link' name="clay-driver-base-classes-driver-update" ></a>

### driver.update(namespace, id, attributes) -> `Promise`

Update data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | string,number | Resource id |
| attributes | Object | Resource attributes to update |


<a class='md-heading-link' name="clay-driver-base-classes-driver-destroy" ></a>

### driver.destroy(namespace, id) -> `Promise`

Delete data with namespace

| Param | Type | Description |
| ----- | --- | -------- |
| namespace | string | Namepath string |
| id | string,number | Resource id |




