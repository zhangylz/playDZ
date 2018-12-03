var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 游戏结束 */
var gameOver = (function (_super) {
    __extends(gameOver, _super);
    /**
     *
     * @param game 传入游戏中控
     * @param dataCenter 传入数据中控
     */
    function gameOver(game, dataCenter) {
        var _this = _super.call(this) || this;
        // this.init();
        _this.Game = game;
        _this.dataCenter = dataCenter;
        return _this;
    }
    /** 初始化 */
    gameOver.prototype.init = function () {
        // 四个组件监听
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.gameAgin); //重新开始
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.gameHome); //回到主页
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.shareGeme); //分享复活
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.voidRelive); //视频复活
    };
    /** 红包点击检测 */
    gameOver.prototype.HbOnOpen = function () {
        //寄存红包数组
        var hbArr = this.HBao_box._childs;
        var len = this.dataCenter.hbNumber;
        console.log("hbLen\t$$$$$$$$$$$$$\t" + len);
        if (len > 4) {
            len = 4;
        }
        ;
        /** 遍历监听红包 */
        for (var i = 0; i < len; i++) {
            /** 红包 */
            var Hbao = hbArr[i];
            //看是监听点击，传入监听的红包ID值
            Hbao.on(Laya.Event.MOUSE_DOWN, this, this.HbOpenOk, [Hbao, i]);
        }
    };
    /** 打开红包 */
    gameOver.prototype.HbOpenOk = function (Hbao, n) {
        var moneyAarr = [this.hb_money_0, this.hb_money_1, this.hb_money_2, this.hb_money_3]; //红包
        var HbOpenes = this.HB_opeb_box._childs;
        var getMoney = 5;
        Hbao.visible = false;
        var monet = Math.random() * 5;
        moneyAarr[n].text = "￥ " + monet.toFixed(2);
        HbOpenes[n].visible = true;
        console.log(" is OKer! \t" + n);
    };
    /** 重新开始游戏 */
    gameOver.prototype.gameAgin = function () {
        //判断gameOver弹窗显示状态
        if (this.isPopup == true) {
            this.close();
        }
        //重置分数
        this.Game.inGameView.reset();
        this.Game.gameReset().startGame();
        console.log("Game Agin");
    };
    /** 返回主页 */
    gameOver.prototype.gameHome = function () {
        this.close();
        this.Game.inGameView.visible = false;
        this.Game.gameHome.visible = true;
        this.Game.inGameView.reset();
        this.Game.gameReset();
        this.Game.monitorMouse();
        // 获取用户信息并刷新
        this.Game.ApiDocking.getUser();
        console.log("goBreak Game Home");
    };
    /** 分享复活 */
    gameOver.prototype.shareGeme = function () {
        if (this.isPopup == true) {
            this.close();
        }
        //重置然后开始游戏
        this.Game.gameRelive().startGame();
        console.log("share game to frinde");
    };
    /** 视频复活 */
    gameOver.prototype.voidRelive = function () {
        if (this.isPopup == true) {
            this.close();
        }
        // 重置然后开始游戏
        this.Game.gameRelive().startGame();
        console.log("Watch void to Relive");
    };
    /**
     * 关闭完成后
     * @param e  e:String (default = null) — 如果是点击默认关闭按钮触发，则传入关闭按钮的名字(name)，否则为null
     */
    gameOver.prototype.onClosed = function (e) {
        if (e === void 0) { e = null; }
        var HB_opeb_box = this.HB_opeb_box._childs;
        var HBao_box = this.HBao_box._childs;
        var len = HBao_box.length;
        // 遍历关掉监听
        for (var i = 0; i < len; i++) {
            HB_opeb_box[i].visible = false;
            HBao_box[i].off(Laya.Event.MOUSE_DOWN, this, this.HbOpenOk);
            HBao_box[i].visible = true;
        }
        console.log("closed OK! $$$$$$$$$$$");
    };
    /** 弹窗打开完成后 */
    gameOver.prototype.onOpened = function () {
        this.HbOnOpen();
        this.init();
        console.log("open ok! $$$");
    };
    /** 弹窗打开前同步数据 */
    gameOver.prototype.Opened = function () {
        this.fraction.text = String(this.dataCenter.fraction);
        this.do_n.text = String(this.dataCenter.doObtain);
        //  同步最高分
        if (this.dataCenter.fraction > this.dataCenter.maxFraction) {
            this.dataCenter.maxFraction = this.dataCenter.fraction;
        }
        ;
        return this;
    };
    return gameOver;
}(ui.gameOverUI));
//# sourceMappingURL=GameOver.js.map