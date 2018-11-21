/**
* 球精灵
*/
class Ball extends Laya.Sprite {
    /** 球精灵 */
    private ball: Laya.Sprite;
    /** 球影子精灵 */
    private ballShadow: Laya.Sprite;
    /** 球宽度 */
    public ballWidth: number = 50;
    /** 球高度 */
    private ballHeigth: number = this.ballWidth;
    /** 球速度 */
    public ballSpeed: number;
    /** 球的初始坐标 */
    private initialPoint: Laya.Point = new Laya.Point((640 - this.ballWidth) / 2, 705);
    /** 数据中控 */
    public dataCenter: dataCenter;

    /** @param dataCenter 数据中控 */
    constructor(dataCenter: dataCenter) {
        super();
        // 球初始化
        this.dataCenter = dataCenter;
        this.init();
    }

    /** 球初始化 */
    private init(): void {
        // 添加球
        this.ballAdd();
    }

    /** 添加球精灵 */
    private ballAdd(): void {
        //加载图片
        this.loadImage("ladder/image_ball_red.png", 0, 0, this.ballWidth, this.ballHeigth);
        // 球精灵的高度
        this.height = this.ballHeigth;
        // 球精灵的宽度
        this.width = this.ballWidth;
        // 指定是否自动计算宽高数据
        this.autoSize = true;
        // 球的边界
        let ballBounds = new Laya.Rectangle(0, 0, this.ballWidth, this.ballHeigth);
        // 设置对象在自身坐标系下的边界范围
        this.setBounds(ballBounds);
        // 初始坐标
        this.pos(this.initialPoint.x, this.initialPoint.y);
        // 球的名字
        this.name = "ball";
    }

    /**
     * 添加球阴影精灵
     */
    private ballShadowAdd(): void {
        // 加载图片
        this.ballShadow.loadImage("ladder/image_oval_black.png", 0, 0, 50, 20);
        // 影子精灵的高度
        this.ballShadow.height = 20;
        // 影子精灵的宽度
        this.ballShadow.width = 50;
        // 是否自动计算宽高
        this.ballShadow.autoSize = true;
        // 影子的边界
        let ballShadowBounds = new Laya.Rectangle(0, 0, 50, 20);
        // 设置对象在自身坐标系下的边界范围
        this.ballShadow.setBounds(ballShadowBounds);
        // 初始坐标
        this.ballShadow.pos(this.ball.x, this.initialPoint.y + 50);
        // 设置初始化为1
        this.ballShadow.scale(1, 1);
        // 影子的名字
        this.ballShadow.name = "ballShadow";
        // 添加到Box
        this.addChild(this.ballShadow);
    }


    /** 向上的速度 */
    private upSpeed = 20;
    /**重力加速度 */
    private gravity = 40 / 29;
    /**
     * 球跳动,下落的时候改变检测的阶梯编号
     * @param ladderN 传入阶梯的编号，初始是4
     * @param dataCenter 数据中控
     */
    public ballUp(ladderN: number): number {
        /** 阶梯编号 */
        let ladderNumber = ladderN;
        /** 寄存数据中控 */
        let data = this.dataCenter;
        // console.log("fraction:\t" + frac + "\t$$$$ width:\t" + fraction.width + "\t$$$$ x:\t" + fraction.x);
        // Y往上跳
        this.y -= this.upSpeed;
        this.upSpeed -= this.gravity;
        if (this.initialPoint.y - this.y < 1e-5) {
            // 开始弹回去
            this.y = this.initialPoint.y;
            this.upSpeed = 20;
            data.fraction += 1;
            this.onPlaySound();
        }
        if (this.upSpeed < 0 && this.upSpeed > -1) {
            ladderNumber--;
            if (ladderNumber < 0) {
                ladderNumber = 6;
                // console.log("阶梯编号初始化\t%%%%%%%%%%%%%%%%");
            }
            // console.log("开始下落\t$$$$$$\t" + ladderN);
        }
        // 更新分数
        // fraction.text = String(frac);
        //返回处理后编号
        return ladderNumber;
    }

    /** 播放音效 */
    public onPlaySound(): void {
        Laya.SoundManager.playSound("res/sounds/ballSounds.mp3", 1, new Laya.Handler(this, function(){console.log("bang bang!")}));
    }
    /** 球初始化 */
    public ballRect(): Ball {
        this.pos(this.initialPoint.x, this.initialPoint.y)
        return this;
    }
}