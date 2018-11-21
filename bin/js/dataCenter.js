/** 数据中心 */
var dataCenter = (function () {
    function dataCenter() {
        /** 砖石总数量 */
        this.doNumber = 1;
        /** 局内获得钻石 */
        this.doObtain = 0;
        /** 最高分 */
        this.bigFraction = 11;
        /** 分数 */
        this.fraction = 0;
        /** 余额 */
        this.balance = 0;
        /** 局内获得红包数 */
        this.hbNumber = 0;
        this.init();
    }
    /**初始化 */
    dataCenter.prototype.init = function () {
        console.log(new Date());
    };
    /** 局内数据初始化 */
    dataCenter.prototype.dataRest = function () {
        this.hbNumber = 0;
        this.fraction = 0;
        this.doObtain = 0;
    };
    return dataCenter;
}());
//# sourceMappingURL=dataCenter.js.map