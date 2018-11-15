var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 邀请界面 */
var inviteGift = (function (_super) {
    __extends(inviteGift, _super);
    function inviteGift() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /** 初始化 */
    inviteGift.prototype.init = function () {
        this.testoff.on(Laya.Event.MOUSE_DOWN, this, this.close);
    };
    /** 关闭完成后，调用此方法（如果有关闭动画，则在动画完成后执行）*/
    inviteGift.prototype.onClosed = function (type) {
        if (type === void 0) { type = null; }
        console.log("closed OK!");
    };
    /** 打开完成后，调用此方法（如果有弹出动画，则在动画完成后执行） */
    inviteGift.prototype.onOpened = function () {
        console.log("poen OK!");
    };
    return inviteGift;
}(ui.inviteGiftUI));
//# sourceMappingURL=inviteGift.js.map