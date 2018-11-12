var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var gameOverVIewUI = (function (_super) {
        __extends(gameOverVIewUI, _super);
        function gameOverVIewUI() {
            return _super.call(this) || this;
        }
        gameOverVIewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameOverVIewUI.uiView);
        };
        return gameOverVIewUI;
    }(View));
    gameOverVIewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 349, "x": 50, "skin": "游戏中-游戏结算/窗.png" }, "child": [{ "type": "Image", "props": { "y": 220, "x": 34, "skin": "游戏中-游戏结算/内.png" }, "child": [{ "type": "Box", "props": { "y": 43, "x": 6, "var": "box_hb_open" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "游戏中-游戏结算/红包.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 143, "skin": "游戏中-游戏结算/红包.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 287, "skin": "游戏中-游戏结算/红包.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": -4, "x": 430, "skin": "游戏中-游戏结算/红包.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }] }, { "type": "Box", "props": { "y": 16, "x": 7, "var": "box_hb" }, "child": [{ "type": "Image", "props": { "y": 10, "x": 142, "skin": "游戏中-游戏结算/组 2377 拷贝.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "wordWrap": true, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 52, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 285, "skin": "游戏中-游戏结算/组 2377 拷贝.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 45, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 428, "skin": "游戏中-游戏结算/组 2377 拷贝.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 45, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 0, "skin": "游戏中-游戏结算/组 2377 拷贝.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "wordWrap": true, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 52, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }] }] }, { "type": "Box", "props": { "y": 428, "x": 33, "var": "box_botton" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 0, "var": "restart_img", "skin": "游戏中-游戏结算/按钮.png", "name": "restart_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "游戏中-游戏结算/返回.png" } }] }, { "type": "Image", "props": { "y": 2, "x": 149, "var": "home_img", "skin": "游戏中-游戏结算/按钮.png", "name": "home_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "游戏中-游戏结算/首页.png" } }] }, { "type": "Image", "props": { "x": 298, "var": "share_img", "skin": "游戏中-游戏结算/按钮.png", "name": "share_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "游戏中-游戏结算/分享复活.png" } }] }, { "type": "Image", "props": { "y": 1, "x": 447, "var": "void_img", "skin": "游戏中-游戏结算/按钮.png", "name": "void_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "游戏中-游戏结算/视频复活.png" } }] }, { "type": "Box", "props": { "y": -47, "x": 5, "width": 0, "var": "box_text", "height": 0 }, "child": [{ "type": "Text", "props": { "y": 145, "x": -14, "var": "restart_text", "text": "重新开始", "name": "restart_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 146, "x": 137, "var": "home_text", "text": "返回首页", "name": "home_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 146, "x": 287, "var": "share_text", "text": "分享复活", "name": "share_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 148, "x": 438, "var": "video_text", "text": "视频复活", "name": "video_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }] }] }] }, { "type": "Box", "props": { "y": 485, "x": 100, "var": "box_bill", "name": "box_bill" }, "child": [{ "type": "Text", "props": { "y": 3, "x": 0, "text": "本次得分：", "fontSize": 35, "font": "Arial", "bold": true } }, { "type": "Text", "props": { "y": 3, "x": 380, "text": "砖石：", "fontSize": 35, "font": "Arial", "bold": true } }, { "type": "Text", "props": { "y": 1, "x": 174, "var": "score", "text": "5551", "name": "score", "fontSize": 40, "font": "Arial", "color": "#5284ee", "bold": true } }, { "type": "Text", "props": { "y": 2, "x": 478, "var": "od", "text": "59", "name": "od", "fontSize": 40, "font": "Arial", "color": "#5284ee", "bold": true } }] }] };
    ui.gameOverVIewUI = gameOverVIewUI;
})(ui || (ui = {}));
(function (ui) {
    var gameViewUI = (function (_super) {
        __extends(gameViewUI, _super);
        function gameViewUI() {
            return _super.call(this) || this;
        }
        gameViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameViewUI.uiView);
        };
        return gameViewUI;
    }(View));
    gameViewUI.uiView = { "type": "View", "props": { "x": 0, "width": 720, "name": "gamehome", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 230, "width": 150, "var": "right_frame", "skin": "ui/图标框1.png", "right": 0, "name": "right_frame", "height": 450 }, "child": [{ "type": "Image", "props": { "y": 170, "x": 30, "width": 100, "var": "reward", "skin": "ui/image_reward.png", "right": 20, "name": "reward", "height": 100 } }, { "type": "Image", "props": { "y": 320, "x": 30, "width": 100, "var": "tuiqian", "skin": "ui/image_tuiqian.png", "right": 20, "name": "tuiqian", "height": 100 } }, { "type": "Image", "props": { "y": 20, "x": 30, "width": 100, "var": "my_hb", "skin": "ui/image_myhb.png", "name": "my_hb", "height": 100 }, "child": [{ "type": "Text", "props": { "y": 40, "x": 24, "var": "hb_timer", "text": "20:00", "name": "hb_timer", "fontSize": 20, "color": "#f8e4e4", "bold": true } }] }] }, { "type": "Image", "props": { "y": 230, "x": 0, "width": 150, "var": "left_frame", "skin": "ui/图标框2.png", "name": "left_frame", "left": 0, "height": 450 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 20, "width": 100, "var": "music_off", "skin": "ui/music_off.png", "name": "music_off", "left": 20, "height": 100 } }, { "type": "Image", "props": { "y": 170, "x": 20, "width": 100, "var": "invite", "skin": "ui/image_invite.png", "name": "invite", "left": 20, "height": 100 } }, { "type": "Image", "props": { "y": 320, "x": 20, "width": 100, "var": "jieshao", "skin": "ui/image_jieshao.png", "name": "jieshao", "left": 20, "height": 100 } }] }, { "type": "Image", "props": { "y": 20, "x": 450, "var": "add_xcx", "skin": "ui/image_addxcx.png", "name": "add_xcx" } }, { "type": "Image", "props": { "y": 84, "x": 130, "width": 460, "var": "logo", "skin": "ui/image_logo.png", "name": "logo", "height": 205 } }, { "type": "Box", "props": { "y": 257, "x": 259, "var": "box_fraction", "name": "box_fraction" }, "child": [{ "type": "Image", "props": { "y": 9, "x": 9, "width": 50, "var": "crown", "skin": "ui/image_crown.png", "name": "crown", "height": 50 } }, { "type": "Text", "props": { "y": 0, "x": 78, "var": "fraction", "text": "2666", "name": "fraction", "fontSize": 50, "font": "Microsoft YaHei", "color": "#2d71d6", "bold": true } }] }, { "type": "Box", "props": { "y": 11, "x": 20, "var": "box_do", "name": "box_do" }, "child": [{ "type": "Image", "props": { "y": 9, "width": 50, "var": "diamond", "skin": "ui/image_do.png", "name": "diamond", "height": 50 } }, { "type": "Text", "props": { "x": 73, "text": "888", "fontSize": 50, "font": "Microsoft YaHei", "color": "#2d71d6", "bold": true } }] }, { "type": "Image", "props": { "y": 850, "var": "ranking", "skin": "ui/image_Leaderboard.png", "right": 0, "name": "ranking" }, "child": [{ "type": "Image", "props": { "y": 41, "x": 53, "skin": "ui/image_paihang.png" } }, { "type": "Text", "props": { "y": 122, "x": 31, "text": "好友排行", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 850, "var": "changeBallSkin", "skin": "ui/image_ballSkin.png", "name": "changeBallSkin", "left": 0 }, "child": [{ "type": "Image", "props": { "y": 42, "x": 32, "skin": "ui/image_ball.png", "scaleY": 1, "scaleX": 1 } }, { "type": "Text", "props": { "y": 122, "x": 19, "text": "更换皮肤", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "y": 1100, "x": 200, "var": "prompt_box", "name": "prompt_box" }, "child": [{ "type": "Image", "props": { "var": "boot_prompt", "skin": "ui/image_boot_prompt.png", "name": "boot_prompt", "alpha": 0.8 } }, { "type": "Image", "props": { "x": 50, "width": 49, "var": "guide", "skin": "ui/image_guide.png", "name": "guide", "height": 89, "alpha": 0.8 } }] }] };
    ui.gameViewUI = gameViewUI;
})(ui || (ui = {}));
(function (ui) {
    var hbViewUI = (function (_super) {
        __extends(hbViewUI, _super);
        function hbViewUI() {
            return _super.call(this) || this;
        }
        hbViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.hbViewUI.uiView);
        };
        return hbViewUI;
    }(View));
    hbViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 400, "x": 92, "skin": "红包/窗.png" }, "child": [{ "type": "Image", "props": { "y": 45, "x": 436, "width": 40, "var": "shutDown", "skin": "红包/关闭.png", "name": "shutDown", "height": 40 } }, { "type": "Image", "props": { "y": 320, "x": 92, "var": "keepOn", "skin": "红包/按钮.png", "name": "keepOn" }, "child": [{ "type": "Text", "props": { "y": 13, "x": 56, "text": "继续打开红包", "fontSize": 40, "font": "Microsoft YaHei", "color": "#e51512", "bold": true } }] }, { "type": "Text", "props": { "y": 269, "x": 163, "var": "deposit", "text": "已存入我的红包", "name": "deposit", "fontSize": 30, "font": "Microsoft YaHei", "color": "#fff3da", "bold": false, "alpha": 0.8 } }, { "type": "Text", "props": { "y": 117, "x": 148, "var": "getMoney", "text": "￥0.5", "name": "getMoney", "fontSize": 100, "font": "Arial", "color": "#db4a2e", "bold": true } }, { "type": "Label", "props": { "y": 422, "x": 206, "var": "withdraw", "underline": true, "text": "我要提现", "name": "withdraw", "fontSize": 30, "font": "SimHei", "color": "#e3d3d3", "bold": true, "alpha": 0.8 } }] }] };
    ui.hbViewUI = hbViewUI;
})(ui || (ui = {}));
(function (ui) {
    var inGameViewUI = (function (_super) {
        __extends(inGameViewUI, _super);
        function inGameViewUI() {
            return _super.call(this) || this;
        }
        inGameViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.inGameViewUI.uiView);
        };
        return inGameViewUI;
    }(View));
    inGameViewUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 20, "var": "hongbao", "skin": "游戏中/红包icon.png", "scaleY": 1.5, "scaleX": 1.5, "name": "hongbao" }, "child": [{ "type": "Image", "props": { "y": -10, "x": 33, "width": 35, "var": "prompt_1", "skin": "游戏中/红包收集.png", "name": "prompt_1", "height": 35 }, "child": [{ "type": "Text", "props": { "y": 2, "x": 9, "var": "hbNumber", "text": "5", "name": "hbNumber", "fontSize": 30, "font": "Arial", "color": "#fff3da", "bold": true } }] }] }, { "type": "Image", "props": { "y": 39, "x": 115, "var": "prompt_0", "skin": "游戏中/本局游戏结束后打开.png", "name": "prompt_0" } }, { "type": "Image", "props": { "y": 150, "x": 20, "var": "prompt_surpass", "skin": "游戏中/即将超越.png", "name": "prompt_surpass" }, "child": [{ "type": "Text", "props": { "y": 40, "x": 15, "var": "surpass_fraction", "text": "10999", "name": "surpass_fraction", "fontSize": 40, "font": "Arial", "color": "#e3dd48", "bold": true } }] }, { "type": "Text", "props": { "y": 250, "x": 244, "width": 0, "var": "fraction", "text": "9999", "strokeColor": "#d6a644", "stroke": 7, "overflow": "visible", "name": "fraction", "height": 0, "fontSize": 100, "font": "Arial", "color": "#167dcf", "bold": true, "align": "center" } }] };
    ui.inGameViewUI = inGameViewUI;
})(ui || (ui = {}));
(function (ui) {
    var myHbUI = (function (_super) {
        __extends(myHbUI, _super);
        function myHbUI() {
            return _super.call(this) || this;
        }
        myHbUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.myHbUI.uiView);
        };
        return myHbUI;
    }(View));
    myHbUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "y": 430, "x": 50, "skin": "我的红包/我的红包.png" }, "child": [{ "type": "Image", "props": { "y": 340, "x": 485, "var": "withdraw", "skin": "我的红包/按钮.png", "name": "withdraw" }, "child": [{ "type": "Text", "props": { "y": 10, "x": 22, "text": "提现", "fontSize": 30, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Text", "props": { "y": 313, "x": 20, "var": "balance", "valign": "middle", "text": "余额: 9.99 (元) ", "name": "balance", "fontSize": 40, "font": "SimHei", "color": "#de1511", "bold": true, "align": "center" } }, { "type": "Text", "props": { "y": 371, "x": 20, "var": "prompt", "text": "温馨提示：红包满20元可提现", "name": "prompt", "fontSize": 25, "font": "Helvetica", "color": "#ccc1c1", "bold": true } }, { "type": "Image", "props": { "y": 5, "x": 580, "var": "closed", "skin": "我的红包/关闭.png", "name": "closed" } }] }] };
    ui.myHbUI = myHbUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map