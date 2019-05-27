(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Engine", [], factory);
	else if(typeof exports === 'object')
		exports["Engine"] = factory();
	else
		root["EccentricEngine"] = root["EccentricEngine"] || {}, root["EccentricEngine"]["Engine"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/inherits/inherits_browser.js":
/*!****************************************************!*\
  !*** ../node_modules/inherits/inherits_browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../node_modules/util/support/isBufferBrowser.js":
/*!*******************************************************!*\
  !*** ../node_modules/util/support/isBufferBrowser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../node_modules/util/util.js":
/*!************************************!*\
  !*** ../node_modules/util/util.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../node_modules/uuid/v4.js":
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./engine/engine.js":
/*!**************************!*\
  !*** ./engine/engine.js ***!
  \**************************/
/*! exports provided: GameObject, Point2D, Keys, Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return Point2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/events */ "./lib/events.js");
/* harmony import */ var _lib_audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/audio */ "./lib/audio.js");
/* harmony import */ var _environment_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/canvas */ "./environment/canvas.js");
/* harmony import */ var _ui_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/touch */ "./ui/touch.js");
/* harmony import */ var _ui_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/keys */ "./ui/keys.js");
/* harmony import */ var _ui_gamepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/gamepad */ "./ui/gamepad.js");
/* harmony import */ var _lib_partition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/partition */ "./lib/partition.js");
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/image */ "./utils/image.js");
/* harmony import */ var _model_gameObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/gameObject */ "./model/gameObject.js");
/* harmony import */ var _lib_2d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/2d */ "./lib/2d.js");
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");









// Expose other types (until I figure out how to do this properly)

const GameObject = _model_gameObject__WEBPACK_IMPORTED_MODULE_8__["GameObject"];

const Point2D = _lib_2d__WEBPACK_IMPORTED_MODULE_9__["Point2D"];

const Keys = _ui_keys__WEBPACK_IMPORTED_MODULE_4__["Keys"];

class GameConfiguration {
  constructor(userConfiguration, userLifecycle) {
    this._game = {
      version: 0.0,
      fps: 30,
      canvasses: {},
      touchUI: {},
      enableTouchUI: 'auto',
      enableKeyboardUI: false,
      enableGamepadUI: false,
      keyProcessor: _ui_keys__WEBPACK_IMPORTED_MODULE_4__["KeyProcessor"],
      lifeCycle: {
        onSetup: () => { return true; },  // --|\   any or all of these can be
        onStart: () => { return true; },  //   |  > implemented via the userLifecycle
        onTick: () => { return true; }    // --|/   parameter if desired
      },
      eventListener: (thisObj, evt) => {
        if (evt.callback) {
          evt.callback(thisObj, evt);
        }
      }
    };
    this._configuration = () => {
      return {
        game: this._game
      };
    }
    if (userConfiguration) {
      this._configuration = new userConfiguration(userLifecycle); 
    }
  };
  get config() {
    return this._configuration;
  }
}

class Engine {
  constructor(userConfig, userLifecycle) {
    this.id = 'ENGINE';
    this.eventSystem = new _lib_events__WEBPACK_IMPORTED_MODULE_0__["Reactor"]();
    this.audioSystem = new _lib_audio__WEBPACK_IMPORTED_MODULE_1__["Audio"]();
    this.configuration = new GameConfiguration(userConfig, userLifecycle);
    this.config = this.configuration.config;
    this.images = new _utils_image__WEBPACK_IMPORTED_MODULE_7__["ImageService"]();
		this.eventSystem.registerEvent(this.id);
		this.eventSystem.addEventListener(this.id, this.config.game.eventListener.bind(this, this));
    this.onSetup = this.config.game.lifeCycle.onSetup;
    this.onStart = this.config.game.lifeCycle.onStart;
    this.onTick = this.config.game.lifeCycle.onTick;
    this.player = null;
    this.loggedEvents = [];
    this.ticks = 0;   
    this.hasTouchSupport = (window.navigator && window.navigator.maxTouchPoints > 0);
    this.gameObjects = [];
    this.canvasses = [];
    this.keyHandler = null;
    this.gamepadHandler = this.config.game.enableGamepadUI ? new _ui_gamepad__WEBPACK_IMPORTED_MODULE_5__["GamepadHandler"]() : undefined;
    this.touchHandler = (this.config.game.enableTouchUI === true || this.config.game.enableTouchUI === 'auto' && this.hasTouchSupport) ? new _ui_touch__WEBPACK_IMPORTED_MODULE_3__["TouchHandler"](this.config.game.touchUI) : undefined;
    this.timing = {};
    for (const cnv in this.config.game.canvasses) {
      const canvas = new _environment_canvas__WEBPACK_IMPORTED_MODULE_2__["Canvas2D"](this.config.game.canvasses[cnv], this);
      if (canvas) {
        this.canvasses.push(canvas);
      }
    }    
    // default canvas if none sent in config
    if (this.canvasses.length < 1) {
      const canvas = new _environment_canvas__WEBPACK_IMPORTED_MODULE_2__["Canvas2D"]({
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        wrapper: {
          selector: '#canvasdiv',
          style: {
            backgroundColour: '#000000',
          }
        },
        canvas: {
          selector: '#canvas',
        },
        alias: 'canvas',  
      }, this);
      this.canvasses.push(canvas);
    }
  }

  /* getters */

  get isReady() {
    return this.canvasses.filter(function(canvas){return canvas.isReady;}).length == this.canvasses.length;
  }

  get objects() {
    return this.gameObjects;
  }

  get gamepad() {
    return this.gamepadHandler.gamepad;
  }

  /* setters */

  set localPlayer(player) {
    this.player = player;
  }
  
}

Engine.prototype.timerStart = function(identity) {
  const now = Date.now();
  if (!this.timing[identity]) {
    this.timing[identity] = {};
  }
  const lastTime = (this.timing[identity] && this.timing[identity].last) ? this.timing[identity].last : now;
  const interval = now - lastTime;
  this.timing[identity].last = now;
  this.timing[identity].interval = interval;
}

Engine.prototype.timerStop = function(identity) {
  const now = Date.now();
  if (!this.timing[identity]) {
    return;
  }
  const lastTime = this.timing[identity].last;
  this.timing[identity].duration = now - lastTime;
}

Engine.prototype.canvas = function(alias) {
  const canvs = this.canvasses.filter(function(canvas){return canvas.alias === alias;});
  return (canvs.length > 0) ? canvs[0] : undefined;  
}

Engine.prototype.refreshUi = function() {
  for (const cnv in this.canvasses) {
    this.canvasses[cnv].draw();
  }
}

Engine.prototype.createObject = function(conf, position) {
  const gameObject = new GameObject(conf, position, this);
  return gameObject;  
}

Engine.prototype.registerObject = function(gameObject) {
  if (!gameObject.id) {
    gameObject.id = uuidv4();  
  }
  if (this.getObjectById(gameObject.id)) {
    // object exists
    return false;
  }
  this.gameObjects.push(gameObject);
  return true;
}

Engine.prototype.getObjectById = function(id) {
  const objs = this.getObjectsById(id);
  return (objs && objs.length > 0) ? objs[0] : undefined;
}

Engine.prototype.getObjectsById = function(id) {
  const objs = this.gameObjects.filter(function(obj) { return obj.id === id; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.getObjectByType = function(type) {
  const objs = this.getObjectsByType(type);
  return (objs && objs.length > 0) ? objs[0] : undefined;
}

Engine.prototype.getObjectsByType = function(type) {
  const objs = this.gameObjects.filter(function(obj) { return obj.type === type; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.getObjectsByState = function(fsmState) {
  const objs = this.gameObjects.filter(function(obj) { return obj.fsm && obj.fsm.currentState && obj.fsm.currentState === fsmState; });
  return (objs.length > 0) ? objs : undefined;
}

Engine.prototype.filterObjects = function(objectTypeOrTypes) {
  if (objectTypeOrTypes) {
    return this.objects.filter(function(obj) {
      return objectTypeOrTypes instanceof Array ? 
        objectTypeOrTypes.includes(obj.constructor) : 
        obj instanceof objectTypeOrTypes;
    })
  }
  return this.objects;
}

Engine.prototype.log = function(loggedEvent) {
  this.loggedEvents.push(loggedEvent.dump);
}

Engine.prototype.flushLoggedEvents = function() {
  for (let ev=0; ev < this.loggedEvents.length; ev += 1) {
    console.log(this.loggedEvents[ev]);
  }
  this.loggedEvents = [];
}

Engine.prototype.setup = function() {
  if (this.setupDone) return; 

  this.timerStart('setup');

  this.keyHandler = this.config.game.enableKeyboardUI ? new _ui_keys__WEBPACK_IMPORTED_MODULE_4__["KeyHandler"](this.config.game.keyProcessor, this) : undefined;

  this.onSetup.bind(this, this);
  this.onStart.bind(this, this);
  this.onTick.bind(this, this);
  
  for (goType in this.config.gameObjectTypes) {
    for (objDef in this.config.gameObjectTypes[goType]) {
      const gameObject = this.config.gameObjectTypes[goType][objDef];
      sourceImagePath = gameObject.sprite.sheet ? gameObject.sprite.sheet.path : gameObject.sprite.image.path;
      this.images.load(sourceImagePath);  
    }
  }
  
  for (effect in this.config.game.soundEffects) {
    this.audioSystem.addEffect(new AudioEffect(this.config.game.soundEffects[effect]));
  }

  for(const cnv in this.canvasses) {
    this.canvasses[cnv].init && this.canvasses[cnv].init();
  }
  
  if (this.config.enableTouchUI && this.hasTouchSupport) {
    this.touchInterface.init();
  }
  this.timerStart('onSetup');
  this.onSetup(this);
  this.timerStop('onSetup');

  this.setupDone = true;
  this.timerStop('setup');
}

Engine.prototype.start = function() {
  this.timerStart('start');
 
  if (this.started) return true;

  this.setup();
  window.addEventListener('keydown', this.keyHandler.handleKeyDown.bind(this.keyHandler), false);
  window.addEventListener('keyup', this.keyHandler.handleKeyUp.bind(this.keyHandler), false);    
  for (const cnv in this.canvasses) {
    this.canvasses[cnv].init();
  }
  
  // run custom user code
  this.timerStart('onStart');
  this.onStart(this);
  this.timerStop('onStart');
  
  requestAnimationFrame(this.tick.bind(this));
  
  this.started = true;
  this.timerStop('start');
}

Engine.prototype.tick = function() {
  if (!this.isReady) {
    return;
  }
  this.timerStart('tick');
  this.ticks += 1;

  this.refreshUi();

  const deadAndAlive = Object(_lib_partition__WEBPACK_IMPORTED_MODULE_6__["partition"])(this.gameObjects, function(obj) {
    return obj.TTL ? obj.TTL <= 0 : obj.disposable;
  });

  // clean out event listeners for dead objects
  for (const obj in deadAndAlive[0]) {
    const gameObject = deadAndAlive[0][obj];
    if (this.eventSystem.events[`${gameObject.id}`]) {
      this.eventSystem.deRegisterEvent(`${gameObject.id}`);
    }
    if (this.eventSystem.events[`${gameObject.id}FSM`]) {
      this.eventSystem.deRegisterEvent(`${gameObject.id}FSM`);
    }
  }

  this.gameObjects = deadAndAlive[1];
  for (const obj in this.gameObjects) {
    const gameObject = this.gameObjects[obj];
    if (gameObject.TTL && gameObject.TTL > 0) {
      const now = Date.now();
      if (!gameObject.lastTTLTick || (gameObject.lastTTLTick && now - gameObject.lastTTLTick >= 1000)) {
        gameObject.lastTTLTick = Date.now();
        gameObject.TTL -= 1;
        if (gameObject.TTL <= 0) {
          gameObject.disposable = true;
        }
      }
    }
    gameObject.update();
    gameObject.draw();
  }

  // run custom user code
  this.timerStart('onTick');
  this.onTick(this);
  this.timerStop('onTick');

  this.timerStop('tick');

  setInterval(requestAnimationFrame(this.tick.bind(this)), 1000/this.config.fps);  
}




/***/ }),

/***/ "./environment/canvas.js":
/*!*******************************!*\
  !*** ./environment/canvas.js ***!
  \*******************************/
/*! exports provided: Canvas2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas2D", function() { return Canvas2D; });
/* harmony import */ var _lib_2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/2d */ "./lib/2d.js");



const defaultConfig = {
	x: 0,
	y: 0,
	width: window.innerWidth,
	height: window.innerHeight,
	wrapper: {
		selector: '#canvas-wrapper',
		style: {
			background: 'transparent',
			backgroundColour: '#000000',
		}
	},
	canvas: {
		selector: '#canvas-element',
	},
	alias: 'canvas'
};

class Canvas2D {
	constructor(canvasConfig, gameEngine) {
		this.config = canvasConfig || defaultConfig;
		this.gameEngine = gameEngine;
		this.canvasReady = false;
		this.canvasWidth = this.config.width;
		this.canvasHeight = this.config.height;
		this.canvasCoordinates = new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](this.config.x, this.config.y);
		this.canvasDrawable = {from: new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](0,0), to: new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](this.config.width, this.config.height)},
		this.canvasContext = null;
		this.canvasImage = null;
		this.canvasScrollScale = 0;
		this.canvasScrollData = new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Scrollable"](null, 0, 0);
		this.canvasFocusObject = null;
		this.canvasAlias = this.config.alias;
		// size and style wrapper div
		const wrapper = document.querySelector(this.config.wrapper.selector);
		if (wrapper) {
			wrapper.style.left = this.config.x.toString() + 'px';
			wrapper.style.top = this.config.y.toString() + 'px';
			wrapper.style.width = this.config.width.toString() + 'px';
			wrapper.style.height = this.config.height.toString() + 'px';
			wrapper.style.background = this.config.wrapper.style.background;
			wrapper.style.backgroundColor = this.config.wrapper.style.backgroundColour;
		}
		// size canvas to match wrapper dimensions
		const canvas = document.querySelector(this.config.canvas.selector);
		if (canvas) {
			canvas.style.left = this.config.x.toString() + 'px';
			canvas.style.top = this.config.y.toString() + 'px';
			canvas.width = this.config.width;
			canvas.height = this.config.height;
		}
	}
	/* getters */
	get isReady() {
		return this.canvasReady;
	}
	get alias() {
		return this.canvasAlias;
	}
	get width() {
		return this.canvasWidth;
	}
	get height() {
		return this.canvasHeight;
	}
	get coordinates() {
		return this.canvasCoordinates;
	}
	get selector() {
		return this.config.canvas.selector;
	}
	get context() {
		return this.canvasContext;
	}
	get centre() {
		return new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](this.canvasCordinates.x + (this.canvasWidth / 2), this.canvasCoordinates.y + (this.canvasHeight / 2));
	}
	get scrollData() {
		return this.canvasScrollData;
	}
	get focussedObject() {
		return this.canvasFocusObject;
	}

	/* setters */
	set context(contextRef) {
		this.canvasContext = contextRef;
	}
	set scrollData(scrollDataObj) {
		this.canvasScrollData = scrollDataObj;
	}
};

Canvas2D.prototype.loadImage = function(imagePath, onLoad) {
	return this.gameEngine.images.load(imagePath, onLoad);
}

Canvas2D.prototype.init = function(fillImage, callBack) {
	if (this.config.canvas.selector && !this.canvasContext) {
		const canvasElem = document.querySelector(this.config.canvas.selector);
		if (canvasElem) {
			this.canvasContext = canvasElem.getContext('2d');
		}
	}
	if (fillImage || this.config.canvas.image) {
		this.canvasImage = this.loadImage((fillImage || this.config.canvas.image), callBack);		
	}
	this.canvasReady = !!this.canvasContext;	
};

Canvas2D.prototype.clear = function(fromPoint, toPoint) {
	if (!this.canvasContext) return;
	this.canvasContext.clearRect((fromPoint && fromPoint.x) || 0, 
		(fromPoint && fromPoint.y) || 0, 
		(toPoint && toPoint.x) || this.width, 
		(toPoint && toPoint.y) || this.height
	);
};

Canvas2D.prototype.draw = function() {
	if (!this.canvasReady || !this.canvasContext) return;
	this.clear();
	this.canvasImage && this.canvasContext.drawImage(
		this.canvasImage, 
		0,
		0,
		this.canvasWidth, 
		this.canvasHeight);
};

Canvas2D.prototype.focus = function(gameObject) {
	if (!gameObject) return;
	if (this.canvasFocusObject === gameObject) return;
	this.canvasFocusObject = gameObject;
	this.canvasCoordinates.x = gameObject.coordinates.centre.x - (this.canvasWidth / 2);
	this.canvasCoordinates.y = gameObject.coordinates.centre.y - (this.canvasHeight / 2);
};

Canvas2D.prototype.scroll = function () {
	this.canvasCoordinates.x += this.canvasScrollData.velocity.x;
	this.canvasCoordinates.y += this.canvasScrollData.velocity.y;
};

Canvas2D.prototype.contains = function(x, y, width, height, heading) {
	const x1 = x;
	const y1 = y;
	const x2 = x + width;
	const y2 = y + height;
	const cx = x1 + width / 2;
	const cy = y1 + height / 2;

	const p1 = heading ? 
		rotatePoint(cx, cy, x1, y1, heading) :
		new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](x1, y1);
	
	const p2 = heading ?
		rotatePoint(cx, cy, x2, y2, heading) :
		new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](x2, y2);

	const isContained =
		this.canvasFocusObject ?
			p1.x >= this.canvasFocusObject.coordinates.x - this.canvasWidth / 2 && 
			p1.y >= this.canvasFocusObject.coordinates.y - this.canvasHeight / 2 && 
			p2.x <= this.canvasFocusObject.coordinates.x + this.canvasWidth / 2 &&
			p2.y <= this.canvasFocusObject.coordinates.y + this.canvasHeight / 2
		:
			p1.x >= this.canvasDrawable.from.x &&
			p1.y >= this.canvasDrawable.from.y &&
			p2.x <= this.canvasDrawable.to.x &&
			p2.y <= this.canvasDrawable.to.y;

	return isContained;
};

Canvas2D.prototype.containsObject = function(obj) {
	if (this.canvasFocusObject === obj) {
		return true;
	} else {
		return this.contains(
			obj.coordinates.x, 
			obj.coordinates.y, 
			obj.width, 
			obj.height, 
			obj.rotation
		);
	}
};




/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: GameObject, Point2D, Keys, Engine, Canvas2D, Vector2D, Scrollable, Point3D, Audio, AudioEffect, Reactor, FSM, randInt, randRangeInt, rand, partition, Sprite, GamepadHandler, KeyHandler, KeyProcessor, TouchInterface, TouchHandler, ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _engine_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/engine */ "./engine/engine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return _engine_engine__WEBPACK_IMPORTED_MODULE_0__["GameObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return _engine_engine__WEBPACK_IMPORTED_MODULE_0__["Point2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return _engine_engine__WEBPACK_IMPORTED_MODULE_0__["Keys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return _engine_engine__WEBPACK_IMPORTED_MODULE_0__["Engine"]; });

/* harmony import */ var _environment_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment/canvas */ "./environment/canvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas2D", function() { return _environment_canvas__WEBPACK_IMPORTED_MODULE_1__["Canvas2D"]; });

/* harmony import */ var _lib_2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/2d */ "./lib/2d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return _lib_2d__WEBPACK_IMPORTED_MODULE_2__["Vector2D"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scrollable", function() { return _lib_2d__WEBPACK_IMPORTED_MODULE_2__["Scrollable"]; });

/* harmony import */ var _lib_3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/3d */ "./lib/3d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point3D", function() { return _lib_3d__WEBPACK_IMPORTED_MODULE_3__["Point3D"]; });

/* harmony import */ var _lib_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/audio */ "./lib/audio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _lib_audio__WEBPACK_IMPORTED_MODULE_4__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioEffect", function() { return _lib_audio__WEBPACK_IMPORTED_MODULE_4__["AudioEffect"]; });

/* harmony import */ var _lib_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/events */ "./lib/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reactor", function() { return _lib_events__WEBPACK_IMPORTED_MODULE_5__["Reactor"]; });

/* harmony import */ var _lib_fsm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/fsm */ "./lib/fsm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FSM", function() { return _lib_fsm__WEBPACK_IMPORTED_MODULE_6__["FSM"]; });

/* harmony import */ var _lib_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/math */ "./lib/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randInt", function() { return _lib_math__WEBPACK_IMPORTED_MODULE_7__["randInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randRangeInt", function() { return _lib_math__WEBPACK_IMPORTED_MODULE_7__["randRangeInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return _lib_math__WEBPACK_IMPORTED_MODULE_7__["rand"]; });

/* harmony import */ var _lib_partition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/partition */ "./lib/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _lib_partition__WEBPACK_IMPORTED_MODULE_8__["partition"]; });

/* harmony import */ var _model_gameObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/gameObject */ "./model/gameObject.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model_sprite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/sprite */ "./model/sprite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _model_sprite__WEBPACK_IMPORTED_MODULE_10__["Sprite"]; });

/* harmony import */ var _ui_gamepad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/gamepad */ "./ui/gamepad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GamepadHandler", function() { return _ui_gamepad__WEBPACK_IMPORTED_MODULE_11__["GamepadHandler"]; });

/* harmony import */ var _ui_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/keys */ "./ui/keys.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyHandler", function() { return _ui_keys__WEBPACK_IMPORTED_MODULE_12__["KeyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyProcessor", function() { return _ui_keys__WEBPACK_IMPORTED_MODULE_12__["KeyProcessor"]; });

/* harmony import */ var _ui_touch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/touch */ "./ui/touch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchInterface", function() { return _ui_touch__WEBPACK_IMPORTED_MODULE_13__["TouchInterface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchHandler", function() { return _ui_touch__WEBPACK_IMPORTED_MODULE_13__["TouchHandler"]; });

/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/image */ "./utils/image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return _utils_image__WEBPACK_IMPORTED_MODULE_14__["ImageService"]; });



















/***/ }),

/***/ "./lib/2d.js":
/*!*******************!*\
  !*** ./lib/2d.js ***!
  \*******************/
/*! exports provided: Point2D, Vector2D, Scrollable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return Point2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return Vector2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollable", function() { return Scrollable; });

class Point2D {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(xNew) {
    this._x = xNew;
  }
  set y(yNew) {
    this._y = yNew;
  }
}

Point2D.prototype.clone = function() {
  return new Point2d(this._x, this._y);
}

Point2D.prototype.rotate = function(p2dCentre, degrees) {
  //rotate counterclockwise
  const r = [];
  const x = this._x - p2dCentre.x;
  const y = this._y - p2dCentre.y;
  const rads = degreesToRadians(degrees);
  r[0] = x * Math.cos(rads) - y * Math.sin(rads);
  r[1] = x * Math.sin(rads) + y * Math.cos(rads);
  r[0] += p2dCentre.x;
  r[1] += p2dCentre.y;
  this._x = r[0];
  this._y = r[1];
}

class Vector2D extends Point2D {
  constructor(x, y) {
      super(x, y);
  }
  get length() {
      return Math.sqrt(Math.abs(this._x)^2 + Math.abs(this._y)^2);
  }
}

Vector2D.prototype.add = function(v2d) {
  this._x += v2d.x;
  this._y += v2d.y;
}

Vector2D.prototype.subtract = function(v2d) {
  this._x -= v2d.x;
  this._y -= v2d.y;
}

Vector2D.prototype.scale = function(n) {
  this._x *= n;
  this._y *= n;
}

Vector2D.prototype.dot = function(v2d) {
  this._x *= v2d.x;
  this._y *= v2d.y;
}

Vector2D.prototype.cross = function(v2d) {
  this._x *= v2d.y;
  this._y *= v2d.x;
}

Vector2D.prototype.normalize = function() {
  const len = this.length > 0 ? (1 / this.length) : this.length;
  this._x *= len;
  this._y *= len;
}

Vector2D.prototype.distance = function(v2d) {
  const x = this._x - v2d.x;
  const y = this._y - v2d.y;
  return Math.sqrt(x^2 + y^2);
}

Vector2D.prototype.clone = function() {
  return new Vector2d(this._x, this._y);
}

class Scrollable {
	constructor(anchorObject, vx, vy) {
		this._anchor = anchorObject;
		this._velocity = new Point2D(this._anchor && (this._anchor.velocity.x || vx || 0), this._anchor && (this._anchor.velocity.y || vy || 0));
	}

	get anchor() {
		return this._anchor;
	}
	get velocity() {
		return this._velocity;
	}

	set anchor(anchorObject) {
		this._anchor = anchorObject;
	}
	set velocity(point2D) {
		this._velocity = point2D;
	}
}

function distanceBetweenObjects(objA, objB) {
  const dx = (objA.coordinates.x + objA.centre.x) - (objB.coordinates.x + objB.centre.x);
  const dy = (objA.coordinates.y + objA.centre.y) - (objB.coordinates.y + objB.centre.y);
  return Math.sqrt((dx * dx) + (dy * dy));
}

function distanceBetweenPoints(pointA, pointB) {
  const dx = pointA.x - pointB.x;
  const dy = pointA.y - pointB.y;
  return Math.sqrt((dx * dx) + (dy * dy));  
}

function angleBetween(x1, y1, x2, y2) {
  return Math.atan2(y1 - y2, x1 - x2) * (180.0 / Math.PI);
}

function angleDifference(a1, a2) {
  return ((((a1 - a2) % 360) + 540) % 360) - 180;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function dir_x(length, angle) {
  return length * Math.cos(degreesToRadians(angle));
}

function dir_y(length, angle) {
  return length * Math.sin(degreesToRadians(angle));
}

function rotatePoint(cx, cy, px, py, degrees)
{
  const deg = (degrees > 359) ? (degrees - 359) : degrees || 0;
  const angle = degreesToRadians(deg);
  const s = Math.sin(angle);
  const c = Math.cos(angle);
  const p = new Point2d(px,py);

  // translate point back to origin:
  p.x -= cx;
  p.y -= cy;

  // rotate point
  const xnew = p.x * c - p.y * s;
  const ynew = p.x * s + p.y * c;

  // translate point back:
  p.x = xnew + cx;
  p.y = ynew + cy;
  
  return p;
}




/***/ }),

/***/ "./lib/3d.js":
/*!*******************!*\
  !*** ./lib/3d.js ***!
  \*******************/
/*! exports provided: Point3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point3D", function() { return Point3D; });
/* harmony import */ var _2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2d */ "./lib/2d.js");


class Point3D extends _2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"] {
  constructor(x, y, z) {
      super(x, y);
      this._z = z;
  }
  get x() {
      return this._x;
  }
  get y() {
      return this._y;
  }
  get z() {
      return this._z;
  }
  set x(val) {
      this._x = val;
  }
  set y(val) {
      this._y = val;
  }
  set z(val) {
      this._z = val;
  }
}

Point3D.prototype.clone = function() {
  return new Point3D(this._x, this._y, this._z);
}




/***/ }),

/***/ "./lib/audio.js":
/*!**********************!*\
  !*** ./lib/audio.js ***!
  \**********************/
/*! exports provided: Audio, AudioEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioEffect", function() { return AudioEffect; });
// based on example from
// https://stackoverflow.com/questions/6343450/generating-sound-on-the-fly-with-javascript-html5

const exampleEffects = {
  'ping': {
    type: 'sine',
    frequency: 2400,
    volume: 0.5,
    duration: 100  
  }
};

class AudioEffect {
  constructor(config){
    this.cnf = config;
    this.sys = undefined;
  }
  get id() {
    return this.config.id;
  }
  get config() {
    return this.cnf;
  }
  get system() {
    return this.sys;
  }
  set system(value) {
    this.sys = value;
  }
}

class Audio {
  constructor() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.osc = null;
    this.snds = [];
    this.fx = [];
  }
  get context() {
    return this.ctx;
  }
  get oscillator() {
    return this.osc;
  }
  get effects() {
    return this.fx;
  }
  get sounds() {
    return this.snds;
  }
}

Audio.prototype.isEffectRegistered = function(effectId) {
  if (this.fx.length > 0) {
    return this.fx.filter(function(effect) { return effect.id == effectId; }).length > 0;  
  }
  return false;
} 

Audio.prototype.addEffect = function(audioEffect) {
  if (!this.isEffectRegistered(audioEffect.id)) {
    audioEffect.system = this;
    this.fx.push(audioEffect);
  }
}

Audio.prototype.getEffect = function(effectId) {
  return this.fx.filter(function(effect) {
    return effect.id == effectId;
  })[0];
}

Audio.prototype.removeEffect = function(effectId) {
  this.fx = this.fx.filter(function(effect) {
    return effect.id != effectId;
  })[0];
}

Audio.prototype.playEffect = function(effectId, delay, duration) {
  const effect = this.getEffect(effectId);
  if (effect) {
    if (this.osc) {
      // close it down before starting a new tone
      this.osc.stop(this.ctx.currentTime);
      this.osc.disconnect(this.ctx.destination);
      this.osc = null;  
    }
    // start
    this.osc = this.ctx.createOscillator();
    this.osc.frequency.value = effect.config.frequency;
    const startOffset = (delay || (effect.config.delay || 0)) / 1000;
    const stopOffset = (delay || (effect.config.delay || 0)) + (duration || (effect.config.duration || 0)) / 1000;
    this.osc.start(this.ctx.currentTime + startOffset);
    this.osc.connect(this.ctx.destination);
    // stop
    this.osc.stop(this.ctx.currentTime + stopOffset);
  }
}




/***/ }),

/***/ "./lib/events.js":
/*!***********************!*\
  !*** ./lib/events.js ***!
  \***********************/
/*! exports provided: Reactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reactor", function() { return Reactor; });
// from: https://stackoverflow.com/questions/15308371/custom-events-model-without-using-dom-events-in-javascript

class Event {
  constructor(name){
    this.name = name;
    this.callbacks = [];
  }
}
Event.prototype.registerCallback = function(callback){
  this.callbacks.push(callback);
}

class Reactor{
  constructor() {
    this.events = {};
  }
}

Reactor.prototype.registerEvent = function(eventName){
  var event = new Event(eventName);
  this.events[eventName] = event;
};

Reactor.prototype.dispatchEvent = function(eventName, eventArgs){
  this.events[eventName].callbacks.forEach(function(callback){
    callback(eventArgs);
  });
};

Reactor.prototype.deRegisterEvent = function(eventName) {
  if (this.events[eventName]) {
    delete this.events[eventName];
  }
};

Reactor.prototype.addEventListener = function(eventName, callback){
  this.events[eventName].registerCallback(callback);
};




/***/ }),

/***/ "./lib/fsm.js":
/*!********************!*\
  !*** ./lib/fsm.js ***!
  \********************/
/*! exports provided: FSM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSM", function() { return FSM; });

class FSM {
	constructor(host, states) {
    this.host = host;
    this.states = states.__proto__.hasOwnProperty('apply') ? states() : states;
    this.currentState = this.states.default;
    this.lastTransitionTime = undefined;
    this.lastExecutionTime = undefined;
  }
}

FSM.prototype.eventListener = function(evt) { 
  switch (evt.action) {
    case 'SET':
      this.setState(evt.state);
      break;
    case 'EXECUTE':
      if (evt.state && evt.state.execute) {
        evt.state.execute();
      } else {
        this.execute();
      }
      break;
    case 'TRANSITION':
      if (evt.state) {
        this.transition(evt.state);
      }
      break;
  }
}

FSM.prototype.execute = function() {  
  const now = Date.now();
  if (!this.host) {
    // Wut?!
    return;
  }
  if (!this.currentState) {
    this.currentState = (this.states.default ? this.states.default : undefined);
  } 
  if (this.host && this.currentState && this.currentState.execute) {
    if ((this.lastExecutionTime || 0) + (this.currentState.minimumExecutionInterval || 0) <= now) {
      this.lastExecutionTime = now;
      this.currentState.execute(this.host);
    }
	}
}

FSM.prototype.pushState = function () {
  this.savedState = this.currentState;
}

FSM.prototype.popState = function() {
  this.currentState = this.savedState;
  this.savedState = undefined;
}

FSM.prototype.setState = function(newState) {
  if (!this.host) {
    return;
  }
  const now = Date.now();
  this.currentState = newState;
  this.lastTransitionTime = now;
  this.startTime = now;
  this.lastExecutionTime = undefined;
}

FSM.prototype.transition = function(newState, force) {
  if (this.currentState && this.currentState.nextStates.includes(newState.name) || newState.force || force) {
    this.setState(newState);
    if (newState.executeOnTransition) {
      this.execute();
    }
  }
}



/***/ }),

/***/ "./lib/math.js":
/*!*********************!*\
  !*** ./lib/math.js ***!
  \*********************/
/*! exports provided: randInt, randRangeInt, rand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randInt", function() { return randInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randRangeInt", function() { return randRangeInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rand", function() { return rand; });
function randInt(max) {
  return Math.floor(rand(max));
};

function randRangeInt(min, max) {
  const r = rand(max);
  return Math.floor(r < min ? min : r);
}

function rand(max, incNegatives = false) {
  return (Math.random() * max) * (incNegatives ? (Math.random() * 2 > 1 ? -1 : 1) : 1);
};


/***/ }),

/***/ "./lib/partition.js":
/*!**************************!*\
  !*** ./lib/partition.js ***!
  \**************************/
/*! exports provided: partition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
// /**
//  * Partitions the elements into two groups: those for which the iterator returns
//  * true, and those for which it returns false.
//  * @param {Function} iterator
//  * @param {Object} [context] Optional context parameter to be
//  * used as `this` when calling the iterator function.
//  *
//  * @type Array
//  * @returns An array in the form of [trueCollection, falseCollection]
//  */
// Array.prototype.partition = function(iterator, context) {
//   var trueCollection = [];
//   var falseCollection = [];
 
// 	for (var i = 0, len = this.length; i < len; i++) {
//     if(iterator.call(context, this[i])) {
//       trueCollection.push(this[i]);
//     } else {
//       falseCollection.push(this[i]);
//     }
// 	} 
 
//   return [trueCollection, falseCollection];
// };

function partition(array, test) {
  const trueCollection = [];
  const falseCollection = [];
  for (var i = 0, len = array.length; i < len; i++) {
    if (test(array[i])) {
      trueCollection.push(array[i]);
    } else {
      falseCollection.push(array[i]);
    }
	} 
 
  return [trueCollection, falseCollection];
}



/***/ }),

/***/ "./model/gameObject.js":
/*!*****************************!*\
  !*** ./model/gameObject.js ***!
  \*****************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var _lib_2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/2d */ "./lib/2d.js");
/* harmony import */ var _lib_fsm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/fsm */ "./lib/fsm.js");
/* harmony import */ var _lib_audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/audio */ "./lib/audio.js");
/* harmony import */ var _model_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/sprite */ "./model/sprite.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "../node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
const uuidv4 = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");






class GameObject {
	constructor(conf, position, engine) {
    this.engine = engine;
		this.ready = false;
    this.disposable = false;
    this.drawable = false;    
		this.id = uuidv4();
		this.engine.eventSystem.registerEvent(`${this.id}-Loaded`);
		this.engine.eventSystem.addEventListener(`${this.id}-Loaded`, this.init.bind(this));
		this.conf = conf;
    this.conf.position = position;
		this.coordinates = this.conf.position ? new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"](this.conf.position.x, this.conf.position.y) : undefined;
		this.velocity = new _lib_2d__WEBPACK_IMPORTED_MODULE_0__["Vector2D"](
			(this.conf.initialVelocity && this.conf.initialVelocity.x) ? this.conf.initialVelocity.x : 0, 
			(this.conf.initialVelocity && this.conf.initialVelocity.y) ? this.conf.initialVelocity.y : 0
		);
		this.width = this.conf.width;
		this.height = this.conf.height;
		this.vertices = [];
    this.sprites = [];	    // --|\ will be loaded during the init call triggered 
    this.soundEffects = []; // --|/ by the xxx-Loaded event
    this.scale = this.conf.scale;
		this.mass = this.conf.mass;
    this.collisionCentres = this.conf.collisionCentres;
		this.rotation = 0;
		this.update = conf.update.bind(this, this);
		this.fsm = conf.fsmStates ? new _lib_fsm__WEBPACK_IMPORTED_MODULE_1__["FSM"](this, conf.fsmStates) : undefined;
		this.engine.eventSystem.registerEvent(`${this.id}`);
		this.engine.eventSystem.addEventListener(`${this.id}`, this.eventListener.bind(this, this));
		this.engine.registerObject(this);		
		// v-- this must be last --v
		this.engine.eventSystem.dispatchEvent(`${this.id}-Loaded`);
	}
	get type() {
		return this.conf.type;
	}
	get centre() {
		if (!this.coordinates) {
			return undefined;
    }
		return {
			x: this.coordinates.x + this.width / 2,	//rotated.x,
			y: this.coordinates.y + this.height / 2 //rotated.y
		}
	}
	get rotatedCoordinates() {
		if (!this.coordinates) {
			return undefined;
		}
		const rotated = this.coordinates.rotate(this.centre, degrees);
		return rotated;
  }
  get canDraw() {
    return this.drawable;
  }
  set canDraw(boolValue) {
    this.drawable = boolValue;
  }
}

GameObject.prototype.eventListener = function (thisObj, evt) { 
	console.log(`${this.id} GameObject eventListener captured event for obj: ${thisObj.id} with args: ${evt}`);
}

GameObject.prototype.rotate = function(degrees) {
	this.rotation = degrees;
}

GameObject.prototype.loadVertices = function() {
	if (!this.conf.vertexMap) {
		return;
	}
	this.vertices = [];
	for (let v = 0; v < this.conf.vertexMap.length; v += 1) {
		const vertex = this.conf.vertexMap[v];
		const scaled = {
			connectsTo: vertex.connectsTo,
			id: vertex.id,
			x: this.scaleWidth(vertex.x),
			y: this.scaleHeight(vertex.y)
		};
		this.vertices.push(scaled);
	}
}

GameObject.prototype.loadCollisionCentres = function() {
	this.collisionCentres = [];
	if (this.conf.collisionCentres) {
		for (const collCtrGrp in this.conf.collisionCentres) {
			const collCtr = this.conf.collisionCentres[collCtrGrp];
			this.collisionCentres.push(collCtr);
		}
	}
}

GameObject.prototype.loadStatus = function() {
	if (!this._role || !this._role.initialStatus) {
		game.log(new LoggedEvent('gameobject.prototype.loadStatus', 'called with no _role or _role.initialStatus'));
		return;
	}
	this._status = this._role.initialStatus;
}

GameObject.prototype.loadSprites = function() {
	if (this.conf.sprites) {
		for(let s in this.conf.sprites) {
			const sprite = new _model_sprite__WEBPACK_IMPORTED_MODULE_3__["Sprite"](this.conf.sprites[s], s, this.coordinates, this.engine.images);
			this.sprites.push(sprite);
		}
	}
}

GameObject.prototype.loadSoundEffects = function() {
  for (let e in this.conf.soundEffects) {
    const effectConf = this.conf.soundEffects[e];
    const audioEffect = new _lib_audio__WEBPACK_IMPORTED_MODULE_2__["AudioEffect"](effectConf);
    this.engine.audioSystem.addEffect(audioEffect);
    this.soundEffects.push(audioEffect);
  }
}

GameObject.prototype.init = function() {
  this.loadSprites();
	this.loadVertices();
  this.loadCollisionCentres();
  this.loadSoundEffects();
	if (this.fsm) {
		this.engine.eventSystem.registerEvent(`${this.id}FSM`);
		this.engine.eventSystem.addEventListener(`${this.id}FSM`, this.fsm.eventListener.bind(this.fsm, this));
	}
	this.engine.eventSystem.deRegisterEvent(`${this.id}-Loaded`);
  this.ready = true;
  this.canDraw = true;
}

GameObject.prototype.scaleWidth = function(dim) {
	if (this.scale && this.scale.x) {
		return dim * this.scale.x;
	}
	return dim;
}

GameObject.prototype.scaleHeight = function(dim) {
	if (this.scale && this.scale.y) {
		return dim * this.scale.y;
	}
	return dim;
}

GameObject.prototype.scalePoint = function(dim, dir) {
	if (this.scale) {
		if (dir.toLowerCase() == 'w' || 'width' || 'x') {
			 return dim * this.scale.x;
		}
		if (dir.toLowerCase() == 'h' || 'height' || 'y') {
			return dim * this.scale.y;
		}
	}
	return dim;
}

GameObject.prototype.setVelocity = function(newVel2d) {
	this.velocity.x = (newVel2d && newVel2d.x) ? newVel2d.x : this.velocity.x;
	this.velocity.y = (newVel2d && newVel2d.y) ? newVel2d.y : this.velocity.y;
}

GameObject.prototype.updatePosition = function() {
	if (this.coordinates && this.velocity) {
		this.coordinates.x += isNaN(this.velocity.x) ? 0 : this.velocity.x;
		this.coordinates.y += isNaN(this.velocity.y) ? 0 : this.velocity.y;
	}
}

GameObject.prototype.collide = function(otherGameObject) {
	if (this.collisionCentres.length == 0 || otherGameObject.collisionCentres.length == 0) {
		return;
	}
	// iterate over each object's collision radii
	for (myCentre in this.collisionCentres) {
		myCollisionCentre = this.collisionCentres[myCentre].scaled ? 
			this.collisionCentres[myCentre].scaled : 
			this.collisionCentres[myCentre];
		for (theirCentre in otherGameObject.collisionCentres) {			
			const theirCollisionCentre = otherGameObject.collisionCentres[theirCentre].scaled ?
				otherGameObject.collisionCentres[theirCentre].scaled : 
				otherGameObject.collisionCentres[theirCentre];
			const dx = myCollisionCentre.x - theirCollisionCentre.x;
			const dy = myCollisionCentre.y - theirCollisionCentre.y;
			const distance = Math.sqrt((dx * dx) + (dy * dy));		
			if (distance <= myCollisionCentre.radius + theirCollisionCentre.radius) {
				if (otherGameObject instanceof Pickup && this instanceof Ship) {
					if (otherGameObject.source !== this) {
						if (otherGameObject.payload instanceof Weapon) {
							this.collectWeapon(otherGameObject);
						} else {
							this.collectPowerUp(otherGameObject);
						}
						otherGameObject.disposable = true;
						return;
					}	
				} else if (this instanceof Pickup && otherGameObject instanceof Ship) {
					if (this.source !== otherGameObject) {
						if (this.payload instanceof Weapon) {
							otherGameObject.collectWeapon(this);							
						} else {
							otherGameObject.collectPowerUp(this);
						}
						this.disposable = true;
						return;
					}
				} else if (this instanceof Pickup || otherGameObject instanceof Pickup) {
					// pickups do not take/cause damage
					return;
				}
				if (this.mass && otherGameObject.mass) {
					// Apply basic motion transference algorithm
					// from https://gamedevelopment.tutsplus.com/tutorials/when-worlds-collide-simulating-circle-circle-collisions--gamedev-769)
					// a = shape1.vX * (shape1.mass - shape2.mass)
					// b = (2 * shape2.mass * shape2.vX)
					// c = (shape1.mass + shape2.mass)
					//
					// newVelX = (a + b) / c;
					//						
					// d = shape1.vY * (shape1.mass - shape2.mass)
					// e = (2 * shape2.mass * shape2.vY)
					// f = (shape1.mass + shape2.mass)
					//
					// newVelY = (d + e) / f;
					const newVelX1 = ((this.velocity.x * (this.mass - otherGameObject.mass)) +
					(2 * otherGameObject.mass * otherGameObject.velocity.x)) /
					(this.mass + otherGameObject.mass);
					const newVelY1 = ((this.velocity.y * (this.mass - otherGameObject.mass)) +
						(2 * otherGameObject.mass * otherGameObject.velocity.y)) /
						(this.mass + otherGameObject.mass);
					const newVelX2 = ((otherGameObject.velocity.x * (otherGameObject.mass - this.mass)) +
						(2 * this.mass * this.velocity.x)) /
						(this.mass + otherGameObject.mass);
					const newVelY2 = ((otherGameObject.velocity.y * (otherGameObject.mass - this.mass)) +
						(2 * this.mass * this.velocity.y)) /
						(this.mass + otherGameObject.mass);
					this.velocity.x = newVelX1;
					this.velocity.y = newVelY1;
					otherGameObject.velocity.x = newVelX2;
					otherGameObject.velocity.y = newVelY2;
				}
				// Apply damage
				otherGameObject.takeHit(this);
				this.takeHit(otherGameObject);						
			}
		}
	}			
}

GameObject.prototype.collisionDetect = function(x, y) {
	if ((!this._fsm || !this._fsm.state || !this._fsm.state.detectCollisions) && this !== game.localPlayer.ship) {
		return;
	}
	const self = this;
	const candidates = game.objects.filter(function(obj) {
		if (obj === self || 
			obj instanceof Particle ||
			(obj instanceof Munition && obj.shooter === self) ||
			(self instanceof Munition && self.shooter === obj) ||
			(obj.fsm && obj.fsm.state && !obj.fsm.state.detectCollisions)) {
			return false;
		}
		if (obj instanceof ParticleEffect || self instanceof ParticleEffect) {
			return false;
		}
		// cannot collide if at different altitudes
		if (self.coordinates.centre.z !== obj.coordinates.centre.z) {
			return;
		}
		// draw a circle to enclose the whole object
		const selfCirc = {
			x: self.coordinates.centre.x,
			y: self.coordinates.centre.y,
			r: (self.width > self.height ?  self.width : self.height) / 2
		};
		const objCirc = {
			x: obj.coordinates.centre.x,
			y: obj.coordinates.centre.y,
			r: (obj.width > obj.height ? obj.width : obj.height) / 2
		};
		const dx = selfCirc.x - objCirc.x;
		const dy = selfCirc.y - objCirc.y;
		const distance = Math.sqrt((dx * dx) + (dy * dy));		
	
		return distance <= selfCirc.r + objCirc.r;
	});
	if (candidates.length > 0) {
		for (var c = 0; c < candidates.length; c++) {
			self.collide(candidates[c]);
		}		
	}
}

// abstract
GameObject.prototype.takeHit = function(source) {};

GameObject.prototype.isOnScreen = function() {
	return this.engine.canvas('viewport').contains(this.coordinates.x, this.coordinates.y, this.width, this.height, this.rotation);
};

GameObject.prototype.draw = function() {
	if (!this.ready) return;
	if (!this.isOnScreen()) return;
	if (this.disposable) return;
  if (!this.canDraw) return;

  this.preDraw && this.preDraw();

  const viewport = this.engine.canvas('viewport');
  if (!viewport || !viewport.isReady) return;

	viewport.context.save();
	//viewport.context.translate(this.centre.x, this.centre.y);
	if (this.rotation) {
		viewport.context.rotate(degreesToRadians(this.rotation + 90));
	}
	viewport.context.fillStyle = this.conf.colour ? this.conf.colour : '#ffffff';

	if (this.sprite && this.sprite.image) {
		// sub... vars represent sub-sections of a larger image (if applicable)
		let subX = 0;
		let subY = 0;
		let subWidth = this.sprite.width;
		let subHeight = this.sprite.height
		// dest... vars reference the destination within the target canvas
		let destX = this.coordinates.x;
		let destY = this.coordinates.y;
		let destWidth = this.width || this.sprite.width;
		let destHeight = this.height || this.sprite.height;

		// adjust for sub-image properties if required
		if (!isNaN(this.sprite.frame)) {
			const cell = (this.sprite.frame * this.sprite.width) / (this.sprite.width * this.sprite.columns);
			const row = Math.floor(this.sprite.frame / this.sprite.columns);
			const col = (cell - row) * this.sprite.columns;
			subX = this.sprite.width * col;
			subY = this.sprite.height * row;
			subWidth = this.sprite.width;
			subHeight = this.sprite.height;
		}

		viewport.context.drawImage(this.sprite.image, subX, subY, subWidth, subHeight, destX, destY, destWidth, destHeight);
		
		// debug: draw bounding boxes
		// viewport.context.beginPath();
		// viewport.context.strokeStyle = "white";
		// viewport.context.moveTo(dx, dy);
		// viewport.context.lineTo(dx + dWidth, dy);
		// viewport.context.moveTo(dx + dWidth, dy);
		// viewport.context.lineTo(dx + dWidth, dy + dHeight);
		// viewport.context.moveTo(dx + dWidth, dy + dHeight);
		// viewport.context.lineTo(dx, dy + dHeight);
		// viewport.context.moveTo(dx, dy + dHeight);
		// viewport.context.lineTo(dx, dy);
		// viewport.context.stroke();

	} else if(this.width !== 0 && this.height !== 0) {
		viewport.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
	}
	viewport.context.restore();
};

GameObject.prototype.updateAndDraw = function() {
	if (this.disposable) return;
	this.updatePosition();
	this.collisionDetect();
	this.draw();
	if (this._fsm && this._fsm.execute) {
		this._fsm.execute();
	}
};

// export {
//    GameObject
// };


/***/ }),

/***/ "./model/sprite.js":
/*!*************************!*\
  !*** ./model/sprite.js ***!
  \*************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });

class Sprite {
  constructor(conf, type, point2d, imageService) {
      this.conf = conf;
      this.type = type;
      this.coordinates = point2d;
      this.width = this.conf.image ? this.conf.image.imageWidth : this.conf.sheet.frameWidth;
      this.height = this.conf.image ? this.conf.image.imageHeight : this.conf.sheet.frameHeight;
      this.frames = this.conf.sheet ? (this.conf.sheet.rows * this.conf.sheet.columns) : undefined;
      this.frame = (this.conf.sheet && this.conf.sheet.startFrame) ? 
                    this.conf.sheet.startFrame : 
                    0;
      this.imagePath = this.conf.image ? this.conf.image.path : this.conf.sheet.path;
      this.image = imageService.load(this.imagePath);
      this.columns = (this.conf.sheet && this.conf.sheet.columns) ?
                    this.conf.sheet.columns : 
                    1;
      this.rows = (this.conf.sheet && this.conf.sheet.rows) ?
                    this.conf.sheet.rows : 
                    1;
  }
}



/***/ }),

/***/ "./ui/gamepad.js":
/*!***********************!*\
  !*** ./ui/gamepad.js ***!
  \***********************/
/*! exports provided: GamepadHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamepadHandler", function() { return GamepadHandler; });

class GamepadHandler {
  constructor() {
      this.gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  }
  get gamepad() {
      this.refresh();
      const pad = this.gamepads[0];
      const deadZone = 0.2;
      if (!pad) return null;
      return {
          status: {
              axes: pad.axes,
              buttons: pad.buttons
          },
          inputs: {
              axes: pad.axes.filter(function(axis) {
                  return axis.valueOf !== 0;
              }),
              buttons: pad.buttons.filter(function(button) {
                  return button.pressed;
              })
          },
          sticks: {
              left: {
                  left: pad.axes[0].valueOf() < -deadZone,
                  right: pad.axes[0].valueOf() > deadZone,
                  up: pad.axes[1].valueOf() < -deadZone,
                  down: pad.axes[1].valueOf() > deadZone,
                  pressed: pad.buttons[10].pressed
              },
              right: {
                  left: pad.axes[2].valueOf() < -deadZone,
                  right: pad.axes[2].valueOf() > deadZone,
                  up: pad.axes[3].valueOf() < -deadZone,
                  down: pad.axes[3].valueOf() > deadZone,
                  pressed: pad.buttons[11].pressed    //guess!
              }
          },
          buttons: {
              a: pad.buttons[0].pressed,
              b: pad.buttons[1].pressed,
              x: pad.buttons[2].pressed,
              y: pad.buttons[3].pressed,
              back: pad.buttons[8].pressed,
              start: pad.buttons[9].pressed  //guess!
          },
          dpad: {
              left: pad.buttons[14].pressed,
              right: pad.buttons[15].pressed,
              up: pad.buttons[12].pressed,
              down: pad.buttons[13].pressed
          },
          shoulders: {
              left: pad.buttons[4].pressed,
              right: pad.buttons[5].pressed
          },
          triggers: {
              left: pad.buttons[6].pressed,
              right: pad.buttons[7].pressed
          }
      }
  }
}

GamepadHandler.prototype.refresh = function() {
  this.gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
}

GamepadHandler.prototype.pressedButtons = function(gamepadIndex) {
    return this.gamepads[gamepadIndex].buttons.filter(function(button){
        return button.pressed;        
    })
}

GamepadHandler.prototype.movedSticks = function(gamepadIndex) {
    return this.gamepads[gamepadIndex].axes.filter(function(stick){
        return stick.valueOf !== 0;
    })
}

GamepadHandler.prototype.readInputs = function(index) {
    const buttons = this.pressedButtons(index);
    const sticks = this.movedSticks(index);

}

GamepadHandler.prototype.sticks = function(index) {
    const _sticks = this.gamepads[index ? index : 0].axes;
    return {
        left: {
            up: _sticks[0].valueOf(),
            down: _sticks[0].valueOf(),
            left: _sticks[0].valueOf(),
            right: _sticks[0].valueOf()
        },
        right: {
            up: _sticks[1].valueOf(),
            down: _sticks[1].valueOf(),
            left: _sticks[1].valueOf(),
            right: _sticks[1].valueOf()
        }
    }
}

GamepadHandler.prototype.buttons = function(index) {
    const _buttons = this.gamepads[index ? index : 0].buttons;
    return {
        a: _buttons[0].pressed,
        b: _buttons[1].pressed,
        x: _buttons[2].pressed,
        y: _buttons[3].pressed
    }
}

GamepadHandler.prototype.triggers = function(index) {
    const _triggers = this.gamepads[index ? index : 0].buttons;
    return {
        left: _triggers[4].pressed,
        right: _triggers[5].pressed
    }
}




/***/ }),

/***/ "./ui/keys.js":
/*!********************!*\
  !*** ./ui/keys.js ***!
  \********************/
/*! exports provided: Keys, KeyHandler, KeyProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyHandler", function() { return KeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyProcessor", function() { return KeyProcessor; });
/* harmony import */ var _lib_partition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/partition */ "./lib/partition.js");



const Keys = {
  Q: 'KEYQ',
  W: 'KEYW',
  E: 'KEYE',
  R: 'KEYR',
  T: 'KEYT',
  Y: 'KEYY',
  U: 'KEYU',
  I: 'KEYI',
  O: 'KEYO',
  P: 'KEYP',    

  A: 'KEYA',
  S: 'KEYS',
  D: 'KEYD',
  F: 'KEYF',
  G: 'KEYG',
  H: 'KEYH',
  J: 'KEYJ',
  K: 'KEYK',
  L: 'KEYL',

  Z: 'KEYZ',
  X: 'KEYX',
  C: 'KEYC',
  V: 'KEYV',
  B: 'KEYB',
  N: 'KEYN',
  M: 'KEYM',

  ARROWUP: 'ARROWUP',
  ARROWDOWN: 'ARROWDOWN',
  ARROWLEFT: 'ARROWLEFT',
  ARROWRIGHT: 'ARROWRIGHT',
  SHIFTLEFT: 'SHIFTLEFT',
  SPACE: 'SPACE',
  SHIFTRIGHT: 'SHIFTRIGHT',
  ENTER: 'ENTER',
  BACKSPACE: 'BACKSPACE',
  ESCAPE: 'ESCAPE'
};

class KeyHandler {
  constructor(keyProcessor, gameEngine) {
    this._engine = gameEngine;
    this._enabled = false;
    this._processKey = keyProcessor;
    this._ignored = [];
    this._queue = [];
    this.pressed = {}; 
  }
  get enabled() {
    return this._enabled;
  }
  get gameEngine() {
    return this._engine;
  }
  set enabled(val) {
    this._enabled = val;
  }
}

KeyHandler.prototype.ignore = function(key, ms) {
  if (this.ignored(key)) {
    return; // prevent endless ignoring from repeated key presses
  }
  const now = Date.now();
  const active = Object(_lib_partition__WEBPACK_IMPORTED_MODULE_0__["partition"])(this._ignored, function(k) {
    return k.timeout > now;
  })[0];
  const index = active.findIndex(function(k) {
    return k.key == key;
  });
  const expires = now + ms;
  if (index < 0) {
    active.push({
      key: key, 
      timeout: expires
    });
  }
  this._ignored = active;
}

KeyHandler.prototype.listen = function(key) {
  const ignoring = Object(_lib_partition__WEBPACK_IMPORTED_MODULE_0__["partition"])(this._ignored, function(k) {
    return k.key !== key;
  })[0];
  this._ignored = ignoring;
}

KeyHandler.prototype.ignored = function(key) {
  const now = Date.now();
  const active = Object(_lib_partition__WEBPACK_IMPORTED_MODULE_0__["partition"])(this._ignored, function(k) {
    return k.timeout >= now;
  })[0];
  this._ignored = active;
  return active.findIndex(function(k) {
    return k.key == key;
  }) > -1;
}

KeyHandler.prototype.queued = function(key) {
  return Object(_lib_partition__WEBPACK_IMPORTED_MODULE_0__["partition"])(this._queue, function(k) {
    return k == key;
  })[0].length > 0;
}

KeyHandler.prototype.enQueue = function(key) {
  if(!this.queued(key)) {
    this._queue.push(key);
  }
}

KeyHandler.prototype.deQueue = function(key) {
  this._queue = Object(_lib_partition__WEBPACK_IMPORTED_MODULE_0__["partition"])(this._queue, function(k) {
    return k != key;
  })[0];
}

KeyHandler.prototype.handleKeyDown = function(e) {
  e.preventDefault();
  e.cancelBubble = true;
  const key = e.code.toUpperCase();
  if (this.ignored(key)) {
    return;
  }
  this._processKey(key, true, this);
}

KeyHandler.prototype.handleKeyUp = function(e) {
  e.preventDefault();
  e.cancelBubble = true;
  const key = e.code.toUpperCase();
  this._processKey(key, false, this);
}

const KeyProcessor = (pressedKey, isPressed, keyHandler) => {
  switch (pressedKey) {
    case Keys.SPACE:
      if (keyHandler.gameEngine && keyHandler.gameEngine.eventSystem) {
        keyHandler.gameEngine.eventSystem.dispatchEvent(keyHandler.gameEngine.id, {action: "SPACEPRESSED"});
      }
      break;
    case Keys.ENTER:
      break;
    case Keys.ESCAPE:
      debugger;
      break;  
  }
};




/***/ }),

/***/ "./ui/touch.js":
/*!*********************!*\
  !*** ./ui/touch.js ***!
  \*********************/
/*! exports provided: TouchInterface, TouchHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchInterface", function() { return TouchInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchHandler", function() { return TouchHandler; });
/* harmony import */ var _environment_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/canvas */ "./environment/canvas.js");

/*
	Touch interface / handler
*/



class TouchHandler {
  constructor(config, gameEngine) {
      this.gameEngine = gameEngine;
      this.config = config,
      this._enabled = false;
      this._width = config.width;
      this._height = config.height;
      this._button = {
          width: 100,
          height: 100
      };
      this._buttons = {
          leftButton: {
              x: 0 + (this._button.width / 2),
              y: this._height - (this._button.height / 2),
              width: this._button.width,
              height: this._button.height,
              backgroundColour: '#aaaaaa',
              touched: false, 
              image: this.gameEngine.images.load('../image/leftButton.png')
          },
          rightButton: {
              x: 0 + this._button.width + (this._button.width / 2),
              y: this._height - (this._button.height / 2),
              width: this._button.width,
              height: this._button.height,
              backgroundColour: '#bbbbbb',
              touched: false,
              image: imageService.loadImage('../image/rightButton.png')
          },
          fireButton: {
              x: this._width - (this._button.width / 2),
              y: this._height - (this._button.height / 2),
              width: this._button.width,
              height: this._button.height,
              backgroundColour: '#cccccc',
              touched: false,
              image: imageService.loadImage('../image/fireButton.png')                
          },
          thrustButton: {
              x: this._width - this._button.width - (this._button.width / 2),
              y: this._height - (this._button.height / 2),
              width: this._button.width,
              height: this._button.height,
              backgroundColour: '#dddddd',
              touched: false,
              image: imageService.loadImage('../image/thrustButton.png')                
          }
      };
  }

  get buttons() {
      return this._buttons;
  }
  get enabled() {
      return this._enabled;
  }

  set enabled(val) {
      this._enabled = val;
  }
}

TouchHandler.prototype.handleTouchStart = function(evt) {
  evt.preventDefault();
  this._enabled = true;
  const touches = evt.changedTouches;
  
  for (var i = 0; i < touches.length; i++) {
      const touch = touches[i];
      for (b in this.buttons) {
          const button = this.buttons[b];
          if (button.x - (button.width / 2) <= touch.pageX && 
              button.x + (button.width / 2) >= touch.pageX && 
              button.y - (button.height / 2) <= touch.pageY &&
              button.y + (button.height / 2) >= touch.pageY
          ) {
              button.touched = true;
          }
      }
  }
}

TouchHandler.prototype.handleTouchEnd = function(evt) {
  evt.preventDefault();
  const touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
      const touch = touches[i];
      for (b in this.buttons) {
          const button = this.buttons[b];
          if (button.x - (button.width / 2) <= touch.pageX && 
              button.x + (button.width / 2) >= touch.pageX && 
              button.y - (button.width / 2) <= touch.pageY &&
              button.y + (button.height / 2) >= touch.pageY
          ) {
              button.touched = false;
          }
      }
  }
}

class TouchInterface extends _environment_canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas2D"] {
  constructor(config, gameEngine) {
    super(config, gameEngine);
    this.config = config;
    this._element = document.getElementById(this.config.selector.substr(1));
    this._touchHandler = new TouchHandler({width: config.width, height: config.height}, gameEngine);
    if (this._element) {
        this._element.addEventListener('touchstart', this._touchHandler.handleTouchStart.bind(this._touchHandler), true);
        this._element.addEventListener('touchend', this._touchHandler.handleTouchEnd.bind(this._touchHandler), true);	  
    }
  }
  get element() {
    return this._element;
  }
  get touchHandler() {
    return this._touchHandler;
  }		
}

TouchInterface.prototype.draw = function(debug) {
  for (b in this._touchHandler.buttons) {
    const button = this._touchHandler.buttons[b];
    if (button.image) {
        this._context.drawImage(button.image, button.x - (button.width / 2), button.y - (button.height / 2), button.width, button.height);
    } else {
        this._context.strokeStyle = button.backgroundColour ? button.backgroundColour : 'transparent';
        this._context.beginPath();
        this._context.arc(button.x, button.y, button.width / 2, 0, Math.PI * 2, false); 
        this._context.stroke();
    }
  }	
}

/*
    const tiWrapper = document.querySelector(config.selector);
    if (tiWrapper) {
      tiWrapper.style.left = config.x.toString() + 'px';
      tiWrapper.style.top = config.y.toString() + 'px';
      tiWrapper.style.width = config.width.toString() + 'px';
      tiWrapper.style.height = config.height.toString() + 'px';
      tiWrapper.style.background = config.background;
    }
    // size touch interface canvas
    if (this.touchInterface.element) {
      this.touchInterface.element.style.left = config.x.toString() + 'px';
      this.touchInterface.element.style.top = config.y.toString() + 'px';
      this.touchInterface.element.width = config.width;
      this.touchInterface.element.height = config.height;
    }
*/



/***/ }),

/***/ "./utils/image.js":
/*!************************!*\
  !*** ./utils/image.js ***!
  \************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });

class ImageService {
	constructor() {
		this.defaultPath = './assets/'
		this._loadedImages = [];
	}
}

ImageService.prototype.load = function(imgPath, onLoad) {
	const fullPath = this.defaultPath + imgPath;
	for(var i = 0; i < this._loadedImages.length; i++) {
		if (this._loadedImages[i].path === fullPath) {
			return this._loadedImages[i].img;
		}
	}
	const image = new Image();
	image.src = fullPath;
	if (onLoad) {
		image.addEventListener('load', onLoad, false);
	}
	this._loadedImages.push({path: fullPath, img: image});
	return image;
}




/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FY2NlbnRyaWNFbmdpbmUuW25hbWVdL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9FY2NlbnRyaWNFbmdpbmUuW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uLi9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2VuZ2luZS9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2Vudmlyb25tZW50L2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9FY2NlbnRyaWNFbmdpbmUuW25hbWVdLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2xpYi8yZC5qcyIsIndlYnBhY2s6Ly9FY2NlbnRyaWNFbmdpbmUuW25hbWVdLy4vbGliLzNkLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi9saWIvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2xpYi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2xpYi9mc20uanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL2xpYi9tYXRoLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi9saWIvcGFydGl0aW9uLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi9tb2RlbC9nYW1lT2JqZWN0LmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi9tb2RlbC9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL3VpL2dhbWVwYWQuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL3VpL2tleXMuanMiLCJ3ZWJwYWNrOi8vRWNjZW50cmljRW5naW5lLltuYW1lXS8uL3VpL3RvdWNoLmpzIiwid2VicGFjazovL0VjY2VudHJpY0VuZ2luZS5bbmFtZV0vLi91dGlscy9pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pELENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLDJFQUFvQjs7QUFFL0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLDhEQUFVOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsbURBQW1EO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDQSxVQUFVLG1CQUFPLENBQUMsMERBQVc7QUFDN0Isa0JBQWtCLG1CQUFPLENBQUMsa0VBQW1COztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFlLG1CQUFPLENBQUMsMkNBQVM7QUFDUTtBQUNIO0FBQ1k7QUFDVTtBQUNMO0FBQ1A7QUFDRjtBQUNDOztBQUU5QztBQUN1RDtBQUNoRCxtQkFBbUIsNERBQUU7QUFDZTtBQUNwQyxnQkFBZ0IsK0NBQUc7QUFDYztBQUNqQyxhQUFhLDZDQUFFOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQSx3QkFBd0IsYUFBYSxFQUFFO0FBQ3ZDLHdCQUF3QixhQUFhLEVBQUU7QUFDdkMsdUJBQXVCLGFBQWEsRUFBRTtBQUN0QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFPO0FBQ2xDLDJCQUEyQixnREFBSztBQUNoQztBQUNBO0FBQ0Esc0JBQXNCLHlEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSwwREFBYztBQUMvRSw2SUFBNkksc0RBQVk7QUFDeko7QUFDQTtBQUNBLHlCQUF5Qiw0REFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0REFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrREFBa0QsdUJBQXVCO0FBQ3pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsK0JBQStCO0FBQ3RGLG1EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQXNELHNCQUFzQixFQUFFO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsMEJBQTBCLEVBQUU7QUFDbEY7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCw2RUFBNkUsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLCtCQUErQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCOztBQUVBOztBQUVBLDREQUE0RCxtREFBVTs7QUFFdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw2RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixnRUFBUztBQUNoQztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlGO0FBQ0E7O0FBSUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1U4Qzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0NBQU87QUFDdEMseUJBQXlCLFVBQVUsK0NBQU8sZUFBZSwrQ0FBTyx3Q0FBd0M7QUFDeEc7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtEQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtDQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RjtBQUNBO0FBQ0EseUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLCtDQUFPOztBQUViO0FBQ0E7QUFDQSxNQUFNLCtDQUFPOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE04QjtBQUNLO0FBQ1o7QUFDQTtBQUNHO0FBQ0M7QUFDSDtBQUNDO0FBQ0s7QUFDRztBQUNKO0FBQ0Y7QUFDSDtBQUNDO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Q5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQU1FOzs7Ozs7Ozs7Ozs7O0FDeEtGO0FBQUE7QUFBQTtBQUErQjs7QUFFL0Isc0JBQXNCLDJDQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7O0FDakNGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLDhCQUE4QixFQUFFLGE7QUFDNUU7QUFDQTtBQUNBLEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQzs7Ozs7Ozs7Ozs7OztBQ3RHRDtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7O0FDeENGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLFNBQVM7QUFDL0M7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEU7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWUsbUJBQU8sQ0FBQywyQ0FBUztBQUNjO0FBQ2I7QUFDVTtBQUNGO0FBQ1o7O0FBRXRCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQjtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBLDhDQUE4QywrQ0FBTztBQUNyRCxzQkFBc0IsZ0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUFHO0FBQ3JDLDJDQUEyQyxRQUFRO0FBQ25ELDhDQUE4QyxRQUFRO0FBQ3RELG1DO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEQ7QUFDQSxnQkFBZ0IsUUFBUSxvREFBb0QsV0FBVyxjQUFjLElBQUk7QUFDekc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0NBQWdDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNEQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25ELDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMkM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQztBQUNBO0FBQ0E7QUFDQSxFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsZUFBZTtBQUNmLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIMkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFTO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZ0VBQVM7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFTO0FBQzFCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLFNBQVMsZ0VBQVM7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixnRUFBUztBQUN6QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLHVCQUF1QjtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZO0FBQ0E7QUFDQTs7QUFNRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0pGO0FBQ0E7QUFDQTs7QUFFaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDREQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJDQUEyQztBQUN0RjtBQUNBO0FBQ0EscUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1RjtBQUNBO0FBQ0E7QUFDQSxHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLCtCQUErQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkJBQTJCO0FBQ3JEO0FBQ0E7O0FBSUUiLCJmaWxlIjoiRWNjZW50cmljLkVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRW5naW5lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFY2NlbnRyaWNFbmdpbmVcIl0gPSByb290W1wiRWNjZW50cmljRW5naW5lXCJdIHx8IHt9LCByb290W1wiRWNjZW50cmljRW5naW5lXCJdW1wiRW5naW5lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIHx8XG4gIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIHZhciBkZXNjcmlwdG9ycyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVzY3JpcHRvcnNba2V5c1tpXV0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdG9ycztcbiAgfTtcblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG52YXIga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2woJ3V0aWwucHJvbWlzaWZ5LmN1c3RvbScpIDogdW5kZWZpbmVkO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcIm9yaWdpbmFsXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uJyk7XG5cbiAgaWYgKGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCAmJiBvcmlnaW5hbFtrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2xdKSB7XG4gICAgdmFyIGZuID0gb3JpZ2luYWxba0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXTtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJ1dGlsLnByb21pc2lmeS5jdXN0b21cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBrQ3VzdG9tUHJvbWlzaWZpZWRTeW1ib2wsIHtcbiAgICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgZnVuY3Rpb24gZm4oKSB7XG4gICAgdmFyIHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcHJvbWlzZVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgcHJvbWlzZVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBhcmdzLnB1c2goZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZVJlc29sdmUodmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcHJvbWlzZVJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGZuLCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKTtcblxuICBpZiAoa0N1c3RvbVByb21pc2lmaWVkU3ltYm9sKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIGtDdXN0b21Qcm9taXNpZmllZFN5bWJvbCwge1xuICAgIHZhbHVlOiBmbiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoXG4gICAgZm4sXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvcmlnaW5hbClcbiAgKTtcbn1cblxuZXhwb3J0cy5wcm9taXNpZnkuY3VzdG9tID0ga0N1c3RvbVByb21pc2lmaWVkU3ltYm9sXG5cbmZ1bmN0aW9uIGNhbGxiYWNraWZ5T25SZWplY3RlZChyZWFzb24sIGNiKSB7XG4gIC8vIGAhcmVhc29uYCBndWFyZCBpbnNwaXJlZCBieSBibHVlYmlyZCAoUmVmOiBodHRwczovL2dvby5nbC90NUlTNk0pLlxuICAvLyBCZWNhdXNlIGBudWxsYCBpcyBhIHNwZWNpYWwgZXJyb3IgdmFsdWUgaW4gY2FsbGJhY2tzIHdoaWNoIG1lYW5zIFwibm8gZXJyb3JcbiAgLy8gb2NjdXJyZWRcIiwgd2UgZXJyb3Itd3JhcCBzbyB0aGUgY2FsbGJhY2sgY29uc3VtZXIgY2FuIGRpc3Rpbmd1aXNoIGJldHdlZW5cbiAgLy8gXCJ0aGUgcHJvbWlzZSByZWplY3RlZCB3aXRoIG51bGxcIiBvciBcInRoZSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHVuZGVmaW5lZFwiLlxuICBpZiAoIXJlYXNvbikge1xuICAgIHZhciBuZXdSZWFzb24gPSBuZXcgRXJyb3IoJ1Byb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBmYWxzeSB2YWx1ZScpO1xuICAgIG5ld1JlYXNvbi5yZWFzb24gPSByZWFzb247XG4gICAgcmVhc29uID0gbmV3UmVhc29uO1xuICB9XG4gIHJldHVybiBjYihyZWFzb24pO1xufVxuXG5mdW5jdGlvbiBjYWxsYmFja2lmeShvcmlnaW5hbCkge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwib3JpZ2luYWxcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24nKTtcbiAgfVxuXG4gIC8vIFdlIERPIE5PVCByZXR1cm4gdGhlIHByb21pc2UgYXMgaXQgZ2l2ZXMgdGhlIHVzZXIgYSBmYWxzZSBzZW5zZSB0aGF0XG4gIC8vIHRoZSBwcm9taXNlIGlzIGFjdHVhbGx5IHNvbWVob3cgcmVsYXRlZCB0byB0aGUgY2FsbGJhY2sncyBleGVjdXRpb25cbiAgLy8gYW5kIHRoYXQgdGhlIGNhbGxiYWNrIHRocm93aW5nIHdpbGwgcmVqZWN0IHRoZSBwcm9taXNlLlxuICBmdW5jdGlvbiBjYWxsYmFja2lmaWVkKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIHZhciBtYXliZUNiID0gYXJncy5wb3AoKTtcbiAgICBpZiAodHlwZW9mIG1heWJlQ2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsYXN0IGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGNiID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbWF5YmVDYi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgLy8gSW4gdHJ1ZSBub2RlIHN0eWxlIHdlIHByb2Nlc3MgdGhlIGNhbGxiYWNrIG9uIGBuZXh0VGlja2Agd2l0aCBhbGwgdGhlXG4gICAgLy8gaW1wbGljYXRpb25zIChzdGFjaywgYHVuY2F1Z2h0RXhjZXB0aW9uYCwgYGFzeW5jX2hvb2tzYClcbiAgICBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmV0KSB7IHByb2Nlc3MubmV4dFRpY2soY2IsIG51bGwsIHJldCkgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlaikgeyBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNraWZ5T25SZWplY3RlZCwgcmVqLCBjYikgfSk7XG4gIH1cblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY2FsbGJhY2tpZmllZCwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsKSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNhbGxiYWNraWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob3JpZ2luYWwpKTtcbiAgcmV0dXJuIGNhbGxiYWNraWZpZWQ7XG59XG5leHBvcnRzLmNhbGxiYWNraWZ5ID0gY2FsbGJhY2tpZnk7XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJjb25zdCB1dWlkdjQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5pbXBvcnQgeyBSZWFjdG9yIH0gZnJvbSAnLi4vbGliL2V2ZW50cyc7XG5pbXBvcnQgeyBBdWRpbyB9IGZyb20gJy4uL2xpYi9hdWRpbyc7XG5pbXBvcnQgeyBDYW52YXMyRCB9IGZyb20gJy4uL2Vudmlyb25tZW50L2NhbnZhcyc7XG5pbXBvcnQgeyBUb3VjaEludGVyZmFjZSwgVG91Y2hIYW5kbGVyIH0gZnJvbSAnLi4vdWkvdG91Y2gnO1xuaW1wb3J0IHsgS2V5SGFuZGxlciwgS2V5UHJvY2Vzc29yIH0gZnJvbSAnLi4vdWkva2V5cyc7XG5pbXBvcnQgeyBHYW1lcGFkSGFuZGxlciB9IGZyb20gJy4uL3VpL2dhbWVwYWQnO1xuaW1wb3J0IHsgcGFydGl0aW9uIH0gZnJvbSAnLi4vbGliL3BhcnRpdGlvbic7XG5pbXBvcnQgeyBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9pbWFnZSc7XG5cbi8vIEV4cG9zZSBvdGhlciB0eXBlcyAodW50aWwgSSBmaWd1cmUgb3V0IGhvdyB0byBkbyB0aGlzIHByb3Blcmx5KVxuaW1wb3J0IHsgR2FtZU9iamVjdCBhcyBHTyB9IGZyb20gJy4uL21vZGVsL2dhbWVPYmplY3QnO1xuZXhwb3J0IGNvbnN0IEdhbWVPYmplY3QgPSBHTztcbmltcG9ydCB7IFBvaW50MkQgYXMgUDJEIH0gZnJvbSAnLi4vbGliLzJkJztcbmV4cG9ydCBjb25zdCBQb2ludDJEID0gUDJEO1xuaW1wb3J0IHsgS2V5cyBhcyBLcyB9IGZyb20gJy4uL3VpL2tleXMnO1xuZXhwb3J0IGNvbnN0IEtleXMgPSBLcztcblxuY2xhc3MgR2FtZUNvbmZpZ3VyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1c2VyQ29uZmlndXJhdGlvbiwgdXNlckxpZmVjeWNsZSkge1xuICAgIHRoaXMuX2dhbWUgPSB7XG4gICAgICB2ZXJzaW9uOiAwLjAsXG4gICAgICBmcHM6IDMwLFxuICAgICAgY2FudmFzc2VzOiB7fSxcbiAgICAgIHRvdWNoVUk6IHt9LFxuICAgICAgZW5hYmxlVG91Y2hVSTogJ2F1dG8nLFxuICAgICAgZW5hYmxlS2V5Ym9hcmRVSTogZmFsc2UsXG4gICAgICBlbmFibGVHYW1lcGFkVUk6IGZhbHNlLFxuICAgICAga2V5UHJvY2Vzc29yOiBLZXlQcm9jZXNzb3IsXG4gICAgICBsaWZlQ3ljbGU6IHtcbiAgICAgICAgb25TZXR1cDogKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSwgIC8vIC0tfFxcICAgYW55IG9yIGFsbCBvZiB0aGVzZSBjYW4gYmVcbiAgICAgICAgb25TdGFydDogKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSwgIC8vICAgfCAgPiBpbXBsZW1lbnRlZCB2aWEgdGhlIHVzZXJMaWZlY3ljbGVcbiAgICAgICAgb25UaWNrOiAoKSA9PiB7IHJldHVybiB0cnVlOyB9ICAgIC8vIC0tfC8gICBwYXJhbWV0ZXIgaWYgZGVzaXJlZFxuICAgICAgfSxcbiAgICAgIGV2ZW50TGlzdGVuZXI6ICh0aGlzT2JqLCBldnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC5jYWxsYmFjaykge1xuICAgICAgICAgIGV2dC5jYWxsYmFjayh0aGlzT2JqLCBldnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2FtZTogdGhpcy5fZ2FtZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHVzZXJDb25maWd1cmF0aW9uKSB7XG4gICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gbmV3IHVzZXJDb25maWd1cmF0aW9uKHVzZXJMaWZlY3ljbGUpOyBcbiAgICB9XG4gIH07XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XG4gIH1cbn1cblxuY2xhc3MgRW5naW5lIHtcbiAgY29uc3RydWN0b3IodXNlckNvbmZpZywgdXNlckxpZmVjeWNsZSkge1xuICAgIHRoaXMuaWQgPSAnRU5HSU5FJztcbiAgICB0aGlzLmV2ZW50U3lzdGVtID0gbmV3IFJlYWN0b3IoKTtcbiAgICB0aGlzLmF1ZGlvU3lzdGVtID0gbmV3IEF1ZGlvKCk7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gbmV3IEdhbWVDb25maWd1cmF0aW9uKHVzZXJDb25maWcsIHVzZXJMaWZlY3ljbGUpO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmNvbmZpZztcbiAgICB0aGlzLmltYWdlcyA9IG5ldyBJbWFnZVNlcnZpY2UoKTtcblx0XHR0aGlzLmV2ZW50U3lzdGVtLnJlZ2lzdGVyRXZlbnQodGhpcy5pZCk7XG5cdFx0dGhpcy5ldmVudFN5c3RlbS5hZGRFdmVudExpc3RlbmVyKHRoaXMuaWQsIHRoaXMuY29uZmlnLmdhbWUuZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMsIHRoaXMpKTtcbiAgICB0aGlzLm9uU2V0dXAgPSB0aGlzLmNvbmZpZy5nYW1lLmxpZmVDeWNsZS5vblNldHVwO1xuICAgIHRoaXMub25TdGFydCA9IHRoaXMuY29uZmlnLmdhbWUubGlmZUN5Y2xlLm9uU3RhcnQ7XG4gICAgdGhpcy5vblRpY2sgPSB0aGlzLmNvbmZpZy5nYW1lLmxpZmVDeWNsZS5vblRpY2s7XG4gICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xuICAgIHRoaXMubG9nZ2VkRXZlbnRzID0gW107XG4gICAgdGhpcy50aWNrcyA9IDA7ICAgXG4gICAgdGhpcy5oYXNUb3VjaFN1cHBvcnQgPSAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCk7XG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICAgIHRoaXMuY2FudmFzc2VzID0gW107XG4gICAgdGhpcy5rZXlIYW5kbGVyID0gbnVsbDtcbiAgICB0aGlzLmdhbWVwYWRIYW5kbGVyID0gdGhpcy5jb25maWcuZ2FtZS5lbmFibGVHYW1lcGFkVUkgPyBuZXcgR2FtZXBhZEhhbmRsZXIoKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvdWNoSGFuZGxlciA9ICh0aGlzLmNvbmZpZy5nYW1lLmVuYWJsZVRvdWNoVUkgPT09IHRydWUgfHwgdGhpcy5jb25maWcuZ2FtZS5lbmFibGVUb3VjaFVJID09PSAnYXV0bycgJiYgdGhpcy5oYXNUb3VjaFN1cHBvcnQpID8gbmV3IFRvdWNoSGFuZGxlcih0aGlzLmNvbmZpZy5nYW1lLnRvdWNoVUkpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGltaW5nID0ge307XG4gICAgZm9yIChjb25zdCBjbnYgaW4gdGhpcy5jb25maWcuZ2FtZS5jYW52YXNzZXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMyRCh0aGlzLmNvbmZpZy5nYW1lLmNhbnZhc3Nlc1tjbnZdLCB0aGlzKTtcbiAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXNzZXMucHVzaChjYW52YXMpO1xuICAgICAgfVxuICAgIH0gICAgXG4gICAgLy8gZGVmYXVsdCBjYW52YXMgaWYgbm9uZSBzZW50IGluIGNvbmZpZ1xuICAgIGlmICh0aGlzLmNhbnZhc3Nlcy5sZW5ndGggPCAxKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzMkQoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICB3cmFwcGVyOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjY2FudmFzZGl2JyxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG91cjogJyMwMDAwMDAnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FudmFzOiB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjY2FudmFzJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdjYW52YXMnLCAgXG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHRoaXMuY2FudmFzc2VzLnB1c2goY2FudmFzKTtcbiAgICB9XG4gIH1cblxuICAvKiBnZXR0ZXJzICovXG5cbiAgZ2V0IGlzUmVhZHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzc2VzLmZpbHRlcihmdW5jdGlvbihjYW52YXMpe3JldHVybiBjYW52YXMuaXNSZWFkeTt9KS5sZW5ndGggPT0gdGhpcy5jYW52YXNzZXMubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IG9iamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU9iamVjdHM7XG4gIH1cblxuICBnZXQgZ2FtZXBhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lcGFkSGFuZGxlci5nYW1lcGFkO1xuICB9XG5cbiAgLyogc2V0dGVycyAqL1xuXG4gIHNldCBsb2NhbFBsYXllcihwbGF5ZXIpIHtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgfVxuICBcbn1cblxuRW5naW5lLnByb3RvdHlwZS50aW1lclN0YXJ0ID0gZnVuY3Rpb24oaWRlbnRpdHkpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgaWYgKCF0aGlzLnRpbWluZ1tpZGVudGl0eV0pIHtcbiAgICB0aGlzLnRpbWluZ1tpZGVudGl0eV0gPSB7fTtcbiAgfVxuICBjb25zdCBsYXN0VGltZSA9ICh0aGlzLnRpbWluZ1tpZGVudGl0eV0gJiYgdGhpcy50aW1pbmdbaWRlbnRpdHldLmxhc3QpID8gdGhpcy50aW1pbmdbaWRlbnRpdHldLmxhc3QgOiBub3c7XG4gIGNvbnN0IGludGVydmFsID0gbm93IC0gbGFzdFRpbWU7XG4gIHRoaXMudGltaW5nW2lkZW50aXR5XS5sYXN0ID0gbm93O1xuICB0aGlzLnRpbWluZ1tpZGVudGl0eV0uaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbn1cblxuRW5naW5lLnByb3RvdHlwZS50aW1lclN0b3AgPSBmdW5jdGlvbihpZGVudGl0eSkge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBpZiAoIXRoaXMudGltaW5nW2lkZW50aXR5XSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBsYXN0VGltZSA9IHRoaXMudGltaW5nW2lkZW50aXR5XS5sYXN0O1xuICB0aGlzLnRpbWluZ1tpZGVudGl0eV0uZHVyYXRpb24gPSBub3cgLSBsYXN0VGltZTtcbn1cblxuRW5naW5lLnByb3RvdHlwZS5jYW52YXMgPSBmdW5jdGlvbihhbGlhcykge1xuICBjb25zdCBjYW52cyA9IHRoaXMuY2FudmFzc2VzLmZpbHRlcihmdW5jdGlvbihjYW52YXMpe3JldHVybiBjYW52YXMuYWxpYXMgPT09IGFsaWFzO30pO1xuICByZXR1cm4gKGNhbnZzLmxlbmd0aCA+IDApID8gY2FudnNbMF0gOiB1bmRlZmluZWQ7ICBcbn1cblxuRW5naW5lLnByb3RvdHlwZS5yZWZyZXNoVWkgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChjb25zdCBjbnYgaW4gdGhpcy5jYW52YXNzZXMpIHtcbiAgICB0aGlzLmNhbnZhc3Nlc1tjbnZdLmRyYXcoKTtcbiAgfVxufVxuXG5FbmdpbmUucHJvdG90eXBlLmNyZWF0ZU9iamVjdCA9IGZ1bmN0aW9uKGNvbmYsIHBvc2l0aW9uKSB7XG4gIGNvbnN0IGdhbWVPYmplY3QgPSBuZXcgR2FtZU9iamVjdChjb25mLCBwb3NpdGlvbiwgdGhpcyk7XG4gIHJldHVybiBnYW1lT2JqZWN0OyAgXG59XG5cbkVuZ2luZS5wcm90b3R5cGUucmVnaXN0ZXJPYmplY3QgPSBmdW5jdGlvbihnYW1lT2JqZWN0KSB7XG4gIGlmICghZ2FtZU9iamVjdC5pZCkge1xuICAgIGdhbWVPYmplY3QuaWQgPSB1dWlkdjQoKTsgIFxuICB9XG4gIGlmICh0aGlzLmdldE9iamVjdEJ5SWQoZ2FtZU9iamVjdC5pZCkpIHtcbiAgICAvLyBvYmplY3QgZXhpc3RzXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRoaXMuZ2FtZU9iamVjdHMucHVzaChnYW1lT2JqZWN0KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuZ2V0T2JqZWN0QnlJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gIGNvbnN0IG9ianMgPSB0aGlzLmdldE9iamVjdHNCeUlkKGlkKTtcbiAgcmV0dXJuIChvYmpzICYmIG9ianMubGVuZ3RoID4gMCkgPyBvYmpzWzBdIDogdW5kZWZpbmVkO1xufVxuXG5FbmdpbmUucHJvdG90eXBlLmdldE9iamVjdHNCeUlkID0gZnVuY3Rpb24oaWQpIHtcbiAgY29uc3Qgb2JqcyA9IHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqLmlkID09PSBpZDsgfSk7XG4gIHJldHVybiAob2Jqcy5sZW5ndGggPiAwKSA/IG9ianMgOiB1bmRlZmluZWQ7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuZ2V0T2JqZWN0QnlUeXBlID0gZnVuY3Rpb24odHlwZSkge1xuICBjb25zdCBvYmpzID0gdGhpcy5nZXRPYmplY3RzQnlUeXBlKHR5cGUpO1xuICByZXR1cm4gKG9ianMgJiYgb2Jqcy5sZW5ndGggPiAwKSA/IG9ianNbMF0gOiB1bmRlZmluZWQ7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuZ2V0T2JqZWN0c0J5VHlwZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgY29uc3Qgb2JqcyA9IHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqLnR5cGUgPT09IHR5cGU7IH0pO1xuICByZXR1cm4gKG9ianMubGVuZ3RoID4gMCkgPyBvYmpzIDogdW5kZWZpbmVkO1xufVxuXG5FbmdpbmUucHJvdG90eXBlLmdldE9iamVjdHNCeVN0YXRlID0gZnVuY3Rpb24oZnNtU3RhdGUpIHtcbiAgY29uc3Qgb2JqcyA9IHRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iaikgeyByZXR1cm4gb2JqLmZzbSAmJiBvYmouZnNtLmN1cnJlbnRTdGF0ZSAmJiBvYmouZnNtLmN1cnJlbnRTdGF0ZSA9PT0gZnNtU3RhdGU7IH0pO1xuICByZXR1cm4gKG9ianMubGVuZ3RoID4gMCkgPyBvYmpzIDogdW5kZWZpbmVkO1xufVxuXG5FbmdpbmUucHJvdG90eXBlLmZpbHRlck9iamVjdHMgPSBmdW5jdGlvbihvYmplY3RUeXBlT3JUeXBlcykge1xuICBpZiAob2JqZWN0VHlwZU9yVHlwZXMpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmplY3RUeXBlT3JUeXBlcyBpbnN0YW5jZW9mIEFycmF5ID8gXG4gICAgICAgIG9iamVjdFR5cGVPclR5cGVzLmluY2x1ZGVzKG9iai5jb25zdHJ1Y3RvcikgOiBcbiAgICAgICAgb2JqIGluc3RhbmNlb2Ygb2JqZWN0VHlwZU9yVHlwZXM7XG4gICAgfSlcbiAgfVxuICByZXR1cm4gdGhpcy5vYmplY3RzO1xufVxuXG5FbmdpbmUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKGxvZ2dlZEV2ZW50KSB7XG4gIHRoaXMubG9nZ2VkRXZlbnRzLnB1c2gobG9nZ2VkRXZlbnQuZHVtcCk7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuZmx1c2hMb2dnZWRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChsZXQgZXY9MDsgZXYgPCB0aGlzLmxvZ2dlZEV2ZW50cy5sZW5ndGg7IGV2ICs9IDEpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ2dlZEV2ZW50c1tldl0pO1xuICB9XG4gIHRoaXMubG9nZ2VkRXZlbnRzID0gW107XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2V0dXBEb25lKSByZXR1cm47IFxuXG4gIHRoaXMudGltZXJTdGFydCgnc2V0dXAnKTtcblxuICB0aGlzLmtleUhhbmRsZXIgPSB0aGlzLmNvbmZpZy5nYW1lLmVuYWJsZUtleWJvYXJkVUkgPyBuZXcgS2V5SGFuZGxlcih0aGlzLmNvbmZpZy5nYW1lLmtleVByb2Nlc3NvciwgdGhpcykgOiB1bmRlZmluZWQ7XG5cbiAgdGhpcy5vblNldHVwLmJpbmQodGhpcywgdGhpcyk7XG4gIHRoaXMub25TdGFydC5iaW5kKHRoaXMsIHRoaXMpO1xuICB0aGlzLm9uVGljay5iaW5kKHRoaXMsIHRoaXMpO1xuICBcbiAgZm9yIChnb1R5cGUgaW4gdGhpcy5jb25maWcuZ2FtZU9iamVjdFR5cGVzKSB7XG4gICAgZm9yIChvYmpEZWYgaW4gdGhpcy5jb25maWcuZ2FtZU9iamVjdFR5cGVzW2dvVHlwZV0pIHtcbiAgICAgIGNvbnN0IGdhbWVPYmplY3QgPSB0aGlzLmNvbmZpZy5nYW1lT2JqZWN0VHlwZXNbZ29UeXBlXVtvYmpEZWZdO1xuICAgICAgc291cmNlSW1hZ2VQYXRoID0gZ2FtZU9iamVjdC5zcHJpdGUuc2hlZXQgPyBnYW1lT2JqZWN0LnNwcml0ZS5zaGVldC5wYXRoIDogZ2FtZU9iamVjdC5zcHJpdGUuaW1hZ2UucGF0aDtcbiAgICAgIHRoaXMuaW1hZ2VzLmxvYWQoc291cmNlSW1hZ2VQYXRoKTsgIFxuICAgIH1cbiAgfVxuICBcbiAgZm9yIChlZmZlY3QgaW4gdGhpcy5jb25maWcuZ2FtZS5zb3VuZEVmZmVjdHMpIHtcbiAgICB0aGlzLmF1ZGlvU3lzdGVtLmFkZEVmZmVjdChuZXcgQXVkaW9FZmZlY3QodGhpcy5jb25maWcuZ2FtZS5zb3VuZEVmZmVjdHNbZWZmZWN0XSkpO1xuICB9XG5cbiAgZm9yKGNvbnN0IGNudiBpbiB0aGlzLmNhbnZhc3Nlcykge1xuICAgIHRoaXMuY2FudmFzc2VzW2Nudl0uaW5pdCAmJiB0aGlzLmNhbnZhc3Nlc1tjbnZdLmluaXQoKTtcbiAgfVxuICBcbiAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZVRvdWNoVUkgJiYgdGhpcy5oYXNUb3VjaFN1cHBvcnQpIHtcbiAgICB0aGlzLnRvdWNoSW50ZXJmYWNlLmluaXQoKTtcbiAgfVxuICB0aGlzLnRpbWVyU3RhcnQoJ29uU2V0dXAnKTtcbiAgdGhpcy5vblNldHVwKHRoaXMpO1xuICB0aGlzLnRpbWVyU3RvcCgnb25TZXR1cCcpO1xuXG4gIHRoaXMuc2V0dXBEb25lID0gdHJ1ZTtcbiAgdGhpcy50aW1lclN0b3AoJ3NldHVwJyk7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50aW1lclN0YXJ0KCdzdGFydCcpO1xuIFxuICBpZiAodGhpcy5zdGFydGVkKSByZXR1cm4gdHJ1ZTtcblxuICB0aGlzLnNldHVwKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlIYW5kbGVyLmhhbmRsZUtleURvd24uYmluZCh0aGlzLmtleUhhbmRsZXIpLCBmYWxzZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5SGFuZGxlci5oYW5kbGVLZXlVcC5iaW5kKHRoaXMua2V5SGFuZGxlciksIGZhbHNlKTsgICAgXG4gIGZvciAoY29uc3QgY252IGluIHRoaXMuY2FudmFzc2VzKSB7XG4gICAgdGhpcy5jYW52YXNzZXNbY252XS5pbml0KCk7XG4gIH1cbiAgXG4gIC8vIHJ1biBjdXN0b20gdXNlciBjb2RlXG4gIHRoaXMudGltZXJTdGFydCgnb25TdGFydCcpO1xuICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gIHRoaXMudGltZXJTdG9wKCdvblN0YXJ0Jyk7XG4gIFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy50aWNrLmJpbmQodGhpcykpO1xuICBcbiAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgdGhpcy50aW1lclN0b3AoJ3N0YXJ0Jyk7XG59XG5cbkVuZ2luZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuaXNSZWFkeSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnRpbWVyU3RhcnQoJ3RpY2snKTtcbiAgdGhpcy50aWNrcyArPSAxO1xuXG4gIHRoaXMucmVmcmVzaFVpKCk7XG5cbiAgY29uc3QgZGVhZEFuZEFsaXZlID0gcGFydGl0aW9uKHRoaXMuZ2FtZU9iamVjdHMsIGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmouVFRMID8gb2JqLlRUTCA8PSAwIDogb2JqLmRpc3Bvc2FibGU7XG4gIH0pO1xuXG4gIC8vIGNsZWFuIG91dCBldmVudCBsaXN0ZW5lcnMgZm9yIGRlYWQgb2JqZWN0c1xuICBmb3IgKGNvbnN0IG9iaiBpbiBkZWFkQW5kQWxpdmVbMF0pIHtcbiAgICBjb25zdCBnYW1lT2JqZWN0ID0gZGVhZEFuZEFsaXZlWzBdW29ial07XG4gICAgaWYgKHRoaXMuZXZlbnRTeXN0ZW0uZXZlbnRzW2Ake2dhbWVPYmplY3QuaWR9YF0pIHtcbiAgICAgIHRoaXMuZXZlbnRTeXN0ZW0uZGVSZWdpc3RlckV2ZW50KGAke2dhbWVPYmplY3QuaWR9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmV2ZW50U3lzdGVtLmV2ZW50c1tgJHtnYW1lT2JqZWN0LmlkfUZTTWBdKSB7XG4gICAgICB0aGlzLmV2ZW50U3lzdGVtLmRlUmVnaXN0ZXJFdmVudChgJHtnYW1lT2JqZWN0LmlkfUZTTWApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuZ2FtZU9iamVjdHMgPSBkZWFkQW5kQWxpdmVbMV07XG4gIGZvciAoY29uc3Qgb2JqIGluIHRoaXMuZ2FtZU9iamVjdHMpIHtcbiAgICBjb25zdCBnYW1lT2JqZWN0ID0gdGhpcy5nYW1lT2JqZWN0c1tvYmpdO1xuICAgIGlmIChnYW1lT2JqZWN0LlRUTCAmJiBnYW1lT2JqZWN0LlRUTCA+IDApIHtcbiAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICBpZiAoIWdhbWVPYmplY3QubGFzdFRUTFRpY2sgfHwgKGdhbWVPYmplY3QubGFzdFRUTFRpY2sgJiYgbm93IC0gZ2FtZU9iamVjdC5sYXN0VFRMVGljayA+PSAxMDAwKSkge1xuICAgICAgICBnYW1lT2JqZWN0Lmxhc3RUVExUaWNrID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZ2FtZU9iamVjdC5UVEwgLT0gMTtcbiAgICAgICAgaWYgKGdhbWVPYmplY3QuVFRMIDw9IDApIHtcbiAgICAgICAgICBnYW1lT2JqZWN0LmRpc3Bvc2FibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdhbWVPYmplY3QudXBkYXRlKCk7XG4gICAgZ2FtZU9iamVjdC5kcmF3KCk7XG4gIH1cblxuICAvLyBydW4gY3VzdG9tIHVzZXIgY29kZVxuICB0aGlzLnRpbWVyU3RhcnQoJ29uVGljaycpO1xuICB0aGlzLm9uVGljayh0aGlzKTtcbiAgdGhpcy50aW1lclN0b3AoJ29uVGljaycpO1xuXG4gIHRoaXMudGltZXJTdG9wKCd0aWNrJyk7XG5cbiAgc2V0SW50ZXJ2YWwocmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljay5iaW5kKHRoaXMpKSwgMTAwMC90aGlzLmNvbmZpZy5mcHMpOyAgXG59XG5cbmV4cG9ydCB7XG4gIEVuZ2luZVxufTtcbiIsIlxuaW1wb3J0IHsgUG9pbnQyRCwgU2Nyb2xsYWJsZSB9IGZyb20gJy4uL2xpYi8yZCc7XG5cbmNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG5cdHg6IDAsXG5cdHk6IDAsXG5cdHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0aGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdHdyYXBwZXI6IHtcblx0XHRzZWxlY3RvcjogJyNjYW52YXMtd3JhcHBlcicsXG5cdFx0c3R5bGU6IHtcblx0XHRcdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3VyOiAnIzAwMDAwMCcsXG5cdFx0fVxuXHR9LFxuXHRjYW52YXM6IHtcblx0XHRzZWxlY3RvcjogJyNjYW52YXMtZWxlbWVudCcsXG5cdH0sXG5cdGFsaWFzOiAnY2FudmFzJ1xufTtcblxuY2xhc3MgQ2FudmFzMkQge1xuXHRjb25zdHJ1Y3RvcihjYW52YXNDb25maWcsIGdhbWVFbmdpbmUpIHtcblx0XHR0aGlzLmNvbmZpZyA9IGNhbnZhc0NvbmZpZyB8fCBkZWZhdWx0Q29uZmlnO1xuXHRcdHRoaXMuZ2FtZUVuZ2luZSA9IGdhbWVFbmdpbmU7XG5cdFx0dGhpcy5jYW52YXNSZWFkeSA9IGZhbHNlO1xuXHRcdHRoaXMuY2FudmFzV2lkdGggPSB0aGlzLmNvbmZpZy53aWR0aDtcblx0XHR0aGlzLmNhbnZhc0hlaWdodCA9IHRoaXMuY29uZmlnLmhlaWdodDtcblx0XHR0aGlzLmNhbnZhc0Nvb3JkaW5hdGVzID0gbmV3IFBvaW50MkQodGhpcy5jb25maWcueCwgdGhpcy5jb25maWcueSk7XG5cdFx0dGhpcy5jYW52YXNEcmF3YWJsZSA9IHtmcm9tOiBuZXcgUG9pbnQyRCgwLDApLCB0bzogbmV3IFBvaW50MkQodGhpcy5jb25maWcud2lkdGgsIHRoaXMuY29uZmlnLmhlaWdodCl9LFxuXHRcdHRoaXMuY2FudmFzQ29udGV4dCA9IG51bGw7XG5cdFx0dGhpcy5jYW52YXNJbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5jYW52YXNTY3JvbGxTY2FsZSA9IDA7XG5cdFx0dGhpcy5jYW52YXNTY3JvbGxEYXRhID0gbmV3IFNjcm9sbGFibGUobnVsbCwgMCwgMCk7XG5cdFx0dGhpcy5jYW52YXNGb2N1c09iamVjdCA9IG51bGw7XG5cdFx0dGhpcy5jYW52YXNBbGlhcyA9IHRoaXMuY29uZmlnLmFsaWFzO1xuXHRcdC8vIHNpemUgYW5kIHN0eWxlIHdyYXBwZXIgZGl2XG5cdFx0Y29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb25maWcud3JhcHBlci5zZWxlY3Rvcik7XG5cdFx0aWYgKHdyYXBwZXIpIHtcblx0XHRcdHdyYXBwZXIuc3R5bGUubGVmdCA9IHRoaXMuY29uZmlnLngudG9TdHJpbmcoKSArICdweCc7XG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IHRoaXMuY29uZmlnLnkudG9TdHJpbmcoKSArICdweCc7XG5cdFx0XHR3cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy5jb25maWcud2lkdGgudG9TdHJpbmcoKSArICdweCc7XG5cdFx0XHR3cmFwcGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuY29uZmlnLmhlaWdodC50b1N0cmluZygpICsgJ3B4Jztcblx0XHRcdHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29uZmlnLndyYXBwZXIuc3R5bGUuYmFja2dyb3VuZDtcblx0XHRcdHdyYXBwZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5jb25maWcud3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3VyO1xuXHRcdH1cblx0XHQvLyBzaXplIGNhbnZhcyB0byBtYXRjaCB3cmFwcGVyIGRpbWVuc2lvbnNcblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLmNhbnZhcy5zZWxlY3Rvcik7XG5cdFx0aWYgKGNhbnZhcykge1xuXHRcdFx0Y2FudmFzLnN0eWxlLmxlZnQgPSB0aGlzLmNvbmZpZy54LnRvU3RyaW5nKCkgKyAncHgnO1xuXHRcdFx0Y2FudmFzLnN0eWxlLnRvcCA9IHRoaXMuY29uZmlnLnkudG9TdHJpbmcoKSArICdweCc7XG5cdFx0XHRjYW52YXMud2lkdGggPSB0aGlzLmNvbmZpZy53aWR0aDtcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB0aGlzLmNvbmZpZy5oZWlnaHQ7XG5cdFx0fVxuXHR9XG5cdC8qIGdldHRlcnMgKi9cblx0Z2V0IGlzUmVhZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FudmFzUmVhZHk7XG5cdH1cblx0Z2V0IGFsaWFzKCkge1xuXHRcdHJldHVybiB0aGlzLmNhbnZhc0FsaWFzO1xuXHR9XG5cdGdldCB3aWR0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jYW52YXNXaWR0aDtcblx0fVxuXHRnZXQgaGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLmNhbnZhc0hlaWdodDtcblx0fVxuXHRnZXQgY29vcmRpbmF0ZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FudmFzQ29vcmRpbmF0ZXM7XG5cdH1cblx0Z2V0IHNlbGVjdG9yKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5jYW52YXMuc2VsZWN0b3I7XG5cdH1cblx0Z2V0IGNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FudmFzQ29udGV4dDtcblx0fVxuXHRnZXQgY2VudHJlKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQyRCh0aGlzLmNhbnZhc0NvcmRpbmF0ZXMueCArICh0aGlzLmNhbnZhc1dpZHRoIC8gMiksIHRoaXMuY2FudmFzQ29vcmRpbmF0ZXMueSArICh0aGlzLmNhbnZhc0hlaWdodCAvIDIpKTtcblx0fVxuXHRnZXQgc2Nyb2xsRGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jYW52YXNTY3JvbGxEYXRhO1xuXHR9XG5cdGdldCBmb2N1c3NlZE9iamVjdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jYW52YXNGb2N1c09iamVjdDtcblx0fVxuXG5cdC8qIHNldHRlcnMgKi9cblx0c2V0IGNvbnRleHQoY29udGV4dFJlZikge1xuXHRcdHRoaXMuY2FudmFzQ29udGV4dCA9IGNvbnRleHRSZWY7XG5cdH1cblx0c2V0IHNjcm9sbERhdGEoc2Nyb2xsRGF0YU9iaikge1xuXHRcdHRoaXMuY2FudmFzU2Nyb2xsRGF0YSA9IHNjcm9sbERhdGFPYmo7XG5cdH1cbn07XG5cbkNhbnZhczJELnByb3RvdHlwZS5sb2FkSW1hZ2UgPSBmdW5jdGlvbihpbWFnZVBhdGgsIG9uTG9hZCkge1xuXHRyZXR1cm4gdGhpcy5nYW1lRW5naW5lLmltYWdlcy5sb2FkKGltYWdlUGF0aCwgb25Mb2FkKTtcbn1cblxuQ2FudmFzMkQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihmaWxsSW1hZ2UsIGNhbGxCYWNrKSB7XG5cdGlmICh0aGlzLmNvbmZpZy5jYW52YXMuc2VsZWN0b3IgJiYgIXRoaXMuY2FudmFzQ29udGV4dCkge1xuXHRcdGNvbnN0IGNhbnZhc0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29uZmlnLmNhbnZhcy5zZWxlY3Rvcik7XG5cdFx0aWYgKGNhbnZhc0VsZW0pIHtcblx0XHRcdHRoaXMuY2FudmFzQ29udGV4dCA9IGNhbnZhc0VsZW0uZ2V0Q29udGV4dCgnMmQnKTtcblx0XHR9XG5cdH1cblx0aWYgKGZpbGxJbWFnZSB8fCB0aGlzLmNvbmZpZy5jYW52YXMuaW1hZ2UpIHtcblx0XHR0aGlzLmNhbnZhc0ltYWdlID0gdGhpcy5sb2FkSW1hZ2UoKGZpbGxJbWFnZSB8fCB0aGlzLmNvbmZpZy5jYW52YXMuaW1hZ2UpLCBjYWxsQmFjayk7XHRcdFxuXHR9XG5cdHRoaXMuY2FudmFzUmVhZHkgPSAhIXRoaXMuY2FudmFzQ29udGV4dDtcdFxufTtcblxuQ2FudmFzMkQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oZnJvbVBvaW50LCB0b1BvaW50KSB7XG5cdGlmICghdGhpcy5jYW52YXNDb250ZXh0KSByZXR1cm47XG5cdHRoaXMuY2FudmFzQ29udGV4dC5jbGVhclJlY3QoKGZyb21Qb2ludCAmJiBmcm9tUG9pbnQueCkgfHwgMCwgXG5cdFx0KGZyb21Qb2ludCAmJiBmcm9tUG9pbnQueSkgfHwgMCwgXG5cdFx0KHRvUG9pbnQgJiYgdG9Qb2ludC54KSB8fCB0aGlzLndpZHRoLCBcblx0XHQodG9Qb2ludCAmJiB0b1BvaW50LnkpIHx8IHRoaXMuaGVpZ2h0XG5cdCk7XG59O1xuXG5DYW52YXMyRC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuY2FudmFzUmVhZHkgfHwgIXRoaXMuY2FudmFzQ29udGV4dCkgcmV0dXJuO1xuXHR0aGlzLmNsZWFyKCk7XG5cdHRoaXMuY2FudmFzSW1hZ2UgJiYgdGhpcy5jYW52YXNDb250ZXh0LmRyYXdJbWFnZShcblx0XHR0aGlzLmNhbnZhc0ltYWdlLCBcblx0XHQwLFxuXHRcdDAsXG5cdFx0dGhpcy5jYW52YXNXaWR0aCwgXG5cdFx0dGhpcy5jYW52YXNIZWlnaHQpO1xufTtcblxuQ2FudmFzMkQucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24oZ2FtZU9iamVjdCkge1xuXHRpZiAoIWdhbWVPYmplY3QpIHJldHVybjtcblx0aWYgKHRoaXMuY2FudmFzRm9jdXNPYmplY3QgPT09IGdhbWVPYmplY3QpIHJldHVybjtcblx0dGhpcy5jYW52YXNGb2N1c09iamVjdCA9IGdhbWVPYmplY3Q7XG5cdHRoaXMuY2FudmFzQ29vcmRpbmF0ZXMueCA9IGdhbWVPYmplY3QuY29vcmRpbmF0ZXMuY2VudHJlLnggLSAodGhpcy5jYW52YXNXaWR0aCAvIDIpO1xuXHR0aGlzLmNhbnZhc0Nvb3JkaW5hdGVzLnkgPSBnYW1lT2JqZWN0LmNvb3JkaW5hdGVzLmNlbnRyZS55IC0gKHRoaXMuY2FudmFzSGVpZ2h0IC8gMik7XG59O1xuXG5DYW52YXMyRC5wcm90b3R5cGUuc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmNhbnZhc0Nvb3JkaW5hdGVzLnggKz0gdGhpcy5jYW52YXNTY3JvbGxEYXRhLnZlbG9jaXR5Lng7XG5cdHRoaXMuY2FudmFzQ29vcmRpbmF0ZXMueSArPSB0aGlzLmNhbnZhc1Njcm9sbERhdGEudmVsb2NpdHkueTtcbn07XG5cbkNhbnZhczJELnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGhlYWRpbmcpIHtcblx0Y29uc3QgeDEgPSB4O1xuXHRjb25zdCB5MSA9IHk7XG5cdGNvbnN0IHgyID0geCArIHdpZHRoO1xuXHRjb25zdCB5MiA9IHkgKyBoZWlnaHQ7XG5cdGNvbnN0IGN4ID0geDEgKyB3aWR0aCAvIDI7XG5cdGNvbnN0IGN5ID0geTEgKyBoZWlnaHQgLyAyO1xuXG5cdGNvbnN0IHAxID0gaGVhZGluZyA/IFxuXHRcdHJvdGF0ZVBvaW50KGN4LCBjeSwgeDEsIHkxLCBoZWFkaW5nKSA6XG5cdFx0bmV3IFBvaW50MkQoeDEsIHkxKTtcblx0XG5cdGNvbnN0IHAyID0gaGVhZGluZyA/XG5cdFx0cm90YXRlUG9pbnQoY3gsIGN5LCB4MiwgeTIsIGhlYWRpbmcpIDpcblx0XHRuZXcgUG9pbnQyRCh4MiwgeTIpO1xuXG5cdGNvbnN0IGlzQ29udGFpbmVkID1cblx0XHR0aGlzLmNhbnZhc0ZvY3VzT2JqZWN0ID9cblx0XHRcdHAxLnggPj0gdGhpcy5jYW52YXNGb2N1c09iamVjdC5jb29yZGluYXRlcy54IC0gdGhpcy5jYW52YXNXaWR0aCAvIDIgJiYgXG5cdFx0XHRwMS55ID49IHRoaXMuY2FudmFzRm9jdXNPYmplY3QuY29vcmRpbmF0ZXMueSAtIHRoaXMuY2FudmFzSGVpZ2h0IC8gMiAmJiBcblx0XHRcdHAyLnggPD0gdGhpcy5jYW52YXNGb2N1c09iamVjdC5jb29yZGluYXRlcy54ICsgdGhpcy5jYW52YXNXaWR0aCAvIDIgJiZcblx0XHRcdHAyLnkgPD0gdGhpcy5jYW52YXNGb2N1c09iamVjdC5jb29yZGluYXRlcy55ICsgdGhpcy5jYW52YXNIZWlnaHQgLyAyXG5cdFx0OlxuXHRcdFx0cDEueCA+PSB0aGlzLmNhbnZhc0RyYXdhYmxlLmZyb20ueCAmJlxuXHRcdFx0cDEueSA+PSB0aGlzLmNhbnZhc0RyYXdhYmxlLmZyb20ueSAmJlxuXHRcdFx0cDIueCA8PSB0aGlzLmNhbnZhc0RyYXdhYmxlLnRvLnggJiZcblx0XHRcdHAyLnkgPD0gdGhpcy5jYW52YXNEcmF3YWJsZS50by55O1xuXG5cdHJldHVybiBpc0NvbnRhaW5lZDtcbn07XG5cbkNhbnZhczJELnByb3RvdHlwZS5jb250YWluc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuXHRpZiAodGhpcy5jYW52YXNGb2N1c09iamVjdCA9PT0gb2JqKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGFpbnMoXG5cdFx0XHRvYmouY29vcmRpbmF0ZXMueCwgXG5cdFx0XHRvYmouY29vcmRpbmF0ZXMueSwgXG5cdFx0XHRvYmoud2lkdGgsIFxuXHRcdFx0b2JqLmhlaWdodCwgXG5cdFx0XHRvYmoucm90YXRpb25cblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQge1xuICBDYW52YXMyRFxufTtcbiIsIlxuZXhwb3J0ICogZnJvbSAnLi9lbmdpbmUvZW5naW5lJztcbmV4cG9ydCAqIGZyb20gJy4vZW52aXJvbm1lbnQvY2FudmFzJztcbmV4cG9ydCAqIGZyb20gJy4vbGliLzJkJztcbmV4cG9ydCAqIGZyb20gJy4vbGliLzNkJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2F1ZGlvJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2V2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9mc20nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbWF0aCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9wYXJ0aXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbC9nYW1lT2JqZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwvc3ByaXRlJztcbmV4cG9ydCAqIGZyb20gJy4vdWkvZ2FtZXBhZCc7XG5leHBvcnQgKiBmcm9tICcuL3VpL2tleXMnO1xuZXhwb3J0ICogZnJvbSAnLi91aS90b3VjaCc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzL2ltYWdlJztcbiIsIlxuY2xhc3MgUG9pbnQyRCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLl94ID0geDtcbiAgICB0aGlzLl95ID0geTtcbiAgfVxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5feDtcbiAgfVxuICBnZXQgeSgpIHtcbiAgICByZXR1cm4gdGhpcy5feTtcbiAgfVxuICBzZXQgeCh4TmV3KSB7XG4gICAgdGhpcy5feCA9IHhOZXc7XG4gIH1cbiAgc2V0IHkoeU5ldykge1xuICAgIHRoaXMuX3kgPSB5TmV3O1xuICB9XG59XG5cblBvaW50MkQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQyZCh0aGlzLl94LCB0aGlzLl95KTtcbn1cblxuUG9pbnQyRC5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24ocDJkQ2VudHJlLCBkZWdyZWVzKSB7XG4gIC8vcm90YXRlIGNvdW50ZXJjbG9ja3dpc2VcbiAgY29uc3QgciA9IFtdO1xuICBjb25zdCB4ID0gdGhpcy5feCAtIHAyZENlbnRyZS54O1xuICBjb25zdCB5ID0gdGhpcy5feSAtIHAyZENlbnRyZS55O1xuICBjb25zdCByYWRzID0gZGVncmVlc1RvUmFkaWFucyhkZWdyZWVzKTtcbiAgclswXSA9IHggKiBNYXRoLmNvcyhyYWRzKSAtIHkgKiBNYXRoLnNpbihyYWRzKTtcbiAgclsxXSA9IHggKiBNYXRoLnNpbihyYWRzKSArIHkgKiBNYXRoLmNvcyhyYWRzKTtcbiAgclswXSArPSBwMmRDZW50cmUueDtcbiAgclsxXSArPSBwMmRDZW50cmUueTtcbiAgdGhpcy5feCA9IHJbMF07XG4gIHRoaXMuX3kgPSByWzFdO1xufVxuXG5jbGFzcyBWZWN0b3IyRCBleHRlbmRzIFBvaW50MkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICBzdXBlcih4LCB5KTtcbiAgfVxuICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLmFicyh0aGlzLl94KV4yICsgTWF0aC5hYnModGhpcy5feSleMik7XG4gIH1cbn1cblxuVmVjdG9yMkQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHYyZCkge1xuICB0aGlzLl94ICs9IHYyZC54O1xuICB0aGlzLl95ICs9IHYyZC55O1xufVxuXG5WZWN0b3IyRC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbih2MmQpIHtcbiAgdGhpcy5feCAtPSB2MmQueDtcbiAgdGhpcy5feSAtPSB2MmQueTtcbn1cblxuVmVjdG9yMkQucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24obikge1xuICB0aGlzLl94ICo9IG47XG4gIHRoaXMuX3kgKj0gbjtcbn1cblxuVmVjdG9yMkQucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uKHYyZCkge1xuICB0aGlzLl94ICo9IHYyZC54O1xuICB0aGlzLl95ICo9IHYyZC55O1xufVxuXG5WZWN0b3IyRC5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbih2MmQpIHtcbiAgdGhpcy5feCAqPSB2MmQueTtcbiAgdGhpcy5feSAqPSB2MmQueDtcbn1cblxuVmVjdG9yMkQucHJvdG90eXBlLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aCA+IDAgPyAoMSAvIHRoaXMubGVuZ3RoKSA6IHRoaXMubGVuZ3RoO1xuICB0aGlzLl94ICo9IGxlbjtcbiAgdGhpcy5feSAqPSBsZW47XG59XG5cblZlY3RvcjJELnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uKHYyZCkge1xuICBjb25zdCB4ID0gdGhpcy5feCAtIHYyZC54O1xuICBjb25zdCB5ID0gdGhpcy5feSAtIHYyZC55O1xuICByZXR1cm4gTWF0aC5zcXJ0KHheMiArIHleMik7XG59XG5cblZlY3RvcjJELnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFZlY3RvcjJkKHRoaXMuX3gsIHRoaXMuX3kpO1xufVxuXG5jbGFzcyBTY3JvbGxhYmxlIHtcblx0Y29uc3RydWN0b3IoYW5jaG9yT2JqZWN0LCB2eCwgdnkpIHtcblx0XHR0aGlzLl9hbmNob3IgPSBhbmNob3JPYmplY3Q7XG5cdFx0dGhpcy5fdmVsb2NpdHkgPSBuZXcgUG9pbnQyRCh0aGlzLl9hbmNob3IgJiYgKHRoaXMuX2FuY2hvci52ZWxvY2l0eS54IHx8IHZ4IHx8IDApLCB0aGlzLl9hbmNob3IgJiYgKHRoaXMuX2FuY2hvci52ZWxvY2l0eS55IHx8IHZ5IHx8IDApKTtcblx0fVxuXG5cdGdldCBhbmNob3IoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2FuY2hvcjtcblx0fVxuXHRnZXQgdmVsb2NpdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZlbG9jaXR5O1xuXHR9XG5cblx0c2V0IGFuY2hvcihhbmNob3JPYmplY3QpIHtcblx0XHR0aGlzLl9hbmNob3IgPSBhbmNob3JPYmplY3Q7XG5cdH1cblx0c2V0IHZlbG9jaXR5KHBvaW50MkQpIHtcblx0XHR0aGlzLl92ZWxvY2l0eSA9IHBvaW50MkQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyhvYmpBLCBvYmpCKSB7XG4gIGNvbnN0IGR4ID0gKG9iakEuY29vcmRpbmF0ZXMueCArIG9iakEuY2VudHJlLngpIC0gKG9iakIuY29vcmRpbmF0ZXMueCArIG9iakIuY2VudHJlLngpO1xuICBjb25zdCBkeSA9IChvYmpBLmNvb3JkaW5hdGVzLnkgKyBvYmpBLmNlbnRyZS55KSAtIChvYmpCLmNvb3JkaW5hdGVzLnkgKyBvYmpCLmNlbnRyZS55KTtcbiAgcmV0dXJuIE1hdGguc3FydCgoZHggKiBkeCkgKyAoZHkgKiBkeSkpO1xufVxuXG5mdW5jdGlvbiBkaXN0YW5jZUJldHdlZW5Qb2ludHMocG9pbnRBLCBwb2ludEIpIHtcbiAgY29uc3QgZHggPSBwb2ludEEueCAtIHBvaW50Qi54O1xuICBjb25zdCBkeSA9IHBvaW50QS55IC0gcG9pbnRCLnk7XG4gIHJldHVybiBNYXRoLnNxcnQoKGR4ICogZHgpICsgKGR5ICogZHkpKTsgIFxufVxuXG5mdW5jdGlvbiBhbmdsZUJldHdlZW4oeDEsIHkxLCB4MiwgeTIpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeTEgLSB5MiwgeDEgLSB4MikgKiAoMTgwLjAgLyBNYXRoLlBJKTtcbn1cblxuZnVuY3Rpb24gYW5nbGVEaWZmZXJlbmNlKGExLCBhMikge1xuICByZXR1cm4gKCgoKGExIC0gYTIpICUgMzYwKSArIDU0MCkgJSAzNjApIC0gMTgwO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG59XG5cbmZ1bmN0aW9uIGRpcl94KGxlbmd0aCwgYW5nbGUpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIE1hdGguY29zKGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpKTtcbn1cblxuZnVuY3Rpb24gZGlyX3kobGVuZ3RoLCBhbmdsZSkge1xuICByZXR1cm4gbGVuZ3RoICogTWF0aC5zaW4oZGVncmVlc1RvUmFkaWFucyhhbmdsZSkpO1xufVxuXG5mdW5jdGlvbiByb3RhdGVQb2ludChjeCwgY3ksIHB4LCBweSwgZGVncmVlcylcbntcbiAgY29uc3QgZGVnID0gKGRlZ3JlZXMgPiAzNTkpID8gKGRlZ3JlZXMgLSAzNTkpIDogZGVncmVlcyB8fCAwO1xuICBjb25zdCBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoZGVnKTtcbiAgY29uc3QgcyA9IE1hdGguc2luKGFuZ2xlKTtcbiAgY29uc3QgYyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3QgcCA9IG5ldyBQb2ludDJkKHB4LHB5KTtcblxuICAvLyB0cmFuc2xhdGUgcG9pbnQgYmFjayB0byBvcmlnaW46XG4gIHAueCAtPSBjeDtcbiAgcC55IC09IGN5O1xuXG4gIC8vIHJvdGF0ZSBwb2ludFxuICBjb25zdCB4bmV3ID0gcC54ICogYyAtIHAueSAqIHM7XG4gIGNvbnN0IHluZXcgPSBwLnggKiBzICsgcC55ICogYztcblxuICAvLyB0cmFuc2xhdGUgcG9pbnQgYmFjazpcbiAgcC54ID0geG5ldyArIGN4O1xuICBwLnkgPSB5bmV3ICsgY3k7XG4gIFxuICByZXR1cm4gcDtcbn1cblxuZXhwb3J0IHtcbiAgUG9pbnQyRCxcbiAgVmVjdG9yMkQsXG4gIFNjcm9sbGFibGVcbn07XG4iLCJpbXBvcnQgeyBQb2ludDJEIH0gZnJvbSAnLi8yZCc7XG5cbmNsYXNzIFBvaW50M0QgZXh0ZW5kcyBQb2ludDJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICB0aGlzLl96ID0gejtcbiAgfVxuICBnZXQgeCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94O1xuICB9XG4gIGdldCB5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3k7XG4gIH1cbiAgZ2V0IHooKSB7XG4gICAgICByZXR1cm4gdGhpcy5fejtcbiAgfVxuICBzZXQgeCh2YWwpIHtcbiAgICAgIHRoaXMuX3ggPSB2YWw7XG4gIH1cbiAgc2V0IHkodmFsKSB7XG4gICAgICB0aGlzLl95ID0gdmFsO1xuICB9XG4gIHNldCB6KHZhbCkge1xuICAgICAgdGhpcy5feiA9IHZhbDtcbiAgfVxufVxuXG5Qb2ludDNELnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50M0QodGhpcy5feCwgdGhpcy5feSwgdGhpcy5feik7XG59XG5cbmV4cG9ydCB7IFxuICBQb2ludDNEXG59O1xuIiwiLy8gYmFzZWQgb24gZXhhbXBsZSBmcm9tXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzQzNDUwL2dlbmVyYXRpbmctc291bmQtb24tdGhlLWZseS13aXRoLWphdmFzY3JpcHQtaHRtbDVcblxuY29uc3QgZXhhbXBsZUVmZmVjdHMgPSB7XG4gICdwaW5nJzoge1xuICAgIHR5cGU6ICdzaW5lJyxcbiAgICBmcmVxdWVuY3k6IDI0MDAsXG4gICAgdm9sdW1lOiAwLjUsXG4gICAgZHVyYXRpb246IDEwMCAgXG4gIH1cbn07XG5cbmNsYXNzIEF1ZGlvRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoY29uZmlnKXtcbiAgICB0aGlzLmNuZiA9IGNvbmZpZztcbiAgICB0aGlzLnN5cyA9IHVuZGVmaW5lZDtcbiAgfVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmlkO1xuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuY25mO1xuICB9XG4gIGdldCBzeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3lzO1xuICB9XG4gIHNldCBzeXN0ZW0odmFsdWUpIHtcbiAgICB0aGlzLnN5cyA9IHZhbHVlO1xuICB9XG59XG5cbmNsYXNzIEF1ZGlvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdHggPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICB0aGlzLm9zYyA9IG51bGw7XG4gICAgdGhpcy5zbmRzID0gW107XG4gICAgdGhpcy5meCA9IFtdO1xuICB9XG4gIGdldCBjb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmN0eDtcbiAgfVxuICBnZXQgb3NjaWxsYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5vc2M7XG4gIH1cbiAgZ2V0IGVmZmVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZng7XG4gIH1cbiAgZ2V0IHNvdW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5zbmRzO1xuICB9XG59XG5cbkF1ZGlvLnByb3RvdHlwZS5pc0VmZmVjdFJlZ2lzdGVyZWQgPSBmdW5jdGlvbihlZmZlY3RJZCkge1xuICBpZiAodGhpcy5meC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRoaXMuZnguZmlsdGVyKGZ1bmN0aW9uKGVmZmVjdCkgeyByZXR1cm4gZWZmZWN0LmlkID09IGVmZmVjdElkOyB9KS5sZW5ndGggPiAwOyAgXG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSBcblxuQXVkaW8ucHJvdG90eXBlLmFkZEVmZmVjdCA9IGZ1bmN0aW9uKGF1ZGlvRWZmZWN0KSB7XG4gIGlmICghdGhpcy5pc0VmZmVjdFJlZ2lzdGVyZWQoYXVkaW9FZmZlY3QuaWQpKSB7XG4gICAgYXVkaW9FZmZlY3Quc3lzdGVtID0gdGhpcztcbiAgICB0aGlzLmZ4LnB1c2goYXVkaW9FZmZlY3QpO1xuICB9XG59XG5cbkF1ZGlvLnByb3RvdHlwZS5nZXRFZmZlY3QgPSBmdW5jdGlvbihlZmZlY3RJZCkge1xuICByZXR1cm4gdGhpcy5meC5maWx0ZXIoZnVuY3Rpb24oZWZmZWN0KSB7XG4gICAgcmV0dXJuIGVmZmVjdC5pZCA9PSBlZmZlY3RJZDtcbiAgfSlbMF07XG59XG5cbkF1ZGlvLnByb3RvdHlwZS5yZW1vdmVFZmZlY3QgPSBmdW5jdGlvbihlZmZlY3RJZCkge1xuICB0aGlzLmZ4ID0gdGhpcy5meC5maWx0ZXIoZnVuY3Rpb24oZWZmZWN0KSB7XG4gICAgcmV0dXJuIGVmZmVjdC5pZCAhPSBlZmZlY3RJZDtcbiAgfSlbMF07XG59XG5cbkF1ZGlvLnByb3RvdHlwZS5wbGF5RWZmZWN0ID0gZnVuY3Rpb24oZWZmZWN0SWQsIGRlbGF5LCBkdXJhdGlvbikge1xuICBjb25zdCBlZmZlY3QgPSB0aGlzLmdldEVmZmVjdChlZmZlY3RJZCk7XG4gIGlmIChlZmZlY3QpIHtcbiAgICBpZiAodGhpcy5vc2MpIHtcbiAgICAgIC8vIGNsb3NlIGl0IGRvd24gYmVmb3JlIHN0YXJ0aW5nIGEgbmV3IHRvbmVcbiAgICAgIHRoaXMub3NjLnN0b3AodGhpcy5jdHguY3VycmVudFRpbWUpO1xuICAgICAgdGhpcy5vc2MuZGlzY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgICB0aGlzLm9zYyA9IG51bGw7ICBcbiAgICB9XG4gICAgLy8gc3RhcnRcbiAgICB0aGlzLm9zYyA9IHRoaXMuY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTtcbiAgICB0aGlzLm9zYy5mcmVxdWVuY3kudmFsdWUgPSBlZmZlY3QuY29uZmlnLmZyZXF1ZW5jeTtcbiAgICBjb25zdCBzdGFydE9mZnNldCA9IChkZWxheSB8fCAoZWZmZWN0LmNvbmZpZy5kZWxheSB8fCAwKSkgLyAxMDAwO1xuICAgIGNvbnN0IHN0b3BPZmZzZXQgPSAoZGVsYXkgfHwgKGVmZmVjdC5jb25maWcuZGVsYXkgfHwgMCkpICsgKGR1cmF0aW9uIHx8IChlZmZlY3QuY29uZmlnLmR1cmF0aW9uIHx8IDApKSAvIDEwMDA7XG4gICAgdGhpcy5vc2Muc3RhcnQodGhpcy5jdHguY3VycmVudFRpbWUgKyBzdGFydE9mZnNldCk7XG4gICAgdGhpcy5vc2MuY29ubmVjdCh0aGlzLmN0eC5kZXN0aW5hdGlvbik7XG4gICAgLy8gc3RvcFxuICAgIHRoaXMub3NjLnN0b3AodGhpcy5jdHguY3VycmVudFRpbWUgKyBzdG9wT2Zmc2V0KTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBBdWRpbyxcbiAgQXVkaW9FZmZlY3Rcbn1cbiIsIi8vIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE1MzA4MzcxL2N1c3RvbS1ldmVudHMtbW9kZWwtd2l0aG91dC11c2luZy1kb20tZXZlbnRzLWluLWphdmFzY3JpcHRcblxuY2xhc3MgRXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cbn1cbkV2ZW50LnByb3RvdHlwZS5yZWdpc3RlckNhbGxiYWNrID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICB0aGlzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbn1cblxuY2xhc3MgUmVhY3RvcntcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgfVxufVxuXG5SZWFjdG9yLnByb3RvdHlwZS5yZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lKXtcbiAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudDtcbn07XG5cblJlYWN0b3IucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50QXJncyl7XG4gIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgIGNhbGxiYWNrKGV2ZW50QXJncyk7XG4gIH0pO1xufTtcblxuUmVhY3Rvci5wcm90b3R5cGUuZGVSZWdpc3RlckV2ZW50ID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG4gIH1cbn07XG5cblJlYWN0b3IucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKXtcbiAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZWdpc3RlckNhbGxiYWNrKGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCB7XG4gICBSZWFjdG9yXG59O1xuIiwiXG5jbGFzcyBGU00ge1xuXHRjb25zdHJ1Y3Rvcihob3N0LCBzdGF0ZXMpIHtcbiAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgIHRoaXMuc3RhdGVzID0gc3RhdGVzLl9fcHJvdG9fXy5oYXNPd25Qcm9wZXJ0eSgnYXBwbHknKSA/IHN0YXRlcygpIDogc3RhdGVzO1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZXMuZGVmYXVsdDtcbiAgICB0aGlzLmxhc3RUcmFuc2l0aW9uVGltZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhc3RFeGVjdXRpb25UaW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cbkZTTS5wcm90b3R5cGUuZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2dCkgeyBcbiAgc3dpdGNoIChldnQuYWN0aW9uKSB7XG4gICAgY2FzZSAnU0VUJzpcbiAgICAgIHRoaXMuc2V0U3RhdGUoZXZ0LnN0YXRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0VYRUNVVEUnOlxuICAgICAgaWYgKGV2dC5zdGF0ZSAmJiBldnQuc3RhdGUuZXhlY3V0ZSkge1xuICAgICAgICBldnQuc3RhdGUuZXhlY3V0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdUUkFOU0lUSU9OJzpcbiAgICAgIGlmIChldnQuc3RhdGUpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKGV2dC5zdGF0ZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5GU00ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbigpIHsgIFxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBpZiAoIXRoaXMuaG9zdCkge1xuICAgIC8vIFd1dD8hXG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghdGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9ICh0aGlzLnN0YXRlcy5kZWZhdWx0ID8gdGhpcy5zdGF0ZXMuZGVmYXVsdCA6IHVuZGVmaW5lZCk7XG4gIH0gXG4gIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5jdXJyZW50U3RhdGUgJiYgdGhpcy5jdXJyZW50U3RhdGUuZXhlY3V0ZSkge1xuICAgIGlmICgodGhpcy5sYXN0RXhlY3V0aW9uVGltZSB8fCAwKSArICh0aGlzLmN1cnJlbnRTdGF0ZS5taW5pbXVtRXhlY3V0aW9uSW50ZXJ2YWwgfHwgMCkgPD0gbm93KSB7XG4gICAgICB0aGlzLmxhc3RFeGVjdXRpb25UaW1lID0gbm93O1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUuZXhlY3V0ZSh0aGlzLmhvc3QpO1xuICAgIH1cblx0fVxufVxuXG5GU00ucHJvdG90eXBlLnB1c2hTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zYXZlZFN0YXRlID0gdGhpcy5jdXJyZW50U3RhdGU7XG59XG5cbkZTTS5wcm90b3R5cGUucG9wU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLnNhdmVkU3RhdGU7XG4gIHRoaXMuc2F2ZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbn1cblxuRlNNLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gIGlmICghdGhpcy5ob3N0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gIHRoaXMubGFzdFRyYW5zaXRpb25UaW1lID0gbm93O1xuICB0aGlzLnN0YXJ0VGltZSA9IG5vdztcbiAgdGhpcy5sYXN0RXhlY3V0aW9uVGltZSA9IHVuZGVmaW5lZDtcbn1cblxuRlNNLnByb3RvdHlwZS50cmFuc2l0aW9uID0gZnVuY3Rpb24obmV3U3RhdGUsIGZvcmNlKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSAmJiB0aGlzLmN1cnJlbnRTdGF0ZS5uZXh0U3RhdGVzLmluY2x1ZGVzKG5ld1N0YXRlLm5hbWUpIHx8IG5ld1N0YXRlLmZvcmNlIHx8IGZvcmNlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgaWYgKG5ld1N0YXRlLmV4ZWN1dGVPblRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBGU00gfTsiLCJleHBvcnQgZnVuY3Rpb24gcmFuZEludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZChtYXgpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kUmFuZ2VJbnQobWluLCBtYXgpIHtcbiAgY29uc3QgciA9IHJhbmQobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IociA8IG1pbiA/IG1pbiA6IHIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZChtYXgsIGluY05lZ2F0aXZlcyA9IGZhbHNlKSB7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIG1heCkgKiAoaW5jTmVnYXRpdmVzID8gKE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IC0xIDogMSkgOiAxKTtcbn07XG4iLCIvLyAvKipcbi8vICAqIFBhcnRpdGlvbnMgdGhlIGVsZW1lbnRzIGludG8gdHdvIGdyb3VwczogdGhvc2UgZm9yIHdoaWNoIHRoZSBpdGVyYXRvciByZXR1cm5zXG4vLyAgKiB0cnVlLCBhbmQgdGhvc2UgZm9yIHdoaWNoIGl0IHJldHVybnMgZmFsc2UuXG4vLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRvclxuLy8gICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBPcHRpb25hbCBjb250ZXh0IHBhcmFtZXRlciB0byBiZVxuLy8gICogdXNlZCBhcyBgdGhpc2Agd2hlbiBjYWxsaW5nIHRoZSBpdGVyYXRvciBmdW5jdGlvbi5cbi8vICAqXG4vLyAgKiBAdHlwZSBBcnJheVxuLy8gICogQHJldHVybnMgQW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgW3RydWVDb2xsZWN0aW9uLCBmYWxzZUNvbGxlY3Rpb25dXG4vLyAgKi9cbi8vIEFycmF5LnByb3RvdHlwZS5wYXJ0aXRpb24gPSBmdW5jdGlvbihpdGVyYXRvciwgY29udGV4dCkge1xuLy8gICB2YXIgdHJ1ZUNvbGxlY3Rpb24gPSBbXTtcbi8vICAgdmFyIGZhbHNlQ29sbGVjdGlvbiA9IFtdO1xuIFxuLy8gXHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuLy8gICAgIGlmKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgdGhpc1tpXSkpIHtcbi8vICAgICAgIHRydWVDb2xsZWN0aW9uLnB1c2godGhpc1tpXSk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGZhbHNlQ29sbGVjdGlvbi5wdXNoKHRoaXNbaV0pO1xuLy8gICAgIH1cbi8vIFx0fSBcbiBcbi8vICAgcmV0dXJuIFt0cnVlQ29sbGVjdGlvbiwgZmFsc2VDb2xsZWN0aW9uXTtcbi8vIH07XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihhcnJheSwgdGVzdCkge1xuICBjb25zdCB0cnVlQ29sbGVjdGlvbiA9IFtdO1xuICBjb25zdCBmYWxzZUNvbGxlY3Rpb24gPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRlc3QoYXJyYXlbaV0pKSB7XG4gICAgICB0cnVlQ29sbGVjdGlvbi5wdXNoKGFycmF5W2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmFsc2VDb2xsZWN0aW9uLnB1c2goYXJyYXlbaV0pO1xuICAgIH1cblx0fSBcbiBcbiAgcmV0dXJuIFt0cnVlQ29sbGVjdGlvbiwgZmFsc2VDb2xsZWN0aW9uXTtcbn1cblxuZXhwb3J0IHsgXG4gIHBhcnRpdGlvblxufTsiLCJjb25zdCB1dWlkdjQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5pbXBvcnQgeyBWZWN0b3IyRCwgUG9pbnQyRCB9IGZyb20gJy4uL2xpYi8yZCc7XG5pbXBvcnQgeyBGU00gfSBmcm9tICcuLi9saWIvZnNtJztcbmltcG9ydCB7IEF1ZGlvRWZmZWN0IH0gZnJvbSAnLi4vbGliL2F1ZGlvJztcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL21vZGVsL3Nwcml0ZSc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJ3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XG5cdGNvbnN0cnVjdG9yKGNvbmYsIHBvc2l0aW9uLCBlbmdpbmUpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblx0XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3YWJsZSA9IGZhbHNlOyAgICBcblx0XHR0aGlzLmlkID0gdXVpZHY0KCk7XG5cdFx0dGhpcy5lbmdpbmUuZXZlbnRTeXN0ZW0ucmVnaXN0ZXJFdmVudChgJHt0aGlzLmlkfS1Mb2FkZWRgKTtcblx0XHR0aGlzLmVuZ2luZS5ldmVudFN5c3RlbS5hZGRFdmVudExpc3RlbmVyKGAke3RoaXMuaWR9LUxvYWRlZGAsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmNvbmYgPSBjb25mO1xuICAgIHRoaXMuY29uZi5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMuY29vcmRpbmF0ZXMgPSB0aGlzLmNvbmYucG9zaXRpb24gPyBuZXcgUG9pbnQyRCh0aGlzLmNvbmYucG9zaXRpb24ueCwgdGhpcy5jb25mLnBvc2l0aW9uLnkpIDogdW5kZWZpbmVkO1xuXHRcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMkQoXG5cdFx0XHQodGhpcy5jb25mLmluaXRpYWxWZWxvY2l0eSAmJiB0aGlzLmNvbmYuaW5pdGlhbFZlbG9jaXR5LngpID8gdGhpcy5jb25mLmluaXRpYWxWZWxvY2l0eS54IDogMCwgXG5cdFx0XHQodGhpcy5jb25mLmluaXRpYWxWZWxvY2l0eSAmJiB0aGlzLmNvbmYuaW5pdGlhbFZlbG9jaXR5LnkpID8gdGhpcy5jb25mLmluaXRpYWxWZWxvY2l0eS55IDogMFxuXHRcdCk7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuY29uZi53aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuY29uZi5oZWlnaHQ7XG5cdFx0dGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgIHRoaXMuc3ByaXRlcyA9IFtdO1x0ICAgIC8vIC0tfFxcIHdpbGwgYmUgbG9hZGVkIGR1cmluZyB0aGUgaW5pdCBjYWxsIHRyaWdnZXJlZCBcbiAgICB0aGlzLnNvdW5kRWZmZWN0cyA9IFtdOyAvLyAtLXwvIGJ5IHRoZSB4eHgtTG9hZGVkIGV2ZW50XG4gICAgdGhpcy5zY2FsZSA9IHRoaXMuY29uZi5zY2FsZTtcblx0XHR0aGlzLm1hc3MgPSB0aGlzLmNvbmYubWFzcztcbiAgICB0aGlzLmNvbGxpc2lvbkNlbnRyZXMgPSB0aGlzLmNvbmYuY29sbGlzaW9uQ2VudHJlcztcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnVwZGF0ZSA9IGNvbmYudXBkYXRlLmJpbmQodGhpcywgdGhpcyk7XG5cdFx0dGhpcy5mc20gPSBjb25mLmZzbVN0YXRlcyA/IG5ldyBGU00odGhpcywgY29uZi5mc21TdGF0ZXMpIDogdW5kZWZpbmVkO1xuXHRcdHRoaXMuZW5naW5lLmV2ZW50U3lzdGVtLnJlZ2lzdGVyRXZlbnQoYCR7dGhpcy5pZH1gKTtcblx0XHR0aGlzLmVuZ2luZS5ldmVudFN5c3RlbS5hZGRFdmVudExpc3RlbmVyKGAke3RoaXMuaWR9YCwgdGhpcy5ldmVudExpc3RlbmVyLmJpbmQodGhpcywgdGhpcykpO1xuXHRcdHRoaXMuZW5naW5lLnJlZ2lzdGVyT2JqZWN0KHRoaXMpO1x0XHRcblx0XHQvLyB2LS0gdGhpcyBtdXN0IGJlIGxhc3QgLS12XG5cdFx0dGhpcy5lbmdpbmUuZXZlbnRTeXN0ZW0uZGlzcGF0Y2hFdmVudChgJHt0aGlzLmlkfS1Mb2FkZWRgKTtcblx0fVxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25mLnR5cGU7XG5cdH1cblx0Z2V0IGNlbnRyZSgpIHtcblx0XHRpZiAoIXRoaXMuY29vcmRpbmF0ZXMpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXHRcdHJldHVybiB7XG5cdFx0XHR4OiB0aGlzLmNvb3JkaW5hdGVzLnggKyB0aGlzLndpZHRoIC8gMixcdC8vcm90YXRlZC54LFxuXHRcdFx0eTogdGhpcy5jb29yZGluYXRlcy55ICsgdGhpcy5oZWlnaHQgLyAyIC8vcm90YXRlZC55XG5cdFx0fVxuXHR9XG5cdGdldCByb3RhdGVkQ29vcmRpbmF0ZXMoKSB7XG5cdFx0aWYgKCF0aGlzLmNvb3JkaW5hdGVzKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRjb25zdCByb3RhdGVkID0gdGhpcy5jb29yZGluYXRlcy5yb3RhdGUodGhpcy5jZW50cmUsIGRlZ3JlZXMpO1xuXHRcdHJldHVybiByb3RhdGVkO1xuICB9XG4gIGdldCBjYW5EcmF3KCkge1xuICAgIHJldHVybiB0aGlzLmRyYXdhYmxlO1xuICB9XG4gIHNldCBjYW5EcmF3KGJvb2xWYWx1ZSkge1xuICAgIHRoaXMuZHJhd2FibGUgPSBib29sVmFsdWU7XG4gIH1cbn1cblxuR2FtZU9iamVjdC5wcm90b3R5cGUuZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0aGlzT2JqLCBldnQpIHsgXG5cdGNvbnNvbGUubG9nKGAke3RoaXMuaWR9IEdhbWVPYmplY3QgZXZlbnRMaXN0ZW5lciBjYXB0dXJlZCBldmVudCBmb3Igb2JqOiAke3RoaXNPYmouaWR9IHdpdGggYXJnczogJHtldnR9YCk7XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uKGRlZ3JlZXMpIHtcblx0dGhpcy5yb3RhdGlvbiA9IGRlZ3JlZXM7XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLmxvYWRWZXJ0aWNlcyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIXRoaXMuY29uZi52ZXJ0ZXhNYXApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy52ZXJ0aWNlcyA9IFtdO1xuXHRmb3IgKGxldCB2ID0gMDsgdiA8IHRoaXMuY29uZi52ZXJ0ZXhNYXAubGVuZ3RoOyB2ICs9IDEpIHtcblx0XHRjb25zdCB2ZXJ0ZXggPSB0aGlzLmNvbmYudmVydGV4TWFwW3ZdO1xuXHRcdGNvbnN0IHNjYWxlZCA9IHtcblx0XHRcdGNvbm5lY3RzVG86IHZlcnRleC5jb25uZWN0c1RvLFxuXHRcdFx0aWQ6IHZlcnRleC5pZCxcblx0XHRcdHg6IHRoaXMuc2NhbGVXaWR0aCh2ZXJ0ZXgueCksXG5cdFx0XHR5OiB0aGlzLnNjYWxlSGVpZ2h0KHZlcnRleC55KVxuXHRcdH07XG5cdFx0dGhpcy52ZXJ0aWNlcy5wdXNoKHNjYWxlZCk7XG5cdH1cbn1cblxuR2FtZU9iamVjdC5wcm90b3R5cGUubG9hZENvbGxpc2lvbkNlbnRyZXMgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5jb2xsaXNpb25DZW50cmVzID0gW107XG5cdGlmICh0aGlzLmNvbmYuY29sbGlzaW9uQ2VudHJlcykge1xuXHRcdGZvciAoY29uc3QgY29sbEN0ckdycCBpbiB0aGlzLmNvbmYuY29sbGlzaW9uQ2VudHJlcykge1xuXHRcdFx0Y29uc3QgY29sbEN0ciA9IHRoaXMuY29uZi5jb2xsaXNpb25DZW50cmVzW2NvbGxDdHJHcnBdO1xuXHRcdFx0dGhpcy5jb2xsaXNpb25DZW50cmVzLnB1c2goY29sbEN0cik7XG5cdFx0fVxuXHR9XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLmxvYWRTdGF0dXMgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLl9yb2xlIHx8ICF0aGlzLl9yb2xlLmluaXRpYWxTdGF0dXMpIHtcblx0XHRnYW1lLmxvZyhuZXcgTG9nZ2VkRXZlbnQoJ2dhbWVvYmplY3QucHJvdG90eXBlLmxvYWRTdGF0dXMnLCAnY2FsbGVkIHdpdGggbm8gX3JvbGUgb3IgX3JvbGUuaW5pdGlhbFN0YXR1cycpKTtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5fc3RhdHVzID0gdGhpcy5fcm9sZS5pbml0aWFsU3RhdHVzO1xufVxuXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5sb2FkU3ByaXRlcyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5jb25mLnNwcml0ZXMpIHtcblx0XHRmb3IobGV0IHMgaW4gdGhpcy5jb25mLnNwcml0ZXMpIHtcblx0XHRcdGNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy5jb25mLnNwcml0ZXNbc10sIHMsIHRoaXMuY29vcmRpbmF0ZXMsIHRoaXMuZW5naW5lLmltYWdlcyk7XG5cdFx0XHR0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xuXHRcdH1cblx0fVxufVxuXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5sb2FkU291bmRFZmZlY3RzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGUgaW4gdGhpcy5jb25mLnNvdW5kRWZmZWN0cykge1xuICAgIGNvbnN0IGVmZmVjdENvbmYgPSB0aGlzLmNvbmYuc291bmRFZmZlY3RzW2VdO1xuICAgIGNvbnN0IGF1ZGlvRWZmZWN0ID0gbmV3IEF1ZGlvRWZmZWN0KGVmZmVjdENvbmYpO1xuICAgIHRoaXMuZW5naW5lLmF1ZGlvU3lzdGVtLmFkZEVmZmVjdChhdWRpb0VmZmVjdCk7XG4gICAgdGhpcy5zb3VuZEVmZmVjdHMucHVzaChhdWRpb0VmZmVjdCk7XG4gIH1cbn1cblxuR2FtZU9iamVjdC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxvYWRTcHJpdGVzKCk7XG5cdHRoaXMubG9hZFZlcnRpY2VzKCk7XG4gIHRoaXMubG9hZENvbGxpc2lvbkNlbnRyZXMoKTtcbiAgdGhpcy5sb2FkU291bmRFZmZlY3RzKCk7XG5cdGlmICh0aGlzLmZzbSkge1xuXHRcdHRoaXMuZW5naW5lLmV2ZW50U3lzdGVtLnJlZ2lzdGVyRXZlbnQoYCR7dGhpcy5pZH1GU01gKTtcblx0XHR0aGlzLmVuZ2luZS5ldmVudFN5c3RlbS5hZGRFdmVudExpc3RlbmVyKGAke3RoaXMuaWR9RlNNYCwgdGhpcy5mc20uZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMuZnNtLCB0aGlzKSk7XG5cdH1cblx0dGhpcy5lbmdpbmUuZXZlbnRTeXN0ZW0uZGVSZWdpc3RlckV2ZW50KGAke3RoaXMuaWR9LUxvYWRlZGApO1xuICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgdGhpcy5jYW5EcmF3ID0gdHJ1ZTtcbn1cblxuR2FtZU9iamVjdC5wcm90b3R5cGUuc2NhbGVXaWR0aCA9IGZ1bmN0aW9uKGRpbSkge1xuXHRpZiAodGhpcy5zY2FsZSAmJiB0aGlzLnNjYWxlLngpIHtcblx0XHRyZXR1cm4gZGltICogdGhpcy5zY2FsZS54O1xuXHR9XG5cdHJldHVybiBkaW07XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLnNjYWxlSGVpZ2h0ID0gZnVuY3Rpb24oZGltKSB7XG5cdGlmICh0aGlzLnNjYWxlICYmIHRoaXMuc2NhbGUueSkge1xuXHRcdHJldHVybiBkaW0gKiB0aGlzLnNjYWxlLnk7XG5cdH1cblx0cmV0dXJuIGRpbTtcbn1cblxuR2FtZU9iamVjdC5wcm90b3R5cGUuc2NhbGVQb2ludCA9IGZ1bmN0aW9uKGRpbSwgZGlyKSB7XG5cdGlmICh0aGlzLnNjYWxlKSB7XG5cdFx0aWYgKGRpci50b0xvd2VyQ2FzZSgpID09ICd3JyB8fCAnd2lkdGgnIHx8ICd4Jykge1xuXHRcdFx0IHJldHVybiBkaW0gKiB0aGlzLnNjYWxlLng7XG5cdFx0fVxuXHRcdGlmIChkaXIudG9Mb3dlckNhc2UoKSA9PSAnaCcgfHwgJ2hlaWdodCcgfHwgJ3knKSB7XG5cdFx0XHRyZXR1cm4gZGltICogdGhpcy5zY2FsZS55O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGltO1xufVxuXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uKG5ld1ZlbDJkKSB7XG5cdHRoaXMudmVsb2NpdHkueCA9IChuZXdWZWwyZCAmJiBuZXdWZWwyZC54KSA/IG5ld1ZlbDJkLnggOiB0aGlzLnZlbG9jaXR5Lng7XG5cdHRoaXMudmVsb2NpdHkueSA9IChuZXdWZWwyZCAmJiBuZXdWZWwyZC55KSA/IG5ld1ZlbDJkLnkgOiB0aGlzLnZlbG9jaXR5Lnk7XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmNvb3JkaW5hdGVzICYmIHRoaXMudmVsb2NpdHkpIHtcblx0XHR0aGlzLmNvb3JkaW5hdGVzLnggKz0gaXNOYU4odGhpcy52ZWxvY2l0eS54KSA/IDAgOiB0aGlzLnZlbG9jaXR5Lng7XG5cdFx0dGhpcy5jb29yZGluYXRlcy55ICs9IGlzTmFOKHRoaXMudmVsb2NpdHkueSkgPyAwIDogdGhpcy52ZWxvY2l0eS55O1xuXHR9XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLmNvbGxpZGUgPSBmdW5jdGlvbihvdGhlckdhbWVPYmplY3QpIHtcblx0aWYgKHRoaXMuY29sbGlzaW9uQ2VudHJlcy5sZW5ndGggPT0gMCB8fCBvdGhlckdhbWVPYmplY3QuY29sbGlzaW9uQ2VudHJlcy5sZW5ndGggPT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBpdGVyYXRlIG92ZXIgZWFjaCBvYmplY3QncyBjb2xsaXNpb24gcmFkaWlcblx0Zm9yIChteUNlbnRyZSBpbiB0aGlzLmNvbGxpc2lvbkNlbnRyZXMpIHtcblx0XHRteUNvbGxpc2lvbkNlbnRyZSA9IHRoaXMuY29sbGlzaW9uQ2VudHJlc1tteUNlbnRyZV0uc2NhbGVkID8gXG5cdFx0XHR0aGlzLmNvbGxpc2lvbkNlbnRyZXNbbXlDZW50cmVdLnNjYWxlZCA6IFxuXHRcdFx0dGhpcy5jb2xsaXNpb25DZW50cmVzW215Q2VudHJlXTtcblx0XHRmb3IgKHRoZWlyQ2VudHJlIGluIG90aGVyR2FtZU9iamVjdC5jb2xsaXNpb25DZW50cmVzKSB7XHRcdFx0XG5cdFx0XHRjb25zdCB0aGVpckNvbGxpc2lvbkNlbnRyZSA9IG90aGVyR2FtZU9iamVjdC5jb2xsaXNpb25DZW50cmVzW3RoZWlyQ2VudHJlXS5zY2FsZWQgP1xuXHRcdFx0XHRvdGhlckdhbWVPYmplY3QuY29sbGlzaW9uQ2VudHJlc1t0aGVpckNlbnRyZV0uc2NhbGVkIDogXG5cdFx0XHRcdG90aGVyR2FtZU9iamVjdC5jb2xsaXNpb25DZW50cmVzW3RoZWlyQ2VudHJlXTtcblx0XHRcdGNvbnN0IGR4ID0gbXlDb2xsaXNpb25DZW50cmUueCAtIHRoZWlyQ29sbGlzaW9uQ2VudHJlLng7XG5cdFx0XHRjb25zdCBkeSA9IG15Q29sbGlzaW9uQ2VudHJlLnkgLSB0aGVpckNvbGxpc2lvbkNlbnRyZS55O1xuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGR4ICogZHgpICsgKGR5ICogZHkpKTtcdFx0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPD0gbXlDb2xsaXNpb25DZW50cmUucmFkaXVzICsgdGhlaXJDb2xsaXNpb25DZW50cmUucmFkaXVzKSB7XG5cdFx0XHRcdGlmIChvdGhlckdhbWVPYmplY3QgaW5zdGFuY2VvZiBQaWNrdXAgJiYgdGhpcyBpbnN0YW5jZW9mIFNoaXApIHtcblx0XHRcdFx0XHRpZiAob3RoZXJHYW1lT2JqZWN0LnNvdXJjZSAhPT0gdGhpcykge1xuXHRcdFx0XHRcdFx0aWYgKG90aGVyR2FtZU9iamVjdC5wYXlsb2FkIGluc3RhbmNlb2YgV2VhcG9uKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuY29sbGVjdFdlYXBvbihvdGhlckdhbWVPYmplY3QpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5jb2xsZWN0UG93ZXJVcChvdGhlckdhbWVPYmplY3QpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b3RoZXJHYW1lT2JqZWN0LmRpc3Bvc2FibGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cdFxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMgaW5zdGFuY2VvZiBQaWNrdXAgJiYgb3RoZXJHYW1lT2JqZWN0IGluc3RhbmNlb2YgU2hpcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLnNvdXJjZSAhPT0gb3RoZXJHYW1lT2JqZWN0KSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5wYXlsb2FkIGluc3RhbmNlb2YgV2VhcG9uKSB7XG5cdFx0XHRcdFx0XHRcdG90aGVyR2FtZU9iamVjdC5jb2xsZWN0V2VhcG9uKHRoaXMpO1x0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRvdGhlckdhbWVPYmplY3QuY29sbGVjdFBvd2VyVXAodGhpcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLmRpc3Bvc2FibGUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzIGluc3RhbmNlb2YgUGlja3VwIHx8IG90aGVyR2FtZU9iamVjdCBpbnN0YW5jZW9mIFBpY2t1cCkge1xuXHRcdFx0XHRcdC8vIHBpY2t1cHMgZG8gbm90IHRha2UvY2F1c2UgZGFtYWdlXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLm1hc3MgJiYgb3RoZXJHYW1lT2JqZWN0Lm1hc3MpIHtcblx0XHRcdFx0XHQvLyBBcHBseSBiYXNpYyBtb3Rpb24gdHJhbnNmZXJlbmNlIGFsZ29yaXRobVxuXHRcdFx0XHRcdC8vIGZyb20gaHR0cHM6Ly9nYW1lZGV2ZWxvcG1lbnQudHV0c3BsdXMuY29tL3R1dG9yaWFscy93aGVuLXdvcmxkcy1jb2xsaWRlLXNpbXVsYXRpbmctY2lyY2xlLWNpcmNsZS1jb2xsaXNpb25zLS1nYW1lZGV2LTc2OSlcblx0XHRcdFx0XHQvLyBhID0gc2hhcGUxLnZYICogKHNoYXBlMS5tYXNzIC0gc2hhcGUyLm1hc3MpXG5cdFx0XHRcdFx0Ly8gYiA9ICgyICogc2hhcGUyLm1hc3MgKiBzaGFwZTIudlgpXG5cdFx0XHRcdFx0Ly8gYyA9IChzaGFwZTEubWFzcyArIHNoYXBlMi5tYXNzKVxuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gbmV3VmVsWCA9IChhICsgYikgLyBjO1xuXHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gZCA9IHNoYXBlMS52WSAqIChzaGFwZTEubWFzcyAtIHNoYXBlMi5tYXNzKVxuXHRcdFx0XHRcdC8vIGUgPSAoMiAqIHNoYXBlMi5tYXNzICogc2hhcGUyLnZZKVxuXHRcdFx0XHRcdC8vIGYgPSAoc2hhcGUxLm1hc3MgKyBzaGFwZTIubWFzcylcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIG5ld1ZlbFkgPSAoZCArIGUpIC8gZjtcblx0XHRcdFx0XHRjb25zdCBuZXdWZWxYMSA9ICgodGhpcy52ZWxvY2l0eS54ICogKHRoaXMubWFzcyAtIG90aGVyR2FtZU9iamVjdC5tYXNzKSkgK1xuXHRcdFx0XHRcdCgyICogb3RoZXJHYW1lT2JqZWN0Lm1hc3MgKiBvdGhlckdhbWVPYmplY3QudmVsb2NpdHkueCkpIC9cblx0XHRcdFx0XHQodGhpcy5tYXNzICsgb3RoZXJHYW1lT2JqZWN0Lm1hc3MpO1xuXHRcdFx0XHRcdGNvbnN0IG5ld1ZlbFkxID0gKCh0aGlzLnZlbG9jaXR5LnkgKiAodGhpcy5tYXNzIC0gb3RoZXJHYW1lT2JqZWN0Lm1hc3MpKSArXG5cdFx0XHRcdFx0XHQoMiAqIG90aGVyR2FtZU9iamVjdC5tYXNzICogb3RoZXJHYW1lT2JqZWN0LnZlbG9jaXR5LnkpKSAvXG5cdFx0XHRcdFx0XHQodGhpcy5tYXNzICsgb3RoZXJHYW1lT2JqZWN0Lm1hc3MpO1xuXHRcdFx0XHRcdGNvbnN0IG5ld1ZlbFgyID0gKChvdGhlckdhbWVPYmplY3QudmVsb2NpdHkueCAqIChvdGhlckdhbWVPYmplY3QubWFzcyAtIHRoaXMubWFzcykpICtcblx0XHRcdFx0XHRcdCgyICogdGhpcy5tYXNzICogdGhpcy52ZWxvY2l0eS54KSkgL1xuXHRcdFx0XHRcdFx0KHRoaXMubWFzcyArIG90aGVyR2FtZU9iamVjdC5tYXNzKTtcblx0XHRcdFx0XHRjb25zdCBuZXdWZWxZMiA9ICgob3RoZXJHYW1lT2JqZWN0LnZlbG9jaXR5LnkgKiAob3RoZXJHYW1lT2JqZWN0Lm1hc3MgLSB0aGlzLm1hc3MpKSArXG5cdFx0XHRcdFx0XHQoMiAqIHRoaXMubWFzcyAqIHRoaXMudmVsb2NpdHkueSkpIC9cblx0XHRcdFx0XHRcdCh0aGlzLm1hc3MgKyBvdGhlckdhbWVPYmplY3QubWFzcyk7XG5cdFx0XHRcdFx0dGhpcy52ZWxvY2l0eS54ID0gbmV3VmVsWDE7XG5cdFx0XHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gbmV3VmVsWTE7XG5cdFx0XHRcdFx0b3RoZXJHYW1lT2JqZWN0LnZlbG9jaXR5LnggPSBuZXdWZWxYMjtcblx0XHRcdFx0XHRvdGhlckdhbWVPYmplY3QudmVsb2NpdHkueSA9IG5ld1ZlbFkyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFwcGx5IGRhbWFnZVxuXHRcdFx0XHRvdGhlckdhbWVPYmplY3QudGFrZUhpdCh0aGlzKTtcblx0XHRcdFx0dGhpcy50YWtlSGl0KG90aGVyR2FtZU9iamVjdCk7XHRcdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XHRcdFx0XG59XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLmNvbGxpc2lvbkRldGVjdCA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0aWYgKCghdGhpcy5fZnNtIHx8ICF0aGlzLl9mc20uc3RhdGUgfHwgIXRoaXMuX2ZzbS5zdGF0ZS5kZXRlY3RDb2xsaXNpb25zKSAmJiB0aGlzICE9PSBnYW1lLmxvY2FsUGxheWVyLnNoaXApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdGNvbnN0IGNhbmRpZGF0ZXMgPSBnYW1lLm9iamVjdHMuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xuXHRcdGlmIChvYmogPT09IHNlbGYgfHwgXG5cdFx0XHRvYmogaW5zdGFuY2VvZiBQYXJ0aWNsZSB8fFxuXHRcdFx0KG9iaiBpbnN0YW5jZW9mIE11bml0aW9uICYmIG9iai5zaG9vdGVyID09PSBzZWxmKSB8fFxuXHRcdFx0KHNlbGYgaW5zdGFuY2VvZiBNdW5pdGlvbiAmJiBzZWxmLnNob290ZXIgPT09IG9iaikgfHxcblx0XHRcdChvYmouZnNtICYmIG9iai5mc20uc3RhdGUgJiYgIW9iai5mc20uc3RhdGUuZGV0ZWN0Q29sbGlzaW9ucykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKG9iaiBpbnN0YW5jZW9mIFBhcnRpY2xlRWZmZWN0IHx8IHNlbGYgaW5zdGFuY2VvZiBQYXJ0aWNsZUVmZmVjdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBjYW5ub3QgY29sbGlkZSBpZiBhdCBkaWZmZXJlbnQgYWx0aXR1ZGVzXG5cdFx0aWYgKHNlbGYuY29vcmRpbmF0ZXMuY2VudHJlLnogIT09IG9iai5jb29yZGluYXRlcy5jZW50cmUueikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBkcmF3IGEgY2lyY2xlIHRvIGVuY2xvc2UgdGhlIHdob2xlIG9iamVjdFxuXHRcdGNvbnN0IHNlbGZDaXJjID0ge1xuXHRcdFx0eDogc2VsZi5jb29yZGluYXRlcy5jZW50cmUueCxcblx0XHRcdHk6IHNlbGYuY29vcmRpbmF0ZXMuY2VudHJlLnksXG5cdFx0XHRyOiAoc2VsZi53aWR0aCA+IHNlbGYuaGVpZ2h0ID8gIHNlbGYud2lkdGggOiBzZWxmLmhlaWdodCkgLyAyXG5cdFx0fTtcblx0XHRjb25zdCBvYmpDaXJjID0ge1xuXHRcdFx0eDogb2JqLmNvb3JkaW5hdGVzLmNlbnRyZS54LFxuXHRcdFx0eTogb2JqLmNvb3JkaW5hdGVzLmNlbnRyZS55LFxuXHRcdFx0cjogKG9iai53aWR0aCA+IG9iai5oZWlnaHQgPyBvYmoud2lkdGggOiBvYmouaGVpZ2h0KSAvIDJcblx0XHR9O1xuXHRcdGNvbnN0IGR4ID0gc2VsZkNpcmMueCAtIG9iakNpcmMueDtcblx0XHRjb25zdCBkeSA9IHNlbGZDaXJjLnkgLSBvYmpDaXJjLnk7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKGR4ICogZHgpICsgKGR5ICogZHkpKTtcdFx0XG5cdFxuXHRcdHJldHVybiBkaXN0YW5jZSA8PSBzZWxmQ2lyYy5yICsgb2JqQ2lyYy5yO1xuXHR9KTtcblx0aWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAodmFyIGMgPSAwOyBjIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGMrKykge1xuXHRcdFx0c2VsZi5jb2xsaWRlKGNhbmRpZGF0ZXNbY10pO1xuXHRcdH1cdFx0XG5cdH1cbn1cblxuLy8gYWJzdHJhY3RcbkdhbWVPYmplY3QucHJvdG90eXBlLnRha2VIaXQgPSBmdW5jdGlvbihzb3VyY2UpIHt9O1xuXG5HYW1lT2JqZWN0LnByb3RvdHlwZS5pc09uU2NyZWVuID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmVuZ2luZS5jYW52YXMoJ3ZpZXdwb3J0JykuY29udGFpbnModGhpcy5jb29yZGluYXRlcy54LCB0aGlzLmNvb3JkaW5hdGVzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnJvdGF0aW9uKTtcbn07XG5cbkdhbWVPYmplY3QucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG5cdGlmICghdGhpcy5pc09uU2NyZWVuKCkpIHJldHVybjtcblx0aWYgKHRoaXMuZGlzcG9zYWJsZSkgcmV0dXJuO1xuICBpZiAoIXRoaXMuY2FuRHJhdykgcmV0dXJuO1xuXG4gIHRoaXMucHJlRHJhdyAmJiB0aGlzLnByZURyYXcoKTtcblxuICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuZW5naW5lLmNhbnZhcygndmlld3BvcnQnKTtcbiAgaWYgKCF2aWV3cG9ydCB8fCAhdmlld3BvcnQuaXNSZWFkeSkgcmV0dXJuO1xuXG5cdHZpZXdwb3J0LmNvbnRleHQuc2F2ZSgpO1xuXHQvL3ZpZXdwb3J0LmNvbnRleHQudHJhbnNsYXRlKHRoaXMuY2VudHJlLngsIHRoaXMuY2VudHJlLnkpO1xuXHRpZiAodGhpcy5yb3RhdGlvbikge1xuXHRcdHZpZXdwb3J0LmNvbnRleHQucm90YXRlKGRlZ3JlZXNUb1JhZGlhbnModGhpcy5yb3RhdGlvbiArIDkwKSk7XG5cdH1cblx0dmlld3BvcnQuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbmYuY29sb3VyID8gdGhpcy5jb25mLmNvbG91ciA6ICcjZmZmZmZmJztcblxuXHRpZiAodGhpcy5zcHJpdGUgJiYgdGhpcy5zcHJpdGUuaW1hZ2UpIHtcblx0XHQvLyBzdWIuLi4gdmFycyByZXByZXNlbnQgc3ViLXNlY3Rpb25zIG9mIGEgbGFyZ2VyIGltYWdlIChpZiBhcHBsaWNhYmxlKVxuXHRcdGxldCBzdWJYID0gMDtcblx0XHRsZXQgc3ViWSA9IDA7XG5cdFx0bGV0IHN1YldpZHRoID0gdGhpcy5zcHJpdGUud2lkdGg7XG5cdFx0bGV0IHN1YkhlaWdodCA9IHRoaXMuc3ByaXRlLmhlaWdodFxuXHRcdC8vIGRlc3QuLi4gdmFycyByZWZlcmVuY2UgdGhlIGRlc3RpbmF0aW9uIHdpdGhpbiB0aGUgdGFyZ2V0IGNhbnZhc1xuXHRcdGxldCBkZXN0WCA9IHRoaXMuY29vcmRpbmF0ZXMueDtcblx0XHRsZXQgZGVzdFkgPSB0aGlzLmNvb3JkaW5hdGVzLnk7XG5cdFx0bGV0IGRlc3RXaWR0aCA9IHRoaXMud2lkdGggfHwgdGhpcy5zcHJpdGUud2lkdGg7XG5cdFx0bGV0IGRlc3RIZWlnaHQgPSB0aGlzLmhlaWdodCB8fCB0aGlzLnNwcml0ZS5oZWlnaHQ7XG5cblx0XHQvLyBhZGp1c3QgZm9yIHN1Yi1pbWFnZSBwcm9wZXJ0aWVzIGlmIHJlcXVpcmVkXG5cdFx0aWYgKCFpc05hTih0aGlzLnNwcml0ZS5mcmFtZSkpIHtcblx0XHRcdGNvbnN0IGNlbGwgPSAodGhpcy5zcHJpdGUuZnJhbWUgKiB0aGlzLnNwcml0ZS53aWR0aCkgLyAodGhpcy5zcHJpdGUud2lkdGggKiB0aGlzLnNwcml0ZS5jb2x1bW5zKTtcblx0XHRcdGNvbnN0IHJvdyA9IE1hdGguZmxvb3IodGhpcy5zcHJpdGUuZnJhbWUgLyB0aGlzLnNwcml0ZS5jb2x1bW5zKTtcblx0XHRcdGNvbnN0IGNvbCA9IChjZWxsIC0gcm93KSAqIHRoaXMuc3ByaXRlLmNvbHVtbnM7XG5cdFx0XHRzdWJYID0gdGhpcy5zcHJpdGUud2lkdGggKiBjb2w7XG5cdFx0XHRzdWJZID0gdGhpcy5zcHJpdGUuaGVpZ2h0ICogcm93O1xuXHRcdFx0c3ViV2lkdGggPSB0aGlzLnNwcml0ZS53aWR0aDtcblx0XHRcdHN1YkhlaWdodCA9IHRoaXMuc3ByaXRlLmhlaWdodDtcblx0XHR9XG5cblx0XHR2aWV3cG9ydC5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZS5pbWFnZSwgc3ViWCwgc3ViWSwgc3ViV2lkdGgsIHN1YkhlaWdodCwgZGVzdFgsIGRlc3RZLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHQpO1xuXHRcdFxuXHRcdC8vIGRlYnVnOiBkcmF3IGJvdW5kaW5nIGJveGVzXG5cdFx0Ly8gdmlld3BvcnQuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHQvLyB2aWV3cG9ydC5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubW92ZVRvKGR4LCBkeSk7XG5cdFx0Ly8gdmlld3BvcnQuY29udGV4dC5saW5lVG8oZHggKyBkV2lkdGgsIGR5KTtcblx0XHQvLyB2aWV3cG9ydC5jb250ZXh0Lm1vdmVUbyhkeCArIGRXaWR0aCwgZHkpO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubGluZVRvKGR4ICsgZFdpZHRoLCBkeSArIGRIZWlnaHQpO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubW92ZVRvKGR4ICsgZFdpZHRoLCBkeSArIGRIZWlnaHQpO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubGluZVRvKGR4LCBkeSArIGRIZWlnaHQpO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubW92ZVRvKGR4LCBkeSArIGRIZWlnaHQpO1xuXHRcdC8vIHZpZXdwb3J0LmNvbnRleHQubGluZVRvKGR4LCBkeSk7XG5cdFx0Ly8gdmlld3BvcnQuY29udGV4dC5zdHJva2UoKTtcblxuXHR9IGVsc2UgaWYodGhpcy53aWR0aCAhPT0gMCAmJiB0aGlzLmhlaWdodCAhPT0gMCkge1xuXHRcdHZpZXdwb3J0LmNvbnRleHQuZmlsbFJlY3QoLXRoaXMud2lkdGggLyAyLCAtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cdH1cblx0dmlld3BvcnQuY29udGV4dC5yZXN0b3JlKCk7XG59O1xuXG5HYW1lT2JqZWN0LnByb3RvdHlwZS51cGRhdGVBbmREcmF3ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmRpc3Bvc2FibGUpIHJldHVybjtcblx0dGhpcy51cGRhdGVQb3NpdGlvbigpO1xuXHR0aGlzLmNvbGxpc2lvbkRldGVjdCgpO1xuXHR0aGlzLmRyYXcoKTtcblx0aWYgKHRoaXMuX2ZzbSAmJiB0aGlzLl9mc20uZXhlY3V0ZSkge1xuXHRcdHRoaXMuX2ZzbS5leGVjdXRlKCk7XG5cdH1cbn07XG5cbi8vIGV4cG9ydCB7XG4vLyAgICBHYW1lT2JqZWN0XG4vLyB9O1xuIiwiXG5jbGFzcyBTcHJpdGUge1xuICBjb25zdHJ1Y3Rvcihjb25mLCB0eXBlLCBwb2ludDJkLCBpbWFnZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuY29uZiA9IGNvbmY7XG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgdGhpcy5jb29yZGluYXRlcyA9IHBvaW50MmQ7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5jb25mLmltYWdlID8gdGhpcy5jb25mLmltYWdlLmltYWdlV2lkdGggOiB0aGlzLmNvbmYuc2hlZXQuZnJhbWVXaWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jb25mLmltYWdlID8gdGhpcy5jb25mLmltYWdlLmltYWdlSGVpZ2h0IDogdGhpcy5jb25mLnNoZWV0LmZyYW1lSGVpZ2h0O1xuICAgICAgdGhpcy5mcmFtZXMgPSB0aGlzLmNvbmYuc2hlZXQgPyAodGhpcy5jb25mLnNoZWV0LnJvd3MgKiB0aGlzLmNvbmYuc2hlZXQuY29sdW1ucykgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZyYW1lID0gKHRoaXMuY29uZi5zaGVldCAmJiB0aGlzLmNvbmYuc2hlZXQuc3RhcnRGcmFtZSkgPyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25mLnNoZWV0LnN0YXJ0RnJhbWUgOiBcbiAgICAgICAgICAgICAgICAgICAgMDtcbiAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5jb25mLmltYWdlID8gdGhpcy5jb25mLmltYWdlLnBhdGggOiB0aGlzLmNvbmYuc2hlZXQucGF0aDtcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZVNlcnZpY2UubG9hZCh0aGlzLmltYWdlUGF0aCk7XG4gICAgICB0aGlzLmNvbHVtbnMgPSAodGhpcy5jb25mLnNoZWV0ICYmIHRoaXMuY29uZi5zaGVldC5jb2x1bW5zKSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZi5zaGVldC5jb2x1bW5zIDogXG4gICAgICAgICAgICAgICAgICAgIDE7XG4gICAgICB0aGlzLnJvd3MgPSAodGhpcy5jb25mLnNoZWV0ICYmIHRoaXMuY29uZi5zaGVldC5yb3dzKSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZi5zaGVldC5yb3dzIDogXG4gICAgICAgICAgICAgICAgICAgIDE7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgU3ByaXRlXG59OyIsIlxuY2xhc3MgR2FtZXBhZEhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuZ2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPyBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSA6IChuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMgPyBuYXZpZ2F0b3Iud2Via2l0R2V0R2FtZXBhZHMoKSA6IFtdKTtcbiAgfVxuICBnZXQgZ2FtZXBhZCgpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgY29uc3QgcGFkID0gdGhpcy5nYW1lcGFkc1swXTtcbiAgICAgIGNvbnN0IGRlYWRab25lID0gMC4yO1xuICAgICAgaWYgKCFwYWQpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgICAgYXhlczogcGFkLmF4ZXMsXG4gICAgICAgICAgICAgIGJ1dHRvbnM6IHBhZC5idXR0b25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dHM6IHtcbiAgICAgICAgICAgICAgYXhlczogcGFkLmF4ZXMuZmlsdGVyKGZ1bmN0aW9uKGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBheGlzLnZhbHVlT2YgIT09IDA7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBidXR0b25zOiBwYWQuYnV0dG9ucy5maWx0ZXIoZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uLnByZXNzZWQ7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdGlja3M6IHtcbiAgICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgICAgbGVmdDogcGFkLmF4ZXNbMF0udmFsdWVPZigpIDwgLWRlYWRab25lLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHBhZC5heGVzWzBdLnZhbHVlT2YoKSA+IGRlYWRab25lLFxuICAgICAgICAgICAgICAgICAgdXA6IHBhZC5heGVzWzFdLnZhbHVlT2YoKSA8IC1kZWFkWm9uZSxcbiAgICAgICAgICAgICAgICAgIGRvd246IHBhZC5heGVzWzFdLnZhbHVlT2YoKSA+IGRlYWRab25lLFxuICAgICAgICAgICAgICAgICAgcHJlc3NlZDogcGFkLmJ1dHRvbnNbMTBdLnByZXNzZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhZC5heGVzWzJdLnZhbHVlT2YoKSA8IC1kZWFkWm9uZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiBwYWQuYXhlc1syXS52YWx1ZU9mKCkgPiBkZWFkWm9uZSxcbiAgICAgICAgICAgICAgICAgIHVwOiBwYWQuYXhlc1szXS52YWx1ZU9mKCkgPCAtZGVhZFpvbmUsXG4gICAgICAgICAgICAgICAgICBkb3duOiBwYWQuYXhlc1szXS52YWx1ZU9mKCkgPiBkZWFkWm9uZSxcbiAgICAgICAgICAgICAgICAgIHByZXNzZWQ6IHBhZC5idXR0b25zWzExXS5wcmVzc2VkICAgIC8vZ3Vlc3MhXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgYTogcGFkLmJ1dHRvbnNbMF0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgYjogcGFkLmJ1dHRvbnNbMV0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgeDogcGFkLmJ1dHRvbnNbMl0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgeTogcGFkLmJ1dHRvbnNbM10ucHJlc3NlZCxcbiAgICAgICAgICAgICAgYmFjazogcGFkLmJ1dHRvbnNbOF0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgc3RhcnQ6IHBhZC5idXR0b25zWzldLnByZXNzZWQgIC8vZ3Vlc3MhXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkcGFkOiB7XG4gICAgICAgICAgICAgIGxlZnQ6IHBhZC5idXR0b25zWzE0XS5wcmVzc2VkLFxuICAgICAgICAgICAgICByaWdodDogcGFkLmJ1dHRvbnNbMTVdLnByZXNzZWQsXG4gICAgICAgICAgICAgIHVwOiBwYWQuYnV0dG9uc1sxMl0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgZG93bjogcGFkLmJ1dHRvbnNbMTNdLnByZXNzZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3VsZGVyczoge1xuICAgICAgICAgICAgICBsZWZ0OiBwYWQuYnV0dG9uc1s0XS5wcmVzc2VkLFxuICAgICAgICAgICAgICByaWdodDogcGFkLmJ1dHRvbnNbNV0ucHJlc3NlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgbGVmdDogcGFkLmJ1dHRvbnNbNl0ucHJlc3NlZCxcbiAgICAgICAgICAgICAgcmlnaHQ6IHBhZC5idXR0b25zWzddLnByZXNzZWRcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuR2FtZXBhZEhhbmRsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcyA/IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpIDogKG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcyA/IG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcygpIDogW10pO1xufVxuXG5HYW1lcGFkSGFuZGxlci5wcm90b3R5cGUucHJlc3NlZEJ1dHRvbnMgPSBmdW5jdGlvbihnYW1lcGFkSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lcGFkc1tnYW1lcGFkSW5kZXhdLmJ1dHRvbnMuZmlsdGVyKGZ1bmN0aW9uKGJ1dHRvbil7XG4gICAgICAgIHJldHVybiBidXR0b24ucHJlc3NlZDsgICAgICAgIFxuICAgIH0pXG59XG5cbkdhbWVwYWRIYW5kbGVyLnByb3RvdHlwZS5tb3ZlZFN0aWNrcyA9IGZ1bmN0aW9uKGdhbWVwYWRJbmRleCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVwYWRzW2dhbWVwYWRJbmRleF0uYXhlcy5maWx0ZXIoZnVuY3Rpb24oc3RpY2spe1xuICAgICAgICByZXR1cm4gc3RpY2sudmFsdWVPZiAhPT0gMDtcbiAgICB9KVxufVxuXG5HYW1lcGFkSGFuZGxlci5wcm90b3R5cGUucmVhZElucHV0cyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMucHJlc3NlZEJ1dHRvbnMoaW5kZXgpO1xuICAgIGNvbnN0IHN0aWNrcyA9IHRoaXMubW92ZWRTdGlja3MoaW5kZXgpO1xuXG59XG5cbkdhbWVwYWRIYW5kbGVyLnByb3RvdHlwZS5zdGlja3MgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IF9zdGlja3MgPSB0aGlzLmdhbWVwYWRzW2luZGV4ID8gaW5kZXggOiAwXS5heGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgIHVwOiBfc3RpY2tzWzBdLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIGRvd246IF9zdGlja3NbMF0udmFsdWVPZigpLFxuICAgICAgICAgICAgbGVmdDogX3N0aWNrc1swXS52YWx1ZU9mKCksXG4gICAgICAgICAgICByaWdodDogX3N0aWNrc1swXS52YWx1ZU9mKClcbiAgICAgICAgfSxcbiAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgIHVwOiBfc3RpY2tzWzFdLnZhbHVlT2YoKSxcbiAgICAgICAgICAgIGRvd246IF9zdGlja3NbMV0udmFsdWVPZigpLFxuICAgICAgICAgICAgbGVmdDogX3N0aWNrc1sxXS52YWx1ZU9mKCksXG4gICAgICAgICAgICByaWdodDogX3N0aWNrc1sxXS52YWx1ZU9mKClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuR2FtZXBhZEhhbmRsZXIucHJvdG90eXBlLmJ1dHRvbnMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IF9idXR0b25zID0gdGhpcy5nYW1lcGFkc1tpbmRleCA/IGluZGV4IDogMF0uYnV0dG9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBhOiBfYnV0dG9uc1swXS5wcmVzc2VkLFxuICAgICAgICBiOiBfYnV0dG9uc1sxXS5wcmVzc2VkLFxuICAgICAgICB4OiBfYnV0dG9uc1syXS5wcmVzc2VkLFxuICAgICAgICB5OiBfYnV0dG9uc1szXS5wcmVzc2VkXG4gICAgfVxufVxuXG5HYW1lcGFkSGFuZGxlci5wcm90b3R5cGUudHJpZ2dlcnMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgIGNvbnN0IF90cmlnZ2VycyA9IHRoaXMuZ2FtZXBhZHNbaW5kZXggPyBpbmRleCA6IDBdLmJ1dHRvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogX3RyaWdnZXJzWzRdLnByZXNzZWQsXG4gICAgICAgIHJpZ2h0OiBfdHJpZ2dlcnNbNV0ucHJlc3NlZFxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgR2FtZXBhZEhhbmRsZXJcbn07XG4iLCJcbmltcG9ydCB7IHBhcnRpdGlvbiB9IGZyb20gJy4uL2xpYi9wYXJ0aXRpb24nO1xuXG5jb25zdCBLZXlzID0ge1xuICBROiAnS0VZUScsXG4gIFc6ICdLRVlXJyxcbiAgRTogJ0tFWUUnLFxuICBSOiAnS0VZUicsXG4gIFQ6ICdLRVlUJyxcbiAgWTogJ0tFWVknLFxuICBVOiAnS0VZVScsXG4gIEk6ICdLRVlJJyxcbiAgTzogJ0tFWU8nLFxuICBQOiAnS0VZUCcsICAgIFxuXG4gIEE6ICdLRVlBJyxcbiAgUzogJ0tFWVMnLFxuICBEOiAnS0VZRCcsXG4gIEY6ICdLRVlGJyxcbiAgRzogJ0tFWUcnLFxuICBIOiAnS0VZSCcsXG4gIEo6ICdLRVlKJyxcbiAgSzogJ0tFWUsnLFxuICBMOiAnS0VZTCcsXG5cbiAgWjogJ0tFWVonLFxuICBYOiAnS0VZWCcsXG4gIEM6ICdLRVlDJyxcbiAgVjogJ0tFWVYnLFxuICBCOiAnS0VZQicsXG4gIE46ICdLRVlOJyxcbiAgTTogJ0tFWU0nLFxuXG4gIEFSUk9XVVA6ICdBUlJPV1VQJyxcbiAgQVJST1dET1dOOiAnQVJST1dET1dOJyxcbiAgQVJST1dMRUZUOiAnQVJST1dMRUZUJyxcbiAgQVJST1dSSUdIVDogJ0FSUk9XUklHSFQnLFxuICBTSElGVExFRlQ6ICdTSElGVExFRlQnLFxuICBTUEFDRTogJ1NQQUNFJyxcbiAgU0hJRlRSSUdIVDogJ1NISUZUUklHSFQnLFxuICBFTlRFUjogJ0VOVEVSJyxcbiAgQkFDS1NQQUNFOiAnQkFDS1NQQUNFJyxcbiAgRVNDQVBFOiAnRVNDQVBFJ1xufTtcblxuY2xhc3MgS2V5SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKGtleVByb2Nlc3NvciwgZ2FtZUVuZ2luZSkge1xuICAgIHRoaXMuX2VuZ2luZSA9IGdhbWVFbmdpbmU7XG4gICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3Byb2Nlc3NLZXkgPSBrZXlQcm9jZXNzb3I7XG4gICAgdGhpcy5faWdub3JlZCA9IFtdO1xuICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgdGhpcy5wcmVzc2VkID0ge307IFxuICB9XG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG4gIGdldCBnYW1lRW5naW5lKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmdpbmU7XG4gIH1cbiAgc2V0IGVuYWJsZWQodmFsKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbDtcbiAgfVxufVxuXG5LZXlIYW5kbGVyLnByb3RvdHlwZS5pZ25vcmUgPSBmdW5jdGlvbihrZXksIG1zKSB7XG4gIGlmICh0aGlzLmlnbm9yZWQoa2V5KSkge1xuICAgIHJldHVybjsgLy8gcHJldmVudCBlbmRsZXNzIGlnbm9yaW5nIGZyb20gcmVwZWF0ZWQga2V5IHByZXNzZXNcbiAgfVxuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBhY3RpdmUgPSBwYXJ0aXRpb24odGhpcy5faWdub3JlZCwgZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrLnRpbWVvdXQgPiBub3c7XG4gIH0pWzBdO1xuICBjb25zdCBpbmRleCA9IGFjdGl2ZS5maW5kSW5kZXgoZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrLmtleSA9PSBrZXk7XG4gIH0pO1xuICBjb25zdCBleHBpcmVzID0gbm93ICsgbXM7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBhY3RpdmUucHVzaCh7XG4gICAgICBrZXk6IGtleSwgXG4gICAgICB0aW1lb3V0OiBleHBpcmVzXG4gICAgfSk7XG4gIH1cbiAgdGhpcy5faWdub3JlZCA9IGFjdGl2ZTtcbn1cblxuS2V5SGFuZGxlci5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24oa2V5KSB7XG4gIGNvbnN0IGlnbm9yaW5nID0gcGFydGl0aW9uKHRoaXMuX2lnbm9yZWQsIGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gay5rZXkgIT09IGtleTtcbiAgfSlbMF07XG4gIHRoaXMuX2lnbm9yZWQgPSBpZ25vcmluZztcbn1cblxuS2V5SGFuZGxlci5wcm90b3R5cGUuaWdub3JlZCA9IGZ1bmN0aW9uKGtleSkge1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICBjb25zdCBhY3RpdmUgPSBwYXJ0aXRpb24odGhpcy5faWdub3JlZCwgZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrLnRpbWVvdXQgPj0gbm93O1xuICB9KVswXTtcbiAgdGhpcy5faWdub3JlZCA9IGFjdGl2ZTtcbiAgcmV0dXJuIGFjdGl2ZS5maW5kSW5kZXgoZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBrLmtleSA9PSBrZXk7XG4gIH0pID4gLTE7XG59XG5cbktleUhhbmRsZXIucHJvdG90eXBlLnF1ZXVlZCA9IGZ1bmN0aW9uKGtleSkge1xuICByZXR1cm4gcGFydGl0aW9uKHRoaXMuX3F1ZXVlLCBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIGsgPT0ga2V5O1xuICB9KVswXS5sZW5ndGggPiAwO1xufVxuXG5LZXlIYW5kbGVyLnByb3RvdHlwZS5lblF1ZXVlID0gZnVuY3Rpb24oa2V5KSB7XG4gIGlmKCF0aGlzLnF1ZXVlZChrZXkpKSB7XG4gICAgdGhpcy5fcXVldWUucHVzaChrZXkpO1xuICB9XG59XG5cbktleUhhbmRsZXIucHJvdG90eXBlLmRlUXVldWUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdGhpcy5fcXVldWUgPSBwYXJ0aXRpb24odGhpcy5fcXVldWUsIGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gayAhPSBrZXk7XG4gIH0pWzBdO1xufVxuXG5LZXlIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgY29uc3Qga2V5ID0gZS5jb2RlLnRvVXBwZXJDYXNlKCk7XG4gIGlmICh0aGlzLmlnbm9yZWQoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9wcm9jZXNzS2V5KGtleSwgdHJ1ZSwgdGhpcyk7XG59XG5cbktleUhhbmRsZXIucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgY29uc3Qga2V5ID0gZS5jb2RlLnRvVXBwZXJDYXNlKCk7XG4gIHRoaXMuX3Byb2Nlc3NLZXkoa2V5LCBmYWxzZSwgdGhpcyk7XG59XG5cbmNvbnN0IEtleVByb2Nlc3NvciA9IChwcmVzc2VkS2V5LCBpc1ByZXNzZWQsIGtleUhhbmRsZXIpID0+IHtcbiAgc3dpdGNoIChwcmVzc2VkS2V5KSB7XG4gICAgY2FzZSBLZXlzLlNQQUNFOlxuICAgICAgaWYgKGtleUhhbmRsZXIuZ2FtZUVuZ2luZSAmJiBrZXlIYW5kbGVyLmdhbWVFbmdpbmUuZXZlbnRTeXN0ZW0pIHtcbiAgICAgICAga2V5SGFuZGxlci5nYW1lRW5naW5lLmV2ZW50U3lzdGVtLmRpc3BhdGNoRXZlbnQoa2V5SGFuZGxlci5nYW1lRW5naW5lLmlkLCB7YWN0aW9uOiBcIlNQQUNFUFJFU1NFRFwifSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtleXMuRU5URVI6XG4gICAgICBicmVhaztcbiAgICBjYXNlIEtleXMuRVNDQVBFOlxuICAgICAgZGVidWdnZXI7XG4gICAgICBicmVhazsgIFxuICB9XG59O1xuXG5leHBvcnQge1xuICBLZXlzLFxuICBLZXlIYW5kbGVyLFxuICBLZXlQcm9jZXNzb3Jcbn07XG4iLCJcbi8qXG5cdFRvdWNoIGludGVyZmFjZSAvIGhhbmRsZXJcbiovXG5cbmltcG9ydCB7IENhbnZhczJEIH0gZnJvbSAnLi4vZW52aXJvbm1lbnQvY2FudmFzJztcblxuY2xhc3MgVG91Y2hIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnLCBnYW1lRW5naW5lKSB7XG4gICAgICB0aGlzLmdhbWVFbmdpbmUgPSBnYW1lRW5naW5lO1xuICAgICAgdGhpcy5jb25maWcgPSBjb25maWcsXG4gICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl93aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICAgIHRoaXMuX2hlaWdodCA9IGNvbmZpZy5oZWlnaHQ7XG4gICAgICB0aGlzLl9idXR0b24gPSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2J1dHRvbnMgPSB7XG4gICAgICAgICAgbGVmdEJ1dHRvbjoge1xuICAgICAgICAgICAgICB4OiAwICsgKHRoaXMuX2J1dHRvbi53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICB5OiB0aGlzLl9oZWlnaHQgLSAodGhpcy5fYnV0dG9uLmhlaWdodCAvIDIpLFxuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fYnV0dG9uLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2J1dHRvbi5oZWlnaHQsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvdXI6ICcjYWFhYWFhJyxcbiAgICAgICAgICAgICAgdG91Y2hlZDogZmFsc2UsIFxuICAgICAgICAgICAgICBpbWFnZTogdGhpcy5nYW1lRW5naW5lLmltYWdlcy5sb2FkKCcuLi9pbWFnZS9sZWZ0QnV0dG9uLnBuZycpXG4gICAgICAgICAgfSxcbiAgICAgICAgICByaWdodEJ1dHRvbjoge1xuICAgICAgICAgICAgICB4OiAwICsgdGhpcy5fYnV0dG9uLndpZHRoICsgKHRoaXMuX2J1dHRvbi53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICB5OiB0aGlzLl9oZWlnaHQgLSAodGhpcy5fYnV0dG9uLmhlaWdodCAvIDIpLFxuICAgICAgICAgICAgICB3aWR0aDogdGhpcy5fYnV0dG9uLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2J1dHRvbi5oZWlnaHQsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvdXI6ICcjYmJiYmJiJyxcbiAgICAgICAgICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGltYWdlOiBpbWFnZVNlcnZpY2UubG9hZEltYWdlKCcuLi9pbWFnZS9yaWdodEJ1dHRvbi5wbmcnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmlyZUJ1dHRvbjoge1xuICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCAtICh0aGlzLl9idXR0b24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0IC0gKHRoaXMuX2J1dHRvbi5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX2J1dHRvbi53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9idXR0b24uaGVpZ2h0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnI2NjY2NjYycsXG4gICAgICAgICAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VTZXJ2aWNlLmxvYWRJbWFnZSgnLi4vaW1hZ2UvZmlyZUJ1dHRvbi5wbmcnKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRocnVzdEJ1dHRvbjoge1xuICAgICAgICAgICAgICB4OiB0aGlzLl93aWR0aCAtIHRoaXMuX2J1dHRvbi53aWR0aCAtICh0aGlzLl9idXR0b24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgeTogdGhpcy5faGVpZ2h0IC0gKHRoaXMuX2J1dHRvbi5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuX2J1dHRvbi53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLl9idXR0b24uaGVpZ2h0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnI2RkZGRkZCcsXG4gICAgICAgICAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpbWFnZTogaW1hZ2VTZXJ2aWNlLmxvYWRJbWFnZSgnLi4vaW1hZ2UvdGhydXN0QnV0dG9uLnBuZycpICAgICAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH1cblxuICBnZXQgYnV0dG9ucygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9idXR0b25zO1xuICB9XG4gIGdldCBlbmFibGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gIH1cblxuICBzZXQgZW5hYmxlZCh2YWwpIHtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWw7XG4gIH1cbn1cblxuVG91Y2hIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdG91Y2ggPSB0b3VjaGVzW2ldO1xuICAgICAgZm9yIChiIGluIHRoaXMuYnV0dG9ucykge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tiXTtcbiAgICAgICAgICBpZiAoYnV0dG9uLnggLSAoYnV0dG9uLndpZHRoIC8gMikgPD0gdG91Y2gucGFnZVggJiYgXG4gICAgICAgICAgICAgIGJ1dHRvbi54ICsgKGJ1dHRvbi53aWR0aCAvIDIpID49IHRvdWNoLnBhZ2VYICYmIFxuICAgICAgICAgICAgICBidXR0b24ueSAtIChidXR0b24uaGVpZ2h0IC8gMikgPD0gdG91Y2gucGFnZVkgJiZcbiAgICAgICAgICAgICAgYnV0dG9uLnkgKyAoYnV0dG9uLmhlaWdodCAvIDIpID49IHRvdWNoLnBhZ2VZXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi50b3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuVG91Y2hIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG91Y2hlcyA9IGV2dC5jaGFuZ2VkVG91Y2hlcztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICAgIGZvciAoYiBpbiB0aGlzLmJ1dHRvbnMpIHtcbiAgICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbYl07XG4gICAgICAgICAgaWYgKGJ1dHRvbi54IC0gKGJ1dHRvbi53aWR0aCAvIDIpIDw9IHRvdWNoLnBhZ2VYICYmIFxuICAgICAgICAgICAgICBidXR0b24ueCArIChidXR0b24ud2lkdGggLyAyKSA+PSB0b3VjaC5wYWdlWCAmJiBcbiAgICAgICAgICAgICAgYnV0dG9uLnkgLSAoYnV0dG9uLndpZHRoIC8gMikgPD0gdG91Y2gucGFnZVkgJiZcbiAgICAgICAgICAgICAgYnV0dG9uLnkgKyAoYnV0dG9uLmhlaWdodCAvIDIpID49IHRvdWNoLnBhZ2VZXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi50b3VjaGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG5cbmNsYXNzIFRvdWNoSW50ZXJmYWNlIGV4dGVuZHMgQ2FudmFzMkQge1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGdhbWVFbmdpbmUpIHtcbiAgICBzdXBlcihjb25maWcsIGdhbWVFbmdpbmUpO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbmZpZy5zZWxlY3Rvci5zdWJzdHIoMSkpO1xuICAgIHRoaXMuX3RvdWNoSGFuZGxlciA9IG5ldyBUb3VjaEhhbmRsZXIoe3dpZHRoOiBjb25maWcud2lkdGgsIGhlaWdodDogY29uZmlnLmhlaWdodH0sIGdhbWVFbmdpbmUpO1xuICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX3RvdWNoSGFuZGxlci5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQodGhpcy5fdG91Y2hIYW5kbGVyKSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl90b3VjaEhhbmRsZXIuaGFuZGxlVG91Y2hFbmQuYmluZCh0aGlzLl90b3VjaEhhbmRsZXIpLCB0cnVlKTtcdCAgXG4gICAgfVxuICB9XG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG4gIGdldCB0b3VjaEhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdWNoSGFuZGxlcjtcbiAgfVx0XHRcbn1cblxuVG91Y2hJbnRlcmZhY2UucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihkZWJ1Zykge1xuICBmb3IgKGIgaW4gdGhpcy5fdG91Y2hIYW5kbGVyLmJ1dHRvbnMpIHtcbiAgICBjb25zdCBidXR0b24gPSB0aGlzLl90b3VjaEhhbmRsZXIuYnV0dG9uc1tiXTtcbiAgICBpZiAoYnV0dG9uLmltYWdlKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuZHJhd0ltYWdlKGJ1dHRvbi5pbWFnZSwgYnV0dG9uLnggLSAoYnV0dG9uLndpZHRoIC8gMiksIGJ1dHRvbi55IC0gKGJ1dHRvbi5oZWlnaHQgLyAyKSwgYnV0dG9uLndpZHRoLCBidXR0b24uaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb250ZXh0LnN0cm9rZVN0eWxlID0gYnV0dG9uLmJhY2tncm91bmRDb2xvdXIgPyBidXR0b24uYmFja2dyb3VuZENvbG91ciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuX2NvbnRleHQuYXJjKGJ1dHRvbi54LCBidXR0b24ueSwgYnV0dG9uLndpZHRoIC8gMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTsgXG4gICAgICAgIHRoaXMuX2NvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuICB9XHRcbn1cblxuLypcbiAgICBjb25zdCB0aVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zZWxlY3Rvcik7XG4gICAgaWYgKHRpV3JhcHBlcikge1xuICAgICAgdGlXcmFwcGVyLnN0eWxlLmxlZnQgPSBjb25maWcueC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHRpV3JhcHBlci5zdHlsZS50b3AgPSBjb25maWcueS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHRpV3JhcHBlci5zdHlsZS53aWR0aCA9IGNvbmZpZy53aWR0aC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHRpV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBjb25maWcuaGVpZ2h0LnRvU3RyaW5nKCkgKyAncHgnO1xuICAgICAgdGlXcmFwcGVyLnN0eWxlLmJhY2tncm91bmQgPSBjb25maWcuYmFja2dyb3VuZDtcbiAgICB9XG4gICAgLy8gc2l6ZSB0b3VjaCBpbnRlcmZhY2UgY2FudmFzXG4gICAgaWYgKHRoaXMudG91Y2hJbnRlcmZhY2UuZWxlbWVudCkge1xuICAgICAgdGhpcy50b3VjaEludGVyZmFjZS5lbGVtZW50LnN0eWxlLmxlZnQgPSBjb25maWcueC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHRoaXMudG91Y2hJbnRlcmZhY2UuZWxlbWVudC5zdHlsZS50b3AgPSBjb25maWcueS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHRoaXMudG91Y2hJbnRlcmZhY2UuZWxlbWVudC53aWR0aCA9IGNvbmZpZy53aWR0aDtcbiAgICAgIHRoaXMudG91Y2hJbnRlcmZhY2UuZWxlbWVudC5oZWlnaHQgPSBjb25maWcuaGVpZ2h0O1xuICAgIH1cbiovXG5cbmV4cG9ydCB7XG4gIFRvdWNoSW50ZXJmYWNlLFxuICBUb3VjaEhhbmRsZXJcbn0iLCJcbmNsYXNzIEltYWdlU2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZGVmYXVsdFBhdGggPSAnLi9hc3NldHMvJ1xuXHRcdHRoaXMuX2xvYWRlZEltYWdlcyA9IFtdO1xuXHR9XG59XG5cbkltYWdlU2VydmljZS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKGltZ1BhdGgsIG9uTG9hZCkge1xuXHRjb25zdCBmdWxsUGF0aCA9IHRoaXMuZGVmYXVsdFBhdGggKyBpbWdQYXRoO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5fbG9hZGVkSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRoaXMuX2xvYWRlZEltYWdlc1tpXS5wYXRoID09PSBmdWxsUGF0aCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2xvYWRlZEltYWdlc1tpXS5pbWc7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdGltYWdlLnNyYyA9IGZ1bGxQYXRoO1xuXHRpZiAob25Mb2FkKSB7XG5cdFx0aW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCwgZmFsc2UpO1xuXHR9XG5cdHRoaXMuX2xvYWRlZEltYWdlcy5wdXNoKHtwYXRoOiBmdWxsUGF0aCwgaW1nOiBpbWFnZX0pO1xuXHRyZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCB7XG4gIEltYWdlU2VydmljZVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=