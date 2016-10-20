import test from 'ava';
import m from './';

test('error', t => {
	t.throws(() => m(), 'Expected `input` to be of type `object`, got `undefined`');
	t.throws(() => m('input'), 'Expected `input` to be of type `object`, got `string`');
	t.throws(() => m({foo: 'bar'}, 1), 'Expected `from` to be of type `string`, got `number`');
	t.throws(() => m({foo: 'bar'}, 'foo', 1), 'Expected `to` to be of type `string`, got `number`');
});

test('rename', t => {
	let obj = {foo: 'bar'};

	m(obj, 'foo', 'unicorn');
	t.deepEqual(obj, {unicorn: 'bar'});

	obj = {foo: {bar: 'baz'}};
	m(obj, 'unicorn', 'world');
	t.deepEqual(obj, {foo: {bar: 'baz'}});

	obj = {foo: {bar: 'baz'}};
	m(obj, 'foo', 'unicorn');
	t.deepEqual(obj, {unicorn: {bar: 'baz'}});

	obj = {foo: {bar: 'baz'}};
	m(obj, 'foo.bar', 'foo.world');
	t.deepEqual(obj, {foo: {world: 'baz'}});

	obj = {foo: {bar: 'baz'}};
	m(obj, 'foo.bar', 'unicorn');
	t.deepEqual(obj, {foo: {}, unicorn: 'baz'});
});
