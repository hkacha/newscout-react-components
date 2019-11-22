"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CardItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardItem, _React$Component);

  function CardItem() {
    _classCallCheck(this, CardItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardItem).apply(this, arguments));
  }

  _createClass(CardItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          title = _this$props.title,
          description = _this$props.description,
          uploaded_on = _this$props.uploaded_on,
          uploaded_by = _this$props.uploaded_by;
      return _react.default.createElement(_reactstrap.Card, null, _react.default.createElement(_reactstrap.CardImg, {
        top: true,
        width: "100%",
        src: image,
        alt: title
      }), _react.default.createElement(_reactstrap.CardBody, null, _react.default.createElement(_reactstrap.CardTitle, {
        className: "card-title"
      }, title), _react.default.createElement(_reactstrap.CardText, null, _react.default.createElement("small", {
        className: "text-muted card-muted"
      }, uploaded_on, " via ", uploaded_by)), _react.default.createElement(_reactstrap.CardText, {
        className: "card-desc"
      }, description)));
    }
  }]);

  return CardItem;
}(_react.default.Component);

exports.CardItem = CardItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _this.toggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this.navitem = _this.props.navitems.map(function (item, index) {
      return _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        href: item.itemurl
      }, item.itemtext));
    });
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactstrap.Navbar, {
        className: "fixed-top",
        expand: "md"
      }, _react.default.createElement(_reactstrap.NavbarBrand, {
        href: "/"
      }, _react.default.createElement("img", {
        src: this.props.logo,
        alt: "newscout"
      })), _react.default.createElement(_reactstrap.NavbarToggler, {
        onClick: this.toggle,
        className: "custom-toggler"
      }), _react.default.createElement(_reactstrap.Collapse, {
        isOpen: this.state.isOpen,
        navbar: true
      }, _react.default.createElement(_reactstrap.Nav, {
        className: "ml-auto",
        navbar: true
      }, this.navitem)));
    }
  }]);

  return Menu;
}(_react.default.Component);

exports.Menu = Menu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SideBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBox, _React$Component);

  function SideBox(props) {
    var _this;

    _classCallCheck(this, SideBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideBox).call(this, props));
    _this.post = _this.props.posts.map(function (item, index) {
      return _react.default.createElement("li", {
        key: index
      }, _react.default.createElement("h5", {
        className: "post-header"
      }, _react.default.createElement("a", {
        href: item.url,
        className: "post-url"
      }, item.header)), _react.default.createElement("p", {
        className: "post-caption"
      }, item.caption));
    });
    return _this;
  }

  _createClass(SideBox, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "sidebox"
      }, _react.default.createElement("div", {
        className: "boxtitle mb-4"
      }, _react.default.createElement("h4", {
        className: "m-0"
      }, this.props.boxtitle)), _react.default.createElement("ul", {
        className: "list-unstyled"
      }, this.post));
    }
  }]);

  return SideBox;
}(_react.default.Component);

exports.SideBox = SideBox;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SliderItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SliderItem, _React$Component);

  function SliderItem(props) {
    _classCallCheck(this, SliderItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(SliderItem).call(this, props));
  }

  _createClass(SliderItem, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactstrap.UncontrolledCarousel, {
        items: this.props.slides
      });
    }
  }]);

  return SliderItem;
}(_react.default.Component);

exports.SliderItem = SliderItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabItem, _React$Component);

  function TabItem(props) {
    var _this;

    _classCallCheck(this, TabItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabItem).call(this, props));

    _this.toggle = function (tab) {
      console.log(tab);

      if (_this.state.activeTab !== tab) {
        _this.setState({
          activeTab: tab
        });
      }
    };

    _this.state = {
      activeTab: '0'
    };
    return _this;
  }

  _createClass(TabItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var navitem = this.props.tabnav.map(function (item, index) {
        return _react.default.createElement(_reactstrap.NavItem, {
          key: index
        }, _react.default.createElement(_reactstrap.NavLink, {
          className: _this2.state.activeTab === index.toString() ? 'active' : '',
          onClick: function onClick() {
            return _this2.toggle(index.toString());
          }
        }, item.tab_title));
      });
      var tabpane = this.props.tabnav.map(function (item, index) {
        return _react.default.createElement(_reactstrap.TabPane, {
          tabId: index.toString(),
          key: index,
          className: _this2.state.activeTab === index.toString() ? 'active' : ''
        }, item.tab_posts.map(function (subitem, index) {
          return _react.default.createElement(_reactstrap.Media, {
            key: index
          }, _react.default.createElement(_reactstrap.Media, {
            left: true,
            href: subitem.url,
            className: "mr-4"
          }, _react.default.createElement(_reactstrap.Media, {
            object: true,
            src: subitem.src,
            alt: subitem.alttext
          })), _react.default.createElement(_reactstrap.Media, {
            body: true
          }, _react.default.createElement(_reactstrap.Media, {
            heading: true
          }, subitem.header), subitem.caption));
        }));
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.Nav, {
        tabs: true
      }, navitem), _react.default.createElement(_reactstrap.TabContent, null, tabpane));
    }
  }]);

  return TabItem;
}(_react.default.Component);

exports.TabItem = TabItem;
