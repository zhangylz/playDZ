/**
 * 演示demo
 */
class Demo {
    private ball: Ball;
    private ladderArr: LadderArr;
    private ladder: Ladder;
    private inGameView: inGameView;
    private spriteCollision: spriteCollision;
    // 构造器
    constructor() {
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.bgColor = "EEE9E9";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show(640, 0);
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/atlas/inGame.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    private onLoad(set: Laya.ParticleSetting): void {
        this.ladderArr = new LadderArr(Laya.stage.height);
        this.ladderArr.pos(0, 350)
        this.inGameView = new inGameView();
        this.ball = new Ball();
        Laya.stage.addChild(this.ladderArr);
        Laya.stage.addChild(this.inGameView);
        Laya.stage.addChild(this.ball);
        Laya.timer.frameLoop(1, this, this.testDowm);
        this.startFrame = Laya.timer.currFrame;
        this.spriteCollision = new spriteCollision();
    }

    private timer: number = 0;
    private startFrame: number;
    private testDowm(e: Laya.Event) {
        this.timer++;
        this.ladderArr.startDowm();
        // 测试碰撞
        this.collision();
        // console.log(this.ladderN + "\t$$$\t" + Laya.timer.currFrame);
    }
    private ladderN: number = 4;
    /** 测试碰撞 */
    private collision(): void {
        let ladderArr: Array<Ladder> = this.ladderArr._childs as Array<Ladder>;
        let newLadderN: number = this.ball.ballUp(this.ladderN, this.inGameView.fraction);
        if (newLadderN != this.ladderN) {
            this.ladderN = newLadderN;
        }
        let ladder = ladderArr[newLadderN];
        this.spriteCollision.init(ladder);
        this.spriteCollision.sprCenterPoint(this.ball);
    }

}

// 演示Demo
// new Demo();