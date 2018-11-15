/**
 * 演示demo
 */
var Demo = (function () {
    // 构造器
    function Demo() {
        this.timer = 0;
        this.ladderN = 4;
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show(640, 0);
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/atlas/inGame.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    Demo.prototype.onLoad = function (set) {
        this.ladderArr = new LadderArr(Laya.stage.height);
        this.ladderArr.pos(0, 350);
        this.inGameView = new inGameView();
        this.ball = new Ball();
        Laya.stage.addChild(this.ladderArr);
        Laya.stage.addChild(this.inGameView);
        Laya.stage.addChild(this.ball);
        Laya.timer.frameLoop(1, this, this.testDowm);
        this.startFrame = Laya.timer.currFrame;
        this.spriteCollision = new spriteCollision();
    };
    Demo.prototype.testDowm = function (e) {
        this.timer++;
        this.ladderArr.startDowm();
        // 测试碰撞
        this.collision();
        // console.log(this.ladderN + "\t$$$\t" + Laya.timer.currFrame);
    };
    /** 测试碰撞 */
    Demo.prototype.collision = function () {
        var ladderArr = this.ladderArr._childs;
        var newLadderN = this.ball.ballUp(this.ladderN, this.inGameView.fraction);
        if (newLadderN != this.ladderN) {
            this.ladderN = newLadderN;
        }
        var ladder = ladderArr[newLadderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    };
    return Demo;
}());
// 演示Demo
// new Demo(); 
//# sourceMappingURL=Demo.js.map