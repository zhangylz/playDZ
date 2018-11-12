/**
 * 演示demo
 */
var Demo = (function () {
    // 构造器
    function Demo() {
        this.ladderN = 4;
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show();
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    Demo.prototype.onLoad = function (set) {
        this.ball = new Ball();
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        // 添加阶梯群
        Laya.stage.addChild(this.ladderArr);
        // 添加球
        Laya.stage.addChild(this.ball);
        // 添加文字
        this.addNotice();
        Laya.timer.frameLoop(1, this, this.test);
        // 开始检测碰撞
        this.spriteCollision = new spriteCollision();
        this.mouseMove = new OnMouse(Laya.stage, this.ball);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseDowm);
    };
    // 测试碰撞
    Demo.prototype.test = function (e) {
        this.ladderArr.startDowm();
        this.ladderN = this.ball.ballUp(this.ladderN);
        var ladder = this.ladderArr._childs[this.ladderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    };
    Demo.prototype.MouseDowm = function () {
        this.ball.x = Laya.stage.mouseX;
        // console.log("点击了 &&&&   " + Laya.stage.mouseX + "    ballx" + this.ball.x);
    };
    /**添加通告 */
    Demo.prototype.addNotice = function () {
        this.notice = new Laya.Text;
        this.notice.text = "通告！";
        this.notice.fontSize = 40;
        this.notice.color = "#f8e4e4";
        this.notice.pos(360, 0);
        Laya.stage.addChild(this.notice);
    };
    return Demo;
}());
// 演示Demo
new Demo();
//# sourceMappingURL=Demo.js.map