
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class gameViewUI extends View {
		public right_frame:Laya.Image;
		public reward:Laya.Image;
		public tuiqian:Laya.Image;
		public my_hb:Laya.Image;
		public hb_timer:laya.display.Text;
		public left_frame:Laya.Image;
		public music_off:Laya.Image;
		public invite:Laya.Image;
		public jieshao:Laya.Image;
		public add_xcx:Laya.Image;
		public logo:Laya.Image;
		public box_fraction:Laya.Box;
		public crown:Laya.Image;
		public fraction:laya.display.Text;
		public box_do:Laya.Box;
		public diamond:Laya.Image;
		public prompt_box:Laya.Box;
		public boot_prompt:Laya.Image;
		public guide:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"name":"gamehome","height":1280},"child":[{"type":"Image","props":{"y":230,"width":150,"var":"right_frame","skin":"ui/图标框1.png","right":0,"name":"right_frame","height":450},"child":[{"type":"Image","props":{"y":170,"x":30,"width":100,"var":"reward","skin":"ui/image_reward.png","right":20,"name":"reward","height":100}},{"type":"Image","props":{"y":320,"x":30,"width":100,"var":"tuiqian","skin":"ui/image_tuiqian.png","right":20,"name":"tuiqian","height":100}},{"type":"Image","props":{"y":20,"x":30,"width":100,"var":"my_hb","skin":"ui/image_myhb.png","name":"my_hb","height":100},"child":[{"type":"Text","props":{"y":40,"x":24,"var":"hb_timer","text":"20:00","name":"hb_timer","fontSize":20,"color":"#f8e4e4","bold":true}}]}]},{"type":"Image","props":{"y":230,"x":0,"width":150,"var":"left_frame","skin":"ui/图标框2.png","name":"left_frame","left":0,"height":450},"child":[{"type":"Image","props":{"y":20,"x":20,"width":100,"var":"music_off","skin":"ui/music_off.png","name":"music_off","left":20,"height":100}},{"type":"Image","props":{"y":170,"x":20,"width":100,"var":"invite","skin":"ui/image_invite.png","name":"invite","left":20,"height":100}},{"type":"Image","props":{"y":320,"x":20,"width":100,"var":"jieshao","skin":"ui/image_jieshao.png","name":"jieshao","left":20,"height":100}}]},{"type":"Image","props":{"y":20,"x":450,"var":"add_xcx","skin":"ui/image_addxcx.png","name":"add_xcx"}},{"type":"Image","props":{"y":84,"x":130,"width":460,"var":"logo","skin":"ui/image_logo.png","name":"logo","height":205}},{"type":"Box","props":{"y":257,"x":259,"var":"box_fraction","name":"box_fraction"},"child":[{"type":"Image","props":{"y":9,"x":9,"width":50,"var":"crown","skin":"ui/image_crown.png","name":"crown","height":50}},{"type":"Text","props":{"y":0,"x":78,"var":"fraction","text":"2666","name":"fraction","fontSize":50,"font":"Microsoft YaHei","color":"#2d71d6","bold":true}}]},{"type":"Box","props":{"y":11,"x":20,"var":"box_do","name":"box_do"},"child":[{"type":"Image","props":{"y":9,"width":50,"var":"diamond","skin":"ui/image_do.png","name":"diamond","height":50}},{"type":"Text","props":{"x":73,"text":"888","fontSize":50,"font":"Microsoft YaHei","color":"#2d71d6","bold":true}}]},{"type":"Image","props":{"y":850,"skin":"ui/image_Leaderboard.png","right":0}},{"type":"Image","props":{"y":850,"skin":"ui/image_ballSkin.png","left":0}},{"type":"Box","props":{"y":1100,"x":200,"var":"prompt_box","name":"prompt_box"},"child":[{"type":"Image","props":{"var":"boot_prompt","skin":"ui/image_boot_prompt.png","name":"boot_prompt","alpha":0.8}},{"type":"Image","props":{"x":50,"width":49,"var":"guide","skin":"ui/image_guide.png","name":"guide","height":89,"alpha":0.8}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.gameViewUI.uiView);

        }

    }
}
