var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var hbaoDialog = (function (_super) {
    __extends(hbaoDialog, _super);
    function hbaoDialog() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /** 初始化 */
    hbaoDialog.prototype.init = function () {
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
        this.keepOnHbao.on(Laya.Event.MOUSE_DOWN, this, this.keepHB);
        this.withdraw.on(Laya.Event.MOUSE_DOWN, this, this.hbWIdthdraws);
    };
    /** 继续打开红包 */
    hbaoDialog.prototype.keepHB = function () {
        console.log("继续打开红包");
    };
    hbaoDialog.prototype.hbWIdthdraws = function () {
        console.log("hbWIdthdraw");
    };
    return hbaoDialog;
}(ui.hbDialogUI));
//# sourceMappingURL=hbaoDialog.js.map