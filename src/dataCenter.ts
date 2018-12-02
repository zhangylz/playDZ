/** 数据中心 */
class dataCenter {
    /** 砖石总数量 */
    public doNumber: number = 1;
    /** 局内获得钻石 */
    public doObtain: number = 0;
    /** 最高分 */
    public bigFraction: number = 0;
    /** 分数 */
    public fraction: number = 0;
    /** 余额 */
    public balance: number = 0;
    /** 局内获得红包数 */
    public hbNumber: number = 0;
    /** token */
    public token: string;

    constructor() {
        this.init();
    }
    /**初始化 */
    public init() {
        console.log(new Date());
    }

    /** 局内数据初始化 */
    public dataRest(): void {
        this.hbNumber = 0;
        this.fraction = 0;
        this.doObtain = 0;
    }

    /** 接收数据并初始化 */
    public receive(res): any {
        console.log("测试接收数据");
        console.log(res);
    }
}