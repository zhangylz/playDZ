/** 演示2 */
var Demo2 = (function () {
    function Demo2() {
        Laya.init(640, 1164, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/myHBao.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    Demo2.prototype.onLoad = function () {
        this.myHB = new myHB();
        // Laya.stage.addChild(this.inviteGift);
        this.myHB.popup();
    };
    return Demo2;
}());
// new Demo2(); 
//# sourceMappingURL=Demo2.js.map