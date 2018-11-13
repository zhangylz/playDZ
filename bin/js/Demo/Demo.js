/**
 * 演示demo
 */
var Demo = (function () {
    // 构造器
    function Demo() {
        this.ladderN = 4;
        Laya.MiniAdpter.init();
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        // Laya.Stat.show();
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/inGame.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    Demo.prototype.onLoad = function (set) {
        this.ball = new Ball();
        this.inGameView = new inGameView();
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        // 添加阶梯群
        Laya.stage.addChild(this.ladderArr);
        // 添加球
        Laya.stage.addChild(this.ball);
        // 添加ingameview
        Laya.stage.addChild(this.inGameView);
        Laya.timer.frameLoop(1, this, this.testDown);
        // 开始检测碰撞
        this.spriteCollision = new spriteCollision();
        this.mouseMove = new OnMouse(Laya.stage, this.ball);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseDowm);
    };
    /** 测试碰撞 */
    Demo.prototype.testDown = function (e) {
        this.ladderArr.startDowm();
        this.ladderN = this.ball.ballUp(this.ladderN, this.inGameView.fraction);
        var ladder = this.ladderArr._childs[this.ladderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    };
    Demo.prototype.MouseDowm = function () {
        this.ball.x = Laya.stage.mouseX;
        // console.log("点击了 &&&&   " + Laya.stage.mouseX + "    ballx" + this.ball.x);
    };
    return Demo;
}());
// 演示Demo
// new Demo(); 
//# sourceMappingURL=Demo.js.map