/**
 * 开始游戏
 */
class Game {
    /** 精灵球 */
    public ball: Ball;
    /** 测试碰撞 */
    public spriteCollision: spriteCollision;
    /** 主界面 */
    public gameHome: GameHome;
    /** 阶梯群 */
    public ladderArr: LadderArr;
    /** 游戏中的界面 */
    public inGameView: inGameView;
    /** 死亡的弹窗 */
    private gameOverDia: gameOver;
    /** 要加载的资源 */
    public needResources: Array<string> = ["res/atlas/ladder.atlas", "res/ladder/image_ladder.png", "res/atlas/gameHome.atlas", "res/atlas/inGame.atlas", 
    "res/atlas/invite_gift.atlas", "res/atlas/Game_Settlement.atlas", "res/atlas/myHbao.atlas", "res/atlas/everyDay.atlas", "res/atlas/player.atlas"];
    constructor() {
        // 适配微信小游戏
        Laya.MiniAdpter.init();
        // 初始化引擎
        Laya.init(640, 1136, Laya.WebGL);
        // 性能面板
        // Laya.Stat.show(640, 0);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        // 预加载资源
        Laya.loader.load(this.needResources, Laya.Handler.create(this, this.init));
    }

    /** 初始化 */
    public init(): void {
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
        this.gameHome = new GameHome(this);
        // 添加游戏主界面到舞台
        Laya.stage.addChild(this.gameHome);
        // 实例化游戏中的界面
        this.inGameView = new inGameView();
        this.inGameView.visible = false;        //先隐藏起来
        Laya.stage.addChild(this.inGameView);   //添加到舞台
        this.gameOverDia = new gameOver(this);     //游戏结束的弹窗
        // 监听碰撞
        this.spriteCollision = new spriteCollision();
    }

    /** 
     * 开始游戏
     *@param VX 传入在gameHome的鼠标X坐标 
      */
    public startGame(VX?: number): void {
        this.VX = VX;
        this.inGameView.visible = true;
        Laya.timer.frameLoop(1, this, this.startDowm);
        // 监听鼠标
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUP);     //监听鼠标抬起
    }

    /** 监听鼠标 */
    public monitorMouse(): Game {
        return this;
    }

    /** 开始下降 */
    public startDowm(): void {
        //阶梯开始循环下降
        this.ladderArr.startDowm();
        // 检测碰撞
        this.collision();
    }

    private VX: number;
    /** 鼠标按下 */
    private mouseDown(): void {
        // 开始游戏
        // this.startGame();
        console.log("mouse down");
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
        this.VX = Laya.stage.mouseX;
    }

    /** 鼠标抬起 */
    private mouseUP(): void {
        // 取消移动监听
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        this.VX = null;
    }

    //监听鼠标移动
    private mouseMove(): void {
        let addX = Laya.stage.mouseX - this.VX;
        this.ball.x += addX;
        if (this.ball.x < -40) {
            this.ball.x = 10;
        } else if (this.ball.x > 630) {
            this.ball.x = 630;
        }
        // 刷新记载VX
        this.VX = Laya.stage.mouseX;
    }
    /** 初始的阶梯编号 */
    public ladderN: number = 4;
    /** 碰撞检测 */
    private collision(): void {
        // 寄存阶梯群
        let ladderArr: Array<Ladder> = this.ladderArr._childs as Array<Ladder>;
        // 下落的时候返回新的阶梯编号
        let newLadderN: number = this.ball.ballUp(this.ladderN, this.inGameView.fraction);
        if (newLadderN != this.ladderN) {
            this.ladderN = newLadderN;
        }
        let ladder = ladderArr[newLadderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
        /** 是否碰撞  type: boolean */
        let resultCollision: boolean = this.spriteCollision.resultCollision;
        //如果碰撞了
        if (resultCollision == true) { this.gameOver() }
    }

    /** 游戏结束 */
    public gameOver(): Game {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        Laya.timer.clear(this, this.startDowm);
        console.log("Game Over!");
        // 显示死亡弹窗
        this.gameOverDia.show();
        return this;
    }

    /** 游戏重置 */
    public gameReset(): Game {
        this.ball.ballRect();
        this.ladderArr.ladderArrRect().init();
        this.ladderN = 4;
        this.spriteCollision.resultCollision = false;
        // this.inGameView.init();
        console.log("game Reset!");
        return this;
    }


}

// 开始游戏
// new Game();