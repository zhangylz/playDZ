class hbaoDialog extends ui.hbDialogUI {
    /** 关闭按钮 */
    public button_close: Laya.Image;
    /** 继续打开红包 */
    public keepOnHbao: Laya.Image;
    /** 提现 */
    public withdraw: Laya.Label;
    constructor() {
        super();
        this.init();
    }
    /** 初始化 */
    public init(): void {
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
        this.keepOnHbao.on(Laya.Event.MOUSE_DOWN, this, this.keepHB);
        this.withdraw.on(Laya.Event.MOUSE_DOWN, this, this.hbWIdthdraws);
    }

    /** 继续打开红包 */
    public keepHB(): void {
        console.log("继续打开红包");
    }
    public hbWIdthdraws(): void {
        console.log("hbWIdthdraw");
    }
}