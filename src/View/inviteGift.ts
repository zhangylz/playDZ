/** 邀请界面 */
class inviteGift extends ui.inviteGiftUI {
    constructor() {
        super();
        this.init();
    }
    /** 初始化 */
    private init(): void {
        this.testoff.on(Laya.Event.MOUSE_DOWN, this, this.close);
    }

    /** 关闭完成后，调用此方法（如果有关闭动画，则在动画完成后执行）*/
    public onClosed(type: String = null): void {
        console.log("closed OK!");
    }

    /** 打开完成后，调用此方法（如果有弹出动画，则在动画完成后执行） */
    public onOpened(): void {
        console.log("poen OK!")
    }
}