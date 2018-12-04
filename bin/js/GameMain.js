var GameMain = (function () {
    // 构造函数
    function GameMain() {
        /** 资源集合 */
        this.ResourceArr = {
            t: [
                "res/atlas/ladder.atlas",
                "res/atlas/gameHome.atlas",
                "res/atlas/inGame.atlas",
                "res/atlas/invite_gift.atlas",
                "res/atlas/Game_Settlement.atlas",
                "res/atlas/myHbao.atlas",
                "res/atlas/everyDay.atlas",
                "res/atlas/player.atlas",
                "res/atlas/ball_skin.atlas",
                "res/atlas/HBao.atlas",
                "res/atlas/one_HBao.atlas",
                "ball_skin/image_inWindow.png",
                "everyDay/inWindow.png",
                "everyDay/window.png",
                "Game_Settlement/inWindow.png",
                "Game_Settlement/window.png",
                "HBao/window.png",
                "invite_gift/dotted_line.png",
                "invite_gift/in_view.png",
                "invite_gift/window.png",
                "ladder/image_ladder.png",
                "myHbao/myHBao.png",
                "one_Hbao/window.png"
            ]
        };
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
    GameMain.prototype.onProgress = function () {
        console.log(this.ResourceArr.t);
        Laya.loader.load(this.ResourceArr.t, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
    };
    /** 加载中 */
    GameMain.prototype.onAssetsLoading = function (progress) {
        // this.testUi.changeText(progress);
        var prs = String(progress * 100 << 0 / 100) + "%";
        console.log("加载中\t" + prs);
        this.Progres.text = prs;
    };
    /** 加载完成后开始游戏 */
    GameMain.prototype.onAssetsLoaded = function () {
        console.log("加载完成 $$$$$$$ 开始游戏");
        // 摧毁进度
        this.Progres.visible = false;
        this.playDZ = new Game();
    };
    return GameMain;
}());
//启动游戏
var playDZ = new GameMain();
//# sourceMappingURL=GameMain.js.map