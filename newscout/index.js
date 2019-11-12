"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardItem(props) {
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
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBar() {
  return _react.default.createElement(_reactstrap.Navbar, null, _react.default.createElement(_reactstrap.NavbarBrand, {
    href: "/"
  }, "reactstrap"), _react.default.createElement(_reactstrap.Nav, {
    className: "ml-auto",
    navbar: true
  }, _react.default.createElement(_reactstrap.NavItem, null, "Components")));
}
