var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 游戏结束 */
var gameOver = (function (_super) {
    __extends(gameOver, _super);
    function gameOver() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    gameOver.prototype.init = function () {
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
    };
    /**
     * 检测鼠标按下
     *@param e 事件触发回调对象
     */
    gameOver.prototype.mouseDown = function (e) {
        // 寄存触发事件的父级名字
        var name = e.target.name;
        // console.log(e.target.name);
        switch (name) {
            case "agin_img":
                // console.log("RECT!");
                this.gameAgin();
                break;
            case "home_img":
                // console.log("GO Game Home!");
                this.gameHome();
                break;
            case "share_img":
                // console.log("Share Frinde!");
                this.shareGeme();
                break;
            case "void_img":
                // console.log("Seeing Void");
                this.voidRelive();
                break;
            default:
                console.log("that is nothing!");
                break;
        }
    };
    /** 重新开始游戏 */
    gameOver.prototype.gameAgin = function () {
        console.log("Game Agin");
        return this;
    };
    /** 返回主页 */
    gameOver.prototype.gameHome = function () {
        console.log("goBreak Game Home");
        return this;
    };
    /** 分享复活 */
    gameOver.prototype.shareGeme = function () {
        console.log("share game to frinde");
        return this;
    };
    /** 视频复活 */
    gameOver.prototype.voidRelive = function () {
        console.log("Watch void to Relive");
        return this;
    };
    return gameOver;
}(ui.gameOverVIewUI));
//# sourceMappingURL=GameOver.js.map