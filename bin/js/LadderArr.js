var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 向舞台添加七个阶梯
 */
var LadderArr = (function (_super) {
    __extends(LadderArr, _super);
    function LadderArr(stage_heigth) {
        var _this = _super.call(this) || this;
        /** 往上的缩放 */
        _this.UpScale = 481 / 576; //0.83506944444444444444444444444444
        /** 下一个的缩放 */
        _this.nextScale = 576 / 481; //1.1975051975051975051975051975052
        /** 初始的缩放 */
        _this.initial_scale = Math.pow(_this.UpScale, 4); //0.48628443826573085101743493750953
        /** 屏幕的宽度 */
        _this.stageW = 640;
        /** 完成的帧*/
        _this.complete_frames = 30;
        /** 向下落的总长度 */
        _this.ladder_total_Y = 346.80306693920477; //934.8820346401794
        /** 向下落速度  = 阶梯群的总高度 / 全部的帧数 */
        _this.dowm_speed = _this.ladder_total_Y / _this.complete_frames;
        /** 增加的透明值 */
        _this.add_alpha = 0.8 / (_this.complete_frames * 2);
        /** 阶梯每帧缩放变大的数量*/
        _this.ladder_bigger = _this.toFixed(Math.pow(_this.nextScale, 1 / _this.complete_frames), 10); //1.7172448442368613 / 0.4862844382657308
        /** 测试 */
        _this.testB = 1 - _this.initial_scale;
        _this.stage_heigth = stage_heigth;
        _this.init();
        return _this;
    }
    /**
     * 阶梯初始化
     */
    LadderArr.prototype.init = function () {
        // 阶梯数量
        var ladder_qy = 7;
        // 阶梯的y坐标
        var ladder_y = 0;
        // 设置初始的缩放
        var scale_XY = this.initial_scale;
        // 开始遍历添加阶梯
        for (var i = 0; i < ladder_qy; i++) {
            // 创建对象池
            var ladder = Laya.Pool.getItemByClass("ladder", Ladder);
            // 给前两个添加透视
            if (i == 0) {
                ladder.alpha = 0.2;
            }
            else if (i == 1) {
                ladder.alpha = 0.6;
            }
            else {
                ladder.alpha = 1;
            }
            ;
            // 设置阶梯的边际范围
            // ladder.setBounds(new Laya.Rectangle(0, 0, 720, 150));
            // 给阶梯设置缩放
            ladder.scale(scale_XY, scale_XY);
            // 设置居中的 X位置
            var ladder_x = (this.stageW - ladder.getBounds().width) / 2;
            if (i > 3) {
                ladder.spr_clean();
            }
            // 添加到Box
            this.addChild(ladder);
            // 设置位置  ladder_x是居中的位置。  vy的上一个阶梯的 ladder.y + ladder.heigth
            ladder.pos(ladder_x, ladder_y);
            // console.log("第" + i + "个阶梯  X: " + ladder.getBounds().x + "\t  Y: " + ladder.getBounds().y + "\theigth:  " + ladder.getBounds().height);
            // console.log("scaleXY: " + ladder.scaleX);
            // 设置阶梯的名字
            ladder.name = "ladder";
            // 下一个的阶梯的缩放值
            scale_XY *= this.nextScale;
            // 下一个阶梯的Y坐标
            ladder_y += ladder.height * ladder.scaleX;
            //  计算阶梯群Y的坐标。   stage.heigth - 所有阶梯的高度总和
            if (i == (ladder_qy - 1)) {
                this.ladderArrHeigth = ladder_y; //ladderArrHeigth = 阶梯群的总高度
                this.ladderArr_Y = this.stage_heigth - this.ladderArrHeigth;
                console.log(" 阶梯群高度:  " + this.ladderArrHeigth);
            }
        }
    };
    /**
     * 开始了下落
     */
    LadderArr.prototype.startDowm = function () {
        // 对阶梯群每个阶梯开始遍历变化
        var len = this._childs.length; //获取阶梯的长度
        var ladderArr = this._childs; //寄存阶梯数组
        var stageWidth = this.stageW; //屏幕的宽度
        var ladderTotalY = this.ladder_total_Y; //寄存下落的总长度
        for (var i = 0; i < len; i++) {
            var ladder = ladderArr[i];
            ladder.scaleX *= this.ladder_bigger;
            ladder.scaleY *= this.ladder_bigger;
            /**居中设置 */
            var ladderWidth = ladder.getBounds().width;
            var center = (stageWidth - ladderWidth) / 2;
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
            this.toFixed(ladder.scaleX, 3) == this.toFixed(1.717251730359543, 3)) {
                // 重置越界的阶梯
                this.ladder_rect(ladder);
            }
            if (ladder.alpha < 1.1) {
                ladder.alpha += this.add_alpha;
            }
        }
    };
    /**
     * 保留小数点的function
     * @param num  传入的数
     * @param d   保留几位小数
     */
    LadderArr.prototype.toFixed = function (num, d) {
        num *= Math.pow(10, d);
        num = Math.round(num);
        // 返回计算好的数
        return num / (Math.pow(10, d));
    };
    /**
     * 阶梯初始化，包括阶梯内的组件
     * @param ladder 需要重置的阶梯
     */
    LadderArr.prototype.ladder_rect = function (ladder) {
        // 重置阶梯里的精灵
        ladder.spr_rect();
        var scale_XY = this.initial_scale;
        ladder.scale(scale_XY, scale_XY);
        // 设置居中的 X位置
        var ladder_x = (this.stageW - ladder.getBounds().width) / 2;
        // 设置阶梯初始化Y的位置
        var ladder_y = 0;
        // 阶梯重置位置和 透明度
        ladder.pos(ladder_x, ladder_y).alpha = 0.2;
    };
    /**
     *阶梯重置
     *推荐写法  $$$.ladderArrRect.init();阶梯重置后初始化
     */
    LadderArr.prototype.ladderArrRect = function () {
        var len = this._childs.length;
        var ladderArr = this._childs;
        for (var i = 0; i < len; i++) {
            ladderArr[0].destroy();
        }
        return this;
    };
    return LadderArr;
}(Laya.Box));
//# sourceMappingURL=LadderArr.js.map