/**
 * 开始游戏
 */
var Game = (function () {
    function Game() {
        /** 要加载的资源 */
        this.needResources = ["res/atlas/ladder.atlas", "res/ladder/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas",
            "res/atlas/invite_gift.atlas", "res/atlas/Game_Settlement.atlas", "res/atlas/myHbao.atlas", "res/atlas/everyDay.atlas", "res/atlas/player.atlas",
            "res/atlas/ball_skin.atlas"];
        /** 初始的阶梯编号 */
        this.ladderN = 4;
        // 适配微信小游戏
        Laya.MiniAdpter.init();
        // 初始化引擎
        Laya.init(640, 1136, Laya.WebGL);
        // 性能面板
        // Laya.Stat.show(640, 0);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        // 预加载资源
        Laya.loader.load(this.needResources, Laya.Handler.create(this, this.init));
    }
    /** 初始化 */
    Game.prototype.init = function () {
        Laya.stage.name = "Stage";
        // 初始化数据中控
        this.dataCenter = new dataCenter();
        // 实例化一个阶梯群
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, 350);
        // 添加到舞台
        Laya.stage.addChild(this.ladderArr);
        // 实例化一个球
        this.ball = new Ball(this.dataCenter);
        // 添加到舞台
        Laya.stage.addChild(this.ball);
        // 实例化游戏主界面
        this.gameHome = new GameHome(this, this.dataCenter);
        // 添加游戏主界面到舞台
        Laya.stage.addChild(this.gameHome);
        // 实例化游戏中的界面
        this.inGameView = new inGameView(this.dataCenter);
        Laya.stage.addChild(this.inGameView); //添加到舞台
        this.gameOverDia = new gameOver(this, this.dataCenter); //游戏结束的弹窗
        // 监听碰撞
        this.spriteCollision = new spriteCollision(this.ball, this.dataCenter);
        // 实例化数据中心
    };
    /**
     * 开始游戏
     *@param VX 传入在gameHome的鼠标X坐标
      */
    Game.prototype.startGame = function (VX) {
        this.inGameView.visible = true;
        this.VX = VX;
        Laya.timer.frameLoop(1, this, this.startDowm);
        // 监听鼠标
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUP); //监听鼠标抬起
    };
    /** 监听鼠标 */
    Game.prototype.monitorMouse = function () {
        return this;
    };
    /** 开始下降 */
    Game.prototype.startDowm = function () {
        //阶梯开始循环下降
        this.ladderArr.startDowm();
        // 检测碰撞
        this.collision();
        this.inGameView.init();
    };
    /** 鼠标按下 */
    Game.prototype.mouseDown = function () {
        // 开始游戏
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.VX = Laya.stage.mouseX;
    };
    /** 鼠标抬起 */
    Game.prototype.mouseUP = function () {
        // 取消移动监听
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.VX = null;
    };
    //监听鼠标移动
    Game.prototype.mouseMove = function () {
        var addX = Laya.stage.mouseX - this.VX;
        this.ball.x += addX;
        if (this.ball.x < -40) {
            this.ball.x = 10;
        }
        else if (this.ball.x > 630) {
            this.ball.x = 630;
        }
        // 刷新记载VX
        this.VX = Laya.stage.mouseX;
    };
    /** 碰撞检测 */
    Game.prototype.collision = function () {
        // 寄存阶梯群
        var ladderArr = this.ladderArr._childs;
        // 下落的时候返回新的阶梯编号
        var newLadderN = this.ball.ballUp(this.ladderN);
        if (newLadderN != this.ladderN) {
            this.ladderN = newLadderN;
        }
        var ladder = ladderArr[newLadderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint();
        /** 是否碰撞  type: boolean */
        var resultCollision = this.spriteCollision.resultCollision;
        //如果碰撞了
        if (resultCollision == true) {
            this.gameOver();
        }
    };
    /** 游戏结束 */
    Game.prototype.gameOver = function () {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        Laya.timer.clear(this, this.startDowm);
        this.gameHome.synchronousData(); //同步游戏主页的数据
        console.log("Game Over!");
        // 显示死亡弹窗
        this.gameOverDia.Opened().show();
        return this;
    };
    /** 游戏重置 */
    Game.prototype.gameReset = function () {
        this.gameHome.synchronousData();
        this.dataCenter.dataRest();
        this.ball.ballRect();
        this.ladderArr.ladderArrRect().init();
        this.ladderN = 4;
        this.spriteCollision.resultCollision = false;
        // this.inGameView.init();
        console.log("game Reset!");
        return this;
    };
    return Game;
}());
// 开始游戏
new Game();
//# sourceMappingURL=Game.js.map