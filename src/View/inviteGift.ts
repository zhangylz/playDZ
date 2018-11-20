/** 邀请界面 */
class inviteGift extends ui.inviteGiftUI {
    /** 邀请公告 */
    public invitation: Laya.Label;
    /** 第一个奖励的公告 */
    public schedule_1: Laya.Label;
    /** 第二个奖励的公告 */
    public schedule_2: Laya.Label;
    constructor() {
        super();
        this.init();
    }
    /** 初始化 */
    private init(): void {
        // test
        this.test();

        //监听事件
        this.monitor();
    }



    public testJson = {
        "gift_1": false,
        "gift_2": false
    }
    /** 已邀请人数 */
    private invitedN: number = 5;
    /** test */
    private test() {
        /** 已经邀请的人数 */
        let invitedN = this.invitedN;
        /** 邀请公告的通告文字 */
        let invitationMsg = "已邀请" + String(invitedN) + "位好友，完成以下任务，即可获取奖励!"
        this.invitation.text = invitationMsg;
        // 后面两个邀请任务进程公告
        this.schedule_1.text = "（目标：" + invitedN + "/5）";
        this.schedule_2.text = "（目标：" + invitedN + "/10）"
        if (invitedN >= 5) {
            if (this.testJson["gift_1"] == false) { this.button_one.disabled = false }
            this.schedule_1.text = "（目标：5/5）";
        };
        if (invitedN >= 10) {
            if (this.testJson["gift_2"] == false) { this.button_two.disabled = false }
            this.schedule_2.text = "（目标：10/10）"
        }
    }
    /** 关闭完成后，调用此方法（如果有关闭动画，则在动画完成后执行）*/
    public onClosed(e: String = null): void {
        console.log(e);
        console.log("closed OK!");
    }

    /** 打开完成后，调用此方法（如果有弹出动画，则在动画完成后执行） */
    public onOpened(): void {
        console.log("poen OK!")
    }

    /** 监听事件 */
    private monitor(): inviteGift {
        this.viewOff.on(Laya.Event.MOUSE_DOWN, this, this.close);   // 关闭按钮
        this.button_one.on(Laya.Event.MOUSE_DOWN, this, this.receivingGift, [50]);      //第一个领奖按钮
        this.button_two.on(Laya.Event.MOUSE_DOWN, this, this.receivingGift, [200]);     //第二个领奖按钮
        this.now_invite.on(Laya.Event.MOUSE_DOWN, this, this.inviteFun);
        return this;
    }

    /** 领取奖励 */
    private receivingGift(n, e: Laya.Event): any {
        let button: Laya.Image = e.target as Laya.Image;
        let name: string;
        if (n == 50) { name = "gift_1" } else { name = "gift_2" }
        this.testJson[name] = true;
        // 禁用监听
        button.disabled = true;
        // console.log("领取钻石" + n + "个");
    }

    /** 邀请 */
    private inviteFun(): inviteGift {
        this.invitedN++;
        this.init();
        return this;
    }
}