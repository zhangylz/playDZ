/** 数据中心 */
class dataCenter {
    /** 砖石总数量 */
    public doNumber: number = 0;
    /** 局内获得钻石 */
    public doObtain: number = 0;
    /** 最高分 */
    public maxFraction: number = 0;
    /** 分数 */
    public fraction: number = 0;
    /** 余额 */
    public balance: number = 0;
    /** 局内获得红包数 */
    public hbNumber: number = 0;
    /** token */
    public token: string;
    /** 用户数据 */
    public userData: userData;

    constructor() {
        this.init();
    };

    /**初始化 */
    public init() {
        console.log("API初始化" + new Date());
    };

    /** 局内数据初始化 */
    public dataRest(): void {
        this.hbNumber = 0;
        this.fraction = 0;
        this.doObtain = 0;
    };

    /** 接收数据并初始化
     * @param userData 用户数据
     */
    public receive(userData?: userData): Promise<userData> {
        this.userData = userData;
        console.log("测试接收数据");
        console.log(userData);
        return new Promise((fun) => {
            fun();
        })
    };

    /** 同步数据 */
    public sytsData() {
        this.maxFraction = this.userData.max_score;
        this.doNumber = this.userData.gold;
        this.balance = this.userData.money;
    };
};

/** Api用户接口数据 */
interface userData {
        /** 全部的钱 */
        "all_money": number,
        /** 头像地址 */
        "avatar": string,
        /** 数据 */
        "data": {},
        /** 朋友数 */
        "friend": number,
        /** 金币 */
        "gold": number
        /** 用户ID */
        "id": number,
        /** 是否保存用户信息 */
        "is_auth": string,
        /** 连续登陆天数 */
        "login_days": number,
        /** 最大的分数 */
        "max_score": number,
        /** 余额 */
        "money": number,
        /** 名字 */
        "name": string,
        /** openID */
        "open_id": string
}