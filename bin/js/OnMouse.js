/**
 * 监听鼠标运动
 */
var OnMouse = (function () {
    /**
     * @param ball 传入的球
     * @param stage 父级舞台
     */
    function OnMouse(stage, ball) {
        // 寄存到全局
        this.stage = stage;
        // 寄存到全局
        this.ball = ball;
    }
    /**
     * 初始化监听鼠标移动
     */
    OnMouse.prototype.init = function () {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
    };
    /**
     * 鼠标点击动作
     */
    OnMouse.prototype.mouseDowm = function () {
        this.mouseX = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    };
    /**
    * 监听鼠标放开
    */
    OnMouse.prototype.mouseUp = function () {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    };
    /**
     * 鼠标移动动作
     */
    OnMouse.prototype.mouseMove = function () {
        var x = Laya.stage.mouseX;
        if (x < this.mouseX) {
            this.ball.x += (x - this.mouseX);
            this.mouseX = x;
        }
        else if (x > this.mouseX) {
            this.ball.x += (x - this.mouseX);
            this.mouseX = x;
        }
    };
    return OnMouse;
}());
//# sourceMappingURL=OnMouse.js.map