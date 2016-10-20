'use strict';
const dotProp = require('dot-prop');

module.exports = (input, from, to) => {
	if (typeof input !== 'object') {
		throw new TypeError(`Expected \`input\` to be of type \`object\`, got \`${typeof input}\``);
	}

	if (typeof from !== 'string') {
		throw new TypeError(`Expected \`from\` to be of type \`string\`, got \`${typeof from}\``);
	}

	if (typeof to !== 'string') {
		throw new TypeError(`Expected \`to\` to be of type \`string\`, got \`${typeof to}\``);
	}

	if (!dotProp.has(input, from)) {
		return input;
	}

	const value = dotProp.get(input, from);
	dotProp.set(input, to, value);
	dotProp.delete(input, from);
};
