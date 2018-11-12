/**
 * 向舞台添加七个阶梯
 */
class LadderArr extends Laya.Box {
    /** 往上的缩放 */
    private UpScale = 481 / 576;    //0.83506944444444444444444444444444
    /** 下一个的缩放 */
    private nextScale = 576 / 481;   //1.1975051975051975051975051975052
    /** 初始的缩放 */
    private initial_scale: number = Math.pow(this.UpScale, 4);  //0.48628443826573085101743493750953
    private stage_heigth: number;
    /** 阶梯的总高度 */
    public ladderArr_heigth: number;
    /** 阶梯群的总高度 */
    public ladderArrHeigth: number;
    constructor(stage_heigth: number) {
        super();
        this.stage_heigth = stage_heigth;
        this.init();
    }
    /**
     * 阶梯初始化
     */
    public init(): void {
        // 阶梯数量
        let ladder_qy: number = 7;
        // 阶梯的y坐标
        let ladder_y: number = 0;
        // 设置初始的缩放
        let scale_XY = this.initial_scale;
        // 开始遍历添加阶梯
        for (let i = 0; i < ladder_qy; i++) {
            // 创建对象池
            let ladder: Ladder = Laya.Pool.getItemByClass("ladder", Ladder);
            // 给前两个添加透视
            if (i == 0) { ladder.alpha = 0.2; } else if (i == 1) { ladder.alpha = 0.6; } else { ladder.alpha = 1 };
            // 设置阶梯的边际范围
            ladder.setBounds(new Laya.Rectangle(0, 0, 720, 150));
            // 给阶梯设置缩放
            ladder.scale(scale_XY, scale_XY);
            // 设置居中的 X位置
            let ladder_x = (720 - ladder.getBounds().width) / 2;
            if (i > 3) {
                ladder.spr_clean();
            }
            // 添加到Box
            this.addChild(ladder);
            // 设置位置  ladder_x是居中的位置。  vy的上一个阶梯的 ladder.y + ladder.heigth
            ladder.pos(ladder_x, ladder_y);
            console.log("第" + i + "个阶梯  X: " + ladder.getBounds().x + "  ************  Y: " + ladder.getBounds().y);
            console.log("scaleXY: " + ladder.scaleX);
            // 设置阶梯的名字
            ladder.name = "ladder";
            // 下一个的阶梯的缩放值
            scale_XY *= this.nextScale;
            // 下一个阶梯的Y坐标
            ladder_y += 150 * ladder.scaleX;
            //  计算阶梯群Y的坐标。   stage.heigth - 所有阶梯的高度总和
            if (i == (ladder_qy - 1)) {
                this.ladderArrHeigth = ladder_y;   //ladderArrHeigth = 阶梯群的总高度
                this.ladderArr_heigth = this.stage_heigth - this.ladderArrHeigth;
                console.log(" 阶梯群高度:  " + this.ladderArr_heigth);
            }
        }
    }

    /** 完成的帧*/
    public complete_frames: number = 30;
    /** 向下落的总长度 */
    private ladder_total_Y: number = 390.15345030660546;  //934.8820346401794
    /** 向下落速度  = 阶梯群的总高度 / 全部的帧数 */
    private dowm_speed: number = this.ladder_total_Y / this.complete_frames;
    /** 增加的透明值 */
    private add_alpha: number = 0.8 / (this.complete_frames * 2);
    /** 阶梯每帧缩放变大的数量*/
    private ladder_bigger: number = this.toFixed(Math.pow(this.nextScale, 1 / this.complete_frames), 10); //1.7172448442368613 / 0.4862844382657308
    /** 测试 */
    private testB = 1 - this.initial_scale;

    /**
     * 开始了下落
     */
    public startDowm(): void {
        // 对阶梯群每个阶梯开始遍历变化
        let len = this._childs.length;  //获取阶梯的长度
        let ladderArr = this._childs as Array<Ladder>; //寄存阶梯数组
        let stageWidth = 720;       //屏幕的宽度
        let ladderTotalY = this.ladder_total_Y; //寄存下落的总长度
        for (let i = 0; i < len; i++) {
            let ladder = ladderArr[i];
            ladder.scaleX *= this.ladder_bigger;
            ladder.scaleY *= this.ladder_bigger;
            /**居中设置 */
            let ladderWidth: number = ladder.getBounds().width;
            let center = (stageWidth - ladderWidth) / 2;
            // 根据组件的大小来定位组件的位置
            let sY = (ladder.scaleY - this.initial_scale) / this.testB * ladderTotalY;
            ladder.pos(center, sY);
            if (Math.abs(ladder.x) < 1e-5) {
                ladder.x = 0;
            }
            if (
                Math.abs(ladder.scaleX - 1) < 1e-3
            ) {
                ladder.scaleX = 1;
                ladder.scaleY = 1;
            }
            if (
                // 判断阶梯的缩放值来和Y的坐标
                this.toFixed(ladder.scaleX, 3) == this.toFixed(1.717251730359543, 3)
            ) {
                // 重置越界的阶梯
                this.ladder_rect(ladder);
            }
            if (ladder.alpha < 1) {
                ladder.alpha += this.add_alpha;
            }
        }
    }


    /**
     * 保留小数点的function
     * @param num  传入的数
     * @param d   保留几位小数
     */
    private toFixed(num: number, d: number) {
        num *= Math.pow(10, d);
        num = Math.round(num);
        // 返回计算好的数
        return num / (Math.pow(10, d));
    }

    /**
     * 阶梯初始化，包括阶梯内的组件
     * @param ladder 需要重置的阶梯
     */
    private ladder_rect(ladder: Ladder) {
        // 重置阶梯里的精灵
        ladder.spr_rect();
        let scale_XY = this.initial_scale;
        ladder.scale(scale_XY, scale_XY)
        // 设置居中的 X位置
        let ladder_x = (720 - ladder.getBounds().width) / 2;
        // 设置阶梯初始化Y的位置
        let ladder_y = 0;
        // 阶梯重置位置和 透明度
        ladder.pos(ladder_x, ladder_y).alpha = 0.2;
    }



    /**
     *阶梯重置
     *推荐写法  $$$.ladderArrRect.init();阶梯重置后初始化
     */
    public ladderArrRect(): LadderArr {
        let len = this._childs.length;
        let ladderArr: Array<Laya.Sprite> = this._childs;
        for (let i = 0; i < len; i++) {
            ladderArr[0].destroy();
        }
        return this;
    }

}