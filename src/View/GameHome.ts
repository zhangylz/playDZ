/**
 * 游戏主界面
 */
class GameHome extends ui.gameHomeUI {
    /** 红包倒计时 */
    public hb_timer: Laya.Text;
    /** 时间线 */
    private timerLine = new Laya.TimeLine();
    /** 邀请好礼 */
    public inviteGift = new inviteGift();
    /** 我的红包 */
    public myHB = new myHB();
    /** 每日奖励 */
    public dailyGift = new dailyGift;
    /** 最大分数 */
    public bigFraction: Laya.Text;
    /** 砖石数量 */
    public doNumber: Laya.Text;
    /** 玩法介绍 */
    public playDialog: playDialog = new playDialog();

    /** 游戏主控 */
    public Game: Game;
    constructor(game?: Game) {
        super();
        // 初始化
        this.init();
        this.Game = game;
    }
    /**
     * 初始化
     */
    public init() {
        // 时间线动画
        this.createTimerLine();
        //同步数据
        this.synchronousData();
        // 监听鼠标点击
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.myHBao);                //我的红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.openDailyGift);        //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);           //游戏推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.playJieShao);           //玩法介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);            //邀请有礼
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);         //关闭音乐
        this.changeBallSkin.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);    //球皮肤事件
        this.ranking.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);           //好友排行
        this.startBox.on(Laya.Event.MOUSE_DOWN, this, this.startTest);          //开始游戏
        //时钟倒计时
        Laya.timer.loop(1000, this, this.HBcountdown);
    }
    /** 倒计时时间 */
    public maxTimer: number = 0;
    private HbtimeLine = new Laya.TimeLine();
    /** 红包倒计时 */
    public HBcountdown(e: Laya.Event): this {
        let maxTimer = this.maxTimer;
        if (maxTimer >= 0) {
            let min = String(Math.floor(maxTimer / 60));
            if (min.length == 1) { min = "0" + min };
            let s = String(Math.floor(maxTimer % 60));
            if (s.length == 1) { s = "0" + s };
            let msg: string = min + ":" + s;
            this.hb_timer.text = msg;
            --maxTimer;
        } else {
            // console.log("时间到，可以领红包");
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
    }

    /**
     * 鼠标点击绑定出发的事件
     * @param e 
     */
    private mouseDowm(e: Laya.Event): void {
        console.log("测试测试");
    }

    /**
     * 时间线的指示动画,左右滑动控制球
     */
    private createTimerLine(): void {
        this.timerLine.addLabel("rigth", 0).to(this.guide, { x: 250, y: this.boot_prompt.y }, 1500, null, 0)
            .addLabel("left", 0).to(this.guide, { x: 50, y: this.boot_prompt.y }, 1500, null, 0);
        // 播放滑动动画并循环
        this.timerLine.play(0, true);
    }

    /** 邀请有礼点击事件 */
    private inviteFun(e: Laya.Event): GameHome {
        //判断是否显示 否就显示
        if (this.inviteGift.isPopup != true) {
            this.inviteGift.popup();
        }
        return this;
    }

    /** 玩法介绍 */
    private playJieShao(): void {
        // 判断是否显示 否就显示
        if (this.playDialog.isPopup != true) {
            this.playDialog.popup();
        }
    }

    /** 每日奖励 */
    public openDailyGift(): GameHome {
        this.dailyGift.popup();
        return this;
    }

    /** 我的红包 */
    private myHBao(): void {
        this.myHB.popup();
    }

    /** 开始游戏 */
    public startTest(): void {
        let VX = Laya.stage.mouseX
        this.Game.startGame(VX);
        this.visible = false;
        console.log("start game gameHome " + VX);
    }

    /** 同步数据 */
    public synchronousData(): GameHome {
        // 更新数据
        this.doNumber.text = String(888);
        this.bigFraction.text = String(999);
        return this;
    }

}