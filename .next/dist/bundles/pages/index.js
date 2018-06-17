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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_index__ = __webpack_require__("./src/index.tsx");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/pages/index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["a" /* App */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
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

/***/ "./src/components/post/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/components/post/styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_post_card__ = __webpack_require__("./src/components/ui/post-card/index.tsx");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/post/index.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Post = function Post(props) {
  var posts = Object.values(props).map(function (post, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__ui_post_card__["a" /* PostCard */], _extends({
      key: i
    }, post, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }));
  });
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* PostWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, posts);
};

/***/ }),

/***/ "./src/components/post/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);

var PostWrapper = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  label: 'post-wrapper'
});

/***/ }),

/***/ "./src/components/ui/post-card/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./src/components/ui/post-card/styles.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/components/ui/post-card/index.tsx";


var PostCard = function PostCard(postData) {
  var title = postData.title;
  return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* CardWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, title));
};

/***/ }),

/***/ "./src/components/ui/post-card/styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);

var CardWrapper = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  label: 'card-wrapper'
});

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
  // export const User: React.SFC<IUserData> = props => {
  var bio = props.bio,
      coverImage = props.coverImage,
      name = props.name,
      profileImage = props.profileImage;
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
      lineNumber: 14
    }
  }, "Test"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 100
    },
    src: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(coverImage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", {
    style: {
      width: 50
    },
    src: "".concat(process && process.env && process.env.GHOST_CMS || "http://138.68.162.135").concat(profileImage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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

      var dataFetch = __WEBPACK_IMPORTED_MODULE_3__utils_fetch__["a" /* fetchType */][this.props.endPoint]();
      dataFetch.then(function (res) {
        _this2.setState({
          isLoading: res.isLoading,
          data: res.data ? _this2.props.dataHandler(res.data[_this2.props.endPoint]) : null,
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
            lineNumber: 43
          }
        });
      }

      return hasErrored ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_error__["a" /* Error */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }) : renderComponent(data);
    }
  }]);

  return Fetcher;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ "./src/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_fetcher__ = __webpack_require__("./src/containers/fetcher/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user__ = __webpack_require__("./src/components/user/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post__ = __webpack_require__("./src/components/post/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_api_handlers__ = __webpack_require__("./src/utils/api-handlers.ts");
var _jsxFileName = "/Users/superMacBook4/Desktop/_development/pauliescanlon-io-2018/src/index.tsx";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_fetcher__["a" /* Fetcher */], {
    endPoint: "users",
    dataHandler: __WEBPACK_IMPORTED_MODULE_5__utils_api_handlers__["b" /* usersHandler */],
    renderComponent: function renderComponent(data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_user__["a" /* User */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_fetcher__["a" /* Fetcher */], {
    endPoint: "posts",
    dataHandler: __WEBPACK_IMPORTED_MODULE_5__utils_api_handlers__["a" /* postsHandler */],
    renderComponent: function renderComponent(data) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_post__["a" /* Post */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};

/***/ }),

/***/ "./src/utils/api-handlers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usersHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsHandler; });
var mapTags = function mapTags(tags) {
  var tagNames = tags.map(function (tag) {
    return tag.name;
  });
  return tagNames;
};

var usersHandler = function usersHandler(data) {
  var userData = {
    bio: data[0].bio,
    coverImage: data[0].cover_image,
    //TODO return with process.env.GHOST_CMS
    name: data[0].name,
    profileImage: data[0].profile_image //TODO return with process.env.GHOST_CMS

  };
  return userData;
};
var postsHandler = function postsHandler(data) {
  var posts = data.map(function (data) {
    return {
      customExcerpt: data.custom_excerpt,
      featureImage: data.feature_image,
      //TODO return with process.env.GHOST_CMS
      featured: data.featured,
      html: data.html,
      id: data.id,
      publishedAt: data.published_at,
      slug: data.slug,
      tags: mapTags(data.tags),
      title: data.title,
      url: data.url //TODO return with process.env.GHOST_CMS ?

    };
  });
  return posts;
};

/***/ }),

/***/ "./src/utils/fetch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchType; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchType = {
  //these are the endPoint 'props' for Fetcher
  users: function users() {
    return goFetch({
      endPoint: 'users/1'
    });
  },
  posts: function posts() {
    return goFetch({
      endPoint: 'posts',
      params: {
        include: 'tags'
      }
    });
  },
  tags: function tags() {
    return goFetch({
      endPoint: 'tags',
      params: {
        include: 'count.posts'
      }
    });
  },
  sections: function sections() {
    return goFetch({
      endPoint: 'posts',
      params: {
        filter: 'page:true',
        order: 'title dsc'
      }
    });
  }
};

var goFetch = function goFetch(_ref) {
  var endPoint = _ref.endPoint,
      params = _ref.params;
  return fetch(window['ghost'].url.api("".concat(endPoint), _objectSpread({}, params))).then(function (res) {
    return res.json();
  }).then(function (data) {
    // console.log('data: ', data);
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

/***/ 3:
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