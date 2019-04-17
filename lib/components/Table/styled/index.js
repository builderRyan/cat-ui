"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledTableBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #4a4a4a;\n  .table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #4a4a4a;\n  .table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n"])));
exports.StyledTableBox = StyledTableBox;
var StyledTr = styled_components_1.default.tr(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: left;\n  &.hmly-table-row-center {\n    text-align: center;\n  }\n"], ["\n  text-align: left;\n  &.hmly-table-row-center {\n    text-align: center;\n  }\n"])));
exports.StyledTr = StyledTr;
var StyledTd = styled_components_1.default.td(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 20px 10px;\n  line-height: 22px;\n  word-break: break-all;\n  font-size: 14px;\n  font-weight: 600;\n  color: #4a4a4a;\n"], ["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 20px 10px;\n  line-height: 22px;\n  word-break: break-all;\n  font-size: 14px;\n  font-weight: 600;\n  color: #4a4a4a;\n"])));
exports.StyledTd = StyledTd;
var StyledTh = styled_components_1.default.th(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 10px;\n  line-height: 22px;\n  text-align: left;\n  word-break: break-all;\n  color: #9b9b9b;\n  font-size: 12px;\n  font-weight: 600;\n"], ["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 10px;\n  line-height: 22px;\n  text-align: left;\n  word-break: break-all;\n  color: #9b9b9b;\n  font-size: 12px;\n  font-weight: 600;\n"])));
exports.StyledTh = StyledTh;
var EmptyInner = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .empty-bg {\n    background: url(", ");\n  }\n  .empty-desc {\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #bcbcbc;\n  }\n"], ["\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .empty-bg {\n    background: url(", ");\n  }\n  .empty-desc {\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #bcbcbc;\n  }\n"])), function (props) { return props.image; });
exports.EmptyInner = EmptyInner;
var EmptyImage = styled_components_1.default.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: block;\n  width: auto;\n  max-height: 137px;\n  margin: 0 auto;\n"], ["\n  display: block;\n  width: auto;\n  max-height: 137px;\n  margin: 0 auto;\n"])));
exports.EmptyImage = EmptyImage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map