/**
 * 开始游戏
 */
var Game = (function () {
    function Game() {
        /** 要加载的资源 */
        this.needResources = ["res/atlas/ladder.atlas", "res/ladder/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas", "res/atlas/invite_gift.atlas"];
        /** 初始的阶梯编号 */
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
        Laya.loader.load(this.needResources, Laya.Handler.create(this, this.onLoad));
    }
    /** 加载回调 */
    Game.prototype.onLoad = function () {
        Laya.stage.name = "Stage";
        // 实例化一个阶梯群
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, 350);
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
        // 监听鼠标活动
        this.spriteCollision = new spriteCollision();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
    };
    /**
     * 开始游戏
     */
    Game.prototype.startGame = function (e) {
        /** 如果游戏主页已经隐藏那就开始游戏 */
        if (this.gameHome.visible == false) {
            this.inGameView.visible = true;
            console.log("start Game");
            Laya.timer.frameLoop(1, this, this.startDowm);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        }
    };
    /**开始下降 */
    Game.prototype.startDowm = function () {
        //阶梯开始循环下降
        this.ladderArr.startDowm();
        // 检测碰撞
        this.collision();
    };
    //监听鼠标移动
    Game.prototype.mouseMove = function () {
        this.ball.x = Laya.stage.mouseX;
    };
    /** 碰撞检测 */
    Game.prototype.collision = function () {
        // 寄存阶梯群
        var ladderArr = this.ladderArr._childs;
        // 下落的时候返回新的阶梯编号
        var newLadderN = this.ball.ballUp(this.ladderN, this.inGameView.fraction);
        if (newLadderN != this.ladderN) {
            this.ladderN = newLadderN;
        }
        var ladder = ladderArr[newLadderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
        //如果碰撞了
        if (this.spriteCollision.resultCollision == true) {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.startGame);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.timer.clearAll(this);
            console.log("Game Over!");
        }
    };
    return Game;
}());
// 开始游戏
new Game();
//# sourceMappingURL=Game.js.map