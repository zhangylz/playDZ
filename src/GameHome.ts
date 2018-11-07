/**
 * 游戏主界面
 */
class GameHome extends ui.gameViewUI {
    private timerLine = new Laya.TimeLine;
    constructor() {
        super();
        // 初始化
        this.init();
    }
    /**
     * 初始化
     */
    private init() {
        // 时间线动画
        this.createTimerLine();
        // 监听鼠标点击 
        this.my_hb.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);     //红包
        this.reward.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);    //每日奖励
        this.tuiqian.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);   //推荐
        this.jieshao.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);   //介绍
        this.invite.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);    //邀请
        this.music_off.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm); //关闭音乐
        this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);           //游戏主页界面
    }
    /**
     * 鼠标点击绑定出发的事件
     * @param e 
     */
    private mouseDowm(e: Laya.Event): void {
        let name = e.target.name;
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

    }

    /**
     * 时间线的指示动画,左右滑动控制球
     */
    private createTimerLine(): void {
        this.timerLine.addLabel("rigth", 0).to(this.guide, { x: 470, y: this.boot_prompt.y }, 1500, null, 0)
            .addLabel("left", 0).to(this.guide, { x: 250, y: this.boot_prompt.y }, 1500, null, 0);
        // 播放滑动动画并循环
        this.timerLine.play(0, true);
    }





}