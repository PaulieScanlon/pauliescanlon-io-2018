module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./src/components/loading/index.tsx

var loading_Loading = function Loading() {
  return external__react_["createElement"]("div", null, "Loading...");
};
// CONCATENATED MODULE: ./src/components/error/index.tsx

var error_Error = function Error() {
  return external__react_["createElement"]("div", null, "Error :-(");
};
// CONCATENATED MODULE: ./src/utils/fetch.ts
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var goFetch = {
  users: function users() {
    return triggerFetch({
      endPoint: 'users/1'
    });
  },
  posts: function posts() {
    return triggerFetch({
      endPoint: 'posts',
      params: {
        include: 'tags'
      }
    });
  },
  tags: function tags() {
    return triggerFetch({
      endPoint: 'tags',
      params: {
        include: 'count.posts'
      }
    });
  },
  sections: function sections() {
    return triggerFetch({
      endPoint: 'posts',
      params: {
        filter: 'page:true',
        order: 'title dsc'
      }
    });
  }
};

var triggerFetch = function triggerFetch(_ref) {
  var endPoint = _ref.endPoint,
      params = _ref.params;
  return fetch(window['ghost'].url.api("".concat(endPoint), _objectSpread({}, params))).then(function (res) {
    return res.json();
  }).then(function (data) {
    // console.log('data: ', data);
    return {
      isLoading: false,
      data: data,
      hasErrored: false,
      url: window['ghost'].url.api()
    };
  }).catch(function () {
    // console.log('error: ', error);
    return {
      isLoading: false,
      data: null,
      hasErrored: true
    };
  });
};
// CONCATENATED MODULE: ./src/containers/fetcher/index.tsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var fetcher_Fetcher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Fetcher, _React$Component);

  function Fetcher(props) {
    var _this;

    _classCallCheck(this, Fetcher);

    _this = _possibleConstructorReturn(this, (Fetcher.__proto__ || Object.getPrototypeOf(Fetcher)).call(this, props));
    _this.state = {
      isLoading: true,
      data: null,
      hasErrored: false,
      path: ''
    };
    return _this;
  }

  _createClass(Fetcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userFetch = goFetch[this.props.endPoint]();
      userFetch.then(function (res) {
        _this2.setState({
          isLoading: res.isLoading,
          data: res.data ? res.data[_this2.props.endPoint] : null,
          hasErrored: res.hasErrored
        }, function () {
          _this2.setPath(res.url);
        });
      });
    }
  }, {
    key: "setPath",
    value: function setPath(url) {
      var pathname = url.split('/');
      this.setState({
        path: "http://".concat(pathname[2])
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data,
          hasErrored = _state.hasErrored,
          path = _state.path;
      var renderComponent = this.props.renderComponent;

      if (isLoading) {
        return external__react_["createElement"](loading_Loading, null);
      }

      return hasErrored ? external__react_["createElement"](error_Error, null) : renderComponent(path, data);
    }
  }]);

  return Fetcher;
}(external__react_["Component"]);
// CONCATENATED MODULE: ./src/components/user/index.tsx

var user_User = function User(_ref) {
  var path = _ref.path,
      data = _ref.data;
  var _data$ = data[0],
      bio = _data$.bio,
      cover_image = _data$.cover_image,
      name = _data$.name,
      profile_image = _data$.profile_image;
  return external__react_["createElement"]("div", null, external__react_["createElement"]("p", null, bio), external__react_["createElement"]("img", {
    style: {
      width: 100
    },
    src: "".concat(path).concat(cover_image)
  }), external__react_["createElement"]("p", null, name), external__react_["createElement"]("img", {
    style: {
      width: 50
    },
    src: "".concat(path).concat(profile_image)
  }));
};
// CONCATENATED MODULE: ./pages/index.tsx




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement("div", null, "Hello World.", ' ', external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("a", null, "About")), external__react__default.a.createElement(fetcher_Fetcher, {
    endPoint: "users",
    renderComponent: function renderComponent(path, data) {
      return external__react__default.a.createElement(user_User, {
        path: path,
        data: data
      });
    }
  }));
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ })
/******/ ]);