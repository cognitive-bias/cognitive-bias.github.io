(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["cognitive"] = factory(require("react"), require("react-dom"));
	else
		root["cognitive"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _styles = __webpack_require__(1);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var Block = __webpack_require__(4);
	var NotificationSystem = __webpack_require__(10);
	var SwitchButton = __webpack_require__(16);

	//let { flexible } = styles;
	var wrap = _styles2.default.wrap;
	var toplevel = _styles2.default.toplevel;
	var secondlevel = _styles2.default.secondlevel;
	var objblock = _styles2.default.objblock;


	var data = null;

	var locale = "Ru";

	function lattr(obj, attr, locale) {
	    return obj[attr + locale];
	}

	var _topLevelEntryList = null;

	var TopLevelEntryList = React.createClass({
	    displayName: 'TopLevelEntryList',

	    componentDidMount: function componentDidMount() {
	        _topLevelEntryList = this;
	    },
	    render: function render() {
	        var elist = this.props.node.children.map(function (e) {
	            var name = lattr(e, "name", locale);
	            if (e.label != "todo") {
	                return React.createElement(TopLevelEntry, { node: e, key: name.replace(/ /g, "") });
	            }
	        });
	        return React.createElement(
	            Block,
	            null,
	            React.createElement(NotificationSystem, { ref: 'notificationSystem' }),
	            React.createElement(
	                Block,
	                { style: wrap.block },
	                elist
	            )
	        );
	    }
	});

	var TopLevelEntry = React.createClass({
	    displayName: 'TopLevelEntry',

	    render: function render() {
	        var node = this.props.node;
	        var name = lattr(node, "name", locale);
	        var elist = node.children.map(function (e) {
	            var name = lattr(e, "name", locale);
	            if (name != undefined) {
	                return React.createElement(SecondLevelEntryList, { node: e, key: name.replace(/ /g, "") });
	            }
	        });
	        return React.createElement(
	            Block,
	            { style: toplevel.entry },
	            React.createElement(
	                Block,
	                { style: toplevel.header },
	                name
	            ),
	            elist
	        );
	    }
	});

	var SecondLevelEntryList = React.createClass({
	    displayName: 'SecondLevelEntryList',

	    render: function render() {
	        var tname;
	        var node = this.props.node;
	        var elist = node.children.map(function (e) {
	            var n = lattr(e, "name", locale);
	            if (Array.isArray(n)) {
	                var iad = n[0].replace(/ /g, "");
	            } else {
	                var iad = n.replace(/ /g, "");
	            }
	            return React.createElement(SecondLevelEntry, { node: e, key: iad });
	        });
	        var name = lattr(node, "name", locale);
	        if (Array.isArray(name)) {
	            tname = name[0];
	        } else {
	            tname = name;
	        }
	        return React.createElement(
	            Block,
	            { style: secondlevel.entry },
	            React.createElement(
	                Block,
	                { style: secondlevel.header },
	                tname
	            ),
	            elist
	        );
	    }
	});

	var WikiLink = React.createClass({
	    displayName: 'WikiLink',

	    render: function render() {
	        return React.createElement(
	            Block,
	            { style: { padding: 5 } },
	            React.createElement(
	                'a',
	                { href: this.props.href },
	                this.props.href
	            )
	        );
	    }
	});

	var SecondLevelEntry = React.createClass({
	    displayName: 'SecondLevelEntry',

	    _notificationSystem: null,
	    handleClick: function handleClick() {
	        this._notificationSystem = _topLevelEntryList.refs.notificationSystem;
	        var wiki = lattr(this.props.node, "wiki", locale);
	        this._notificationSystem.addNotification({
	            message: lattr(this.props.node, "desc", locale),
	            title: lattr(this.props.node, "name", locale),
	            children: React.createElement(WikiLink, { href: wiki }),
	            level: 'success'
	        });
	    },
	    render: function render() {
	        var node = this.props.node;
	        var name = lattr(node, "name", locale);
	        var tname;
	        if (Array.isArray(name)) {
	            tname = name[0];
	        } else {
	            tname = name;
	        }
	        return React.createElement(
	            Block,
	            { style: objblock, onClick: this.handleClick },
	            tname
	        );
	    }
	});

	var RootComponent = React.createClass({
	    displayName: 'RootComponent',

	    locale: locale,
	    switchLocale: function switchLocale() {
	        if (this.locale == 'Ru') {
	            this.locale = 'En';
	        } else {
	            this.locale = 'Ru';
	        }
	        locale = this.locale;
	        this.setState({ 'locale': locale });
	    },
	    render: function render() {
	        return React.createElement(
	            Block,
	            null,
	            React.createElement(SwitchButton, { onChange: this.switchLocale, label: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439', labelRight: 'English' }),
	            React.createElement(TopLevelEntryList, { node: data })
	        );
	    }
	});

	axios.get('data/cognitive-bias-cheat-sheet-ru.json').then(function (response) {
	    //var resp =  <TopLevelEntryList node={response.data} />
	    data = response.data;
	    var state = false;
	    if (locale == "En") {
	        state = true;
	    }
	    ReactDOM.render(React.createElement(RootComponent, null), document.getElementById("root"));
	}).catch(function (error) {
	    console.log(error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  app: {
	    block: {
	      margin: '0 auto',
	      padding: 20,
	      md: {
	        //width: 600
	      },
	      lg: {
	        //width: 800
	      }
	    }
	  },

	  header: {
	    block: {
	      marginBottom: 40
	    },
	    h1: {
	      fontSize: 32,
	      textAlign: 'center',
	      md: {
	        color: 'red'
	      }
	    },
	    small: {
	      fontSize: 20,
	      fontWeight: 200,
	      md: {
	        fontSize: 28
	      },
	      lg: {
	        fontSize: 28
	      }
	    }
	  },

	  footer: {
	    block: {
	      marginTop: 40,
	      marginBottom: 40
	    },
	    p: {
	      margin: '0 auto',
	      flexBasis: '100%',
	      textAlign: 'center',
	      fontSize: 12
	    }
	  },

	  wrap: {
	    block: {
	      //width: 200,
	      //marginLeft: 'auto',
	      //marginRight: 'auto'
	    }
	  },

	  aligned: {
	    block: {
	      //height: 120
	    }
	  },

	  flexible: {
	    block: {
	      //height: 250
	    }
	  },

	  centered: {
	    block: {
	      //height: 200
	    }
	  },

	  nested: {
	    transparent: {
	      margin: 0,
	      padding: 0,
	      background: 'transparent'
	    },

	    common: {
	      margin: 4,
	      padding: 12,
	      background: 'white'
	    },

	    sidebar: {
	      //maxWidth: 200,
	      //flexBasis: 200
	    },

	    search: {
	      //width: 200
	    },

	    widget: {
	      //height: 100
	    }
	  },
	  toplevel: {
	    header: {
	      padding: 10,
	      textAlign: 'center'
	    },
	    entry: {
	      backgroundColor: '#F6F6F6',
	      borderWidth: 1,
	      borderStyle: 'solid',
	      botderColor: 'black',
	      padding: 10,
	      margin: 15,
	      borderRadius: 1,
	      fontFamily: 'Arvo'
	    }
	  },
	  secondlevel: {
	    entry: {
	      backgroundColor: '#D0D0D0',
	      overflow: 'hidden',
	      borderWidth: 1,
	      borderStyle: 'solid',
	      botderColor: 'black',
	      padding: 10,
	      margin: 15,
	      borderRadius: 4,
	      flex: 0.8,
	      flexDirection: 'row'
	    },
	    header: {
	      padding: 15,
	      textAlign: 'center'
	    }
	  },
	  objblock: {
	    backgroundColor: '#D0D0F0',
	    borderRadius: 3,
	    margin: 5,
	    padding: 20,
	    borderWidth: 1,
	    borderStyle: 'solid',
	    botderColor: 'black',
	    textAlign: 'center',
	    width: 160,
	    height: 80,
	    float: 'left'
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _block = __webpack_require__(5);

	var _block2 = _interopRequireDefault(_block);

	var _decorate = __webpack_require__(6);

	var _decorate2 = _interopRequireDefault(_decorate);

	exports['default'] = (0, _decorate2['default'])(_block2['default']);
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Block = function (_Component) {
	  _inherits(Block, _Component);

	  function Block(props, context) {
	    _classCallCheck(this, Block);

	    _get(Object.getPrototypeOf(Block.prototype), 'constructor', this).call(this, props, context);
	  }

	  _createClass(Block, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var node = props.el || 'div';
	      return _react2['default'].createElement(node, props);
	    }
	  }]);

	  return Block;
	}(_react.Component);

	;

	Block.PropTypes = {
	  el: _react2['default'].PropTypes.string,
	  block: _react2['default'].PropTypes.bool,
	  hidden: _react2['default'].PropTypes.bool,
	  invisible: _react2['default'].PropTypes.bool,
	  relative: _react2['default'].PropTypes.bool,
	  absolute: _react2['default'].PropTypes.bool,
	  layout: _react2['default'].PropTypes.bool,
	  inline: _react2['default'].PropTypes.bool,
	  flex: _react2['default'].PropTypes.bool,
	  vertical: _react2['default'].PropTypes.bool,
	  horizontal: _react2['default'].PropTypes.bool,
	  reverse: _react2['default'].PropTypes.bool,
	  start: _react2['default'].PropTypes.bool,
	  center: _react2['default'].PropTypes.bool,
	  end: _react2['default'].PropTypes.bool,
	  stretch: _react2['default'].PropTypes.bool,
	  centered: _react2['default'].PropTypes.bool,
	  selfStart: _react2['default'].PropTypes.bool,
	  selfCenter: _react2['default'].PropTypes.bool,
	  selfEnd: _react2['default'].PropTypes.bool,
	  selfStretch: _react2['default'].PropTypes.bool,
	  justifyStart: _react2['default'].PropTypes.bool,
	  justifyCenter: _react2['default'].PropTypes.bool,
	  justifyEnd: _react2['default'].PropTypes.bool,
	  justifyBetween: _react2['default'].PropTypes.bool,
	  justifyAround: _react2['default'].PropTypes.bool
	};

	exports['default'] = Block;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _compose = __webpack_require__(7);

	var _compose2 = _interopRequireDefault(_compose);

	exports['default'] = function (Component) {
	  var ComposedBlock = function (_Component) {
	    _inherits(ComposedBlock, _Component);

	    function ComposedBlock() {
	      _classCallCheck(this, ComposedBlock);

	      _get(Object.getPrototypeOf(ComposedBlock.prototype), 'constructor', this).call(this);
	      this.state = {
	        _media: {}
	      };
	      this.state = this.state || {};
	    }

	    _createClass(ComposedBlock, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        if (_get(Object.getPrototypeOf(ComposedBlock.prototype), 'componentDidMount', this)) {
	          _get(Object.getPrototypeOf(ComposedBlock.prototype), 'componentDidMount', this).call(this);
	        }
	      }
	    }, {
	      key: 'componentWillUpdate',
	      value: function componentWillUpdate(nextProps, nextState) {
	        return nextState._media !== this.state._media;
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        var _this = this;

	        if (_get(Object.getPrototypeOf(ComposedBlock.prototype), 'componentWillUnmount', this)) {
	          _get(Object.getPrototypeOf(ComposedBlock.prototype), 'componentWillUnmount', this).call(this);
	        }

	        if (this._mediaQueryListenersByQuery) {
	          Object.keys(this._mediaQueryListenersByQuery).forEach(function (query) {
	            _this._mediaQueryListenersByQuery[query].remove();
	          }, this);
	        }
	      }

	      // TODO: Think about composing this way.
	    }, {
	      key: 'render',
	      value: function render() {
	        return (0, _compose2['default'])(this, _get(Object.getPrototypeOf(ComposedBlock.prototype), 'render', this).call(this));
	      }
	    }]);

	    return ComposedBlock;
	  }(Component);

	  return ComposedBlock;
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Compose;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _objectAssign = __webpack_require__(8);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _layout = __webpack_require__(9);

	var _layout2 = _interopRequireDefault(_layout);

	var _mediaQueryListByQueryString = {};
	var _predefinedMediaQueryString = {
	  xs: 'screen and (min-width: 480px)',
	  sm: 'screen and (min-width: 768px)',
	  md: 'screen and (min-width: 992px)',
	  lg: 'screen and (min-width: 1200px)'
	};

	function _query(key) {
	  return key[0] === '@' || key === 'xs' || key === 'md' || key === 'lg';
	};

	function _onMediaQueryChange(component, query, mediaQueryList) {
	  var media = {};
	  media[query] = mediaQueryList.matches;
	  _setStyleState(component, query, media);
	}

	function _setStyleState(component, key, newState) {
	  var existing = component.state && component.state._media || {};
	  var state = { _media: (0, _objectAssign2['default'])({}, existing) };
	  state._media[key] = state._media[key] || {};
	  (0, _objectAssign2['default'])(state._media[key], newState);
	  component.setState({
	    _media: state._media
	  });
	}

	function _resolveLayoutGeneral(props, style) {
	  var newStyle = {};
	  if (props.block) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].block);
	  }
	  if (props.hidden) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].hidden);
	  }
	  if (props.invisible) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].invisible);
	  }

	  return newStyle;
	}

	function _resolveLayoutPosition(props, style) {
	  var newStyle = {};
	  if (props.relative) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].relative);
	  }
	  if (props.absolute) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].absolute);
	  }

	  return newStyle;
	};

	function _resolveLayoutFlex(props, style) {
	  var newStyle = {};
	  if (props.layout) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].layout, _layout2['default'].vertical);
	    if (props.vertical) {
	      props.reverse ? newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].verticalReverse) : newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].vertical);
	    } else {
	      props.reverse ? newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].horizontalReverse) : newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].horizontal);
	    }
	  }
	  if (props.inline) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].inline, _layout2['default'].horizontal);
	  }

	  props.flex ? newStyle = (0, _objectAssign2['default'])(newStyle, _layout2['default'].flexAuto, style) : newStyle = (0, _objectAssign2['default'])(newStyle, _layout2['default'].flexNone, style);

	  return newStyle;
	};

	function _resolveLayoutAlign(props, style) {
	  var newStyle = {};
	  newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].alignStretch);
	  if (props.start) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].alignStart);
	  }
	  if (props.center) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].alignCenter);
	  }
	  if (props.end) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].alignEnd);
	  }
	  if (props.centered) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].centered);
	  }

	  return newStyle;
	};

	function _resolveLayoutSelf(props, style) {
	  var newStyle = {};
	  if (props.selfStart) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].selfAlignStart);
	  }
	  if (props.selfCenter) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].selfAlignCenter);
	  }
	  if (props.selfEnd) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].selfAlignEnd);
	  }
	  if (props.selfStretch) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].selfAlignStretch);
	  }

	  return newStyle;
	};

	function _resolveLayoutJustify(props, style) {
	  var newStyle = {};
	  if (props.justifyStart) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyStart);
	  }
	  if (props.justifyCenter) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyCenter);
	  }
	  if (props.justifyEnd) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyEnd);
	  }
	  if (props.justifyStretch) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyStretch);
	  }
	  if (props.justifyBetween) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyBetween);
	  }
	  if (props.justifyAround) {
	    newStyle = (0, _objectAssign2['default'])(newStyle, style, _layout2['default'].justifyAround);
	  }

	  return newStyle;
	};

	function _resolveLayoutStyles(props, style) {
	  return (0, _objectAssign2['default'])({}, _resolveLayoutGeneral(props, style), _resolveLayoutPosition(props, style), _resolveLayoutFlex(props, style), _resolveLayoutAlign(props, style), _resolveLayoutSelf(props, style), _resolveLayoutJustify(props, style));
	};

	function _resolveMediaQueries(component, style) {
	  var newStyle = {};
	  if (style) {
	    Object.keys(style).filter(function (name) {
	      return _query(name);
	    }).map(function (query) {
	      var mql = undefined;
	      var mediaQueryStyles = undefined;

	      mediaQueryStyles = style[query];
	      query = query[0] === '@' ? query.replace('@media ', '') : _predefinedMediaQueryString[query];
	      mql = _mediaQueryListByQueryString[query];
	      if (!mql) {
	        _mediaQueryListByQueryString[query] = mql = window.matchMedia(query);
	      }

	      if (!component._mediaQueryListenersByQuery) {
	        component._mediaQueryListenersByQuery = {};
	      }

	      if (!component._mediaQueryListenersByQuery[query]) {
	        (function () {
	          var listener = _onMediaQueryChange.bind(null, component, query);
	          mql.addListener(listener);
	          component._mediaQueryListenersByQuery[query] = {
	            remove: function remove() {
	              mql.removeListener(listener);
	            }
	          };
	        })();
	      }

	      if (mql.matches) {
	        newStyle = (0, _objectAssign2['default'])({}, style[query], mediaQueryStyles);
	      }
	    });
	  }

	  return newStyle;
	};

	function Compose(component, rendered) {
	  var props = rendered.props;
	  var style = props.style;

	  var newProps = {};
	  var newStyle = {};

	  if (Array.isArray(style)) {
	    for (var i = 0; i < style.length; i++) {
	      if (!style[i] || _typeof(style[i]) !== 'object' || Array.isArray(style[i])) {
	        console.warn('styles object should be an object');
	      }
	      newStyle = (0, _objectAssign2['default'])(newStyle, style[i]);
	    }
	  }

	  newStyle = (0, _objectAssign2['default'])(newStyle, _resolveLayoutStyles(props, style));
	  newStyle = (0, _objectAssign2['default'])(newStyle, _resolveMediaQueries(component, style));

	  Object.keys(newStyle).forEach(function (key) {
	    if (_query(key)) {
	      delete newStyle[key];
	    }
	  });

	  newProps = (0, _objectAssign2['default'])(newProps, { style: newStyle });
	  return _react2['default'].cloneElement(rendered, newProps);
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _objectAssign = __webpack_require__(8);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var common = undefined,
	    layout = undefined,
	    inline = undefined,
	    flex = undefined,
	    flexAuto = undefined,
	    flexNone = undefined;
	var horizontal = undefined,
	    horizontalReverse = undefined,
	    vertical = undefined,
	    verticalReverse = undefined;
	var alignStart = undefined,
	    alignCenter = undefined,
	    alignEnd = undefined,
	    alignStretch = undefined;
	var selfAlignStart = undefined,
	    selfAlignCenter = undefined,
	    selfAlignEnd = undefined,
	    selfAlignStretch = undefined;
	var justifyStart = undefined,
	    justifyCenter = undefined,
	    justifyEnd = undefined,
	    justifyBetween = undefined,
	    justifyAround = undefined;
	var block = undefined,
	    hidden = undefined,
	    invisible = undefined;
	var relative = undefined,
	    absolute = undefined;
	var centered = undefined;

	// Defaults
	common = {
	  boxSizing: 'border-box',
	  flexWrap: 'wrap'
	};

	layout = (0, _objectAssign2['default'])({}, common, {
	  display: 'flex'
	});

	inline = (0, _objectAssign2['default'])({}, common, {
	  display: 'inline-flex'
	});

	flex = {
	  flexGrow: 1,
	  flexShrink: 1,
	  flexBasis: '0%'
	};

	flexAuto = (0, _objectAssign2['default'])({}, flex, {
	  flexGrow: 1,
	  flexShrink: 1,
	  flexBasis: 'auto'
	});

	flexNone = {
	  flexGrow: 0,
	  flexShrink: 0,
	  flexBasis: 'auto'
	};

	block = {
	  display: 'block'
	};

	hidden = {
	  display: 'none'
	};

	invisible = {
	  visibility: 'hidden'
	};

	relative = {
	  position: 'relative'
	};

	absolute = {
	  position: 'absolute',
	  top: 0,
	  right: 0,
	  bottom: 0,
	  left: 0
	};

	horizontal = (0, _objectAssign2['default'])({}, layout, {
	  flexDirection: 'row'
	});

	horizontalReverse = (0, _objectAssign2['default'])({}, layout, {
	  flexDirection: 'row-reverse'
	});

	vertical = (0, _objectAssign2['default'])({}, layout, {
	  flexDirection: 'column'
	});

	verticalReverse = (0, _objectAssign2['default'])({}, layout, {
	  flexDirection: 'column-reverse'
	});

	alignStart = {
	  alignItems: 'flex-start'
	};

	alignCenter = {
	  alignItems: 'center'
	};

	alignEnd = {
	  alignItems: 'flex-end'
	};

	alignStretch = {
	  alignItems: 'stretch'
	};

	selfAlignStart = {
	  alignSelf: 'flex-start'
	};

	selfAlignCenter = {
	  alignSelf: 'center'
	};

	selfAlignEnd = {
	  alignSelf: 'flex-end'
	};

	selfAlignStretch = {
	  alignSelf: 'stretch'
	};

	justifyStart = {
	  justifyContent: 'flex-start'
	};

	justifyCenter = {
	  justifyContent: 'center'
	};

	justifyEnd = {
	  justifyContent: 'flex-end'
	};

	justifyBetween = {
	  justifyContent: 'space-between'
	};

	justifyAround = {
	  justifyContent: 'space-around'
	};

	centered = (0, _objectAssign2['default'])({}, layout, alignCenter, justifyCenter);

	exports['default'] = {
	  block: block,
	  hidden: hidden,
	  invisible: invisible,
	  centered: centered,
	  relative: relative,
	  absolute: absolute,
	  layout: layout,
	  inline: inline,
	  flexAuto: flexAuto,
	  flexNone: flexNone,
	  horizontal: horizontal,
	  horizontalReverse: horizontalReverse,
	  vertical: vertical,
	  verticalReverse: verticalReverse,
	  alignStart: alignStart,
	  alignCenter: alignCenter,
	  alignEnd: alignEnd,
	  alignStretch: alignStretch,
	  selfAlignStart: selfAlignStart,
	  selfAlignCenter: selfAlignCenter,
	  selfAlignEnd: selfAlignEnd,
	  selfAlignStretch: selfAlignStretch,
	  justifyStart: justifyStart,
	  justifyCenter: justifyCenter,
	  justifyEnd: justifyEnd,
	  justifyBetween: justifyBetween,
	  justifyAround: justifyAround
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var merge = __webpack_require__(8);
	var NotificationContainer = __webpack_require__(11);
	var Constants = __webpack_require__(13);
	var Styles = __webpack_require__(15);

	var NotificationSystem = React.createClass({ displayName: "NotificationSystem",

	  uid: 3400,

	  _isMounted: false,

	  _getStyles: {
	    overrideStyle: {},

	    overrideWidth: null,

	    setOverrideStyle: function setOverrideStyle(style) {
	      this.overrideStyle = style;
	    },

	    wrapper: function wrapper() {
	      if (!this.overrideStyle) return {};
	      return merge({}, Styles.Wrapper, this.overrideStyle.Wrapper);
	    },

	    container: function container(position) {
	      var override = this.overrideStyle.Containers || {};
	      if (!this.overrideStyle) return {};

	      this.overrideWidth = Styles.Containers.DefaultStyle.width;

	      if (override.DefaultStyle && override.DefaultStyle.width) {
	        this.overrideWidth = override.DefaultStyle.width;
	      }

	      if (override[position] && override[position].width) {
	        this.overrideWidth = override[position].width;
	      }

	      return merge({}, Styles.Containers.DefaultStyle, Styles.Containers[position], override.DefaultStyle, override[position]);
	    },

	    elements: {
	      notification: 'NotificationItem',
	      title: 'Title',
	      messageWrapper: 'MessageWrapper',
	      dismiss: 'Dismiss',
	      action: 'Action',
	      actionWrapper: 'ActionWrapper'
	    },

	    byElement: function byElement(element) {
	      var self = this;
	      return function (level) {
	        var _element = self.elements[element];
	        var override = self.overrideStyle[_element] || {};
	        if (!self.overrideStyle) return {};
	        return merge({}, Styles[_element].DefaultStyle, Styles[_element][level], override.DefaultStyle, override[level]);
	      };
	    }
	  },

	  _didNotificationRemoved: function _didNotificationRemoved(uid) {
	    var notification;
	    var notifications = this.state.notifications.filter(function (toCheck) {
	      if (toCheck.uid === uid) {
	        notification = toCheck;
	      }
	      return toCheck.uid !== uid;
	    });

	    if (notification && notification.onRemove) {
	      notification.onRemove(notification);
	    }

	    if (this._isMounted) {
	      this.setState({ notifications: notifications });
	    }
	  },

	  getInitialState: function getInitialState() {
	    return {
	      notifications: []
	    };
	  },

	  propTypes: {
	    style: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object]),
	    noAnimation: React.PropTypes.bool,
	    allowHTML: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {},
	      noAnimation: false,
	      allowHTML: false
	    };
	  },

	  addNotification: function addNotification(notification) {
	    var _notification = merge({}, Constants.notification, notification);
	    var notifications = this.state.notifications;
	    var i;

	    if (!_notification.level) {
	      throw new Error('notification level is required.');
	    }

	    if (Object.keys(Constants.levels).indexOf(_notification.level) === -1) {
	      throw new Error('\'' + _notification.level + '\' is not a valid level.');
	    }

	    if (isNaN(_notification.autoDismiss)) {
	      throw new Error('\'autoDismiss\' must be a number.');
	    }

	    if (Object.keys(Constants.positions).indexOf(_notification.position) === -1) {
	      throw new Error('\'' + _notification.position + '\' is not a valid position.');
	    }

	    // Some preparations
	    _notification.position = _notification.position.toLowerCase();
	    _notification.level = _notification.level.toLowerCase();
	    _notification.autoDismiss = parseInt(_notification.autoDismiss, 10);

	    _notification.uid = _notification.uid || this.uid;
	    _notification.ref = 'notification-' + _notification.uid;
	    this.uid += 1;

	    // do not add if the notification already exists based on supplied uid
	    for (i = 0; i < notifications.length; i++) {
	      if (notifications[i].uid === _notification.uid) {
	        return false;
	      }
	    }

	    notifications.push(_notification);

	    if (typeof _notification.onAdd === 'function') {
	      notification.onAdd(_notification);
	    }

	    this.setState({
	      notifications: notifications
	    });

	    return _notification;
	  },

	  removeNotification: function removeNotification(notification) {
	    var self = this;
	    Object.keys(this.refs).forEach(function (container) {
	      if (container.indexOf('container') > -1) {
	        Object.keys(self.refs[container].refs).forEach(function (_notification) {
	          var uid = notification.uid ? notification.uid : notification;
	          if (_notification === 'notification-' + uid) {
	            self.refs[container].refs[_notification]._hideNotification();
	          }
	        });
	      }
	    });
	  },

	  clearNotifications: function clearNotifications() {
	    var self = this;
	    Object.keys(this.refs).forEach(function (container) {
	      if (container.indexOf('container') > -1) {
	        Object.keys(self.refs[container].refs).forEach(function (_notification) {
	          self.refs[container].refs[_notification]._hideNotification();
	        });
	      }
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this._getStyles.setOverrideStyle(this.props.style);
	    this._isMounted = true;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._isMounted = false;
	  },

	  render: function render() {
	    var self = this;
	    var containers = null;
	    var notifications = this.state.notifications;

	    if (notifications.length) {
	      containers = Object.keys(Constants.positions).map(function (position) {
	        var _notifications = notifications.filter(function (notification) {
	          return position === notification.position;
	        });

	        if (!_notifications.length) {
	          return null;
	        }

	        return React.createElement(NotificationContainer, {
	          ref: 'container-' + position,
	          key: position,
	          position: position,
	          notifications: _notifications,
	          getStyles: self._getStyles,
	          onRemove: self._didNotificationRemoved,
	          noAnimation: self.props.noAnimation,
	          allowHTML: self.props.allowHTML });
	      });
	    }

	    return React.createElement("div", { className: "notifications-wrapper", style: this._getStyles.wrapper() }, containers);
	  }
	});

	module.exports = NotificationSystem;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var NotificationItem = __webpack_require__(12);
	var Constants = __webpack_require__(13);

	var NotificationContainer = React.createClass({ displayName: "NotificationContainer",

	  propTypes: {
	    position: React.PropTypes.string.isRequired,
	    notifications: React.PropTypes.array.isRequired,
	    getStyles: React.PropTypes.object
	  },

	  _style: {},

	  componentWillMount: function componentWillMount() {
	    // Fix position if width is overrided
	    this._style = this.props.getStyles.container(this.props.position);

	    if (this.props.getStyles.overrideWidth && (this.props.position === Constants.positions.tc || this.props.position === Constants.positions.bc)) {
	      this._style.marginLeft = -(this.props.getStyles.overrideWidth / 2);
	    }
	  },

	  render: function render() {
	    var self = this;
	    var notifications;

	    if ([Constants.positions.bl, Constants.positions.br, Constants.positions.bc].indexOf(this.props.position) > -1) {
	      this.props.notifications.reverse();
	    }

	    notifications = this.props.notifications.map(function (notification) {
	      return React.createElement(NotificationItem, {
	        ref: 'notification-' + notification.uid,
	        key: notification.uid,
	        notification: notification,
	        getStyles: self.props.getStyles,
	        onRemove: self.props.onRemove,
	        noAnimation: self.props.noAnimation,
	        allowHTML: self.props.allowHTML,
	        children: self.props.children });
	    });

	    return React.createElement("div", { className: 'notifications-' + this.props.position, style: this._style }, notifications);
	  }
	});

	module.exports = NotificationContainer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var Constants = __webpack_require__(13);
	var Helpers = __webpack_require__(14);
	var merge = __webpack_require__(8);

	/* From Modernizr */
	var whichTransitionEvent = function whichTransitionEvent() {
	  var el = document.createElement('fakeelement');
	  var transition;
	  var transitions = {
	    transition: 'transitionend',
	    OTransition: 'oTransitionEnd',
	    MozTransition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd'
	  };

	  Object.keys(transitions).forEach(function (transitionKey) {
	    if (el.style[transitionKey] !== undefined) {
	      transition = transitions[transitionKey];
	    }
	  });

	  return transition;
	};

	var NotificationItem = React.createClass({ displayName: "NotificationItem",

	  propTypes: {
	    notification: React.PropTypes.object,
	    getStyles: React.PropTypes.object,
	    onRemove: React.PropTypes.func,
	    allowHTML: React.PropTypes.bool,
	    noAnimation: React.PropTypes.bool,
	    children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      noAnimation: false,
	      onRemove: function onRemove() {},
	      allowHTML: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      visible: false,
	      removed: false
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    var getStyles = this.props.getStyles;
	    var level = this.props.notification.level;

	    this._noAnimation = this.props.noAnimation;

	    this._styles = {
	      notification: getStyles.byElement('notification')(level),
	      title: getStyles.byElement('title')(level),
	      dismiss: getStyles.byElement('dismiss')(level),
	      messageWrapper: getStyles.byElement('messageWrapper')(level),
	      actionWrapper: getStyles.byElement('actionWrapper')(level),
	      action: getStyles.byElement('action')(level)
	    };

	    if (!this.props.notification.dismissible) {
	      this._styles.notification.cursor = 'default';
	    }
	  },

	  _styles: {},

	  _notificationTimer: null,

	  _height: 0,

	  _noAnimation: null,

	  _isMounted: false,

	  _removeCount: 0,

	  _getCssPropertyByPosition: function _getCssPropertyByPosition() {
	    var position = this.props.notification.position;
	    var css = {};

	    switch (position) {
	      case Constants.positions.tl:
	      case Constants.positions.bl:
	        css = {
	          property: 'left',
	          value: -200
	        };
	        break;

	      case Constants.positions.tr:
	      case Constants.positions.br:
	        css = {
	          property: 'right',
	          value: -200
	        };
	        break;

	      case Constants.positions.tc:
	        css = {
	          property: 'top',
	          value: -100
	        };
	        break;

	      case Constants.positions.bc:
	        css = {
	          property: 'bottom',
	          value: -100
	        };
	        break;

	      default:
	    }

	    return css;
	  },

	  _defaultAction: function _defaultAction(event) {
	    var notification = this.props.notification;

	    event.preventDefault();
	    this._hideNotification();
	    if (typeof notification.action.callback === 'function') {
	      notification.action.callback();
	    }
	  },

	  _hideNotification: function _hideNotification() {
	    if (this._notificationTimer) {
	      this._notificationTimer.clear();
	    }

	    if (this._isMounted) {
	      this.setState({
	        visible: false,
	        removed: true
	      });
	    }

	    if (this._noAnimation) {
	      this._removeNotification();
	    }
	  },

	  _removeNotification: function _removeNotification() {
	    this.props.onRemove(this.props.notification.uid);
	  },

	  _dismiss: function _dismiss() {
	    if (!this.props.notification.dismissible) {
	      return;
	    }

	    this._hideNotification();
	  },

	  _showNotification: function _showNotification() {
	    var self = this;
	    setTimeout(function () {
	      if (self._isMounted) {
	        self.setState({
	          visible: true
	        });
	      }
	    }, 50);
	  },

	  _onTransitionEnd: function _onTransitionEnd() {
	    if (this._removeCount > 0) return;
	    if (this.state.removed) {
	      this._removeCount++;
	      this._removeNotification();
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    var self = this;
	    var transitionEvent = whichTransitionEvent();
	    var notification = this.props.notification;
	    var element = ReactDOM.findDOMNode(this);

	    this._height = element.offsetHeight;

	    this._isMounted = true;

	    // Watch for transition end
	    if (!this._noAnimation) {
	      if (transitionEvent) {
	        element.addEventListener(transitionEvent, this._onTransitionEnd);
	      } else {
	        this._noAnimation = true;
	      }
	    }

	    if (notification.autoDismiss) {
	      this._notificationTimer = new Helpers.Timer(function () {
	        self._hideNotification();
	      }, notification.autoDismiss * 1000);
	    }

	    this._showNotification();
	  },

	  _handleMouseEnter: function _handleMouseEnter() {
	    var notification = this.props.notification;
	    if (notification.autoDismiss) {
	      this._notificationTimer.pause();
	    }
	  },

	  _handleMouseLeave: function _handleMouseLeave() {
	    var notification = this.props.notification;
	    if (notification.autoDismiss) {
	      this._notificationTimer.resume();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var element = ReactDOM.findDOMNode(this);
	    var transitionEvent = whichTransitionEvent();
	    element.removeEventListener(transitionEvent, this._onTransitionEnd);
	    this._isMounted = false;
	  },

	  _allowHTML: function _allowHTML(string) {
	    return { __html: string };
	  },

	  render: function render() {
	    var notification = this.props.notification;
	    var className = 'notification notification-' + notification.level;
	    var notificationStyle = merge({}, this._styles.notification);
	    var cssByPos = this._getCssPropertyByPosition();
	    var dismiss = null;
	    var actionButton = null;
	    var title = null;
	    var message = null;

	    if (this.state.visible) {
	      className += ' notification-visible';
	    } else {
	      className += ' notification-hidden';
	    }

	    if (!notification.dismissible) {
	      className += ' notification-not-dismissible';
	    }

	    if (this.props.getStyles.overrideStyle) {
	      if (!this.state.visible && !this.state.removed) {
	        notificationStyle[cssByPos.property] = cssByPos.value;
	      }

	      if (this.state.visible && !this.state.removed) {
	        notificationStyle.height = this._height;
	        notificationStyle[cssByPos.property] = 0;
	      }

	      if (this.state.removed) {
	        notificationStyle.overlay = 'hidden';
	        notificationStyle.height = 0;
	        notificationStyle.marginTop = 0;
	        notificationStyle.paddingTop = 0;
	        notificationStyle.paddingBottom = 0;
	      }
	      notificationStyle.opacity = this.state.visible ? this._styles.notification.isVisible.opacity : this._styles.notification.isHidden.opacity;
	    }

	    if (notification.title) {
	      title = React.createElement("h4", { className: "notification-title", style: this._styles.title }, notification.title);
	    }

	    if (notification.message) {
	      if (this.props.allowHTML) {
	        message = React.createElement("div", { className: "notification-message", style: this._styles.messageWrapper, dangerouslySetInnerHTML: this._allowHTML(notification.message) });
	      } else {
	        message = React.createElement("div", { className: "notification-message", style: this._styles.messageWrapper }, notification.message);
	      }
	    }

	    if (notification.dismissible) {
	      dismiss = React.createElement("span", { className: "notification-dismiss", style: this._styles.dismiss }, "×");
	    }

	    if (notification.action) {
	      actionButton = React.createElement("div", { className: "notification-action-wrapper", style: this._styles.actionWrapper }, React.createElement("button", { className: "notification-action-button",
	        onClick: this._defaultAction,
	        style: this._styles.action }, notification.action.label));
	    }

	    if (notification.children) {
	      actionButton = notification.children;
	    }

	    return React.createElement("div", { className: className, onClick: this._dismiss, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave, style: notificationStyle }, title, message, dismiss, actionButton);
	  }

	});

	module.exports = NotificationItem;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var CONSTANTS = {

	  // Positions
	  positions: {
	    tl: 'tl',
	    tr: 'tr',
	    tc: 'tc',
	    bl: 'bl',
	    br: 'br',
	    bc: 'bc'
	  },

	  // Levels
	  levels: {
	    success: 'success',
	    error: 'error',
	    warning: 'warning',
	    info: 'info'
	  },

	  // Notification defaults
	  notification: {
	    title: null,
	    message: null,
	    level: null,
	    position: 'tr',
	    autoDismiss: 5,
	    dismissible: true,
	    action: null
	  }
	};

	module.exports = CONSTANTS;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	var Helpers = {
	  Timer: function Timer(callback, delay) {
	    var timerId;
	    var start;
	    var remaining = delay;

	    this.pause = function () {
	      clearTimeout(timerId);
	      remaining -= new Date() - start;
	    };

	    this.resume = function () {
	      start = new Date();
	      clearTimeout(timerId);
	      timerId = setTimeout(callback, remaining);
	    };

	    this.clear = function () {
	      clearTimeout(timerId);
	    };

	    this.resume();
	  }
	};

	module.exports = Helpers;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	// Used for calculations
	var defaultWidth = 320;
	var defaultColors = {
	  success: {
	    rgb: '94, 164, 0',
	    hex: '#5ea400'
	  },
	  error: {
	    rgb: '236, 61, 61',
	    hex: '#ec3d3d'
	  },
	  warning: {
	    rgb: '235, 173, 23',
	    hex: '#ebad1a'
	  },
	  info: {
	    rgb: '54, 156, 199',
	    hex: '#369cc7'
	  }
	};
	var defaultShadowOpacity = '0.9';

	var STYLES = {

	  Wrapper: {},
	  Containers: {
	    DefaultStyle: {
	      fontFamily: 'inherit',
	      position: 'fixed',
	      width: defaultWidth,
	      padding: '0 10px 10px 10px',
	      zIndex: 9998,
	      WebkitBoxSizing: 'border-box',
	      MozBoxSizing: 'border-box',
	      boxSizing: 'border-box',
	      height: 'auto'
	    },

	    tl: {
	      top: '0px',
	      bottom: 'auto',
	      left: '0px',
	      right: 'auto'
	    },

	    tr: {
	      top: '0px',
	      bottom: 'auto',
	      left: 'auto',
	      right: '0px'
	    },

	    tc: {
	      top: '0px',
	      bottom: 'auto',
	      margin: '0 auto',
	      left: '50%',
	      marginLeft: -(defaultWidth / 2)
	    },

	    bl: {
	      top: 'auto',
	      bottom: '0px',
	      left: '0px',
	      right: 'auto'
	    },

	    br: {
	      top: 'auto',
	      bottom: '0px',
	      left: 'auto',
	      right: '0px'
	    },

	    bc: {
	      top: 'auto',
	      bottom: '0px',
	      margin: '0 auto',
	      left: '50%',
	      marginLeft: -(defaultWidth / 2)
	    }

	  },

	  NotificationItem: {
	    DefaultStyle: {
	      position: 'relative',
	      width: '100%',
	      cursor: 'pointer',
	      borderRadius: '2px',
	      fontSize: '13px',
	      margin: '10px 0 0',
	      padding: '10px',
	      display: 'block',
	      WebkitBoxSizing: 'border-box',
	      MozBoxSizing: 'border-box',
	      boxSizing: 'border-box',
	      opacity: 0,
	      transition: '0.3s ease-in-out',
	      WebkitTransform: 'translate3d(0, 0, 0)',
	      transform: 'translate3d(0, 0, 0)',
	      willChange: 'transform, opacity',

	      isHidden: {
	        opacity: 0
	      },

	      isVisible: {
	        opacity: 1
	      }
	    },

	    success: {
	      borderTop: '2px solid ' + defaultColors.success.hex,
	      backgroundColor: '#f0f5ea',
	      color: '#4b583a',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.success.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    error: {
	      borderTop: '2px solid ' + defaultColors.error.hex,
	      backgroundColor: '#f4e9e9',
	      color: '#412f2f',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.error.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    warning: {
	      borderTop: '2px solid ' + defaultColors.warning.hex,
	      backgroundColor: '#f9f6f0',
	      color: '#5a5343',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.warning.rgb + ',' + defaultShadowOpacity + ')'
	    },

	    info: {
	      borderTop: '2px solid ' + defaultColors.info.hex,
	      backgroundColor: '#e8f0f4',
	      color: '#41555d',
	      WebkitBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
	      MozBoxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')',
	      boxShadow: '0 0 1px rgba(' + defaultColors.info.rgb + ',' + defaultShadowOpacity + ')'
	    }
	  },

	  Title: {
	    DefaultStyle: {
	      fontSize: '14px',
	      margin: '0 0 5px 0',
	      padding: 0,
	      fontWeight: 'bold'
	    },

	    success: {
	      color: defaultColors.success.hex
	    },

	    error: {
	      color: defaultColors.error.hex
	    },

	    warning: {
	      color: defaultColors.warning.hex
	    },

	    info: {
	      color: defaultColors.info.hex
	    }

	  },

	  MessageWrapper: {
	    DefaultStyle: {
	      margin: 0,
	      padding: 0
	    }
	  },

	  Dismiss: {
	    DefaultStyle: {
	      fontFamily: 'Arial',
	      fontSize: '17px',
	      position: 'absolute',
	      top: '4px',
	      right: '5px',
	      lineHeight: '15px',
	      backgroundColor: '#dededf',
	      color: '#ffffff',
	      borderRadius: '50%',
	      width: '14px',
	      height: '14px',
	      fontWeight: 'bold',
	      textAlign: 'center'
	    },

	    success: {
	      color: '#f0f5ea',
	      backgroundColor: '#b0ca92'
	    },

	    error: {
	      color: '#f4e9e9',
	      backgroundColor: '#e4bebe'
	    },

	    warning: {
	      color: '#f9f6f0',
	      backgroundColor: '#e1cfac'
	    },

	    info: {
	      color: '#e8f0f4',
	      backgroundColor: '#a4becb'
	    }
	  },

	  Action: {
	    DefaultStyle: {
	      background: '#ffffff',
	      borderRadius: '2px',
	      padding: '6px 20px',
	      fontWeight: 'bold',
	      margin: '10px 0 0 0',
	      border: 0
	    },

	    success: {
	      backgroundColor: defaultColors.success.hex,
	      color: '#ffffff'
	    },

	    error: {
	      backgroundColor: defaultColors.error.hex,
	      color: '#ffffff'
	    },

	    warning: {
	      backgroundColor: defaultColors.warning.hex,
	      color: '#ffffff'
	    },

	    info: {
	      backgroundColor: defaultColors.info.hex,
	      color: '#ffffff'
	    }
	  },

	  ActionWrapper: {
	    DefaultStyle: {
	      margin: 0,
	      padding: 0
	    }
	  }
	};

	module.exports = STYLES;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var SwitchButton = React.createClass({

	  // Display name
	  displayName: 'Switch Button',

	  // Version
	  version: '2.0.0',

	  /**
	   * The props types.
	   */
	  propTypes: {
	    id: React.PropTypes.string,
	    name: React.PropTypes.string,
	    title: React.PropTypes.string,
	    label: React.PropTypes.string,
	    labelRight: React.PropTypes.string,
	    defaultChecked: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    theme: React.PropTypes.string,
	    checked: React.PropTypes.string,
	    onChange: React.PropTypes.func
	  },

	  /**
	   * Default props.
	   *
	   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
	   */
	  getDefaultProps: function getDefaultProps() {
	    return {
	      id: '',
	      name: 'switch-button',
	      title: '',
	      label: '',
	      labelRight: '',
	      disabled: false,
	      defaultChecked: false,
	      theme: 'rsbc-switch-button-flat-round',
	      checked: null,
	      onChange: this.handleChange
	    };
	  },

	  // Handle change
	  handleChange: function handleChange() {
	    // Override
	  },

	  /**
	   * Render Switch Button control
	   *
	   * @returns {XML}
	   */
	  render: function render() {
	    var id = void 0,
	        label = void 0,
	        labelRight = void 0;

	    if (this.props.id == '' && this.props.name != '') {
	      id = this.props.name;
	    }

	    if (this.props.label != '') {
	      label = React.createElement(
	        'label',
	        { htmlFor: id },
	        this.props.label
	      );
	    }

	    if (this.props.labelRight != '') {
	      labelRight = React.createElement(
	        'label',
	        { htmlFor: id },
	        this.props.labelRight
	      );
	    }

	    return React.createElement(
	      'div',
	      { className: 'rsbc-switch-button ' + this.props.theme + (this.props.disabled ? " disabled" : "") },
	      label,
	      React.createElement('input', { onChange: this.props.onChange,
	        defaultChecked: this.props.defaultChecked,
	        disabled: this.props.disabled,
	        id: id, name: this.props.name,
	        type: 'checkbox',
	        value: '1' }),
	      React.createElement('label', { htmlFor: id }),
	      labelRight
	    );
	  }

	});

	module.exports = SwitchButton;

/***/ }
/******/ ])
});
;