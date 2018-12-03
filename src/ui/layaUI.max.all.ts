
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class ballSkinViewUI extends View {
		public button_break:Laya.Image;
		public inWindow:Laya.Image;
		public watchVideo:Laya.Image;
		public doNumber:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1164},"child":[{"type":"Image","props":{"var":"button_break","top":0,"skin":"ball_skin/image_break_button.png","name":"button_break","left":40}},{"type":"Image","props":{"width":580,"var":"inWindow","skin":"ball_skin/image_inWindow.png","name":"inWindow","centerX":0,"bottom":100},"child":[{"type":"HBox","props":{"y":40,"space":90,"height":133,"centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"width":89,"skin":"ball_skin/image_ball_0.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_1.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_2.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]}]},{"type":"HBox","props":{"y":189,"space":90,"height":133,"centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"width":89,"skin":"ball_skin/image_ball_3.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_4.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_5.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]}]},{"type":"HBox","props":{"y":339,"space":90,"height":133,"centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"width":89,"skin":"ball_skin/image_ball_6.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_7.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_ball_8.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]}]},{"type":"HBox","props":{"y":488,"space":90,"height":133,"centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"width":89,"skin":"ball_skin/image_ball_9.png","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_lock.png","name":"lockSkin","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_lock.png","name":"lockSkin","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]}]},{"type":"HBox","props":{"y":637,"space":90,"height":133,"centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"width":89,"skin":"ball_skin/image_lock.png","name":"lockSkin","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_lock.png","name":"lockSkin","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":22,"x":179,"width":89,"skin":"ball_skin/image_lock.png","name":"lockSkin","height":89,"centerY":0},"child":[{"type":"Image","props":{"visible":false,"skin":"ball_skin/iamge_select.png","centerY":0,"centerX":0}}]}]}]},{"type":"Image","props":{"y":120,"var":"watchVideo","skin":"ball_skin/image_voide_button.png","name":"watchVideo","centerX":0}},{"type":"HBox","props":{"y":55,"space":20,"centerX":0},"child":[{"type":"Image","props":{"skin":"ball_skin/image_do.png","centerY":0}},{"type":"Label","props":{"y":0,"var":"doNumber","text":"0","strokeColor":"#d92a70","stroke":5,"name":"doNumber","fontSize":50,"font":"SimHei","color":"#3981dd","centerY":0,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ballSkinViewUI.uiView);

        }

    }
}

module ui {
    export class dailyGiftUI extends Dialog {
		public hb_window:Laya.Image;
		public Hbao_open_box:Laya.Box;
		public hb_money_0:laya.display.Text;
		public hb_money_1:laya.display.Text;
		public hb_money_2:laya.display.Text;
		public hb_money_3:laya.display.Text;
		public hb_money_4:laya.display.Text;
		public hb_money_5:laya.display.Text;
		public hb_money_6:laya.display.Text;
		public Hbao_box:Laya.Box;
		public closeButton:Laya.Image;
		public voide_get:Laya.Image;
		public now_get:Laya.Image;
		public loding:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1164},"child":[{"type":"Image","props":{"y":384,"x":10,"width":619,"skin":"everyDay/window.png","height":532},"child":[{"type":"Image","props":{"y":71,"x":34,"visible":false,"var":"hb_window","skin":"everyDay/inWindow.png","name":"hb_window"},"child":[{"type":"Box","props":{"y":32,"x":16,"width":0,"var":"Hbao_open_box","name":"Hbao_open_box","height":0},"child":[{"type":"Image","props":{"y":2,"x":73,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_1"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_0","valign":"middle","text":"￥ 0","name":"hb_money_0","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":2,"x":214,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_2"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_1","valign":"middle","text":"￥ 0","name":"hb_money_1","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":0,"x":355,"skin":"Game_Settlement/HBao_open.png","name":"hb_3"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_2","valign":"middle","text":"￥ 0","name":"hb_money_2","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":150,"x":17,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_4"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_3","valign":"middle","text":"￥ 0","name":"hb_money_3","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":150,"x":148,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_5"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_4","valign":"middle","text":"￥ 0","name":"hb_money_4","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":150,"x":279,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_6"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_5","valign":"middle","text":"￥ 0","name":"hb_money_5","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":150,"x":410,"visible":false,"skin":"Game_Settlement/HBao_open.png","name":"hb_7"},"child":[{"type":"Label","props":{"y":65,"x":28,"text":"已拆","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Text","props":{"y":17,"x":0,"width":108,"var":"hb_money_6","valign":"middle","text":"￥ 0","name":"hb_money_6","height":25,"fontSize":25,"font":"Arial","color":"#ff0c08","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":16,"x":16,"width":0,"var":"Hbao_box","name":"Hbao_box","height":0},"child":[{"type":"Image","props":{"y":2,"x":73,"width":109,"skin":"everyDay/HBao.png","name":"hb_1"},"child":[{"type":"Label","props":{"y":65,"text":"第一天","fontSize":25,"font":"Arial","color":"#fff3da","centerX":0.5,"bold":true}}]},{"type":"Image","props":{"y":2,"x":214,"skin":"everyDay/HBao.png","name":"hb_2"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第二天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]},{"type":"Image","props":{"y":0,"x":355,"skin":"everyDay/HBao.png","name":"hb_3"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第三天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]},{"type":"Image","props":{"y":150,"x":17,"skin":"everyDay/HBao.png","name":"hb_4"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第四天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]},{"type":"Image","props":{"y":150,"x":148,"skin":"everyDay/HBao.png","name":"hb_5"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第五天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]},{"type":"Image","props":{"y":150,"x":279,"skin":"everyDay/HBao.png","name":"hb_6"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第六天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]},{"type":"Image","props":{"y":150,"x":410,"skin":"everyDay/HBao.png","name":"hb_7"},"child":[{"type":"Label","props":{"y":65,"x":16,"text":"第7天","fontSize":25,"font":"Arial","color":"#fff3da","bold":true}}]}]}]},{"type":"Image","props":{"y":-21,"x":558,"var":"closeButton","skin":"everyDay/off.png","name":"closeButton"}},{"type":"Image","props":{"y":-44,"skin":"everyDay/daily_Login.png","centerX":0.5}},{"type":"Image","props":{"y":415,"x":330,"width":253,"var":"voide_get","skin":"everyDay/image_button_1.png","name":"voide_get","disabled":true},"child":[{"type":"Label","props":{"y":17,"text":"看视频加倍领取","fontSize":28,"font":"SimHei","color":"#fff3da","centerX":0.5}}]},{"type":"Image","props":{"y":415,"x":40,"width":251,"var":"now_get","skin":"everyDay/image_button_1.png","name":"now_get","disabled":true,"alpha":0.85},"child":[{"type":"Label","props":{"y":17,"text":"直接领取","fontSize":28,"font":"SimHei","color":"#fff3da","centerX":0.5}}]},{"type":"Label","props":{"var":"loding","text":"加载中.......","name":"loding","fontSize":50,"font":"Microsoft YaHei","color":"#dd230a","centerY":-30,"centerX":0,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dailyGiftUI.uiView);

        }

    }
}

module ui {
    export class gameHomeUI extends View {
		public right_frame:Laya.Image;
		public my_hb:Laya.Image;
		public hb_money:Laya.Label;
		public reward:Laya.Image;
		public tuiqian:Laya.Image;
		public left_frame:Laya.Image;
		public music_off:Laya.Image;
		public invite:Laya.Image;
		public jieshao:Laya.Image;
		public add_xcx:Laya.Image;
		public logo:Laya.Image;
		public ranking:Laya.Image;
		public changeBallSkin:Laya.Image;
		public prompt_box:Laya.Box;
		public boot_prompt:Laya.Image;
		public guide:Laya.Image;
		public box_fraction:Laya.HBox;
		public crown:Laya.Image;
		public bigFraction:Laya.Label;
		public box_do:Laya.HBox;
		public diamond:Laya.Image;
		public button_doAdd:Laya.Image;
		public doNumber:Laya.Label;
		public starGame:Laya.Image;
		public startBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":640,"name":"gamehome","height":1136},"child":[{"type":"Image","props":{"width":150,"var":"right_frame","skin":"gameHome/Icon_box_rigth.png","right":0,"name":"right_frame","height":450,"centerY":0},"child":[{"type":"Image","props":{"y":20,"width":100,"var":"my_hb","skin":"gameHome/image_myhb.png","name":"my_hb","height":100,"centerX":0},"child":[{"type":"Label","props":{"var":"hb_money","text":"0","name":"hb_money","fontSize":20,"color":"#f8e4e4","centerY":0,"centerX":3,"bold":true}}]},{"type":"Image","props":{"y":170,"width":100,"var":"reward","skin":"gameHome/image_reward.png","name":"reward","height":100,"centerX":0}},{"type":"Image","props":{"y":320,"width":100,"var":"tuiqian","skin":"gameHome/image_tuiqian.png","name":"tuiqian","height":100,"centerX":0}}]},{"type":"Image","props":{"width":150,"var":"left_frame","skin":"gameHome/Icon_box_left.png","name":"left_frame","left":0,"height":450,"centerY":0},"child":[{"type":"Image","props":{"y":20,"width":100,"var":"music_off","skin":"gameHome/music_off.png","name":"music_off","height":100,"centerX":0}},{"type":"Image","props":{"y":170,"width":100,"var":"invite","skin":"gameHome/image_invite.png","name":"invite","height":100,"centerX":0}},{"type":"Image","props":{"y":320,"width":100,"var":"jieshao","skin":"gameHome/image_jieshao.png","name":"jieshao","height":100,"centerX":0}}]},{"type":"Image","props":{"var":"add_xcx","top":38,"skin":"gameHome/image_addxcx.png","right":0,"name":"add_xcx"}},{"type":"Image","props":{"y":84,"width":460,"var":"logo","skin":"gameHome/image_game_log.png","name":"logo","height":205,"centerX":0}},{"type":"Image","props":{"y":850,"x":471,"width":169,"var":"ranking","skin":"gameHome/image_Leaderboard.png","right":0,"name":"ranking"},"child":[{"type":"Image","props":{"y":41,"skin":"gameHome/image_paihang.png","centerX":0}},{"type":"Text","props":{"y":122,"x":23,"text":"好友排行","fontSize":30,"font":"Arial","color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":850,"x":0,"width":169,"var":"changeBallSkin","skin":"gameHome/image_ballSkin.png","name":"changeBallSkin","left":0},"child":[{"type":"Image","props":{"y":42,"skin":"gameHome/image_ball.png","scaleY":1,"scaleX":1,"centerX":0}},{"type":"Text","props":{"y":122,"x":23,"text":"更换皮肤","fontSize":30,"font":"Arial","color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Box","props":{"var":"prompt_box","name":"prompt_box","centerX":0,"bottom":0},"child":[{"type":"Image","props":{"var":"boot_prompt","skin":"gameHome/image_boot_prompt.png","name":"boot_prompt","alpha":0.8}},{"type":"Image","props":{"x":50,"var":"guide","skin":"gameHome/image_guide.png","name":"guide","alpha":0.8}}]},{"type":"HBox","props":{"y":270,"var":"box_fraction","space":20,"name":"box_fraction","centerX":0,"align":"middle"},"child":[{"type":"Image","props":{"x":0,"width":50,"var":"crown","skin":"gameHome/image_crown.png","name":"crown","height":50,"centerY":0}},{"type":"Label","props":{"var":"bigFraction","text":"0","name":"bigFraction","fontSize":60,"font":"SimHei","color":"#2d71d6","centerY":0,"bold":true}}]},{"type":"HBox","props":{"y":20,"x":20,"var":"box_do","space":30,"name":"box_do","align":"middle"},"child":[{"type":"Image","props":{"var":"diamond","skin":"gameHome/image_do.png","name":"diamond"}},{"type":"Image","props":{"y":7,"x":126,"var":"button_doAdd","skin":"gameHome/add_do.png","name":"button_doAdd"}},{"type":"Label","props":{"y":0,"x":78,"var":"doNumber","text":"0","name":"doNumber","fontSize":50,"font":"SimHei","color":"#2d71d6","bold":true}}]},{"type":"Image","props":{"y":765,"width":352,"visible":false,"var":"starGame","skin":"gameHome/image_button.png","scaleY":0.9,"scaleX":0.9,"name":"starGame","height":104,"centerX":0},"child":[{"type":"Label","props":{"text":"开始游戏","fontSize":50,"font":"Arial","color":"#ff0400","centerY":-13,"centerX":0,"bold":true}}]},{"type":"Box","props":{"y":0,"x":0,"visible":false,"var":"startBox","top":0,"right":0,"name":"srartBox","left":0,"bottom":0}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.gameHomeUI.uiView);

        }

    }
}

module ui {
    export class gameOverUI extends Dialog {
		public fraction:laya.display.Text;
		public do_n:laya.display.Text;
		public HB_opeb_box:Laya.Box;
		public hb_open_0:Laya.Image;
		public hb_money_0:Laya.Label;
		public hb_open_1:Laya.Image;
		public hb_money_1:Laya.Label;
		public hb_open_2:Laya.Image;
		public hb_money_2:Laya.Label;
		public hb_open_3:Laya.Image;
		public hb_money_3:Laya.Label;
		public HBao_box:Laya.Box;
		public HBao_1:Laya.Image;
		public HBao_2:Laya.Image;
		public HBao_3:Laya.Image;
		public HBao_4:Laya.Image;
		public agin_img:Laya.Image;
		public home_img:Laya.Image;
		public share_img:Laya.Image;
		public void_img:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"name":"gameOverDialog"},"child":[{"type":"Image","props":{"y":291,"x":10,"skin":"Game_Settlement/window.png"},"child":[{"type":"HBox","props":{"y":137,"space":30,"left":30,"align":"middle"},"child":[{"type":"Text","props":{"y":0,"x":0,"width":255,"text":"本次得分:","fontSize":50,"font":"Arial","color":"#000000","bold":true}},{"type":"Text","props":{"y":0,"x":238,"var":"fraction","text":0,"name":"fraction","fontSize":50,"font":"Arial","color":"#d10b4a","bold":true}}]},{"type":"HBox","props":{"y":137,"x":385},"child":[{"type":"Text","props":{"y":0,"x":0,"text":"钻石：","fontSize":50,"font":"Arial","color":"#000000","bold":true}},{"type":"Text","props":{"y":1,"x":131,"var":"do_n","text":0,"name":"do_n","fontSize":50,"font":"Arial","color":"#d10b4a","bold":true}}]},{"type":"Image","props":{"y":220,"x":34,"skin":"Game_Settlement/inWindow.png"},"child":[{"type":"Box","props":{"y":43,"x":6,"var":"HB_opeb_box","name":"HB_opeb_box"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":108,"visible":false,"var":"hb_open_0","skin":"Game_Settlement/HBao_open.png","name":"hb_open_0","height":97},"child":[{"type":"Text","props":{"y":58,"x":28,"width":0,"text":"已拆","height":0,"fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Label","props":{"y":20,"var":"hb_money_0","text":"￥ 0","name":"hb_money_0","fontSize":25,"font":"Arial","color":"#ff0c08","centerX":0,"bold":true}}]},{"type":"Image","props":{"y":0,"x":143,"width":108,"visible":false,"var":"hb_open_1","skin":"Game_Settlement/HBao_open.png","name":"hb_open_1","height":97},"child":[{"type":"Text","props":{"y":58,"x":28,"width":0,"text":"已拆","height":0,"fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Label","props":{"y":20,"var":"hb_money_1","text":"￥ 0","name":"hb_money_1","fontSize":25,"font":"Arial","color":"#ff0c08","centerX":0,"bold":true}}]},{"type":"Image","props":{"y":0,"x":287,"width":108,"visible":false,"var":"hb_open_2","skin":"Game_Settlement/HBao_open.png","name":"hb_open_2","height":97},"child":[{"type":"Text","props":{"y":58,"x":28,"width":0,"text":"已拆","height":0,"fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Label","props":{"y":20,"var":"hb_money_2","text":"￥ 0","name":"hb_money_2","fontSize":25,"font":"Arial","color":"#ff0c08","centerX":0,"bold":true}}]},{"type":"Image","props":{"x":430,"width":108,"visible":false,"var":"hb_open_3","skin":"Game_Settlement/HBao_open.png","name":"hb_open_3","height":97},"child":[{"type":"Text","props":{"y":58,"x":28,"width":0,"text":"已拆","height":0,"fontSize":25,"font":"Arial","color":"#fff3da","bold":true}},{"type":"Label","props":{"y":20,"var":"hb_money_3","text":"￥ 0","name":"hb_money_3","fontSize":25,"font":"Arial","color":"#ff0c08","centerX":0,"bold":true}}]}]},{"type":"Box","props":{"y":16,"x":6,"var":"HBao_box","name":"HBao_box"},"child":[{"type":"Image","props":{"y":10,"x":0,"var":"HBao_1","skin":"Game_Settlement/HBao.png","name":"HBao_1"}},{"type":"Image","props":{"y":10,"x":142,"var":"HBao_2","skin":"Game_Settlement/HBao.png","name":"HBao_2"}},{"type":"Image","props":{"y":10,"x":286,"var":"HBao_3","skin":"Game_Settlement/HBao.png","name":"HBao_3"}},{"type":"Image","props":{"y":10,"x":429,"var":"HBao_4","skin":"Game_Settlement/HBao.png","name":"HBao_4"}}]}]},{"type":"HBox","props":{"y":428,"x":24,"space":50,"align":"middle"},"child":[{"type":"Image","props":{"y":3,"x":9,"var":"agin_img","skin":"Game_Settlement/image_button.png","name":"agin_img"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"Game_Settlement/image_rect.png"}}]},{"type":"Image","props":{"y":2,"x":158,"var":"home_img","skin":"Game_Settlement/image_button.png","name":"home_img"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"Game_Settlement/home.png"}}]},{"type":"Image","props":{"y":0,"x":307,"var":"share_img","skin":"Game_Settlement/image_button.png","name":"share_img"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"Game_Settlement/share.png"}}]},{"type":"Image","props":{"y":1,"x":456,"var":"void_img","skin":"Game_Settlement/image_button.png","name":"void_img"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"Game_Settlement/voide.png"}}]},{"type":"Text","props":{"y":98,"x":0,"text":"重新开始","name":"restart_text","fontSize":30,"font":"Arial","color":"#06abec","bold":true}},{"type":"Text","props":{"y":99,"x":151,"text":"返回首页","name":"home_text","fontSize":30,"font":"Arial","color":"#06abec","bold":true}},{"type":"Text","props":{"y":99,"x":301,"text":"分享复活","name":"share_text","fontSize":30,"font":"Arial","color":"#06abec","bold":true}},{"type":"Text","props":{"y":101,"x":452,"text":"视频复活","name":"video_text","fontSize":30,"font":"Arial","color":"#06abec","bold":true}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.gameOverUI.uiView);

        }

    }
}

module ui {
    export class HBaoOneUI extends Dialog {
		public button_receive:Laya.Image;
		public button_close:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{},"child":[{"type":"Image","props":{"width":555,"skin":"one_HBao/window.png","height":646,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"var":"button_receive","skin":"one_HBao/receive.png","scaleY":1.2,"scaleX":1.2,"name":"button_receive","centerY":90,"centerX":0}},{"type":"Image","props":{"y":-7,"x":518,"var":"button_close","skin":"one_HBao/off.png","name":"button_close"}},{"type":"Label","props":{"y":209,"valign":"middle","text":"获得一个现金红包","fontSize":50,"font":"Arial","color":"#fff3da","centerX":0}},{"type":"Label","props":{"y":90,"text":"恭喜！！","fontSize":70,"color":"#fff3da","centerX":0,"bold":true}},{"type":"Label","props":{"y":592,"text":"温馨提示：领红包满20元可提现","fontSize":30,"color":"#fff3da","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HBaoOneUI.uiView);

        }

    }
}

module ui {
    export class hbDialogUI extends Dialog {
		public keepOnHbao:Laya.Image;
		public prompt:Laya.Label;
		public button_close:Laya.Image;
		public getMoney:Laya.Label;
		public withdraw:Laya.Label;
		public deposit:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"name":"hbDialog","height":1164},"child":[{"type":"Image","props":{"y":352,"width":536,"skin":"HBao/window.png","height":480,"centerX":0.5},"child":[{"type":"Image","props":{"y":320,"width":351,"var":"keepOnHbao","skin":"HBao/image_button.png","name":"keepOnHbao","centerX":0},"child":[{"type":"Label","props":{"y":14,"var":"prompt","name":"prompt","fontSize":40,"font":"Microsoft YaHei","color":"#e51512","centerX":0,"bold":true}}]},{"type":"Image","props":{"y":45,"x":436,"width":40,"var":"button_close","skin":"HBao/off.png","name":"button_close","height":40}},{"type":"Label","props":{"y":110,"var":"getMoney","text":"￥0","name":"getMoney","fontSize":100,"font":"Arial","color":"#db4a2e","centerX":0,"bold":true}},{"type":"Label","props":{"y":422,"var":"withdraw","underline":true,"text":"我要提现","name":"withdraw","fontSize":30,"font":"SimHei","color":"#e3d3d3","centerX":0,"bold":false,"alpha":0.8}},{"type":"Label","props":{"y":269,"var":"deposit","text":"已存入我的红包","name":"deposit","fontSize":30,"font":"Microsoft YaHei","color":"#fff3da","centerX":0,"bold":false,"alpha":0.8}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.hbDialogUI.uiView);

        }

    }
}

module ui {
    export class inGameViewUI extends View {
		public hongbao:Laya.Image;
		public prompt_1:Laya.Image;
		public hbNumber:Laya.Label;
		public prompt_0:Laya.Image;
		public prompt_surpass:Laya.Image;
		public surpass_fraction:Laya.Label;
		public surpassAvatar:Laya.Image;
		public fraction:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"visible":false,"height":1136},"child":[{"type":"HBox","props":{"y":20,"x":20,"space":20,"align":"middle"},"child":[{"type":"Image","props":{"y":20,"x":20,"var":"hongbao","skin":"inGame/HBao.png","scaleY":1.5,"scaleX":1.5,"name":"hongbao"},"child":[{"type":"Image","props":{"y":-10,"x":33,"width":35,"visible":true,"var":"prompt_1","skin":"inGame/HB_number.png","name":"prompt_1","height":35},"child":[{"type":"Label","props":{"y":1,"var":"hbNumber","text":"0","name":"hbNumber","fontSize":30,"font":"Arial","color":"#fff3da","centerX":0,"bold":true}}]}]},{"type":"Image","props":{"y":39,"x":115,"var":"prompt_0","skin":"inGame/game_end.png","name":"prompt_0"}}]},{"type":"Image","props":{"y":120,"x":20,"width":243,"var":"prompt_surpass","skin":"inGame/coming_soon.png","name":"prompt_surpass","height":102},"child":[{"type":"Label","props":{"y":40,"var":"surpass_fraction","text":"99999","name":"surpass_fraction","left":15,"fontSize":40,"font":"Arial","color":"#e3dd48","bold":true}},{"type":"Image","props":{"width":80,"var":"surpassAvatar","skin":"inGame/wukong.jpg","right":10,"name":"surpassAvatar","height":80,"centerY":0.5}}]},{"type":"Label","props":{"y":200,"var":"fraction","text":"0","strokeColor":"#ebf40e","stroke":5,"name":"fraction","fontSize":100,"font":"Arial","color":"#167dcf","centerX":0,"bold":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.inGameViewUI.uiView);

        }

    }
}

module ui {
    export class inviteGiftUI extends Dialog {
		public viewOff:Laya.Image;
		public invitation:Laya.Label;
		public now_invite:Laya.Image;
		public button_one:Laya.Image;
		public schedule_1:Laya.Label;
		public button_two:Laya.Image;
		public schedule_2:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1164},"child":[{"type":"Image","props":{"y":300,"width":619,"skin":"invite_gift/window.png","height":564,"centerX":0},"child":[{"type":"Image","props":{"y":-15,"x":560,"var":"viewOff","skin":"invite_gift/off.png","name":"viewOff"}},{"type":"Label","props":{"y":255,"var":"invitation","text":"已邀请8位好友，完成以下任务，即可获取奖励!","name":"invitation","fontSize":25,"font":"Arial","color":"#9a8b8b","centerX":0.5,"bold":true}},{"type":"Image","props":{"y":39,"skin":"invite_gift/invate_gift.png","centerX":0}},{"type":"Image","props":{"y":125,"width":551,"skin":"invite_gift/in_view.png","height":117,"centerX":0},"child":[{"type":"HBox","props":{"y":12,"space":15,"centerX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"invite_gift/df_invate.png"}},{"type":"Image","props":{"y":0,"x":102,"skin":"invite_gift/df_invate.png"}},{"type":"Image","props":{"y":0,"x":204,"skin":"invite_gift/df_invate.png"}},{"type":"Image","props":{"y":0,"x":306,"skin":"invite_gift/df_invate.png"}},{"type":"Image","props":{"y":-3,"x":432,"var":"now_invite","skin":"invite_gift/now_invite.png"}}]}]},{"type":"Box","props":{"y":311,"centerX":0},"child":[{"type":"Image","props":{"y":16,"x":389,"var":"button_one","skin":"invite_gift/image_button_1.png","name":"button_one","disabled":true}},{"type":"Image","props":{"skin":"invite_gift/image_do.png"},"child":[{"type":"Image","props":{"y":59,"x":28,"width":62,"skin":"invite_gift/1.png","height":31,"sizeGrid":"4,8,5,11"},"child":[{"type":"Label","props":{"y":3,"x":10,"text":"200","fontSize":25,"font":"Arial","color":"#e3e3e3","bold":true}}]}]},{"type":"Label","props":{"y":12,"x":111,"width":0,"text":"邀请5位好友奖励","fontSize":30,"font":"SimHei","color":"#2a667d"}},{"type":"Label","props":{"y":57,"x":114,"var":"schedule_1","text":"（目标：5/5）","name":"schedule_1","fontSize":25,"font":"SimHei","color":"#2a667d"}}]},{"type":"Box","props":{"y":432,"centerX":0},"child":[{"type":"Image","props":{"y":16,"x":389,"var":"button_two","skin":"invite_gift/image_button_1.png","name":"button_two","disabled":true}},{"type":"Image","props":{"skin":"invite_gift/image_do.png"},"child":[{"type":"Image","props":{"y":59,"x":28,"width":62,"skin":"invite_gift/1.png","height":31,"sizeGrid":"4,8,5,11"},"child":[{"type":"Label","props":{"y":3,"x":10,"text":"500","fontSize":25,"font":"Arial","color":"#e3e3e3","bold":true}}]}]},{"type":"Label","props":{"y":12,"x":111,"width":0,"text":"邀请10位好友奖励","fontSize":30,"font":"SimHei","color":"#2a667d"}},{"type":"Label","props":{"y":57,"x":114,"var":"schedule_2","text":"（目标：5/10）","name":"schedule_2","fontSize":25,"font":"SimHei","color":"#2a667d"}}]},{"type":"Image","props":{"y":416,"skin":"invite_gift/dotted_line.png","centerX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.inviteGiftUI.uiView);

        }

    }
}

module ui {
    export class LeaderboardUI extends Dialog {

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1164}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LeaderboardUI.uiView);

        }

    }
}

module ui {
    export class myHbUI extends Dialog {
		public close_button:Laya.Image;
		public withdraw_button:Laya.Image;
		public balance:Laya.Label;
		public prompt:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"name":"myHb","height":1164},"child":[{"type":"Image","props":{"y":392,"width":655,"skin":"myHbao/myHBao.png","scaleY":0.95,"scaleX":0.95,"left":30,"height":419},"child":[{"type":"Image","props":{"y":20,"x":569,"var":"close_button","skin":"myHbao/off.png","name":"close_button"}},{"type":"Image","props":{"y":340,"width":106,"var":"withdraw_button","skin":"myHbao/image_button.png","right":70,"name":"withdraw_button","height":54},"child":[{"type":"Label","props":{"y":12,"x":27,"text":"提现","fontSize":25,"font":"Arial","color":"#ffffff","bold":true}}]},{"type":"Label","props":{"y":320,"var":"balance","text":"余额: 0 (元)","name":"balance","left":30,"fontSize":32,"font":"SimHei","color":"#fd0400","bold":true}},{"type":"Label","props":{"x":11,"var":"prompt","text":"温馨提示： 红包满20可以提现","name":"prompt","left":30,"fontSize":20,"font":"SimHei","color":"#a39999","bottom":30}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.myHbUI.uiView);

        }

    }
}

module ui {
    export class playDialogUI extends Dialog {
		public testI:Laya.Image;
		public button_close:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"name":"playDialog","height":1164},"child":[{"type":"Image","props":{"y":300,"width":620,"var":"testI","skin":"invite_gift/window.png","name":"testI","centerX":0},"child":[{"type":"Image","props":{"y":-15,"x":558,"var":"button_close","skin":"invite_gift/off.png","name":"button_close"}},{"type":"Image","props":{"y":43,"x":197,"skin":"player/wanfajies.png","scaleY":1.2,"scaleX":1.2}},{"type":"Label","props":{"y":152,"wordWrap":true,"width":515,"text":"    躲避障碍，跳中白圈可增加分数，砖石可以用来兑换皮肤，红包就几率获得现金红包（满20元可以提现）","height":300,"fontSize":50,"font":"Arial","color":"#0b6cc5","centerX":0.5,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.playDialogUI.uiView);

        }

    }
}
