# rename-prop [![Build Status](https://travis-ci.org/SamVerschueren/rename-prop.svg?branch=master)](https://travis-ci.org/SamVerschueren/rename-prop)

> Rename a property from an object


## Install

```
$ npm install --save rename-prop
```


## Usage

```js
const renameProp = require('rename-prop');

const obj = {foo: {bar: 'baz'}};
renameProp(obj, 'foo', 'unicorn');
console.log(obj);
//=> {unicorn: {bar: 'baz'}}

const obj = {foo: {bar: 'baz'}};
renameProp(obj, 'foo.bar', 'foo.unicorn');
console.log(obj);
//=> {foo: {unicorn: 'baz'}}
```


## API

### renameProp(input, from, to)

#### input

Type: `object`

Object to rename the property.

#### from

Type: `string`

Path of the property in the object to rename, using `.` to separate each nested key.

#### to

Type: `string`

Path of the property in the object to rename `from` to, using `.` to separate each nested key.


## Related

- [dot-prop](https://github.com/sindresorhus/dot-prop) - Get, set, or delete a property from a nested object using a dot path


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
