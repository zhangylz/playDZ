/**
 * 开始游戏
 */
var Game = (function () {
    function Game() {
        /** 开始的阶梯编号 */
        this.ladderN = 4;
        // 适配微信小游戏
        Laya.MiniAdpter.init();
        // 初始化引擎
        Laya.init(640, 1136, Laya.WebGL);
        // 性能面板
        // Laya.Stat.show(0, 0);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas"], Laya.Handler.create(this, this.onLoad));
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
        // 实例化游戏中的界面
        this.inGameView = new inGameView();
        this.inGameView.visible = false; //先隐藏起来
        Laya.stage.addChild(this.inGameView);
        // 添加三条测试对比线
        this.fy = this.ladderArr.ladderArr_heigth;
        // 监听鼠标活动
        this.spriteCollision = new spriteCollision();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
    };
    /**
     * 开始游戏
     */
    Game.prototype.startGame = function (e) {
        this.inGameView.visible = true;
        this.gameHome.visible === false;
        console.log("start Game");
        Laya.timer.frameLoop(1, this, this.startDowm);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    };
    /**开始下降 */
    Game.prototype.startDowm = function () {
        this.ladderArr.startDowm();
        this.ladderN = this.ball.ballUp(4, this.inGameView.fraction);
        var ladder = this.ladderArr._childs[this.ladderN];
        // 碰撞测试
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    };
    //监听鼠标移动
    Game.prototype.mouseMove = function () {
        this.ball.x = Laya.stage.mouseX;
    };
    return Game;
}());
// 开始游戏
new Game();
//# sourceMappingURL=Game.js.map