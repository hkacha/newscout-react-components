"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

exports.default = CardItem;
