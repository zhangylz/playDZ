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
        this.now_get.on(Laya.Event.MOUSE_DOWN, this, this.openHbao);
    };

    /** 打开红包 */
    public openHbao(): Promise<any> {
        let oneHbao:HBaoOne = Laya.Pool.getItemByClass("HbaoOne", HBaoOne);
        
        return new Promise((res) => {
            res();
        })
    }
}