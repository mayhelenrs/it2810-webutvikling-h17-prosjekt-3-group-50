import React from 'react';

/* As LocalStorage is a library that is not defined anywhere in a test environment,
*  Jest has to be introduced to a mock class of LocalStorage to
*  be able to run its tests.
*
*  We basically write a simple LocalStorage class of our own, that is just a simple dictionary.
*  This is then set to global.localStorage to prevent a computers LocalStorage to be used
*  when the tests are running.
*  */
class LocalStorageMock {
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
}
global.localStorage = new LocalStorageMock;