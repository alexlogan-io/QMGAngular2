System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dictionary;
    return {
        setters:[],
        execute: function() {
            Dictionary = (function () {
                function Dictionary(init) {
                    this._keys = [];
                    this._values = [];
                    for (var x = 0; x < init.length; x++) {
                        this[init[x].key] = init[x].value;
                        this._keys.push(init[x].key);
                        this._values.push(init[x].value);
                    }
                }
                Dictionary.prototype.add = function (key, value) {
                    this[key] = value;
                    this._keys.push(key);
                    this._values.push(value);
                };
                Dictionary.prototype.changeValueAtKey = function (key, value) {
                    this.remove(key);
                    this.add(key, value);
                    /*
                    this[key] = value;
                    var indexOfKey = this._keys.lastIndexOf(key);
                    this._values[indexOfKey] = value;
                    */
                };
                Dictionary.prototype.getValue = function (key) {
                    var index = this._keys.indexOf(key, 0);
                    return this._values[index];
                };
                Dictionary.prototype.remove = function (key) {
                    var index = this._keys.indexOf(key, 0);
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    delete this[key];
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.values = function () {
                    return this._values;
                };
                Dictionary.prototype.containsKey = function (key) {
                    if (typeof this[key] === "undefined") {
                        return false;
                    }
                    return true;
                };
                Dictionary.prototype.toLookup = function () {
                    return this;
                };
                return Dictionary;
            }());
            exports_1("Dictionary", Dictionary);
        }
    }
});
//# sourceMappingURL=dictionary.js.map