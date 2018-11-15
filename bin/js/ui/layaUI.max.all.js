var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var ballSkinViewUI = (function (_super) {
        __extends(ballSkinViewUI, _super);
        function ballSkinViewUI() {
            return _super.call(this) || this;
        }
        ballSkinViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ballSkinViewUI.uiView);
        };
        return ballSkinViewUI;
    }(View));
    ballSkinViewUI.uiView = { "type": "View", "props": {}, "child": [{ "type": "Image", "props": { "top": 0, "skin": "ball_skin/image_break_button.png", "left": 40 } }, { "type": "Image", "props": { "x": 30, "skin": "ball_skin/image_inWindow.png", "bottom": 100 }, "child": [{ "type": "Image", "props": { "y": 43, "x": 50, "skin": "ball_skin/image_ball_0.png", "left": 50 } }, { "type": "Image", "props": { "y": 43, "x": 250, "skin": "ball_skin/image_ball_1.png" } }, { "type": "Image", "props": { "y": 40, "skin": "ball_skin/image_ball_2.png", "right": 50 } }, { "type": "Image", "props": { "y": 203, "x": 50, "skin": "ball_skin/image_ball_3.png", "left": 50 } }, { "type": "Image", "props": { "y": 203, "x": 250, "skin": "ball_skin/image_ball_4.png" } }, { "type": "Image", "props": { "y": 200, "skin": "ball_skin/image_ball_5.png", "right": 50 } }, { "type": "Image", "props": { "y": 370, "x": 55, "skin": "ball_skin/image_ball_0.png" } }, { "type": "Image", "props": { "y": 370, "x": 252, "skin": "ball_skin/image_ball_1.png" } }, { "type": "Image", "props": { "y": 367, "skin": "ball_skin/image_ball_2.png", "right": 50 } }, { "type": "Image", "props": { "y": 536, "x": 50, "skin": "ball_skin/image_ball_0.png", "left": 50 } }, { "type": "Image", "props": { "y": 536, "x": 250, "skin": "ball_skin/image_ball_1.png" } }, { "type": "Image", "props": { "y": 533, "skin": "ball_skin/image_ball_2.png", "right": 50 } }, { "type": "Image", "props": { "y": 683, "x": 50, "skin": "ball_skin/image_ball_0.png", "left": 50 } }, { "type": "Image", "props": { "y": 683, "x": 250, "skin": "ball_skin/image_ball_1.png" } }, { "type": "Image", "props": { "y": 680, "skin": "ball_skin/image_ball_2.png", "right": 50 } }] }, { "type": "Image", "props": { "y": 120, "x": 109, "skin": "ball_skin/image_voide_button.png" } }, { "type": "Box", "props": { "y": 55, "x": 230 }, "child": [{ "type": "Image", "props": { "y": 6, "skin": "ball_skin/image_do.png" } }, { "type": "Label", "props": { "x": 67, "text": "12345", "strokeColor": "#d92a70", "stroke": 3, "fontSize": 40, "font": "Arial", "color": "#3981dd", "bold": true } }] }] };
    ui.ballSkinViewUI = ballSkinViewUI;
})(ui || (ui = {}));
(function (ui) {
    var dailyGiftUI = (function (_super) {
        __extends(dailyGiftUI, _super);
        function dailyGiftUI() {
            return _super.call(this) || this;
        }
        dailyGiftUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.dailyGiftUI.uiView);
        };
        return dailyGiftUI;
    }(View));
    dailyGiftUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 374, "x": 10, "skin": "everyDay/window.png" }, "child": [{ "type": "Image", "props": { "y": 71, "x": 34, "skin": "everyDay/inWindow.png" } }, { "type": "Image", "props": { "y": -21, "x": 558, "var": "button_off", "skin": "everyDay/off.png", "name": "button_off" } }, { "type": "Image", "props": { "y": -44, "x": 79, "skin": "everyDay/daily_Login.png" } }, { "type": "Image", "props": { "y": 415, "x": 330, "var": "voide_get", "skin": "everyDay/image_button_1.png", "name": "voide_get" }, "child": [{ "type": "Label", "props": { "y": 17, "x": 28, "text": "看视频加倍领取", "fontSize": 28, "font": "SimHei", "color": "#fff3da" } }] }, { "type": "Image", "props": { "y": 415, "x": 40, "var": "now_get", "skin": "everyDay/image_button_2.png", "name": "now_get" }, "child": [{ "type": "Label", "props": { "y": 17, "x": 70, "text": "直接领取", "fontSize": 28, "font": "SimHei", "color": "#fff3da" } }] }, { "type": "Box", "props": { "y": 97, "x": 45, "width": 0, "height": 0 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 73, "var": "hb_1", "skin": "Game_Settlement/HBao_open.png", "name": "hb_1" }, "child": [{ "type": "Label", "props": { "y": 57, "x": 29, "text": "已拆", "fontSize": 25, "font": "SimHei", "color": "#fff3da" } }, { "type": "Label", "props": { "y": 16, "x": 24, "var": "day_1_money", "text": "￥0.5", "name": "day_1_money", "fontSize": 25, "font": "Arial", "color": "#db4a2e", "bold": true } }] }, { "type": "Image", "props": { "y": 2, "x": 212, "var": "hb_2", "skin": "everyDay/HBao.png", "name": "hb_2" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第二天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 355, "var": "hb_3", "skin": "everyDay/HBao.png", "name": "hb_3" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第三天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 17, "var": "hb_4", "skin": "everyDay/HBao.png", "name": "hb_4" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第四天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 148, "var": "hb_5", "skin": "everyDay/HBao.png", "name": "hb_5" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第五天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 279, "var": "hb_6", "skin": "everyDay/HBao.png", "name": "hb_6" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第六天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 410, "var": "hb_7", "skin": "everyDay/HBao.png", "name": "hb_7" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第7天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }] }] }] };
    ui.dailyGiftUI = dailyGiftUI;
})(ui || (ui = {}));
(function (ui) {
    var gameHomeUI = (function (_super) {
        __extends(gameHomeUI, _super);
        function gameHomeUI() {
            return _super.call(this) || this;
        }
        gameHomeUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameHomeUI.uiView);
        };
        return gameHomeUI;
    }(View));
    gameHomeUI.uiView = { "type": "View", "props": { "x": 0, "width": 640, "name": "gamehome", "height": 1136 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "startBox", "top": 0, "right": 0, "name": "srartBox", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 230, "width": 150, "var": "right_frame", "skin": "gameHome/Icon_box_rigth.png", "right": 0, "name": "right_frame", "height": 450 }, "child": [{ "type": "Image", "props": { "y": 170, "x": 30, "width": 100, "var": "reward", "skin": "gameHome/image_reward.png", "right": 20, "name": "reward", "height": 100 } }, { "type": "Image", "props": { "y": 320, "x": 30, "width": 100, "var": "tuiqian", "skin": "gameHome/image_tuiqian.png", "right": 20, "name": "tuiqian", "height": 100 } }, { "type": "Image", "props": { "y": 20, "x": 25, "width": 100, "var": "my_hb", "skin": "gameHome/image_myhb.png", "name": "my_hb", "height": 100, "centerX": 1.2 }, "child": [{ "type": "Text", "props": { "y": 40, "x": 24, "var": "hb_timer", "text": "00:00", "name": "hb_timer", "fontSize": 20, "color": "#f8e4e4", "bold": true } }] }] }, { "type": "Image", "props": { "y": 230, "x": 0, "width": 150, "var": "left_frame", "skin": "gameHome/Icon_box_left.png", "name": "left_frame", "left": 0, "height": 450 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 20, "width": 100, "var": "music_off", "skin": "gameHome/music_off.png", "name": "music_off", "left": 20, "height": 100 } }, { "type": "Image", "props": { "y": 170, "x": 20, "width": 100, "var": "invite", "skin": "gameHome/image_invite.png", "name": "invite", "left": 20, "height": 100 } }, { "type": "Image", "props": { "y": 320, "x": 20, "width": 100, "var": "jieshao", "skin": "gameHome/image_jieshao.png", "name": "jieshao", "left": 20, "height": 100 } }] }, { "type": "Image", "props": { "x": 324, "var": "add_xcx", "top": 20, "skin": "gameHome/image_addxcx.png", "name": "add_xcx" } }, { "type": "Image", "props": { "y": 84, "x": 90, "width": 460, "var": "logo", "skin": "gameHome/image_logo.png", "name": "logo", "height": 205 } }, { "type": "Box", "props": { "y": 257, "x": 168, "var": "box_fraction", "scaleY": 1.5, "scaleX": 1.5, "name": "box_fraction" }, "child": [{ "type": "Image", "props": { "y": 9, "x": 9, "width": 50, "var": "crown", "skin": "gameHome/image_crown.png", "name": "crown", "height": 50 } }, { "type": "Text", "props": { "y": 0, "x": 78, "var": "fraction", "text": "2666", "name": "fraction", "fontSize": 50, "font": "Microsoft YaHei", "color": "#2d71d6", "bold": true } }] }, { "type": "Box", "props": { "y": 11, "x": 20, "var": "box_do", "name": "box_do" }, "child": [{ "type": "Image", "props": { "y": 9, "width": 50, "var": "diamond", "skin": "gameHome/image_do.png", "name": "diamond", "height": 50 } }, { "type": "Text", "props": { "x": 73, "text": "888", "fontSize": 50, "font": "Microsoft YaHei", "color": "#2d71d6", "bold": true } }] }, { "type": "Image", "props": { "y": 850, "var": "ranking", "skin": "gameHome/image_Leaderboard.png", "right": 0, "name": "ranking" }, "child": [{ "type": "Image", "props": { "y": 41, "x": 53, "skin": "gameHome/image_paihang.png" } }, { "type": "Text", "props": { "y": 122, "x": 31, "text": "好友排行", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 850, "var": "changeBallSkin", "skin": "gameHome/image_ballSkin.png", "name": "changeBallSkin", "left": 0 }, "child": [{ "type": "Image", "props": { "y": 42, "x": 32, "skin": "gameHome/image_ball.png", "scaleY": 1, "scaleX": 1 } }, { "type": "Text", "props": { "y": 122, "x": 19, "text": "更换皮肤", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "x": 158, "var": "prompt_box", "name": "prompt_box", "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "boot_prompt", "skin": "gameHome/image_boot_prompt.png", "name": "boot_prompt", "alpha": 0.8 } }, { "type": "Image", "props": { "x": 50, "var": "guide", "skin": "gameHome/image_guide.png", "name": "guide", "alpha": 0.8 } }] }] };
    ui.gameHomeUI = gameHomeUI;
})(ui || (ui = {}));
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
    gameOverVIewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 291, "x": 10, "skin": "Game_Settlement/window.png" }, "child": [{ "type": "Image", "props": { "y": 220, "x": 34, "skin": "Game_Settlement/inWindow.png" }, "child": [{ "type": "Box", "props": { "y": 43, "x": 6, "var": "box_hb_open" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/HBao_open.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 143, "skin": "Game_Settlement/HBao_open.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 287, "skin": "Game_Settlement/HBao_open.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }, { "type": "Image", "props": { "y": -4, "x": 430, "skin": "Game_Settlement/HBao_open.png" }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 19, "x": 20, "width": 0, "text": "￥ 0.5", "height": 0, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true } }] }] }, { "type": "Box", "props": { "y": 16, "x": 7, "var": "box_hb" }, "child": [{ "type": "Image", "props": { "y": 10, "x": 0, "skin": "Game_Settlement/HBao.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "wordWrap": true, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 52, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 142, "skin": "Game_Settlement/HBao.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "wordWrap": true, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 52, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 285, "skin": "Game_Settlement/HBao.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 45, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 428, "skin": "Game_Settlement/HBao.png" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 6, "width": 97, "valign": "middle", "text": "点击分享\\n 拆开", "height": 45, "fontSize": 20, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }] }] }, { "type": "Box", "props": { "y": 428, "x": 33, "var": "box_botton" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 0, "var": "agin_img", "skin": "Game_Settlement/button.png", "name": "agin_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/image_rect.png" } }] }, { "type": "Image", "props": { "y": 2, "x": 149, "var": "home_img", "skin": "Game_Settlement/button.png", "name": "home_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/home.png" } }] }, { "type": "Image", "props": { "x": 298, "var": "share_img", "skin": "Game_Settlement/button.png", "name": "share_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/share.png" } }] }, { "type": "Image", "props": { "y": 1, "x": 447, "var": "void_img", "skin": "Game_Settlement/button.png", "name": "void_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/voide.png" } }] }, { "type": "Box", "props": { "y": -47, "x": 5, "width": 0, "var": "box_text", "height": 0 }, "child": [{ "type": "Text", "props": { "y": 145, "x": -14, "var": "restart_text", "text": "重新开始", "name": "restart_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 146, "x": 137, "var": "home_text", "text": "返回首页", "name": "home_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 146, "x": 287, "var": "share_text", "text": "分享复活", "name": "share_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 148, "x": 438, "var": "video_text", "text": "视频复活", "name": "video_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }] }] }, { "type": "Box", "props": { "y": 136, "x": 50, "var": "box_bill", "name": "box_bill" }, "child": [{ "type": "Text", "props": { "y": 3, "x": 0, "text": "本次得分：", "fontSize": 35, "font": "Arial", "bold": true } }, { "type": "Text", "props": { "y": 3, "x": 380, "text": "砖石：", "fontSize": 35, "font": "Arial", "bold": true } }, { "type": "Text", "props": { "y": 1, "x": 174, "var": "score", "text": "5551", "name": "score", "fontSize": 40, "font": "Arial", "color": "#5284ee", "bold": true } }, { "type": "Text", "props": { "y": 2, "x": 478, "var": "od", "text": "59", "name": "od", "fontSize": 40, "font": "Arial", "color": "#5284ee", "bold": true } }] }] }] };
    ui.gameOverVIewUI = gameOverVIewUI;
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
    hbViewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 342, "x": 52, "skin": "HBao/window.png" }, "child": [{ "type": "Image", "props": { "y": 45, "x": 436, "width": 40, "var": "shutDown", "skin": "HBao/off.png", "name": "shutDown", "height": 40 } }, { "type": "Image", "props": { "y": 320, "x": 92, "var": "keepOn", "skin": "HBao/buttom.png", "name": "keepOn" }, "child": [{ "type": "Text", "props": { "y": 13, "x": 56, "text": "继续打开红包", "fontSize": 40, "font": "Microsoft YaHei", "color": "#e51512", "bold": true } }] }, { "type": "Text", "props": { "y": 269, "x": 163, "var": "deposit", "text": "已存入我的红包", "name": "deposit", "fontSize": 30, "font": "Microsoft YaHei", "color": "#fff3da", "bold": false, "alpha": 0.8 } }, { "type": "Text", "props": { "y": 117, "x": 148, "var": "getMoney", "text": "￥0.5", "name": "getMoney", "fontSize": 100, "font": "Arial", "color": "#db4a2e", "bold": true } }, { "type": "Label", "props": { "y": 422, "x": 206, "var": "withdraw", "underline": true, "text": "我要提现", "name": "withdraw", "fontSize": 30, "font": "SimHei", "color": "#e3d3d3", "bold": true, "alpha": 0.8 } }] }] };
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
    inGameViewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1136 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 20, "var": "hongbao", "skin": "inGame/HBao.png", "scaleY": 1.5, "scaleX": 1.5, "name": "hongbao" }, "child": [{ "type": "Image", "props": { "y": -10, "x": 33, "width": 35, "var": "prompt_1", "skin": "inGame/HB_number.png", "name": "prompt_1", "height": 35 }, "child": [{ "type": "Text", "props": { "y": 2, "x": 9, "var": "hbNumber", "text": "0", "name": "hbNumber", "fontSize": 30, "font": "Arial", "color": "#fff3da", "bold": true } }] }] }, { "type": "Image", "props": { "y": 39, "x": 115, "var": "prompt_0", "skin": "inGame/game_end.png", "name": "prompt_0" } }, { "type": "Image", "props": { "y": 120, "x": 20, "var": "prompt_surpass", "skin": "inGame/coming_soon.png", "scaleY": 0.8, "scaleX": 0.8, "name": "prompt_surpass" }, "child": [{ "type": "Text", "props": { "y": 40, "x": 15, "var": "surpass_fraction", "text": "99999", "name": "surpass_fraction", "fontSize": 40, "font": "Arial", "color": "#e3dd48", "bold": true } }, { "type": "Image", "props": { "y": 11, "x": 150, "width": 80, "skin": "inGame/yazi.jpg", "height": 80 } }] }, { "type": "Text", "props": { "y": 200, "x": 292, "width": 0, "var": "fraction", "text": "0", "strokeColor": "#d6a644", "stroke": 7, "overflow": "visible", "name": "fraction", "height": 0, "fontSize": 100, "font": "Arial", "color": "#167dcf", "bold": true, "align": "center" } }] };
    ui.inGameViewUI = inGameViewUI;
})(ui || (ui = {}));
(function (ui) {
    var inviteGiftUI = (function (_super) {
        __extends(inviteGiftUI, _super);
        function inviteGiftUI() {
            return _super.call(this) || this;
        }
        inviteGiftUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.inviteGiftUI.uiView);
        };
        return inviteGiftUI;
    }(Dialog));
    inviteGiftUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 300, "x": 10, "skin": "invite_gift/window.png" }, "child": [{ "type": "Image", "props": { "y": -28, "x": 560, "var": "testoff", "skin": "invite_gift/off.png", "name": "testoff" } }, { "type": "Label", "props": { "y": 255, "x": 43, "text": "已邀请8位好友，完成以下任务，即可获取奖励!", "fontSize": 25, "font": "Arial", "color": "#9a8b8b", "bold": true } }, { "type": "Image", "props": { "y": 39, "x": 216, "skin": "invite_gift/invate_gift.png" } }, { "type": "Image", "props": { "y": 125, "x": 34, "skin": "invite_gift/in_view.png" }, "child": [{ "type": "Box", "props": { "y": 12, "x": 5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 102, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 204, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 306, "skin": "invite_gift/df_invate.png" } }] }, { "type": "Image", "props": { "y": 9, "x": 437, "var": "now_invite", "skin": "invite_gift/now_invite.png" } }] }, { "type": "Box", "props": { "y": 311, "x": 53 }, "child": [{ "type": "Image", "props": { "y": 16, "x": 389, "skin": "invite_gift/image_button_1.png" } }, { "type": "Image", "props": { "skin": "invite_gift/df_window.png" } }, { "type": "Label", "props": { "y": 12, "x": 111, "width": 0, "text": "邀请5位好友奖励", "fontSize": 30, "font": "SimHei", "color": "#2a667d" } }, { "type": "Label", "props": { "y": 57, "x": 114, "var": "schedule_1", "text": "（目标：5/5）", "name": "schedule_1", "fontSize": 25, "font": "SimHei", "color": "#2a667d" } }] }, { "type": "Box", "props": { "y": 432, "x": 53 }, "child": [{ "type": "Image", "props": { "y": 16, "x": 389, "skin": "invite_gift/image_button_2.png" } }, { "type": "Image", "props": { "skin": "invite_gift/df_window.png" } }, { "type": "Label", "props": { "y": 12, "x": 111, "width": 0, "text": "邀请5位好友奖励", "fontSize": 30, "font": "SimHei", "color": "#2a667d" } }, { "type": "Label", "props": { "y": 57, "x": 114, "var": "schedule_2", "text": "（目标：5/10）", "name": "schedule_2", "fontSize": 25, "font": "SimHei", "color": "#2a667d" } }] }, { "type": "Image", "props": { "y": 416, "x": 40, "skin": "invite_gift/dotted_line.png" } }] }] };
    ui.inviteGiftUI = inviteGiftUI;
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
    myHbUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 393, "x": 40, "skin": "myHbao/myHBao.png", "scaleY": 0.9, "scaleX": 0.9 }, "child": [{ "type": "Image", "props": { "y": 340, "x": 485, "var": "withdraw", "skin": "myHbao/button.png", "name": "withdraw" }, "child": [{ "type": "Text", "props": { "y": 10, "x": 22, "text": "提现", "fontSize": 30, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Text", "props": { "y": 313, "x": 20, "var": "balance", "valign": "middle", "text": "余额: 9.99 (元) ", "name": "balance", "fontSize": 40, "font": "SimHei", "color": "#de1511", "bold": true, "align": "center" } }, { "type": "Text", "props": { "y": 371, "x": 20, "var": "prompt", "text": "温馨提示：红包满20元可提现", "name": "prompt", "fontSize": 25, "font": "Helvetica", "color": "#ccc1c1", "bold": true } }, { "type": "Image", "props": { "y": 5, "x": 580, "var": "closed", "skin": "myHbao/off.png", "name": "closed" } }] }] };
    ui.myHbUI = myHbUI;
})(ui || (ui = {}));
(function (ui) {
    var oneHBaoUI = (function (_super) {
        __extends(oneHBaoUI, _super);
        function oneHBaoUI() {
            return _super.call(this) || this;
        }
        oneHBaoUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.oneHBaoUI.uiView);
        };
        return oneHBaoUI;
    }(View));
    oneHBaoUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 260, "x": 42, "skin": "one_HBao/window.png" }, "child": [{ "type": "Image", "props": { "y": 292, "x": 168, "var": "button_receive", "skin": "one_HBao/receive.png", "scaleY": 1.2, "scaleX": 1.2, "name": "button_receive" } }, { "type": "Image", "props": { "y": -9, "x": 514, "skin": "one_HBao/off.png" } }, { "type": "Label", "props": { "y": 209, "x": 28, "valign": "middle", "text": "恭喜获得一个现金红包", "fontSize": 50, "font": "Arial", "color": "#fff3da" } }, { "type": "Label", "props": { "y": 90, "x": 200, "text": "恭喜！", "fontSize": 70, "color": "#fff3da", "bold": true } }, { "type": "Label", "props": { "y": 592, "x": 66, "text": "温馨提示：领红包满20元可提现", "fontSize": 30, "color": "#fff3da" } }] }] };
    ui.oneHBaoUI = oneHBaoUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map