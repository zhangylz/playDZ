/**
 * 阶梯类
 */
class Ladder extends Laya.Image {
    // 阶梯宽度
    public ladder_width: number = 640;
    // 阶梯高度
    public ladder_heigth: number = 150 * (8 / 9);
    // 子精灵宽度
    private spr_width: number = 58.18;
    // 子精灵高度
    private spr_heigth: number = 58.18;
    // 精灵数组
    public spr_arr: Array<Laya.Sprite>;
    // 子精灵x坐标
    public sprX_arr: Array<number> = [58.18, 174.55, 290.91, 407.27, 523.64];
    // 子精灵y坐标
    public sprY: number = 0;
    // 最大的障碍数 <0 && >5;
    public ob_maximum = 3;
    //随机障碍数
    public random_ob: number = Math.floor(Math.random() * this.ob_maximum + 1);
    // 把随机数寄存到数据   当添加红包砖石白圈的时候用到它
    public random_arr = new Array();
    // 构造函数
    constructor() {
        super();
        // 精灵初始化
        this.width = this.ladder_width;
        this.height = this.ladder_heigth;
        // 设置设置阶梯的边际范围
        this.setBounds(new Laya.Rectangle(0, 0, this.width, this.height));
        this.init();
    }
    // 精灵初始化
    private init() {
        // 加载阶梯图片，放在坐标 0，0
        this.loadImage("res/ladder/image_ladder.png", 0, 0, this.ladder_width, this.ladder_heigth);
        // 开始添加障碍 添加白圈 添加砖石 or 红包
        this.spr_add_ob().spr_add_ov(this.random_arr).spr_add_gift(this.random_arr);
        // 添加白圈
        // this.spr_add_ov(this.random_arr);
        // 添加砖石 or 红包
        // this.spr_add_gift(this.random_arr);
        // 设置自动宽高
        this.autoSize = true;
    }
    /**
     * 添加障碍精灵
     */
    private spr_add_ob() {
        // 生成一个随机数，此随机数拿来确定 生成多少个障碍
        let random_ob_length = this.random_ob;
        while (this.random_arr.length != random_ob_length) {
            // 生成一下随机数，此随机数是拿来获取 sprX_arr的下标
            let random_e = Math.floor(Math.random() * this.sprX_arr.length);
            // 判断
            if (this.random_arr.indexOf(random_e) == -1) {
                // 寄存随机数
                this.random_arr.push(random_e);
                // console.log(this.sprX_arr[random_e]);
                // 生成生成一个障碍的精灵实例
                let spr_ob: Laya.Sprite = Laya.Pool.getItemByClass("spr_ob", Laya.Sprite);
                spr_ob.name = "spr_ob";
                spr_ob.pos(this.sprX_arr[random_e], 0);
                // 加载图片
                spr_ob.loadImage("ladder/image_obstacle.png", 0, 0, this.spr_width, this.spr_heigth);
                // 添加障碍
                this.addChild(spr_ob);
            }
        }
        // 返回阶梯
        return this;
    }

    /**
     * 添加白圈精灵
     * @param random_arr 寄存的随机数数组，方便处理
     */
    private spr_add_ov(random_arr: Array<number>) {
        let judge: boolean = true;
        // 实例化白圈精灵
        let spr_ov: Laya.Sprite = Laya.Pool.getItemByClass("spr_ov", Laya.Sprite);
        spr_ov.name = "spr_ov";
        // 加载图片并添加
        while (judge) {
            // 生成一个随机数，用来添加白圈
            let random_e = Math.floor(Math.random() * this.sprX_arr.length);
            // 检查时候重复的随机数 否继续循环
            if (this.random_arr.indexOf(random_e) === -1) {
                spr_ov.pos(this.sprX_arr[random_e], 40.5);
                spr_ov.loadImage("ladder/image_oval_white.png", 0, 0, this.spr_width, 15)
                // 添加白圈
                this.addChild(spr_ov);
                // 寄存随机数
                this.random_arr.push(random_e);
                // 结束循环
                judge = false;
            }
        }
        // 打印寄存的随机数
        // console.log(this.random_arr);
        return this;
    }
    /**
     * 添加惊喜  砖石 or 红包
     * @param random_arr 寄存的随机数数组，方便处理
     */
    private spr_add_gift(random_arr: Array<number>) {
        // 生成一个随机数，用来判断是否添加红包或者砖石
        let decide_add: number = Math.random();
        // 生成一个随机数用来判断添加的是红包还是砖石
        let do_or_hb: number = Math.random();
        //  do 是砖石的简称
        let spr_do: Laya.Sprite = Laya.Pool.getItemByClass("spr_do", Laya.Sprite);
        spr_do.name = "spr_do";
        // 加载和钻石的图片
        spr_do.loadImage("ladder/image_diamond.png", 0, 0, this.spr_width * 0.77, 50);
        //  hb 是砖石的简称
        let spr_hb: Laya.Sprite = Laya.Pool.getItemByClass("spr_hb", Laya.Sprite);
        spr_hb.name = "spr_hb";
        // 加载红包的图片
        spr_hb.loadImage("ladder/image_hongbaop.png", 0, 0, this.spr_width * 0.77, this.spr_heigth);
        if (random_arr.length <= 4) {
            if (decide_add >= 0.9) {
                // 开始循环
                let syart_Loop: boolean = true;
                while (syart_Loop) {
                    // 生成一个随机数，用来添加奖励
                    let random_e = Math.floor(Math.random() * this.sprX_arr.length);
                    // 检测随机是否在随机数组重复
                    if (this.random_arr.indexOf(random_e) == -1) {
                        this.random_arr.push(random_e);
                        // 随机数大雨0.85就放入红包 否则是砖石
                        if (do_or_hb > 0.9) {
                            // 自动射击宽高
                            spr_hb.autoSize = true;
                            // 添加红包的坐标
                            spr_hb.pos(this.sprX_arr[random_e], 0);
                            // 红包的边界
                            let hb_Bounds: Laya.Rectangle = new Laya.Rectangle(this.sprX_arr[random_e], 0, this.spr_width * 0.77, this.spr_heigth)
                            // 设置红包的边界
                            spr_hb.setBounds(hb_Bounds);
                            // 添加红包到阶梯
                            this.addChild(spr_hb);
                        } else {
                            // 自动设置宽高
                            spr_do.autoSize = true;
                            // 添加砖石的坐标
                            spr_do.pos(this.sprX_arr[random_e], 10);
                            // 砖石的的边界
                            let do_Bounds: Laya.Rectangle = new Laya.Rectangle(this.sprX_arr[random_e], 10, this.spr_width * 0.77, 50);
                            // 设置砖石的边界
                            spr_do.setBounds(do_Bounds);
                            // 添加砖石到阶梯
                            this.addChild(spr_do);
                        }
                        // 结束循环
                        syart_Loop = false;
                    }
                }
            }
        }
        return this;
    }

    /**
     * 阶梯左右滑动
     */
    private spr_slide(): void {
    }

    /**
     * 精灵组件初始化，障碍，白圈，红包，砖石。都初始化
     */
    public spr_rect() {
        // console.log("rect ladder");
        let s = this._childs.length;
        if (s > 0) {
            for (let i = 0; i < s; i++) {
                this._childs[0].destroy();
            }
        }
        this.random_arr = [];
        // 开始添加障碍
        this.spr_add_ob().spr_add_ov(this.random_arr).spr_add_gift(this.random_arr);
        // console.log("长度： " + this.random_arr.length);
    }

    /**
     * 清除阶梯上的寄存精灵
     */
    public spr_clean() {
        let len = this._childs.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                this._childs[0].destroy();
            }
        }
        return this;
    }

}