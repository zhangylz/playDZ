var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 游戏中 */
var inGameView = (function (_super) {
    __extends(inGameView, _super);
    /**
     * @param dataCenter 数据中控
     */
    function inGameView(dataCenter) {
        var _this = _super.call(this) || this;
        _this.dataCenter = dataCenter;
        _this.init();
        return _this;
    }
    /** 数据同步 */
    inGameView.prototype.init = function () {
        /** 分数 */
        var fraction = this.dataCenter.fraction;
        /** 红包数量 */
        var hbNumber = this.dataCenter.hbNumber;
        this.fraction.text = String(fraction);
        this.hbNumber.text = String(hbNumber);
        return this;
    };
    /** 分数重置 */
    inGameView.prototype.reset = function () {
        this.fraction.text = String(0);
        this.hbNumber.text = String(0);
        console.log("inGame reset \t$$$$");
    };
    return inGameView;
}(ui.inGameViewUI));
//# sourceMappingURL=inGameView.js.map