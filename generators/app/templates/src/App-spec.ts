/// <reference path="../typings/index.d.ts" />
import App from './App';
import * as assert from 'assert';

describe('App', () => {
    describe('simpleTest', () => {
        it('app should return hello world', () => {
            const app = new App();
            assert.equal(app.sayHello(), 'Hello world');
        });
    });
});
