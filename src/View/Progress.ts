class Progres extends ui.ProgressUI {
    constructor() {
        super();
    }
    /** 显示加载进度 */
    public changeText(progress) {
        this.percentage.text = String(progress * 100 << 0 / 100) + "%";
    }
}