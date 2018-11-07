var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏主界面
 */
var GameHome = (function (_super) {
    __extends(GameHome, _super);
    function GameHome() {
        var _this = _super.call(this) || this;
        _this.timerLine = new Laya.TimeLine;
        // 初始化
        _this.init();
        return _this;
    }
    /**
     * 初始化
     */
    GameHome.prototype.init = function () {
        // 时间线动画
        this.createTimerLine();
        // 监听鼠标点击 
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //邀请
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //关闭音乐
        this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //游戏主页界面
    };
    /**
     * 鼠标点击绑定出发的事件
     * @param e
     */
    GameHome.prototype.mouseDowm = function (e) {
        var name = e.target.name;
        switch (name) {
            case "my_hb":
                console.log("红包事件");
                break;
            case "reward":
                console.log("每日奖励事件");
                break;
            case "tuiqian":
                console.log("推荐事件");
                break;
            case "jieshao":
                console.log("介绍事件");
                break;
            case "invite":
                console.log("邀请事件");
                break;
            case "music_off":
                console.log("关闭音乐事件");
                break;
            default:
                this.visible = false;
                console.log("开始游戏");
        }
    };
    /**
     * 时间线的指示动画,左右滑动控制球
     */
    GameHome.prototype.createTimerLine = function () {
        this.timerLine.addLabel("rigth", 0).to(this.guide, { x: 470, y: this.boot_prompt.y }, 1500, null, 0)
            .addLabel("left", 0).to(this.guide, { x: 250, y: this.boot_prompt.y }, 1500, null, 0);
        // 播放滑动动画并循环
        this.timerLine.play(0, true);
    };
    return GameHome;
}(ui.gameViewUI));
//# sourceMappingURL=GameHome.js.map