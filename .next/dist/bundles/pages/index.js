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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_containers_fetcher__ = __webpack_require__("./src/containers/fetcher/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_user__ = __webpack_require__("./src/components/user/index.tsx");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/pages/index.tsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_containers_fetcher__["a" /* Fetcher */], {
    endPoint: "users",
    renderComponent: function renderComponent(data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_user__["a" /* User */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});

/***/ }),

/***/ "./src/components/error/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/error/index.tsx";

var Error = function Error() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Error :-(");
};

/***/ }),

/***/ "./src/components/loading/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/loading/index.tsx";

var Loading = function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, "Loading...");
};

/***/ }),

/***/ "./src/components/user/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/components/user/styles.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/user/index.tsx";


var User = function User(props) {
  var _props$ = props[0],
      bio = _props$.bio,
      cover_image = _props$.cover_image,
      name = _props$.name,
      profile_image = _props$.profile_image;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* UserWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, bio), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Test"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 100
    },
    src: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(cover_image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 50
    },
    src: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(profile_image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }));
};

/***/ }),

/***/ "./src/components/user/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);

var UserWrapper = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  label: 'user-wrapper'
});

/***/ }),

/***/ "./src/containers/fetcher/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fetcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loading__ = __webpack_require__("./src/components/loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_error__ = __webpack_require__("./src/components/error/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_fetch__ = __webpack_require__("./src/utils/fetch.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/containers/fetcher/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Fetcher =
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
      hasErrored: false
    };
    return _this;
  }

  _createClass(Fetcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userFetch = __WEBPACK_IMPORTED_MODULE_3__utils_fetch__["a" /* goFetch */][this.props.endPoint]();
      userFetch.then(function (res) {
        _this2.setState({
          isLoading: res.isLoading,
          data: res.data ? res.data[_this2.props.endPoint] : null,
          hasErrored: res.hasErrored
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          data = _state.data,
          hasErrored = _state.hasErrored;
      var renderComponent = this.props.renderComponent;

      if (isLoading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components_loading__["a" /* Loading */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      }

      return hasErrored ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_error__["a" /* Error */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }) : renderComponent(data);
    }
  }]);

  return Fetcher;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./src/utils/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return goFetch; });
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
    console.log('data: ', data);
    return {
      isLoading: false,
      data: data,
      hasErrored: false
    };
  }).catch(function () {
    return {
      isLoading: false,
      data: null,
      hasErrored: true
    };
  });
};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map