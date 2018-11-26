var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** 皮肤主页 */
var ballSkinView = (function (_super) {
    __extends(ballSkinView, _super);
    function ballSkinView(ball) {
        var _this = _super.call(this) || this;
        /** 皮肤数组 */
        _this.allSkinArr = new Array();
        /** 蓝圈数组 */
        _this.allRingArr = new Array();
        /** 当前的选择的皮肤坐标 */
        _this.onSkinPoinit = 0;
        //先初始化
        _this.init();
        _this.Ball = ball;
        return _this;
    }
    /** 初始化 */
    ballSkinView.prototype.init = function () {
        this.addMaskBG();
        // 默认隐藏界面
        this.visible = false;
        var bigSkinArr = this.inWindow._childs;
        var len = bigSkinArr.length;
        // console.log("len\t" + len);
        for (var i = 0; i < len; i++) {
            var skinArr = bigSkinArr[i]._childs;
            var l = skinArr.length;
            for (var s = 0; s < l; s++) {
                var ballSkin = skinArr[s];
                var buleRing = ballSkin._childs[0];
                this.skinProcess(ballSkin, buleRing);
            }
        }
        // 开始皮肤监听
        this.skinMouseOn();
        // 返回按钮监听
        this.button_break.on(Laya.Event.MOUSE_DOWN, this, this.hideView);
    };
    /**
     * 把页面的皮肤全部存到一个数组，好方便监听
     * @param skin 传入皮肤
     * @param ring 传入蓝圈
     */
    ballSkinView.prototype.skinProcess = function (skin, ring) {
        this.allSkinArr.push(skin);
        this.allRingArr.push(ring);
        // console.log(this.allSkinArr.length + "\t$$$$$\t" + this.allRingArr.length);
        return this;
    };
    /** 皮肤点击监听 */
    ballSkinView.prototype.skinMouseOn = function () {
        // 寄存两个数组
        var allSkinArr = this.allSkinArr;
        var allRingArr = this.allRingArr;
        // 获取长度
        var len = this.allSkinArr.length;
        for (var i = 0; i < len; i++) {
            var skin = allSkinArr[i];
            skin.on(Laya.Event.MOUSE_DOWN, this, this.ballSkinDown, [i, skin.name]);
        }
        return this;
    };
    /** 检测皮肤点击 */
    ballSkinView.prototype.ballSkinDown = function (n, skinName) {
        //寄存名字和皮肤
        var name = skinName;
        var p = n;
        switch (name) {
            case "lockSkin":
                console.log("敬请期待新皮肤！");
                break;
            default:
                this.ringSwitchn(p);
                break;
        }
        return this;
    };
    /** 换肤和篮圈显示 */
    ballSkinView.prototype.ringSwitchn = function (n) {
        // 寄存选中的皮肤地址
        var newSkinUrl = this.allSkinArr[0].skin;
        // let oldSkinUrl: string = this.Ball._childs[0].skin;
        this.allRingArr[this.onSkinPoinit].visible = false;
        this.allRingArr[n].visible = true;
        this.onSkinPoinit = n;
        console.log("\tnew\t" + newSkinUrl);
        return this;
    };
    /** 隐藏界面 */
    ballSkinView.prototype.hideView = function () {
        this.visible = false;
        return this;
    };
    /** 添加遮罩 */
    ballSkinView.prototype.addMaskBG = function () {
        this.maskBG = new Laya.Sprite();
        this.maskBG.graphics.drawRect(0, 0, 640, 1164, "#08f0f9");
        this.addChild(this.maskBG);
        this.maskBG.zOrder = -1;
    };
    return ballSkinView;
}(ui.ballSkinViewUI));
//# sourceMappingURL=ballSkinView.js.map