import { assertType } from 'vitest';
import { Config, route, Router } from '../../src/js';

// Add generated routes to use for testing inside this file. In a real app these declarations
// would be in a separate file generated by running `php artisan ziggy:generate --types`.
declare module '../../src/js' {
    interface RouteList {
        'posts.index': [];
        'posts.comments.store': [{ name: 'post'; required: true }];
        'posts.comments.show': [
            { name: 'post'; required: true },
            { name: 'comment'; required: false; binding: 'uuid' },
        ];
        optional: [{ name: 'maybe'; required: false }];
    }
}

// Test route name autocompletion by adding quotes inside `route()` - should suggest route names above
assertType(route());

// Test route parameter name autocompletion by adding more keys to the parameter object - should show info about params, e.g. for the 'comment' param if you type `c`
assertType(route('posts.comments.show', { post: 1 }));

// @ts-expect-error missing required 'post' parameter
assertType(route('posts.comments.show', { comment: 2 }));

// Simple object example
assertType(route('posts.comments.show', { post: 2, comment: 9 }));
// Allows extra object properties
assertType(route('posts.comments.show', { post: 2, comment: 9, foo: 'bar' }));
// Allows any property order
assertType(route('posts.comments.show', { comment: 2, post: 9 }));

// Binding/'routable' object example with default 'id' binding
assertType(route('posts.comments.show', { post: { id: 1, foo: 'bar' } }));
// Allows extra nested object properties
assertType(route('posts.comments.show', { post: { id: 2, foo: 'bar' } }));
// @ts-expect-error missing 'id' key in post parameter object
assertType(route('posts.comments.show', { post: { foo: 'bar' } }));

// Binding/'routable' object example with custom 'uuid' binding
assertType(route('posts.comments.show', { comment: { uuid: 1 }, post: '1' }));
// Allows extra nested object properties
assertType(route('posts.comments.show', { comment: { uuid: 1, foo: 'bar' }, post: '1' }));
// @ts-expect-error missing 'uuid' key in comment parameter object
assertType(route('posts.comments.show', { comment: { foo: 'bar' } }));
// @ts-expect-error missing 'uuid' key in comment parameter object
// 'id' doesn't fix it because 'id' is the default/fallback but this
// parameter has an explicit 'uuid' binding, so that's required :)
assertType(route('posts.comments.show', { comment: { id: 2 } }));

// Plain values
assertType(route('posts.comments.show', 2));
assertType(route('posts.comments.show', 'foo'));

// TODO @ts-expect-error parameter argument itself is required
assertType(route('posts.comments.show'));

// Simple array examples
// assertType(route('posts.comments.show', [2])); // TODO shouldn't error, only one required param
assertType(route('posts.comments.show', [2, 3]));
// assertType(route('posts.comments.show', ['foo'])); // TODO shouldn't error, only one required param
assertType(route('posts.comments.show', ['foo', 'bar']));
// Allows mix of plain values and parameter objects
// assertType(route('posts.comments.show', [{ id: 2 }])); // TODO shouldn't error, only one required param
assertType(route('posts.comments.show', [{ id: 2 }, 3]));
assertType(route('posts.comments.show', ['2', { uuid: 3 }]));
assertType(route('posts.comments.show', [{ id: 2 }, { uuid: '3' }]));

// @ts-expect-error missing 'id' in post parameter object
assertType(route('posts.comments.show', [{ x: 2 }, { uuid: 3 }]));
// @ts-expect-error missing 'uuid' key in comment parameter object
assertType(route('posts.comments.show', [{ id: 2 }, { id: 3 }]));

// Allows extra array items after know parameters
assertType(route('posts.comments.show', [{ id: 2 }, { uuid: 3 }, { x: 'y' }]));
assertType(route('posts.comments.show', [1, 'foo', 3]));

// Unknown route example
assertType(route('foo'));
// Allows any object params
assertType(route('foo', { bar: { f: 'x' } }));
// Allows any array params
assertType(route('foo', [{ x: 'x' }, 2, 'foo']));

// Test router method autocompletion
assertType(route().has(''));

// Test router getter autocompletion
assertType(route().params);

assertType(route().current('missing', { foo: 1 }));

// @ts-expect-error missing required 'post' parameter
assertType(route().current('posts.comments.show', { comment: 2 }));
assertType(route().current('posts.comments.show', { post: 2 }));
assertType(route().current('posts.comments.show', 2));
// assertType(route().current('posts.comments.show', [2])); // TODO shouldn't error, only one required param
assertType(route().current('posts.comments.show', 'foo'));

// Test route function return types
assertType<string>(route('optional', { maybe: 'foo' }));
assertType<string>(route('optional', 'foo'));
assertType<Router>(route(undefined, undefined, undefined, {} as Config));

// Uncomment to test strict route name checking - invalid route names in this file should error
// declare module '../../src/js' {
//     interface TypeConfig {
//         strictRouteNames: true;
//     }
// }
