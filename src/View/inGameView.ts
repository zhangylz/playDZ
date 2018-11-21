/** 游戏中 */
class inGameView extends ui.inGameViewUI {
    /** 分数 */
    public fraction: Laya.Text;
    /** 红包数量 */
    public hbNumber: Laya.Text;
    /** 即将超越的分数 */
    public surpass_fraction: Laya.Text;
    /** 数据中控 */
    public dataCenter: dataCenter;
    /**
     * @param dataCenter 数据中控
     */
    constructor(dataCenter: dataCenter) {
        super();
        this.dataCenter = dataCenter;
        this.init();
    }
    
    /** 数据同步 */
    public init(): inGameView {
        /** 分数 */
        let fraction = this.dataCenter.fraction;
        /** 红包数量 */
        let hbNumber = this.dataCenter.hbNumber;
        this.fraction.text = String(fraction);
        this.hbNumber.text = String(hbNumber);
        return this;
    }

    /** 分数重置 */
    public reset(): void {
        this.fraction.text = String(0);
        this.hbNumber.text = String(0);
        console.log("inGame reset \t$$$$")
    }
}