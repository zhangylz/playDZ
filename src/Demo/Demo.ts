/**
 * 演示demo
 */
class Demo {
    private ball: Ball;
    private ladderArr: LadderArr;
    /**通告 */
    private notice: Laya.Text;
    private mouseMove: OnMouse;
    // 构造器
    constructor() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show();
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    private onLoad(set: Laya.ParticleSetting): void {
        this.ball = new Ball();
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        // 添加阶梯群
        Laya.stage.addChild(this.ladderArr);
        // 添加球
        Laya.stage.addChild(this.ball);
        // 添加文字
        this.addNotice();
        Laya.timer.frameLoop(1, this, this.test);
        // 开始检测碰撞
        this.spriteCollision = new spriteCollision();
        this.mouseMove = new OnMouse(Laya.stage, this.ball);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseDowm);
    }
    private ladderN: number = 4;

    // 测试碰撞
    private test(e: Laya.Timer): void {
        this.ladderArr.startDowm();
        this.ladderN = this.ball.ballUp(this.ladderN);
        let ladder: Ladder = this.ladderArr._childs[this.ladderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    }

    /**检测碰撞 */
    private spriteCollision: spriteCollision;
    private MouseDowm(): void {
        this.ball.x = Laya.stage.mouseX;
        // console.log("点击了 &&&&   " + Laya.stage.mouseX + "    ballx" + this.ball.x);
    }
    /**添加通告 */
    private addNotice(): void {
        this.notice = new Laya.Text;
        this.notice.text = "通告！";
        this.notice.fontSize = 40;
        this.notice.color = "#f8e4e4";
        this.notice.pos(360, 0);
        Laya.stage.addChild(this.notice);
    }
}

// 演示Demo
// new Demo();