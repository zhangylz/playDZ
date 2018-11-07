/**
 * 角色类
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super.call(this) || this;
        // 初始化
        _this.init();
        return _this;
    }
    Role.prototype.init = function () {
        // 缓存球爆炸
        Laya.Animation.createFrames(["ballBoom/01.png", "ballBoom/02.png", "ballBoom/03.png", "ballBoom/04.png", "ballBoom/05.png", "ballBoom/06.png", "ballBoom/07.png",
            "ballBoom/08.png", "ballBoom/09.png", "ballBoom/10.png", "ballBoom/11.png"], "ballBoom");
        this.body = new Laya.Animation();
        this.addChild(this.body);
        this.palyAction("ballboom");
    };
    Role.prototype.palyAction = function (action) {
        // 根据类型播放
        this.body.play(0, true, action);
        // 获取父对象的显示区域
        var test = this.body.getBounds();
        this.body.pos(test.width / 2, test.height / 2);
    };
    return Role;
}(Laya.Sprite));
//# sourceMappingURL=Role.js.map