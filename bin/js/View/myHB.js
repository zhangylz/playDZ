var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 我的红包 */
var myHB = (function (_super) {
    __extends(myHB, _super);
    function myHB() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
        // console.log(new Date());
    }
    ;
    /** 初始化 */
    myHB.prototype.init = function () {
        this.close_button.on(Laya.Event.MOUSE_DOWN, this, this.hbClose);
        this.withdraw_button.on(Laya.Event.MOUSE_DOWN, this, this.withdraw);
    };
    ;
    /** 红包关闭 */
    myHB.prototype.hbClose = function (e) {
        this.close();
        console.log("已经关闭");
        return this;
    };
    ;
    /** 提现 */
    myHB.prototype.withdraw = function (e) {
        /** 获取余额 */
        var balance = Number(this.balance.text.replace(/[^0-9, .]/ig, ""));
        if (balance < 20) {
            console.log("你钱不够啊！\t$$$\t" + balance);
        }
        return this;
    };
    ;
    /** 更新余额 */
    myHB.prototype.updateMoney = function (moeny) {
        var msg = "余额: " + moeny + " (元)";
        this.balance.text = msg;
        return this;
    };
    ;
    return myHB;
}(ui.myHbUI));
//# sourceMappingURL=myHB.js.map