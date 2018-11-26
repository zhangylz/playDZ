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
    /**
     * 构造初始化
     * @param game 传入游戏中控
     * @param dataCenter 数据中控
     */
    function GameHome(game, dataCenter) {
        var _this = _super.call(this) || this;
        /** 时间线 */
        _this.timerLine = new Laya.TimeLine();
        /** 邀请好礼 */
        _this.inviteGift = new inviteGift();
        /** 我的红包 */
        _this.myHB = new myHB();
        /** 每日奖励 */
        _this.dailyGift = new dailyGift;
        /** 玩法介绍 */
        _this.playDialog = new playDialog();
        /** 倒计时时间 */
        _this.maxTimer = 0;
        _this.HbtimeLine = new Laya.TimeLine();
        // 初始化
        _this.Game = game;
        _this.dataCenter = dataCenter;
        _this.init();
        return _this;
    }
    /**
     * 初始化
     */
    GameHome.prototype.init = function () {
        // 时间线动画
        this.createTimerLine();
        //同步数据
        this.synchronousData();
        // 实例化皮肤界面
        this.ballSkinView = new ballSkinView(this.Game.ball);
        this.addChild(this.ballSkinView);
        // 先隐藏皮肤界面起来
        this.ballSkinView.visible = false;
        // 监听鼠标点击
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.myHBao); //我的红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.openDailyGift); //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //游戏推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.playJieShao); //玩法介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun); //邀请有礼
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //关闭音乐
        this.changeBallSkin.on(Laya.Event.MOUSE_DOWN, this, this.changeSkin); //球皮肤事件
        this.ranking.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //好友排行
        this.button_doAdd.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);
        this.startBox.on(Laya.Event.MOUSE_DOWN, this, this.startTest); //开始游戏
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
            // console.log("时间到，可以领红包");
            // 关闭红包倒计时
            Laya.timer.clear(this, this.HBcountdown);
            // 给红包价格时间线 目的为了醒目
            this.HbtimeLine.addLabel("big", 0).to(this.my_hb, { scaleX: 1.5, scaleY: 1.5 }, 200, null, 0)
                .addLabel("small", 0).to(this.my_hb, { scaleX: 1, scaleY: 1 }, 200, null, 0);
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
    /** 邀请有礼点击事件 */
    GameHome.prototype.inviteFun = function (e) {
        //判断是否显示 否就显示
        if (this.inviteGift.isPopup != true) {
            this.inviteGift.popup();
        }
        return this;
    };
    /** 玩法介绍 */
    GameHome.prototype.playJieShao = function () {
        // 判断是否显示 否就显示
        if (this.playDialog.isPopup != true) {
            this.playDialog.popup();
        }
    };
    /** 每日奖励 */
    GameHome.prototype.openDailyGift = function () {
        this.dailyGift.popup();
        return this;
    };
    /** 我的红包 */
    GameHome.prototype.myHBao = function () {
        this.myHB.popup();
    };
    /** 开始游戏 */
    GameHome.prototype.startTest = function () {
        var VX = Laya.stage.mouseX;
        this.Game.startGame(VX);
        this.visible = false;
        console.log("start game gameHome " + VX);
    };
    /** 同步数据 */
    GameHome.prototype.synchronousData = function () {
        // 同步数据数据
        this.doNumber.text = String(this.dataCenter.doNumber);
        this.bigFraction.text = String(this.dataCenter.bigFraction);
        // 设置居中
        this.box_fraction.getBounds();
        return this;
    };
    /** 换皮肤 */
    GameHome.prototype.changeSkin = function () {
        this.ballSkinView.visible = true;
    };
    return GameHome;
}(ui.gameHomeUI));
//# sourceMappingURL=GameHome.js.map