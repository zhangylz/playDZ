/** 演示2 */
var Demo2 = (function () {
    function Demo2() {
        Laya.init(640, 1164, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/invite_gift.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    Demo2.prototype.onLoad = function () {
        this.inviteGift = new inviteGift();
        // Laya.stage.addChild(this.inviteGift);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.test);
    };
    Demo2.prototype.test = function (e) {
        if (this.inviteGift.isPopup == false) {
            this.inviteGift.popup();
        }
        else {
            this.inviteGift.close();
        }
    };
    return Demo2;
}());
// new Demo2(); 
//# sourceMappingURL=Demo2.js.map