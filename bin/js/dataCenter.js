/** 数据中心 */
var dataCenter = (function () {
    function dataCenter() {
        /** 砖石总数量 */
        this.doNumber = 0;
        /** 局内获得钻石 */
        this.doObtain = 0;
        /** 最高分 */
        this.maxFraction = 0;
        /** 分数 */
        this.fraction = 0;
        /** 余额 */
        this.balance = 0;
        /** 局内获得红包数 */
        this.hbNumber = 0;
        this.init();
    }
    ;
    /**初始化 */
    dataCenter.prototype.init = function () {
        console.log("API初始化" + new Date());
    };
    ;
    /** 局内数据初始化 */
    dataCenter.prototype.dataRest = function () {
        this.hbNumber = 0;
        this.fraction = 0;
        this.doObtain = 0;
    };
    ;
    /** 接收数据并初始化
     * @param userData 用户数据
     */
    dataCenter.prototype.receive = function (userData) {
        this.userData = userData;
        console.log("测试接收数据");
        console.log(userData);
        return new Promise(function (fun) {
            fun();
        });
    };
    ;
    /** 同步数据 */
    dataCenter.prototype.sytsData = function () {
        this.maxFraction = this.userData.max_score;
        this.doNumber = this.userData.gold;
        this.balance = this.userData.money;
    };
    ;
    return dataCenter;
}());
;
//# sourceMappingURL=dataCenter.js.map