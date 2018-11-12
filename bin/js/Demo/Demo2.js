/** 演示2 */
var Demo2 = (function () {
    function Demo2() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    Demo2.prototype.onLoad = function () {
        this.gameHome = new GameHome();
        Laya.stage.addChild(this.gameHome);
    };
    return Demo2;
}());
new Demo2();
//# sourceMappingURL=Demo2.js.map