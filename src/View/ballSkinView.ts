/** 皮肤主页 */
class ballSkinView extends ui.ballSkinViewUI {
    /** 皮肤数组 */
    private allSkinArr: Array<Laya.Image> = new Array();
    /** 蓝圈数组 */
    private allRingArr: Array<Laya.Image> = new Array();
    /** 当前的选择的皮肤坐标 */
    private onSkinPoinit: number = 0;
    /** 遮罩 */
    private maskBG: Laya.Sprite;
    constructor() {
        super();
        //先初始化
        this.init();
    }

    /** 初始化 */
    private init(): void {
        this.addMaskBG();
        // 默认隐藏界面
        this.visible = false;
        let bigSkinArr: Array<Laya.HBox> = this.inWindow._childs as Array<Laya.HBox>;
        let len = bigSkinArr.length;
        // console.log("len\t" + len);
        for (let i = 0; i < len; i++) {
            let skinArr: Array<Laya.Image> = bigSkinArr[i]._childs;
            let l: number = skinArr.length;
            for (let s = 0; s < l; s++) {
                let ballSkin: Laya.Image = skinArr[s];
                let buleRing: Laya.Image = ballSkin._childs[0];
                this.skinProcess(ballSkin, buleRing);
            }
        }
        // 开始皮肤监听
        this.skinMouseOn();
        // 返回按钮监听
        this.button_break.on(Laya.Event.MOUSE_DOWN, this, this.hideView);
    }

    /**
     * 把页面的皮肤全部存到一个数组，好方便监听
     * @param skin 传入皮肤
     * @param ring 传入蓝圈
     */
    private skinProcess(skin: Laya.Image, ring: Laya.Image): ballSkinView {
        this.allSkinArr.push(skin);
        this.allRingArr.push(ring);
        console.log(this.allSkinArr.length + "\t$$$$$\t" + this.allRingArr.length);
        return this;
    }

    /** 皮肤点击监听 */
    public skinMouseOn(): ballSkinView {
        // 寄存两个数组
        let allSkinArr: Array<Laya.Image> = this.allSkinArr;
        let allRingArr: Array<Laya.Image> = this.allRingArr;
        // 获取长度
        let len = this.allSkinArr.length;
        for (let i = 0; i < len; i++) {
            let skin: Laya.Image = allSkinArr[i];
            skin.on(Laya.Event.MOUSE_DOWN, this, this.ballSkinDown, [i, skin.name]);
        }
        return this;
    }
    /** 检测皮肤点击 */
    public ballSkinDown(n: number, skinName: string): ballSkinView {
        //寄存名字和皮肤
        let name: string = skinName;
        let p: number = n;
        switch (name) {
            case "lockSkin":
                console.log("敬请期待新皮肤！")
                break;
            default:
                this.ringSwitchn(p);
                break;
        }
        return this;
    }

    /** 蓝圈切换显示 */
    public ringSwitchn(n: number): ballSkinView {
        this.allRingArr[this.onSkinPoinit].visible = false;
        this.allRingArr[n].visible = true;
        this.onSkinPoinit = n;
        return this;
    }

    /** 隐藏界面 */
    public hideView(): ballSkinView {
        this.visible = false;
        return this;
    }

    /** 添加遮罩 */
    public addMaskBG(): void {
        this.maskBG = new Laya.Sprite();
        this.maskBG.graphics.drawRect(0, 0, 640, 1164, "#08f0f9");
        this.addChild(this.maskBG);
        this.maskBG.zOrder = 0;
    }
}