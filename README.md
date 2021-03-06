clay-driver-base
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-driver-base
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-driver-base
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-driver-base.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-driver-base
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-driver-base.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-driver-base/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-driver-base
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-driver-base.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-driver-base.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-driver-base
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-driver-base.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-driver-base
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-driver-base.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Base driver for clay

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-driver-base --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const {Driver} = require('clay-driver-base')

// Define custom driver
class MyDriver extends Driver {
  one (namespace, id) { /* ... */ }

  list (namespace, condition) { /* ... */ }

  create (namespace, attributes) { /* ... */ }

  update (namespace, id, attributes) { /* ... */ }

  destroy (namespace, id) { /* ... */ }

}

{
  const clayLump = require('clay-lump')
  const lump01 = clayLump({
    driver: new MyDriver({/* ... */})
  })
  /* ... */
}

```

For more detail, see [API Guide](./doc/api/api.md)


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API.md.hbs" Start -->

<a name="section-doc-guides-03-api-md"></a>

API
---------

# clay-driver-base@4.1.8

Base driver for clay

+ Functions
  + [create(args)](#clay-driver-base-function-create)
+ [`Driver`](#clay-driver-base-class) Class
  + [new Driver()](#clay-driver-base-class-driver-constructor)
  + [driver.one(resourceName, id, options)](#clay-driver-base-class-driver-one)
  + [driver.list(resourceName, condition, options)](#clay-driver-base-class-driver-list)
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

### driver.one(resourceName, id, options) -> `Promise.<ClayEntity>`

Get single entity from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| id | ClayId | Resource id |
| options | Object | Options settings |


<a class='md-heading-link' name="clay-driver-base-class-driver-list" ></a>

### driver.list(resourceName, condition, options) -> `Promise.<ClayCollection>`

List entities from resource

| Param | Type | Description |
| ----- | --- | -------- |
| resourceName | string | Name of resource |
| condition | ListCondition | List condition query |
| options | Object | Options settings |


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






<!-- Section from "doc/guides/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-driver-base/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
