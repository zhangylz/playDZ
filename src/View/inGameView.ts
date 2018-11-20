/** 游戏中 */
class inGameView extends ui.inGameViewUI {
    /** 分数 */
    public fraction: Laya.Text;
    /** 红包数量 */
    public hbNumber: Laya.Text;
    /** 即将超越的分数 */
    public surpass_fraction: Laya.Text;
    constructor() {
        super();
    }
    /** 分数重置 */
    public reset(): void {
        this.fraction.text = String(0);
        this.hbNumber.text = String(0);
        console.log("inGame reset \t$$$$")
    }
}