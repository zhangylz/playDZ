var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 邀请界面 */
var inviteGift = (function (_super) {
    __extends(inviteGift, _super);
    function inviteGift() {
        var _this = _super.call(this) || this;
        _this.testJson = {
            gift_1: false,
            gift_2: false
        };
        /** 已邀请人数 */
        _this.invitedN = 0;
        _this.init();
        return _this;
    }
    /** 初始化 */
    inviteGift.prototype.init = function () {
        // 同步已经邀请的人数
        this.syNumber();
        //监听事件
        this.monitor();
    };
    /** 同步已经邀请的人数 */
    inviteGift.prototype.syNumber = function () {
        /** 已经邀请的人数 */
        var invitedN = this.invitedN;
        /** 邀请公告的通告文字 */
        var invitationMsg = "已邀请" + String(invitedN) + "位好友，完成以下任务，即可获取奖励!";
        this.invitation.text = invitationMsg;
        // 后面两个邀请任务进程公告
        this.schedule_1.text = "（目标：" + invitedN + "/5）";
        this.schedule_2.text = "（目标：" + invitedN + "/10）";
        if (invitedN >= 5) {
            if (this.testJson.gift_1 == false) {
                this.button_one.disabled = false;
            }
            this.schedule_1.text = "（目标：5/5）";
        }
        ;
        if (invitedN >= 10) {
            if (this.testJson.gift_2 == false) {
                this.button_two.disabled = false;
            }
            this.schedule_2.text = "（目标：10/10）";
        }
    };
    /** 关闭完成后，调用此方法（如果有关闭动画，则在动画完成后执行）*/
    inviteGift.prototype.onClosed = function (e) {
        if (e === void 0) { e = null; }
        console.log(e);
        console.log("closed OK!");
    };
    /** 打开完成后，调用此方法（如果有弹出动画，则在动画完成后执行） */
    inviteGift.prototype.onOpened = function () {
        console.log("poen OK!");
    };
    /** 监听事件 */
    inviteGift.prototype.monitor = function () {
        this.viewOff.on(Laya.Event.MOUSE_DOWN, this, this.close); // 关闭按钮
        this.button_one.on(Laya.Event.MOUSE_DOWN, this, this.receivingGift, [50]); //第一个领奖按钮
        this.button_two.on(Laya.Event.MOUSE_DOWN, this, this.receivingGift, [200]); //第二个领奖按钮
        this.now_invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);
        return this;
    };
    /** 领取奖励 */
    inviteGift.prototype.receivingGift = function (n, e) {
        var button = e.target;
        var name;
        if (n == 50) {
            name = "gift_1";
        }
        else {
            name = "gift_2";
        }
        this.testJson[name] = true;
        // 禁用监听
        button.disabled = true;
        // console.log("领取钻石" + n + "个");
    };
    /** 邀请 */
    inviteGift.prototype.inviteFun = function () {
        this.invitedN++;
        this.init();
        return this;
    };
    return inviteGift;
}(ui.inviteGiftUI));
//# sourceMappingURL=inviteGift.js.map