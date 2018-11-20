var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 游戏结束 */
var gameOver = (function (_super) {
    __extends(gameOver, _super);
    function gameOver(game) {
        var _this = _super.call(this) || this;
        _this.init();
        _this.Game = game;
        return _this;
    }
    gameOver.prototype.init = function () {
        // 四个组件监听
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.gameAgin); //重新开始
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.gameHome); //回到主页
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.shareGeme); //分享复活
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.voidRelive); //视频复活
    };
    /** 重新开始游戏 */
    gameOver.prototype.gameAgin = function () {
        //判断gameOver弹窗显示状态
        if (this.isPopup == true) {
            this.close();
        }
        //重置分数
        this.Game.inGameView.reset();
        this.Game.gameReset().startGame();
        console.log("Game Agin");
    };
    /** 返回主页 */
    gameOver.prototype.gameHome = function () {
        this.close();
        this.Game.inGameView.visible = false;
        this.Game.gameHome.visible = true;
        this.Game.inGameView.reset();
        this.Game.gameReset();
        this.Game.monitorMouse();
        console.log("goBreak Game Home");
    };
    /** 分享复活 */
    gameOver.prototype.shareGeme = function () {
        if (this.isPopup == true) {
            this.close();
        }
        //重置然后开始游戏
        this.Game.gameReset().startGame();
        console.log("share game to frinde");
    };
    /** 视频复活 */
    gameOver.prototype.voidRelive = function () {
        if (this.isPopup == true) {
            this.close();
        }
        // 重置然后开始游戏
        this.Game.gameReset().startGame();
        console.log("Watch void to Relive");
    };
    /**
     * 关闭完成后
     * @param e  e:String (default = null) — 如果是点击默认关闭按钮触发，则传入关闭按钮的名字(name)，否则为null
     */
    gameOver.prototype.onClosed = function (e) {
        if (e === void 0) { e = null; }
        console.log("closed OK! $$$$$$$$$$$");
    };
    /** 打开完成后 */
    gameOver.prototype.onOpened = function () {
        this.fraction.text = this.Game.inGameView.fraction.text;
        console.log("open OK! $$$$$$$$$$$");
    };
    return gameOver;
}(ui.gameOverUI));
//# sourceMappingURL=gameOver.js.map