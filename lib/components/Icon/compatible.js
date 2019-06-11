"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IconTypeEnum_1 = require("./IconTypeEnum");
/** 老type映射成新的 */
var TypeMap;
(function (TypeMap) {
    TypeMap["question-circle"] = "question";
    TypeMap["share3"] = "share";
    TypeMap["share1"] = "share";
    TypeMap["share2"] = "share";
    TypeMap["ins"] = "instagram";
    TypeMap["drag1"] = "drag-mouse";
    TypeMap["drag2"] = "drag";
    TypeMap["prev"] = "left";
    TypeMap["next"] = "right";
    TypeMap["eye-close"] = "invisible";
    TypeMap["eye-open"] = "visible";
})(TypeMap || (TypeMap = {}));
/**
* icon type 兼容处理
*
*/
function compatible(type) {
    return IconTypeEnum_1.IconType[type] || TypeMap[type];
}
exports.compatible = compatible;
//# sourceMappingURL=compatible.js.map