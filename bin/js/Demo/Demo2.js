/** 演示2 */
var Demo2 = (function () {
    function Demo2() {
        // 适配微信小游戏
        Laya.MiniAdpter.init();
        Laya.init(640, 1164, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/myHBao.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    Demo2.prototype.onLoad = function () {
    };
    return Demo2;
}());
// new Demo2(); 
//# sourceMappingURL=Demo2.js.map