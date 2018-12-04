var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 红包一个 */
var HBaoOne = (function (_super) {
    __extends(HBaoOne, _super);
    function HBaoOne(game) {
        var _this = _super.call(this) || this;
        /** 领取按钮效果 */
        _this.buttonTimeLine = new Laya.TimeLine();
        _this.init();
        _this.Game = game;
        return _this;
    }
    ;
    /** 初始化 */
    HBaoOne.prototype.init = function () {
        // this.popupCenter = true;
        this.popupEffect = null;
        this.button_receive.on(Laya.Event.MOUSE_DOWN, this, this.openHB);
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
        this.buttonTimeLine.addLabel("big", 0).to(this.button_receive, { scaleX: 1.5, scaleY: 1.5 }, 200, null, 0)
            .addLabel("small", 0).to(this.button_receive, { scaleX: 1.2, scaleY: 1.2 }, 500, null, 0);
        // 循环播放
        this.buttonTimeLine.play(0, true);
        this.applayFilter();
    };
    /** 打开红包 */
    HBaoOne.prototype.openHB = function () {
        console.log("打开红包");
        var Hbao = new hbDialog();
        this.Game.ApiDocking.addSign(function (data) {
            console.log(data);
        }, "direct");
    };
    //添加滤镜
    HBaoOne.prototype.applayFilter = function () {
        // 创建领取按钮和关闭按钮滤镜
        var receiveFilter = new Laya.GlowFilter("#E0FFFF", 10, 0, 0);
        var closeFilter = new Laya.GlowFilter("#EE30A7", 5, 0, 0);
        //添加滤镜
        this.button_receive.filters = [receiveFilter];
        this.button_close.filters = [closeFilter];
    };
    return HBaoOne;
}(ui.HBaoOneUI));
//# sourceMappingURL=HBaoOne.js.map