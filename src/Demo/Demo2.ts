/** 演示2 */
class Demo2 {
    private gameHome: GameHome;
    constructor() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    private onLoad() {
        this.gameHome = new GameHome();
        Laya.stage.addChild(this.gameHome);
    }
}

new Demo2();