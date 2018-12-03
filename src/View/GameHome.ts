/**
 * 游戏主界面
 */
class GameHome extends ui.gameHomeUI {
    /** 红包余额 */
    public hb_money: Laya.Label;
    /** 时间线 */
    private timerLine = new Laya.TimeLine();
    /** 邀请好礼 */
    public inviteGift = new inviteGift();
    /** 我的红包 */
    public myHB: myHB = new myHB();
    /** 每日奖励 */
    public dailyGift = new dailyGift();
    /** 最大分数 */
    public bigFraction: Laya.Label;
    /** 砖石数量 */
    public doNumber: Laya.Label;
    /** 玩法介绍 */
    public playDialog: playDialog;
    /** 数据中心 */
    public dataCenter: dataCenter;
    /** 皮肤页面 */
    public ballSkinView: ballSkinView;
    /** 游戏主控 */
    public Game: Game;
    /**
     * 构造初始化
     * @param game 传入游戏中控
     * @param dataCenter 数据中控
     */
    constructor(game: Game, dataCenter: dataCenter) {
        super();
        // 初始化
        this.Game = game;
        this.dataCenter = dataCenter;
        this.init();
    };
    /**
     * 初始化
     */
    public init() {
        // 时间线动画
        this.createTimerLine();
        //同步数据
        this.synchronousData();
        // 实例化皮肤界面
        this.ballSkinView = new ballSkinView(this.Game.ball);
        this.playDialog = new playDialog();
        this.addChild(this.ballSkinView);
        // 先隐藏皮肤界面起来
        this.ballSkinView.visible = false;
        // 监听鼠标点击
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.myHBao);                //我的红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.openDailyGift);        //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);           //游戏推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.playJieShao);         //玩法介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);            //邀请有礼
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.musicOFF);          //关闭音乐
        this.changeBallSkin.on(Laya.Event.MOUSE_DOWN, this, this.changeSkin);   //球皮肤事件
        this.ranking.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);           //好友排行
        this.button_doAdd.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);      //添加钻石
        // this.startBox.on(Laya.Event.MOUSE_DOWN, this, this.startTest);          //开始游戏
        this.starGame.on(Laya.Event.MOUSE_DOWN, this, this.startTest);
    };



    /**
     * 鼠标点击绑定出发的事件
     * @param e 
     */
    private mouseDowm(e: Laya.Event): void {
        console.log("测试测试");
    };

    /**
     * 时间线的指示动画,左右滑动控制球
     */
    private createTimerLine(): void {
        this.timerLine.addLabel("rigth", 0).to(this.guide, { x: 250, y: this.boot_prompt.y }, 1500, null, 0)
            .addLabel("left", 0).to(this.guide, { x: 50, y: this.boot_prompt.y }, 1500, null, 0);
        // 播放滑动动画并循环
        this.timerLine.play(0, true);
    };

    /** 邀请有礼点击事件 */
    private inviteFun(e: Laya.Event): GameHome {
        //判断是否显示 否就显示
        if (this.inviteGift.isPopup != true) {
            this.inviteGift.popup();
        }
        return this;
    };

    /** 玩法介绍 */
    private playJieShao(): void {
        // 判断是否显示 否就显示
        if (this.playDialog.isPopup != true) {
            this.playDialog.popup();
        }
    };

    /** 关闭音乐 */
    private musicOFF(): void {
        console.log("关闭音乐🎵");
        let that = this;
        that.Game.ApiDocking.getUser();
    };

    /** 每日奖励 */
    public openDailyGift(): GameHome {
        this.dailyGift.popup();
        return this;
    };

    /** 我的红包 */
    private myHBao(): void {
        this.myHB.updateMoney(this.dataCenter.balance).popup();
    };

    /** 开始游戏 */
    public startTest(): void {
        let VX = Laya.stage.mouseX
        this.Game.startGame(VX);
        this.visible = false;
        console.log("start game gameHome " + VX);
    };

    /** 同步数据 */
    public synchronousData(): GameHome {
        // 同步数据数据
        this.doNumber.text = String(this.dataCenter.doNumber);
        this.bigFraction.text = String(this.dataCenter.maxFraction);
        this.hb_money.text = String(this.dataCenter.balance);
        console.log("game home sysData ok!");
        return this;
    };

    /** 换皮肤 */
    private changeSkin(): void {
        this.ballSkinView.visible = true;
    };
}