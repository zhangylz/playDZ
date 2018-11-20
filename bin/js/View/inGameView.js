var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 游戏中 */
var inGameView = (function (_super) {
    __extends(inGameView, _super);
    function inGameView() {
        return _super.call(this) || this;
    }
    /** 分数重置 */
    inGameView.prototype.reset = function () {
        this.fraction.text = String(0);
        this.hbNumber.text = String(0);
        console.log("inGame reset \t$$$$");
    };
    return inGameView;
}(ui.inGameViewUI));
//# sourceMappingURL=inGameView.js.map