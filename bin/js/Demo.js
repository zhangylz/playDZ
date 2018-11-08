/**
 * 演示demo
 */
var Demo = (function () {
    // 构造器
    function Demo() {
        this.testTimers = 0;
        /** 往上的缩放 */
        this.UpScale = this.toFixed(481 / 576, 5); //0.83506944444444444444444444444444
        /** 下一个的缩放 */
        this.nextScale = this.toFixed(576 / 481, 5); //1.1975051975051975051975051975052
        /** 初始的缩放 */
        this.initial_scale = Math.pow(this.UpScale, 4); //0.48628443826573085101743493750953
        /** 最后一个缩放 */
        this.last_scale = this.toFixed(this.initial_scale * Math.pow(this.nextScale, 7), 10);
        /** 最后一个的X坐标 */
        this.last_x = this.toFixed(-341.18433352304334, 5);
        /** 完成的帧*/
        this.complete_frames = 30;
        /** 向下落的总长度 */
        this.ladder_total_Y = 390.15345030660546; //934.8820346401794
        /** 向下落速度  = 阶梯群的总高度 / 全部的帧数 */
        this.dowm_speed = this.ladder_total_Y / this.complete_frames;
        /** 增加的透明值 */
        this.add_alpha = 0.8 / (this.complete_frames * 2);
        /** 阶梯每帧缩放变大的数量*/
        this.ladder_bigger = this.toFixed(Math.pow(this.nextScale, 1 / this.complete_frames), 10); //1.7172448442368613 / 0.4862844382657308
        /** 测试 */
        this.testNumber = 6;
        this.testB = 1 - this.initial_scale;
        Laya.init(720, 1280, Laya.WebGL);
        Laya.stage.bgColor = "FFBBFF";
        Laya.stage.scaleMode = "showall";
        Laya.Stat.show();
        // 预加载资源
        Laya.loader.load(["res/atlas/ladder.atlas", "res/test/image_ladder.png", "res/atlas/ui.atlas"], Laya.Handler.create(this, this.onLoad));
    }
    // 加载完成
    Demo.prototype.onLoad = function (set) {
        this.ball = new Ball();
        this.ladderArr = new LadderArr(Laya.stage.height);
        // 设置阶梯的坐标
        this.ladderArr.pos(0, this.ladderArr.ladderArr_heigth);
        Laya.stage.addChild(this.ladderArr);
        Laya.stage.addChild(this.ball._childs[0]);
        Laya.timer.frameLoop(1, this, this.test);
    };
    Demo.prototype.test = function (e) {
        this.testTimers++;
        this.startDowm();
        if (this.testTimers == 60) {
            Laya.timer.clear(this, this.test);
            console.log(this.ladderArr._childs[6].scaleX + " &&&&&&&& " + this.ladderArr._childs[6].y + this.testTimers);
            console.log(this.initial_scale + "((((((((((((((((((");
        }
    };
    /**
     * 开始了下落
     */
    Demo.prototype.startDowm = function () {
        // 对阶梯群每个阶梯开始遍历变化
        var len = this.ladderArr._childs.length;
        var ladderArr = this.ladderArr._childs;
        var ladderArrWidth = 720;
        var ladderTotalY = this.ladder_total_Y;
        for (var i = 0; i < len; i++) {
            var ladder = ladderArr[i];
            ladder.scaleX *= this.ladder_bigger;
            ladder.scaleY *= this.ladder_bigger;
            /**居中设置 */
            var ladderWidth = ladder.getBounds().width;
            var center = (ladderArrWidth - ladderWidth) / 2;
            // 根据组件的大小来定位组件的位置
            var sY = (ladder.scaleY - this.initial_scale) / this.testB * ladderTotalY;
            ladder.pos(center, sY);
            if (Math.abs(ladder.x) < 1e-5) {
                ladder.x = 0;
            }
            if (Math.abs(ladder.scaleX - 1) < 1e-3) {
                ladder.scaleX = 1;
                ladder.scaleY = 1;
            }
            if (
            // 判断阶梯的缩放值来和Y的坐标
            this.toFixed(ladder.scaleX, 3) > this.toFixed(1.717251730359543, 3)) {
                // 重置越界的阶梯
                this.ladder_rect(ladder);
            }
            if (ladder.alpha < 1) {
                ladder.alpha += this.add_alpha;
            }
        }
    };
    /**
     * 保留小数点的function
     * @param num  传入的数
     * @param d   保留几位小数
     */
    Demo.prototype.toFixed = function (num, d) {
        num *= Math.pow(10, d);
        num = Math.round(num);
        // 返回计算好的数
        return num / (Math.pow(10, d));
    };
    /**
     * 阶梯初始化，包括阶梯内的组件
     * @param ladder 需要重置的阶梯
     */
    Demo.prototype.ladder_rect = function (ladder) {
        // 重置阶梯里的精灵
        ladder.spr_rect();
        var scale_XY = this.initial_scale;
        ladder.scale(scale_XY, scale_XY);
        // 设置居中的 X位置
        var ladder_x = (720 - ladder.getBounds().width) / 2;
        // 设置阶梯初始化Y的位置
        var ladder_y = 0;
        // 阶梯重置位置和 透明度
        ladder.pos(ladder_x, ladder_y).alpha = 0.2;
    };
    return Demo;
}());
// 演示Demo
new Demo();
//# sourceMappingURL=Demo.js.map