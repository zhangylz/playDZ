/**
 * 开始游戏
 */
class Game {
    /** 测试线的Y坐标 */
    private fy: number;
    /** 精灵球 */
    private ball: Ball;
    /** 监听鼠标活动 */
    private onMouse: OnMouse;
    /** 测试碰撞 */
    private spriteConllision: spriteCollision;
    /** 主界面 */
    private gameHome: GameHome;
    /** 阶梯群 */
    private ladderArr: LadderArr;
    /** 游戏中的界面 */
    private inGameView: inGameView;
    /** 碰撞测试 */
    private spriteCollision: spriteCollision;
    constructor() {
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
    private onLoad(): void {
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
        this.inGameView.visible = false;    //先隐藏起来
        Laya.stage.addChild(this.inGameView);
        // 添加三条测试对比线
        this.fy = this.ladderArr.ladderArr_heigth;
        // 监听鼠标活动
        this.spriteCollision = new spriteCollision();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
    }

    /**
     * 开始游戏
     */
    private startGame(e: Laya.Event): void {
        this.inGameView.visible = true;
        this.gameHome.visible === false;
        console.log("start Game");
        Laya.timer.frameLoop(1, this, this.startDowm);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
    }
    /** 开始的阶梯编号 */
    private ladderN: number = 4;
    /**开始下降 */
    private startDowm(): void {
        this.ladderArr.startDowm();
        this.ladderN = this.ball.ballUp(4, this.inGameView.fraction);
        let ladder: Ladder = this.ladderArr._childs[this.ladderN];
        // 碰撞测试
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    }

    //监听鼠标移动
    private mouseMove(): void {
        this.ball.x = Laya.stage.mouseX;
    }

}

// 开始游戏
new Game();