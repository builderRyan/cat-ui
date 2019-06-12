"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
/**
 * RadioGroup
 */
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.onRadioChange = function (e) {
            var value = e.target.value;
            var onChange = _this.props.onChange;
            // 是否有value值传递下来
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            onChange && onChange(value);
        };
        var value = '';
        if ('value' in props) {
            value = props.value;
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        _this.state = {
            value: value
        };
        return _this;
    }
    RadioGroup.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            return {
                value: nextProps.value
            };
        }
        else {
            return null;
        }
    };
    RadioGroup.prototype.render = function () {
        var self = this;
        var value = this.state.value;
        var _a = this.props, className = _a.className, style = _a.style, disabled = _a.disabled, readOnly = _a.readOnly, checked = _a.checked, children = _a.children;
        var classes = classnames_1.default('hmly-radio-group', className);
        var radios = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            return react_1.cloneElement(element, {
                onChange: self.onRadioChange,
                key: index,
                checked: value === element.props.value
            });
        });
        return (React.createElement(styled_1.StyledRadioGroup, { className: classes, style: style }, radios));
    };
    return RadioGroup;
}(react_1.Component));
exports.default = RadioGroup;
