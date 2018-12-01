class GameMain {
    /** 进度UI */
    public testUi: Progres;
    /** 资源集合 */
    public ResourceArr: Array<any> = [
        { url: "res/atlas/ladder.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/ladder/image_ladder.png", type: Laya.Loader.IMAGE }
        , { url: "res/atlas/gameHome.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/inGame.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/invite_gift.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/Game_Settlement.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/myHbao.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/everyDay.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/player.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/ball_skin.atlas", type: Laya.Loader.ATLAS }
    ];
    constructor() {
        //  适配小程序
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "none";
        Laya.Stat.show(0, 0);
        // this.testUi = new Progres();
        // Laya.stage.addChild(this.testUi);
        this.onProgress();
    }
    private onProgress() {
        Laya.loader.load(this.ResourceArr, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false))
    }

    public onAssetsLoading(progress) {
        // this.testUi.changeText(progress);
        let prs = String(progress * 100 << 0 / 100) + "%";
        console.log("进度\t" + prs);
    }
    public onAssetsLoaded() {
        console.log("加载完成");
    }
}

new GameMain();