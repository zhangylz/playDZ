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
    constructor(game: Game, dataCenter: dataCenter) {
        super();
        this.init();
        this.Game = game;
        this.dataCenter = dataCenter;
    }

    /** 初始化 */
    private init(): void {
        // 四个组件监听
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.gameAgin);          //重新开始
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.gameHome);       //回到主页
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.shareGeme);     //分享复活
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.voidRelive);     //视频复活
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
        console.log("closed OK! $$$$$$$$$$$")

    }
    /** 打开完成后 */
    public onOpened(): void {
        this.fraction.text = String(this.dataCenter.fraction);
        this.do_n.text = String(this.dataCenter.doObtain);
        console.log("open OK! $$$$$$$$$$$");
    }
}