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
    ballSkinViewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "var": "button_break", "top": 0, "skin": "ball_skin/image_break_button.png", "name": "button_break", "left": 40 } }, { "type": "Image", "props": { "width": 580, "var": "inWindow", "skin": "ball_skin/image_inWindow.png", "name": "inWindow", "centerX": 0, "bottom": 100 }, "child": [{ "type": "HBox", "props": { "y": 40, "space": 90, "height": 133, "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "width": 89, "skin": "ball_skin/image_ball_0.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_1.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_2.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }] }, { "type": "HBox", "props": { "y": 189, "space": 90, "height": 133, "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "width": 89, "skin": "ball_skin/image_ball_3.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_4.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_5.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }] }, { "type": "HBox", "props": { "y": 339, "space": 90, "height": 133, "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "width": 89, "skin": "ball_skin/image_ball_6.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_7.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_ball_8.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }] }, { "type": "HBox", "props": { "y": 488, "space": 90, "height": 133, "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "width": 89, "skin": "ball_skin/image_ball_9.png", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_lock.png", "name": "lockSkin", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_lock.png", "name": "lockSkin", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }] }, { "type": "HBox", "props": { "y": 637, "space": 90, "height": 133, "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "width": 89, "skin": "ball_skin/image_lock.png", "name": "lockSkin", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_lock.png", "name": "lockSkin", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }, { "type": "Image", "props": { "y": 22, "x": 179, "width": 89, "skin": "ball_skin/image_lock.png", "name": "lockSkin", "height": 89, "centerY": 0 }, "child": [{ "type": "Image", "props": { "visible": false, "skin": "ball_skin/iamge_select.png", "centerY": 0, "centerX": 0 } }] }] }] }, { "type": "Image", "props": { "y": 120, "var": "watchVideo", "skin": "ball_skin/image_voide_button.png", "name": "watchVideo", "centerX": 0 } }, { "type": "HBox", "props": { "y": 55, "space": 20, "centerX": 0 }, "child": [{ "type": "Image", "props": { "skin": "ball_skin/image_do.png", "centerY": 0 } }, { "type": "Label", "props": { "y": 0, "var": "doNumber", "text": "0", "strokeColor": "#d92a70", "stroke": 5, "name": "doNumber", "fontSize": 50, "font": "SimHei", "color": "#3981dd", "centerY": 0, "bold": true } }] }] };
    ui.ballSkinViewUI = ballSkinViewUI;
})(ui || (ui = {}));
(function (ui) {
    var dailyGiftUI = (function (_super) {
        __extends(dailyGiftUI, _super);
        function dailyGiftUI() {
            return _super.call(this) || this;
        }
        dailyGiftUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.dailyGiftUI.uiView);
        };
        return dailyGiftUI;
    }(Dialog));
    dailyGiftUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 384, "x": 10, "width": 619, "skin": "everyDay/window.png" }, "child": [{ "type": "Image", "props": { "y": 71, "x": 34, "skin": "everyDay/inWindow.png" }, "child": [{ "type": "Box", "props": { "y": 32, "x": 16, "width": 0, "var": "Hbao_open_box", "name": "Hbao_open_box", "height": 0 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 73, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_1" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_0", "valign": "middle", "text": "￥ 0", "name": "hb_money_0", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 2, "x": 214, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_2" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_1", "valign": "middle", "text": "￥ 0", "name": "hb_money_1", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 0, "x": 355, "skin": "Game_Settlement/HBao_open.png", "name": "hb_3" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_2", "valign": "middle", "text": "￥ 0", "name": "hb_money_2", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 150, "x": 17, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_4" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_3", "valign": "middle", "text": "￥ 0", "name": "hb_money_3", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 150, "x": 148, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_5" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_4", "valign": "middle", "text": "￥ 0", "name": "hb_money_4", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 150, "x": 279, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_6" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_5", "valign": "middle", "text": "￥ 0", "name": "hb_money_5", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 150, "x": 410, "visible": false, "skin": "Game_Settlement/HBao_open.png", "name": "hb_7" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 28, "text": "已拆", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Text", "props": { "y": 17, "x": 0, "width": 108, "var": "hb_money_6", "valign": "middle", "text": "￥ 0", "name": "hb_money_6", "height": 25, "fontSize": 25, "font": "Arial", "color": "#ff0c08", "bold": true, "align": "center" } }] }] }, { "type": "Box", "props": { "y": 16, "x": 16, "width": 0, "var": "Hbao_box", "name": "Hbao_box", "height": 0 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 73, "width": 109, "skin": "everyDay/HBao.png", "name": "hb_1" }, "child": [{ "type": "Label", "props": { "y": 65, "text": "第一天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "centerX": 0.5, "bold": true } }] }, { "type": "Image", "props": { "y": 2, "x": 214, "skin": "everyDay/HBao.png", "name": "hb_2" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第二天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 355, "skin": "everyDay/HBao.png", "name": "hb_3" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第三天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 17, "skin": "everyDay/HBao.png", "name": "hb_4" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第四天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 148, "skin": "everyDay/HBao.png", "name": "hb_5" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第五天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 279, "skin": "everyDay/HBao.png", "name": "hb_6" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第六天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }, { "type": "Image", "props": { "y": 150, "x": 410, "skin": "everyDay/HBao.png", "name": "hb_7" }, "child": [{ "type": "Label", "props": { "y": 65, "x": 16, "text": "第7天", "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }] }] }] }, { "type": "Image", "props": { "y": -21, "x": 558, "var": "closeButton", "skin": "everyDay/off.png", "name": "closeButton" } }, { "type": "Image", "props": { "y": -44, "skin": "everyDay/daily_Login.png", "centerX": 0.5 } }, { "type": "Image", "props": { "y": 415, "x": 330, "width": 253, "var": "voide_get", "skin": "everyDay/image_button_1.png", "name": "voide_get" }, "child": [{ "type": "Label", "props": { "y": 17, "text": "看视频加倍领取", "fontSize": 28, "font": "SimHei", "color": "#fff3da", "centerX": 0.5 } }] }, { "type": "Image", "props": { "y": 415, "x": 40, "width": 251, "var": "now_get", "skin": "everyDay/image_button_1.png", "name": "now_get", "alpha": 0.85 }, "child": [{ "type": "Label", "props": { "y": 17, "text": "直接领取", "fontSize": 28, "font": "SimHei", "color": "#fff3da", "centerX": 0.5 } }] }] }] };
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
    gameHomeUI.uiView = { "type": "View", "props": { "x": 0, "width": 640, "name": "gamehome", "height": 1136 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "startBox", "top": 0, "right": 0, "name": "srartBox", "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 150, "var": "right_frame", "skin": "gameHome/Icon_box_rigth.png", "right": 0, "name": "right_frame", "height": 450, "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 20, "width": 100, "var": "my_hb", "skin": "gameHome/image_myhb.png", "name": "my_hb", "height": 100, "centerX": 0 }, "child": [{ "type": "Label", "props": { "var": "hb_timer", "text": "00:00", "name": "hb_timer", "fontSize": 20, "color": "#f8e4e4", "centerY": 0.5, "centerX": 4, "bold": true } }] }, { "type": "Image", "props": { "y": 170, "width": 100, "var": "reward", "skin": "gameHome/image_reward.png", "name": "reward", "height": 100, "centerX": 0 } }, { "type": "Image", "props": { "y": 320, "width": 100, "var": "tuiqian", "skin": "gameHome/image_tuiqian.png", "name": "tuiqian", "height": 100, "centerX": 0 } }] }, { "type": "Image", "props": { "width": 150, "var": "left_frame", "skin": "gameHome/Icon_box_left.png", "name": "left_frame", "left": 0, "height": 450, "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 20, "width": 100, "var": "music_off", "skin": "gameHome/music_off.png", "name": "music_off", "height": 100, "centerX": 0 } }, { "type": "Image", "props": { "y": 170, "width": 100, "var": "invite", "skin": "gameHome/image_invite.png", "name": "invite", "height": 100, "centerX": 0 } }, { "type": "Image", "props": { "y": 320, "width": 100, "var": "jieshao", "skin": "gameHome/image_jieshao.png", "name": "jieshao", "height": 100, "centerX": 0 } }] }, { "type": "Image", "props": { "var": "add_xcx", "top": 38, "skin": "gameHome/image_addxcx.png", "right": 0, "name": "add_xcx" } }, { "type": "Image", "props": { "y": 84, "width": 460, "var": "logo", "skin": "gameHome/image_game_log.png", "name": "logo", "height": 205, "centerX": 0 } }, { "type": "Image", "props": { "y": 850, "x": 471, "width": 169, "var": "ranking", "skin": "gameHome/image_Leaderboard.png", "right": 0, "name": "ranking" }, "child": [{ "type": "Image", "props": { "y": 41, "skin": "gameHome/image_paihang.png", "centerX": 0 } }, { "type": "Text", "props": { "y": 122, "x": 23, "text": "好友排行", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 850, "x": 0, "width": 169, "var": "changeBallSkin", "skin": "gameHome/image_ballSkin.png", "name": "changeBallSkin", "left": 0 }, "child": [{ "type": "Image", "props": { "y": 42, "skin": "gameHome/image_ball.png", "scaleY": 1, "scaleX": 1, "centerX": 0 } }, { "type": "Text", "props": { "y": 122, "x": 23, "text": "更换皮肤", "fontSize": 30, "font": "Arial", "color": "#ffffff", "bold": true, "align": "center" } }] }, { "type": "Box", "props": { "var": "prompt_box", "name": "prompt_box", "centerX": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "boot_prompt", "skin": "gameHome/image_boot_prompt.png", "name": "boot_prompt", "alpha": 0.8 } }, { "type": "Image", "props": { "x": 50, "var": "guide", "skin": "gameHome/image_guide.png", "name": "guide", "alpha": 0.8 } }] }, { "type": "HBox", "props": { "y": 270, "var": "box_fraction", "space": 20, "name": "box_fraction", "centerX": 0, "align": "middle" }, "child": [{ "type": "Image", "props": { "x": 0, "width": 50, "var": "crown", "skin": "gameHome/image_crown.png", "name": "crown", "height": 50, "centerY": 0 } }, { "type": "Label", "props": { "x": 70, "var": "bigFraction", "text": "0", "name": "bigFraction", "fontSize": 60, "font": "Arial", "color": "#2d71d6", "centerY": 0, "bold": true } }] }, { "type": "HBox", "props": { "y": 20, "x": 20, "var": "box_do", "space": 20, "name": "box_do", "align": "middle" }, "child": [{ "type": "Image", "props": { "var": "diamond", "skin": "gameHome/image_do.png", "name": "diamond" } }, { "type": "Label", "props": { "var": "doNumber", "text": "0", "name": "doNumber", "fontSize": 50, "font": "SimHei", "color": "#2d71d6", "bold": true } }, { "type": "Image", "props": { "y": 6, "x": 51, "var": "button_doAdd", "skin": "gameHome/add_do.png", "name": "button_doAdd" } }] }] };
    ui.gameHomeUI = gameHomeUI;
})(ui || (ui = {}));
(function (ui) {
    var gameOverUI = (function (_super) {
        __extends(gameOverUI, _super);
        function gameOverUI() {
            return _super.call(this) || this;
        }
        gameOverUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameOverUI.uiView);
        };
        return gameOverUI;
    }(Dialog));
    gameOverUI.uiView = { "type": "Dialog", "props": { "name": "gameOverDialog" }, "child": [{ "type": "Image", "props": { "y": 291, "x": 10, "skin": "Game_Settlement/window.png" }, "child": [{ "type": "HBox", "props": { "y": 137, "space": 30, "left": 30, "align": "middle" }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "width": 255, "text": "本次得分:", "fontSize": 50, "font": "Arial", "color": "#000000", "bold": true } }, { "type": "Text", "props": { "y": 0, "x": 238, "var": "fraction", "text": 0, "name": "fraction", "fontSize": 50, "font": "Arial", "color": "#d10b4a", "bold": true } }] }, { "type": "HBox", "props": { "y": 137, "x": 385 }, "child": [{ "type": "Text", "props": { "y": 0, "x": 0, "text": "钻石：", "fontSize": 50, "font": "Arial", "color": "#000000", "bold": true } }, { "type": "Text", "props": { "y": 1, "x": 131, "var": "do_n", "text": 0, "name": "do_n", "fontSize": 50, "font": "Arial", "color": "#d10b4a", "bold": true } }] }, { "type": "Image", "props": { "y": 220, "x": 34, "skin": "Game_Settlement/inWindow.png" }, "child": [{ "type": "Box", "props": { "y": 43, "x": 6, "var": "HB_opeb_box", "name": "HB_opeb_box" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 108, "visible": false, "var": "hb_open_0", "skin": "Game_Settlement/HBao_open.png", "name": "hb_open_0", "height": 97 }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Label", "props": { "y": 20, "var": "hb_money_0", "text": "￥ 0", "name": "hb_money_0", "fontSize": 25, "font": "Arial", "color": "#ff0c08", "centerX": 0, "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 143, "width": 108, "visible": false, "var": "hb_open_1", "skin": "Game_Settlement/HBao_open.png", "name": "hb_open_1", "height": 97 }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Label", "props": { "y": 20, "var": "hb_money_1", "text": "￥ 0", "name": "hb_money_1", "fontSize": 25, "font": "Arial", "color": "#ff0c08", "centerX": 0, "bold": true } }] }, { "type": "Image", "props": { "y": 0, "x": 287, "width": 108, "visible": false, "var": "hb_open_2", "skin": "Game_Settlement/HBao_open.png", "name": "hb_open_2", "height": 97 }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Label", "props": { "y": 20, "var": "hb_money_2", "text": "￥ 0", "name": "hb_money_2", "fontSize": 25, "font": "Arial", "color": "#ff0c08", "centerX": 0, "bold": true } }] }, { "type": "Image", "props": { "x": 430, "width": 108, "visible": false, "var": "hb_open_3", "skin": "Game_Settlement/HBao_open.png", "name": "hb_open_3", "height": 97 }, "child": [{ "type": "Text", "props": { "y": 58, "x": 28, "width": 0, "text": "已拆", "height": 0, "fontSize": 25, "font": "Arial", "color": "#fff3da", "bold": true } }, { "type": "Label", "props": { "y": 20, "var": "hb_money_3", "text": "￥ 0", "name": "hb_money_3", "fontSize": 25, "font": "Arial", "color": "#ff0c08", "centerX": 0, "bold": true } }] }] }, { "type": "Box", "props": { "y": 16, "x": 6, "var": "HBao_box", "name": "HBao_box" }, "child": [{ "type": "Image", "props": { "y": 10, "x": 0, "var": "HBao_1", "skin": "Game_Settlement/HBao.png", "name": "HBao_1" } }, { "type": "Image", "props": { "y": 10, "x": 142, "var": "HBao_2", "skin": "Game_Settlement/HBao.png", "name": "HBao_2" } }, { "type": "Image", "props": { "y": 10, "x": 286, "var": "HBao_3", "skin": "Game_Settlement/HBao.png", "name": "HBao_3" } }, { "type": "Image", "props": { "y": 10, "x": 429, "var": "HBao_4", "skin": "Game_Settlement/HBao.png", "name": "HBao_4" } }] }] }, { "type": "HBox", "props": { "y": 428, "x": 24, "space": 50, "align": "middle" }, "child": [{ "type": "Image", "props": { "y": 3, "x": 9, "var": "agin_img", "skin": "Game_Settlement/button.png", "name": "agin_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/image_rect.png" } }] }, { "type": "Image", "props": { "y": 2, "x": 158, "var": "home_img", "skin": "Game_Settlement/button.png", "name": "home_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/home.png" } }] }, { "type": "Image", "props": { "y": 0, "x": 307, "var": "share_img", "skin": "Game_Settlement/button.png", "name": "share_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/share.png" } }] }, { "type": "Image", "props": { "y": 1, "x": 456, "var": "void_img", "skin": "Game_Settlement/button.png", "name": "void_img" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "Game_Settlement/voide.png" } }] }, { "type": "Text", "props": { "y": 98, "x": 0, "text": "重新开始", "name": "restart_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 99, "x": 151, "text": "返回首页", "name": "home_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 99, "x": 301, "text": "分享复活", "name": "share_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }, { "type": "Text", "props": { "y": 101, "x": 452, "text": "视频复活", "name": "video_text", "fontSize": 30, "font": "Arial", "color": "#06abec", "bold": true } }] }] }] };
    ui.gameOverUI = gameOverUI;
})(ui || (ui = {}));
(function (ui) {
    var HBaoOneUI = (function (_super) {
        __extends(HBaoOneUI, _super);
        function HBaoOneUI() {
            return _super.call(this) || this;
        }
        HBaoOneUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HBaoOneUI.uiView);
        };
        return HBaoOneUI;
    }(Dialog));
    HBaoOneUI.uiView = { "type": "Dialog", "props": {}, "child": [{ "type": "Image", "props": { "y": 259, "width": 555, "skin": "one_HBao/window.png", "height": 646, "centerX": 0 }, "child": [{ "type": "Image", "props": { "var": "button_receive", "skin": "one_HBao/receive.png", "scaleY": 1.2, "scaleX": 1.2, "name": "button_receive", "centerY": 90, "centerX": 0 } }, { "type": "Image", "props": { "y": -7, "x": 518, "var": "button_close", "skin": "one_HBao/off.png", "name": "button_close" } }, { "type": "Label", "props": { "y": 209, "valign": "middle", "text": "获得一个现金红包", "fontSize": 50, "font": "Arial", "color": "#fff3da", "centerX": 0 } }, { "type": "Label", "props": { "y": 90, "text": "恭喜！！", "fontSize": 70, "color": "#fff3da", "centerX": 0, "bold": true } }, { "type": "Label", "props": { "y": 592, "text": "温馨提示：领红包满20元可提现", "fontSize": 30, "color": "#fff3da", "centerX": 0 } }] }] };
    ui.HBaoOneUI = HBaoOneUI;
})(ui || (ui = {}));
(function (ui) {
    var hbDialogUI = (function (_super) {
        __extends(hbDialogUI, _super);
        function hbDialogUI() {
            return _super.call(this) || this;
        }
        hbDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.hbDialogUI.uiView);
        };
        return hbDialogUI;
    }(Dialog));
    hbDialogUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 352, "width": 536, "skin": "HBao/window.png", "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 320, "width": 351, "var": "keepOnHbao", "skin": "HBao/buttom.png", "name": "keepOnHbao", "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 14, "text": "继续打开红包", "fontSize": 40, "font": "Microsoft YaHei", "color": "#e51512", "centerX": 0.5, "bold": true } }] }, { "type": "Image", "props": { "y": 45, "x": 436, "width": 40, "var": "button_close", "skin": "HBao/off.png", "name": "button_close", "height": 40 } }, { "type": "Label", "props": { "y": 110, "var": "getMoney", "text": "￥0.5", "name": "getMoney", "fontSize": 100, "font": "Arial", "color": "#db4a2e", "centerX": 0, "bold": true } }, { "type": "Label", "props": { "y": 422, "var": "withdraw", "underline": true, "text": "我要提现", "name": "withdraw", "fontSize": 30, "font": "SimHei", "color": "#e3d3d3", "centerX": 0, "bold": false, "alpha": 0.8 } }, { "type": "Label", "props": { "y": 269, "x": 154, "var": "deposit", "text": "已存入我的红包", "name": "deposit", "fontSize": 30, "font": "Microsoft YaHei", "color": "#fff3da", "centerX": 0.5, "bold": false, "alpha": 0.8 } }] }] };
    ui.hbDialogUI = hbDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var inGameViewUI = (function (_super) {
        __extends(inGameViewUI, _super);
        function inGameViewUI() {
            return _super.call(this) || this;
        }
        inGameViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.inGameViewUI.uiView);
        };
        return inGameViewUI;
    }(View));
    inGameViewUI.uiView = { "type": "View", "props": { "width": 640, "visible": false, "height": 1136 }, "child": [{ "type": "HBox", "props": { "y": 20, "x": 20, "space": 20, "align": "middle" }, "child": [{ "type": "Image", "props": { "y": 20, "x": 20, "var": "hongbao", "skin": "inGame/HBao.png", "scaleY": 1.5, "scaleX": 1.5, "name": "hongbao" }, "child": [{ "type": "Image", "props": { "y": -10, "x": 33, "width": 35, "visible": true, "var": "prompt_1", "skin": "inGame/HB_number.png", "name": "prompt_1", "height": 35 }, "child": [{ "type": "Label", "props": { "y": 1, "var": "hbNumber", "text": "0", "name": "hbNumber", "fontSize": 30, "font": "Arial", "color": "#fff3da", "centerX": 0, "bold": true } }] }] }, { "type": "Image", "props": { "y": 39, "x": 115, "var": "prompt_0", "skin": "inGame/game_end.png", "name": "prompt_0" } }] }, { "type": "Image", "props": { "y": 120, "x": 20, "width": 243, "var": "prompt_surpass", "skin": "inGame/coming_soon.png", "name": "prompt_surpass", "height": 102 }, "child": [{ "type": "Label", "props": { "y": 40, "var": "surpass_fraction", "text": "99999", "name": "surpass_fraction", "left": 15, "fontSize": 40, "font": "Arial", "color": "#e3dd48", "bold": true } }, { "type": "Image", "props": { "width": 80, "var": "surpassAvatar", "skin": "inGame/yazi.jpg", "right": 10, "name": "surpassAvatar", "height": 80, "centerY": 0.5 } }] }, { "type": "Label", "props": { "y": 200, "var": "fraction", "text": "0", "strokeColor": "#ebf40e", "stroke": 5, "name": "fraction", "fontSize": 100, "font": "Arial", "color": "#167dcf", "centerX": 0, "bold": true } }] };
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
    inviteGiftUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 300, "width": 619, "skin": "invite_gift/window.png", "height": 564, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -15, "x": 560, "var": "viewOff", "skin": "invite_gift/off.png", "name": "viewOff" } }, { "type": "Label", "props": { "y": 255, "var": "invitation", "text": "已邀请8位好友，完成以下任务，即可获取奖励!", "name": "invitation", "fontSize": 25, "font": "Arial", "color": "#9a8b8b", "centerX": 0.5, "bold": true } }, { "type": "Image", "props": { "y": 39, "skin": "invite_gift/invate_gift.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 125, "width": 551, "skin": "invite_gift/in_view.png", "height": 117, "centerX": 0 }, "child": [{ "type": "HBox", "props": { "y": 12, "space": 15, "centerX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 102, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 204, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": 0, "x": 306, "skin": "invite_gift/df_invate.png" } }, { "type": "Image", "props": { "y": -3, "x": 432, "var": "now_invite", "skin": "invite_gift/now_invite.png" } }] }] }, { "type": "Box", "props": { "y": 311, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 16, "x": 389, "var": "button_one", "skin": "invite_gift/image_button_1.png", "name": "button_one", "disabled": true } }, { "type": "Image", "props": { "skin": "invite_gift/image_do.png" }, "child": [{ "type": "Image", "props": { "y": 59, "x": 28, "width": 62, "skin": "invite_gift/1.png", "height": 31, "sizeGrid": "4,8,5,11" }, "child": [{ "type": "Label", "props": { "y": 3, "x": 10, "text": "200", "fontSize": 25, "font": "Arial", "color": "#e3e3e3", "bold": true } }] }] }, { "type": "Label", "props": { "y": 12, "x": 111, "width": 0, "text": "邀请5位好友奖励", "fontSize": 30, "font": "SimHei", "color": "#2a667d" } }, { "type": "Label", "props": { "y": 57, "x": 114, "var": "schedule_1", "text": "（目标：5/5）", "name": "schedule_1", "fontSize": 25, "font": "SimHei", "color": "#2a667d" } }] }, { "type": "Box", "props": { "y": 432, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 16, "x": 389, "var": "button_two", "skin": "invite_gift/image_button_1.png", "name": "button_two", "disabled": true } }, { "type": "Image", "props": { "skin": "invite_gift/image_do.png" }, "child": [{ "type": "Image", "props": { "y": 59, "x": 28, "width": 62, "skin": "invite_gift/1.png", "height": 31, "sizeGrid": "4,8,5,11" }, "child": [{ "type": "Label", "props": { "y": 3, "x": 10, "text": "500", "fontSize": 25, "font": "Arial", "color": "#e3e3e3", "bold": true } }] }] }, { "type": "Label", "props": { "y": 12, "x": 111, "width": 0, "text": "邀请10位好友奖励", "fontSize": 30, "font": "SimHei", "color": "#2a667d" } }, { "type": "Label", "props": { "y": 57, "x": 114, "var": "schedule_2", "text": "（目标：5/10）", "name": "schedule_2", "fontSize": 25, "font": "SimHei", "color": "#2a667d" } }] }, { "type": "Image", "props": { "y": 416, "skin": "invite_gift/dotted_line.png", "centerX": 0.5 } }] }] };
    ui.inviteGiftUI = inviteGiftUI;
})(ui || (ui = {}));
(function (ui) {
    var LeaderboardUI = (function (_super) {
        __extends(LeaderboardUI, _super);
        function LeaderboardUI() {
            return _super.call(this) || this;
        }
        LeaderboardUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LeaderboardUI.uiView);
        };
        return LeaderboardUI;
    }(Dialog));
    LeaderboardUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 } };
    ui.LeaderboardUI = LeaderboardUI;
})(ui || (ui = {}));
(function (ui) {
    var myHBUI = (function (_super) {
        __extends(myHBUI, _super);
        function myHBUI() {
            return _super.call(this) || this;
        }
        myHBUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.myHBUI.uiView);
        };
        return myHBUI;
    }(Dialog));
    myHBUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 392, "width": 655, "skin": "myHbao/myHBao.png", "scaleY": 0.95, "scaleX": 0.95, "left": 30, "height": 419 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 569, "var": "close_button", "skin": "myHbao/off.png", "name": "close_button" } }, { "type": "Image", "props": { "y": 340, "width": 106, "var": "withdraw_button", "skin": "myHbao/image_button.png", "right": 70, "name": "withdraw_button", "height": 54 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 27, "text": "提现", "fontSize": 25, "font": "Arial", "color": "#ffffff", "bold": true } }] }, { "type": "Label", "props": { "y": 320, "var": "balance", "text": "余额: 0 (元)", "name": "balance", "left": 30, "fontSize": 32, "font": "SimHei", "color": "#fd0400", "bold": true } }, { "type": "Label", "props": { "x": 11, "var": "prompt", "text": "温馨提示： 红包满20可以提现", "name": "prompt", "left": 30, "fontSize": 20, "font": "SimHei", "color": "#a39999", "bottom": 30 } }] }] };
    ui.myHBUI = myHBUI;
})(ui || (ui = {}));
(function (ui) {
    var playDialogUI = (function (_super) {
        __extends(playDialogUI, _super);
        function playDialogUI() {
            return _super.call(this) || this;
        }
        playDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.playDialogUI.uiView);
        };
        return playDialogUI;
    }(Dialog));
    playDialogUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "y": 300, "width": 620, "skin": "invite_gift/window.png", "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -15, "x": 558, "var": "button_close", "skin": "invite_gift/off.png", "name": "button_close" } }, { "type": "Image", "props": { "y": 43, "x": 197, "skin": "player/wanfajies.png", "scaleY": 1.2, "scaleX": 1.2 } }, { "type": "Label", "props": { "y": 152, "wordWrap": true, "width": 515, "text": "    躲避障碍，跳中白圈可增加分数，砖石可以用来兑换皮肤，红包就几率获得现金红包（满20元可以提现）", "height": 300, "fontSize": 50, "font": "Arial", "color": "#0b6cc5", "centerX": 0.5, "bold": true } }] }] };
    ui.playDialogUI = playDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var testUI = (function (_super) {
        __extends(testUI, _super);
        function testUI() {
            return _super.call(this) || this;
        }
        testUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.testUI.uiView);
        };
        return testUI;
    }(View));
    testUI.uiView = { "type": "View", "props": { "width": 640, "height": 1164 }, "child": [{ "type": "Image", "props": { "skin": "ladder/image_ldder.png", "scaleY": 1, "scaleX": 1, "centerY": 0 } }] };
    ui.testUI = testUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map