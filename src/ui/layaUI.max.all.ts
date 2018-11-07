
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class deadViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.deadViewUI.uiView);

        }

    }
}

module ui {
    export class gameViewUI extends View {
		public add_xcx:Laya.Image;
		public boot_prompt:Laya.Image;
		public diamond:Laya.Image;
		public guide:Laya.Image;
		public reward:Laya.Image;
		public tuiqian:Laya.Image;
		public music_off:Laya.Image;
		public logo:Laya.Image;
		public invite:Laya.Image;
		public crown:Laya.Image;
		public jieshao:Laya.Image;
		public my_hb:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":720,"name":"gamehome","height":1280},"child":[{"type":"Image","props":{"y":20,"x":450,"var":"add_xcx","skin":"ui/image_addxcx.png","name":"add_xcx"}},{"type":"Image","props":{"y":1100,"x":215,"var":"boot_prompt","skin":"ui/image_boot_prompt.png","name":"boot_prompt","alpha":0.8}},{"type":"Image","props":{"y":20,"x":20,"width":50,"var":"diamond","skin":"ui/image_do.png","name":"diamond","height":50}},{"type":"Image","props":{"y":1100,"x":250,"width":49,"var":"guide","skin":"ui/image_guide.png","name":"guide","height":89,"alpha":0.8}},{"type":"Image","props":{"y":400,"x":600,"width":100,"var":"reward","skin":"ui/image_reward.png","right":20,"name":"reward","height":100}},{"type":"Image","props":{"y":550,"width":100,"var":"tuiqian","skin":"ui/image_tuiqian.png","right":20,"name":"tuiqian","height":100}},{"type":"Image","props":{"y":250,"width":100,"var":"music_off","skin":"ui/music_off.png","name":"music_off","left":20,"height":100}},{"type":"Image","props":{"y":84,"x":144,"width":460,"var":"logo","skin":"ui/image_logo.png","name":"logo","height":205}},{"type":"Image","props":{"y":400,"width":100,"var":"invite","skin":"ui/image_invite.png","name":"invite","left":20,"height":100}},{"type":"Image","props":{"y":266,"x":250,"width":50,"var":"crown","skin":"ui/image_crown.png","name":"crown","height":50}},{"type":"Image","props":{"y":550,"width":100,"var":"jieshao","skin":"ui/image_jieshao.png","name":"jieshao","left":20,"height":100}},{"type":"Image","props":{"y":250,"x":600,"width":100,"var":"my_hb","skin":"ui/image_myhb.png","name":"my_hb","height":100}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gameViewUI.uiView);

        }

    }
}
