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
    /** @param dataCenter 数据中控 */
    function Ball(dataCenter) {
        var _this = _super.call(this) || this;
        /** 球宽度 */
        _this.ballWidth = 50;
        /** 球高度 */
        _this.ballHeigth = _this.ballWidth;
        /** 球的初始坐标 */
        _this.initialPoint = new Laya.Point((640 - _this.ballWidth) / 2, 705);
        /** 向上的速度 */
        _this.upSpeed = 20;
        /**重力加速度 */
        _this.gravity = 40 / 29;
        // 球初始化
        _this.dataCenter = dataCenter;
        _this.init();
        return _this;
    }
    /** 球初始化 */
    Ball.prototype.init = function () {
        // 添加球
        this.ballAdd();
    };
    /** 添加球精灵 */
    Ball.prototype.ballAdd = function () {
        //加载图片
        this.loadImage("ladder/image_ball_red.png", 0, 0, this.ballWidth, this.ballHeigth);
        // 球精灵的高度
        this.height = this.ballHeigth;
        // 球精灵的宽度
        this.width = this.ballWidth;
        // 指定是否自动计算宽高数据
        this.autoSize = true;
        // 球的边界
        var ballBounds = new Laya.Rectangle(0, 0, this.ballWidth, this.ballHeigth);
        // 设置对象在自身坐标系下的边界范围
        this.setBounds(ballBounds);
        // 初始坐标
        this.pos(this.initialPoint.x, this.initialPoint.y);
        // 球的名字
        this.name = "ball";
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
     * 球跳动,下落的时候改变检测的阶梯编号
     * @param ladderN 传入阶梯的编号，初始是4
     * @param dataCenter 数据中控
     */
    Ball.prototype.ballUp = function (ladderN) {
        /** 阶梯编号 */
        var ladderNumber = ladderN;
        /** 寄存数据中控 */
        var data = this.dataCenter;
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
            }
        }
        // 更新分数
        // fraction.text = String(frac);
        //返回处理后编号
        return ladderNumber;
    };
    /** 播放音效 */
    Ball.prototype.onPlaySound = function () {
        Laya.SoundManager.playSound("res/sounds/ballSounds.mp3", 1, new Laya.Handler(this, function () { console.log("bang bang!"); }));
    };
    /** 球初始化 */
    Ball.prototype.ballRect = function () {
        this.pos(this.initialPoint.x, this.initialPoint.y);
        return this;
    };
    return Ball;
}(Laya.Sprite));
//# sourceMappingURL=Ball.js.map