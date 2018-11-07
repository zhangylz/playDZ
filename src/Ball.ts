import SoundManager = Laya.SoundManager;
/**
* 球精灵
*/
class Ball extends Laya.Box {
    // 球精灵
    private ball: Laya.Sprite;
    // 球影子精灵
    private ballShadow: Laya.Sprite;
    // 球宽度
    private ballWidth: number = 50;
    // 球高度
    private ballHeigth: number = this.ballWidth;
    // 球速度
    public ballSpeed: number;
    // 求的初始坐标
    private initialPoint: Laya.Point = new Laya.Point(335, 750);
    constructor() {
        super();
        // 球初始化
        this.init();
    }

    /**
     * 球初始化
     */
    private init(): void {
        // 在对象池创建一个球
        this.ball = Laya.Pool.getItemByClass("ball", Laya.Sprite);
        // 在对象池创建一个球阴影
        this.ballShadow = Laya.Pool.getItemByClass("ballShadow", Laya.Sprite);
        // 给容器命名
        this.name = "ballBox";
        // 添加球
        this.ballAdd();
        // 添加球影子
        this.ballShadowAdd();
        // 循环下落
        // Laya.timer.frameLoop(1, this, this.ballUp);
    }

    /**
     * 添加球精灵
     */
    private ballAdd(): void {
        //加载图片
        this.ball.loadImage("ladder/image_ball_red.png", 0, 0, this.ballWidth, this.ballHeigth);
        // 球精灵的高度
        this.ball.height = this.ballHeigth;
        // 球精灵的宽度
        this.ball.width = this.ballWidth;
        // 指定是否自动计算宽高数据
        this.ball.autoSize = true;
        // 球的边界
        let ballBounds = new Laya.Rectangle(0, 0, this.ballWidth, this.ballHeigth);
        // 设置对象在自身坐标系下的边界范围
        this.ball.setBounds(ballBounds);
        // 初始坐标
        this.ball.pos(this.initialPoint.x, this.initialPoint.y);
        // 球的名字
        this.ball.name = "ball";
        //添加到Box
        this.addChild(this.ball);
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


    // 向上的速度
    private upSpeed = 200 / 15;
    // 阴影缩放
    private bigS = 0.5 / 15;
    // 重力加速度    
    private gravity = 10 / 7;

    private test = 0;

    /**
     * 球跳动
     */
    public ballUp(): void {
        // 循环次数
        this.test++;
        // 球
        let ball: Laya.Sprite = this.ball;
        // 阴影
        let ballShadow: Laya.Sprite = this.ballShadow;
        // 重力加速
        // this.upSpeed += this.gravity;
        if (this.test % 15 == 0) {
            console.log(750 - ball.y + " &&&&&&&  " + this.test);
            // Laya.timer.clear(this, this.ballUp);
        }
        if (ball.y >= 750) {
            this.upSpeed *= -1;
        } else if (ball.y <= 550) {
            this.upSpeed *= -1;
        }
        ball.y += this.upSpeed;
    }

    /**
     * 球初始化 
     */
    public ballRect(): Ball {
        this.pos(this.initialPoint.x, this.initialPoint.y)
        return this;
    }
}