/**
 * 演示demo
 */
class Demo {
    private myHB: myHB;
    // 构造器
    constructor() {
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show(640, 0);
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/ladder/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas", 
    "res/atlas/invite_gift.atlas", "res/atlas/Game_Settlement.atlas", "res/atlas/myHbao.atlas", "res/atlas/everyDay.atlas"], Laya.Handler.create(this, this.onLoad));
    }

    // 加载完成
    private onLoad(set: Laya.ParticleSetting): void {
        this.myHB = new myHB();
        this.myHB.visible = true;
        Laya.stage.addChild(this.myHB);
    }
}

// 演示Demo
new Demo();