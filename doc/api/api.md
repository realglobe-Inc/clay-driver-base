# clay-driver-base@0.0.2

Base driver for clay

+ Functions
  + [assertDriver(driver)](#clay-driver-base-function-assert-driver)
+ [Driver](clay-driver-base-classes) Class
  + [new Driver()](#clay-driver-base-classes-driver-constructor)
  + [driver.open(config)](#clay-driver-base-classes-driver-open)
  + [driver.close(config)](#clay-driver-base-classes-driver-close)
  + [driver.create(namepath, data)](#clay-driver-base-classes-driver-create)
  + [driver.read(namepath)](#clay-driver-base-classes-driver-read)
  + [driver.update(namepath, data)](#clay-driver-base-classes-driver-update)
  + [driver.delete(namepath)](#clay-driver-base-classes-driver-delete)
  + [driver.cursor(namepath, options)](#clay-driver-base-classes-driver-cursor)
  + [driver.count(namepath, options)](#clay-driver-base-classes-driver-count)

## Functions

<a class='md-heading-link' name="clay-driver-base-function-assert-driver" ></a>

### assertDriver(driver)

Assert driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| driver | Driver |  |



<a class='md-heading-link' name="clay-driver-base-classes"></a>

## Driver Class

Abstract driver


<a class='md-heading-link' name="clay-driver-base-classes-driver-constructor" ></a>

### new Driver()

Constructor of Driver class



<a class='md-heading-link' name="clay-driver-base-classes-driver-open" ></a>

### driver.open(config) -> `Promise`

Open driver

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object |  |


<a class='md-heading-link' name="clay-driver-base-classes-driver-close" ></a>

### driver.close(config) -> `Promise`

Close driver

| Param | Type | Description |
| ----- | --- | -------- |
| config | Object |  |


<a class='md-heading-link' name="clay-driver-base-classes-driver-create" ></a>

### driver.create(namepath, data) -> `Promise`

Create data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| data | Object | Resource data to create |


<a class='md-heading-link' name="clay-driver-base-classes-driver-read" ></a>

### driver.read(namepath) -> `Promise`

Read data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |


<a class='md-heading-link' name="clay-driver-base-classes-driver-update" ></a>

### driver.update(namepath, data) -> `Promise`

Update data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| data | Object | Resource data to create |


<a class='md-heading-link' name="clay-driver-base-classes-driver-delete" ></a>

### driver.delete(namepath) -> `Promise`

Delete data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |


<a class='md-heading-link' name="clay-driver-base-classes-driver-cursor" ></a>

### driver.cursor(namepath, options) -> `Promise.<Driver.Cursor>`

Get cursor to iterate

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| options | Object | Optional settings |


<a class='md-heading-link' name="clay-driver-base-classes-driver-count" ></a>

### driver.count(namepath, options) -> `Promise.<number>`

Count entries

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| options | Object | Optional settings |




