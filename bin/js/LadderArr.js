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
        /** 最后一个缩放 */
        _this.last_scale = _this.initial_scale * Math.pow(_this.nextScale, 7);
        /** 最后一个的X坐标 */
        _this.last_x = -341.18433352304334;
        /** 完成的帧*/
        _this.complete_frames = 180;
        /** 向下落的总长度 */
        _this.ladder_total_Y = 934.88; //934.8820346401794
        /** 向下落速度  = 阶梯群的总高度 / 全部的帧数 */
        _this.dowm_speed = _this.ladder_total_Y / _this.complete_frames;
        /** 向左偏的总长度 */
        _this.ladder_total_X = -443.14; //-443.1457461496069
        /** 往左移动的速度 */
        _this.left_speed = _this.ladder_total_X / _this.complete_frames;
        /** 增加的透明值 */
        _this.add_alpha = 0.8 / (_this.complete_frames / 3.5);
        /** 阶梯每帧缩放变大的数量*/
        _this.ladder_bigger = Math.pow(1.7172448442368613 / 0.4862844382657308, 1 / _this.complete_frames); //1.7172448442368613 / 0.4862844382657308
        /** 测试 */
        _this.testNumber = 6;
        _this.b = 0;
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
            ladder.setBounds(new Laya.Rectangle(0, 0, 720, 150));
            // 给阶梯设置缩放
            ladder.scale(scale_XY, scale_XY);
            // 设置居中的 X位置
            var ladder_x = (720 - ladder.getBounds().width) / 2;
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
                this.ladderArrHeigth = ladder_y; //ladderArrHeigth = 阶梯群的总高度
                this.ladderArr_heigth = this.stage_heigth - this.ladderArrHeigth;
                console.log(" 阶梯群高度:  " + this.ladderArr_heigth);
            }
        }
    };
    /**
     * 开始了下落
     */
    LadderArr.prototype.startDowm = function () {
        // 寄存阶梯
        var ladder_arr = this._childs;
        // 数组长度
        var len = ladder_arr.length;
        // 初始的大小
        var ladder_initial_scale = this.initial_scale;
        for (var i = 0; i < len; i++) {
            if (
            // 判断阶梯是否越界  926越界目前比较稳定
            ladder_arr[i].y > 926) {
                // 重置越界的阶梯
                this.ladder_rect(ladder_arr[i]);
                //测试
                console.log(this.testNumber + "  $$$$$$$$$$$$$$$$$$$$$$");
                this.testNumber--;
                if (this.testNumber < 0) {
                    this.testNumber = 6;
                }
            }
            // 阶梯的缩放值  添加的Y坐标或者X坐标都要 * 缩放值
            var slcaeXY = ladder_arr[i].scaleX;
            // 增加Y坐标
            ladder_arr[i].x += this.left_speed * slcaeXY;
            // 减少X坐标
            ladder_arr[i].y += this.dowm_speed * slcaeXY;
            // 阶梯变大
            ladder_arr[i].scaleX *= this.ladder_bigger;
            ladder_arr[i].scaleY *= this.ladder_bigger;
            // 如果透明值少于1那就增加透明值
            if (ladder_arr[i].alpha < 1) {
                ladder_arr[i].alpha += this.add_alpha;
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
        var ladder_x = (720 - ladder.getBounds().width) / 2;
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