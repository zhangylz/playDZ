var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 每日奖励 */
var dailyGift = (function (_super) {
    __extends(dailyGift, _super);
    function dailyGift() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /** 初始化 */
    dailyGift.prototype.init = function () {
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.testClose);
        this.now_get.on(Laya.Event.MOUSE_DOWN, this, this.openHbao);
    };
    ;
    /** 打开红包 */
    dailyGift.prototype.openHbao = function (prompt) {
        var oneHbao = Laya.Pool.getItemByClass("HbaoOne", HBaoOne);
        oneHbao.popup();
        this.testClose();
    };
    ;
    /** 同步数据 */
    dailyGift.prototype.sysData = function (data) {
        console.log(data);
        this.loding.visible = false;
        this.hb_window.visible = true;
        if (!data.today_sign) {
            this.now_get.disabled = false;
            this.voide_get.disabled = false;
        }
    };
    ;
    dailyGift.prototype.testClose = function () {
        this.close();
        this.loding.visible = true;
        this.hb_window.visible = false;
    };
    ;
    return dailyGift;
}(ui.dailyGiftUI));
//# sourceMappingURL=dailyGift.js.map