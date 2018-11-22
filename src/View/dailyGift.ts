/** 每日奖励 */
class dailyGift extends ui.dailyGiftUI {
    /** 关闭按钮 */
    public closeButton: Laya.Image;
    constructor() {
        super();
        this.init();
    }
    /** 初始化 */
    public init(): void {
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.close);
        
    }
}