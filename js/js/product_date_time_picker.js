/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(33);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(14)('wks');
var uid = __webpack_require__(11);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(13);
var hide = __webpack_require__(9);
var redefine = __webpack_require__(16);
var ctx = __webpack_require__(41);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(19) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(9);
var has = __webpack_require__(7);
var SRC = __webpack_require__(11)('src');
var $toString = __webpack_require__(44);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(14)('keys');
var uid = __webpack_require__(11);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(19);
var wksExt = __webpack_require__(32);
var defineProperty = __webpack_require__(2).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(2).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(48)(false);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(51);
var enumBugKeys = __webpack_require__(24);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(33);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(3);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(16);
var META = __webpack_require__(45).KEY;
var $fails = __webpack_require__(6);
var shared = __webpack_require__(14);
var setToStringTag = __webpack_require__(35);
var uid = __webpack_require__(11);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(32);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(46);
var isArray = __webpack_require__(50);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var toObject = __webpack_require__(29);
var toIObject = __webpack_require__(8);
var toPrimitive = __webpack_require__(21);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(37);
var gOPNExt = __webpack_require__(53);
var $GOPD = __webpack_require__(38);
var $GOPS = __webpack_require__(28);
var $DP = __webpack_require__(2);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(30).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(19)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(26);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toObject = __webpack_require__(29);
var toLength = __webpack_require__(23);
var toInteger = __webpack_require__(20);
var advanceStringIndex = __webpack_require__(55);
var regExpExec = __webpack_require__(56);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(57)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(117);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(59);
var DESCRIPTORS = __webpack_require__(3);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(16)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(6)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14)('native-function-to-string', Function.toString);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(11)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(2).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(6)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(28);
var pIE = __webpack_require__(25);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(49);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(2);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8);
var gOPN = __webpack_require__(30).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(104)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(105);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(106);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(9);
var fails = __webpack_require__(6);
var defined = __webpack_require__(18);
var wks = __webpack_require__(4);
var regexpExec = __webpack_require__(58);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(59);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(109);
var step = __webpack_require__(110);
var Iterators = __webpack_require__(61);
var toIObject = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(111)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(60);
var getKeys = __webpack_require__(17);
var redefine = __webpack_require__(16);
var global = __webpack_require__(0);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(61);
var wks = __webpack_require__(4);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(102);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toLength = __webpack_require__(23);
var advanceStringIndex = __webpack_require__(55);
var regExpExec = __webpack_require__(56);

// @@match logic
__webpack_require__(57)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(107);
var anObject = __webpack_require__(1);
var speciesConstructor = __webpack_require__(108);
var advanceStringIndex = __webpack_require__(55);
var toLength = __webpack_require__(23);
var callRegExpExec = __webpack_require__(56);
var regexpExec = __webpack_require__(58);
var fails = __webpack_require__(6);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(57)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(17);

__webpack_require__(114)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(74)
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(18);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(12);
var $pad = __webpack_require__(129);
var userAgent = __webpack_require__(130);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(125);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configurable_date_input_polyfill_scss__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configurable_date_input_polyfill_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__configurable_date_input_polyfill_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(103);



var addPolyfillPickers = function addPolyfillPickers() {
  __WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */].addPickerToOtherInputs(); // Check if type="date" is supported. feature disabled!

  if (!__WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */].supportsDateInput()) {
    __WEBPACK_IMPORTED_MODULE_1__input__["a" /* default */].addPickerToDateInputs();
  }
}; // Run the above code on any <input type="date"> in the document, also on dynamically created ones.


addPolyfillPickers();
document.addEventListener('DOMContentLoaded', function () {
  addPolyfillPickers();
}); // This is also on mousedown event so it will capture new inputs that might
// be added to the DOM dynamically.

document.querySelector('body').addEventListener('mousedown', function () {
  addPolyfillPickers();
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(101);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(69)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./configurable-date-input-polyfill.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./configurable-date-input-polyfill.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)(false);
// Module
exports.push([module.i, "@supports (-webkit-touch-callout: none) {\n  /* CSS specific to iOS devices */\n  input[type=\"date\"], input[type=\"time\"], input[type=\"datetime-local\"], input[type=\"month\"] {\n    min-height: 44px; }\n  input[readonly] {\n    -webkit-appearance: none; } }\n\ndate-input-polyfill {\n  width: auto;\n  min-width: 260px;\n  height: auto;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0px 0px 5px 2px rgba(128, 128, 128, 0.81);\n  -moz-box-shadow: 0px 0px 5px 2px rgba(128, 128, 128, 0.81);\n  box-shadow: 0px 0px 5px 2px rgba(128, 128, 128, 0.81);\n  position: absolute;\n  font-size: 12px;\n  color: #000000;\n  z-index: 100 !important; }\n  date-input-polyfill .date-select-header {\n    position: relative;\n    width: 100%;\n    height: 40px;\n    background-color: #ffffff;\n    text-align: center;\n    line-height: 40px; }\n    date-input-polyfill .date-select-header .date-header-button {\n      padding: 5px;\n      border: solid 1px #a8a3a3;\n      background-color: #ffffff;\n      min-width: 150px;\n      width: auto;\n      max-width: 180px;\n      height: 28px;\n      border-radius: 5px;\n      cursor: pointer;\n      position: relative;\n      line-height: 15px; }\n  date-input-polyfill .day-matrix-wrapper {\n    position: relative;\n    background-color: #ffffff;\n    width: 100%;\n    height: auto;\n    padding: 0 10px 10px 10px;\n    box-sizing: border-box; }\n    date-input-polyfill .day-matrix-wrapper table {\n      width: 100%;\n      text-align: center;\n      padding: 0;\n      line-height: 24px;\n      border-collapse: separate; }\n      date-input-polyfill .day-matrix-wrapper table thead {\n        color: #b4b4b4;\n        pointer-events: none; }\n        date-input-polyfill .day-matrix-wrapper table thead th {\n          font-weight: normal;\n          border: none;\n          padding: 0;\n          text-align: center; }\n      date-input-polyfill .day-matrix-wrapper table tbody td {\n        border: solid 1px #ffffff;\n        padding: 0;\n        text-align: center;\n        width: 30px; }\n        date-input-polyfill .day-matrix-wrapper table tbody td.current-day {\n          border: solid 1px #cce5f3;\n          background-color: #cce5f3; }\n          date-input-polyfill .day-matrix-wrapper table tbody td.current-day.disabled {\n            border: solid 1px #ffffff; }\n        date-input-polyfill .day-matrix-wrapper table tbody td[data-selected] {\n          font-weight: bold;\n          border: solid 1px #a2d8f6;\n          background-color: #a2d8f6; }\n          date-input-polyfill .day-matrix-wrapper table tbody td[data-selected]:hover {\n            border: solid 1px #a2d8f6;\n            background-color: #a2d8f6; }\n        date-input-polyfill .day-matrix-wrapper table tbody td.prev-month, date-input-polyfill .day-matrix-wrapper table tbody td.next-month {\n          color: #d3d3d3; }\n          date-input-polyfill .day-matrix-wrapper table tbody td.prev-month:hover, date-input-polyfill .day-matrix-wrapper table tbody td.next-month:hover {\n            color: #ffffff; }\n        date-input-polyfill .day-matrix-wrapper table tbody td.disabled {\n          background-color: #808080;\n          color: #d3d3d3; }\n          date-input-polyfill .day-matrix-wrapper table tbody td.disabled:hover {\n            background-color: #808080;\n            border: solid 1px #ffffff;\n            color: #d3d3d3; }\n        date-input-polyfill .day-matrix-wrapper table tbody td:hover {\n          cursor: pointer;\n          background-color: #d3d3d3;\n          border: solid 1px #d3d3d3; }\n  date-input-polyfill .date-select-dropdown {\n    position: absolute;\n    width: 100%;\n    height: auto;\n    top: 40px;\n    background-color: #ffffff;\n    display: none; }\n    date-input-polyfill .date-select-dropdown .select-container {\n      position: relative;\n      float: left;\n      width: 100%;\n      height: auto;\n      padding: 5px 60px 5px 60px; }\n      date-input-polyfill .date-select-dropdown .select-container .up, date-input-polyfill .date-select-dropdown .select-container .down {\n        width: 100%;\n        height: 25px;\n        text-align: center;\n        background-color: transparent;\n        cursor: pointer;\n        line-height: 22px;\n        float: left;\n        border: none;\n        outline: none;\n        color: #7d7d7d;\n        position: relative; }\n      date-input-polyfill .date-select-dropdown .select-container .up:after {\n        content: \"<\";\n        position: absolute;\n        top: 0;\n        left: 19px;\n        display: inline-block;\n        -webkit-transform: rotate(90deg);\n        -moz-transform: rotate(90deg);\n        -o-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n        transform: rotate(90deg); }\n      date-input-polyfill .date-select-dropdown .select-container .down:after {\n        content: \"<\";\n        position: absolute;\n        top: 0;\n        left: unset;\n        right: 19px;\n        display: inline-block;\n        -webkit-transform: rotate(-90deg);\n        -moz-transform: rotate(-90deg);\n        -o-transform: rotate(-90deg);\n        -ms-transform: rotate(-90deg);\n        transform: rotate(-90deg); }\n      date-input-polyfill .date-select-dropdown .select-container .select-wrapper {\n        float: left;\n        width: 50px;\n        height: 175px;\n        position: relative;\n        margin: 10px; }\n        date-input-polyfill .date-select-dropdown .select-container .select-wrapper .option-wrapper {\n          float: left;\n          width: 100%;\n          height: auto; }\n          date-input-polyfill .date-select-dropdown .select-container .select-wrapper .option-wrapper .option {\n            height: 25px;\n            border-radius: 5px;\n            text-align: center;\n            float: left;\n            width: 100%;\n            line-height: 25px; }\n          date-input-polyfill .date-select-dropdown .select-container .select-wrapper .option-wrapper .option-2 {\n            background-color: #d3d3d3; }\n  date-input-polyfill[data-open=\"false\"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0; }\n  date-input-polyfill[data-open=\"true\"] {\n    visibility: visible; }\n", ""]);



/***/ }),
/* 102 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_match__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_array_iterator__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_array_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_array_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_keys__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picker__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localisations__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dateformat__ = __webpack_require__(124);







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Input = /*#__PURE__*/function () {
  function Input() {
    _classCallCheck(this, Input);
  }

  _createClass(Input, [{
    key: "getLocaleLabels",
    value: function getLocaleLabels(locale) {
      var localeLabels;
      Object.keys(__WEBPACK_IMPORTED_MODULE_7__localisations__["a" /* default */]).forEach(function (key) {
        var localeSet = key;
        var localeList = localeSet.split('_');
        localeList = localeList.map(function (el) {
          return el.toLowerCase();
        });

        if (localeList.indexOf(locale) >= 0 || localeList.indexOf(locale.substr(0, 2)) >= 0) {
          localeLabels = __WEBPACK_IMPORTED_MODULE_7__localisations__["a" /* default */][localeSet];
        }
      });
      return localeLabels;
    } // determines if min and max values are given

  }, {
    key: "getDateRange",
    value: function getDateRange(minAttribute, maxAttribute) {
      var defaultMinDate = new Date("1800");
      var defaultMaxDate = new Date("3000");
      var minDate = defaultMinDate;
      var maxDate = defaultMaxDate; // If min Attribute is set

      if (minAttribute && Date.parse(minAttribute)) {
        var givenDate = new Date(minAttribute);
        givenDate.setHours(0, 0, 0, 0);
        minDate = givenDate;
      } // If max Attribute is set


      if (maxAttribute && Date.parse(maxAttribute)) {
        var _givenDate = new Date(maxAttribute);

        _givenDate.setHours(0, 0, 0, 0);

        maxDate = _givenDate;
      } // in case of invalid input


      if (minDate > maxDate) {
        minDate = defaultMinDate;
        maxDate = defaultMaxDate;
      }

      if (minDate < new Date("0001")) {
        minDate = new Date("0001");
      }

      return [minDate, maxDate];
    } // Return false if the browser does not support input[type="date"].

  }, {
    key: "supportsDateInput",
    value: function supportsDateInput() {
      var input = document.createElement('input');
      input.setAttribute('type', 'date');
      var notADateValue = 'not-a-date';
      input.setAttribute('value', notADateValue); //because iOS safari not supporting min and max

      return false;
    }
  }, {
    key: "prepareInputForPicker",
    value: function prepareInputForPicker(input) {
      var _this = this;

      var inputObject = input;
      inputObject.setAttribute('data-has-picker', '');
      var locale = inputObject.getAttribute('lang') || document.body.getAttribute('lang') || 'en';
      var dateFormat = inputObject.getAttribute('date-format') || document.body.getAttribute('date-format') || inputObject.getAttribute('data-date-format') || document.body.getAttribute('data-date-format') || 'yyyy-mm-dd';
      var minAttribute = inputObject.getAttribute('min') || inputObject.getAttribute('data-min');
      var maxAttribute = inputObject.getAttribute('max') || inputObject.getAttribute('data-max');
      inputObject.firstDayOfWeek = inputObject.getAttribute('data-first-day') || document.body.getAttribute('data-first-day') || 'su';
      inputObject.dateRange = this.getDateRange(minAttribute, maxAttribute);
      inputObject.localeLabels = this.getLocaleLabels(locale);
      Object.defineProperties(inputObject, {
        valueAsDate: {
          get: function get() {
            if (!inputObject.value) {
              return null;
            }

            var format = dateFormat || 'yyyy-mm-dd';
            var parts = inputObject.value.match(/(\d+)/g);
            var i = 0;
            var fmt = {};
            format.replace(/(yyyy|dd|mm)/g, function (part) {
              fmt[part] = i;
              i += 1;
            }); // return null if no parts found

            if (!parts) {
              return null;
            } // create absolute date of given input


            var valueAsDate = new Date();
            valueAsDate.setFullYear(parts[fmt.yyyy], parts[fmt.mm] - 1, parts[fmt.dd]);
            valueAsDate.setHours(0, 0, 0, 0); // return null in case of invalid date

            if (isNaN(valueAsDate)) {
              return null;
            }

            return valueAsDate;
          },
          set: function set(val) {
            inputObject.value = Object(__WEBPACK_IMPORTED_MODULE_8__dateformat__["a" /* default */])(val, dateFormat); // trigger change event to execute event listeners on the date element

            var event; // IE event support check

            if (typeof Event === 'function') {
              event = new Event('change', {
                bubbles: true
              });
            } else {
              event = document.createEvent('Event');
              event.initEvent('change', true, true);
            }

            inputObject.dispatchEvent(event);
          }
        },
        valueAsNumber: {
          get: function get() {
            if (!inputObject.value) {
              return NaN;
            }

            return inputObject.valueAsDate.valueOf();
          },
          set: function set(val) {
            inputObject.valueAsDate = new Date(val);
          }
        }
      }); // watch for element attribute changes

      if ("MutationObserver" in window) {
        var mutationObserver = new MutationObserver(function (mutations) {
          mutations.forEach(function (mutation) {
            if (mutation.attributeName.indexOf('min') !== -1 || mutation.attributeName.indexOf('max') !== -1) {
              minAttribute = inputObject.getAttribute('min') || inputObject.getAttribute('data-min');
              maxAttribute = inputObject.getAttribute('max') || inputObject.getAttribute('data-max');
              inputObject.dateRange = _this.getDateRange(minAttribute, maxAttribute);
            } else if (mutation.attributeName === 'lang') {
              locale = inputObject.getAttribute(mutation.attributeName);
              inputObject.localeLabels = _this.getLocaleLabels(locale);
            } else if (mutation.attributeName === 'data-first-day') {
              inputObject.firstDayOfWeek = inputObject.getAttribute(mutation.attributeName);
            } else if (mutation.attributeName === 'data-date-format' || mutation.attributeName === 'date-format') {
              var date = inputObject.valueAsDate;
              dateFormat = inputObject.getAttribute(mutation.attributeName);

              if (date) {
                inputObject.valueAsDate = date; // reset date to update the format
              }
            }
          });
        });
        mutationObserver.observe(inputObject, {
          attributes: true
        });
      } // Open the picker when the input get focus,
      // also on various click events to capture it in all corner cases.
      // use const didAttach = Picker.attachTo(elm); to double check


      var showPicker = function showPicker() {
        inputObject.type = 'text';
        __WEBPACK_IMPORTED_MODULE_6__picker__["a" /* default */].attachTo(inputObject);
      };

      inputObject.addEventListener('focus', showPicker);
      inputObject.addEventListener('mouseup', showPicker);
      var minDate = inputObject.dateRange[0];
      var maxDate = inputObject.dateRange[1];
      inputObject.type = 'text';
      inputObject.readOnly = true;
    } // Will add the Picker to all inputs in the page.

  }, {
    key: "addPickerToDateInputs",
    value: function addPickerToDateInputs() {
      // Get and loop all input[type="date"]s that do not have '[data-has-picker]' yet.
      var dateInputs = document.querySelectorAll('input[type="date"]:not([data-has-picker])');
      var length = dateInputs.length;

      if (!length) {
        return false;
      }

      for (var i = 0; i < length; i += 1) {
        this.prepareInputForPicker(dateInputs[i]);
      }

      return true;
    }
  }, {
    key: "addPickerToOtherInputs",
    value: function addPickerToOtherInputs() {
      // Get and loop all the input[type="text"]s with
      // class date-polyfill that do not have '[data-has-picker]' yet.
      var dateInputs = document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])');
      var length = dateInputs.length;

      if (!length) {
        return false;
      }

      for (var i = 0; i < length; i += 1) {
        this.prepareInputForPicker(dateInputs[i]);
      }

      return true;
    }
  }]);

  return Input;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Input());

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(58);
__webpack_require__(12)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5);
var cof = __webpack_require__(22);
var MATCH = __webpack_require__(4)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(26);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(9)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(16);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(61);
var $iterCreate = __webpack_require__(112);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(113);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(37);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(13);
var fails = __webpack_require__(6);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dateSelect__ = __webpack_require__(116);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Picker = /*#__PURE__*/function () {
  function Picker() {
    var _this = this;

    _classCallCheck(this, Picker);

    // This is a singleton.
    if (window.thePicker) {
      return window.thePicker;
    } // The picker element. Unique tag name attempts to protect against
    // generic selectors.


    this.container = document.createElement('date-input-polyfill');
    this.container.className = 'date-input-polyfill';
    this.date = new Date();
    this.input = null;
    this.isOpen = false; // Add controls.
    // DateSelect Menu

    this.dateSelectWrapper = document.createElement('div');
    this.dateSelectWrapper.className = 'date-select-dropdown';
    this.selectWrapper = document.createElement('div');
    this.selectWrapper.className = 'select-container';
    this.dateSelectWrapper.appendChild(this.selectWrapper);
    this.monthSelect = document.createElement('div');
    this.monthSelect.className = 'select-wrapper month-select';
    this.selectWrapper.appendChild(this.monthSelect);
    this.yearSelect = new __WEBPACK_IMPORTED_MODULE_1__dateSelect__["b" /* YearSelect */]();
    this.selectWrapper.appendChild(this.yearSelect.returnDateSelectWrapper()); // Polyfill Header

    var dateSelectHeader = document.createElement('div');
    dateSelectHeader.className = 'date-select-header';
    this.dateHeaderButton = document.createElement('button');
    this.dateHeaderButton.className = 'date-header-button date-header-button-inactive';
    this.dateHeaderButton.addEventListener('click', function () {
      if (_this.dateHeaderButton.classList.contains('date-header-button-inactive')) {
        _this.dateHeaderButton.classList.add('date-header-button-active');

        _this.dateHeaderButton.classList.remove('date-header-button-inactive');

        _this.dateSelectWrapper.style.display = 'block';
      } else if (_this.dateHeaderButton.classList.contains('date-header-button-active')) {
        _this.dateHeaderButton.classList.add('date-header-button-inactive');

        _this.dateHeaderButton.classList.remove('date-header-button-active');

        _this.dateSelectWrapper.style.display = 'none'; // Refresh dayMatrix here cause performance

        _this.date.setMonth(_this.monthSelect.returnSelectedMonth());

        _this.date.setFullYear(_this.yearSelect.returnSelectedYear());

        _this.refreshDaysMatrix();
      }
    });
    dateSelectHeader.appendChild(this.dateHeaderButton);
    this.container.appendChild(dateSelectHeader);
    var dayMatrixWrapper = document.createElement('div');
    dayMatrixWrapper.className = 'day-matrix-wrapper';
    this.container.appendChild(dayMatrixWrapper);
    this.container.appendChild(this.dateSelectWrapper); // Setup unchanging DOM for days matrix.

    var daysMatrix = document.createElement('table');
    this.daysHead = document.createElement('thead');
    this.days = document.createElement('tbody'); // Click event to set that day as the date.
    // Uses event delegation.

    this.days.addEventListener('click', function (e) {
      var targetDay = e.target; // Check if targetDay is valid

      if (targetDay.textContent.length > 2) {
        return;
      } // Returns if target day has disabled flag


      if (targetDay.classList.contains("disabled")) {
        return;
      }

      var currentSelected = _this.days.querySelector('[data-selected]');

      if (currentSelected) {
        currentSelected.removeAttribute('data-selected');
      }

      targetDay.setAttribute('data-selected', ''); // Checks for next or prev month

      var jumpMonth = false;

      if (targetDay.classList.contains('next-month')) {
        if (_this.monthSelect.returnSelectedMonth() === 11) {
          _this.yearSelect.toggleByInput(_this.yearSelect.returnSelectedYear() + 1);
        }

        _this.monthSelect.toggleByMatrix('next');

        jumpMonth = true;
      } else if (targetDay.classList.contains('prev-month')) {
        if (_this.monthSelect.returnSelectedMonth() === 0) {
          _this.yearSelect.toggleByInput(_this.yearSelect.returnSelectedYear() - 1);
        }

        _this.monthSelect.toggleByMatrix('prev');

        jumpMonth = true;
      } // Updates if jump is detected


      if (jumpMonth) {
        _this.date = new Date();

        _this.date.setMonth(_this.monthSelect.returnSelectedMonth());

        _this.date.setFullYear(_this.yearSelect.returnSelectedYear());

        _this.dateHeaderButton.innerHTML = "".concat(_this.monthSelect.returnSelectedMonthAsLabel(), " ").concat(_this.yearSelect.returnSelectedYear());
      }

      _this.date.setDate(parseInt(targetDay.textContent));

      _this.setInput();
    });
    daysMatrix.appendChild(this.daysHead);
    daysMatrix.appendChild(this.days);
    dayMatrixWrapper.appendChild(daysMatrix);
    this.hide();
    document.body.appendChild(this.container);

    this.removeClickOut = function (e) {
      if (_this.isOpen) {
        var el = e.target;
        var isPicker = el === _this.container || el === _this.input;

        while (!isPicker && el !== null) {
          el = el.parentNode;
          isPicker = el === _this.container;
        }

        if (e.target.getAttribute('type') !== 'date' && !isPicker || !isPicker) {
          _this.hide();
        }
      }
    };
  } // Position picker below element. Align to element's right edge.


  _createClass(Picker, [{
    key: "positionPicker",
    value: function positionPicker(element) {
      var _this2 = this;

      var rekt = element.getBoundingClientRect();
      this.container.style.top = "".concat(rekt.top + rekt.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3, "px");
      var contRekt = this.container.getBoundingClientRect();
      var width = contRekt.width ? contRekt.width : 280;

      var classWithOutPos = function classWithOutPos() {
        _this2.container.className.replace('polyfill-left-aligned', '').replace('polyfill-right-aligned', '').replace(/\s+/g, ' ').trim();
      };

      var base = rekt.right - width;

      if (rekt.right < width) {
        base = rekt.left;
        this.container.className = "".concat(classWithOutPos(), " polyfill-left-aligned");
      } else {
        this.container.className = "".concat(classWithOutPos(), " polyfill-right-aligned");
      }

      this.container.style.left = "".concat(base + (document.documentElement.scrollLeft || document.body.scrollLeft), "px");
      this.show();
    } // Initiate I/O with given date input.

  }, {
    key: "attachTo",
    value: function attachTo(input) {
      if (input === this.input && this.isOpen) {
        return false;
      }

      this.input = input;
      this.syncPickerWithInput();
      this.positionPicker(this.input);
      return true;
    } // Hide.

  }, {
    key: "hide",
    value: function hide() {
      this.container.setAttribute('data-open', this.isOpen = false);
      this.dateHeaderButton.className = 'date-header-button date-header-button-inactive'; // Close the picker when clicking outside of a date input or picker.

      if (this.input) {
        this.dateSelectWrapper.style.display = 'none';
        this.input.blur();
      }

      document.removeEventListener('mousedown', this.removeClickOut);
      document.removeEventListener('touchstart', this.removeClickOut);
    } // Show.

  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      this.container.setAttribute('data-open', this.isOpen = true); // Close the picker when clicking outside of a date input or picker.

      setTimeout(function () {
        document.addEventListener('mousedown', _this3.removeClickOut);
        document.addEventListener('touchstart', _this3.removeClickOut);
      }, 500); // when used in a single-page app  or otherwise,
      // hide datepicker when the browser's back button is pressed

      window.onpopstate = function () {
        _this3.hide();
      };
    } // Match picker date with input date.

  }, {
    key: "syncPickerWithInput",
    value: function syncPickerWithInput() {
      var _this4 = this;

      // use selected date incase valid date is given
      if (this.input.valueAsDate != null) {
        this.date = this.input.valueAsDate;
      } else {
        this.date = new Date();
      } // set matrix header and locale


      this.createMatrixHeader(); // create month select by given language

      this.selectWrapper.removeChild(this.selectWrapper.getElementsByClassName('select-wrapper month-select')[0]);
      this.monthSelect = new __WEBPACK_IMPORTED_MODULE_1__dateSelect__["a" /* MonthSelect */](this.locale.months);
      this.selectWrapper.insertBefore(this.monthSelect.returnDateSelectWrapper(), this.selectWrapper.firstChild); // create new DateRange Object

      var minRange = new Date(this.input.dateRange[0].getTime());
      var maxRange = new Date(this.input.dateRange[1].getTime()); // if current year is in selection range

      if (this.date <= maxRange && this.date >= minRange) {
        this.monthSelect.toggleByInput(this.date.getMonth());
        this.yearSelect.toggleByInput(this.date.getFullYear());
      } else {
        var currentDate = new Date(); // check if default year needs to be calculated

        if (currentDate <= maxRange && currentDate >= minRange) {
          this.date = currentDate;
        } else {
          this.date = minRange;
        }

        this.monthSelect.toggleByInput(this.date.getMonth());
        this.yearSelect.toggleByInput(this.date.getFullYear());
      } // Setup click events for the selection Button


      this.dateHeaderButton.innerHTML = "".concat(this.monthSelect.returnSelectedMonthAsLabel(), " ").concat(this.yearSelect.returnSelectedYear());
      var dateSelectControlls = this.selectWrapper.getElementsByClassName('control');

      for (var i = 0; i < dateSelectControlls.length; i += 1) {
        dateSelectControlls[i].addEventListener('click', function () {
          _this4.dateHeaderButton.innerHTML = "".concat(_this4.monthSelect.returnSelectedMonthAsLabel(), " ").concat(_this4.yearSelect.returnSelectedYear());
        });
      }

      this.refreshDaysMatrix();
    } // Match input date with picker date.

  }, {
    key: "setInput",
    value: function setInput() {
      var _this5 = this;

      this.input.valueAsDate = this.date;
      this.input.focus();
      setTimeout(function () {
        // IE wouldn't hide, so in a timeout you go.
        _this5.hide();
      }, 100);
    }
  }, {
    key: "createMatrixHeader",
    value: function createMatrixHeader() {
      if (this.locale === this.input.localeLabels && this.firstDayOfWeek === this.input.firstDayOfWeek) {
        return false;
      }

      this.locale = this.input.localeLabels;
      this.firstDayOfWeek = this.input.firstDayOfWeek;
      var daysHeaderContent = [];

      for (var i = 0, len = this.locale.days.length; i < len; i += 1) {
        daysHeaderContent.push("<th scope=\"col\">".concat(this.locale.days[i], "</th>"));
      } // check if first day of week is monday


      if (this.input.firstDayOfWeek === 'mo') {
        daysHeaderContent.push(daysHeaderContent.shift());
      } // check if first day of week is saturday


      if (this.input.firstDayOfWeek === 'sa') {
        daysHeaderContent.unshift(daysHeaderContent.pop());
      }

      this.daysHead.innerHTML = "<tr> ".concat(daysHeaderContent.join(''), " </tr>");
      return true;
    }
  }, {
    key: "refreshDaysMatrix",
    value: function refreshDaysMatrix() {
      // Determine days for this month and year,
      // as well as on which weekdays they lie.
      var year = this.date.getFullYear(); // Get the year (2016).

      var month = this.date.getMonth(); // Get the month number (0-11).

      var oldDaysInCurrentMonth = []; // First weekday of month (0-6).

      var startDay = this.returnAbsoluteDate(year, month, 1).getDay(); // Get days in month (1-31).

      var maxDays = this.returnAbsoluteDate(year, month + 1, 0).getDate(); // check if first day of week is monday

      if (this.input.firstDayOfWeek === 'mo') {
        // update startDay to EU format -> start at mo
        if (startDay === 0) {
          startDay = 6;
        } else {
          startDay -= 1;
        }
      } // check if first day of week is saturday


      if (this.input.firstDayOfWeek === 'sa') {
        // update startDay to EU format -> start at mo
        if (startDay === 6) {
          startDay = 0;
        } else {
          startDay += 1;
        }
      } // adds days of the last month if this month dont start at 0


      if (startDay > 0) {
        var daysOfLastMonth = this.returnAbsoluteDate(year, month, 0).getDate();
        var daysToCollect = startDay;
        var dayPosition = daysToCollect - 1;

        for (var i = 0; i < daysToCollect; i += 1) {
          oldDaysInCurrentMonth.push(daysOfLastMonth - dayPosition);
          dayPosition -= 1;
        }
      } // The input's current date.


      var selDate = this.input.valueAsDate || false; // Are we in the input's currently-selected month and year?

      var selMatrix = selDate && year === selDate.getFullYear() && month === selDate.getMonth(); // Populate days matrix.

      var matrixHTML = []; // check if its the current month were looking at

      var today = new Date();
      var lookingAtCurrentMonth = false;

      if (this.date.getFullYear() === today.getFullYear()) {
        if (this.date.getMonth() === today.getMonth()) {
          lookingAtCurrentMonth = true;
        }
      }

      var minDate = this.input.dateRange[0];
      var maxDate = this.input.dateRange[1];

      for (var _i = 0; _i < maxDays + startDay; _i += 1) {
        // Add a row every 7 days.
        if (_i % 7 === 0) {
          matrixHTML.push("".concat(_i !== 0 ? "</tr>" : "", "<tr>"));
        } // Add new column.
        // If no days from this month in this column, it will be empty.


        if (_i + 1 <= startDay) {
          var calculatedPrevMonthDate = this.returnAbsoluteDate(year, month - 1, oldDaysInCurrentMonth[_i]);
          matrixHTML.push("<td class=\"prev-month \n                    ".concat(calculatedPrevMonthDate < minDate || calculatedPrevMonthDate > maxDate ? "disabled" : "", "\">").concat(oldDaysInCurrentMonth[_i], "</td>"));
        } else {
          // Populate day number.
          var dayNum = _i + 1 - startDay;
          var selected = selMatrix && selDate.getDate() === dayNum;
          var calculatedCurrentDate = this.returnAbsoluteDate(year, month, dayNum); // check if current item is current day

          if (lookingAtCurrentMonth && today.getDate() === dayNum) {
            // highlight the current day
            matrixHTML.push("<td data-day ".concat(selected ? "data-selected" : "", " class='current-day\n                        ").concat(calculatedCurrentDate < minDate || calculatedCurrentDate > maxDate ? "disabled" : "", "'>").concat(dayNum, "</td>"));
          } else {
            // display normal
            var dayTile = "<td data-day ".concat(selected ? "data-selected" : "", " \n                        class='").concat(calculatedCurrentDate < minDate || calculatedCurrentDate > maxDate ? "disabled" : "", "'>").concat(dayNum, "</td>");
            matrixHTML.push(dayTile);
          }
        }
      } // Max days displayed at ones


      var maxDayTiles = 42; // Current displayed Days

      var currentDisplayedDays = startDay + maxDays; // fill remaining space with next Month items

      if (currentDisplayedDays < maxDayTiles) {
        var calculatedNextMonthDate = this.returnAbsoluteDate(year, month + 2, 0);
        var nextMonthDayItemLabel = 1;

        while (currentDisplayedDays < maxDayTiles) {
          calculatedNextMonthDate.setDate(nextMonthDayItemLabel); // Add a row every 7 days.

          if (currentDisplayedDays % 7 === 0) {
            matrixHTML.push("".concat(nextMonthDayItemLabel !== 0 ? "</tr>" : "", "<tr>"));
          }

          matrixHTML.push("<td class=\"next-month\n                    ".concat(calculatedNextMonthDate < minDate || calculatedNextMonthDate > maxDate ? "disabled" : "", "\n                    \">").concat(nextMonthDayItemLabel, "</td>"));
          nextMonthDayItemLabel += 1;
          currentDisplayedDays += 1;
        }
      }

      this.days.innerHTML = matrixHTML.join('');
    }
  }, {
    key: "returnCurrentDate",
    value: function returnCurrentDate() {
      return this.date;
    }
  }, {
    key: "returnAbsoluteDate",
    value: function returnAbsoluteDate(year, month, day) {
      var absoluteDate = new Date();
      absoluteDate.setFullYear(year, month, day);
      absoluteDate.setHours(0, 0, 0, 0);
      return absoluteDate;
    }
  }]);

  return Picker;
}();

window.thePicker = new Picker();
/* harmony default export */ __webpack_exports__["a"] = (window.thePicker);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DateSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YearSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_reflect_construct__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_reflect_construct___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_reflect_construct__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_set_prototype_of__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_set_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_object_set_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_modules_web_dom_iterable__);







function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DateSelect = /*#__PURE__*/function () {
  function DateSelect() {
    _classCallCheck(this, DateSelect);

    this.dateSelectWrapper = document.createElement('div');
    this.dateSelectWrapper.className = 'select-wrapper';
    this.toggleUp = document.createElement('button');
    this.toggleUp.className = 'control up';
    this.toggleDown = document.createElement('button');
    this.toggleDown.className = 'control down';
    this.optionWrapper = document.createElement('div');
    this.optionWrapper.className = 'option-wrapper';
    this.dateSelectWrapper.appendChild(this.toggleUp);
    this.dateSelectWrapper.appendChild(this.optionWrapper);
    this.dateSelectWrapper.appendChild(this.toggleDown);
    this.date = new Date();
  }

  _createClass(DateSelect, [{
    key: "calculateDateOffset",
    value: function calculateDateOffset(dateArray, targetDate) {
      var dateArrayLength = dateArray.length;
      var calculatedDateOffset = 0;

      switch (true) {
        case targetDate < dateArray[2]:
          calculatedDateOffset = dateArrayLength - dateArray[2] + targetDate;
          break;

        case targetDate === dateArray[2]:
          // do nothing because default value fits
          break;

        case targetDate > dateArray[2]:
          calculatedDateOffset = targetDate - dateArray[2];
          break;

        default:
          // console.log('Error in MonthSelect calculateDateOffset');
          break;
      }

      return calculatedDateOffset;
    }
  }, {
    key: "rotate",
    value: function rotate(array, times) {
      var timesToRotate = times;

      while (timesToRotate > 0) {
        var temp = array.shift();
        array.push(temp);
        timesToRotate -= 1;
      }

      return array;
    }
  }, {
    key: "returnDateSelectWrapper",
    value: function returnDateSelectWrapper() {
      return this.dateSelectWrapper;
    }
  }]);

  return DateSelect;
}();
var YearSelect = /*#__PURE__*/function (_DateSelect) {
  _inherits(YearSelect, _DateSelect);

  var _super = _createSuper(YearSelect);

  function YearSelect() {
    var _this;

    _classCallCheck(this, YearSelect);

    _this = _super.call(this);
    _this.dateSelectWrapper.className = 'select-wrapper year-select';
    _this.yearArray = [];
    /* start Function */

    for (var i = 0; i < 5; i += 1) {
      var option = document.createElement('div');
      option.className = "option option-".concat(i);

      _this.optionWrapper.appendChild(option);
    }
    /* downClick Function */


    _this.toggleDown.addEventListener('click', function (buttonObject) {
      var activeButton = buttonObject; // update array order

      _this.yearArray.shift();

      _this.yearArray.push(_this.yearArray[_this.yearArray.length - 1] + 1);

      for (var _i = 0; _i < 5; _i += 1) {
        activeButton.target.previousElementSibling.getElementsByClassName('option')[_i].innerHTML = _this.yearArray[_i];
      }
    });
    /* upClick Function */


    _this.toggleUp.addEventListener('click', function (buttonObject) {
      var activeButton = buttonObject;

      if (_this.yearArray[2] === 1) {
        return;
      } // update array order


      _this.yearArray.pop();

      _this.yearArray.unshift(_this.yearArray[0] - 1);

      if (_this.yearArray[0] < 1) {
        _this.yearArray[0] = '';
      }

      for (var _i2 = 0; _i2 < 5; _i2 += 1) {
        activeButton.target.nextElementSibling.getElementsByClassName('option')[_i2].innerHTML = _this.yearArray[_i2];
      }
    });

    return _this;
  }

  _createClass(YearSelect, [{
    key: "toggleByInput",
    value: function toggleByInput(value) {
      var targetYear = value; // clear current values

      this.yearArray.length = 0; // create siblings

      targetYear -= 2;

      for (var i = 0; i < 5; i += 1) {
        if (targetYear < 1) {
          this.yearArray.push('');
        } else {
          this.yearArray.push(targetYear);
        }

        targetYear += 1;
      }

      for (var _i3 = 0; _i3 < 5; _i3 += 1) {
        this.optionWrapper.getElementsByClassName('option')[_i3].innerHTML = this.yearArray[_i3];
      }
    }
  }, {
    key: "returnSelectedYear",
    value: function returnSelectedYear() {
      return this.yearArray[2];
    }
  }]);

  return YearSelect;
}(DateSelect);
var MonthSelect = /*#__PURE__*/function (_DateSelect2) {
  _inherits(MonthSelect, _DateSelect2);

  var _super2 = _createSuper(MonthSelect);

  function MonthSelect(targetLocaleArray) {
    var _this2;

    _classCallCheck(this, MonthSelect);

    _this2 = _super2.call(this);
    _this2.dateSelectWrapper.className = 'select-wrapper month-select';
    _this2.currentMonth = _this2.date.getMonth();
    _this2.monthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    _this2.selectedLocaleArray = targetLocaleArray;
    _this2.monthStringArray = _this2.returnMonthStringArray(_this2.monthArray);
    /* start Function */

    for (var i = 0; i < 5; i += 1) {
      var option = document.createElement('div');
      option.className = "option option-".concat(i);
      option.innerHTML = _this2.monthStringArray[i];

      _this2.optionWrapper.appendChild(option);
    }
    /* downClick Function */


    _this2.toggleDown.addEventListener('click', function (buttonObject) {
      var activeButton = buttonObject; // update array order

      _this2.monthArray.push(_this2.monthArray.shift());

      var monthStringArray = _this2.returnMonthStringArray(_this2.monthArray);

      for (var _i4 = 0; _i4 < 5; _i4 += 1) {
        activeButton.target.previousElementSibling.getElementsByClassName('option')[_i4].innerHTML = monthStringArray[_i4];
      }
    });
    /* upClick Function */


    _this2.toggleUp.addEventListener('click', function (buttonObject) {
      var activeButton = buttonObject; // update array order

      _this2.monthArray.unshift(_this2.monthArray.pop());

      var monthStringArray = _this2.returnMonthStringArray(_this2.monthArray);

      for (var _i5 = 0; _i5 < 5; _i5 += 1) {
        activeButton.target.nextElementSibling.getElementsByClassName('option')[_i5].innerHTML = monthStringArray[_i5];
      }
    });

    return _this2;
  }

  _createClass(MonthSelect, [{
    key: "returnMonthStringArray",
    value: function returnMonthStringArray(monthArray) {
      var monthStringArray = [];
      var localeArray = this.selectedLocaleArray;

      if (!Array.isArray(monthArray)) {
        return this.selectedLocaleArray[monthArray];
      }

      monthArray.forEach(function (index) {
        monthStringArray.push(localeArray[index].substring(0, 3));
      });
      return monthStringArray;
    }
  }, {
    key: "toggleByInput",
    value: function toggleByInput(value) {
      if (value !== this.monthArray[2]) {
        this.monthArray = this.rotate(this.monthArray, this.calculateDateOffset(this.monthArray, value));
        this.monthStringArray = this.returnMonthStringArray(this.monthArray);

        for (var i = 0; i < 5; i += 1) {
          this.optionWrapper.getElementsByClassName('option')[i].innerHTML = this.monthStringArray[i];
        }
      }
    }
  }, {
    key: "toggleByMatrix",
    value: function toggleByMatrix(mode) {
      switch (mode) {
        case 'next':
          this.monthArray = this.rotate(this.monthArray, 1);
          break;

        case 'prev':
          this.monthArray = this.rotate(this.monthArray, 11);
          break;

        default: // console.log('mode is not defined in toggleMonthByMatrix');

      }

      this.monthStringArray = this.returnMonthStringArray(this.monthArray);

      for (var i = 0; i < 5; i += 1) {
        this.optionWrapper.getElementsByClassName('option')[i].innerHTML = this.monthStringArray[i];
      }
    }
  }, {
    key: "returnSelectedMonthAsLabel",
    value: function returnSelectedMonthAsLabel() {
      return this.returnMonthStringArray(this.monthArray[2]);
    }
  }, {
    key: "returnSelectedMonth",
    value: function returnSelectedMonth() {
      return this.monthArray[2];
    }
  }]);

  return MonthSelect;
}(DateSelect);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(3) && /./g.flags != 'g') __webpack_require__(2).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(59)
});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(12);
var create = __webpack_require__(37);
var aFunction = __webpack_require__(26);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(5);
var fails = __webpack_require__(6);
var bind = __webpack_require__(119);
var rConstruct = (__webpack_require__(0).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(26);
var isObject = __webpack_require__(5);
var invoke = __webpack_require__(120);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(122).set });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(41)(Function.call, __webpack_require__(38).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Localizations for UI text.
// Keys correspond to applicable 'lang' values, delimited by an underscore.
// Days must be listed in the order Sunday till Saturday.
// Months must be listed in the order January till December.
var localisations = {
  'ar': {
    days: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
    months: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر']
  },
  'en_en-US_en-UK': {
    days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },

  /* Simplified Chinese */
  'zh_zh-CN': {
    days: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /* Simplified Chinese, informal */
  'zh-Hans_zh-Hans-CN': {
    days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /* Traditional Chinese */
  'zh-Hant_zh-Hant-TW': {
    days: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /* German (Germany) */
  'de_de-DE': {
    days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    today: 'Heute',
    format: 'D-M-Y'
  },

  /* Dutch */
  'nl_nl-NL_nl-BE': {
    days: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
    months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
    today: 'Vandaag',
    format: 'D/M/Y'
  },

  /* Portuguese */
  'pt_pt-BR': {
    days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    today: 'Hoje'
  },

  /* French */
  'fr_fr-FR_fr-BE': {
    days: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    today: "Aujourd'hui",
    format: 'D/M/Y'
  },

  /* Spanish */
  'es_es-VE': {
    days: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    today: 'Hoy',
    format: 'D/M/Y'
  },

  /* Italian */
  'it_it-IT': {
    days: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    today: 'Oggi',
    format: 'D/M/Y'
  },

  /* Danish */
  'da_da-dk': {
    days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
    months: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
    today: 'I dag',
    format: 'dd/MM-YYYY'
  },

  /* Russian */
  'ru_ru-RU_ru-UA_ru-KZ_ru-MD': {
    days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    today: 'Сегодня',
    format: 'D.M.Y'
  },

  /* Ukrainian */
  'uk_uk-UA': {
    days: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    today: 'Cьогодні',
    format: 'D.M.Y'
  },

  /* Swedish (Sweden) */
  'sv_sv-SE': {
    days: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    months: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
    today: 'Idag',
    format: 'YYYY-MM-dd'
  },

  /* Finnish (Finland) */
  'fi_fi-FI': {
    days: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
    months: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
    today: 'Tänään',
    format: 'dd/MM/YYYY'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (localisations);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_symbol_async_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_match__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_match___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_match__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_regexp_replace__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_es6_regexp_replace__);
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */








function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var dateFormat = function () {
  var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g; // Regexes and supporting functions are cached through closure

  return function (date, mask, utc, gmt) {
    // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
    if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }

    date = date || new Date();

    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    if (isNaN(date)) {
      throw TypeError('Invalid date');
    }

    mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']); // Allow setting the utc/gmt argument via the mask

    var maskSlice = mask.slice(0, 4);

    if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
      mask = mask.slice(4);
      utc = true;

      if (maskSlice === 'GMT:') {
        gmt = true;
      }
    }

    var _ = utc ? 'getUTC' : 'get';

    var d = date[_ + 'Date']();

    var D = date[_ + 'Day']();

    var m = date[_ + 'Month']();

    var y = date[_ + 'FullYear']();

    var H = date[_ + 'Hours']();

    var M = date[_ + 'Minutes']();

    var s = date[_ + 'Seconds']();

    var L = date[_ + 'Milliseconds']();

    var o = utc ? 0 : date.getTimezoneOffset();
    var W = getWeek(date);
    var N = getDayOfWeek(date);
    var flags = {
      d: d,
      dd: pad(d),
      ddd: dateFormat.i18n.dayNames[D],
      dddd: dateFormat.i18n.dayNames[D + 7],
      m: m + 1,
      mm: pad(m + 1),
      mmm: dateFormat.i18n.monthNames[m],
      mmmm: dateFormat.i18n.monthNames[m + 12],
      yy: String(y).length < 3 ? y : String(y).slice(String(y).length - 2),
      yyyy: pad(y, 4),
      h: H % 12 || 12,
      hh: pad(H % 12 || 12),
      H: H,
      HH: pad(H),
      M: M,
      MM: pad(M),
      s: s,
      ss: pad(s),
      l: pad(L, 3),
      L: pad(Math.round(L / 10)),
      t: H < 12 ? 'a' : 'p',
      tt: H < 12 ? 'am' : 'pm',
      T: H < 12 ? 'A' : 'P',
      TT: H < 12 ? 'AM' : 'PM',
      Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
      o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
      W: W,
      N: N
    };
    return mask.replace(token, function (match) {
      if (match in flags) {
        return flags[match];
      }

      return match.slice(1, match.length - 1);
    });
  };
}();

dateFormat.masks = {
  'default': 'ddd mmm dd yyyy HH:MM:ss',
  'shortDate': 'm/d/yy',
  'mediumDate': 'mmm d, yyyy',
  'longDate': 'mmmm d, yyyy',
  'fullDate': 'dddd, mmmm d, yyyy',
  'shortTime': 'h:MM TT',
  'mediumTime': 'h:MM:ss TT',
  'longTime': 'h:MM:ss TT Z',
  'isoDate': 'yyyy-mm-dd',
  'isoTime': 'HH:MM:ss',
  'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
  'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
  'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
}; // Internationalization strings

dateFormat.i18n = {
  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

function pad(val, len) {
  val = String(val);
  len = len || 2;

  while (val.length < len) {
    val = "0".concat(val);
  }

  return val;
}
/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */


function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Change date to Thursday same week

  targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3); // Take January 4th as it is always in week 1 (see ISO 8601)

  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4); // Change date to Thursday same week

  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3); // Check if daylight-saving-time-switch occured and correct for it

  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds); // Number of weeks between target Thursday and first Thursday

  var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
  return 1 + Math.floor(weekDiff);
}
/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 *
 * @param  {Object} `date`
 * @return {Number}
 */


function getDayOfWeek(date) {
  var dow = date.getDay();

  if (dow === 0) {
    dow = 7;
  }

  return dow;
}
/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */


function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (_typeof(val) !== 'object') {
    return _typeof(val);
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val).slice(8, -1).toLowerCase();
}

/* harmony default export */ __webpack_exports__["a"] = (dateFormat);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_time_polyfill_scss__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_time_polyfill_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__input_time_polyfill_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(128);



var addPickers = function addPickers() {
  Object(__WEBPACK_IMPORTED_MODULE_1__input__["a" /* addPickerToOtherInputs */])(); // Check if type="time" is supported.

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__input__["c" /* supportsTimeInput */])()) {
    Object(__WEBPACK_IMPORTED_MODULE_1__input__["b" /* addPickerToTimeInputs */])();
  }
}; // Run the above code on any <input type="time"> in the document, also on dynamically created ones.


addPickers();
document.addEventListener("DOMContentLoaded", function () {
  addPickers();
}); // This is also on mousedown event so it will capture new inputs that might
// be added to the DOM dynamically.

document.querySelector("body").addEventListener("mousedown", function () {
  addPickers();
});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(127);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(69)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./input-time-polyfill.scss", function() {
		var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./input-time-polyfill.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(68)(false);
// Module
exports.push([module.i, "input[readonly] {\n  background: transparent !important; }\n\n@supports (-webkit-touch-callout: none) {\n  /* CSS specific to iOS devices */\n  input[type=\"date\"], input[type=\"time\"], input[type=\"datetime-local\"], input[type=\"month\"] {\n    min-height: 44px; } }\n\ninput-time-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  font-size: 12px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.22);\n  cursor: default;\n  z-index: 100;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: hidden;\n  display: block;\n  width: 210px;\n  height: 230px; }\n  input-time-polyfill[data-open=\"false\"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0; }\n  input-time-polyfill[data-open=\"true\"] {\n    visibility: visible; }\n  input-time-polyfill section {\n    width: 100%; }\n    input-time-polyfill section label {\n      width: 33.333333%;\n      text-align: center;\n      line-height: 30px; }\n  input-time-polyfill div {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    font-size: 12px;\n    box-shadow: none;\n    display: inline-block;\n    border: 0;\n    border-radius: 0;\n    border-bottom: 1px solid #dadfe1;\n    height: 200px;\n    vertical-align: top;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    overflow: overlay;\n    width: 70px;\n    padding: 4px; }\n    input-time-polyfill div:first-of-type {\n      border-right: 1px solid #dadfe1;\n      border-radius: 5px 0 0 0;\n      -moz-border-radius: 5px 0 0 0;\n      -webkit-border-radius: 5px 0 0 0; }\n    input-time-polyfill div > span {\n      text-align: center;\n      font-size: 12px;\n      padding: 8px;\n      display: block; }\n      input-time-polyfill div > span:hover {\n        background-color: #ddd; }\n  input-time-polyfill [data-selected='1'] {\n    font-weight: bold;\n    background: #d8eaf6; }\n  input-time-polyfill ::-webkit-scrollbar {\n    width: 0px;\n    height: 0px; }\n  input-time-polyfill ::-webkit-scrollbar-thumb {\n    background: transparent; }\n  input-time-polyfill ::-webkit-scrollbar-track {\n    background: transparent; }\n\n.time-polyfill {\n  width: 40px; }\n", ""]);



/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (immutable) */ __webpack_exports__["c"] = supportsTimeInput;
/* harmony export (immutable) */ __webpack_exports__["b"] = addPickerToTimeInputs;
/* harmony export (immutable) */ __webpack_exports__["a"] = addPickerToOtherInputs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_regexp_split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_string_repeat__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_string_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_string_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es7_string_pad_start__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es7_string_pad_start___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es7_string_pad_start__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__timePicker__ = __webpack_require__(131);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

    padString = String(typeof padString !== 'undefined' ? padString : ' ');

    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return padString.slice(0, targetLength) + String(this);
    }
  };
}

var arLocals = {
  'am': 'ص',
  'pm': 'م',
  'hour': 'ساعه',
  'min': 'دقيقة',
  'period': 'ص م'
};
var enLocals = {
  'am': 'AM',
  'pm': 'PM',
  'hour': 'Hour',
  'min': 'Minute',
  'period': 'Period'
};

var Input = function Input(input) {
  var _this = this;

  _classCallCheck(this, Input);

  this.element = input;
  this.element.setAttribute("data-has-picker", "");
  this.element.readOnly = true;
  this.locals = null;
  var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');

  if (htmlLang == 'en') {
    this.locals = enLocals;
  } else {
    this.locals = arLocals;
  }

  var selectedPart = -1;

  var selectRange = function selectRange() {
    if (_this.element.setSelectionRange) {
      if (_this.element.selectedPart == 0) {
        _this.element.setSelectionRange(0, 2);
      } else if (_this.element.selectedPart == 1) {
        _this.element.setSelectionRange(3, 5);
      } else if (_this.element.selectedPart == 2) {
        _this.element.setSelectionRange(6, 8);
      }
    }
  };

  Object.defineProperties(this.element, {
    selectedPart: {
      get: function get() {
        return selectedPart;
      },
      set: function set(val) {
        selectedPart = val;
      }
    },
    valueAsTime: {
      get: function get() {
        if (!_this.element.value) {
          return null;
        }

        var pParts = _this.element.value.split(" ");

        var parts = pParts[0].split(":");
        return {
          hour: parseInt(parts[0], 10) || 0,
          minute: parseInt(parts[1], 10) || 0,
          ampm: pParts[1] || _this.locals['am']
        };
      },
      set: function set(val) {
        var newVal = "";

        if (typeof val.hour !== "undefined") {
          newVal += Math.max(Math.min(val.hour, 23), 0).toString().padStart(2, "0");
        } else {
          newVal += "--";
        }

        newVal += ":";

        if (typeof val.minute !== "undefined") {
          newVal += Math.max(Math.min(val.minute, 59), 0).toString().padStart(2, "0");
        } else {
          newVal += "--";
        }

        newVal += " ";

        if (typeof val.ampm !== "undefined" && val.ampm !== "--") {
          newVal += _this.locals[val.ampm] || val.ampm;
        } else {
          newVal += '--';
        }

        _this.element.value = newVal;
        selectRange();
      }
    }
  }); // Open the picker when the input get focus,
  // also on various click events to capture it in all corner cases.

  var showPicker = function showPicker(e) {
    var elm = _this.element;
    elm.type = 'text';
    var didAttach = __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].attachTo(elm);
    selectedPart = elm.selectionStart < 3 ? 0 : 1;
    selectRange();
  };

  this.element.addEventListener("focus", showPicker);
  this.element.addEventListener("mouseup", showPicker); // Update the picker if the date changed manually in the input.

  this.element.addEventListener("keydown", function (e) {
    var time = {
      hour: null,
      minute: null
    };

    switch (e.keyCode) {
      case 9:
      case 27:
      case 13:
        __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].hide();
        break;

      case 38:
        if (_this.element.valueAsTime) {
          time = {
            hour: _this.element.valueAsTime.hour - (_this.element.selectedPart == 0 ? 1 : 0),
            minute: _this.element.valueAsTime.minute - (_this.element.selectedPart == 1 ? 1 : 0)
          };
          _this.element.valueAsTime = time;
          __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].pingInput();
          e.preventDefault();
          return false;
        }

        break;

      case 40:
        if (_this.element.valueAsTime) {
          time = {
            hour: _this.element.valueAsTime.hour + (_this.element.selectedPart == 0 ? 1 : 0),
            minute: _this.element.valueAsTime.minute + (_this.element.selectedPart == 1 ? 1 : 0)
          };
          _this.element.valueAsTime = time;
          __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].pingInput();
          e.preventDefault();
          return false;
        }

        break;

      case 37:
        if (_this.element.valueAsTime) {
          _this.element.selectedPart = 0;
          _this.element.valueAsTime = _this.element.valueAsTime;
          e.preventDefault();
          return false;
        }

        break;

      case 39:
        if (_this.element.valueAsTime) {
          _this.element.selectedPart = 1;
          _this.element.valueAsTime = _this.element.valueAsTime;
          e.preventDefault();
          return false;
        }

        break;
    }

    __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].sync();
  });
  this.element.addEventListener("keyup", function (e) {
    __WEBPACK_IMPORTED_MODULE_4__timePicker__["a" /* default */].sync();
  });

  if (this.element.value.length == 0) {
    this.element.valueAsTime = {};
  }
}; // Return false if the browser does not support input[type="date"].



function supportsTimeInput() {
  var input = document.createElement("input");
  input.setAttribute("type", "time");
  var notADateValue = "not-a-time";
  input.setAttribute("value", notADateValue);
  var isDesktop = window.matchMedia('(min-width: 993px)').matches;
  if (isDesktop) return false;
  return !(input.value === notADateValue);
} // Will add the Picker to all inputs in the page.

function addPickerToTimeInputs() {
  // Get and loop all the input[type="time"]s in the page that do not have `[data-has-picker]` yet.
  var timeInputs = document.querySelectorAll("input[type=\"time\"]:not([data-has-picker])");
  var length = timeInputs.length;

  if (!length) {
    return false;
  }

  for (var i = 0; i < length; ++i) {
    new Input(timeInputs[i]);
  }
}
function addPickerToOtherInputs() {
  // Get and loop all the input[type="text"] class time-polyfill in the page that do not have `[data-has-picker]` yet.
  var timeInputs = document.querySelectorAll("input[type=\"text\"].time-polyfill:not([data-has-picker])");
  var length = timeInputs.length;

  if (!length) {
    return false;
  }

  for (var i = 0; i < length; ++i) {
    new Input(timeInputs[i]);
  }
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(23);
var repeat = __webpack_require__(74);
var defined = __webpack_require__(18);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_get_own_property_descriptors__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_get_own_property_descriptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es7_object_get_own_property_descriptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_object_keys__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es6_regexp_to_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_replace__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_array_iterator__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_array_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_modules_es6_array_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_string_repeat__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_string_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_modules_es6_string_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_modules_es7_string_pad_start__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_modules_es7_string_pad_start___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_modules_es7_string_pad_start__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;

    padString = String(typeof padString !== 'undefined' ? padString : ' ');

    if (this.length > targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return padString.slice(0, targetLength) + String(this);
    }
  };
}

var arLocals = {
  'am': 'ص',
  'pm': 'م',
  'hour': 'ساعه',
  'min': 'دقيقة',
  'period': 'ص م'
};
var enLocals = {
  'am': 'AM',
  'pm': 'PM',
  'hour': 'Hour',
  'min': 'Minute',
  'period': 'Period'
};

var TimePicker = /*#__PURE__*/function () {
  function TimePicker() {
    var _this = this;

    _classCallCheck(this, TimePicker);

    // This is a singleton.
    if (window.timePicker) {
      return window.timePicker;
    }

    this.input = null;
    this.isOpen = false;
    this.locals = null;
    var htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');

    if (htmlLang == 'en') {
      this.locals = enLocals;
    } else {
      this.locals = arLocals;
    }

    this.values = {
      hour: 0,
      min: 0,
      ampm: 'am'
    };
    this.time = {
      hour: null,
      minute: null,
      ampm: null
    }; // The picker element. Unique tag name attempts to protect against
    // generic selectors.

    this.container = document.createElement("input-time-polyfill");
    var divLabels = document.createElement("section");
    divLabels.className = "divLabels";
    var hSpanHours = document.createElement("label");
    hSpanHours.innerHTML = this.locals['hour'];
    divLabels.appendChild(hSpanHours);
    var hSpanMin = document.createElement("label");
    hSpanMin.innerHTML = this.locals['min'];
    divLabels.appendChild(hSpanMin);
    var hSpanAmppm = document.createElement("label");
    hSpanAmppm.innerHTML = this.locals['period'];
    divLabels.appendChild(hSpanAmppm);
    this.container.appendChild(divLabels); // Add controls.
    // Hours picker.

    this.hour = document.createElement("div");

    var hourClick = function hourClick(value) {
      _this.values.hour = value;
      _this.time = _objectSpread(_objectSpread({}, _this.time), {}, {
        hour: parseInt(_this.values.hour) || 0
      });
      _this.input.selectedPart = 0;

      _this.setInput(false);
    };

    this.createRangeSelect(this.hour, 1, 12, undefined, hourClick);
    this.hour.className = "hourSelect";
    this.container.appendChild(this.hour); // Minutes picker.

    this.minute = document.createElement("div");

    var minClick = function minClick(value) {
      _this.values.min = value;
      _this.time = _objectSpread(_objectSpread({
        hour: 0
      }, _this.time), {}, {
        minute: parseInt(_this.values.min) || 0
      });
      _this.input.selectedPart = 1;

      _this.setInput(false);
    };

    this.createRangeSelect(this.minute, 0, 59, undefined, minClick);
    this.minute.className = "minuteSelect";
    this.container.appendChild(this.minute); // Hours AM,PM.

    this.ampm = document.createElement("div");
    this.ampm.setAttribute("size", "2");
    this.ampm.innerHTML = "";

    var amPmClick = function amPmClick(value) {
      _this.values.ampm = value;
      _this.time = _objectSpread(_objectSpread({
        hour: 0,
        minute: 0
      }, _this.time), {}, {
        ampm: _this.values.ampm || 'am'
      });
      _this.input.selectedPart = 2;

      _this.setInput(false);
    };

    this.createRangeSelectAmPmOption(this.ampm, this.locals['am'], 'am', amPmClick);
    this.createRangeSelectAmPmOption(this.ampm, this.locals['pm'], 'pm', amPmClick);
    this.ampm.className = "ampmSelect";
    this.container.appendChild(this.ampm);
    this.hide();
    document.body.appendChild(this.container);

    this.removeClickOut = function (e) {
      if (_this.isOpen) {
        var el = e.target;
        var isPicker = el === _this.container || el === _this.input;

        while (!isPicker && (el = el.parentNode)) {
          isPicker = el === _this.container;
        }

        (e.target.getAttribute("type") !== "date" && !isPicker || !isPicker) && _this.hide();
      }
    };

    this.removeBlur = function (e) {
      if (_this.isOpen) {
        _this.hide();
      }
    };
  } // Hide.


  _createClass(TimePicker, [{
    key: "hide",
    value: function hide() {
      this.container.setAttribute("data-open", this.isOpen = false); // Close the picker when clicking outside of a date input or picker.

      if (this.input) {
        this.input.blur();
      }

      document.removeEventListener("mousedown", this.removeClickOut);
      document.removeEventListener("touchstart", this.removeClickOut);
    } // Show.

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      this.container.setAttribute("data-open", this.isOpen = true); // Close the picker when clicking outside of a date input or picker.

      setTimeout(function () {
        document.addEventListener("mousedown", _this2.removeClickOut);
        document.addEventListener("touchstart", _this2.removeClickOut);
      }, 500); // when used in a single-page app  or otherwise,
      // hide datepicker when the browser's back button is pressed

      window.onpopstate = function () {
        _this2.hide();
      };
    } // Position picker below element. Align to element's right edge.

  }, {
    key: "goto",
    value: function goto(element) {
      var _this3 = this;

      var rekt = element.getBoundingClientRect();
      this.container.style.top = "".concat(rekt.top + rekt.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3, "px");
      var contRekt = this.container.getBoundingClientRect();
      var width = contRekt.width ? contRekt.width : 280;

      var classWithOutPos = function classWithOutPos() {
        return _this3.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
      };

      var base = rekt.right - width;

      if (rekt.right < width) {
        base = rekt.left;
        this.container.className = "".concat(classWithOutPos(), " polyfill-left-aligned");
      } else {
        this.container.className = "".concat(classWithOutPos(), " polyfill-right-aligned");
      }

      this.container.style.left = "".concat(base + (document.documentElement.scrollLeft || document.body.scrollLeft), "px");
      this.show();
    } // Initiate I/O with given date input.

  }, {
    key: "attachTo",
    value: function attachTo(input) {
      if (input === this.input && this.isOpen) {
        return false;
      }

      this.input = input;
      this.sync();
      this.goto(this.input);
      return true;
    } // Match picker time with input time.

  }, {
    key: "sync",
    value: function sync() {
      // fixes bug where an empty calendar appears if year is missing from keyboard input
      this.time = this.input.valueAsTime;

      if (this.time) {
        this.hour.value = this.time.hour;
        this.minute.value = this.time.minute;
        this.ampm.value = this.time.ampm;
      }
    } // Match input date with picker date.

  }, {
    key: "setInput",
    value: function setInput(hide) {
      var _this4 = this;

      this.input.valueAsTime = this.time;
      this.input.focus();

      if (hide) {
        setTimeout(function () {
          // IE wouldn't hide, so in a timeout you go.
          _this4.hide();
        }, 100);
      }

      this.pingInput();
    }
  }, {
    key: "pingInput",
    value: function pingInput() {
      // Dispatch DOM events to the input.
      var inputEvent;
      var changeEvent; // Modern event creation.

      try {
        inputEvent = new Event("input");
        changeEvent = new Event("change");
      } catch (e) {
        // Old-fashioned way.
        inputEvent = document.createEvent("KeyboardEvent");
        inputEvent.initEvent("input", true, false);
        changeEvent = document.createEvent("KeyboardEvent");
        changeEvent.initEvent("change", true, false);
      }

      this.input.dispatchEvent(inputEvent);
      this.input.dispatchEvent(changeEvent);
    }
  }, {
    key: "createRangeSelect",
    value: function createRangeSelect(theSelect, min, max, namesArray, onClickEvent) {
      theSelect.setAttribute("size", "5");
      theSelect.innerHTML = "";

      for (var i = min; i <= max; ++i) {
        var aOption = document.createElement("span");
        theSelect.appendChild(aOption);
        aOption.addEventListener("click", function (e) {
          var target = e.target;
          var children = theSelect.children;

          for (var j = 0; j < children.length; j++) {
            var child = children[j];
            child.setAttribute('data-selected', 0);
          }

          target.setAttribute('data-selected', 1);
          var value = target.getAttribute('value');
          onClickEvent(value);
        }, false);
        var theText = namesArray ? namesArray[i - min] : i;
        aOption.innerHTML = theText.toString().padStart(2, "0"); //aOption.value = i;

        aOption.setAttribute('value', i);
        aOption.setAttribute('data-selected', 0);
      }

      return theSelect;
    }
  }, {
    key: "createRangeSelectAmPmOption",
    value: function createRangeSelectAmPmOption(theSelect, text, value, onClickEvent) {
      var aOptionAm = document.createElement("span");
      theSelect.appendChild(aOptionAm);
      aOptionAm.innerHTML = text; //aOptionAm.value = 'am';

      aOptionAm.setAttribute('value', value);
      aOptionAm.setAttribute('data-selected', 0);
      aOptionAm.addEventListener("click", function (e) {
        var target = e.target;
        var children = theSelect.children;

        for (var j = 0; j < children.length; j++) {
          var child = children[j];
          child.setAttribute('data-selected', 0);
        }

        target.setAttribute('data-selected', 1);
        var value = target.getAttribute('value');
        onClickEvent(value);
      }, false);
      return theSelect;
    }
  }]);

  return TimePicker;
}();

window.timePicker = new TimePicker();
/* harmony default export */ __webpack_exports__["a"] = (window.timePicker);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(12);
var ownKeys = __webpack_require__(133);
var toIObject = __webpack_require__(8);
var gOPD = __webpack_require__(38);
var createProperty = __webpack_require__(134);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(30);
var gOPS = __webpack_require__(28);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(0).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(2);
var createDesc = __webpack_require__(15);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ })
/******/ ]);