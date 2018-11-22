/** 游戏结束 */
class gameOver extends ui.gameOverUI {
    /** 重新开始 */
    public agin_img: Laya.Image;
    /** 回到主页 */
    public home_img: Laya.Image;
    /** 分享复活 */
    public share_img: Laya.Image;
    /** 视频复活 */
    public void_img: Laya.Image;
    /** Game类 */
    public Game: Game;
    /** 数据中心 */
    public dataCenter: dataCenter;
    /**
     * 
     * @param game 传入游戏中控
     * @param dataCenter 传入数据中控
     */
    constructor(game?: Game, dataCenter?: dataCenter) {
        super();
        // this.init();
        this.Game = game;
        this.dataCenter = dataCenter;
    }

    /** 初始化 */
    private init(): void {
        // 四个组件监听
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.gameAgin);       //重新开始
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.gameHome);       //回到主页
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.shareGeme);     //分享复活
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.voidRelive);     //视频复活
    }

    /** 红包点击检测 */
    public HbOnOpen(): void {
        //寄存红包数组
        // this.HBao_1.on(Laya.Event.MOUSE_DOWN, this, this.HbOpenOk, [1]);
        let hbArr: Array<Laya.Image> = this.HBao_box._childs as Array<Laya.Image>;
        let len = this.dataCenter.hbNumber;
        console.log("hbLen\t$$$$$$$$$$$$$\t" + len);
        if (len > 4) { len = 4 };

        /** 遍历监听红包 */
        for (let i = 0; i < len; i++) {
            /** 红包 */
            let Hbao: Laya.Image = hbArr[i];
            Hbao.on(Laya.Event.MOUSE_DOWN, this, this.HbOpenOk, [Hbao, i]);
        }
    }

    /** 打开红包 */
    public HbOpenOk(Hbao: Laya.Image, n: number): void {
        let moneyAarr: Array<Laya.Text> = [this.hb_money_0, this.hb_money_1, this.hb_money_2, this.hb_money_3];     //红包
        let HbOpenes: Array<Laya.Image> = this.HB_opeb_box._childs;
        let getMoney: number = 5;
        Hbao.visible = false;
        moneyAarr[n].text = "￥ " + 0.99;
        // moneyAarr[n].align = "center";
        HbOpenes[n].visible = true;
        console.log(" is OKer! \t" + n);
    }


    /** 重新开始游戏 */
    public gameAgin(): void {
        //判断gameOver弹窗显示状态
        if (this.isPopup == true) {
            this.close();
        }
        //重置分数
        this.Game.inGameView.reset();
        this.Game.gameReset().startGame();
        console.log("Game Agin");
    }

    /** 返回主页 */
    private gameHome(): void {
        this.close();
        this.Game.inGameView.visible = false;
        this.Game.gameHome.visible = true;
        this.Game.inGameView.reset();
        this.Game.gameReset();
        this.Game.monitorMouse();
        console.log("goBreak Game Home");
    }

    /** 分享复活 */
    private shareGeme(): void {
        if (this.isPopup == true) {
            this.close();
        }
        //重置然后开始游戏
        this.Game.gameReset().startGame();
        console.log("share game to frinde");
    }

    /** 视频复活 */
    private voidRelive(): void {
        if (this.isPopup == true) {
            this.close();
        }
        // 重置然后开始游戏
        this.Game.gameReset().startGame();
        console.log("Watch void to Relive");
    }

    /**
     * 关闭完成后
     * @param e  e:String (default = null) — 如果是点击默认关闭按钮触发，则传入关闭按钮的名字(name)，否则为null
     */
    public onClosed(e: String = null): void {
        let HB_opeb_box: Array<Laya.Image> = this.HB_opeb_box._childs;
        let HBao_box: Array<Laya.Image> = this.HBao_box._childs;
        let len = HBao_box.length;
        // 遍历关掉监听
        for (let i = 0; i < len; i++) {
            HB_opeb_box[i].visible = false;
            HBao_box[i].off(Laya.Event.MOUSE_DOWN, this, this.HbOpenOk);
            HBao_box[i].visible = true;
        }
        console.log("closed OK! $$$$$$$$$$$");
    }
    /** 弹窗打开完成后 */
    public onOpened(): void {
        this.HbOnOpen();
        this.init();
        console.log("open ok! $$$");
    }
    /** 弹窗打开前同步数据 */
    public Opened(): gameOver {
        this.fraction.text = String(this.dataCenter.fraction);
        this.do_n.text = String(this.dataCenter.doObtain);
        //  同步最高分
        if (this.dataCenter.fraction > this.dataCenter.bigFraction) {
            this.dataCenter.bigFraction = this.dataCenter.fraction;
        }
        return this;
    }
}