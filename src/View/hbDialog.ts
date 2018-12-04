/** 打开红包 */
class hbDialog extends ui.hbDialogUI {
    /** 金额 */
    public money: number;
    /** 打开的金额 */
    public getMoney: Laya.Label;
    /** 提示 */
    public prompt: Laya.Label;
    constructor() {
        super();
        console.log("创建一个hbDialog实例");
    }


    /** 初始化
     * @param num 传入红包金额
     * @param prompt 提示语
     * 
     */
    public init(num: number, prompt: string) {
        this.money = num;
        this.getMoney.text = String("￥" + num);
        this.prompt.text = prompt;

        this.keepOnHbao.on(Laya.Event.MOUSE_DOWN, this, this.userWithdraw);
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, () => { this.destroy() });
    };

    /** 用户点击提现按钮 */
    public userWithdraw(){
        
    }
}