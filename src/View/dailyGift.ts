/** 每日奖励 */
class dailyGift extends ui.dailyGiftUI {
    public moneyArr: Array<Laya.Label> = [this.hb_money_0, this.hb_money_1, this.hb_money_2, this.hb_money_3, this.hb_money_4, this.hb_money_5, this.hb_money_6] as Array<Laya.Label>;
    /** 关闭按钮 */
    public closeButton: Laya.Image;
    /** 游戏中控 */
    public Game: Game;

    constructor(game: Game) {
        super();
        this.init();
        this.Game = game;
    }
    /** 初始化 */
    public init(): void {
        this.closeButton.on(Laya.Event.MOUSE_DOWN, this, this.testClose);
        this.now_get.on(Laya.Event.MOUSE_DOWN, this, this.openHbao);
        this.video_get.on(Laya.Event.MOUSE_DOWN, this, this.videoOpenHbao);
    };

    /** 打开红包 */
    public openHbao(prompt: string): void {
        let oneHbao: HBaoOne = new HBaoOne(this.Game);
        oneHbao.popup();
        this.testClose();
    };

    /** 视屏打开红包 */
    public videoOpenHbao() {
        console.log("功能尚未开通， 敬请期待!");
    }
    /** 同步数据 */
    public sysData(data: sginData) {
        console.log(data);
        this.loding.visible = false;
        this.hb_window.visible = true;

        //  判断今天是否签到了，如果没签到了就显示按钮
        if (!data.today_sign) {
            this.now_get.disabled = false;
            this.video_get.disabled = false;
        } else {
            this.now_get.disabled = true;
            this.video_get.disabled = true;
            // this.prompt.visible = false;
            this.prompt.text = "今天你已经签到，记得明天继续签到!";
        };

        if (data.list.length > 0) {
            this.showSgin(data.list);
        } else {
            console.log("这个星期还没有签到  应该提示!");
            this.prompt.text = "这个星期你还没有签到！赶紧签到吧！";
        }
    };

    /** 关闭窗口  */
    public testClose() {
        this.close();
        this.loding.visible = true;
        this.hb_window.visible = false;
    };

    /** 显示签到列表 */
    public showSgin(list: Array<sginList>) {
        /** 显示出 box */
        this.Hbao_open_box.visible = true;
        let len = list.length;
        for (let i = 0; i < len; i++) {
            this.showSginHBao(list[i].red_packet.money, i);
        }
    };

    /** 显示签到的红包 */
    public showSginHBao(money: number, i: number) {
        let Hbao_box = this.Hbao_box._childs as Array<Laya.Image>;
        let Hbao_open_box = this.Hbao_open_box._childs as Array<Laya.Image>;

        /** 显示打开的红包， 和金额 */
        this.moneyArr[i].text = String("￥" + money);
        Hbao_open_box[i].visible = true;
        Hbao_box[i].visible = false;

    }

}







/** sgin.data数据 */
interface sginData {
    "list": Array<sginList>,
    "today_sign": boolean
}
/** 签到接口 */
interface sginList {
    "created_at": string,
    "red_packet": {
        "id": number,
        "money": number,
        "is_get": true,
        "type": string
    }
}