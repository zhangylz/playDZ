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
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.testClose);
        this.now_get.on(Laya.Event.MOUSE_DOWN, this, this.openHbao);
    };

    /** 打开红包 */
    public openHbao(prompt: string): void {
        let oneHbao: HBaoOne = Laya.Pool.getItemByClass("HbaoOne", HBaoOne);
        oneHbao.popup();
        this.testClose();
    };
    /** 同步数据 */
    public sysData(data) {
        console.log(data);
        this.loding.visible = false;
        this.hb_window.visible = true;

        if (!data.today_sign) {
            this.now_get.disabled = false;
            this.voide_get.disabled = false;
        }
    };

    public testClose() {
        this.close();
        this.loding.visible = true;
        this.hb_window.visible = false;
    };


}