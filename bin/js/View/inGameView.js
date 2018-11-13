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
    /** 初始化 */
    inGameView.prototype.init = function () {
        console.log("inGame init \t$$$$");
    };
    return inGameView;
}(ui.inGameViewUI));
//# sourceMappingURL=inGameView.js.map