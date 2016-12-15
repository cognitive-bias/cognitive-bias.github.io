(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["tmp"] = factory(require("react"), require("react-dom"));
	else
		root["tmp"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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

	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(2);

	var TopLevelEntry = React.createClass({
	    displayName: 'TopLevelEntry',

	    render: function render() {
	        var node = this.props.node;
	        var id = node.name.replace(/ /g, "");
	        var elist = node.children.map(function (e) {
	            if (e.name != undefined) {
	                return React.createElement(SecondLevelEntryList, { node: e, key: e.name.replace(/ /g, "") });
	            }
	        });
	        return React.createElement(
	            'div',
	            { className: 'topLevelEntry', id: id },
	            React.createElement(
	                'div',
	                { className: 'topLevelEntryHeader' },
	                node.name
	            ),
	            elist
	        );
	    }
	});

	var TopLevelEntryList = React.createClass({
	    displayName: 'TopLevelEntryList',

	    render: function render() {
	        var elist = this.props.node.children.map(function (e) {
	            return React.createElement(TopLevelEntry, { node: e, key: e.name.replace(/ /g, "") });
	        });
	        return React.createElement(
	            'div',
	            null,
	            elist
	        );
	    }
	});

	var SecondLevelEntry = React.createClass({
	    displayName: 'SecondLevelEntry',

	    handleClick: function handleClick() {
	        console.log("click", this.props.node);
	    },
	    render: function render() {
	        var node = this.props.node;
	        var node;
	        if (Array.isArray(node.name)) {
	            name = node.name.join(" / ");
	        } else {
	            name = node.name;
	        }
	        return React.createElement(
	            'div',
	            { className: 'objblock', onClick: this.handleClick, id: this.key },
	            name
	        );
	    }
	});

	var SecondLevelEntryList = React.createClass({
	    displayName: 'SecondLevelEntryList',

	    render: function render() {
	        var id;
	        var name;
	        var node = this.props.node;
	        var elist = node.children.map(function (e) {
	            if (Array.isArray(e.name)) {
	                var iad = e.name[0].replace(/ /g, "");
	            } else {
	                var iad = e.name.replace(/ /g, "");
	            }
	            return React.createElement(SecondLevelEntry, { node: e, key: iad });
	        });
	        if (Array.isArray(node.name)) {
	            id = node.name[0].replace(/ /g, "");
	            name = node.name.join(" / ");
	        } else {
	            name = node.name;
	            id = node.name.replace(/ /g, "");
	        }
	        return React.createElement(
	            'div',
	            { className: 'secondLevelEntry', id: id },
	            React.createElement(
	                'div',
	                { className: 'secondLevelEntryHeader' },
	                name
	            ),
	            elist
	        );
	    }
	});

	var BiasCard = React.createClass({
	    displayName: 'BiasCard',

	    render: function render() {}
	});

	axios.get('data/cognitive-bias-cheat-sheet-ru.json').then(function (response) {
	    //var rootNode = <p>{response.data.name}</p>
	    var resp = React.createElement(TopLevelEntryList, { node: response.data });
	    ReactDOM.render(resp, document.getElementById("root"));
	}).catch(function (error) {
	    console.log(error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;