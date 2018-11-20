/**
 * 获取精灵的全局坐标
 */
var spriteCollision = (function () {
    function spriteCollision() {
        /** 坐标数组 */
        this.arrXY = new Array(); //sprite全局坐标数组
        /**是否碰撞 */
        this.resultCollision = false;
    }
    /**
     * @param Ladder 传入精灵阶梯
     * @param ballSprite 传入精灵球
     */
    spriteCollision.prototype.init = function (Ladder) {
        // 赋值到全局阶梯精灵
        this.Ladder = Ladder;
        // 子精灵组
        this.sprArr = this.Ladder._childs;
        // 转换成全局坐标
        this.stageXY(this.countSprPoint());
    };
    /**
     * 计算精灵坐标并返回一个坐标组
     */
    spriteCollision.prototype.countSprPoint = function () {
        // 获取障碍组的长度
        var ob_length = this.sprArr.length;
        var arrPostion = new Array();
        var x, y;
        for (var i = 0; i < ob_length; i++) {
            var obPostion = new Laya.Point();
            x = this.sprArr[i].x;
            y = this.sprArr[i].y;
            // console.log(" X: " + x + " Y: " + y)
            obPostion.x = x;
            obPostion.y = y;
            arrPostion[i] = obPostion;
        }
        // console.log("坐标数组长度" + arrPostion.length)
        // 返回精灵数组
        // console.log(arrPostion);
        // 返回坐标组
        return arrPostion;
    };
    /**
     * 把子精灵坐标转换成stage的坐标
     * @param sprPointArr
     */
    spriteCollision.prototype.stageXY = function (sprPointArr) {
        // console.log(sprPointArr[0]);
        var arr_length = sprPointArr.length; //获取数组的长度 以便处理
        var sprPoint = new Laya.Point(); //实例一个坐标以便赋值
        for (var i = 0; i < arr_length; i++) {
            sprPoint.x = sprPointArr[i].x;
            sprPoint.y = sprPointArr[i].y;
            // console.log("没转换坐标前： " + sprPoint);
            this.Ladder.localToGlobal(sprPoint);
            this.arrXY[i] = [sprPoint.x, sprPoint.y];
        }
        // console.log(this.arrXY);
    };
    /**
     * 判断是否与球碰撞
     * @param spr_ball 传入sprite球
     */
    spriteCollision.prototype.sprCenterPoint = function (spr_ball) {
        var x1 = spr_ball.x, y1 = spr_ball.y, w1 = spr_ball.width, h1 = spr_ball.height;
        for (var i = 0; i < this.arrXY.length; i++) {
            var x2 = this.arrXY[i][0];
            var y2 = this.arrXY[i][1];
            if (Math.abs(x1 - x2) < w1 / 2 + 64.5 / 2 //this.arrXY[i].x是坐标组的子坐标组的x坐标
                &&
                    Math.abs(y1 - y2) < h1 / 2 + 64.5 / 2 //this.arrXY[i].y是坐标组的子坐标组的y坐标
            ) {
                // console.log("撞上了第" + (i + 1) + "个障碍");
                // 装上后就删除坐标组，不再检测坐标
                this.testFunction(this.sprArr[i]);
                this.arrXY.splice(i, 1);
            }
        }
    };
    spriteCollision.prototype.testFunction = function (spr) {
        var name;
        if (spr != undefined) {
            name = spr.name;
            spr.destroy();
        }
        // console.log("撞上了" + spr.name + " $$$$$");
        switch (name) {
            case "spr_ov":
                console.log("调用白圈");
                return "白圈";
            case "spr_ob":
                console.log("调用障碍");
                this.obTest();
                return "障碍";
            case "spr_do":
                console.log("调用砖石");
                return "砖石";
            case "spr_hb":
                console.log("调用红包");
                return "红包";
            case undefined:
                console.log("不知道为什么undefined!!!!!!!!");
                break;
            default:
                console.log("name undefined!");
        }
    };
    /**撞到障碍后调用的方法 */
    spriteCollision.prototype.obTest = function () {
        this.resultCollision = true;
    };
    return spriteCollision;
}());
//# sourceMappingURL=spriteCollision.js.map