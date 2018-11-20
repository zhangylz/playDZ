/** 红包一个 */
class HBaoOne extends ui.HBaoOneUI {
    /** 领取按钮 */
    public button_receive: Laya.Image;
    /** 关闭按钮 */
    public button_close: Laya.Image;
    /** 领取按钮效果 */
    public buttonTimeLine: Laya.TimeLine = new Laya.TimeLine();
    constructor() {
        super();
        this.init()
    }
    /** 初始化 */
    public init(): void {
        // this.popupCenter = true;
        this.popupEffect = null;
        this.button_receive.on(Laya.Event.MOUSE_DOWN, this, this.openHB);
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
        this.buttonTimeLine.addLabel("big", 0).to(this.button_receive, { scaleX: 1.5, scaleY: 1.5, x: 141 }, 500, null, 0)
            .addLabel("small", 0).to(this.button_receive, { scaleX: 1.2, scaleY: 1.2, x: 168 }, 500, null, 0);
        // 循环播放
        this.buttonTimeLine.play(0, true);
        this.applayFilter();
    }

    /** 打开红包 */
    public openHB(): HBaoOne {
        console.log("open HBao $$$");
        return this;
    }

    //添加滤镜
    private applayFilter(): void {
        // 创建领取按钮和关闭按钮滤镜
        let receiveFilter: Laya.GlowFilter = new Laya.GlowFilter("#E0FFFF", 10, 0, 0);
        let closeFilter: Laya.GlowFilter = new Laya.GlowFilter("#EE30A7", 5, 0, 0);
        //添加滤镜
        this.button_receive.filters = [receiveFilter];
        this.button_close.filters = [closeFilter];
    }
}