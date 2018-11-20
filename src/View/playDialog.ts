class playDialog extends ui.playDialogUI {
    /** 关闭按钮 */
    public button_close:Laya.Image;
    constructor() {
        super();
        this.init();
    }
    private init():void{
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
    }
}