/**
 * 演示demo
 */
class Demo {
    public LadderArr: LadderArr;
    // 构造器
    constructor() {
        // 适配微信小游戏
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show(0, 0);
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/ladder/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas",
            "res/atlas/invite_gift.atlas", "res/atlas/Game_Settlement.atlas", "res/atlas/myHbao.atlas", "res/atlas/everyDay.atlas", "res/atlas/one_Hbao.atlas"
            , "res/atlas/ball_skin.atlas"], Laya.Handler.create(this, this.onLoad));
    }

    // 加载完成
    private onLoad(set: Laya.ParticleSetting): void {
        this.LadderArr = new LadderArr(Laya.stage.height);
        Laya.stage.addChild(this.LadderArr);
    }
}

// 演示Demo
// new Demo();