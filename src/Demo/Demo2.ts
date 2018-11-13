/** 演示2 */
class Demo2 {
    /** 阶梯群 */
    private ladderArr: LadderArr;
    /** 游戏中的view */
    private inGameView: inGameView;
    /** 球 */
    private ball: Ball;
    constructor() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "#EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.loader.load(["res/atlas/ladder.atlas", "res/atlas/inGame.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    /** 初始化 */
    private onLoad() {
        this.inGameView = new inGameView();
        this.ladderArr = new LadderArr(Laya.stage.height);
        this.ball = new Ball();
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        Laya.stage.addChild(this.inGameView);
        Laya.stage.addChild(this.ladderArr);
        Laya.stage.addChild(this.ball);
        this.inGameView.init();
        // 开始循环下降
        Laya.timer.frameLoop(1, this, this.dowm);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, function () {
            console.log("鼠标抬起");
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, function () { console.log("取消监听鼠标移动") });
        })
    }
    /** 下落 */
    private dowm(e: Laya.Event): void {
        this.ladderArr.startDowm();
        this.ball.ballUp(4, this.inGameView.fraction);
    }
    /** 球的X坐标 */
    private VX: number;
    /** 鼠标按下 */
    private mouseDown(e: Laya.Event): void {
        console.log("按下");
        this.VX = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove)
    }
    /** 鼠标移动 */
    private mouseMove(e: Laya.Event): void {
        console.log("鼠标移动");
    }
}

// new Demo2();