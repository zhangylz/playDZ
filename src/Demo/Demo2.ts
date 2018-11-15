/** 演示2 */
class Demo2 {
    private inviteGift: inviteGift;
    constructor() {
        Laya.init(640, 1164, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/invite_gift.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    private onLoad() {
        this.inviteGift = new inviteGift();
        // Laya.stage.addChild(this.inviteGift);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.test);
    }
    private test(e: Laya.Event) {
        if (this.inviteGift.isPopup == false) {
            this.inviteGift.popup();
        } else {
            this.inviteGift.close();
        }
    }
}

// new Demo2();