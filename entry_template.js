// Generated by CoffeeScript 1.8.0

/* (C) 2014 Narazaka : Licensed under The MIT License - http://narazaka.net/license/MIT?2014 */


/* base code: micro-template.js (https://github.com/cho45/micro-template.js) (c) cho45 http://cho45.github.com/mit-license */

(function() {
  var MiyoFilters, Promise, _ref;

  if (typeof Promise === "undefined" || Promise === null) {
    if (typeof require !== "undefined" && require !== null) {
      try {
        Promise = require('es6-promise').Promise;
      } catch (_error) {
        Promise = require('bluebird');
      }
    } else {
      if (this.Promise != null) {
        Promise = this.Promise;
      } else if (((_ref = this.ES6Promise) != null ? _ref.Promise : void 0) != null) {
        Promise = this.ES6Promise.Promise;
      }
    }
  }

  if (this.MiyoFilters != null) {
    MiyoFilters = this.MiyoFilters;
  } else {
    MiyoFilters = {};
  }

  MiyoFilters.entry_template = {
    type: 'value-value',
    filter: function(value, request, id, stash) {
      var error, sub, sub_str, value_replace;
      value_replace = value = value.toString();
      try {
        sub_str = "var _this = this;\nvar promise = new Promise(function(resolve, reject){\n	return resolve('');\n});\npromise = promise.then(function(values){\n	return values + '" + value_replace.replace(/\$\{/g, '\x11').replace(/\}/g, '\x13').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '').replace(/\x11(.+?)\x13/g, function(match, code) {
          return "'\n});\npromise = promise.then(function(values){\n	return _this.call_id('" + code + "', request, stash).then(function(value){\n		return values + value;\n	});\n});\npromise = promise.then(function(values){\n	return values + '";
        }) + ("'\n});\npromise = promise.catch(function(e){\n	throw 'entry_template runtime error:\\n' + e + '\\n' + 'id: ' + id + '\\n' + 'template:\\n--\\n" + (value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, "\\r").replace(/\n/g, "\\n")) + "\\n--\\n';\n});\nreturn promise;");
        sub = new Function('request', 'id', 'stash', 'Promise', sub_str);
      } catch (_error) {
        error = _error;
        throw 'entry_template compile error:\n' + error + '\n' + 'id: ' + id + '\n' + 'template:\n--\n' + sub_str + '\n--\n';
      }
      return sub.call(this, request, id, stash, Promise);
    }
  };

  if ((typeof module !== "undefined" && module !== null ? module.exports : void 0) != null) {
    module.exports = MiyoFilters;
  } else {
    this.MiyoFilters = MiyoFilters;
  }

}).call(this);
