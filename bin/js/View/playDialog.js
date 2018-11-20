var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var playDialog = (function (_super) {
    __extends(playDialog, _super);
    function playDialog() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    playDialog.prototype.init = function () {
        this.button_close.on(Laya.Event.MOUSE_DOWN, this, this.close);
    };
    return playDialog;
}(ui.playDialogUI));
//# sourceMappingURL=playDialog.js.map