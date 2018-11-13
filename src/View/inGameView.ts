/** 游戏中 */
class inGameView extends ui.inGameViewUI {
    /** 分数 */
    public fraction: Laya.Text;
    /** 红包数量 */
    public nbNumber: Laya.Text;
    /** 即将超越的分数 */
    public surpass_fraction: Laya.Text;
    constructor() {
        super();
    }
    /** 初始化 */
    public init(): void {
        console.log("inGame init \t$$$$")
    }
}