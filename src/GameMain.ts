class GameMain {
    /** 进度UI */
    public Progres: Laya.Label;
    /** 资源集合 */
    public ResourceArr: Array<any> = [
        /** 图集文件 */
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
        , { url: "res/atlas/HBao.atlas", type: Laya.Loader.ATLAS }
        , { url: "res/atlas/one_HBao.atlas", type: Laya.Loader.ATLAS }
        /** 音频文件 */
        , { url: "res/sounds/ballSounds.mp3", type: Laya.Loader.SOUND }
        , { url: "res/sounds/bgMusic.mp3", type: Laya.Loader.SOUND }
        , { url: "res/sounds/doSound.mp3", type: Laya.Loader.SOUND }
        , { url: "res/sounds/goSound.mp3", type: Laya.Loader.SOUND }
        , { url: "res/sounds/hbCome.mp3", type: Laya.Loader.SOUND }
        /** 图片文件(未打包) */
        , { url: "ball_skin/image_inWindow.png", type: Laya.Loader.IMAGE }
        , { url: "everyDay/inWindow.png", type: Laya.Loader.IMAGE }
        , { url: "everyDay/window.png", type: Laya.Loader.IMAGE }
        , { url: "Game_Settlement/inWindow.png", type: Laya.Loader.IMAGE }
        , { url: "Game_Settlement/window.png", type: Laya.Loader.IMAGE }
        , { url: "HBao/window.png", type: Laya.Loader.IMAGE }
        , { url: "invite_gift/dotted_line.png", type: Laya.Loader.IMAGE }
        , { url: "invite_gift/in_view.png", type: Laya.Loader.IMAGE }
        , { url: "invite_gift/window.png", type: Laya.Loader.IMAGE }
        , { url: "ladder/image_ladder.png", type: Laya.Loader.IMAGE }
        , { url: "myHbao/myHBao.png", type: Laya.Loader.IMAGE }
        , { url: "one_Hbao/window.png", type: Laya.Loader.IMAGE }
        , { url: "res/ladder/image_ladder.png", type: Laya.Loader.IMAGE }
    ];

    // 构造函数
    constructor() {
        //  适配小程序
        Laya.MiniAdpter.init();
        Laya.init(640, 1136, Laya.WebGL);
        // Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        // Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = "showall";
        Laya.stage.screenMode = "none";
        Laya.stage.bgColor = "#EEE9E9";
        Laya.Stat.show();
        this.Progres = new Laya.Label();
        this.Progres.fontSize = 80;
        this.Progres.centerX = 0;
        this.Progres.centerY = 0;
        this.Progres.color = "#db481a";
        this.Progres.text = "0%";
        Laya.stage.addChild(this.Progres);
        this.onProgress();
    }
    /** 开始加载资源 */
    private onProgress() {
        Laya.loader.load(this.ResourceArr, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false))
    }
    /** 加载中 */
    public onAssetsLoading(progress) {
        // this.testUi.changeText(progress);
        let prs = String(progress * 100 << 0 / 100) + "%";
        console.log("加载中\t" + prs);
        this.Progres.text = prs;
    }

    /** 玩弹珠 */
    public playDZ: Game;

    /** 加载完成后开始游戏 */
    public onAssetsLoaded() {
        console.log("加载完成 $$$$$$$ 开始游戏");
        // 摧毁进度
        this.Progres.visible = false;
        this.playDZ = new Game();
    }
}

//启动游戏
var playDZ = new GameMain();