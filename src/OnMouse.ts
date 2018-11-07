/**
 * 监听鼠标运动
 */
class OnMouse {
    // 球
    private ball: Laya.Sprite;
    // 舞台
    private stage: Laya.Stage;
    /**
     * @param ball 传入的球
     * @param stage 父级舞台
     */
    constructor(stage: Laya.Stage, ball: Laya.Sprite) {
        // 寄存到全局
        this.stage = stage;
        // 寄存到全局
        this.ball = ball;
    }
    /**
     * 初始化监听鼠标移动
     */
    public init(): void {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
    }
    private mouseX: number;

    /**
     * 鼠标点击动作
     */
    private mouseDowm(): void {
        this.mouseX = Laya.stage.mouseX;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }

    /**
    * 监听鼠标放开
    */
    private mouseUp(): void {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
    }

    /**
     * 鼠标移动动作
     */
    private mouseMove(): void {
        let x = Laya.stage.mouseX;
        if (x < this.mouseX) {
            this.ball.x += (x - this.mouseX);
            this.mouseX = x;
        } else if (x > this.mouseX) {
            this.ball.x += (x - this.mouseX);
            this.mouseX = x;
        }
    }
}