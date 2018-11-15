/** 游戏结束 */
class gameOver extends ui.gameOverVIewUI {
    /** 重新开始 */
    public agin_img;
    /** 回到主页 */
    public home_img;
    /** 分享复活 */
    public share_img
    /** 视频复活 */
    public void_img
    constructor() {
        super();
        this.init()
    }

    private init(): void {
        this.agin_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown)
        this.home_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.share_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.void_img.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
    }

    /** 
     * 检测鼠标按下
     *@param e 事件触发回调对象 
     */
    private mouseDown(e: Laya.Event): void {
        // 寄存触发事件的父级名字
        let name = e.target.name;
        // console.log(e.target.name);
        switch (name) {
            case "agin_img":
                // console.log("RECT!");
                this.gameAgin();
                break;
            case "home_img":
                // console.log("GO Game Home!");
                this.gameHome();
                break;
            case "share_img":
                // console.log("Share Frinde!");
                this.shareGeme();
                break;
            case "void_img":
                // console.log("Seeing Void");
                this.voidRelive();
                break;
            default:
                console.log("that is nothing!");
                break;
        }
    }
    /** 重新开始游戏 */
    private gameAgin(): this {
        console.log("Game Agin")
        return this;
    }

    /** 返回主页 */
    private gameHome(): this {
        console.log("goBreak Game Home");
        return this;
    }

    /** 分享复活 */
    private shareGeme(): this {
        console.log("share game to frinde");
        return this;
    }

    /** 视频复活 */
    private voidRelive(): this {
        console.log("Watch void to Relive");
        return this;
    }
}