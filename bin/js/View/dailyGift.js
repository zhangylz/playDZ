var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 每日奖励 */
var dailyGift = (function (_super) {
    __extends(dailyGift, _super);
    function dailyGift(game) {
        var _this = _super.call(this) || this;
        _this.moneyArr = [_this.hb_money_0, _this.hb_money_1, _this.hb_money_2, _this.hb_money_3, _this.hb_money_4, _this.hb_money_5, _this.hb_money_6];
        _this.init();
        _this.Game = game;
        return _this;
    }
    /** 初始化 */
    dailyGift.prototype.init = function () {
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.testClose);
        this.now_get.on(Laya.Event.MOUSE_DOWN, this, this.openHbao);
        this.video_get.on(Laya.Event.MOUSE_DOWN, this, this.videoOpenHbao);
    };
    ;
    /** 打开红包 */
    dailyGift.prototype.openHbao = function (prompt) {
        var oneHbao = new HBaoOne(this.Game);
        oneHbao.popup();
        this.testClose();
    };
    ;
    /** 视屏打开红包 */
    dailyGift.prototype.videoOpenHbao = function () {
        console.log("功能尚未开通， 敬请期待!");
    };
    /** 同步数据 */
    dailyGift.prototype.sysData = function (data) {
        console.log(data);
        this.loding.visible = false;
        this.hb_window.visible = true;
        //  判断今天是否签到了，如果没签到了就显示按钮
        if (!data.today_sign) {
            this.now_get.disabled = false;
            this.video_get.disabled = false;
        }
        else {
            this.now_get.disabled = true;
            this.video_get.disabled = true;
            // this.prompt.visible = false;
            this.prompt.text = "今天你已经签到，记得明天继续签到!";
        }
        ;
        if (data.list.length > 0) {
            this.showSgin(data.list);
        }
        else {
            console.log("这个星期还没有签到  应该提示!");
            this.prompt.text = "这个星期你还没有签到！赶紧签到吧！";
        }
    };
    ;
    /** 关闭窗口  */
    dailyGift.prototype.testClose = function () {
        this.close();
        this.loding.visible = true;
        this.hb_window.visible = false;
    };
    ;
    /** 显示签到列表 */
    dailyGift.prototype.showSgin = function (list) {
        /** 显示出 box */
        this.Hbao_open_box.visible = true;
        var len = list.length;
        for (var i = 0; i < len; i++) {
            this.showSginHBao(list[i].red_packet.money, i);
        }
    };
    ;
    /** 显示签到的红包 */
    dailyGift.prototype.showSginHBao = function (money, i) {
        var Hbao_box = this.Hbao_box._childs;
        var Hbao_open_box = this.Hbao_open_box._childs;
        /** 显示打开的红包， 和金额 */
        this.moneyArr[i].text = String("￥" + money);
        Hbao_open_box[i].visible = true;
        Hbao_box[i].visible = false;
    };
    return dailyGift;
}(ui.dailyGiftUI));
//# sourceMappingURL=dailyGift.js.map