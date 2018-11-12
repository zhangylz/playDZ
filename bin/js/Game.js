/**
 * 开始游戏
 */
var Game = (function () {
    function Game() {
        // 初始化引擎
        Laya.init(720, 1280, Laya.WebGL);
        // 性能面板
        Laya.Stat.show(0, 0);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 加载回调 */
    Game.prototype.onLoad = function () {
        Laya.stage.name = "Stage";
        // 实例化一个阶梯群
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        // 添加到舞台
        Laya.stage.addChild(this.ladderArr);
        // 实例化一个球
        this.ball = new Ball();
        // 添加到舞台
        Laya.stage.addChild(this.ball);
        // 实例化游戏主界面
        this.gameHome = new GameHome();
        // 添加游戏主界面到舞台
        Laya.stage.addChild(this.gameHome);
        // 添加三条测试对比线
        this.fy = this.ladderArr.ladderArr_heigth;
        // 添加测试对比线
        this.drawSomething1();
        this.drawSomething2();
        this.drawSomething3();
        // 监听鼠标活动
        this.onMouse = new OnMouse(Laya.stage, this.ball);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
    };
    // 测试对比线1
    Game.prototype.drawSomething1 = function () {
        var sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(184.9376022243369, this.fy, 0, this.fy + 390.15345030660546, "#2F4F4F", 2);
    };
    // 测试对比线2
    Game.prototype.drawSomething2 = function () {
        var sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(184.9376022243369 + 350.12479555132626, this.fy, 720, this.fy + 390.15345030660546, "#2F4F4F", 2);
    };
    // 测试对比线3
    Game.prototype.drawSomething3 = function () {
        var sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(Laya.stage.width / 2, this.fy, Laya.stage.width / 2, this.fy + 390.15345030660546, "#2F4F4F", 2);
    };
    /**
     * 开始游戏
     */
    Game.prototype.startGame = function (e) {
        if (this.gameHome.visible === false) {
            console.log("start Game");
            Laya.timer.frameLoop(1, this, this.startDowm);
        }
    };
    /**开始下降 */
    Game.prototype.startDowm = function () {
        this.ladderArr.startDowm();
        this.ball.ballUp(4);
    };
    return Game;
}());
// 开始游戏
// new Game(); 
//# sourceMappingURL=Game.js.map