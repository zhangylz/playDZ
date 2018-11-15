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
        _this.timerLine = new Laya.TimeLine();
        _this.inviteGift = new inviteGift();
        /** 倒计时时间 */
        _this.maxTimer = 0;
        _this.HbtimeLine = new Laya.TimeLine();
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
        this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //游戏主页界面
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun); //邀请
        this.changeBallSkin.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //球皮肤事件
        this.ranking.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //排行榜
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //关闭音乐
        this.startBox.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
        //时钟倒计时
        Laya.timer.loop(1000, this, this.HBcountdown);
    };
    /** 红包倒计时 */
    GameHome.prototype.HBcountdown = function (e) {
        var maxTimer = this.maxTimer;
        if (maxTimer >= 0) {
            var min = String(Math.floor(maxTimer / 60));
            if (min.length == 1) {
                min = "0" + min;
            }
            ;
            var s = String(Math.floor(maxTimer % 60));
            if (s.length == 1) {
                s = "0" + s;
            }
            ;
            var msg = min + ":" + s;
            this.hb_timer.text = msg;
            --maxTimer;
        }
        else {
            console.log("时间到，可以领红包");
            // 关闭红包倒计时
            Laya.timer.clear(this, this.HBcountdown);
            // 给红包价格时间线 目的为了醒目
            this.HbtimeLine.addLabel("big", 0).to(this.my_hb, { x: 10, y: 10, scaleX: 1.5, scaleY: 1.5 }, 200, null, 0)
                .addLabel("small", 0).to(this.my_hb, { x: 25, y: 20, scaleX: 1, scaleY: 1 }, 200, null, 0);
            this.HbtimeLine.play(0, true);
        }
        // 刷新倒计时的时间
        this.maxTimer = maxTimer;
        return this;
    };
    /**
     * 鼠标点击绑定出发的事件
     * @param e
     */
    GameHome.prototype.mouseDowm = function (e) {
        console.log("测试测试");
    };
    /**
     * 时间线的指示动画,左右滑动控制球
     */
    GameHome.prototype.createTimerLine = function () {
        this.timerLine.addLabel("rigth", 0).to(this.guide, { x: 250, y: this.boot_prompt.y }, 1500, null, 0)
            .addLabel("left", 0).to(this.guide, { x: 50, y: this.boot_prompt.y }, 1500, null, 0);
        // 播放滑动动画并循环
        this.timerLine.play(0, true);
    };
    /** 邀请按钮点击事件 */
    GameHome.prototype.inviteFun = function (e) {
        if (this.inviteGift.isPopup == false) {
            this.inviteGift.popup();
        }
        return this;
    };
    GameHome.prototype.startGame = function () {
        this.visible = false;
        console.log("close View, start Game!! gogo!!");
    };
    return GameHome;
}(ui.gameHomeUI));
//# sourceMappingURL=gameHome.js.map