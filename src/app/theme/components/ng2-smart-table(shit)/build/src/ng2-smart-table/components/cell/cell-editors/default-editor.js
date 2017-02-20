"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var cell_1 = require("../../../lib/data-set/cell");
var DefaultEditor = (function () {
    function DefaultEditor() {
        this.onStopEditing = new core_1.EventEmitter();
        this.onEdited = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
    }
    return DefaultEditor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", cell_1.Cell)
], DefaultEditor.prototype, "cell", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DefaultEditor.prototype, "inputClass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onStopEditing", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onEdited", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DefaultEditor.prototype, "onClick", void 0);
exports.DefaultEditor = DefaultEditor;
//# sourceMappingURL=default-editor.js.map