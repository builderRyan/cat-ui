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
var noop = require("lodash/noop");
var Tooltip_1 = require("../Tooltip");
var styled_1 = require("./styled");
var FormItem = (function (_super) {
    __extends(FormItem, _super);
    function FormItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemChange = function (value) {
            var _a = _this.props, _b = _a.check, check = _b === void 0 ? noop : _b, name = _a.name, onFieldChange = _a.onFieldChange, children = _a.children;
            var _c = children.props, props = _c === void 0 ? {} : _c;
            var onChange = props.onChange;
            var error = check(value);
            onChange && onChange(value);
            onFieldChange && onFieldChange(name, value, error);
        };
        _this.handleSubmitClick = function (e) {
            var _a = _this.props, children = _a.children, onSubmitClick = _a.onSubmitClick;
            var onClick = children.props.onClick;
            onSubmitClick(onClick);
        };
        _this.formItemRef = React.createRef();
        return _this;
    }
    FormItem.prototype.componentDidUpdate = function () {
        var _a = this.props, name = _a.name, values = _a.values, errors = _a.errors, isCheck = _a.isCheck, toggleIsCheck = _a.toggleIsCheck;
        var value = values[name];
        var error = errors[name];
        if (isCheck) {
            this.handleItemChange(value);
            toggleIsCheck(false);
        }
        if (Boolean(error)) {
            var element = this.formItemRef.current;
            var eleRect = element.getBoundingClientRect();
            var _b = eleRect.top, top_1 = _b === void 0 ? 0 : _b;
            if (element && top_1 < 0) {
                element.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }
    };
    FormItem.prototype.render = function () {
        var self = this;
        var _a = this.props, className = _a.className, style = _a.style, name = _a.name, label = _a.label, desc = _a.desc, tips = _a.tips, labelWidth = _a.labelWidth, labelAlign = _a.labelAlign, required = _a.required, values = _a.values, errors = _a.errors, children = _a.children;
        var classes = classnames_1.default('hmly-form-item', className);
        var labelBoxClass = classnames_1.default({ 'hmly-form-label-required': required });
        var value = values[name];
        var error = errors[name];
        var componentType = children.type.name;
        var item;
        if (componentType === 'Button') {
            item = react_1.cloneElement(children, {
                onChange: self.handleItemChange,
                onClick: self.handleSubmitClick
            });
        }
        else if (componentType === 'Input') {
            item = react_1.cloneElement(children, {
                onChange: function (e) { self.handleItemChange(e.target.value); },
                onClick: self.handleSubmitClick
            });
        }
        else {
            item = react_1.cloneElement(children, {
                onChange: self.handleItemChange
            });
        }
        return (React.createElement(styled_1.StyledFormItem, { className: classes, style: style, ref: this.formItemRef },
            React.createElement(styled_1.LabelBox, { width: labelWidth, className: labelBoxClass },
                React.createElement(styled_1.FormItemLabel, null,
                    label,
                    Boolean(tips) &&
                        React.createElement(Tooltip_1.default, { content: tips },
                            React.createElement(styled_1.LabelIcon, { type: 'question-circle' }))),
                Boolean(desc) && React.createElement(styled_1.FormItemDesc, null, desc)),
            React.createElement(styled_1.ControlBox, null,
                React.createElement(styled_1.FormItemControl, null, item),
                Boolean(error) && React.createElement(styled_1.ItemError, null, error))));
    };
    FormItem.defaultProps = {
        colon: false
    };
    return FormItem;
}(react_1.Component));
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map