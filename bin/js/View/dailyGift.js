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
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.close);
    };
    return dailyGift;
}(ui.dailyGiftUI));
//# sourceMappingURL=dailyGift.js.map