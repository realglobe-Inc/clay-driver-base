clay-driver-base
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-driver-base
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-driver-base
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-driver-base.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-driver-base
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-driver-base.svg?token=aeFzCpBZebyaRijpCFmm
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

const { Driver } = require('clay-driver-base')

// Define custom driver
class MyDriver extends Driver {
  create (namepath, data) { /* ... */ }

  read (namepath) { /* ... */ }

  update (namepath, data) { /* ... */ }

  delete (namepath) { /* ... */ }

  cursor (namepath, options = {}) { /* ... */ }
}

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new MyDriver({ /* ... */ })
  })
  /* ... */
}

```

For more detail, see [API Guide](./doc/api/api.md)


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/clay-driver-base/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb

<!-- Links End -->
