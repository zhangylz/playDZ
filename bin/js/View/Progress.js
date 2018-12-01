var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Progres = (function (_super) {
    __extends(Progres, _super);
    function Progres() {
        return _super.call(this) || this;
    }
    /** 显示加载进度 */
    Progres.prototype.changeText = function (progress) {
        this.percentage.text = String(progress * 100 << 0 / 100) + "%";
    };
    return Progres;
}(ui.ProgressUI));
//# sourceMappingURL=Progress.js.map