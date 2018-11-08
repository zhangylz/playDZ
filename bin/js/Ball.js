var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* 球精灵
*/
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        var _this = _super.call(this) || this;
        // 球宽度
        _this.ballWidth = 50;
        // 球高度
        _this.ballHeigth = _this.ballWidth;
        // 求的初始坐标
        _this.initialPoint = new Laya.Point(335, 750);
        // 向上的速度
        _this.upSpeed = 200 / 15;
        // 阴影缩放
        _this.bigS = 0.5 / 15;
        // 重力加速度    
        _this.gravity = 10 / 7;
        _this.test = 0;
        // 球初始化
        _this.init();
        return _this;
    }
    /**
     * 球初始化
     */
    Ball.prototype.init = function () {
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
    };
    /**
     * 添加球精灵
     */
    Ball.prototype.ballAdd = function () {
        //加载图片
        this.ball.loadImage("ladder/image_ball_red.png", 0, 0, this.ballWidth, this.ballHeigth);
        // 球精灵的高度
        this.ball.height = this.ballHeigth;
        // 球精灵的宽度
        this.ball.width = this.ballWidth;
        // 指定是否自动计算宽高数据
        this.ball.autoSize = true;
        // 球的边界
        var ballBounds = new Laya.Rectangle(0, 0, this.ballWidth, this.ballHeigth);
        // 设置对象在自身坐标系下的边界范围
        this.ball.setBounds(ballBounds);
        // 初始坐标
        this.ball.pos(this.initialPoint.x, this.initialPoint.y);
        // 球的名字
        this.ball.name = "ball";
        //添加到Box
        this.addChild(this.ball);
    };
    /**
     * 添加球阴影精灵
     */
    Ball.prototype.ballShadowAdd = function () {
        // 加载图片
        this.ballShadow.loadImage("ladder/image_oval_black.png", 0, 0, 50, 20);
        // 影子精灵的高度
        this.ballShadow.height = 20;
        // 影子精灵的宽度
        this.ballShadow.width = 50;
        // 是否自动计算宽高
        this.ballShadow.autoSize = true;
        // 影子的边界
        var ballShadowBounds = new Laya.Rectangle(0, 0, 50, 20);
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
    };
    /**
     * 球跳动
     */
    Ball.prototype.ballUp = function () {
        // 循环次数
        this.test++;
        // 球
        var ball = this.ball;
        // 阴影
        var ballShadow = this.ballShadow;
        // 重力加速
        // this.upSpeed += this.gravity;
        if (this.test % 15 == 0) {
            console.log(750 - ball.y + " &&&&&&&  " + this.test);
        }
        if (ball.y >= 750) {
            this.upSpeed *= -1;
        }
        else if (ball.y <= 550) {
            this.upSpeed *= -1;
        }
        ball.y += this.upSpeed;
    };
    /**
     * 球初始化
     */
    Ball.prototype.ballRect = function () {
        this.pos(this.initialPoint.x, this.initialPoint.y);
        return this;
    };
    return Ball;
}(Laya.Box));
//# sourceMappingURL=Ball.js.map