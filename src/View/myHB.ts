/** 我的红包 */
class myHB extends ui.myHbUI {
    /** 关闭按钮*/
    public close_button: Laya.Image;
    /** 提现按钮 */
    public withdraw_button: Laya.Image;
    /** 余额 */
    public balance: Laya.Label;
    constructor() {
        super();
        this.init();
        // console.log(new Date());
    };
    /** 初始化 */
    private init(): void {
        this.close_button.on(Laya.Event.MOUSE_DOWN, this, this.hbClose);
        this.withdraw_button.on(Laya.Event.MOUSE_DOWN, this, this.withdraw);
    };

    /** 红包关闭 */
    public hbClose(e: Laya.Event): myHB {
        this.close();
        console.log("已经关闭");
        return this;
    };

    /** 提现 */
    public withdraw(e: Laya.Event): myHB {
        /** 获取余额 */
        let balance = Number(this.balance.text.replace(/[^0-9, .]/ig, ""));
        if (balance < 20) {
            console.log("你钱不够啊！\t$$$\t" + balance);
        }
        return this;
    };

    /** 更新余额 */
    public updateMoney(moeny: number): myHB {
        let msg: string = "余额: " + moeny + " (元)";
        this.balance.text = msg;
        return this;
    };
}