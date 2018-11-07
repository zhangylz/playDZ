/**
 * 演示demo
 */

class Demo {
    private ball: Laya.Sprite;
    private ladderArr: LadderArr;
    // 构造器
    constructor() {
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "FFBBFF";
        Laya.stage.scaleMode = "showall";
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    private onLoad(set: Laya.ParticleSetting): void {
        this.ball = new Ball()._childs[0] as Laya.Sprite;
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        Laya.stage.addChild(this.ball);
        Laya.stage.addChild(this.ladderArr);
        Laya.timer.frameLoop(1, this, this.test);
    }

    private n: number = 0;
    private test(e: Laya.Timer): void {
        if (this.ladderArr._childs[0].y > 926) {
            Laya.timer.clear(this, this.test);
            console.log(" $$$$$$$$  " + this.n + " $$$$$$$$ ");
        }
        this.n++;
        this.ladderArr.startDowm();
    }
}


// 演示Demo
new Demo();