/** 演示2 */
class Demo2 {
    private myHB: myHB;
    constructor() {
         // 适配微信小游戏
        Laya.MiniAdpter.init();
        Laya.init(640, 1164, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/myHBao.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    private onLoad() {
        this.myHB = new myHB();
        // Laya.stage.addChild(this.inviteGift);
        this.myHB.popup();
    }
}

// new Demo2();