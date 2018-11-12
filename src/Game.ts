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
    constructor() {
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
        // 添加三条测试对比线
        this.fy = this.ladderArr.ladderArr_heigth;
        // 添加测试对比线
        this.drawSomething1();
        this.drawSomething2();
        this.drawSomething3();
        // 监听鼠标活动
        this.onMouse = new OnMouse(Laya.stage, this.ball);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startGame);
    }
    // 测试对比线1
    private drawSomething1(): void {
        let sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(184.9376022243369, this.fy, 0, this.fy + 390.15345030660546, "#2F4F4F", 2);
    }
    // 测试对比线2
    private drawSomething2(): void {
        let sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(184.9376022243369 + 350.12479555132626, this.fy, 720, this.fy + 390.15345030660546, "#2F4F4F", 2);
    }
    // 测试对比线3
    private drawSomething3(): void {
        let sp = new Laya.Sprite();
        Laya.stage.addChild(sp);
        //画直线
        sp.graphics.drawLine(Laya.stage.width / 2, this.fy, Laya.stage.width / 2, this.fy + 390.15345030660546, "#2F4F4F", 2);
    }

    /**
     * 开始游戏
     */
    private startGame(e: Laya.Event): void {
        if (this.gameHome.visible === false) {
            console.log("start Game");
            Laya.timer.frameLoop(1, this, this.startDowm);
        }
    }
    /**开始下降 */
    private startDowm(): void {
        this.ladderArr.startDowm();
        this.ball.ballUp(4);
    }


}

// 开始游戏
// new Game();