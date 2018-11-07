/**
 * 演示demo
 */
var Demo = (function () {
    // 构造器
    function Demo() {
        this.n = 0;
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "FFBBFF";
        Laya.stage.scaleMode = "showall";
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    Demo.prototype.onLoad = function (set) {
        this.ball = new Ball()._childs[0];
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        Laya.stage.addChild(this.ball);
        Laya.stage.addChild(this.ladderArr);
        Laya.timer.frameLoop(1, this, this.test);
    };
    Demo.prototype.test = function (e) {
        if (this.ladderArr._childs[0].y > 926) {
            Laya.timer.clear(this, this.test);
            console.log(" $$$$$$$$  " + this.n + " $$$$$$$$ ");
        }
        this.n++;
        this.ladderArr.startDowm();
    };
    return Demo;
}());
// 演示Demo
new Demo();
//# sourceMappingURL=Demo.js.map