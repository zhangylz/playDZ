var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 打开红包 */
var hbDialog = (function (_super) {
    __extends(hbDialog, _super);
    function hbDialog() {
        var _this = _super.call(this) || this;
        console.log("创建一个hbDialog实例");
        return _this;
    }
    /** 初始化
     * @param num 传入红包金额
     * @param prompt 提示语
     *
     */
    hbDialog.prototype.init = function (num, prompt) {
        this.money = num;
        this.getMoney.text = String("￥" + num);
        this.prompt.text = prompt;
    };
    return hbDialog;
}(ui.hbDialogUI));
//# sourceMappingURL=hbDialog.js.map