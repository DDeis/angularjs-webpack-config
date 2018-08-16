// import angular from 'angular';
// import jQuery from 'jquery';

// Object.defineProperty(window, 'jQuery', { value: jQuery });
// Object.defineProperty(window, '$', { value: jQuery });
// Object.defineProperty(window, 'angular', { value: angular });

// import 'angular-mocks';

// require('../../node_modules/angular/angular.min.js');
// require('../../node_modules/angular-mocks/angular-mocks.js');

const jQuery = require("jquery");
Object.defineProperty(window, "jQuery", { value: jQuery });
Object.defineProperty(window, "$", { value: jQuery });

const angular = require("angular");
Object.defineProperty(window, "angular", { value: angular });

Object.defineProperty(document, "styleSheets", { value: [] });
// Object.defineProperty(document, 'createRange', { value: () => {} });
// Object.defineProperty(document, 'createTextRange', { value: () => {} });
let localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

require("angular-mocks");
require("../../src");
