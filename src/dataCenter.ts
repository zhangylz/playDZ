/** 数据中心 */
class dataCenter {
    /** 砖石数量 */
    public doNumber: number;
    /** 最高分 */
    public bigFraction: number;
    /** 余额 */
    public balance: number;
    constructor() {
        this.init();
    }
    private init() {
        this.doNumber = 5;
        this.bigFraction = 11;
        this.balance = 10;
    }
}