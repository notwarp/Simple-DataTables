/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject$1 = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject$1(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject$1(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject: isObject$1,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  toJSONObject
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/* eslint-env browser */

var browser = typeof self == 'object' ? self.FormData : window.FormData;

var FormData$2 = browser;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliant(thing) {
  return thing && utils.isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator];
}

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData$2 || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && isSpecCompliant(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        (utils.isFileList(value) || utils.endsWith(key, '[]') && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = FormData;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

function isValidHeaderName(str) {
  return /^[-_a-zA-Z]+$/.test(str.trim());
}

function matchHeaderValue(context, value, header, filter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.2.3";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer !== undefined) {
      validator.assertOptions(paramsSerializer, {
        encode: validators.function,
        serialize: validators.function
      }, true);
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// this module should only have a default export
var axios$1 = axios;

function e(t,n,o){var s;return "#text"===t.nodeName?s=o.document.createTextNode(t.data):"#comment"===t.nodeName?s=o.document.createComment(t.data):(n?s=o.document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):"svg"===t.nodeName.toLowerCase()?(s=o.document.createElementNS("http://www.w3.org/2000/svg","svg"),n=!0):s=o.document.createElement(t.nodeName),t.attributes&&Object.entries(t.attributes).forEach((function(e){var t=e[0],n=e[1];return s.setAttribute(t,n)})),t.childNodes&&t.childNodes.forEach((function(t){return s.appendChild(e(t,n,o))})),o.valueDiffing&&(t.value&&(s instanceof HTMLButtonElement||s instanceof HTMLDataElement||s instanceof HTMLInputElement||s instanceof HTMLLIElement||s instanceof HTMLMeterElement||s instanceof HTMLOptionElement||s instanceof HTMLProgressElement||s instanceof HTMLParamElement)&&(s.value=t.value),t.checked&&s instanceof HTMLInputElement&&(s.checked=t.checked),t.selected&&s instanceof HTMLOptionElement&&(s.selected=t.selected))),s}var t=function(e,t){for(t=t.slice();t.length>0;){var n=t.splice(0,1)[0];e=e.childNodes[n];}return e};function n(n,o,s){var i,a,c,l=o[s._const.action],r=o[s._const.route];[s._const.addElement,s._const.addTextElement].includes(l)||(i=t(n,r));var u={diff:o,node:i};if(s.preDiffApply(u))return !0;switch(l){case s._const.addAttribute:if(!(i&&i instanceof Element))return !1;i.setAttribute(o[s._const.name],o[s._const.value]);break;case s._const.modifyAttribute:if(!(i&&i instanceof Element))return !1;i.setAttribute(o[s._const.name],o[s._const.newValue]),i instanceof HTMLInputElement&&"value"===o[s._const.name]&&(i.value=o[s._const.newValue]);break;case s._const.removeAttribute:if(!(i&&i instanceof Element))return !1;i.removeAttribute(o[s._const.name]);break;case s._const.modifyTextElement:if(!(i&&i instanceof Text))return !1;s.textDiff(i,i.data,o[s._const.oldValue],o[s._const.newValue]);break;case s._const.modifyValue:if(!i||void 0===i.value)return !1;i.value=o[s._const.newValue];break;case s._const.modifyComment:if(!(i&&i instanceof Comment))return !1;s.textDiff(i,i.data,o[s._const.oldValue],o[s._const.newValue]);break;case s._const.modifyChecked:if(!i||void 0===i.checked)return !1;i.checked=o[s._const.newValue];break;case s._const.modifySelected:if(!i||void 0===i.selected)return !1;i.selected=o[s._const.newValue];break;case s._const.replaceElement:i.parentNode.replaceChild(e(o[s._const.newValue],"svg"===o[s._const.newValue].nodeName.toLowerCase(),s),i);break;case s._const.relocateGroup:Array.apply(void 0,new Array(o[s._const.groupLength])).map((function(){return i.removeChild(i.childNodes[o[s._const.from]])})).forEach((function(e,t){0===t&&(c=i.childNodes[o[s._const.to]]),i.insertBefore(e,c||null);}));break;case s._const.removeElement:i.parentNode.removeChild(i);break;case s._const.addElement:var d=(h=r.slice()).splice(h.length-1,1)[0];if(!((i=t(n,h))instanceof Element))return !1;i.insertBefore(e(o[s._const.element],"http://www.w3.org/2000/svg"===i.namespaceURI,s),i.childNodes[d]||null);break;case s._const.removeTextElement:if(!i||3!==i.nodeType)return !1;i.parentNode.removeChild(i);break;case s._const.addTextElement:var h;d=(h=r.slice()).splice(h.length-1,1)[0];if(a=s.document.createTextNode(o[s._const.value]),!(i=t(n,h)).childNodes)return !1;i.insertBefore(a,i.childNodes[d]||null);break;default:console.log("unknown action");}return s.postDiffApply({diff:u.diff,node:u.node,newNode:a}),!0}function o(e,t,n){var o=e[t];e[t]=e[n],e[n]=o;}function s(e,t,s){(t=t.slice()).reverse(),t.forEach((function(t){!function(e,t,s){switch(t[s._const.action]){case s._const.addAttribute:t[s._const.action]=s._const.removeAttribute,n(e,t,s);break;case s._const.modifyAttribute:o(t,s._const.oldValue,s._const.newValue),n(e,t,s);break;case s._const.removeAttribute:t[s._const.action]=s._const.addAttribute,n(e,t,s);break;case s._const.modifyTextElement:case s._const.modifyValue:case s._const.modifyComment:case s._const.modifyChecked:case s._const.modifySelected:case s._const.replaceElement:o(t,s._const.oldValue,s._const.newValue),n(e,t,s);break;case s._const.relocateGroup:o(t,s._const.from,s._const.to),n(e,t,s);break;case s._const.removeElement:t[s._const.action]=s._const.addElement,n(e,t,s);break;case s._const.addElement:t[s._const.action]=s._const.removeElement,n(e,t,s);break;case s._const.removeTextElement:t[s._const.action]=s._const.addTextElement,n(e,t,s);break;case s._const.addTextElement:t[s._const.action]=s._const.removeTextElement,n(e,t,s);break;default:console.log("unknown action");}}(e,t,s);}));}var i=function(e){var t=[];return t.push(e.nodeName),"#text"!==e.nodeName&&"#comment"!==e.nodeName&&e.attributes&&(e.attributes.class&&t.push("".concat(e.nodeName,".").concat(e.attributes.class.replace(/ /g,"."))),e.attributes.id&&t.push("".concat(e.nodeName,"#").concat(e.attributes.id))),t},a=function(e){var t={},n={};return e.forEach((function(e){i(e).forEach((function(e){var o=e in t;o||e in n?o&&(delete t[e],n[e]=!0):t[e]=!0;}));})),t},c=function(e,t){var n=a(e),o=a(t),s={};return Object.keys(n).forEach((function(e){o[e]&&(s[e]=!0);})),s},l=function(e){return delete e.outerDone,delete e.innerDone,delete e.valueDone,!e.childNodes||e.childNodes.every(l)},r=function(e){if(Object.prototype.hasOwnProperty.call(e,"data"))return {nodeName:"#text"===e.nodeName?"#text":"#comment",data:e.data};var t={nodeName:e.nodeName};return Object.prototype.hasOwnProperty.call(e,"attributes")&&(t.attributes=e.attributes),Object.prototype.hasOwnProperty.call(e,"checked")&&(t.checked=e.checked),Object.prototype.hasOwnProperty.call(e,"value")&&(t.value=e.value),Object.prototype.hasOwnProperty.call(e,"selected")&&(t.selected=e.selected),Object.prototype.hasOwnProperty.call(e,"childNodes")&&(t.childNodes=e.childNodes.map((function(e){return r(e)}))),t},u=function(e,t){if(!["nodeName","value","checked","selected","data"].every((function(n){return e[n]===t[n]})))return !1;if(Object.prototype.hasOwnProperty.call(e,"data"))return !0;if(Boolean(e.attributes)!==Boolean(t.attributes))return !1;if(Boolean(e.childNodes)!==Boolean(t.childNodes))return !1;if(e.attributes){var n=Object.keys(e.attributes),o=Object.keys(t.attributes);if(n.length!==o.length)return !1;if(!n.every((function(n){return e.attributes[n]===t.attributes[n]})))return !1}if(e.childNodes){if(e.childNodes.length!==t.childNodes.length)return !1;if(!e.childNodes.every((function(e,n){return u(e,t.childNodes[n])})))return !1}return !0},d=function(e,t,n,o,s){if(void 0===s&&(s=!1),!e||!t)return !1;if(e.nodeName!==t.nodeName)return !1;if(["#text","#comment"].includes(e.nodeName))return !!s||e.data===t.data;if(e.nodeName in n)return !0;if(e.attributes&&t.attributes){if(e.attributes.id){if(e.attributes.id!==t.attributes.id)return !1;if("".concat(e.nodeName,"#").concat(e.attributes.id)in n)return !0}if(e.attributes.class&&e.attributes.class===t.attributes.class)if("".concat(e.nodeName,".").concat(e.attributes.class.replace(/ /g,"."))in n)return !0}if(o)return !0;var i=e.childNodes?e.childNodes.slice().reverse():[],a=t.childNodes?t.childNodes.slice().reverse():[];if(i.length!==a.length)return !1;if(s)return i.every((function(e,t){return e.nodeName===a[t].nodeName}));var l=c(i,a);return i.every((function(e,t){return d(e,a[t],l,!0,!0)}))},h=function(e,t){return Array.apply(void 0,new Array(e)).map((function(){return t}))},f=function(e,t){for(var n=e.childNodes?e.childNodes:[],o=t.childNodes?t.childNodes:[],s=h(n.length,!1),a=h(o.length,!1),l=[],r=function(){return arguments[1]},u=!1,f=function(){var e=function(e,t,n,o){var s=0,a=[],l=e.length,r=t.length,u=Array.apply(void 0,new Array(l+1)).map((function(){return []})),h=c(e,t),f=l===r;f&&e.some((function(e,n){var o=i(e),s=i(t[n]);return o.length!==s.length?(f=!1,!0):(o.some((function(e,t){if(e!==s[t])return f=!1,!0})),!f||void 0)}));for(var p=0;p<l;p++)for(var m=e[p],_=0;_<r;_++){var V=t[_];n[p]||o[_]||!d(m,V,h,f)?u[p+1][_+1]=0:(u[p+1][_+1]=u[p][_]?u[p][_]+1:1,u[p+1][_+1]>=s&&(s=u[p+1][_+1],a=[p+1,_+1]));}return 0!==s&&{oldValue:a[0]-s,newValue:a[1]-s,length:s}}(n,o,s,a);e?(l.push(e),Array.apply(void 0,new Array(e.length)).map(r).forEach((function(t){return function(e,t,n,o){e[n.oldValue+o]=!0,t[n.newValue+o]=!0;}(s,a,e,t)}))):u=!0;};!u;)f();return e.subsets=l,e.subsetsAge=100,l},p=function(){function e(){this.list=[];}return e.prototype.add=function(e){var t;(t=this.list).push.apply(t,e);},e.prototype.forEach=function(e){this.list.forEach((function(t){return e(t)}));},e}(),m=function(){function e(e){void 0===e&&(e={});var t=this;Object.entries(e).forEach((function(e){var n=e[0],o=e[1];return t[n]=o}));}return e.prototype.toString=function(){return JSON.stringify(this)},e.prototype.setValue=function(e,t){return this[e]=t,this},e}();function _(e,t){var n,o,s=e;for(t=t.slice();t.length>0;)o=t.splice(0,1)[0],n=s,s=s.childNodes?s.childNodes[o]:void 0;return {node:s,parentNode:n,nodeIndex:o}}function V(e,t,n){return t.forEach((function(t){!function(e,t,n){var o,s,i,a;if(![n._const.addElement,n._const.addTextElement].includes(t[n._const.action])){var c=_(e,t[n._const.route]);s=c.node,i=c.parentNode,a=c.nodeIndex;}var l,r,u=[],d={diff:t,node:s};if(n.preVirtualDiffApply(d))return !0;switch(t[n._const.action]){case n._const.addAttribute:s.attributes||(s.attributes={}),s.attributes[t[n._const.name]]=t[n._const.value],"checked"===t[n._const.name]?s.checked=!0:"selected"===t[n._const.name]?s.selected=!0:"INPUT"===s.nodeName&&"value"===t[n._const.name]&&(s.value=t[n._const.value]);break;case n._const.modifyAttribute:s.attributes[t[n._const.name]]=t[n._const.newValue];break;case n._const.removeAttribute:delete s.attributes[t[n._const.name]],0===Object.keys(s.attributes).length&&delete s.attributes,"checked"===t[n._const.name]?s.checked=!1:"selected"===t[n._const.name]?delete s.selected:"INPUT"===s.nodeName&&"value"===t[n._const.name]&&delete s.value;break;case n._const.modifyTextElement:s.data=t[n._const.newValue];break;case n._const.modifyValue:s.value=t[n._const.newValue];break;case n._const.modifyComment:s.data=t[n._const.newValue];break;case n._const.modifyChecked:s.checked=t[n._const.newValue];break;case n._const.modifySelected:s.selected=t[n._const.newValue];break;case n._const.replaceElement:l=t[n._const.newValue],i.childNodes[a]=l;break;case n._const.relocateGroup:s.childNodes.splice(t[n._const.from],t[n._const.groupLength]).reverse().forEach((function(e){return s.childNodes.splice(t[n._const.to],0,e)})),s.subsets&&s.subsets.forEach((function(e){if(t[n._const.from]<t[n._const.to]&&e.oldValue<=t[n._const.to]&&e.oldValue>t[n._const.from])e.oldValue-=t[n._const.groupLength],(o=e.oldValue+e.length-t[n._const.to])>0&&(u.push({oldValue:t[n._const.to]+t[n._const.groupLength],newValue:e.newValue+e.length-o,length:o}),e.length-=o);else if(t[n._const.from]>t[n._const.to]&&e.oldValue>t[n._const.to]&&e.oldValue<t[n._const.from]){var o;e.oldValue+=t[n._const.groupLength],(o=e.oldValue+e.length-t[n._const.to])>0&&(u.push({oldValue:t[n._const.to]+t[n._const.groupLength],newValue:e.newValue+e.length-o,length:o}),e.length-=o);}else e.oldValue===t[n._const.from]&&(e.oldValue=t[n._const.to]);}));break;case n._const.removeElement:i.childNodes.splice(a,1),i.subsets&&i.subsets.forEach((function(e){e.oldValue>a?e.oldValue-=1:e.oldValue===a?e.delete=!0:e.oldValue<a&&e.oldValue+e.length>a&&(e.oldValue+e.length-1===a?e.length--:(u.push({newValue:e.newValue+a-e.oldValue,oldValue:a,length:e.length-a+e.oldValue-1}),e.length=a-e.oldValue));})),s=i;break;case n._const.addElement:var h=(r=t[n._const.route].slice()).splice(r.length-1,1)[0];s=null===(o=_(e,r))||void 0===o?void 0:o.node,l=t[n._const.element],s.childNodes||(s.childNodes=[]),h>=s.childNodes.length?s.childNodes.push(l):s.childNodes.splice(h,0,l),s.subsets&&s.subsets.forEach((function(e){if(e.oldValue>=h)e.oldValue+=1;else if(e.oldValue<h&&e.oldValue+e.length>h){var t=e.oldValue+e.length-h;u.push({newValue:e.newValue+e.length-t,oldValue:h+1,length:t}),e.length-=t;}}));break;case n._const.removeTextElement:i.childNodes.splice(a,1),"TEXTAREA"===i.nodeName&&delete i.value,i.subsets&&i.subsets.forEach((function(e){e.oldValue>a?e.oldValue-=1:e.oldValue===a?e.delete=!0:e.oldValue<a&&e.oldValue+e.length>a&&(e.oldValue+e.length-1===a?e.length--:(u.push({newValue:e.newValue+a-e.oldValue,oldValue:a,length:e.length-a+e.oldValue-1}),e.length=a-e.oldValue));})),s=i;break;case n._const.addTextElement:var f=(r=t[n._const.route].slice()).splice(r.length-1,1)[0];(l={}).nodeName="#text",l.data=t[n._const.value],(s=_(e,r).node).childNodes||(s.childNodes=[]),f>=s.childNodes.length?s.childNodes.push(l):s.childNodes.splice(f,0,l),"TEXTAREA"===s.nodeName&&(s.value=t[n._const.newValue]),s.subsets&&s.subsets.forEach((function(e){if(e.oldValue>=f&&(e.oldValue+=1),e.oldValue<f&&e.oldValue+e.length>f){var t=e.oldValue+e.length-f;u.push({newValue:e.newValue+e.length-t,oldValue:f+1,length:t}),e.length-=t;}}));break;default:console.log("unknown action");}s.subsets&&(s.subsets=s.subsets.filter((function(e){return !e.delete&&e.oldValue!==e.newValue})),u.length&&(s.subsets=s.subsets.concat(u))),n.postVirtualDiffApply({node:d.node,diff:d.diff,newNode:l});}(e,t,n);})),!0}function g(e,t){void 0===t&&(t={});var n={nodeName:e.nodeName};if(e instanceof Text||e instanceof Comment)n.data=e.data;else {if(e.attributes&&e.attributes.length>0)n.attributes={},Array.prototype.slice.call(e.attributes).forEach((function(e){return n.attributes[e.name]=e.value}));if(e instanceof HTMLTextAreaElement)n.value=e.value;else if(e.childNodes&&e.childNodes.length>0){n.childNodes=[],Array.prototype.slice.call(e.childNodes).forEach((function(e){return n.childNodes.push(g(e,t))}));}t.valueDiffing&&(e instanceof HTMLInputElement&&["radio","checkbox"].includes(e.type.toLowerCase())&&void 0!==e.checked?n.checked=e.checked:(e instanceof HTMLButtonElement||e instanceof HTMLDataElement||e instanceof HTMLInputElement||e instanceof HTMLLIElement||e instanceof HTMLMeterElement||e instanceof HTMLOptionElement||e instanceof HTMLProgressElement||e instanceof HTMLParamElement)&&(n.value=e.value),e instanceof HTMLOptionElement&&(n.selected=e.selected));}return n}var v=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,b=Object.create?Object.create(null):{},N=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function y(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")}var w={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuItem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},E=function(e){var t={nodeName:"",attributes:{}},n=!1,o=e.match(/<\/?([^\s]+?)[/\s>]/);if(o&&(t.nodeName=o[1].toUpperCase(),(w[o[1]]||"/"===e.charAt(e.length-2))&&(n=!0),t.nodeName.startsWith("!--"))){var s=e.indexOf("--\x3e");return {type:"comment",node:{nodeName:"#comment",data:-1!==s?e.slice(4,s):""},voidElement:n}}for(var i=new RegExp(N),a=null,c=!1;!c;)if(null===(a=i.exec(e)))c=!0;else if(a[0].trim())if(a[1]){var l=a[1].trim(),r=[l,""];l.indexOf("=")>-1&&(r=l.split("=")),t.attributes[r[0]]=r[1],i.lastIndex--;}else a[2]&&(t.attributes[a[2]]=a[3].trim().substring(1,a[3].length-1));return {type:"tag",node:t,voidElement:n}},k=function(e,t){void 0===t&&(t={components:b});var n,o=[],s=-1,i=[],a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");o.push({nodeName:"#text",data:-1===c?e:e.substring(0,c)});}return e.replace(v,(function(c,l){if(a){if(c!=="</".concat(n.node.nodeName,">"))return "";a=!1;}var r="/"!==c.charAt(1),u=c.startsWith("\x3c!--"),d=l+c.length,h=e.charAt(d);if(u){var f=E(c).node;if(s<0)return o.push(f),"";var p=i[s];return p&&(p.node.childNodes||(p.node.childNodes=[]),p.node.childNodes.push(f)),""}if(r){n=E(c),s++,"tag"===n.type&&t.components[n.node.nodeName]&&(n.type="component",a=!0),n.voidElement||a||!h||"<"===h||(n.node.childNodes||(n.node.childNodes=[]),n.node.childNodes.push({nodeName:"#text",data:y(e.slice(d,e.indexOf("<",d)))})),0===s&&o.push(n.node);var m=i[s-1];m&&(m.node.childNodes||(m.node.childNodes=[]),m.node.childNodes.push(n.node)),i[s]=n;}if((!r||n.voidElement)&&(s>-1&&(n.voidElement||n.node.nodeName===c.slice(2,-1).toUpperCase())&&--s>-1&&(n=i[s]),!a&&"<"!==h&&h)){var _=-1===s?o:i[s].node.childNodes||[],V=e.indexOf("<",d),g=y(e.slice(d,-1===V?void 0:V));_.push({nodeName:"#text",data:g});}return ""})),o[0]},x=function(){function e(e,t,n){this.options=n,this.t1="undefined"!=typeof Element&&e instanceof Element?g(e,this.options):"string"==typeof e?k(e,this.options):JSON.parse(JSON.stringify(e)),this.t2="undefined"!=typeof Element&&t instanceof Element?g(t,this.options):"string"==typeof t?k(t,this.options):JSON.parse(JSON.stringify(t)),this.diffcount=0,this.foundAll=!1,this.debug&&(this.t1Orig="undefined"!=typeof Element&&e instanceof Element?g(e,this.options):"string"==typeof e?k(e,this.options):JSON.parse(JSON.stringify(e)),this.t2Orig="undefined"!=typeof Element&&t instanceof Element?g(t,this.options):"string"==typeof t?k(t,this.options):JSON.parse(JSON.stringify(t))),this.tracker=new p;}return e.prototype.init=function(){return this.findDiffs(this.t1,this.t2)},e.prototype.findDiffs=function(e,t){var n;do{if(this.options.debug&&(this.diffcount+=1,this.diffcount>this.options.diffcap))throw new Error("surpassed diffcap:".concat(JSON.stringify(this.t1Orig)," -> ").concat(JSON.stringify(this.t2Orig)));0===(n=this.findNextDiff(e,t,[])).length&&(u(e,t)||(this.foundAll?console.error("Could not find remaining diffs!"):(this.foundAll=!0,l(e),n=this.findNextDiff(e,t,[])))),n.length>0&&(this.foundAll=!1,this.tracker.add(n),V(e,n,this.options));}while(n.length>0);return this.tracker.list},e.prototype.findNextDiff=function(e,t,n){var o,s;if(this.options.maxDepth&&n.length>this.options.maxDepth)return [];if(!e.outerDone){if(o=this.findOuterDiff(e,t,n),this.options.filterOuterDiff&&(s=this.options.filterOuterDiff(e,t,o))&&(o=s),o.length>0)return e.outerDone=!0,o;e.outerDone=!0;}if(Object.prototype.hasOwnProperty.call(e,"data"))return [];if(!e.innerDone){if((o=this.findInnerDiff(e,t,n)).length>0)return o;e.innerDone=!0;}if(this.options.valueDiffing&&!e.valueDone){if((o=this.findValueDiff(e,t,n)).length>0)return e.valueDone=!0,o;e.valueDone=!0;}return []},e.prototype.findOuterDiff=function(e,t,n){var o,s,i,a,c,l,u=[];if(e.nodeName!==t.nodeName){if(!n.length)throw new Error("Top level nodes have to be of the same kind.");return [(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,r(e)).setValue(this.options._const.newValue,r(t)).setValue(this.options._const.route,n)]}if(n.length&&this.options.diffcap<Math.abs((e.childNodes||[]).length-(t.childNodes||[]).length))return [(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,r(e)).setValue(this.options._const.newValue,r(t)).setValue(this.options._const.route,n)];if(Object.prototype.hasOwnProperty.call(e,"data")&&e.data!==t.data)return "#text"===e.nodeName?[(new m).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,e.data).setValue(this.options._const.newValue,t.data)]:[(new m).setValue(this.options._const.action,this.options._const.modifyComment).setValue(this.options._const.route,n).setValue(this.options._const.oldValue,e.data).setValue(this.options._const.newValue,t.data)];for(s=e.attributes?Object.keys(e.attributes).sort():[],i=t.attributes?Object.keys(t.attributes).sort():[],a=s.length,l=0;l<a;l++)o=s[l],-1===(c=i.indexOf(o))?u.push((new m).setValue(this.options._const.action,this.options._const.removeAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,o).setValue(this.options._const.value,e.attributes[o])):(i.splice(c,1),e.attributes[o]!==t.attributes[o]&&u.push((new m).setValue(this.options._const.action,this.options._const.modifyAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,o).setValue(this.options._const.oldValue,e.attributes[o]).setValue(this.options._const.newValue,t.attributes[o])));for(a=i.length,l=0;l<a;l++)o=i[l],u.push((new m).setValue(this.options._const.action,this.options._const.addAttribute).setValue(this.options._const.route,n).setValue(this.options._const.name,o).setValue(this.options._const.value,t.attributes[o]));return u},e.prototype.findInnerDiff=function(e,t,n){var o=e.childNodes?e.childNodes.slice():[],s=t.childNodes?t.childNodes.slice():[],i=Math.max(o.length,s.length),a=Math.abs(o.length-s.length),c=[],l=0;if(!this.options.maxChildCount||i<this.options.maxChildCount){var d=Boolean(e.subsets&&e.subsetsAge--),h=d?e.subsets:e.childNodes&&t.childNodes?f(e,t):[];if(h.length>0&&(c=this.attemptGroupRelocation(e,t,h,n,d)).length>0)return c}for(var p=0;p<i;p+=1){var _=o[p],V=s[p];if(a&&(_&&!V?"#text"===_.nodeName?(c.push((new m).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.value,_.data)),l-=1):(c.push((new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.element,r(_))),l-=1):V&&!_&&("#text"===V.nodeName?c.push((new m).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.value,V.data)):c.push((new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.element,r(V))))),_&&V)if(!this.options.maxChildCount||i<this.options.maxChildCount)c=c.concat(this.findNextDiff(_,V,n.concat(l)));else if(!u(_,V))if(o.length>s.length)"#text"===_.nodeName?c.push((new m).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,n.concat(l)).setValue(this.options._const.value,_.data)):c.push((new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.element,r(_)).setValue(this.options._const.route,n.concat(l))),o.splice(p,1),p-=1,l-=1,a-=1;else if(o.length<s.length){var g=r(V);c=c.concat([(new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.element,g).setValue(this.options._const.route,n.concat(l))]),o.splice(p,0,g),a-=1;}else c=c.concat([(new m).setValue(this.options._const.action,this.options._const.replaceElement).setValue(this.options._const.oldValue,r(_)).setValue(this.options._const.newValue,r(V)).setValue(this.options._const.route,n.concat(l))]);l+=1;}return e.innerDone=!0,c},e.prototype.attemptGroupRelocation=function(e,t,n,o,s){for(var i,a,c,l,u,f,p=function(e,t,n){var o=e.childNodes?h(e.childNodes.length,!0):[],s=t.childNodes?h(t.childNodes.length,!0):[],i=0;return n.forEach((function(e){for(var t=e.oldValue+e.length,n=e.newValue+e.length,a=e.oldValue;a<t;a+=1)o[a]=i;for(a=e.newValue;a<n;a+=1)s[a]=i;i+=1;})),{gaps1:o,gaps2:s}}(e,t,n),_=p.gaps1,V=p.gaps2,g=Math.min(_.length,V.length),v=[],b=0,N=0;b<g;N+=1,b+=1)if(!s||!0!==_[b]&&!0!==V[b]){if(!0===_[b])if("#text"===(l=e.childNodes[N]).nodeName)if("#text"===t.childNodes[b].nodeName){if(l.data!==t.childNodes[b].data){for(f=N;e.childNodes.length>f+1&&"#text"===e.childNodes[f+1].nodeName;)if(f+=1,t.childNodes[b].data===e.childNodes[f].data){u=!0;break}if(!u)return v.push((new m).setValue(this.options._const.action,this.options._const.modifyTextElement).setValue(this.options._const.route,o.concat(b)).setValue(this.options._const.oldValue,l.data).setValue(this.options._const.newValue,t.childNodes[b].data)),v}}else v.push((new m).setValue(this.options._const.action,this.options._const.removeTextElement).setValue(this.options._const.route,o.concat(b)).setValue(this.options._const.value,l.data)),_.splice(b,1),g=Math.min(_.length,V.length),b-=1;else v.push((new m).setValue(this.options._const.action,this.options._const.removeElement).setValue(this.options._const.route,o.concat(b)).setValue(this.options._const.element,r(l))),_.splice(b,1),g=Math.min(_.length,V.length),b-=1;else if(!0===V[b])"#text"===(l=t.childNodes[b]).nodeName?(v.push((new m).setValue(this.options._const.action,this.options._const.addTextElement).setValue(this.options._const.route,o.concat(b)).setValue(this.options._const.value,l.data)),_.splice(b,0,!0),g=Math.min(_.length,V.length),N-=1):(v.push((new m).setValue(this.options._const.action,this.options._const.addElement).setValue(this.options._const.route,o.concat(b)).setValue(this.options._const.element,r(l))),_.splice(b,0,!0),g=Math.min(_.length,V.length),N-=1);else if(_[b]!==V[b]){if(v.length>0)return v;if(c=n[_[b]],(a=Math.min(c.newValue,e.childNodes.length-c.length))!==c.oldValue){i=!1;for(var y=0;y<c.length;y+=1)d(e.childNodes[a+y],e.childNodes[c.oldValue+y],{},!1,!0)||(i=!0);if(i)return [(new m).setValue(this.options._const.action,this.options._const.relocateGroup).setValue(this.options._const.groupLength,c.length).setValue(this.options._const.from,c.oldValue).setValue(this.options._const.to,a).setValue(this.options._const.route,o)]}}}return v},e.prototype.findValueDiff=function(e,t,n){var o=[];return e.selected!==t.selected&&o.push((new m).setValue(this.options._const.action,this.options._const.modifySelected).setValue(this.options._const.oldValue,e.selected).setValue(this.options._const.newValue,t.selected).setValue(this.options._const.route,n)),(e.value||t.value)&&e.value!==t.value&&"OPTION"!==e.nodeName&&o.push((new m).setValue(this.options._const.action,this.options._const.modifyValue).setValue(this.options._const.oldValue,e.value||"").setValue(this.options._const.newValue,t.value||"").setValue(this.options._const.route,n)),e.checked!==t.checked&&o.push((new m).setValue(this.options._const.action,this.options._const.modifyChecked).setValue(this.options._const.oldValue,e.checked).setValue(this.options._const.newValue,t.checked).setValue(this.options._const.route,n)),o},e}(),O={debug:!1,diffcap:10,maxDepth:!1,maxChildCount:50,valueDiffing:!0,textDiff:function(e,t,n,o){e.data=o;},preVirtualDiffApply:function(){},postVirtualDiffApply:function(){},preDiffApply:function(){},postDiffApply:function(){},filterOuterDiff:null,compress:!1,_const:!1,document:!("undefined"==typeof window||!window.document)&&window.document,components:[]},T=function(){function e(e){if(void 0===e&&(e={}),Object.entries(O).forEach((function(t){var n=t[0],o=t[1];Object.prototype.hasOwnProperty.call(e,n)||(e[n]=o);})),!e._const){var t=["addAttribute","modifyAttribute","removeAttribute","modifyTextElement","relocateGroup","removeElement","addElement","removeTextElement","addTextElement","replaceElement","modifyValue","modifyChecked","modifySelected","modifyComment","action","route","oldValue","newValue","element","group","groupLength","from","to","name","value","data","attributes","nodeName","childNodes","checked","selected"],n={};e.compress?t.forEach((function(e,t){return n[e]=t})):t.forEach((function(e){return n[e]=e})),e._const=n;}this.options=e;}return e.prototype.apply=function(e,t){return function(e,t,o){return t.every((function(t){return n(e,t,o)}))}(e,t,this.options)},e.prototype.undo=function(e,t){return s(e,t,this.options)},e.prototype.diff=function(e,t){return new x(e,t,this.options).init()},e}();

var headingsToVirtualHeaderRowDOM = function (headings, columnSettings, columnWidths, _a, _b) {
    var classes = _a.classes, hiddenHeader = _a.hiddenHeader, sortable = _a.sortable, scrollY = _a.scrollY;
    var noColumnWidths = _b.noColumnWidths, unhideHeader = _b.unhideHeader;
    return ({
        nodeName: "TR",
        childNodes: headings.map(function (heading, index) {
            var _a, _b;
            var column = columnSettings.columns[index] || {};
            if (column.hidden) {
                return;
            }
            var attributes = {};
            if (!column.notSortable && sortable && (!scrollY.length || unhideHeader)) {
                attributes["data-sortable"] = "true";
            }
            if (((_a = columnSettings.sort) === null || _a === void 0 ? void 0 : _a.column) === index) {
                attributes["class"] = columnSettings.sort.dir;
                attributes["aria-sort"] = columnSettings.sort.dir === "asc" ? "ascending" : "descending";
            }
            var style = "";
            if (columnWidths[index] && !noColumnWidths) {
                style += "width: ".concat(columnWidths[index], "%;");
            }
            if (scrollY.length && !unhideHeader) {
                style += "padding-bottom: 0;padding-top: 0;border: 0;";
            }
            if (style.length) {
                attributes.style = style;
            }
            var headerNodes = heading.type === "node" ?
                heading.data :
                [
                    {
                        nodeName: "#text",
                        data: (_b = heading.text) !== null && _b !== void 0 ? _b : String(heading.data)
                    }
                ];
            return {
                nodeName: "TH",
                attributes: attributes,
                childNodes: ((hiddenHeader || scrollY.length) && !unhideHeader) ?
                    [
                        { nodeName: "#text",
                            data: "" }
                    ] :
                    column.notSortable || !sortable ?
                        headerNodes :
                        [
                            {
                                nodeName: "a",
                                attributes: {
                                    href: "#",
                                    "class": classes.sorter
                                },
                                childNodes: headerNodes
                            }
                        ]
            };
        }).filter(function (column) { return column; })
    });
};
var dataToVirtualDOM = function (id, headings, rows, columnSettings, columnWidths, rowCursor, _a, _b) {
    var classes = _a.classes, hiddenHeader = _a.hiddenHeader, header = _a.header, footer = _a.footer, sortable = _a.sortable, scrollY = _a.scrollY, rowRender = _a.rowRender, tabIndex = _a.tabIndex;
    var noColumnWidths = _b.noColumnWidths, unhideHeader = _b.unhideHeader, renderHeader = _b.renderHeader;
    var table = {
        nodeName: "TABLE",
        attributes: {
            "class": classes.table
        },
        childNodes: [
            {
                nodeName: "TBODY",
                childNodes: rows.map(function (_a) {
                    var row = _a.row, index = _a.index;
                    var tr = {
                        nodeName: "TR",
                        attributes: {
                            "data-index": String(index)
                        },
                        childNodes: row.map(function (cell, cIndex) {
                            var _a;
                            var column = columnSettings.columns[cIndex] || {};
                            if (column.hidden) {
                                return;
                            }
                            var td = cell.type === "node" ?
                                {
                                    nodeName: "TD",
                                    childNodes: cell.data
                                } :
                                {
                                    nodeName: "TD",
                                    childNodes: [
                                        {
                                            nodeName: "#text",
                                            data: (_a = cell.text) !== null && _a !== void 0 ? _a : String(cell.data)
                                        }
                                    ]
                                };
                            if (!header && !footer && columnWidths[cIndex] && !noColumnWidths) {
                                td.attributes = {
                                    style: "width: ".concat(columnWidths[cIndex], "%;")
                                };
                            }
                            if (column.render) {
                                var renderedCell = column.render(cell.data, td, index, cIndex);
                                if (renderedCell) {
                                    if (typeof renderedCell === "string") {
                                        // Convenience method to make it work similarly to what it did up to version 5.
                                        var node = k("<td>".concat(renderedCell, "</td>"));
                                        if (node.childNodes.length !== 1 || !["#text", "#comment"].includes(node.childNodes[0].nodeName)) {
                                            td.childNodes = node.childNodes;
                                        }
                                        else {
                                            td.childNodes[0].data = renderedCell;
                                        }
                                    }
                                    else {
                                        return renderedCell;
                                    }
                                }
                            }
                            return td;
                        }).filter(function (column) { return column; })
                    };
                    if (index === rowCursor) {
                        tr.attributes["class"] = classes.cursor;
                    }
                    if (rowRender) {
                        var renderedRow = rowRender(row, tr, index);
                        if (renderedRow) {
                            if (typeof renderedRow === "string") {
                                // Convenience method to make it work similarly to what it did up to version 5.
                                var node = k("<tr>".concat(renderedRow, "</tr>"));
                                if (node.childNodes && (node.childNodes.length !== 1 || !["#text", "#comment"].includes(node.childNodes[0].nodeName))) {
                                    tr.childNodes = node.childNodes;
                                }
                                else {
                                    tr.childNodes[0].data = renderedRow;
                                }
                            }
                            else {
                                return renderedRow;
                            }
                        }
                    }
                    return tr;
                })
            }
        ]
    };
    if (id.length) {
        table.attributes.id = id;
    }
    if (header || footer || renderHeader) {
        var headerRow = headingsToVirtualHeaderRowDOM(headings, columnSettings, columnWidths, { classes: classes, hiddenHeader: hiddenHeader, sortable: sortable, scrollY: scrollY }, { noColumnWidths: noColumnWidths, unhideHeader: unhideHeader });
        if (header || renderHeader) {
            var thead = {
                nodeName: "THEAD",
                childNodes: [headerRow]
            };
            if ((scrollY.length || hiddenHeader) && !unhideHeader) {
                thead.attributes = { style: "height: 0px;" };
            }
            table.childNodes.unshift(thead);
        }
        if (footer) {
            var footerRow = header ? structuredClone(headerRow) : headerRow;
            var tfoot = {
                nodeName: "TFOOT",
                childNodes: [footerRow]
            };
            if ((scrollY.length || hiddenHeader) && !unhideHeader) {
                tfoot.attributes = { style: "height: 0px;" };
            }
            table.childNodes.push(tfoot);
        }
    }
    if (tabIndex !== false) {
        table.attributes.tabindex = String(tabIndex);
    }
    return table;
};

var dayjs_minExports = {};
var dayjs_min = {
  get exports(){ return dayjs_minExports; },
  set exports(v){ dayjs_minExports = v; },
};

(function (module, exports) {
	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));
} (dayjs_min));

var dayjs = dayjs_minExports;

var customParseFormatExports = {};
var customParseFormat$1 = {
  get exports(){ return customParseFormatExports; },
  set exports(v){ customParseFormatExports = v; },
};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return (e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t;}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e);}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1);}],a:[i,function(e){this.afternoon=u(e,!0);}],S:[/\d/,function(e){this.milliseconds=100*+e;}],SS:[n,function(e){this.milliseconds=10*+e;}],SSS:[/\d{3}/,function(e){this.milliseconds=+e;}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r);}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n;}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t;}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e);}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"");}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else {var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"");}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon;}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={};}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""));}else i.call(this,e);};}}));
} (customParseFormat$1));

var customParseFormat = customParseFormatExports;

dayjs.extend(customParseFormat);
/**
 * Use dayjs to parse cell contents for sorting
 */
var parseDate = function (content, format) {
    var date;
    // Converting to YYYYMMDD ensures we can accurately sort the column numerically
    if (format) {
        switch (format) {
            case "ISO_8601":
                // ISO8601 is already lexiographically sorted, so we can just sort it as a string.
                date = content;
                break;
            case "RFC_2822":
                date = dayjs(content.slice(5), "DD MMM YYYY HH:mm:ss ZZ").unix();
                break;
            case "MYSQL":
                date = dayjs(content, "YYYY-MM-DD hh:mm:ss").unix();
                break;
            case "UNIX":
                date = dayjs(content).unix();
                break;
            // User defined format using the data-format attribute or columns[n].format option
            default:
                date = dayjs(content, format, true).valueOf();
                break;
        }
    }
    return date;
};

/**
 * Check is item is object
 */
var isObject = function (val) { return Object.prototype.toString.call(val) === "[object Object]"; };
/**
 * Check for valid JSON string
 */
var isJson = function (str) {
    var t = !1;
    try {
        t = JSON.parse(str);
    }
    catch (e) {
        return !1;
    }
    return !(null === t || (!Array.isArray(t) && !isObject(t))) && t;
};
/**
 * Create DOM element node
 */
var createElement = function (nodeName, attrs) {
    var dom = document.createElement(nodeName);
    if (attrs && "object" == typeof attrs) {
        for (var attr in attrs) {
            if ("html" === attr) {
                dom.innerHTML = attrs[attr];
            }
            else {
                dom.setAttribute(attr, attrs[attr]);
            }
        }
    }
    return dom;
};
var flush = function (el) {
    if (Array.isArray(el)) {
        el.forEach(function (e) { return flush(e); });
    }
    else {
        el.innerHTML = "";
    }
};
/**
 * Create button helper
 */
var button = function (className, page, text) { return createElement("li", {
    "class": className,
    html: "<a href=\"#\" data-page=\"".concat(String(page), "\">").concat(text, "</a>")
}); };
/**
 * Pager truncation algorithm
 */
var truncate = function (links, currentPage, pagesLength, options) {
    var pagerDelta = options.pagerDelta || 2;
    var classes = options.classes || { ellipsis: "datatable-ellipsis",
        active: "datatable-active" };
    var ellipsisText = options.ellipsisText || "&hellip;";
    var doublePagerDelta = 2 * pagerDelta;
    var previousPage = currentPage - pagerDelta;
    var nextPage = currentPage + pagerDelta;
    if (currentPage < 4 - pagerDelta + doublePagerDelta) {
        nextPage = 3 + doublePagerDelta;
    }
    else if (currentPage > pagesLength - (3 - pagerDelta + doublePagerDelta)) {
        previousPage = pagesLength - (2 + doublePagerDelta);
    }
    var linksToModify = [];
    for (var k = 1; k <= pagesLength; k++) {
        if (1 == k || k == pagesLength || (k >= previousPage && k <= nextPage)) {
            var link = links[k - 1];
            link.classList.remove(classes.active);
            linksToModify.push(link);
        }
    }
    var previousLink;
    var modifiedLinks = [];
    linksToModify.forEach(function (link) {
        var pageNumber = parseInt(link.children[0].getAttribute("data-page"), 10);
        if (previousLink) {
            var previousPageNumber = parseInt(previousLink.children[0].getAttribute("data-page"), 10);
            if (pageNumber - previousPageNumber == 2) {
                modifiedLinks.push(links[previousPageNumber]);
            }
            else if (pageNumber - previousPageNumber != 1) {
                var newLink = createElement("li", {
                    "class": classes.ellipsis,
                    html: ellipsisText
                });
                modifiedLinks.push(newLink);
            }
        }
        modifiedLinks.push(link);
        previousLink = link;
    });
    return modifiedLinks;
};
var objToText = function (obj) {
    if (["#text", "#comment"].includes(obj.nodeName)) {
        return obj.data;
    }
    if (obj.childNodes) {
        return obj.childNodes.map(function (childNode) { return objToText(childNode); }).join("");
    }
    return "";
};
var escapeText = function (text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
};
var visibleToColumnIndex = function (visibleIndex, columns) {
    var counter = 0;
    var columnIndex = 0;
    while (counter < (visibleIndex + 1)) {
        var columnSettings = columns[columnIndex] || {};
        if (!columnSettings.hidden) {
            counter += 1;
        }
        columnIndex += 1;
    }
    return columnIndex - 1;
};

var readDataCell = function (cell, columnSettings) {
    if (columnSettings === void 0) { columnSettings = {}; }
    if (cell instanceof Object && cell.constructor === Object && cell.hasOwnProperty("data") && (typeof cell.text === "string" || typeof cell.data === "string")) {
        return cell;
    }
    var cellData = {
        data: cell
    };
    if (typeof cell === "string") {
        if (cell.length) {
            var node = k("<td>".concat(cell, "</td>"));
            if (node.childNodes && (node.childNodes.length !== 1 || node.childNodes[0].nodeName !== "#text")) {
                cellData.data = node.childNodes;
                cellData.type = "node";
                var text = objToText(node);
                cellData.text = text;
                cellData.order = text;
            }
        }
    }
    else if ([null, undefined].includes(cell)) {
        cellData.text = "";
        cellData.order = 0;
    }
    else {
        cellData.text = JSON.stringify(cell);
    }
    if (columnSettings.type === "date" && columnSettings.format) {
        cellData.order = parseDate(String(cell), columnSettings.format);
    }
    return cellData;
};
var readHeaderCell = function (cell) {
    if (cell instanceof Object && cell.constructor === Object && cell.hasOwnProperty("data") && (typeof cell.text === "string" || typeof cell.data === "string")) {
        return cell;
    }
    var cellData = {
        data: cell
    };
    if (typeof cell === "string") {
        if (cell.length) {
            var node = k("<th>".concat(cell, "</th>"));
            if (node.childNodes && (node.childNodes.length !== 1 || node.childNodes[0].nodeName !== "#text")) {
                cellData.data = node.childNodes;
                cellData.type = "node";
                var text = objToText(node);
                cellData.text = text;
            }
        }
    }
    else if ([null, undefined].includes(cell)) {
        cellData.text = "";
    }
    else {
        cellData.text = JSON.stringify(cell);
    }
    return cellData;
};
var readTableData = function (dataConvert, dataOption, dom, columnSettings) {
    var _a, _b;
    if (dom === void 0) { dom = undefined; }
    var data = {
        data: [],
        headings: []
    };
    if (!dataConvert && dataOption.headings) {
        data.headings = dataOption.headings;
    }
    else if (dataOption.headings) {
        data.headings = dataOption.headings.map(function (heading) { return readHeaderCell(heading); });
    }
    else if (dom === null || dom === void 0 ? void 0 : dom.tHead) {
        data.headings = Array.from(dom.tHead.querySelectorAll("th")).map(function (th, index) {
            var heading = readHeaderCell(th.innerHTML);
            var settings = {};
            if (th.dataset.sortable === "false" || th.dataset.sort === "false") {
                settings.notSortable = true;
            }
            if (th.dataset.hidden === "true" || th.getAttribute("hidden") === "true") {
                settings.hidden = true;
            }
            if (th.dataset.type === "date") {
                settings.type = "date";
                if (th.dataset.format) {
                    settings.format = th.dataset.format;
                }
            }
            if (Object.keys(settings).length) {
                if (!columnSettings.columns[index]) {
                    columnSettings.columns[index] = {};
                }
                columnSettings.columns[index] = __assign(__assign({}, columnSettings.columns[index]), settings);
            }
            return heading;
        });
    }
    else if ((_a = dataOption.data) === null || _a === void 0 ? void 0 : _a.length) {
        data.headings = dataOption.data[0].map(function (_cell) { return readHeaderCell(""); });
    }
    else if (dom === null || dom === void 0 ? void 0 : dom.tBodies.length) {
        data.headings = Array.from(dom.tBodies[0].rows[0].cells).map(function (_cell) { return readHeaderCell(""); });
    }
    if (!dataConvert && dataOption.data) {
        data.data = dataOption.data;
    }
    else if (dataOption.data) {
        data.data = dataOption.data.map(function (row) { return row.map(function (cell, index) { return readDataCell(cell, columnSettings.columns[index]); }); });
    }
    else if ((_b = dom === null || dom === void 0 ? void 0 : dom.tBodies) === null || _b === void 0 ? void 0 : _b.length) {
        data.data = Array.from(dom.tBodies[0].rows).map(function (row) { return Array.from(row.cells).map(function (cell, index) { return readDataCell(cell.dataset.content || cell.innerHTML, columnSettings.columns[index]); }); });
    }
    if (data.data.length && data.data[0].length !== data.headings.length) {
        throw new Error("Data heading length mismatch.");
    }
    return data;
};

/**
 * Rows API
 */
var Rows = /** @class */ (function () {
    function Rows(dt) {
        this.dt = dt;
        this.cursor = false;
    }
    Rows.prototype.setCursor = function (index) {
        if (index === void 0) { index = false; }
        if (index === this.cursor) {
            return;
        }
        var oldCursor = this.cursor;
        this.cursor = index;
        this.dt._renderTable();
        if (index !== false && this.dt.options.scrollY) {
            var cursorDOM = this.dt.dom.querySelector("tr.".concat(this.dt.options.classes.cursor));
            if (cursorDOM) {
                cursorDOM.scrollIntoView({ block: "nearest" });
            }
        }
        this.dt.emit("datatable.cursormove", this.cursor, oldCursor);
    };
    /**
     * Add new row
     */
    Rows.prototype.add = function (data) {
        var _this = this;
        var row = this.dt.options.dataConvert ?
            data.map(function (cell, index) {
                var columnSettings = _this.dt.columns.settings.columns[index] || {};
                return readDataCell(cell, columnSettings);
            }) :
            data;
        this.dt.data.data.push(row);
        // We may have added data to an empty table
        if (this.dt.data.data.length) {
            this.dt.hasRows = true;
        }
        this.dt.update(true);
    };
    /**
     * Remove row(s)
     */
    Rows.prototype.remove = function (select) {
        if (Array.isArray(select)) {
            this.dt.data.data = this.dt.data.data.filter(function (_row, index) { return !select.includes(index); });
            // We may have emptied the table
            if (!this.dt.data.data.length) {
                this.dt.hasRows = false;
            }
            this.dt.update(true);
        }
        else {
            return this.remove([select]);
        }
    };
    /**
     * Find index of row by searching for a value in a column
     */
    Rows.prototype.findRowIndex = function (columnIndex, value) {
        // returns row index of first case-insensitive string match
        // inside the td innerText at specific column index
        return this.dt.data.data.findIndex(function (row) { var _a; return ((_a = row[columnIndex].text) !== null && _a !== void 0 ? _a : String(row[columnIndex].data)).toLowerCase().includes(String(value).toLowerCase()); });
    };
    /**
     * Find index, row, and column data by searching for a value in a column
     */
    Rows.prototype.findRow = function (columnIndex, value) {
        // get the row index
        var index = this.findRowIndex(columnIndex, value);
        // exit if not found
        if (index < 0) {
            return {
                index: -1,
                row: null,
                cols: []
            };
        }
        // get the row from data
        var row = this.dt.data.data[index];
        // return innerHTML of each td
        var cols = row.map(function (cell) { return cell.data; });
        // return everything
        return {
            index: index,
            row: row,
            cols: cols
        };
    };
    /**
     * Update a row with new data
     */
    Rows.prototype.updateRow = function (select, data) {
        var _this = this;
        var row = this.dt.options.dataConvert ?
            data.map(function (cell, index) {
                var columnSettings = _this.dt.columns.settings.columns[index] || {};
                return readDataCell(cell, columnSettings);
            }) :
            data;
        this.dt.data.data.splice(select, 1, row);
        this.dt.update(true);
    };
    return Rows;
}());

var readColumnSettings = function (columnOptions) {
    if (columnOptions === void 0) { columnOptions = []; }
    var columns = [];
    var sort = false;
    // Check for the columns option
    columnOptions.forEach(function (data) {
        // convert single column selection to array
        var columnSelectors = Array.isArray(data.select) ? data.select : [data.select];
        columnSelectors.forEach(function (selector) {
            if (!columns[selector]) {
                columns[selector] = {};
            }
            var column = columns[selector];
            if (data.render) {
                column.render = data.render;
            }
            if (data.type) {
                column.type = data.type;
            }
            if (data.format) {
                column.format = data.format;
            }
            if (data.sortable === false) {
                column.notSortable = true;
            }
            if (data.hidden) {
                column.hidden = true;
            }
            if (data.filter) {
                column.filter = data.filter;
            }
            if (data.sortSequence) {
                column.sortSequence = data.sortSequence;
            }
            if (data.sort) {
                // We only allow one. The last one will overwrite all other options
                sort = { column: selector,
                    dir: data.sort };
            }
        });
    });
    return { columns: columns, sort: sort };
};

var Columns = /** @class */ (function () {
    function Columns(dt) {
        this.dt = dt;
        this.widths = [];
        this.init();
    }
    Columns.prototype.init = function () {
        this.settings = readColumnSettings(this.dt.options.columns);
    };
    /**
     * Swap two columns
     */
    Columns.prototype.swap = function (columns) {
        if (columns.length === 2) {
            // Get the current column indexes
            var cols = this.dt.data.headings.map(function (_node, index) { return index; });
            var x = columns[0];
            var y = columns[1];
            var b = cols[y];
            cols[y] = cols[x];
            cols[x] = b;
            return this.order(cols);
        }
    };
    /**
     * Reorder the columns
     */
    Columns.prototype.order = function (columns) {
        var _this = this;
        this.dt.data.headings = columns.map(function (index) { return _this.dt.data.headings[index]; });
        this.dt.data.data = this.dt.data.data.map(function (row) { return columns.map(function (index) { return row[index]; }); });
        this.settings.columns = columns.map(function (index) { return _this.settings.columns[index]; });
        // Update
        this.dt.update();
    };
    /**
     * Hide columns
     */
    Columns.prototype.hide = function (columns) {
        var _this = this;
        if (!columns.length) {
            return;
        }
        columns.forEach(function (index) {
            if (!_this.settings.columns[index]) {
                _this.settings.columns[index] = {};
            }
            var column = _this.settings.columns[index];
            column.hidden = true;
        });
        this.dt.update();
    };
    /**
     * Show columns
     */
    Columns.prototype.show = function (columns) {
        var _this = this;
        if (!columns.length) {
            return;
        }
        columns.forEach(function (index) {
            if (!_this.settings.columns[index]) {
                _this.settings.columns[index] = {};
            }
            var column = _this.settings.columns[index];
            delete column.hidden;
        });
        this.dt.update();
    };
    /**
     * Check column(s) visibility
     */
    Columns.prototype.visible = function (columns) {
        var _this = this;
        var _a;
        if (Array.isArray(columns)) {
            return columns.map(function (index) { var _a; return !((_a = _this.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); });
        }
        return !((_a = this.settings.columns[columns]) === null || _a === void 0 ? void 0 : _a.hidden);
    };
    /**
     * Add a new column
     */
    Columns.prototype.add = function (data) {
        var newColumnSelector = this.dt.data.headings.length;
        this.dt.data.headings = this.dt.options.dataConvert ?
            this.dt.data.headings.concat([readHeaderCell(data.heading)]) :
            this.dt.data.headings.concat([data.heading]);
        this.dt.data.data = this.dt.options.dataConvert ?
            this.dt.data.data.map(function (row, index) { return row.concat([readDataCell(data.data[index], data)]); }) :
            this.dt.data.data.map(function (row, index) { return row.concat([data.data[index]]); });
        if (data.type || data.format || data.sortable || data.render || data.filter) {
            if (!this.settings.columns[newColumnSelector]) {
                this.settings.columns[newColumnSelector] = {};
            }
            var column = this.settings.columns[newColumnSelector];
            if (data.type) {
                column.type = data.type;
            }
            if (data.format) {
                column.format = data.format;
            }
            if (data.sortable) {
                column.notSortable = !data.sortable;
            }
            if (data.filter) {
                column.filter = data.filter;
            }
            if (data.type) {
                column.type = data.type;
            }
            if (data.render) {
                column.render = data.render;
            }
        }
        this.dt.update(true);
    };
    /**
     * Remove column(s)
     */
    Columns.prototype.remove = function (columns) {
        if (Array.isArray(columns)) {
            this.dt.data.headings = this.dt.data.headings.filter(function (_heading, index) { return !columns.includes(index); });
            this.dt.data.data = this.dt.data.data.map(function (row) { return row.filter(function (_cell, index) { return !columns.includes(index); }); });
            this.dt.update(true);
        }
        else {
            return this.remove([columns]);
        }
    };
    /**
     * Filter by column
     */
    Columns.prototype.filter = function (column, init) {
        var _a, _b;
        if (init === void 0) { init = false; }
        if (!((_b = (_a = this.settings.columns[column]) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.length)) {
            // There is no filter to apply.
            return;
        }
        var currentFilter = this.dt.filterStates.find(function (filterState) { return filterState.column === column; });
        var newFilterState;
        if (currentFilter) {
            var returnNext_1 = false;
            newFilterState = this.settings.columns[column].filter.find(function (filter) {
                if (returnNext_1) {
                    return true;
                }
                if (filter === currentFilter.state) {
                    returnNext_1 = true;
                }
                return false;
            });
        }
        else {
            newFilterState = this.settings.columns[column].filter[0];
        }
        if (currentFilter && newFilterState) {
            currentFilter.state = newFilterState;
        }
        else if (currentFilter) {
            this.dt.filterStates = this.dt.filterStates.filter(function (filterState) { return filterState.column !== column; });
        }
        else {
            this.dt.filterStates.push({ column: column, state: newFilterState });
        }
        this.dt.update();
        if (!init) {
            this.dt.emit("datatable.filter", column, newFilterState);
        }
    };
    /**
     * Sort by column
     */
    Columns.prototype.sort = function (column, dir, init) {
        var _a, _b;
        if (dir === void 0) { dir = undefined; }
        if (init === void 0) { init = false; }
        var columnSettings = this.settings.columns[column];
        // If there is a filter for this column, apply it instead of sorting
        if ((_a = columnSettings === null || columnSettings === void 0 ? void 0 : columnSettings.filter) === null || _a === void 0 ? void 0 : _a.length) {
            return this.filter(column, init);
        }
        if (!init) {
            this.dt.emit("datatable.sorting", column, dir);
        }
        if (!dir) {
            var currentDir = this.settings.sort ? (_b = this.settings.sort) === null || _b === void 0 ? void 0 : _b.dir : false;
            var sortSequence = (columnSettings === null || columnSettings === void 0 ? void 0 : columnSettings.sortSequence) || ["asc", "desc"];
            if (!currentDir) {
                dir = sortSequence.length ? sortSequence[0] : "asc";
            }
            else {
                var currentDirIndex = sortSequence.indexOf(currentDir);
                if (currentDirIndex === -1) {
                    dir = "asc";
                }
                else if (currentDirIndex === sortSequence.length - 1) {
                    dir = sortSequence[0];
                }
                else {
                    dir = sortSequence[currentDirIndex + 1];
                }
            }
        }
        this.dt.data.data.sort(function (row1, row2) {
            var order1 = row1[column].order || row1[column].data, order2 = row2[column].order || row2[column].data;
            if (dir === "desc") {
                var temp = order1;
                order1 = order2;
                order2 = temp;
            }
            if (order1 < order2) {
                return -1;
            }
            else if (order1 > order2) {
                return 1;
            }
            return 0;
        });
        this.settings.sort = { column: column, dir: dir };
        if (!init) {
            this.dt.update();
            this.dt.emit("datatable.sort", column, dir);
        }
    };
    /**
     * Measure the actual width of cell content by rendering the entire table with all contents.
     * Note: Destroys current DOM and therefore requires subsequent dt.update()
     */
    Columns.prototype._measureWidths = function () {
        var _this = this;
        var _a, _b, _c, _d;
        var activeHeadings = this.dt.data.headings.filter(function (heading, index) { var _a; return !((_a = _this.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); });
        if ((this.dt.options.scrollY.length || this.dt.options.fixedColumns) && (activeHeadings === null || activeHeadings === void 0 ? void 0 : activeHeadings.length)) {
            this.widths = [];
            var renderOptions = {
                noPaging: true
            };
            // If we have headings we need only set the widths on them
            // otherwise we need a temp header and the widths need applying to all cells
            if (this.dt.options.header || this.dt.options.footer) {
                if (this.dt.options.scrollY.length) {
                    renderOptions.unhideHeader = true;
                }
                if (this.dt.headerDOM) {
                    // Remove headerDOM for accurate measurements
                    this.dt.headerDOM.parentElement.removeChild(this.dt.headerDOM);
                }
                // Reset widths
                renderOptions.noColumnWidths = true;
                this.dt._renderTable(renderOptions);
                var activeDOMHeadings_1 = Array.from(((_b = (_a = this.dt.dom.querySelector("thead, tfoot")) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.querySelectorAll("th")) || []);
                var domCounter_1 = 0;
                var absoluteColumnWidths = this.dt.data.headings.map(function (_heading, index) {
                    var _a;
                    if ((_a = _this.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden) {
                        return 0;
                    }
                    var width = activeDOMHeadings_1[domCounter_1].offsetWidth;
                    domCounter_1 += 1;
                    return width;
                });
                var totalOffsetWidth_1 = absoluteColumnWidths.reduce(function (total, cellWidth) { return total + cellWidth; }, 0);
                this.widths = absoluteColumnWidths.map(function (cellWidth) { return cellWidth / totalOffsetWidth_1 * 100; });
            }
            else {
                renderOptions.renderHeader = true;
                this.dt._renderTable(renderOptions);
                var activeDOMHeadings_2 = Array.from(((_d = (_c = this.dt.dom.querySelector("thead, tfoot")) === null || _c === void 0 ? void 0 : _c.firstElementChild) === null || _d === void 0 ? void 0 : _d.querySelectorAll("th")) || []);
                var domCounter_2 = 0;
                var absoluteColumnWidths = this.dt.data.headings.map(function (_heading, index) {
                    var _a;
                    if ((_a = _this.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden) {
                        return 0;
                    }
                    var width = activeDOMHeadings_2[domCounter_2].offsetWidth;
                    domCounter_2 += 1;
                    return width;
                });
                var totalOffsetWidth_2 = absoluteColumnWidths.reduce(function (total, cellWidth) { return total + cellWidth; }, 0);
                this.widths = absoluteColumnWidths.map(function (cellWidth) { return cellWidth / totalOffsetWidth_2 * 100; });
            }
            // render table without options for measurements
            this.dt._renderTable();
        }
    };
    return Columns;
}());

// type textNodeType = {
//     nodeName: "#text";
//     data: string;
//     childNodes?: never
// }
//
// type elementNodeType = {
//     nodeName: string;
//     attributes?: { [key: string]: string};
//     childNodes?: (elementNodeType | textNodeType)[];
//     data?: never;
// }
var RemoteResultsData = /** @class */ (function () {
    function RemoteResultsData() {
    }
    return RemoteResultsData;
}());

/**
 * Default configuration
 */
var defaultConfig$1 = {
    sortable: true,
    searchable: true,
    destroyable: true,
    // Whether to attempt to convert input data (not from dom). If false, we
    // assume input data is in simple-datatables native format.
    dataConvert: true,
    data: {},
    // Pagination
    paging: true,
    perPage: 10,
    perPageSelect: [5, 10, 15, 20, 25, 50, 100],
    nextPrev: true,
    firstLast: false,
    prevText: "&lsaquo;",
    nextText: "&rsaquo;",
    firstText: "&laquo;",
    lastText: "&raquo;",
    ellipsisText: "&hellip;",
    ascText: "▴",
    descText: "▾",
    truncatePager: true,
    pagerDelta: 2,
    scrollY: "",
    fixedColumns: true,
    fixedHeight: false,
    header: true,
    hiddenHeader: false,
    footer: false,
    tabIndex: false,
    rowNavigation: false,
    rowRender: false,
    // Customise the display text
    labels: {
        placeholder: "Search...",
        perPage: "{select} entries per page",
        noRows: "No entries found",
        noResults: "No results match your search query",
        info: "Showing {start} to {end} of {rows} entries" //
    },
    // Customise the layout
    layout: {
        top: "{select}{search}",
        bottom: "{info}{pager}"
    },
    classes: {
        active: "active",
        bottom: "datatable-bottom",
        container: "datatable-container",
        cursor: "datatable-cursor",
        dropdown: "datatable-dropdown",
        ellipsis: "ellipsis",
        empty: "datatable-empty",
        headercontainer: "datatable-headercontainer",
        info: "datatable-info",
        input: "datatable-input",
        loading: "datatable-loading",
        pagination: "datatable-pagination",
        paginationList: "datatable-pagination-list",
        search: "datatable-search",
        selector: "datatable-selector",
        sorter: "datatable-sorter",
        table: "datatable-table",
        top: "datatable-top",
        wrapper: "datatable-wrapper"
    },
    remote: {
        url: "",
        method: "GET",
        token: "",
        resultsData: new RemoteResultsData()
    }
};

var DataTable = /** @class */ (function () {
    function DataTable(table, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.dom = typeof table === "string" ? document.querySelector(table) : table;
        this.id = this.dom.id;
        // user options
        this.options = __assign(__assign(__assign({}, defaultConfig$1), options), { layout: __assign(__assign({}, defaultConfig$1.layout), options.layout), labels: __assign(__assign({}, defaultConfig$1.labels), options.labels), classes: __assign(__assign({}, defaultConfig$1.classes), options.classes), remote: __assign(__assign({}, defaultConfig$1.remote), options.remote) });
        this.initialInnerHTML = this.options.destroyable ? this.dom.innerHTML : ""; // preserve in case of later destruction
        if (this.options.tabIndex) {
            this.dom.tabIndex = this.options.tabIndex;
        }
        else if (this.options.rowNavigation && this.dom.tabIndex === -1) {
            this.dom.tabIndex = 0;
        }
        this.listeners = {
            onResize: function () { return _this._onResize(); }
        };
        this.dd = new T();
        this.initialized = false;
        this.events = {};
        this.currentPage = 0;
        this.onFirstPage = true;
        this.hasHeadings = false;
        this.hasRows = false;
        this.filterStates = [];
        this.hasRemote = options.remote !== undefined;
        if (this.hasRemote) {
            this.remote();
        }
        else {
            this.init();
        }
    }
    /**
     * Initialize the instance
     */
    DataTable.prototype.init = function () {
        var _this = this;
        if (this.initialized || this.dom.classList.contains(this.options.classes.table)) {
            return false;
        }
        this.virtualDOM = g(this.dom);
        this.rows = new Rows(this);
        this.columns = new Columns(this);
        this.data = readTableData(this.options.dataConvert, this.options.data, this.dom, this.columns.settings);
        this.hasRows = Boolean(this.data.data.length);
        this.hasHeadings = Boolean(this.data.headings.length);
        this._render();
        console.log("INIT END");
        setTimeout(function () {
            _this.emit("datatable.init");
            _this.initialized = true;
        }, 10);
    };
    /**
     * Render the instance
     */
    DataTable.prototype._render = function () {
        var _this = this;
        // Build
        this.wrapper = createElement("div", {
            "class": "".concat(this.options.classes.wrapper, " ").concat(this.options.classes.loading)
        });
        // Template for custom layouts
        var template = "";
        template += "<div class='".concat(this.options.classes.top, "'>");
        template += this.options.layout.top;
        template += "</div>";
        if (this.options.scrollY.length) {
            template += "<div class='".concat(this.options.classes.container, "' style='height: ").concat(this.options.scrollY, "; overflow-Y: auto;'></div>");
        }
        else {
            template += "<div class='".concat(this.options.classes.container, "'></div>");
        }
        template += "<div class='".concat(this.options.classes.bottom, "'>");
        template += this.options.layout.bottom;
        template += "</div>";
        // Info placement
        template = template.replace("{info}", this.options.paging ? "<div class='".concat(this.options.classes.info, "'></div>") : "");
        // Per Page Select
        if (this.options.paging && this.options.perPageSelect) {
            var wrap = "<div class='".concat(this.options.classes.dropdown, "'><label>");
            wrap += this.options.labels.perPage;
            wrap += "</label></div>";
            // Create the select
            var select_1 = createElement("select", {
                "class": this.options.classes.selector
            });
            // Create the options
            this.options.perPageSelect.forEach(function (choice) {
                var _a = Array.isArray(choice) ? [choice[0], choice[1]] : [String(choice), choice], lab = _a[0], val = _a[1];
                var selected = val === _this.options.perPage;
                var option = new Option(lab, String(val), selected, selected);
                select_1.appendChild(option);
            });
            // Custom label
            wrap = wrap.replace("{select}", select_1.outerHTML);
            // Selector placement
            template = template.replace("{select}", wrap);
        }
        else {
            template = template.replace("{select}", "");
        }
        // Searchable
        if (this.options.searchable) {
            var form = "<div class='".concat(this.options.classes.search, "'><input class='").concat(this.options.classes.input, "' placeholder='").concat(this.options.labels.placeholder, "' type='text'></div>");
            // Search input placement
            template = template.replace("{search}", form);
        }
        else {
            template = template.replace("{search}", "");
        }
        // Paginator
        var paginatorWrapper = createElement("nav", {
            "class": this.options.classes.pagination
        });
        var paginator = createElement("ul", {
            "class": this.options.classes.paginationList
        });
        paginatorWrapper.appendChild(paginator);
        // Pager(s) placement
        template = template.replace(/\{pager\}/g, paginatorWrapper.outerHTML);
        this.wrapper.innerHTML = template;
        this.container = this.wrapper.querySelector(".".concat(this.options.classes.container));
        this.pagers = Array.from(this.wrapper.querySelectorAll("ul.".concat(this.options.classes.paginationList)));
        this.label = this.wrapper.querySelector(".".concat(this.options.classes.info));
        // Insert in to DOM tree
        this.dom.parentElement.replaceChild(this.wrapper, this.dom);
        this.container.appendChild(this.dom);
        // Store the table dimensions
        this.rect = this.dom.getBoundingClientRect();
        // // Fix height
        this._fixHeight();
        //
        // Class names
        if (!this.options.header) {
            this.wrapper.classList.add("no-header");
        }
        if (!this.options.footer) {
            this.wrapper.classList.add("no-footer");
        }
        if (this.options.sortable) {
            this.wrapper.classList.add("sortable");
        }
        if (this.options.searchable) {
            this.wrapper.classList.add("searchable");
        }
        if (this.options.fixedHeight) {
            this.wrapper.classList.add("fixed-height");
        }
        if (this.options.fixedColumns) {
            this.wrapper.classList.add("fixed-columns");
        }
        this._bindEvents();
        if (this.columns.settings.sort) {
            this.columns.sort(this.columns.settings.sort.column, this.columns.settings.sort.dir, true);
        }
        this.update(true);
    };
    DataTable.prototype._renderTable = function (renderOptions) {
        if (renderOptions === void 0) { renderOptions = {}; }
        var newVirtualDOM = dataToVirtualDOM(this.id, this.data.headings, (this.options.paging || this.searching) && this.currentPage && this.pages.length && !renderOptions.noPaging ?
            this.pages[this.currentPage - 1] :
            this.data.data.map(function (row, index) { return ({
                row: row,
                index: index
            }); }), this.columns.settings, this.columns.widths, this.rows.cursor, this.options, renderOptions);
        var diff = this.dd.diff(this.virtualDOM, newVirtualDOM);
        this.dd.apply(this.dom, diff);
        this.virtualDOM = newVirtualDOM;
    };
    /**
     * Render the page
     * @return {Void}
     */
    DataTable.prototype._renderPage = function (lastRowCursor) {
        var _this = this;
        if (lastRowCursor === void 0) { lastRowCursor = false; }
        if (this.hasRows && this.totalPages) {
            if (this.currentPage > this.totalPages) {
                this.currentPage = 1;
            }
            // Use a fragment to limit touching the DOM
            this._renderTable();
            this.onFirstPage = this.currentPage === 1;
            this.onLastPage = this.currentPage === this.lastPage;
        }
        else {
            this.setMessage(this.options.labels.noRows);
        }
        // Update the info
        var current = 0;
        var f = 0;
        var t = 0;
        var items;
        if (this.totalPages) {
            current = this.currentPage - 1;
            f = current * this.options.perPage;
            t = f + this.pages[current].length;
            f = f + 1;
            items = this.searching ? this.searchData.length : (!this.hasRemote) ? this.data.data.length : this.options.remote.resultsData.totalRecords;
        }
        if (this.label && this.options.labels.info.length) {
            // CUSTOM LABELS
            var string = this.options.labels.info
                .replace("{start}", String(f))
                .replace("{end}", String(t))
                .replace("{page}", String(this.currentPage))
                .replace("{pages}", String(this.totalPages))
                .replace("{rows}", String(items));
            this.label.innerHTML = items ? string : "";
        }
        if (this.currentPage == 1) {
            this._fixHeight();
        }
        if (this.options.rowNavigation && this.currentPage) {
            if (!this.rows.cursor || !this.pages[this.currentPage - 1].find(function (row) { return row.index === _this.rows.cursor; })) {
                var rows = this.pages[this.currentPage - 1];
                if (rows.length) {
                    if (lastRowCursor) {
                        this.rows.setCursor(rows[rows.length - 1].index);
                    }
                    else {
                        this.rows.setCursor(rows[0].index);
                    }
                }
            }
        }
    };
    /**
     * Render the pager(s)
     * @return {Void}
     */
    DataTable.prototype._renderPager = function () {
        var _this = this;
        flush(this.pagers);
        if (this.totalPages > 1) {
            var c = "pager";
            var frag_1 = document.createDocumentFragment();
            var prev = this.onFirstPage ? 1 : this.currentPage - 1;
            var next = this.onLastPage ? this.totalPages : this.currentPage + 1;
            // first button
            if (this.options.firstLast) {
                frag_1.appendChild(button(c, 1, this.options.firstText));
            }
            // prev button
            if (this.options.nextPrev && !this.onFirstPage) {
                frag_1.appendChild(button(c, prev, this.options.prevText));
            }
            var pager = this.links;
            // truncate the links
            if (this.options.truncatePager) {
                pager = truncate(this.links, this.currentPage, this.pages.length, this.options);
            }
            // active page link
            this.links[this.currentPage - 1].classList.add(this.options.classes.active);
            // append the links
            pager.forEach(function (p) {
                p.classList.remove(_this.options.classes.active);
                frag_1.appendChild(p);
            });
            this.links[this.currentPage - 1].classList.add(this.options.classes.active);
            // next button
            if (this.options.nextPrev && !this.onLastPage) {
                frag_1.appendChild(button(c, next, this.options.nextText));
            }
            // first button
            if (this.options.firstLast) {
                frag_1.appendChild(button(c, this.totalPages, this.options.lastText));
            }
            // We may have more than one pager
            this.pagers.forEach(function (pager) {
                pager.appendChild(frag_1.cloneNode(true));
            });
        }
    };
    // Render header that is not in the same table element as the remainder
    // of the table. Used for tables with scrollY.
    DataTable.prototype._renderSeparateHeader = function () {
        var container = this.dom.parentElement;
        if (!this.headerDOM) {
            this.headerDOM = document.createElement("div");
            this.virtualHeaderDOM = {
                nodeName: "DIV"
            };
        }
        container.parentElement.insertBefore(this.headerDOM, container);
        var newVirtualHeaderDOM = {
            nodeName: "DIV",
            attributes: {
                "class": this.options.classes.headercontainer
            },
            childNodes: [
                {
                    nodeName: "TABLE",
                    attributes: {
                        "class": this.options.classes.table
                    },
                    childNodes: [
                        {
                            nodeName: "THEAD",
                            childNodes: [
                                headingsToVirtualHeaderRowDOM(this.data.headings, this.columns.settings, this.columns.widths, this.options, { unhideHeader: true })
                            ]
                        }
                    ]
                }
            ]
        };
        var diff = this.dd.diff(this.virtualHeaderDOM, newVirtualHeaderDOM);
        this.dd.apply(this.headerDOM, diff);
        this.virtualHeaderDOM = newVirtualHeaderDOM;
        // Compensate for scrollbars
        var paddingRight = this.headerDOM.firstElementChild.clientWidth - this.dom.clientWidth;
        if (paddingRight) {
            var paddedVirtualHeaderDOM = structuredClone(this.virtualHeaderDOM);
            paddedVirtualHeaderDOM.attributes.style = "padding-right: ".concat(paddingRight, "px;");
            var diff_1 = this.dd.diff(this.virtualHeaderDOM, paddedVirtualHeaderDOM);
            this.dd.apply(this.headerDOM, diff_1);
            this.virtualHeaderDOM = paddedVirtualHeaderDOM;
        }
        if (container.scrollHeight > container.clientHeight) {
            // scrollbars on one page means scrollbars on all pages.
            container.style.overflowY = "scroll";
        }
    };
    /**
     * Bind event listeners
     * @return {[type]} [description]
     */
    DataTable.prototype._bindEvents = function () {
        var _this = this;
        // Per page selector
        if (this.options.perPageSelect) {
            var selector_1 = this.wrapper.querySelector("select.".concat(this.options.classes.selector));
            if (selector_1 && selector_1 instanceof HTMLSelectElement) {
                // Change per page
                selector_1.addEventListener("change", function () {
                    _this.options.perPage = parseInt(selector_1.value, 10);
                    _this.update();
                    _this._fixHeight();
                    _this.emit("datatable.perpage", _this.options.perPage);
                }, false);
            }
        }
        // Search input
        if (this.options.searchable) {
            this.input = this.wrapper.querySelector(".".concat(this.options.classes.input));
            if (this.input) {
                this.input.addEventListener("keyup", function () { return _this.search(_this.input.value); }, false);
            }
        }
        // Pager(s) / sorting
        this.wrapper.addEventListener("click", function (event) {
            var target = event.target;
            var hyperlink = target.closest("a");
            if (!hyperlink) {
                return;
            }
            if (hyperlink.hasAttribute("data-page")) {
                _this.page(parseInt(hyperlink.getAttribute("data-page"), 10));
                event.preventDefault();
            }
            else if (_this.options.sortable &&
                hyperlink.classList.contains(_this.options.classes.sorter) &&
                hyperlink.parentElement.getAttribute("data-sortable") != "false") {
                var visibleIndex = Array.from(hyperlink.parentElement.parentElement.children).indexOf(hyperlink.parentElement);
                var columnIndex = visibleToColumnIndex(visibleIndex, _this.columns.settings.columns);
                _this.columns.sort(columnIndex);
                event.preventDefault();
            }
        }, false);
        if (this.options.rowNavigation) {
            this.dom.addEventListener("keydown", function (event) {
                if (event.key === "ArrowUp") {
                    event.preventDefault();
                    event.stopPropagation();
                    var lastRow_1;
                    _this.pages[_this.currentPage - 1].find(function (row) {
                        if (row.index === _this.rows.cursor) {
                            return true;
                        }
                        lastRow_1 = row;
                        return false;
                    });
                    if (lastRow_1) {
                        _this.rows.setCursor(lastRow_1.index);
                    }
                    else if (!_this.onFirstPage) {
                        _this.page(_this.currentPage - 1, true);
                    }
                }
                else if (event.key === "ArrowDown") {
                    event.preventDefault();
                    event.stopPropagation();
                    var foundRow_1;
                    var nextRow = _this.pages[_this.currentPage - 1].find(function (row) {
                        if (foundRow_1) {
                            return true;
                        }
                        if (row.index === _this.rows.cursor) {
                            foundRow_1 = true;
                        }
                        return false;
                    });
                    if (nextRow) {
                        _this.rows.setCursor(nextRow.index);
                    }
                    else if (!_this.onLastPage) {
                        _this.page(_this.currentPage + 1);
                    }
                }
                else if (["Enter", " "].includes(event.key)) {
                    _this.emit("datatable.selectrow", _this.rows.cursor, event);
                }
            });
            this.dom.addEventListener("mousedown", function (event) {
                var target = event.target;
                if (!(target instanceof Element)) {
                    return;
                }
                if (_this.dom.matches(":focus")) {
                    var row = Array.from(_this.dom.querySelectorAll("body tr")).find(function (row) { return row.contains(target); });
                    if (row && row instanceof HTMLElement) {
                        _this.emit("datatable.selectrow", parseInt(row.dataset.index, 10), event);
                    }
                }
            });
        }
        else {
            this.dom.addEventListener("mousedown", function (event) {
                var target = event.target;
                if (!(target instanceof Element)) {
                    return;
                }
                var row = Array.from(_this.dom.querySelectorAll("body tr")).find(function (row) { return row.contains(target); });
                if (row && row instanceof HTMLElement) {
                    _this.emit("datatable.selectrow", parseInt(row.dataset.index, 10), event);
                }
            });
        }
        window.addEventListener("resize", this.listeners.onResize);
    };
    /**
     * execute on resize
     */
    DataTable.prototype._onResize = function () {
        this.rect = this.container.getBoundingClientRect();
        if (!this.rect.width) {
            // No longer shown, likely no longer part of DOM. Give up.
            return;
        }
        this.update(true);
    };
    /**
     * Destroy the instance
     * @return {void}
     */
    DataTable.prototype.destroy = function () {
        if (!this.options.destroyable) {
            return;
        }
        this.dom.innerHTML = this.initialInnerHTML;
        // Remove the className
        this.dom.classList.remove(this.options.classes.table);
        // Remove the containers
        if (this.wrapper.parentElement) {
            this.wrapper.parentElement.replaceChild(this.dom, this.wrapper);
        }
        this.initialized = false;
        window.removeEventListener("resize", this.listeners.onResize);
    };
    /**
     * Update the instance
     * @return {Void}
     */
    DataTable.prototype.update = function (measureWidths) {
        if (measureWidths === void 0) { measureWidths = false; }
        if (measureWidths) {
            this.columns._measureWidths();
        }
        this.wrapper.classList.remove(this.options.classes.empty);
        this._paginate();
        this._renderPage();
        this.links = [];
        var i = this.pages.length;
        while (i--) {
            var num = i + 1;
            this.links[i] = button(i === 0 ? this.options.classes.active : "", num, String(num));
        }
        this._renderPager();
        if (this.options.scrollY.length) {
            this._renderSeparateHeader();
        }
        this.emit("datatable.update");
    };
    DataTable.prototype._paginate = function () {
        var _this = this;
        var rows = this.data.data.map(function (row, index) { return ({
            row: row,
            index: index
        }); });
        if (this.searching) {
            rows = [];
            this.searchData.forEach(function (index) { return rows.push({ index: index, row: _this.data.data[index] }); });
        }
        if (this.filterStates.length) {
            this.filterStates.forEach(function (filterState) {
                rows = rows.filter(function (row) { return typeof filterState.state === "function" ? filterState.state(row.row[filterState.column].data) : row.row[filterState.column].data === filterState.state; });
            });
        }
        if (this.options.paging && this.options.perPage > 0 && !this.hasRemote) {
            // Check for hidden columns
            this.pages = rows
                .map(function (row, i) { return i % _this.options.perPage === 0 ? rows.slice(i, i + _this.options.perPage) : null; })
                .filter(function (page) { return page; });
        }
        else if (this.hasRemote) {
            this.pages = rows
                .map(function (row, i) { return i % _this.options.perPage === 0 ? rows.slice(i, i + _this.options.perPage) : null; })
                .filter(function (page) { return page; });
            for (var index = 1; index < this.options.remote.resultsData.totalRecords / this.options.perPage; index++) {
                var arrayRows = [];
                for (var j = 0; j < this.options.perPage; j++) {
                    arrayRows.push(new Rows(this));
                }
                this.pages.push(arrayRows);
            }
        }
        else {
            this.pages = [rows];
        }
        this.totalPages = this.lastPage = this.pages.length;
        this.currentPage = 1;
        return this.totalPages;
    };
    /**
     * Fix the container height
     */
    DataTable.prototype._fixHeight = function () {
        if (this.options.fixedHeight) {
            this.container.style.height = null;
            this.rect = this.container.getBoundingClientRect();
            this.container.style.height = "".concat(this.rect.height, "px");
        }
    };
    /**
     * Perform a search of the data set
     */
    DataTable.prototype.search = function (query) {
        var _this = this;
        if (!this.hasRows)
            return false;
        query = query.toLowerCase();
        this.currentPage = 1;
        this.searching = true;
        this.searchData = [];
        if (!query.length) {
            this.searching = false;
            this.update();
            this.emit("datatable.search", query, this.searchData);
            this.wrapper.classList.remove("search-results");
            return false;
        }
        this.data.data.forEach(function (row, idx) {
            var inArray = _this.searchData.includes(idx);
            // https://github.com/Mobius1/Vanilla-DataTables/issues/12
            var doesQueryMatch = query.split(" ").reduce(function (bool, word) {
                var includes = false;
                var cell = null;
                var content = null;
                for (var x = 0; x < row.length; x++) {
                    cell = row[x];
                    content = cell.text || String(cell.data);
                    if (_this.columns.visible(x) && content.toLowerCase().includes(word)) {
                        includes = true;
                        break;
                    }
                }
                return bool && includes;
            }, true);
            if (doesQueryMatch && !inArray) {
                _this.searchData.push(idx);
            }
        });
        this.wrapper.classList.add("search-results");
        if (!this.searchData.length) {
            this.wrapper.classList.remove("search-results");
            this.setMessage(this.options.labels.noResults);
        }
        else {
            this.update();
        }
        this.emit("datatable.search", query, this.searchData);
    };
    /**
     * Change page
     */
    DataTable.prototype.page = function (page, lastRowCursor) {
        if (lastRowCursor === void 0) { lastRowCursor = false; }
        // We don't want to load the current page again.
        if (page === this.currentPage) {
            return false;
        }
        if (!isNaN(page)) {
            this.currentPage = page;
        }
        if (page > this.pages.length || page < 0) {
            return false;
        }
        this._renderPage(lastRowCursor);
        this._renderPager();
        this.emit("datatable.page", page);
    };
    /**
     * Add new row data
     */
    DataTable.prototype.insert = function (data) {
        var _this = this;
        var rows = [];
        if (Array.isArray(data)) {
            var headings_1 = this.data.headings.map(function (heading) { var _a; return (_a = heading.text) !== null && _a !== void 0 ? _a : String(heading.data); });
            data.forEach(function (row, rIndex) {
                var r = [];
                Object.entries(row).forEach(function (_a) {
                    var heading = _a[0], cell = _a[1];
                    var index = headings_1.indexOf(heading);
                    if (index > -1) {
                        r[index] = readDataCell(cell, _this.columns.settings.columns[index]);
                    }
                    else if (!_this.hasHeadings && !_this.hasRows && rIndex === 0) {
                        r[headings_1.length] = readDataCell(cell, _this.columns.settings.columns[headings_1.length]);
                        headings_1.push(heading);
                        _this.data.headings.push(readHeaderCell(heading));
                    }
                });
                rows.push(r);
            });
        }
        else if (isObject(data)) {
            if (data.headings && !this.hasHeadings && !this.hasRows) {
                this.data = readTableData(this.options.dataConvert, data, undefined, this.columns.settings);
                this.hasRows = Boolean(this.data.data.length);
                this.hasHeadings = Boolean(this.data.headings.length);
            }
            else if (data.data && Array.isArray(data.data)) {
                rows = data.data.map(function (row) { return row.map(function (cell, index) { return readDataCell(cell, _this.columns.settings.columns[index]); }); });
            }
        }
        if (rows.length) {
            rows.forEach(function (row) { return _this.data.data.push(row); });
            this.hasRows = true;
        }
        this.hasHeadings = Boolean(this.data.headings.length);
        if (this.columns.settings.sort) {
            this.columns.sort(this.columns.settings.sort.column, this.columns.settings.sort.dir, true);
        }
        this.update(true);
    };
    /**
     * Remote fetch
     */
    DataTable.prototype.remote = function () {
        var _this = this;
        var remote = this.options.remote;
        switch (remote.method) {
            case "GET":
                axios$1.get(remote.url)
                    .then(function (r) {
                    console.log(r);
                })["catch"](function (error) {
                    console.log(error);
                })["finally"](function () {
                    console.log("FINISHFETCH");
                });
                break;
            case "POST":
                axios$1.post(remote.url, {
                    limit: this.options.perPage,
                    offset: this.options.perPage * this.currentPage
                }, {
                    headers: {
                        "X-CSRF-Token": remote.token,
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8"
                    }
                })
                    .then(function (r) {
                    var obj = {
                        headings: Object.keys(r.data.data[0]),
                        data: []
                    };
                    for (var i = 0; i < r.data.data.length; i++) {
                        obj.data[i] = [];
                        for (var p in r.data.data[i]) {
                            if (r.data.data[i].hasOwnProperty(p)) {
                                obj.data[i].push(r.data.data[i][p]);
                            }
                        }
                    }
                    _this.options.data = obj;
                    _this.options.remote.resultsData.totalRecords = r.data.total;
                    _this.init();
                })["catch"](function (error) {
                    console.log(error);
                })["finally"](function () {
                    console.log("FINISHFETCH");
                });
                break;
        }
    };
    /**
     * Refresh the instance
     */
    DataTable.prototype.refresh = function () {
        if (this.options.searchable) {
            this.input.value = "";
            this.searching = false;
        }
        this.currentPage = 1;
        this.onFirstPage = true;
        this.update(true);
        this.emit("datatable.refresh");
    };
    /**
     * Print the table
     */
    DataTable.prototype.print = function () {
        var tableDOM = createElement("table");
        var tableVirtualDOM = { nodeName: "TABLE" };
        var newTableVirtualDOM = dataToVirtualDOM(this.id, this.data.headings, this.data.data.map(function (row, index) { return ({
            row: row,
            index: index
        }); }), this.columns.settings, this.columns.widths, false, // No row cursor
        this.options, {
            noColumnWidths: true,
            unhideHeader: true
        });
        var diff = this.dd.diff(tableVirtualDOM, newTableVirtualDOM);
        this.dd.apply(tableDOM, diff);
        // Open new window
        var w = window.open();
        // Append the table to the body
        w.document.body.appendChild(tableDOM);
        // Print
        w.print();
    };
    /**
     * Show a message in the table
     */
    DataTable.prototype.setMessage = function (message) {
        var _this = this;
        var _a;
        var activeHeadings = this.data.headings.filter(function (heading, index) { var _a; return !((_a = _this.columns.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); });
        var colspan = activeHeadings.length || 1;
        this.wrapper.classList.add(this.options.classes.empty);
        if (this.label) {
            this.label.innerHTML = "";
        }
        this.totalPages = 0;
        this._renderPager();
        var newVirtualDOM = structuredClone(this.virtualDOM);
        var tbody = (_a = newVirtualDOM.childNodes) === null || _a === void 0 ? void 0 : _a.find(function (node) { return node.nodeName === "TBODY"; });
        if (!tbody) {
            tbody = { nodeName: "TBODY" };
            newVirtualDOM.childNodes = [tbody];
        }
        tbody.childNodes = [
            {
                nodeName: "TR",
                childNodes: [
                    {
                        nodeName: "TD",
                        attributes: {
                            "class": this.options.classes.empty,
                            colspan: String(colspan)
                        },
                        childNodes: [
                            {
                                nodeName: "#text",
                                data: message
                            }
                        ]
                    }
                ]
            }
        ];
        var diff = this.dd.diff(this.virtualDOM, newVirtualDOM);
        this.dd.apply(this.dom, diff);
        this.virtualDOM = newVirtualDOM;
    };
    /**
     * Add custom event listener
     */
    DataTable.prototype.on = function (event, callback) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    };
    /**
     * Remove custom event listener
     */
    DataTable.prototype.off = function (event, callback) {
        if (event in this.events === false)
            return;
        this.events[event].splice(this.events[event].indexOf(callback), 1);
    };
    /**
     * Fire custom event
     */
    DataTable.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (event in this.events === false)
            return;
        for (var i = 0; i < this.events[event].length; i++) {
            (_a = this.events[event])[i].apply(_a, args);
        }
    };
    return DataTable;
}());

/**
 * Convert CSV data to fit the format used in the table.
 */
var convertCSV = function (userOptions) {
    var obj;
    var defaults = {
        lineDelimiter: "\n",
        columnDelimiter: ",",
        removeDoubleQuotes: false
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    if (options.data.length) {
        // Import CSV
        obj = {
            data: []
        };
        // Split the string into rows
        var rows = options.data.split(options.lineDelimiter);
        if (rows.length) {
            if (options.headings) {
                obj.headings = rows[0].split(options.columnDelimiter);
                if (options.removeDoubleQuotes) {
                    obj.headings = obj.headings.map(function (e) { return e.trim().replace(/(^"|"$)/g, ""); });
                }
                rows.shift();
            }
            rows.forEach(function (row, i) {
                obj.data[i] = [];
                // Split the rows into values
                var values = row.split(options.columnDelimiter);
                if (values.length) {
                    values.forEach(function (value) {
                        if (options.removeDoubleQuotes) {
                            value = value.trim().replace(/(^"|"$)/g, "");
                        }
                        obj.data[i].push({ data: value });
                    });
                }
            });
        }
        if (obj) {
            return obj;
        }
    }
    return false;
};

/**
 * Convert JSON data to fit the format used in the table.
 */
var convertJSON = function (userOptions) {
    var obj;
    var defaults = {
        data: ""
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    if (options.data.length || isObject(options.data)) {
        // Import JSON
        var json = isJson(options.data) ? JSON.parse(options.data) : false;
        // Valid JSON string
        if (json) {
            obj = {
                headings: [],
                data: []
            };
            json.forEach(function (data, i) {
                obj.data[i] = [];
                Object.entries(data).forEach(function (_a) {
                    var column = _a[0], value = _a[1];
                    if (!obj.headings.includes(column)) {
                        obj.headings.push(column);
                    }
                    if ((value === null || value === void 0 ? void 0 : value.constructor) == Object) {
                        obj.data[i].push(value);
                    }
                    else {
                        obj.data[i].push({ data: value });
                    }
                });
            });
        }
        else {
            console.warn("That's not valid JSON!");
        }
        if (obj) {
            return obj;
        }
    }
    return false;
};

var exportCSV = function (dt, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    var defaults = {
        download: true,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ","
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    var columnShown = function (index) { var _a; return !options.skipColumn.includes(index) && !((_a = dt.columns.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); };
    var rows = [];
    var headers = dt.data.headings.filter(function (_heading, index) { return columnShown(index); }).map(function (header) { var _a; return (_a = header.text) !== null && _a !== void 0 ? _a : header.data; });
    // Include headings
    rows[0] = headers;
    // Selection or whole table
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (var i = 0; i < options.selection.length; i++) {
                rows = rows.concat(dt.pages[options.selection[i] - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : cell.data; }); }));
            }
        }
        else {
            rows = rows.concat(dt.pages[options.selection - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : cell.data; }); }));
        }
    }
    else {
        rows = rows.concat(dt.data.data.map(function (row) { return row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : cell.data; }); }));
    }
    // Only proceed if we have data
    if (rows.length) {
        var str_1 = "";
        rows.forEach(function (row) {
            row.forEach(function (cell) {
                if (typeof cell === "string") {
                    cell = cell.trim();
                    cell = cell.replace(/\s{2,}/g, " ");
                    cell = cell.replace(/\n/g, "  ");
                    cell = cell.replace(/"/g, "\"\"");
                    //have to manually encode "#" as encodeURI leaves it as is.
                    cell = cell.replace(/#/g, "%23");
                    if (cell.includes(",")) {
                        cell = "\"".concat(cell, "\"");
                    }
                }
                str_1 += cell + options.columnDelimiter;
            });
            // Remove trailing column delimiter
            str_1 = str_1.trim().substring(0, str_1.length - 1);
            // Apply line delimiter
            str_1 += options.lineDelimiter;
        });
        // Remove trailing line delimiter
        str_1 = str_1.trim().substring(0, str_1.length - 1);
        // Download
        if (options.download) {
            // Create a link to trigger the download
            var link = document.createElement("a");
            link.href = encodeURI("data:text/csv;charset=utf-8,".concat(str_1));
            link.download = "".concat(options.filename || "datatable_export", ".csv");
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str_1;
    }
    return false;
};

var exportJSON = function (dt, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    var defaults = {
        download: true,
        skipColumn: [],
        replacer: null,
        space: 4
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    var columnShown = function (index) { var _a; return !options.skipColumn.includes(index) && !((_a = dt.columns.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); };
    var rows = [];
    // Selection or whole table
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (var i = 0; i < options.selection.length; i++) {
                rows = rows.concat(dt.pages[options.selection[i] - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.type === "node" ? cell : cell.data; }); }));
            }
        }
        else {
            rows = rows.concat(dt.pages[options.selection - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.type === "node" ? cell : cell.data; }); }));
        }
    }
    else {
        rows = rows.concat(dt.data.data.map(function (row) { return row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.type === "node" ? cell : cell.data; }); }));
    }
    var headers = dt.data.headings.filter(function (_heading, index) { return columnShown(index); }).map(function (header) { var _a; return (_a = header.text) !== null && _a !== void 0 ? _a : String(header.data); });
    // Only proceed if we have data
    if (rows.length) {
        var arr_1 = [];
        rows.forEach(function (row, x) {
            arr_1[x] = arr_1[x] || {};
            row.forEach(function (cell, i) {
                arr_1[x][headers[i]] = cell;
            });
        });
        // Convert the array of objects to JSON string
        var str = JSON.stringify(arr_1, options.replacer, options.space);
        // Download
        if (options.download) {
            // Create a link to trigger the download
            var blob = new Blob([str], {
                type: "data:application/json;charset=utf-8"
            });
            var url = URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.href = url;
            link.download = "".concat(options.filename || "datatable_export", ".json");
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
        return str;
    }
    return false;
};

var exportSQL = function (dt, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    var defaults = {
        download: true,
        skipColumn: [],
        tableName: "myTable"
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    var columnShown = function (index) { var _a; return !options.skipColumn.includes(index) && !((_a = dt.columns.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); };
    var rows = [];
    // Selection or whole table
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (var i = 0; i < options.selection.length; i++) {
                rows = rows.concat(dt.pages[options.selection[i] - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : cell.data; }); }));
            }
        }
        else {
            rows = rows.concat(dt.pages[options.selection - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : cell.data; }); }));
        }
    }
    else {
        rows = rows.concat(dt.data.data.map(function (row) { return row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.data; }); }));
    }
    var headers = dt.data.headings.filter(function (_heading, index) { return columnShown(index); }).map(function (header) { var _a; return (_a = header.text) !== null && _a !== void 0 ? _a : String(header.data); });
    // Only proceed if we have data
    if (rows.length) {
        // Begin INSERT statement
        var str_1 = "INSERT INTO `".concat(options.tableName, "` (");
        // Convert table headings to column names
        headers.forEach(function (header) {
            str_1 += "`".concat(header, "`,");
        });
        // Remove trailing comma
        str_1 = str_1.trim().substring(0, str_1.length - 1);
        // Begin VALUES
        str_1 += ") VALUES ";
        // Iterate rows and convert cell data to column values
        rows.forEach(function (row) {
            str_1 += "(";
            row.forEach(function (cell) {
                if (typeof cell === "string") {
                    str_1 += "\"".concat(cell, "\",");
                }
                else {
                    str_1 += "".concat(cell, ",");
                }
            });
            // Remove trailing comma
            str_1 = str_1.trim().substring(0, str_1.length - 1);
            // end VALUES
            str_1 += "),";
        });
        // Remove trailing comma
        str_1 = str_1.trim().substring(0, str_1.length - 1);
        // Add trailing colon
        str_1 += ";";
        if (options.download) {
            str_1 = "data:application/sql;charset=utf-8,".concat(str_1);
        }
        // Download
        if (options.download) {
            // Create a link to trigger the download
            var link = document.createElement("a");
            link.href = encodeURI(str_1);
            link.download = "".concat(options.filename || "datatable_export", ".sql");
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str_1;
    }
    return false;
};

var exportTXT = function (dt, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    if (!dt.hasHeadings && !dt.hasRows)
        return false;
    var defaults = {
        download: true,
        skipColumn: [],
        lineDelimiter: "\n",
        columnDelimiter: ","
    };
    // Check for the options object
    if (!isObject(userOptions)) {
        return false;
    }
    var options = __assign(__assign({}, defaults), userOptions);
    var columnShown = function (index) { var _a; return !options.skipColumn.includes(index) && !((_a = dt.columns.settings.columns[index]) === null || _a === void 0 ? void 0 : _a.hidden); };
    var rows = [];
    var headers = dt.data.headings.filter(function (_heading, index) { return columnShown(index); }).map(function (header) { var _a; return (_a = header.text) !== null && _a !== void 0 ? _a : header.data; });
    // Include headings
    rows[0] = headers;
    // Selection or whole table
    if (options.selection) {
        // Page number
        if (Array.isArray(options.selection)) {
            // Array of page numbers
            for (var i = 0; i < options.selection.length; i++) {
                rows = rows.concat(dt.pages[options.selection[i] - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.data; }); }));
            }
        }
        else {
            rows = rows.concat(dt.pages[options.selection - 1].map(function (row) { return row.row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.data; }); }));
        }
    }
    else {
        rows = rows.concat(dt.data.data.map(function (row) { return row.filter(function (_cell, index) { return columnShown(index); }).map(function (cell) { return cell.data; }); }));
    }
    // Only proceed if we have data
    if (rows.length) {
        var str_1 = "";
        rows.forEach(function (row) {
            row.forEach(function (cell) {
                if (typeof cell === "string") {
                    cell = cell.trim();
                    cell = cell.replace(/\s{2,}/g, " ");
                    cell = cell.replace(/\n/g, "  ");
                    cell = cell.replace(/"/g, "\"\"");
                    //have to manually encode "#" as encodeURI leaves it as is.
                    cell = cell.replace(/#/g, "%23");
                    if (cell.includes(",")) {
                        cell = "\"".concat(cell, "\"");
                    }
                }
                str_1 += cell + options.columnDelimiter;
            });
            // Remove trailing column delimiter
            str_1 = str_1.trim().substring(0, str_1.length - 1);
            // Apply line delimiter
            str_1 += options.lineDelimiter;
        });
        // Remove trailing line delimiter
        str_1 = str_1.trim().substring(0, str_1.length - 1);
        if (options.download) {
            str_1 = "data:text/csv;charset=utf-8,".concat(str_1);
        }
        // Download
        if (options.download) {
            // Create a link to trigger the download
            var link = document.createElement("a");
            link.href = encodeURI(str_1);
            link.download = "".concat(options.filename || "datatable_export", ".txt");
            // Append the link
            document.body.appendChild(link);
            // Trigger the download
            link.click();
            // Remove the link
            document.body.removeChild(link);
        }
        return str_1;
    }
    return false;
};

var defaultConfig = {
    classes: {
        row: "datatable-editor-row",
        form: "datatable-editor-form",
        item: "datatable-editor-item",
        menu: "datatable-editor-menu",
        save: "datatable-editor-save",
        block: "datatable-editor-block",
        close: "datatable-editor-close",
        inner: "datatable-editor-inner",
        input: "datatable-editor-input",
        label: "datatable-editor-label",
        modal: "datatable-editor-modal",
        action: "datatable-editor-action",
        header: "datatable-editor-header",
        wrapper: "datatable-editor-wrapper",
        editable: "datatable-editor-editable",
        container: "datatable-editor-container",
        separator: "datatable-editor-separator"
    },
    labels: {
        editCell: "Edit Cell",
        editRow: "Edit Row",
        removeRow: "Remove Row",
        reallyRemove: "Are you sure?"
    },
    // include hidden columns in the editor
    hiddenColumns: false,
    // enable the context menu
    contextMenu: true,
    // event to start editing
    clickEvent: "dblclick",
    // indexes of columns not to be edited
    excludeColumns: [],
    // set the context menu items
    menuItems: [
        {
            text: function (editor) { return editor.options.labels.editCell; },
            action: function (editor, _event) {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                var cell = editor.event.target.closest("td");
                return editor.editCell(cell);
            }
        },
        {
            text: function (editor) { return editor.options.labels.editRow; },
            action: function (editor, _event) {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                var row = editor.event.target.closest("tr");
                return editor.editRow(row);
            }
        },
        {
            separator: true
        },
        {
            text: function (editor) { return editor.options.labels.removeRow; },
            action: function (editor, _event) {
                if (!(editor.event.target instanceof Element)) {
                    return;
                }
                if (confirm(editor.options.labels.reallyRemove)) {
                    var row = editor.event.target.closest("tr");
                    editor.removeRow(row);
                }
            }
        }
    ]
};

// Source: https://www.freecodecamp.org/news/javascript-debounce-example/
var debounce = function (func, timeout) {
    if (timeout === void 0) { timeout = 300; }
    var timer;
    return function () {
        clearTimeout(timer);
        timer = window.setTimeout(function () { return func(); }, timeout);
    };
};

/**
 * Main lib
 * @param {Object} dataTable Target dataTable
 * @param {Object} options User config
 */
var Editor = /** @class */ (function () {
    function Editor(dataTable, options) {
        if (options === void 0) { options = {}; }
        this.dt = dataTable;
        this.options = __assign(__assign({}, defaultConfig), options);
    }
    /**
     * Init instance
     * @return {Void}
     */
    Editor.prototype.init = function () {
        var _this = this;
        if (this.initialized) {
            return;
        }
        this.dt.wrapper.classList.add(this.options.classes.editable);
        if (this.options.contextMenu) {
            this.container = createElement("div", {
                id: this.options.classes.container
            });
            this.wrapper = createElement("div", {
                "class": this.options.classes.wrapper
            });
            this.menu = createElement("ul", {
                "class": this.options.classes.menu
            });
            if (this.options.menuItems && this.options.menuItems.length) {
                this.options.menuItems.forEach(function (item) {
                    var li = createElement("li", {
                        "class": item.separator ? _this.options.classes.separator : _this.options.classes.item
                    });
                    if (!item.separator) {
                        var a = createElement("a", {
                            "class": _this.options.classes.action,
                            href: item.url || "#",
                            html: typeof item.text === "function" ? item.text(_this) : item.text
                        });
                        li.appendChild(a);
                        if (item.action && typeof item.action === "function") {
                            a.addEventListener("click", function (event) {
                                event.preventDefault();
                                item.action(_this, event);
                            });
                        }
                    }
                    _this.menu.appendChild(li);
                });
            }
            this.wrapper.appendChild(this.menu);
            this.container.appendChild(this.wrapper);
            this.update();
        }
        this.data = {};
        this.closed = true;
        this.editing = false;
        this.editingRow = false;
        this.editingCell = false;
        this.bindEvents();
        setTimeout(function () {
            _this.initialized = true;
            _this.dt.emit("editable.init");
        }, 10);
    };
    /**
     * Bind events to DOM
     * @return {Void}
     */
    Editor.prototype.bindEvents = function () {
        var _this = this;
        this.events = {
            context: this.context.bind(this),
            update: this.update.bind(this),
            dismiss: this.dismiss.bind(this),
            keydown: this.keydown.bind(this),
            click: this.click.bind(this)
        };
        // listen for click / double-click
        this.dt.dom.addEventListener(this.options.clickEvent, this.events.click);
        // listen for click everywhere except the menu
        document.addEventListener("click", this.events.dismiss);
        // listen for right-click
        document.addEventListener("keydown", this.events.keydown);
        if (this.options.contextMenu) {
            // listen for right-click
            this.dt.dom.addEventListener("contextmenu", this.events.context);
            // reset
            this.events.reset = debounce(function () { return _this.events.update(); }, 50);
            window.addEventListener("resize", this.events.reset);
            window.addEventListener("scroll", this.events.reset);
        }
    };
    /**
     * contextmenu listener
     * @param  {Object} event Event
     * @return {Void}
     */
    Editor.prototype.context = function (event) {
        var target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        this.event = event;
        var cell = target.closest("tbody td");
        if (this.options.contextMenu && !this.disabled && cell) {
            event.preventDefault();
            // get the mouse position
            var x = event.pageX;
            var y = event.pageY;
            // check if we're near the right edge of window
            if (x > this.limits.x) {
                x -= this.rect.width;
            }
            // check if we're near the bottom edge of window
            if (y > this.limits.y) {
                y -= this.rect.height;
            }
            this.wrapper.style.top = "".concat(y, "px");
            this.wrapper.style.left = "".concat(x, "px");
            this.openMenu();
            this.update();
        }
    };
    /**
     * dblclick listener
     * @param  {Object} event Event
     * @return {Void}
     */
    Editor.prototype.click = function (event) {
        var target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        if (this.editing && this.data && this.editingCell) {
            this.saveCell(this.data.input.value);
        }
        else if (!this.editing) {
            var cell = target.closest("tbody td");
            if (cell) {
                this.editCell(cell);
                event.preventDefault();
            }
        }
    };
    /**
     * keydown listener
     * @param  {Object} event Event
     * @return {Void}
     */
    Editor.prototype.keydown = function (event) {
        if (this.modal) {
            if (event.key === "Escape") { // close button
                this.closeModal();
            }
            else if (event.key === "Enter") { // save button
                // Save
                this.saveRow(this.data.inputs.map(function (input) { return input.value.trim(); }), this.data.row);
            }
        }
        else if (this.editing && this.data) {
            if (event.key === "Enter") {
                // Enter key saves
                if (this.editingCell) {
                    this.saveCell(this.data.input.value);
                }
                else if (this.editingRow) {
                    this.saveRow(this.data.inputs.map(function (input) { return input.value.trim(); }), this.data.row);
                }
            }
            else if (event.key === "Escape") {
                // Escape key reverts
                this.saveCell(this.data.content);
            }
        }
    };
    /**
     * Edit cell
     * @param  {Object} td    The HTMLTableCellElement
     * @return {Void}
     */
    Editor.prototype.editCell = function (td) {
        var _this = this;
        var columnIndex = visibleToColumnIndex(td.cellIndex, this.dt.columns.settings.columns);
        if (this.options.excludeColumns.includes(columnIndex)) {
            this.closeMenu();
            return;
        }
        var rowIndex = parseInt(td.parentElement.dataset.index, 10);
        var row = this.dt.data.data[rowIndex];
        var cell = row[columnIndex];
        this.data = {
            cell: cell,
            rowIndex: rowIndex,
            columnIndex: columnIndex,
            content: cell.text || String(cell.data)
        };
        var label = this.dt.data.headings[columnIndex].text || String(this.dt.data.headings[columnIndex].data);
        var template = [
            "<div class='".concat(this.options.classes.inner, "'>"),
            "<div class='".concat(this.options.classes.header, "'>"),
            "<h4>Editing cell</h4>",
            "<button class='".concat(this.options.classes.close, "' type='button' data-editor-close>\u00D7</button>"),
            " </div>",
            "<div class='".concat(this.options.classes.block, "'>"),
            "<form class='".concat(this.options.classes.form, "'>"),
            "<div class='".concat(this.options.classes.row, "'>"),
            "<label class='".concat(this.options.classes.label, "'>").concat(escapeText(label), "</label>"),
            "<input class='".concat(this.options.classes.input, "' value='").concat(escapeText(cell.text || String(cell.data) || ""), "' type='text'>"),
            "</div>",
            "<div class='".concat(this.options.classes.row, "'>"),
            "<button class='".concat(this.options.classes.save, "' type='button' data-editor-save>Save</button>"),
            "</div>",
            "</form>",
            "</div>",
            "</div>"
        ].join("");
        var modal = createElement("div", {
            "class": this.options.classes.modal,
            html: template
        });
        this.modal = modal;
        this.openModal();
        this.editing = true;
        this.editingCell = true;
        this.data.input = modal.querySelector("input[type=text]");
        this.data.input.focus();
        this.data.input.selectionStart = this.data.input.selectionEnd = this.data.input.value.length;
        // Close / save
        modal.addEventListener("click", function (event) {
            var target = event.target;
            if (!(target instanceof Element)) {
                return;
            }
            if (target.hasAttribute("data-editor-close")) { // close button
                _this.closeModal();
            }
            else if (target.hasAttribute("data-editor-save")) { // save button
                // Save
                _this.saveCell(_this.data.input.value);
            }
        });
        this.closeMenu();
    };
    /**
     * Save edited cell
     * @param  {Object} row    The HTMLTableCellElement
     * @param  {String} value   Cell content
     * @return {Void}
     */
    Editor.prototype.saveCell = function (value) {
        var oldData = this.data.content;
        // Set the cell content
        this.dt.data.data[this.data.rowIndex][this.data.columnIndex] = { data: value.trim() };
        this.closeModal();
        this.dt.update(true);
        this.dt.emit("editable.save.cell", value, oldData, this.data.rowIndex, this.data.columnIndex);
        this.data = {};
    };
    /**
     * Edit row
     * @param  {Object} row    The HTMLTableRowElement
     * @return {Void}
     */
    Editor.prototype.editRow = function (tr) {
        var _this = this;
        var _a;
        if (!tr || tr.nodeName !== "TR" || this.editing)
            return;
        var rowIndex = parseInt(tr.dataset.index, 10);
        var row = this.dt.data.data[rowIndex];
        var template = [
            "<div class='".concat(this.options.classes.inner, "'>"),
            "<div class='".concat(this.options.classes.header, "'>"),
            "<h4>Editing row</h4>",
            "<button class='".concat(this.options.classes.close, "' type='button' data-editor-close>\u00D7</button>"),
            " </div>",
            "<div class='".concat(this.options.classes.block, "'>"),
            "<form class='".concat(this.options.classes.form, "'>"),
            "<div class='".concat(this.options.classes.row, "'>"),
            "<button class='".concat(this.options.classes.save, "' type='button' data-editor-save>Save</button>"),
            "</div>",
            "</form>",
            "</div>",
            "</div>"
        ].join("");
        var modal = createElement("div", {
            "class": this.options.classes.modal,
            html: template
        });
        var inner = modal.firstElementChild;
        if (!inner) {
            return;
        }
        var form = (_a = inner.lastElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild;
        if (!form) {
            return;
        }
        // Add the inputs for each cell
        row.forEach(function (cell, i) {
            var columnSettings = _this.dt.columns.settings.columns[i] || {};
            if ((!columnSettings.hidden || (columnSettings.hidden && _this.options.hiddenColumns)) && !_this.options.excludeColumns.includes(i)) {
                var label = _this.dt.data.headings[i].text || String(_this.dt.data.headings[i].data);
                form.insertBefore(createElement("div", {
                    "class": _this.options.classes.row,
                    html: [
                        "<div class='".concat(_this.options.classes.row, "'>"),
                        "<label class='".concat(_this.options.classes.label, "'>").concat(escapeText(label), "</label>"),
                        "<input class='".concat(_this.options.classes.input, "' value='").concat(escapeText(cell.text || String(cell.data) || ""), "' type='text'>"),
                        "</div>"
                    ].join("")
                }), form.lastElementChild);
            }
        });
        this.modal = modal;
        this.openModal();
        // Grab the inputs
        var inputs = Array.from(form.querySelectorAll("input[type=text]"));
        // Remove save button
        inputs.pop();
        this.data = {
            row: row,
            inputs: inputs,
            rowIndex: rowIndex
        };
        this.editing = true;
        this.editingRow = true;
        // Close / save
        modal.addEventListener("click", function (event) {
            var target = event.target;
            if (!(target instanceof Element)) {
                return;
            }
            if (target.hasAttribute("data-editor-close")) { // close button
                _this.closeModal();
            }
            else if (target.hasAttribute("data-editor-save")) { // save button
                // Save
                _this.saveRow(_this.data.inputs.map(function (input) { return input.value.trim(); }), _this.data.row);
            }
        });
        this.closeMenu();
    };
    /**
     * Save edited row
     * @param  {Object} row    The HTMLTableRowElement
     * @param  {Array} data   Cell data
     * @return {Void}
     */
    Editor.prototype.saveRow = function (data, row) {
        // Store the old data for the emitter
        var oldData = row.map(function (cell) { var _a; return (_a = cell.text) !== null && _a !== void 0 ? _a : String(cell.data); });
        this.dt.data.data[this.data.rowIndex] = data.map(function (str) { return ({ data: str }); });
        this.dt.update(true);
        this.data = {};
        this.closeModal();
        this.dt.emit("editable.save.row", data, oldData, row);
    };
    /**
     * Open the row editor modal
     * @return {Void}
     */
    Editor.prototype.openModal = function () {
        if (!this.editing && this.modal) {
            document.body.appendChild(this.modal);
        }
    };
    /**
     * Close the row editor modal
     * @return {Void}
     */
    Editor.prototype.closeModal = function () {
        if (this.editing && this.modal) {
            document.body.removeChild(this.modal);
            this.modal = this.editing = this.editingRow = this.editingCell = false;
        }
    };
    /**
     * Remove a row
     * @param  {Object} tr The HTMLTableRowElement
     * @return {Void}
     */
    Editor.prototype.removeRow = function (tr) {
        if (!tr || tr.nodeName !== "TR" || this.editing)
            return;
        var index = parseInt(tr.dataset.index, 10);
        this.dt.rows.remove(index);
        this.closeMenu();
    };
    /**
     * Update context menu position
     * @return {Void}
     */
    Editor.prototype.update = function () {
        var scrollX = window.scrollX || window.pageXOffset;
        var scrollY = window.scrollY || window.pageYOffset;
        this.rect = this.wrapper.getBoundingClientRect();
        this.limits = {
            x: window.innerWidth + scrollX - this.rect.width,
            y: window.innerHeight + scrollY - this.rect.height
        };
    };
    /**
     * Dismiss the context menu
     * @param  {Object} event Event
     * @return {Void}
     */
    Editor.prototype.dismiss = function (event) {
        var target = event.target;
        if (!(target instanceof Element)) {
            return;
        }
        var valid = true;
        if (this.options.contextMenu) {
            valid = !this.wrapper.contains(target);
            if (this.editing) {
                valid = !this.wrapper.contains(target) && target !== this.data.input;
            }
        }
        if (valid) {
            if (this.editingCell) {
                // Revert
                this.saveCell(this.data.content);
            }
            this.closeMenu();
        }
    };
    /**
     * Open the context menu
     * @return {Void}
     */
    Editor.prototype.openMenu = function () {
        if (this.editing && this.data && this.editingCell) {
            this.saveCell(this.data.input.value);
        }
        if (this.options.contextMenu) {
            document.body.appendChild(this.container);
            this.closed = false;
            this.dt.emit("editable.context.open");
        }
    };
    /**
     * Close the context menu
     * @return {Void}
     */
    Editor.prototype.closeMenu = function () {
        if (this.options.contextMenu && !this.closed) {
            this.closed = true;
            document.body.removeChild(this.container);
            this.dt.emit("editable.context.close");
        }
    };
    /**
     * Destroy the instance
     * @return {Void}
     */
    Editor.prototype.destroy = function () {
        this.dt.dom.removeEventListener(this.options.clickEvent, this.events.click);
        this.dt.dom.removeEventListener("contextmenu", this.events.context);
        document.removeEventListener("click", this.events.dismiss);
        document.removeEventListener("keydown", this.events.keydown);
        window.removeEventListener("resize", this.events.reset);
        window.removeEventListener("scroll", this.events.reset);
        if (document.body.contains(this.container)) {
            document.body.removeChild(this.container);
        }
        this.initialized = false;
    };
    return Editor;
}());
var makeEditable = function (dataTable, options) {
    if (options === void 0) { options = {}; }
    var editor = new Editor(dataTable, options);
    if (dataTable.initialized) {
        editor.init();
    }
    else {
        dataTable.on("datatable.init", function () { return editor.init(); });
    }
    return editor;
};

export { DataTable, convertCSV, convertJSON, createElement, exportCSV, exportJSON, exportSQL, exportTXT, isJson, isObject, makeEditable };
//# sourceMappingURL=module.js.map
