var env = typeof process !== 'undefined' && process.env.NODE_ENV;
var isWindows = typeof process !== 'undefined' && 'win32' === process.platform;
var isDevelopment = !env || env === 'dev' || env === 'development';
var logger = typeof console !== 'undefined' && console.warn && console;
var cwd = typeof process !== 'undefined' && process.cwd() + '/' || '';
var linebreak = isWindows ? '\r\n' : '\n';
var newline = /(\r\n|\r|\n)/g;
var slice = [].slice;
var hits = {};

complain = isDevelopment ? complain : noop;
complain.method = isDevelopment ? method : noop;
complain.fn = isDevelopment ? fn : noopReturn;
complain.log = log;
complain.stream = typeof process !== 'undefined' && process.stderr;
complain.silence = false;
complain.color = complain.stream && complain.stream.isTTY;
complain.colors = { warning:'\x1b[31;1m', message:false, location:'\u001b[90m' };

if(typeof module !== 'undefined' && module.exports) {
  module.exports = complain;
} else if(typeof window !== 'undefined') {
  window.complain = complain;
}

function complain() {
  var options;
  var location;
  var getCallToDeprecate;
  var args = arguments;

  if(complain.silence) return;

  if(typeof args[args.length-1] === 'object') {
    options = args[args.length-1];
    args = slice.call(args, 0, -1);
  } else {
    options = {};
  }

  if(options.location === false) {
    // When the user explictly sets location to false,
    // We will get the location of the call to complain()
    // is called, instead of the location of the call to the
    // deprecated function.
    getCallToDeprecate = true;
  }

  location = options.location || getLocation(getCallToDeprecate);

  if(hits[location || complain.caller]) return;
  else hits[location || complain.caller] = true;

  var output = format('WARNING!!', complain.colors.warning);

  for(var i = 0; i < args.length; i++) {
    output += linebreak + format(args[i], complain.colors.message);
  }

  if(options.location !== false && location) {
    output += linebreak + format('  at '+location.replace(cwd, ''), complain.colors.location);
  }

  complain.log(linebreak + output + linebreak);
};

function method(object, methodName) {
    var originalMethod = object[methodName];
    var args = slice.call(arguments, 2);

    object[methodName] = function() {
        complain.apply(null, args);
        return originalMethod.apply(this, arguments);
    };
}

function fn(original) {
  var args = slice.call(arguments, 1);

  return function() {
    complain.apply(null, args);
    return original.apply(this, arguments);
  }
}

function log(message, color) {
  var formatted = format(message, color);
  if(complain.stream) {
    complain.stream.write(formatted+linebreak);
  } else if(logger) {
    logger.warn(formatted);
  }
}

function format(message, color) {
  return color && complain.color ? color + message + '\x1b[0m' : message;
}

function getLocation(getCallToDeprecate) {
  var stack;
  var frame;
  var location = '';
  var index = getCallToDeprecate ? 3 : 4;

  /*
    0: In getRawStack(), the call to new Error()
    1: In getLocation(), the call to getRawStack()
    2: In complain(), the call to getLocation()
    3: In the deprecated function, the call to complain()
    4: The call to the deprecated function (THIS IS THE DEFAULT)
  */

  try {
    stack = getRawStack();
    frame = stack[index] || stack[3];
    location = frame.getFileName()+':'+frame.getLineNumber()+':'+frame.getColumnNumber();
  } catch(e) {}

  return location;
}

function getRawStack() {
  var stack;
  var restore = patch(Error, 'prepareStackTrace', returnStack);
  stack = new Error().stack;
  restore();
  return stack;
}

function patch(object, method, replacement) {
  var original = object[method];
  object[method] = replacement;
  return function restore() {
    object[method] = original;
  }
}

function returnStack(_, stack) {
  return stack;
}

function noop(){};
function noopReturn(r) { return r; };
